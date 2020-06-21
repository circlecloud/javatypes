declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * A factory for {@link PublisherCallbackChannel}s.
                     * @author Gary Russell
                     * @since 2.1.6
                     */
                    // @ts-ignore
                    interface PublisherCallbackChannelFactory {
                        /**
                         * Create a {@link PublisherCallbackChannel} instance based on the provided delegate
                         * and executor.
                         * @param delegate the delegate channel.
                         * @param executor the executor.
                         * @return the channel.
                         */
                        // @ts-ignore
                        createChannel(delegate: Channel, executor: java.util.concurrent.ExecutorService): org.springframework.amqp.rabbit.connection.PublisherCallbackChannel
                    }
                }
            }
        }
    }
}
