//package com.stackroute.productservice;
//
//import com.stackroute.productservice.exception.ProductAlreadyExistException;
//import com.stackroute.productservice.model.Address;
//import com.stackroute.productservice.model.ModeOfPayment;
//import com.stackroute.productservice.model.Product;
//import com.stackroute.productservice.model.ProductStatus;
//import com.stackroute.productservice.repository.ProductRepository;
//import com.stackroute.productservice.service.ProductServiceImpl;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//import org.springframework.web.multipart.MultipartFile;
//
//import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
//import static org.junit.Assert.assertEquals;
//import static org.junit.Assert.assertThrows;
//import static org.mockito.Mockito.*;
//
//import java.io.IOException;
//import java.util.*;
//
//@ExtendWith(MockitoExtension.class)
//public class ProductServiceTest {
//    private Product product1, product2;
//    private Address address1,address2;
//    private Date date1,date2;
//    MultipartFile file;
//    @Mock
//    private ProductRepository productRepository;
//
//    @InjectMocks
//    private ProductServiceImpl productService;
//
//    @BeforeEach
//    public void setUp() throws IOException {
//       // date1=new Date("2022-06-25");
//       // List<String> exchangeItems1= Arrays.asList("cat","parrot");
////        exchangeItems1.add("chair");
//        address1=new Address("25","b.n street","karnataka","bangalore","363636");
//        product1 = new Product(1, "dog",164374000,null,"Others","animal",address1,"it is a pitbull and 2 years old",1, ProductStatus.AVAILABLE, ModeOfPayment.BOTH,22,null,"bb@gmail.com",3,null,null);
//
//
//
//        }
//
//    @AfterEach
//    public void tearDown() {
//        product1 = null;
//        product2 = null;
//        address1=null;
//        address2=null;
//        date1=null;
//        date2=null;
//    }
//    @Test
//    public void givenProductToSaveReturnSavedProduct() throws ProductAlreadyExistException, IOException {
//        when(productRepository.findById(product1.getProductId())).thenReturn(Optional.empty());
//        when(productRepository.save(product1)).thenReturn(product1);
//        Product product=productRepository.save(product1);
//        assertThat(product.getProductId()).isNotNull();
//        verify(productRepository, times(1)).save(any());
//        verify(productRepository, times(1)).findById(any());
//
//    }
//
//    @Test
//    public void givenProductToSaveReturnProductFailure() {
//        when(productRepository.findById(product1.getProductId())).thenReturn(Optional.ofNullable(product1));
//        assertThrows(ProductAlreadyExistException.class, () -> productService.saveProduct(product1,file));
//        verify(productRepository, times(0)).save(any());
//        verify(productRepository, times(1)).findById(any());
//
//    }
//
//}
