declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * {@link TrafficListener} that logs {@link Command} at <code>TRACE</code> level.
                 * <p>
                 * This implementation checks whether the <code>TRACE</code> log level
                 * is enabled before logging anything. This {@link TrafficListener}
                 * should only be activated for debugging purposes, not in a production
                 * environment.
                 * @see TrafficListener
                 * @see com.rabbitmq.client.ConnectionFactory#setTrafficListener(TrafficListener)
                 * @since 5.5.0
                 */
                // @ts-ignore
                class LogTrafficListener extends java.lang.Object implements com.rabbitmq.client.TrafficListener {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public write(outboundCommand: com.rabbitmq.client.Command): void
                    // @ts-ignore
                    public read(inboundCommand: com.rabbitmq.client.Command): void
                    // @ts-ignore
                    shouldLog(command: com.rabbitmq.client.Command): boolean
                }
            }
        }
    }
}
