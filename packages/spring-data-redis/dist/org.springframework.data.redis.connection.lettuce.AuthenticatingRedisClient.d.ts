declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        /**
                         * Extension of {@link RedisClient} that calls auth on all new connections using the supplied credentials
                         * @author Jennifer Hickey
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @deprecated since 1.6 - Please use {#link RedisURI#setPassword(String)}
                         */
                        // @ts-ignore
                        class AuthenticatingRedisClient extends RedisClient {
                            // @ts-ignore
                            constructor(host: java.lang.String | string, port: number /*int*/, password: java.lang.String | string)
                            // @ts-ignore
                            constructor(host: java.lang.String | string, password: java.lang.String | string)
                            // @ts-ignore
                            public connect<K, V>(codec: object): object
                            // @ts-ignore
                            public connectPubSub<K, V>(codec: object): object
                        }
                    }
                }
            }
        }
    }
}
