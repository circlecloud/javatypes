declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * A factory to create {@link SSLContext}s.
             * @see ConnectionFactory#setSslContextFactory(SslContextFactory)
             * @since 5.0.0
             */
            // @ts-ignore
            interface SslContextFactory {
                /**
                 * Create a {@link SSLContext} for a given name.
                 * The name is typically the name of the connection.
                 * @param name name of the connection the SSLContext is used for
                 * @return the SSLContext for this name
                 * @see ConnectionFactory#newConnection(String)
                 */
                // @ts-ignore
                create(name: java.lang.String | string): javax.net.ssl.SSLContext
            }
        }
    }
}
