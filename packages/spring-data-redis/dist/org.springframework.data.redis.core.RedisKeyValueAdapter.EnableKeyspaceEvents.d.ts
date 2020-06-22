declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace RedisKeyValueAdapter {
                        /**
                         * @author Christoph Strobl
                         * @since 1.8
                         */
                        // @ts-ignore
                        class EnableKeyspaceEvents extends java.lang.Enum<org.springframework.data.redis.core.RedisKeyValueAdapter.EnableKeyspaceEvents> {
                            /**
                             * Initializes the {@link KeyExpirationEventMessageListener} on startup.
                             */
                            // @ts-ignore
                            readonly ON_STARTUP: org.springframework.data.redis.core.RedisKeyValueAdapter.EnableKeyspaceEvents
                            /**
                             * Initializes the {@link KeyExpirationEventMessageListener} on first insert having expiration time set.
                             */
                            // @ts-ignore
                            readonly ON_DEMAND: org.springframework.data.redis.core.RedisKeyValueAdapter.EnableKeyspaceEvents
                            /**
                             * Turn {@link KeyExpirationEventMessageListener} usage off. No expiration events will be received.
                             */
                            // @ts-ignore
                            readonly OFF: org.springframework.data.redis.core.RedisKeyValueAdapter.EnableKeyspaceEvents
                            // @ts-ignore
                            values(): org.springframework.data.redis.core.RedisKeyValueAdapter.EnableKeyspaceEvents[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.data.redis.core.RedisKeyValueAdapter.EnableKeyspaceEvents
                        }
                    }
                }
            }
        }
    }
}
