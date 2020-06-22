declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace RedisKeyValueTemplate {
                        /**
                         * Redis specific {@link KeyValueCallback}.
                         * @author Christoph Strobl
                         * @param <T>
                         * @since 1.7
                         */
                        // @ts-ignore
                        abstract class RedisKeyValueCallback<T> extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public doInKeyValue(adapter: KeyValueAdapter): T
                            // @ts-ignore
                            public abstract doInRedis(adapter: org.springframework.data.redis.core.RedisKeyValueAdapter): T
                        }
                    }
                }
            }
        }
    }
}
