package com.stackroute.productservice.controller;


import com.stackroute.productservice.QRTemplate;
import com.stackroute.productservice.exception.ProductNotFoundException;
import com.stackroute.productservice.model.Product;
import com.stackroute.productservice.service.ProductService;
import com.stackroute.productservice.service.QRGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Controller
@RequestMapping("/api/v1/")
//@CrossOrigin(origins = "http://localhost:4200")
public class QRController {

    private ProductService productService;
    private ResponseEntity responseEntity;
    private QRGeneratorService qrGeneratorService;

    @Autowired
    public QRController(ProductService productService, QRGeneratorService qrGeneratorService) {
        this.productService = productService;
        this.qrGeneratorService =qrGeneratorService;
    }

    @GetMapping("/qr/{productId}")
    public String getQR(@PathVariable("productId") int productId, Model model) throws IOException, ProductNotFoundException {
        QRTemplate qrTemplate = new QRTemplate("qrimage.html");
        Map<String, String> qrreplacements = new HashMap<String, String>();
        Optional<Product> product = productService.getProductById(productId);
        System.out.println("QRPRoductGet" +product);
        model.addAttribute("productName", product.get().getProductName());
        model.addAttribute("qrCode", product.get().getProductQR());
        return "qrimage";
    }
}
