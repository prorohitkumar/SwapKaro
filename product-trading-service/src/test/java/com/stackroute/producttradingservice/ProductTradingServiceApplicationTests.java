package com.stackroute.producttradingservice;

import com.stackroute.producttradingservice.model.OrderHistory;
import com.stackroute.producttradingservice.repository.OrderHistoryRepository;
import com.stackroute.producttradingservice.service.OrderHistoryServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static junit.framework.TestCase.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
class ProductTradingServiceApplicationTests {

	@Test
	void contextLoads() {
	}

}
