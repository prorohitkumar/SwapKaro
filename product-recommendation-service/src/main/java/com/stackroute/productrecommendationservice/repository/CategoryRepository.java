package com.stackroute.productrecommendationservice.repository;

import com.stackroute.productrecommendationservice.model.ProductCategory;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends Neo4jRepository<ProductCategory,String> {
}
