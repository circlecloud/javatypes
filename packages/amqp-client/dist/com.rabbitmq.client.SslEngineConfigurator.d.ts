declare namespace com {
    namespace rabbitmq {
        namespace client {
            // @ts-ignore
            interface SslEngineConfigurator {
                /**
                 * Provides a hook to insert custom configuration of the {@link SSLEngine}s
                 * used to connect to an AMQP server before they connect.
                 * Note this is used only when NIO are in use.
                 */
                // @ts-ignore
                configure(sslEngine: javax.net.ssl.SSLEngine): void
                /**
                 * Returns a composed configurator that performs, in sequence, this
                 * operation followed by the {@code after} operation.
                 * @param after the operation to perform after this operation
                 * @return a composed configurator that performs in sequence this
                 *  operation followed by the {#code after} operation
                 * @throws NullPointerException if {#code after} is null
                 */
                // @ts-ignore
                andThen(after: com.rabbitmq.client.SslEngineConfigurator): com.rabbitmq.client.SslEngineConfigurator
            }
        }
    }
}
