declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Callback interface to be notified of the cancellation of a consumer.
             * Prefer it over {@link Consumer} for a lambda-oriented syntax,
             * if you don't need to implement all the application callbacks.
             * @see DeliverCallback
             * @see ConsumerShutdownSignalCallback
             * @see Channel#basicConsume(String, boolean, String, boolean, boolean, Map, DeliverCallback, CancelCallback)
             * @see Channel#basicConsume(String, boolean, String, boolean, boolean, Map, DeliverCallback, ConsumerShutdownSignalCallback)
             * @see Channel#basicConsume(String, boolean, String, boolean, boolean, Map, DeliverCallback, CancelCallback, ConsumerShutdownSignalCallback)
             * @since 5.0
             */
            // @ts-ignore
            interface CancelCallback {
                /**
                 * Called when the consumer is cancelled for reasons <i>other than</i> by a call to
                 * {@link Channel#basicCancel}. For example, the queue has been deleted.
                 * See {@link Consumer#handleCancelOk} for notification of consumer
                 * cancellation due to {@link Channel#basicCancel}.
                 * @param consumerTag the <i>consumer tag</i> associated with the consumer
                 * @throws IOException
                 */
                // @ts-ignore
                handle(consumerTag: java.lang.String | string): void
            }
        }
    }
}
