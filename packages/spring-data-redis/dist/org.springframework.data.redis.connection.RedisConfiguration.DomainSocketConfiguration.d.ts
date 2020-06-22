declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisConfiguration {
                        /**
                         * Configuration interface suitable for single node redis connections using local unix domain socket.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface DomainSocketConfiguration extends org.springframework.data.redis.connection.RedisConfiguration.WithDomainSocket, org.springframework.data.redis.connection.RedisConfiguration.WithDatabaseIndex, org.springframework.data.redis.connection.RedisConfiguration.WithPassword {
                        }
                    }
                }
            }
        }
    }
}
