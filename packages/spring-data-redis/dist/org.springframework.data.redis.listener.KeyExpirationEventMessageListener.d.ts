declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace listener {
                    /**
                     * {@link MessageListener} publishing {@link RedisKeyExpiredEvent}s via {@link ApplicationEventPublisher} by listening
                     * to Redis keyspace notifications for key expirations.
                     * @author Christoph Strobl
                     * @since 1.7
                     */
                    // @ts-ignore
                    class KeyExpirationEventMessageListener extends org.springframework.data.redis.listener.KeyspaceEventMessageListener {
                        /**
                         * Creates new {@link MessageListener} for {@code __keyevent@*__:expired} messages.
                         * @param listenerContainer must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(listenerContainer: org.springframework.data.redis.listener.RedisMessageListenerContainer)
                        // @ts-ignore
                        doRegister(listenerContainer: org.springframework.data.redis.listener.RedisMessageListenerContainer): void
                        // @ts-ignore
                        doHandleMessage(message: org.springframework.data.redis.connection.Message): void
                        /**
                         * Publish the event in case an {@link ApplicationEventPublisher} is set.
                         * @param event can be {#literal null}.
                         */
                        // @ts-ignore
                        publishEvent(event: org.springframework.data.redis.core.RedisKeyExpiredEvent<any>): void
                        // @ts-ignore
                        public setApplicationEventPublisher(applicationEventPublisher: ApplicationEventPublisher): void
                    }
                }
            }
        }
    }
}
