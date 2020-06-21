declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Implement this interface in order to be notified of Confirm events.
             * Acks represent messages handled successfully; Nacks represent
             * messages lost by the broker.  Note, the lost messages could still
             * have been delivered to consumers, but the broker cannot guarantee
             * this.
             * Prefer this interface over {@link ConfirmListener} for
             * a lambda-oriented syntax.
             * @see ConfirmListener
             */
            // @ts-ignore
            interface ConfirmCallback {
                // @ts-ignore
                handle(deliveryTag: number /*long*/, multiple: boolean): void
            }
        }
    }
}
