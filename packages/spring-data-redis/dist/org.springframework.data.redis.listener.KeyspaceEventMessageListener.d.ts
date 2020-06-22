declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace listener {
                    /**
                     * Base {@link MessageListener} implementation for listening to Redis keyspace notifications.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    abstract class KeyspaceEventMessageListener extends java.lang.Object implements org.springframework.data.redis.connection.MessageListener {
                        /**
                         * Creates new {@link KeyspaceEventMessageListener}.
                         * @param listenerContainer must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(listenerContainer: org.springframework.data.redis.listener.RedisMessageListenerContainer)
                        // @ts-ignore
                        public onMessage(message: org.springframework.data.redis.connection.Message, pattern: number /*byte*/[]): void
                        /**
                         * Handle the actual message
                         * @param message never {#literal null}.
                         */
                        // @ts-ignore
                        abstract doHandleMessage(message: org.springframework.data.redis.connection.Message): void
                        /**
                         * Initialize the message listener by writing requried redis config for {@literal notify-keyspace-events} and
                         * registering the listener within the container.
                         */
                        // @ts-ignore
                        public init(): void
                        /**
                         * Register instance within the container.
                         * @param container never {#literal null}.
                         */
                        // @ts-ignore
                        doRegister(container: org.springframework.data.redis.listener.RedisMessageListenerContainer): void
                        // @ts-ignore
                        public destroy(): void
                        /**
                         * Set the configuration string to use for {@literal notify-keyspace-events}.
                         * @param keyspaceNotificationsConfigParameter can be {#literal null}.
                         * @since 1.8
                         */
                        // @ts-ignore
                        public setKeyspaceNotificationsConfigParameter(keyspaceNotificationsConfigParameter: java.lang.String | string): void
                        // @ts-ignore
                        public afterPropertiesSet(): void
                    }
                }
            }
        }
    }
}
