FROM openjdk
WORKDIR user/lib
ADD ./target/payment-service-0.0.1-SNAPSHOT.jar /user/lib/payment-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","payment-service-0.0.1-SNAPSHOT.jar"]