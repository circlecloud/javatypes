declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Listener called when a connection gets an IO error trying to write on the socket.
                 * This can be used to trigger connection recovery.
                 * @since 4.5.0
                 */
                // @ts-ignore
                interface ErrorOnWriteListener {
                    /**
                     * Called when writing to the socket failed
                     * @param connection the owning connection instance
                     * @param exception the thrown exception
                     */
                    // @ts-ignore
                    handle(connection: com.rabbitmq.client.Connection, exception: java.io.IOException): void
                }
            }
        }
    }
}
