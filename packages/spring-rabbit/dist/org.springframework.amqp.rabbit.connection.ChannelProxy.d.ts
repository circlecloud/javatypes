declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Subinterface of {@link com.rabbitmq.client.Channel} to be implemented by
                     * Channel proxies.  Allows access to the underlying target Channel
                     * @author Mark Pollack
                     * @author Gary Russell
                     * @see CachingConnectionFactory
                     */
                    // @ts-ignore
                    interface ChannelProxy {
                        /**
                         * Return the target Channel of this proxy.
                         * <p>This will typically be the native provider Channel
                         * @return the underlying Channel (never <code>null</code>)
                         */
                        // @ts-ignore
                        getTargetChannel(): Channel
                        /**
                         * Return whether this channel has transactions enabled {@code txSelect()}.
                         * @return true if the channel is transactional.
                         * @since 1.5
                         */
                        // @ts-ignore
                        isTransactional(): boolean
                        /**
                         * Return true if confirms are selected on this channel.
                         * @return true if confirms selected.
                         * @since 2.1
                         */
                        // @ts-ignore
                        isConfirmSelected(): boolean
                    }
                }
            }
        }
    }
}
