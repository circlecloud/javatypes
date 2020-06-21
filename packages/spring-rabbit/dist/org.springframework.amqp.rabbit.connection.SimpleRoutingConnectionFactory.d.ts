declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * An {@link AbstractRoutingConnectionFactory} implementation which gets a {@code lookupKey}
                     * for current {@link ConnectionFactory} from thread-bound resource by key of the instance of
                     * this {@link ConnectionFactory}.
                     * @author Artem Bilan
                     * @author Gary Russell
                     * @since 1.3
                     */
                    // @ts-ignore
                    class SimpleRoutingConnectionFactory extends org.springframework.amqp.rabbit.connection.AbstractRoutingConnectionFactory {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        determineCurrentLookupKey(): any
                    }
                }
            }
        }
    }
}
