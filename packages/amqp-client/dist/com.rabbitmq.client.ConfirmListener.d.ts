declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Implement this interface in order to be notified of Confirm events.
             * Acks represent messages handled successfully; Nacks represent
             * messages lost by the broker.  Note, the lost messages could still
             * have been delivered to consumers, but the broker cannot guarantee
             * this.
             * For a lambda-oriented syntax, use {@link ConfirmCallback}.
             */
            // @ts-ignore
            interface ConfirmListener {
                // @ts-ignore
                handleAck(deliveryTag: number /*long*/, multiple: boolean): void
                // @ts-ignore
                handleNack(deliveryTag: number /*long*/, multiple: boolean): void
            }
        }
    }
}
