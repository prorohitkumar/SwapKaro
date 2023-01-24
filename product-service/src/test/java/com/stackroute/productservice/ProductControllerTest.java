//package com.stackroute.productservice;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.stackroute.productservice.controller.ProductController;
//import com.stackroute.productservice.exception.ProductAlreadyExistException;
//import com.stackroute.productservice.model.Address;
//import com.stackroute.productservice.model.ModeOfPayment;
//import com.stackroute.productservice.model.Product;
//import com.stackroute.productservice.model.ProductStatus;
//import com.stackroute.productservice.service.ProductService;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.Date;
//import java.util.List;
//
//import static org.mockito.Mockito.when;
//
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.Mockito.*;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//
//@ExtendWith(MockitoExtension.class)
//public class ProductControllerTest {
//    Date date1;
//    Address address1;
//    @Autowired
//    MockMvc mockMvc;
//
//    @Mock
//    ProductService productService;
//
//    @InjectMocks
//    ProductController productController;
//
//    Product product1;
//
//    @BeforeEach
//    public void setUp() {
////        product1 = new Product();
//        date1=new Date();
//        List<String> exchangeItems1= Arrays.asList("cat","parrot");
//
////        exchangeItems1.add("chair");
//        address1=new Address("25","b.n street","karnataka","bangalore","363636");
//        product1 = new Product("dog",164374000,date1,"Others","animal",address1,"it is a pitbull and 2 years old",1, ProductStatus.AVAILABLE, ModeOfPayment.BOTH,22,exchangeItems1,"bb@gmail.com",3,null,null);
//        System.out.println(product1);
//
//        mockMvc = MockMvcBuilders.standaloneSetup(productController).build();
////
//    }
//
////    @AfterEach
////    public void tearDown() {
////        product1 = null;
////
////    }
//
//    @Test
//    public void givenProductToSaveReturnSaveProduct() throws Exception {
////        product1=new Product();
//        when(productService.saveProduct(any(),any())).thenReturn(product1);
//        mockMvc.perform(post("/api/v1/product")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(jsonToString(product1)))
//                .andExpect(status().isCreated()).andDo(MockMvcResultHandlers.print());
////        verify(productService, times(1)).saveProduct(any(),any());
//    }
//    @Test
//    public void givenProductToSaveProductFailure() throws Exception {
//        when(productService.saveProduct(any(),any())).thenThrow(ProductAlreadyExistException.class);
//        mockMvc.perform(post("/api/v1/product")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(jsonToString(product1)))
//                .andExpect(status().isConflict()).andDo(MockMvcResultHandlers.print());
//        verify(productService, times(1)).saveProduct(any(),any());
//    }
//    @Test
//    public void getProductDetail() throws Exception{
//        List<Product> productList= Arrays.asList(new Product());
//        when(productService.getAllProducts()).thenReturn(productList);
//        mockMvc.perform(get("/api/v1/products"))
//                .andExpect(status().isOk());
//    }
//
//
//
//    private static String jsonToString(final Object o) throws JsonProcessingException {
//        String result;
//        try {
//            ObjectMapper mapper = new ObjectMapper();
//            String jsonContent = mapper.writeValueAsString(o);
//            result = jsonContent;
//            return result;
//
//        } catch (JsonProcessingException e) {
//            result = "JsonProcessingException";
//        }
//        return result;
//    }
//
//
//}
