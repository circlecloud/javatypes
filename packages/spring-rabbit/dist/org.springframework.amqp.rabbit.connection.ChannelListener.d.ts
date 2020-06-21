declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * A listener for new channel creation and destruction.
                     * @author Dave Syer
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    interface ChannelListener {
                        /**
                         * Called when a new channel is created.
                         * @param channel the channel.
                         * @param transactional true if transactional.
                         */
                        // @ts-ignore
                        onCreate(channel: Channel, transactional: boolean): void
                        /**
                         * Called when the underlying RabbitMQ channel is closed for any
                         * reason.
                         * @param signal the shut down signal.
                         */
                        // @ts-ignore
                        onShutDown(signal: ShutdownSignalException): void
                    }
                }
            }
        }
    }
}
