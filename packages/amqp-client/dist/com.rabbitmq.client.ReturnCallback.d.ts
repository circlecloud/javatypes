declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Implement this interface in order to be notified of failed
             * deliveries when basicPublish is called with "mandatory" or
             * "immediate" flags set.
             * Prefer this interface over {@link ReturnListener} for
             * a simpler, lambda-oriented syntax.
             * @see Channel#basicPublish
             * @see ReturnListener
             * @see Return
             */
            // @ts-ignore
            interface ReturnCallback {
                // @ts-ignore
                handle(returnMessage: com.rabbitmq.client.Return): void
            }
        }
    }
}
