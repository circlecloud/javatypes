declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        /**
                         * Listener interface to receive delivery of {@link Message Messages}.
                         * @author Christoph Strobl
                         * @param <S> source message type.
                         * @param <T> target message type.
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface MessageListener<S, T> {
                            /**
                             * Callback invoked on receiving {@link Message}.
                             * @param message never {#literal null}.
                             */
                            // @ts-ignore
                            onMessage(message: org.springframework.data.mongodb.core.messaging.Message<S, T>): void
                        }
                    }
                }
            }
        }
    }
}
