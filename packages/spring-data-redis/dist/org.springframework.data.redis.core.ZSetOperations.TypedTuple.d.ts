declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace ZSetOperations {
                        /**
                         * Typed ZSet tuple.
                         */
                        // @ts-ignore
                        interface TypedTuple<V> extends java.lang.Comparable<org.springframework.data.redis.core.ZSetOperations.TypedTuple<V>> {
                            // @ts-ignore
                            getValue(): V
                            // @ts-ignore
                            getScore(): number
                        }
                    }
                }
            }
        }
    }
}
