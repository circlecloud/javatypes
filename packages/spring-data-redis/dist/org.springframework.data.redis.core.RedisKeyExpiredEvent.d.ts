declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * {@link RedisKeyExpiredEvent} is a Redis specific {@link ApplicationEvent} published when a particular key in Redis
                     * expires. It can hold the value of the expired key next to the key, but is not required to do so.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    class RedisKeyExpiredEvent<T> extends org.springframework.data.redis.core.RedisKeyspaceEvent {
                        /**
                         * Creates new {@link RedisKeyExpiredEvent}.
                         * @param key the expired key.
                         */
                        // @ts-ignore
                        constructor(key: number /*byte*/[])
                        /**
                         * Creates new {@link RedisKeyExpiredEvent}
                         * @param key the expired key.
                         * @param value the value of the expired key. Can be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(key: number /*byte*/[], value: java.lang.Object | any)
                        /**
                         * Creates new {@link RedisKeyExpiredEvent}
                         * @param channel the Pub/Sub channel through which this event was received.
                         * @param key the expired key.
                         * @param value the value of the expired key. Can be {#literal null}.
                         * @since 1.8
                         */
                        // @ts-ignore
                        constructor(channel: java.lang.String | string, key: number /*byte*/[], value: java.lang.Object | any)
                        /**
                         * Gets the keyspace in which the expiration occured.
                         * @return {#literal null} if it could not be determined.
                         */
                        // @ts-ignore
                        public getKeyspace(): string
                        /**
                         * Get the expired objects id.
                         * @return the expired objects id.
                         */
                        // @ts-ignore
                        public getId(): number /*byte*/[]
                        /**
                         * Get the expired Object
                         * @return {#literal null} if not present.
                         */
                        // @ts-ignore
                        public getValue(): any
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
