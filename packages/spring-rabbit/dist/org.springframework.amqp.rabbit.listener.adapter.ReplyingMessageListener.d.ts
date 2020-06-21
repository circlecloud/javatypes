declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    namespace adapter {
                        /**
                         * A Message Listener that returns a reply - intended for lambda use in a
                         * {@link MessageListenerAdapter}.
                         * @param <T> the request type.
                         * @param <R> the reply type.
                         * @author Gary Russell
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface ReplyingMessageListener<T, R> {
                            /**
                             * Handle the message and return a reply.
                             * @param t the request.
                             * @return the reply.
                             */
                            // @ts-ignore
                            handleMessage(t: T): R
                        }
                    }
                }
            }
        }
    }
}
