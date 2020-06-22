declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace support {
                    namespace collections {
                        /**
                         * Basic interface for Redis-based collections. Offers access to the {@link RedisOperations} entity used for executing
                         * commands against the backing store.
                         * @author Costin Leau
                         */
                        // @ts-ignore
                        interface RedisStore extends org.springframework.data.redis.core.BoundKeyOperations<java.lang.String | string> {
                            /**
                             * Returns the underlying Redis operations used by the backing implementation.
                             * @return operations never {#literal null}.
                             */
                            // @ts-ignore
                            getOperations(): org.springframework.data.redis.core.RedisOperations<java.lang.String | string, any>
                        }
                    }
                }
            }
        }
    }
}
