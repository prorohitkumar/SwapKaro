package com.stackroute.producttradingservice.repository;

import com.stackroute.producttradingservice.model.OrderHistory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderHistoryRepository extends MongoRepository<OrderHistory, Integer> {

    @Query("{'sellerName':{$in:[?0]}}")
    List<OrderHistory> getProductBySellerName(String sellerName);

    @Query("{'buyerName':{$in:[?0]}}")
    List<OrderHistory> getProductByBuyerName(String BuyerName);
}
