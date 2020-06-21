declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * A socket-based frame handler.
                 */
                // @ts-ignore
                class SocketFrameHandler extends java.lang.Object implements com.rabbitmq.client.impl.FrameHandler {
                    /**
                     * @param socket the socket to use
                     */
                    // @ts-ignore
                    constructor(socket: java.net.Socket)
                    /**
                     * @param socket the socket to use
                     */
                    // @ts-ignore
                    constructor(socket: java.net.Socket, shutdownExecutor: java.util.concurrent.ExecutorService)
                    /**
                     * Time to linger before closing the socket forcefully.
                     */
                    // @ts-ignore
                    public static readonly SOCKET_CLOSING_TIMEOUT: number /*int*/
                    // @ts-ignore
                    public getAddress(): java.net.InetAddress
                    // @ts-ignore
                    public getLocalAddress(): java.net.InetAddress
                    // @ts-ignore
                    public getInputStream(): java.io.DataInputStream
                    // @ts-ignore
                    public getPort(): number /*int*/
                    // @ts-ignore
                    public getLocalPort(): number /*int*/
                    // @ts-ignore
                    public setTimeout(timeoutMs: number /*int*/): void
                    // @ts-ignore
                    public getTimeout(): number /*int*/
                    /**
                     * Write a 0-8-style connection header to the underlying socket,
                     * containing the specified version information, kickstarting the
                     * AMQP protocol version negotiation process.
                     * @param major major protocol version number
                     * @param minor minor protocol version number
                     * @throws IOException if there is a problem accessing the connection
                     * @see #sendHeader()
                     */
                    // @ts-ignore
                    public sendHeader(major: number /*int*/, minor: number /*int*/): void
                    /**
                     * Write a 0-9-1-style connection header to the underlying socket,
                     * containing the specified version information, kickstarting the
                     * AMQP protocol version negotiation process.
                     * @param major major protocol version number
                     * @param minor minor protocol version number
                     * @param revision protocol revision number
                     * @throws IOException if there is a problem accessing the connection
                     * @see #sendHeader()
                     */
                    // @ts-ignore
                    public sendHeader(major: number /*int*/, minor: number /*int*/, revision: number /*int*/): void
                    // @ts-ignore
                    public sendHeader(): void
                    // @ts-ignore
                    public initialize(connection: com.rabbitmq.client.impl.AMQConnection): void
                    // @ts-ignore
                    public readFrame(): com.rabbitmq.client.impl.Frame
                    // @ts-ignore
                    public writeFrame(frame: com.rabbitmq.client.impl.Frame): void
                    // @ts-ignore
                    public flush(): void
                    // @ts-ignore
                    public close(): void
                }
            }
        }
    }
}
