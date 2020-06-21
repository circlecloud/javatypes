declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Connection factories implementing this interface return a connection that
                     * provides {@code PublisherCallbackChannel} channel instances when confirms
                     * or returns are enabled.
                     * @deprecated in favor of default methods on ConnectionFactory.
                     * @author Gary Russell
                     * @since 1.5
                     */
                    // @ts-ignore
                    interface PublisherCallbackChannelConnectionFactory {
                        /**
                         * @return true if publisher confirms are enabled.
                         */
                        // @ts-ignore
                        isPublisherConfirms(): boolean
                        /**
                         * @return true if publisher returns are enabled.
                         */
                        // @ts-ignore
                        isPublisherReturns(): boolean
                    }
                }
            }
        }
    }
}
