FROM openjdk
WORKDIR user/lib
EXPOSE 8097
ADD ./target/product-service-0.0.1-SNAPSHOT.jar  /user/lib/product-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","product-service-0.0.1-SNAPSHOT.jar"]