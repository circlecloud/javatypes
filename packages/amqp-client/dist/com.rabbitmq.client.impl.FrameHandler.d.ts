declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Interface to a frame handler.
                 * <h2>Concurrency</h2>
                 * Implementations must be thread-safe, and not allow frames to be interleaved, either while reading or writing.
                 */
                // @ts-ignore
                interface FrameHandler extends com.rabbitmq.client.impl.NetworkConnection {
                    /**
                     * Set the underlying socket's read timeout in milliseconds, if applicable.
                     * @param timeoutMs The timeout in milliseconds
                     */
                    // @ts-ignore
                    setTimeout(timeoutMs: number /*int*/): void
                    /**
                     * Get the underlying socket's read timeout in milliseconds.
                     * @return The timeout in milliseconds
                     */
                    // @ts-ignore
                    getTimeout(): number /*int*/
                    /**
                     * Send the initial connection header, thus kickstarting the AMQP
                     * protocol version negotiation process and putting the underlying
                     * connection in a state such that the next layer of startup can
                     * proceed.
                     * @throws IOException if there is a problem accessing the connection
                     */
                    // @ts-ignore
                    sendHeader(): void
                    // @ts-ignore
                    initialize(connection: com.rabbitmq.client.impl.AMQConnection): void
                    /**
                     * Read a {@link Frame} from the underlying data connection.
                     * @return an incoming Frame, or null if there is none
                     * @throws IOException if there is a problem accessing the connection
                     * @throws SocketTimeoutException if the underlying read times out
                     */
                    // @ts-ignore
                    readFrame(): com.rabbitmq.client.impl.Frame
                    /**
                     * Write a {@link Frame} to the underlying data connection.
                     * @param frame the Frame to transmit
                     * @throws IOException if there is a problem accessing the connection
                     */
                    // @ts-ignore
                    writeFrame(frame: com.rabbitmq.client.impl.Frame): void
                    /**
                     * Flush the underlying data connection.
                     * @throws IOException if there is a problem accessing the connection
                     */
                    // @ts-ignore
                    flush(): void
                    /**
                     * Close the underlying data connection (complaint not permitted).
                     */
                    // @ts-ignore
                    close(): void
                }
            }
        }
    }
}
