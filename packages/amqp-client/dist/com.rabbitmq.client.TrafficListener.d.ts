declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Contract to log outbound and inbound {@link Command}s.
             * @see ConnectionFactory#setTrafficListener(TrafficListener)
             * @since 5.5.0
             */
            // @ts-ignore
            interface TrafficListener {
                /**
                 * No-op {@link TrafficListener}.
                 */
                // @ts-ignore
                readonly NO_OP: com.rabbitmq.client.TrafficListener
                /**
                 * Notified for each outbound {@link Command}.
                 * @param outboundCommand
                 */
                // @ts-ignore
                write(outboundCommand: com.rabbitmq.client.Command): void
                /**
                 * Notified for each inbound {@link Command}.
                 * @param inboundCommand
                 */
                // @ts-ignore
                read(inboundCommand: com.rabbitmq.client.Command): void
            }
        }
    }
}
