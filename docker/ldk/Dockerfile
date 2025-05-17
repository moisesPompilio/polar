FROM rust:latest

WORKDIR /app

RUN apt-get update && apt-get install -y \
  git \
  && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/lightningdevkit/ldk-server.git ldk-server-git

RUN mv ldk-server-git/* /app && rm -rf ldk-server-git

RUN cargo build --release

COPY docker-entrypoint.sh /entrypoint.sh
COPY bashrc /home/ldk/.bashrc

RUN chmod a+x /entrypoint.sh

VOLUME ["/home/ldk/.ldk"]

EXPOSE 3001 3002

ENTRYPOINT ["/entrypoint.sh"]

CMD ["/app/target/release/ldk-server", "/app/ldk-server/ldk-server-config.toml"]