declare namespace com {
    namespace rabbitmq {
        namespace client {
            // @ts-ignore
            class DefaultSocketChannelConfigurator extends java.lang.Object implements com.rabbitmq.client.SocketChannelConfigurator {
                // @ts-ignore
                constructor()
                /**
                 * Provides a hook to insert custom configuration of the {@link SocketChannel}s
                 * used to connect to an AMQP server before they connect.
                 * The default behaviour of this method is to disable Nagle's
                 * algorithm to get more consistently low latency.  However it
                 * may be overridden freely and there is no requirement to retain
                 * this behaviour.
                 * @param socketChannel The socket channel that is to be used for the Connection
                 */
                // @ts-ignore
                public configure(socketChannel: java.nio.channels.SocketChannel): void
            }
        }
    }
}
