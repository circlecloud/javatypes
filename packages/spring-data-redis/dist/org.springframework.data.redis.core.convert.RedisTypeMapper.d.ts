declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * Redis-specific {@link TypeMapper} exposing that {@link BucketPropertyPath}s might contain a type key.
                         * @author Mark Paluch
                         * @since 2.1
                         * @see Bucket.BucketPropertyPath
                         */
                        // @ts-ignore
                        interface RedisTypeMapper {
                            /**
                             * Returns whether the given {@code key} is the type key.
                             * @return {#literal true} if the given {@code key} is the type key.
                             */
                            // @ts-ignore
                            isTypeKey(key: java.lang.String | string): boolean
                        }
                    }
                }
            }
        }
    }
}
