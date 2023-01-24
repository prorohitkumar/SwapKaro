FROM openjdk
WORKDIR user/lib
EXPOSE 8095
ADD ./target/authentication-service-0.0.1-SNAPSHOT.jar /user/lib/authentication-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","authentication-service-0.0.1-SNAPSHOT.jar"]