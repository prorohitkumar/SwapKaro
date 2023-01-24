package com.stackroute.productservice.repository;

import com.stackroute.productservice.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product,Integer> {
    @Query("{'productOwner':{$in:[?0]}}")
    List<Product> getProductByProductOwner(String productOwner);

}
