declare namespace com {
    namespace rabbitmq {
        namespace client {
            // @ts-ignore
            interface SocketChannelConfigurator {
                /**
                 * Provides a hook to insert custom configuration of the {@link SocketChannel}s
                 * used to connect to an AMQP server before they connect.
                 */
                // @ts-ignore
                configure(socketChannel: java.nio.channels.SocketChannel): void
                /**
                 * Returns a composed configurator that performs, in sequence, this
                 * operation followed by the {@code after} operation.
                 * @param after the operation to perform after this operation
                 * @return a composed configurator that performs in sequence this
                 *  operation followed by the {#code after} operation
                 * @throws NullPointerException if {#code after} is null
                 */
                // @ts-ignore
                andThen(after: com.rabbitmq.client.SocketChannelConfigurator): com.rabbitmq.client.SocketChannelConfigurator
            }
        }
    }
}
