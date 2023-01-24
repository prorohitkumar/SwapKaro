package com.stackroute.producttradingservice;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ProductTradingServiceApplication {

	public static void main(String[] args) {

		SpringApplication.run(ProductTradingServiceApplication.class, args);
	}

}
