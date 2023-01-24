package com.stackroute.productservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.productservice.QRTemplate;
import com.stackroute.productservice.exception.ProductAlreadyExistException;
import com.stackroute.productservice.exception.ProductNotFoundException;
import com.stackroute.productservice.exception.ProductOwnerNotFound;
import com.stackroute.productservice.model.Product;
import com.stackroute.productservice.model.Review;
import com.stackroute.productservice.service.ProductService;
import com.stackroute.productservice.service.QRGeneratorService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.*;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("/api/v1/")
//@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
public class ProductController {
    private ProductService productService;
    private ResponseEntity responseEntity;
    private QRGeneratorService qrGeneratorService;

    @Autowired
    public ProductController(ProductService productService, QRGeneratorService qrGeneratorService) {
        this.productService = productService;
        this.qrGeneratorService = qrGeneratorService;
    }

    @PostMapping("product")
    public ResponseEntity<?> saveProduct(@RequestParam("productfile") String productfile, @RequestParam("file") MultipartFile file) throws IOException, ProductAlreadyExistException {

        Product product = new ObjectMapper().readValue(productfile, Product.class);

        QRTemplate qrTemplate = new QRTemplate("qrGenereate.html");
        Map<String, String> qrreplacements = new HashMap<String, String>();

        qrreplacements.put("productId", String.valueOf(product.getProductId()));
        qrreplacements.put("productName", product.getProductName());
        qrreplacements.put("productDescription", product.getProductDescription());
        qrreplacements.put("productOwner", product.getProductOwner());
        qrreplacements.put("state", product.getAddress().getState());

        String qrMessage = qrTemplate.getTemplate(qrreplacements);
        byte[] qrByteArray = this.qrGeneratorService.generateQR(qrMessage, 1000, 1000);
        System.out.println("Working Fine");
        String encodedQRString = Base64.getEncoder().encodeToString(qrByteArray);
        product.setProductQR(encodedQRString);
        System.out.println("product" + encodedQRString);

        return responseEntity = new ResponseEntity(productService.saveProduct(product, file), HttpStatus.CREATED);
    }


    @GetMapping("products")
    public ResponseEntity<?> getProductDetails() {
        try {
            List<Product> productList = productService.getAllProducts();
            responseEntity = new ResponseEntity<>(productList, HttpStatus.OK);
        } catch (Exception e) {
            responseEntity = new ResponseEntity<>("Error try save after sometime", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @GetMapping("product/availableproducts")
    public ResponseEntity<?> getAvailableProducts() throws Exception {
        //try {
        List<Product> productList = productService.getAvailableProducts();
        responseEntity = new ResponseEntity<>(productList, HttpStatus.OK);
        //}
//        catch (Exception e)
//        {
//            responseEntity=new ResponseEntity<>("Error try save after sometime",HttpStatus.INTERNAL_SERVER_ERROR);
//        }
        return responseEntity;
    }

    @GetMapping("product/{productId}")
    public ResponseEntity<?> getProductById(@PathVariable("productId") int productId) throws ProductNotFoundException {
        try {
            Optional<Product> product = productService.getProductById(productId);
            responseEntity = new ResponseEntity<>(product, HttpStatus.OK);
            System.out.println(productId);
        } catch (Exception e) {
            responseEntity = new ResponseEntity<>("Error try save after sometime", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @GetMapping("product/owner/{productOwner}")
    public ResponseEntity<?> getProductIdByProductOwner(@PathVariable("productOwner") String productOwner) throws ProductOwnerNotFound {
        try {
            List<Integer> productIdList = productService.getProductIdByProductOwner(productOwner);
            responseEntity = new ResponseEntity<>(productIdList, HttpStatus.OK);
        } catch (ProductOwnerNotFound productOwnerNotFound) {
            responseEntity = new ResponseEntity("Product Owner does not exist", HttpStatus.NOT_FOUND);

        } catch (Exception e) {
            responseEntity = new ResponseEntity<>("Error try save after sometime", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @PutMapping("product/exchangeItem")
    public ResponseEntity<?> itemExchange(@RequestParam("buyerProductId") int buyerProductId, @RequestParam("sellerProductId") int sellerProductId) throws ProductNotFoundException {
        try {
            String status = productService.exchangeItems(buyerProductId, sellerProductId);
            responseEntity = new ResponseEntity(status, HttpStatus.OK);
        } catch (ProductNotFoundException productNotFoundException) {
            responseEntity = new ResponseEntity("Product does not exist", HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            responseEntity = new ResponseEntity<>("Error try save after sometime", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @PutMapping("product/updateProductStatus/{sellerProductId}")
    public ResponseEntity<?> updateProductStatusForBarterCoinMode(@PathVariable int sellerProductId) throws ProductNotFoundException {
        try {
            String status = productService.updateProductStatusForBarterCoinMode(sellerProductId);
            responseEntity = new ResponseEntity(status, HttpStatus.OK);
        } catch (ProductNotFoundException productNotFoundException) {
            responseEntity = new ResponseEntity("Product does not exist", HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            responseEntity = new ResponseEntity<>("Error try save after sometime", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @PutMapping("product/review/{productId}")
    public ResponseEntity<?> updateReview(@PathVariable int productId, @RequestBody Review review) throws ProductNotFoundException {
        try {
            String reviewStatus = productService.updateReviews(productId, review);
            responseEntity = new ResponseEntity(reviewStatus, HttpStatus.OK);
        } catch (ProductNotFoundException productNotFoundException) {
            responseEntity = new ResponseEntity("Product does not exist", HttpStatus.NOT_FOUND);
        }
//        catch (Exception e)
//        {
//            responseEntity=new ResponseEntity<>("Error try save after sometime",HttpStatus.INTERNAL_SERVER_ERROR);
//        }
        return responseEntity;
    }

    @GetMapping("product/search/{text}")
    public ResponseEntity<?> searchProduct(@PathVariable String text) throws IOException {
        //try {
        List<Product> searchList = productService.searchProducts(text);
        responseEntity = new ResponseEntity(searchList, HttpStatus.OK);
        //}
//         catch (Exception e)
//        {
//            responseEntity=new ResponseEntity<>("Error try save after sometime",HttpStatus.INTERNAL_SERVER_ERROR);
//        }
        return responseEntity;
    }
}


