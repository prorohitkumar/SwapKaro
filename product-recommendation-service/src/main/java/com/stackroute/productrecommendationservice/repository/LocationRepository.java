package com.stackroute.productrecommendationservice.repository;

import com.stackroute.productrecommendationservice.model.Location;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends Neo4jRepository<Location,String> {
}
