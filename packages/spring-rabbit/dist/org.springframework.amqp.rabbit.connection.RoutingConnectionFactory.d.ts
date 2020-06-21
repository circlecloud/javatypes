declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Implementations select a connection factory based on a supplied key.
                     * @author Gary Russell
                     * @since 1.4.5
                     */
                    // @ts-ignore
                    interface RoutingConnectionFactory {
                        /**
                         * Returns the {@link ConnectionFactory} bound to given lookup key, or null if one does not exist.
                         * @param key The lookup key to which the {#link ConnectionFactory} is bound
                         * @return the {#link ConnectionFactory} bound to the given lookup key, or null if one does not exist
                         */
                        // @ts-ignore
                        getTargetConnectionFactory(key: java.lang.Object | any): org.springframework.amqp.rabbit.connection.ConnectionFactory
                    }
                }
            }
        }
    }
}
