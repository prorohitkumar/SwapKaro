//package com.stackroute.productservice;
//
//import com.stackroute.productservice.model.Address;
//import com.stackroute.productservice.model.ModeOfPayment;
//import com.stackroute.productservice.model.Product;
//import com.stackroute.productservice.model.ProductStatus;
//import com.stackroute.productservice.repository.ProductRepository;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//
//import java.util.Date;
//import java.util.List;
//import java.util.Optional;
//
//import static org.junit.Assert.assertEquals;
//import static org.junit.Assert.assertNotNull;
//
//@ExtendWith(SpringExtension.class)
//@DataMongoTest
//public class ProductRepositoryTest {
//    private Product product;
//    private Address address;
//    private ProductRepository productRepository;
//    @Autowired
//    public ProductRepositoryTest(ProductRepository productRepository) {
//        this.productRepository = productRepository;
//    }
//
//    @BeforeEach
//    public void setUp() {
//        Date date=new Date();
//        product = new Product(1,"dog",1643740,date,"Others","animal",address,"it is a pitbull and 2 years old",1, ProductStatus.AVAILABLE,ModeOfPayment.COINS,22,null,"bb@gmail.com",3,null,null);
//        address=new Address("25","b.n street","karnataka","bangalore","363636");
//    }
//    @AfterEach
//    public void tearDown() {
//        product = null;
//        address=null;
//        productRepository.deleteAll();
//    }
//    @Test
//    public void givenProductToSaveReturnProduct() {
//        productRepository.insert(product);
//        Product product1 = productRepository.findById(product.getProductId()).get();
//        assertNotNull(product1);
//        assertEquals(product.getProductId(), product1.getProductId());
//    }
//
//
//    @Test
//    public void givenTrackReturnAllProduct() {
//        productRepository.insert(product);
//        List<Product> list = productRepository.findAll();
//        assertEquals(1, list.size());
//        assertEquals("dog", list.get(0).getProductName());
//    }
//    @Test
//    public void givenProductToDeleteShouldReturnDeleteProduct() {
//        productRepository.insert(product);
//        Product product1 = productRepository.findById(product.getProductId()).get();
//        productRepository.delete(product1);
//        assertEquals(Optional.empty(), productRepository.findById(product1.getProductId()));
//
//    }
//
//
//
//}
