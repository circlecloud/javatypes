declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        /**
                         * @author Christoph Strobl
                         * @since 1.3
                         */
                        // @ts-ignore
                        class JedisVersionUtil extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * @return current {#link redis.clients.jedis.Jedis} version.
                             */
                            // @ts-ignore
                            public static jedisVersion(): org.springframework.data.redis.Version
                            /**
                             * @return true if used jedis version is at minimum {#literal 2.4}.
                             */
                            // @ts-ignore
                            public static atLeastJedis24(): boolean
                            /**
                             * Compares given version string against current jedis version.
                             * @param version
                             * @return true in case given version is greater than equal to current one.
                             */
                            // @ts-ignore
                            public static atLeast(version: java.lang.String | string): boolean
                            /**
                             * Compares given version string against current jedis version.
                             * @param version
                             * @return true in case given version is less than equal to current one.
                             */
                            // @ts-ignore
                            public static atMost(version: java.lang.String | string): boolean
                        }
                    }
                }
            }
        }
    }
}
