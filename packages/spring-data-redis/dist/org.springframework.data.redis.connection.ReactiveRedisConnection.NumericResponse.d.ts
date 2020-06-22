declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveRedisConnection {
                        /**
                         * {@link CommandResponse} implementation for {@link Number numeric} responses.
                         */
                        // @ts-ignore
                        class NumericResponse<I, O extends java.lang.Number> extends org.springframework.data.redis.connection.ReactiveRedisConnection.CommandResponse<I, O> {
                            // @ts-ignore
                            constructor(input: I, output: O)
                        }
                    }
                }
            }
        }
    }
}
