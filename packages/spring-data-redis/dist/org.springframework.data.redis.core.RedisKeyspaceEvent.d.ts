declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    /**
                     * Redis specific {@link ApplicationEvent} published when a key expires in Redis.
                     * @author Christoph Strobl
                     * @since 1.7
                     */
                    // @ts-ignore
                    class RedisKeyspaceEvent extends ApplicationEvent {
                        /**
                         * Creates new {@link RedisKeyspaceEvent}.
                         * @param key The key that expired. Must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(key: number /*byte*/[])
                        /**
                         * Creates new {@link RedisKeyspaceEvent}.
                         * @param channel The source channel aka subscription topic. Can be {#literal null}.
                         * @param key The key that expired. Must not be {#literal null}.
                         * @since 1.8
                         */
                        // @ts-ignore
                        constructor(channel: java.lang.String | string, key: number /*byte*/[])
                        // @ts-ignore
                        public getSource(): number /*byte*/[]
                        /**
                         * @return can be {#literal null}.
                         * @since 1.8
                         */
                        // @ts-ignore
                        public getChannel(): string
                    }
                }
            }
        }
    }
}
