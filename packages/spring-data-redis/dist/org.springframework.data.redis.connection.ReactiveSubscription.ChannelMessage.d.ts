declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveSubscription {
                        /**
                         * Value object for a Redis channel message.
                         * @param <C> type of how the channel name is represented.
                         * @param <M> type of how the message is represented.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        class ChannelMessage<C, M> extends java.lang.Object implements org.springframework.data.redis.connection.ReactiveSubscription.Message<C, M> {
                            /**
                             * Create a new {@link ChannelMessage}.
                             * @param channel must not be {#literal null}.
                             * @param message must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(channel: C, message: M)
                            // @ts-ignore
                            public getChannel(): C
                            // @ts-ignore
                            public getMessage(): M
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
