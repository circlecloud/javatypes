declare namespace com {
    namespace rabbitmq {
        namespace client {
            // @ts-ignore
            interface SocketConfigurator {
                /**
                 * Provides a hook to insert custom configuration of the sockets
                 * used to connect to an AMQP server before they connect.
                 */
                // @ts-ignore
                configure(socket: java.net.Socket): void
                /**
                 * Returns a composed configurator that performs, in sequence, this
                 * operation followed by the {@code after} operation.
                 * @param after the operation to perform after this operation
                 * @return a composed configurator that performs in sequence this
                 *  operation followed by the {#code after} operation
                 * @throws NullPointerException if {#code after} is null
                 */
                // @ts-ignore
                andThen(after: com.rabbitmq.client.SocketConfigurator): com.rabbitmq.client.SocketConfigurator
            }
        }
    }
}
