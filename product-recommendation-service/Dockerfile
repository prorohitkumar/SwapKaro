FROM openjdk
WORKDIR user/lib
EXPOSE 8070
ADD ./target/product-recommendation-service-0.0.1-SNAPSHOT.jar /user/lib/product-recommendation-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","product-recommendation-service-0.0.1-SNAPSHOT.jar"]