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
                            readonly CHANNEL: org.springframework.amqp.rabbit.connection.CachingConnectionFactory.CacheMode
                            /**
                             * Cache connections and channels within each connection.
                             */
                            // @ts-ignore
                            readonly CONNECTION: org.springframework.amqp.rabbit.connection.CachingConnectionFactory.CacheMode
                            // @ts-ignore
                            values(): org.springframework.amqp.rabbit.connection.CachingConnectionFactory.CacheMode[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.amqp.rabbit.connection.CachingConnectionFactory.CacheMode
                        }
                    }
                }
            }
        }
    }
}
