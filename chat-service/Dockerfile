FROM openjdk
WORKDIR user/lib
EXPOSE 8099
ADD ./target/chat-service-0.0.1-SNAPSHOT.jar /user/lib/chat-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","chat-service-0.0.1-SNAPSHOT.jar"]