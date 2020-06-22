declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace listener {
                    /**
                     * Channel topic implementation (maps to a Redis channel).
                     * @author Costin Leau
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    class ChannelTopic extends java.lang.Object implements org.springframework.data.redis.listener.Topic {
                        /**
                         * Constructs a new {@link ChannelTopic} instance.
                         * @param name must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string)
                        /**
                         * Create a new {@link ChannelTopic} for channel subscriptions.
                         * @param name the channel name, must not be {#literal null} or empty.
                         * @return the {#link ChannelTopic} for {@code channelName}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static of(name: java.lang.String | string): org.springframework.data.redis.listener.ChannelTopic
                        /**
                         * @return topic name.
                         */
                        // @ts-ignore
                        public getTopic(): string
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
