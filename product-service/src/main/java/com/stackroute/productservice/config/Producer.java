package com.stackroute.productservice.config;

import com.stackroute.productservice.rabbitmq.model.ProductDTO;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Producer {
    private RabbitTemplate rabbitTemplate;
    private DirectExchange exchange;

    @Autowired
    Producer(RabbitTemplate rabbitTemplate,DirectExchange exchange)
    {
        this.rabbitTemplate=rabbitTemplate;
        this.exchange=exchange;
    }
    public void sendMessageToRabbitmq(ProductDTO productDTO)
    {
        rabbitTemplate.convertAndSend(exchange.getName(),"product_routing",productDTO);
    }
}
