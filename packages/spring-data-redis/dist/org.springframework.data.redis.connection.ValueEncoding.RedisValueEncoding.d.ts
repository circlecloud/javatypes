declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ValueEncoding {
                        /**
                         * Default {@link ValueEncoding} implementation of encodings used in Redis.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        class RedisValueEncoding extends java.lang.Enum<org.springframework.data.redis.connection.ValueEncoding.RedisValueEncoding> implements org.springframework.data.redis.connection.ValueEncoding {
                            /**
                             * Normal string encoding.
                             */
                            // @ts-ignore
                            readonly RAW: org.springframework.data.redis.connection.ValueEncoding.RedisValueEncoding
                            /**
                             * 64 bit signed interval String representing an integer.
                             */
                            // @ts-ignore
                            readonly INT: org.springframework.data.redis.connection.ValueEncoding.RedisValueEncoding
                            /**
                             * Space saving representation for small lists, hashes and sorted sets.
                             */
                            // @ts-ignore
                            readonly ZIPLIST: org.springframework.data.redis.connection.ValueEncoding.RedisValueEncoding
                            /**
                             * Encoding for large lists.
                             */
                            // @ts-ignore
                            readonly LINKEDLIST: org.springframework.data.redis.connection.ValueEncoding.RedisValueEncoding
                            /**
                             * Space saving representation for small sets that contain only integers.ø
                             */
                            // @ts-ignore
                            readonly INTSET: org.springframework.data.redis.connection.ValueEncoding.RedisValueEncoding
                            /**
                             * Encoding for large hashes.
                             */
                            // @ts-ignore
                            readonly HASHTABLE: org.springframework.data.redis.connection.ValueEncoding.RedisValueEncoding
                            /**
                             * Encoding for sorted sets of any size.
                             */
                            // @ts-ignore
                            readonly SKIPLIST: org.springframework.data.redis.connection.ValueEncoding.RedisValueEncoding
                            /**
                             * No encoding present due to non existing key.
                             */
                            // @ts-ignore
                            readonly VACANT: org.springframework.data.redis.connection.ValueEncoding.RedisValueEncoding
                            // @ts-ignore
                            values(): org.springframework.data.redis.connection.ValueEncoding.RedisValueEncoding[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.data.redis.connection.ValueEncoding.RedisValueEncoding
                            // @ts-ignore
                            raw(): string
                        }
                    }
                }
            }
        }
    }
}
