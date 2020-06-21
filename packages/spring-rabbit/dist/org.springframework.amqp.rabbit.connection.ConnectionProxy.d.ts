declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Subinterface of {@link Connection} to be implemented by
                     * Connection proxies.  Allows access to the underlying target Connection
                     * @author Dave Syer
                     * @see CachingConnectionFactory
                     */
                    // @ts-ignore
                    interface ConnectionProxy extends org.springframework.amqp.rabbit.connection.Connection {
                        /**
                         * Return the target Channel of this proxy.
                         * <p>This will typically be the native provider Connection
                         * @return the underlying Connection (never <code>null</code>)
                         */
                        // @ts-ignore
                        getTargetConnection(): org.springframework.amqp.rabbit.connection.Connection
                    }
                }
            }
        }
    }
}
