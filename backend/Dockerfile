FROM ruby:2.6

ENV TZ='Asia/Tokyo'
RUN apt update -qq &&\
    apt install -y build-essential libpq-dev nodejs yarn vim

WORKDIR /backend
COPY Gemfile ./
COPY Gemfile.lock ./
RUN bundle install
COPY . .

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 8080