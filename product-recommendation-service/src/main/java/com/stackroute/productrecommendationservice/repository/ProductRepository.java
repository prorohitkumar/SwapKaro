package com.stackroute.productrecommendationservice.repository;

import com.stackroute.productrecommendationservice.model.Product;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends Neo4jRepository<Product,Integer> {

//    @Query("Match (p:Product) where p.productCategory=$category return p")
    @Query("Match (a:Product),(b:ProductCategory) where (a.productCategory)=$category and (b.productCategory)=$category create (a)-[r:from]->(b) return a")
    public List<Product> getProductByCategory(String category);
//    @Query("Match (p:Product) where p.location=$location return p")
    @Query("Match (a:Product),(b:Location) where (a.state)=$state and (b.state)=$state create (a)-[r:from]->(b) return a")
    public List<Product> getProductByState(String state);

    @Query("Match (a:Product),(b:Location) where (a.city)=$city and (b.city)=$city create (a)-[r:from]->(b) return a")
    public List<Product> getProductByCity(String city);

    @Query("Match (a:Product),(b:Location) where (a.state)=$state and (b.state)=$state and (a.city)=$city and (b.city)=$city create (a)-[r:from]->(b) return a")
    public List<Product> getProductByStateAndCity(String state,String city);

    @Query("Match (a:Product),(b:Location),(c:ProductCategory) where (a.productCategory)=$category and (c.productCategory)=$category and (a.city)=$city and (b.city)=$city create (a)-[:from]->(b) create (a)-[:belongs]->(c) return a")
    public List<Product> getProductByCategoryAndCity(String category,String city);

    @Query("Match (a:Product),(b:Location),(c:ProductCategory) where (a.productCategory)=$category and (c.productCategory)=$category and (a.city)=$state and (b.city)=$state create (a)-[:from]->(b) create (a)-[:belongs]->(c) return a")
    public List<Product> getProductByCategoryAndState(String category,String state);

    @Query("Match (a:Product{productId:$productId}),(b:Location{city:$city}) MERGE (a)-[r:located]->(b) ")
    public void createProductLocationRelationship(int productId,String city);

    @Query("Match (a:Product),(b:Location{city:$city}) WHERE (a)-[:located]->(b) return a")
    public List<Product> getAllRecommendationByCity(String city );

    @Query("Match (a:Product{productId:$productId}),(b:ProductCategory{productCategory:$category}) MERGE (a)-[r:category]->(b) ")
    public void createProductCategoryRelationship(int productId,String category);

}
