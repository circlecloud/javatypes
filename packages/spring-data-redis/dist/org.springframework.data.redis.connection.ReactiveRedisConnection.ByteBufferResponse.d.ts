declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveRedisConnection {
                        /**
                         * {@link CommandResponse} implementation for {@link ByteBuffer} responses.
                         */
                        // @ts-ignore
                        class ByteBufferResponse<I> extends org.springframework.data.redis.connection.ReactiveRedisConnection.CommandResponse<I, java.nio.ByteBuffer> {
                            // @ts-ignore
                            constructor(input: I, output: java.nio.ByteBuffer)
                        }
                    }
                }
            }
        }
    }
}
