FROM openjdk:11-jre-slim
WORKDIR usr/lib
ENV MONGO_DATABASE=barterUser
ENV MONGO_URL=mongodb://localhost:27017/barterUser
ADD ./target/user-service-0.0.1-SNAPSHOT.jar /usr/lib/user-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","user-service-0.0.1-SNAPSHOT.jar"]