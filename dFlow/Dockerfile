FROM phusion/passenger-ruby21

ENV HOME=/root
WORKDIR /tmp
RUN git clone --depth=1 https://github.com/ub-digit/dFlow.git

WORKDIR /tmp/dFlow
RUN bundle install

WORKDIR /tmp
RUN mv ./dFlow /opt/dflow
RUN chown -R app:app /opt/dflow

COPY ./dflow_config/* /opt/dflow/config/

COPY ./passenger_config/webapp.conf /etc/nginx/sites-enabled/webapp.conf
COPY ./passenger_config/rails-env.conf /etc/nginx/main.d/rails-env.conf

RUN rm -f /etc/service/nginx/down
RUN rm /etc/nginx/sites-enabled/default

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN mv /opt/dflow/config/passwd.sample /opt/dflow/config/passwd

CMD ["/sbin/my_init"]

EXPOSE 80

#VOLUME /opt/dflow/log/
#VOLUME /var/log/nginx/