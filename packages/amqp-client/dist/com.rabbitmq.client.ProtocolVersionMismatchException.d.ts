declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Thrown to indicate that the server does not support the wire protocol version
             * we requested immediately after opening the TCP socket.
             */
            // @ts-ignore
            class ProtocolVersionMismatchException extends java.net.ProtocolException {
                // @ts-ignore
                constructor(clientVersion: com.rabbitmq.client.impl.Version, serverVersion: com.rabbitmq.client.impl.Version)
                /**
                 * The client's AMQP specification version.
                 */
                // @ts-ignore
                getClientVersion(): com.rabbitmq.client.impl.Version
                /**
                 * The server's AMQP specification version.
                 */
                // @ts-ignore
                getServerVersion(): com.rabbitmq.client.impl.Version
                /**
                 * The client's AMQP specification major version.
                 */
                // @ts-ignore
                getClientMajor(): number /*int*/
                /**
                 * The client's AMQP specification minor version.
                 */
                // @ts-ignore
                getClientMinor(): number /*int*/
                /**
                 * The server's AMQP specification major version.
                 */
                // @ts-ignore
                getServerMajor(): number /*int*/
                /**
                 * The server's AMQP specification minor version.
                 */
                // @ts-ignore
                getServerMinor(): number /*int*/
            }
        }
    }
}
