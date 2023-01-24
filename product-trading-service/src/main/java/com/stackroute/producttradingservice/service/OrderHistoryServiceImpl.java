package com.stackroute.producttradingservice.service;

import com.stackroute.producttradingservice.exception.OrderHistoryException;
import com.stackroute.producttradingservice.model.AutoGenerateId;
import com.stackroute.producttradingservice.model.OrderHistory;
import com.stackroute.producttradingservice.repository.OrderHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service

public class OrderHistoryServiceImpl implements OrderHistoryService {

    private OrderHistoryRepository orderHistoryRepository;

    private MongoOperations mongoOperations;


    @Autowired
    public OrderHistoryServiceImpl(OrderHistoryRepository orderHistoryRepository, MongoOperations mongoOperations) {
        this.orderHistoryRepository = orderHistoryRepository;
        this.mongoOperations = mongoOperations;
    }


    @Override
    public OrderHistory saveOrderHistory(OrderHistory orderHistory) throws IOException {
        orderHistory.setDateOfTransaction(LocalDate.now());
        orderHistory.setOrderId(getSequence("ORD" +OrderHistory.Sequence_Number));
        return orderHistoryRepository.save(orderHistory);
    }


    @Override
    public List<OrderHistory> getAllOrderHistories() {
        return (List<OrderHistory>) orderHistoryRepository.findAll();
    }

    @Override
    public List<OrderHistory> getProductByEmail(String email) throws OrderHistoryException {

        List<OrderHistory> orders=new ArrayList<>();
        if(orderHistoryRepository.getProductByBuyerName(email).isEmpty() &&
                orderHistoryRepository.getProductBySellerName(email).isEmpty()){
            throw  new OrderHistoryException("No order Available ");
        }
        if(orderHistoryRepository.getProductByBuyerName(email).size()>0){
            orderHistoryRepository.getProductByBuyerName(email).forEach(purchasedOrder->{
                orders.add(purchasedOrder);
            });
        }
        if(orderHistoryRepository.getProductBySellerName(email).size()>0){
            orderHistoryRepository.getProductBySellerName(email).forEach(soldOrder->{
                orders.add(soldOrder);
            });
        }

        return orders;
    }

    public int getSequence(String seqName) {

        Query query=new Query(Criteria.where("id").is(seqName));
        Update update=new Update().inc("seq",1);
        AutoGenerateId counter=mongoOperations.findAndModify(query,update,
                FindAndModifyOptions.options().returnNew(true).upsert(true),AutoGenerateId.class);
        return !Objects.isNull(counter) ? counter.getSeq(): 1;
    }
    @Override
    public Optional<OrderHistory> getOrderHistoryByOrderId(int orderId) throws OrderHistoryException {
        if (orderHistoryRepository.findById(orderId).isEmpty()) {
            throw new OrderHistoryException();
        }
        return orderHistoryRepository.findById(orderId);
    }

}
