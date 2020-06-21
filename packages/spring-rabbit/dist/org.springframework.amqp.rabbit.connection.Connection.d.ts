declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * @author Dave Syer
                     * @author Gary Russell
                     * @author Artem Bilan
                     */
                    // @ts-ignore
                    interface Connection extends java.lang.AutoCloseable {
                        /**
                         * Create a new channel, using an internally allocated channel number.
                         * @param transactional true if the channel should support transactions
                         * @return a new channel descriptor, or null if none is available
                         * @throws AmqpException if an I/O problem is encountered
                         */
                        // @ts-ignore
                        createChannel(transactional: boolean): Channel
                        /**
                         * Close this connection and all its channels
                         * with the {@link com.rabbitmq.client.AMQP#REPLY_SUCCESS} close code
                         * and message 'OK'.
                         * Waits for all the close operations to complete.
                         * @throws AmqpException if an I/O problem is encountered
                         */
                        // @ts-ignore
                        close(): void
                        /**
                         * Flag to indicate the status of the connection.
                         * @return true if the connection is open
                         */
                        // @ts-ignore
                        isOpen(): boolean
                        /**
                         * @return the local port if the underlying connection supports it.
                         */
                        // @ts-ignore
                        getLocalPort(): number /*int*/
                        /**
                         * Add a {@link BlockedListener}.
                         * @param listener the listener to add
                         * @since 2.0
                         * @see com.rabbitmq.client.Connection#addBlockedListener(BlockedListener)
                         */
                        // @ts-ignore
                        addBlockedListener(listener: BlockedListener): void
                        /**
                         * Remove a {@link BlockedListener}.
                         * @param listener the listener to remove
                         * @return <code><b>true</b></code> if the listener was found and removed,
                         *  <code><b>false</b></code> otherwise
                         * @since 2.0
                         * @see com.rabbitmq.client.Connection#removeBlockedListener(BlockedListener)
                         */
                        // @ts-ignore
                        removeBlockedListener(listener: BlockedListener): boolean
                        /**
                         * Return the underlying RabbitMQ connection.
                         * @return the connection.
                         */
                        // @ts-ignore
                        getDelegate(): com.rabbitmq.client.Connection
                    }
                }
            }
        }
    }
}
