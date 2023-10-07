FROM openjdk:17 AS BUILD_IMAGE
RUN apt update && apt install maven -y
RUN git clone https://github.com/saiparthiv/User-Control-Panel.git
RUN cd User-Control-Panel && git checkout master && mvn install

FROM tomcat:9-jre11

RUN rm -rf /usr/local/tomcat/webapps/*

COPY --from=BUILD_IMAGE User-Control-Panel/target/vprofile-v2.war /usr/local/tomcat/webapps/ROOT.war

EXPOSE 8080
CMD ["catalina.sh", "run"]
