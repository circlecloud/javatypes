declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Callback interface to be notified when either the consumer channel
             * or the underlying connection has been shut down.
             * Prefer it over {@link Consumer} for a lambda-oriented syntax,
             * if you don't need to implement all the application callbacks.
             * @see CancelCallback
             * @see DeliverCallback
             * @see Channel#basicConsume(String, boolean, String, boolean, boolean, Map, DeliverCallback, CancelCallback)
             * @see Channel#basicConsume(String, boolean, String, boolean, boolean, Map, DeliverCallback, ConsumerShutdownSignalCallback)
             * @see Channel#basicConsume(String, boolean, String, boolean, boolean, Map, DeliverCallback, CancelCallback, ConsumerShutdownSignalCallback)
             * @since 5.0
             */
            // @ts-ignore
            interface ConsumerShutdownSignalCallback {
                /**
                 * Called when either the channel or the underlying connection has been shut down.
                 * @param consumerTag the <i>consumer tag</i> associated with the consumer
                 * @param sig a {#link ShutdownSignalException} indicating the reason for the shut down
                 */
                // @ts-ignore
                handleShutdownSignal(consumerTag: java.lang.String | string, sig: com.rabbitmq.client.ShutdownSignalException): void
            }
        }
    }
}
