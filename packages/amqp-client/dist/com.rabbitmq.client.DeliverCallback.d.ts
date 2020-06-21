declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Callback interface to be notified when a message is delivered.
             * Prefer it over {@link Consumer} for a lambda-oriented syntax,
             * if you don't need to implement all the application callbacks.
             * @see CancelCallback
             * @see ConsumerShutdownSignalCallback
             * @see Channel#basicConsume(String, boolean, String, boolean, boolean, Map, DeliverCallback, CancelCallback)
             * @see Channel#basicConsume(String, boolean, String, boolean, boolean, Map, DeliverCallback, ConsumerShutdownSignalCallback)
             * @see Channel#basicConsume(String, boolean, String, boolean, boolean, Map, DeliverCallback, CancelCallback, ConsumerShutdownSignalCallback)
             * @since 5.0
             */
            // @ts-ignore
            interface DeliverCallback {
                /**
                 * Called when a <code><b>basic.deliver</b></code> is received for this consumer.
                 * @param consumerTag the <i>consumer tag</i> associated with the consumer
                 * @param message the delivered message
                 * @throws IOException if the consumer encounters an I/O error while processing the message
                 */
                // @ts-ignore
                handle(consumerTag: java.lang.String | string, message: com.rabbitmq.client.Delivery): void
            }
        }
    }
}
