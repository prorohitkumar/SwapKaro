package com.stackroute.productservice.service;

import com.stackroute.productservice.config.Producer;
import com.stackroute.productservice.exception.ProductAlreadyExistException;
import com.stackroute.productservice.exception.ProductNotFoundException;
import com.stackroute.productservice.exception.ProductOwnerNotFound;
import com.stackroute.productservice.model.*;
import com.stackroute.productservice.rabbitmq.model.ProductDTO;

import com.stackroute.productservice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.index.TextIndexDefinition;
import org.springframework.data.mongodb.core.query.*;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import java.util.*;


@Service
public class ProductServiceImpl implements ProductService {
    private ProductRepository productRepository;
    private MongoOperations mongoOperations;

    private MongoTemplate mongoTemplate;
    private Producer producer;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository, MongoOperations mongoOperations, Producer producer, MongoTemplate mongoTemplate) {
        this.productRepository = productRepository;
        this.mongoOperations = mongoOperations;
        this.producer = producer;
        this.mongoTemplate = mongoTemplate;
    }


    @Override
    public Product saveProduct(Product product, MultipartFile file) throws IOException, ProductAlreadyExistException {
        if (productRepository.findById((product.getProductId())).isPresent()) {
            throw new ProductAlreadyExistException();
        }
        product.setProductImage(file.getBytes());
        product.setProductId(getSequenceNo(Product.SEQUENCE_NAME));
        product.setRatings(3);
        product.setProductStatus(ProductStatus.AVAILABLE);
        productRepository.save(product);
        producer.sendMessageToRabbitmq(new ProductDTO(
                product.getProductId(), product.getProductName(), product.getDateOfPosting(), product.getProductOwner(), product.getModeOfPayment().toString(), product.getProductCategory(),
                product.getAddress().getPincode(), product.getAddress().getState(), product.getAddress().getCity(), product.getProductDescription(),
                product.getProductImage()
        ));
        return product;
    }


    @Override
    public List<Product> getAllProducts() throws Exception {
        List productList = productRepository.findAll();
        Collections.reverse(productList);
        return productList;
    }

    @Override
    public Optional<Product> getProductById(int productId) throws ProductNotFoundException {
        if (productRepository.findById(productId).isEmpty()) {
            throw new ProductNotFoundException();
        }
        return productRepository.findById(productId);
    }

    @Override
    public List<Product> getAvailableProducts() throws Exception {
        List<Product> productList = productRepository.findAll();
        List<Product> availableProductList = new ArrayList<>();
        for (Product product : productList) {

            if (product.getProductStatus().equals(ProductStatus.AVAILABLE)) {
                availableProductList.add(product);
            }
        }
        Collections.reverse(availableProductList);
        return availableProductList;
    }

    @Override
    public List<Integer> getProductIdByProductOwner(String productOwner) throws ProductOwnerNotFound {
        if (productRepository.getProductByProductOwner(productOwner).isEmpty()) {
            throw new ProductOwnerNotFound();
        } else {
            List<Product> productList = productRepository.getProductByProductOwner(productOwner);
            List<Integer> productIdList = new ArrayList<>();
            for (Product p : productList) {
                if (p.getModeOfPayment().equals(ModeOfPayment.BARTERING) && p.getProductStatus().equals(ProductStatus.AVAILABLE)) {
                    productIdList.add(p.getProductId());
                }
            }
            return productIdList;
        }
    }

    @Override
    public String exchangeItems(int buyerProductId, int sellerProductId) throws ProductNotFoundException {
        if (productRepository.findById(buyerProductId).isEmpty() || productRepository.findById(sellerProductId).isEmpty()) {
            throw new ProductNotFoundException();
        }
        Product buyerProduct = productRepository.findById(buyerProductId).get();
        Product sellerProduct = productRepository.findById(sellerProductId).get();
        buyerProduct.setProductStatus(ProductStatus.NOTAVAILABLE);
        sellerProduct.setProductStatus(ProductStatus.NOTAVAILABLE);
        productRepository.save(buyerProduct);
        productRepository.save(sellerProduct);
        return ("Items exchanged successfully");
    }


    @Override
    public String updateProductStatusForBarterCoinMode(int sellerProductId) throws ProductNotFoundException {
        if (productRepository.findById(sellerProductId).isEmpty()) {
            throw new ProductNotFoundException();
        }
        Product sellerProduct = productRepository.findById(sellerProductId).get();
        sellerProduct.setProductStatus(ProductStatus.NOTAVAILABLE);
        productRepository.save(sellerProduct);
        return ("Items exchanged successfully");
    }

    @Override
    public String updateReviews(int productId, Review review) throws ProductNotFoundException {
        if (productRepository.findById(productId).isEmpty()) {
            throw new ProductNotFoundException();
        }
        Product product = productRepository.findById(productId).get();
        List<Review> reviewList = new ArrayList<>();

        if (product.getReviews() == null) {
            reviewList.add(review);
            product.setReviews(reviewList);
            productRepository.save(product);
        } else {
            List<Review> newReviewList = product.getReviews();
            newReviewList.add(review);
            product.setReviews(newReviewList);
            productRepository.save(product);
        }
        if (product.getReviews() == null) {
            reviewList.add(review);
            product.setReviews(reviewList);
            productRepository.save(product);
        } else {
            List<Review> newReviewList = product.getReviews();
            newReviewList.add(review);
            product.setReviews(newReviewList);
            productRepository.save(product);
        }

        return "reviews updated";
    }

    @Override

    public List<Product> searchProducts(String keywords) throws IOException {
        TextIndexDefinition textIndex = new TextIndexDefinition.TextIndexDefinitionBuilder().onFields("productName", "productCategory", "categoryDescription", "address", "productDescription", "modeOfPayment", "exchangeItems").build();
        mongoTemplate.indexOps(Product.class).ensureIndex(textIndex);
        TextCriteria criteria = TextCriteria.forDefaultLanguage().matching(keywords);
        Query query = TextQuery.queryText(criteria).sortByScore();
        List<Product> searchList = mongoTemplate.find(query, Product.class);
        return searchList;
    }

    public int getSequenceNo(String sequenceName) {

        Query query = new Query(Criteria.where("id").is(sequenceName));
        Update update = new Update().inc("seqNo", 1);
        DbSequence counter = mongoOperations.findAndModify(query, update,
                FindAndModifyOptions.options().returnNew(true).upsert(true), DbSequence.class);
        return !Objects.isNull(counter) ? counter.getSeqNo() : 1;
    }


}




