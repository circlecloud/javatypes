declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace StringRedisConnection {
                        /**
                         * String-friendly ZSet tuple.
                         */
                        // @ts-ignore
                        interface StringTuple extends org.springframework.data.redis.connection.RedisZSetCommands.Tuple {
                            // @ts-ignore
                            getValueAsString(): string
                        }
                    }
                }
            }
        }
    }
}
