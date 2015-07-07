FROM phusion/passenger-nodejs

RUN npm install -g bower ember-cli

ENV HOME=/root
WORKDIR /opt
RUN git clone --depth=1 https://github.com/ub-digit/dFlow_ember.git

WORKDIR /opt/dFlow_ember
RUN npm --silent install && \
	bower --silent install --allow-root

ENV DFLOW_URL .

COPY ./environment.js /opt/dFlow_ember/config/environment.js

RUN chown -R app:app /opt/dFlow_ember

EXPOSE 80

ENTRYPOINT ember serve --port 80 --environment production --proxy http://dflow --live-reload false