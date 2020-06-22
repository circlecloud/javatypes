declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace support {
                    namespace collections {
                        /**
                         * Map view of a Redis hash.
                         * @author Costin Leau
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        interface RedisMap<K, V> extends org.springframework.data.redis.support.collections.RedisStore, java.util.concurrent.ConcurrentMap<K, V> {
                            // @ts-ignore
                            increment(key: K, delta: number /*long*/): number
                            // @ts-ignore
                            increment(key: K, delta: number /*double*/): number
                            /**
                             * @since 1.4
                             * @return 
                             */
                            // @ts-ignore
                            scan(): java.util.Iterator<java.util.Map.Entry<K, V>>
                        }
                    }
                }
            }
        }
    }
}
