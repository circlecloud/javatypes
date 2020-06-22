declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveSubscription {
                        /**
                         * {@link Message} represents a Redis channel message within Redis pub/sub.
                         * @param <C> channel representation type.
                         * @param <M> message representation type.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface Message<C, M> {
                            /**
                             * Get the channel the message published to.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getChannel(): C
                            /**
                             * Get the actual message body.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getMessage(): M
                        }
                    }
                }
            }
        }
    }
}
