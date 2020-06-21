declare namespace com {
    namespace rabbitmq {
        namespace client {
            // @ts-ignore
            class DefaultSocketConfigurator extends java.lang.Object implements com.rabbitmq.client.SocketConfigurator {
                // @ts-ignore
                constructor()
                /**
                 * Provides a hook to insert custom configuration of the sockets
                 * used to connect to an AMQP server before they connect.
                 * The default behaviour of this method is to disable Nagle's
                 * algorithm to get more consistently low latency.  However it
                 * may be overridden freely and there is no requirement to retain
                 * this behaviour.
                 * @param socket The socket that is to be used for the Connection
                 */
                // @ts-ignore
                public configure(socket: java.net.Socket): void
            }
        }
    }
}
