FROM phusion/passenger-ruby21

ENV HOME=/root
WORKDIR /tmp
RUN git clone --depth=1 https://github.com/ub-digit/dFile.git

WORKDIR /tmp/dFile
RUN bundle install

WORKDIR /tmp
RUN mv ./dFile /opt/dfile
RUN chown -R app:app /opt/dfile

COPY ./dfile_config/config.rb /opt/dfile/config/initializers/config.rb

RUN mkdir -p /var/file/processing /var/dfile/packaging /var/dfile/store /var/dfile/trash

COPY ./passenger_config/webapp.conf /etc/nginx/sites-enabled/webapp.conf
COPY ./passenger_config/rails-env.conf /etc/nginx/main.d/rails-env.conf

RUN rm -f /etc/service/nginx/down
RUN rm /etc/nginx/sites-enabled/default

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

CMD ["/sbin/my_init"]

EXPOSE 80
