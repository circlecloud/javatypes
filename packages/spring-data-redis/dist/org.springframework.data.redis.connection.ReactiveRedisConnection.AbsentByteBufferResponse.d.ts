declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveRedisConnection {
                        /**
                         * {@link CommandResponse} implementation for {@link ByteBuffer} responses for absent keys.
                         */
                        // @ts-ignore
                        class AbsentByteBufferResponse<I> extends org.springframework.data.redis.connection.ReactiveRedisConnection.ByteBufferResponse<I> {
                            // @ts-ignore
                            constructor(input: I)
                            // @ts-ignore
                            public isPresent(): boolean
                        }
                    }
                }
            }
        }
    }
}
