declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * A listener for connection creation and closing.
                     * @author Dave Syer
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    interface ConnectionListener {
                        /**
                         * Called when a new connection is established.
                         * @param connection the connection.
                         */
                        // @ts-ignore
                        onCreate(connection: org.springframework.amqp.rabbit.connection.Connection): void
                        /**
                         * Called when a connection is closed.
                         * @param connection the connection.
                         * @see #onShutDown(ShutdownSignalException)
                         */
                        // @ts-ignore
                        onClose(connection: org.springframework.amqp.rabbit.connection.Connection): void
                        /**
                         * Called when a connection is force closed.
                         * @param signal the shut down signal.
                         * @since 2.0
                         */
                        // @ts-ignore
                        onShutDown(signal: ShutdownSignalException): void
                    }
                }
            }
        }
    }
}
