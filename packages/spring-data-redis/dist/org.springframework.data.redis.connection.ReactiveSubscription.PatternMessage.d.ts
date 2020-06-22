declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveSubscription {
                        /**
                         * Value object for a Redis channel message received from a pattern subscription.
                         * @param <P> type of how the pattern is represented.
                         * @param <C> type of how the channel name is represented.
                         * @param <M> type of how the message is represented.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        class PatternMessage<P, C, M> extends org.springframework.data.redis.connection.ReactiveSubscription.ChannelMessage<C, M> {
                            /**
                             * Create a new {@link PatternMessage}.
                             * @param pattern must not be {#literal null}.
                             * @param channel must not be {#literal null}.
                             * @param message must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(pattern: P, channel: C, message: M)
                            /**
                             * Get the pattern that matched the channel.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getPattern(): P
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
