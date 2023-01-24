FROM openjdk
WORKDIR user/lib
EXPOSE 8097
ADD ./target/email-service-0.0.1-SNAPSHOT.jar  /user/lib/email-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","email-service-0.0.1-SNAPSHOT.jar"]