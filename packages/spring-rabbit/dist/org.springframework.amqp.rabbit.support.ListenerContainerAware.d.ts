declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace support {
                    /**
                     * {@link org.springframework.amqp.core.MessageListener}s that also implement this
                     * interface can have configuration verified during initialization.
                     * @author Gary Russell
                     * @since 1.5
                     */
                    // @ts-ignore
                    interface ListenerContainerAware {
                        /**
                         * Return the queue names that the listener expects to listen to.
                         * @return the queue names.
                         */
                        // @ts-ignore
                        expectedQueueNames(): Array<java.lang.String | string>
                    }
                }
            }
        }
    }
}
