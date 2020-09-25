declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    namespace CachingConnectionFactory {
                        /**
                         * The cache mode.
                         */
                        // @ts-ignore
                        class CacheMode extends java.lang.Enum<org.springframework.amqp.rabbit.connection.CachingConnectionFactory.CacheMode> {
                            /**
                             * Cache channels - single connection.
                             */
                            // @ts-ignore
                            public static readonly CHANNEL: org.springframework.amqp.rabbit.connection.CachingConnectionFactory.CacheMode
                            /**
                             * Cache connections and channels within each connection.
                             */
                            // @ts-ignore
                            public static readonly CONNECTION: org.springframework.amqp.rabbit.connection.CachingConnectionFactory.CacheMode
                            // @ts-ignore
                            public static values(): org.springframework.amqp.rabbit.connection.CachingConnectionFactory.CacheMode[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.springframework.amqp.rabbit.connection.CachingConnectionFactory.CacheMode
                        }
                    }
                }
            }
        }
    }
}
