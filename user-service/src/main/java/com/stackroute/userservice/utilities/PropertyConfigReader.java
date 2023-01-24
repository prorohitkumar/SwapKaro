package com.stackroute.userservice.utilities;

import org.springframework.beans.factory.annotation.Value;


public class PropertyConfigReader {

    @Value("${com.stackroute.userservice.message.unsufficientcoin}")
    public static String unsufficientCoinMessage;
}
