package com.stackroute.userservice.repository;

import com.stackroute.userservice.model.AccountDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AccountRepository extends MongoRepository<AccountDetails,Integer> {
}
