declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveRedisConnection {
                        /**
                         * {@link CommandResponse} implementation for {@link List} responses.
                         */
                        // @ts-ignore
                        class MultiValueResponse<I, O> extends org.springframework.data.redis.connection.ReactiveRedisConnection.CommandResponse<I, java.util.List<O> | Array<O>> {
                            // @ts-ignore
                            constructor(input: I, output: java.util.List<O> | Array<O>)
                        }
                    }
                }
            }
        }
    }
}
