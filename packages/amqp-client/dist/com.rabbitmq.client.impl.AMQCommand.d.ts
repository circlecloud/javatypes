declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * AMQP 0-9-1-specific implementation of {@link Command} which accumulates
                 * method, header and body from a series of frames, unless these are
                 * supplied at construction time.
                 * <h2>Concurrency</h2>
                 * This class is thread-safe.
                 */
                // @ts-ignore
                class AMQCommand extends java.lang.Object implements com.rabbitmq.client.Command {
                    /**
                     * Construct a command ready to fill in by reading frames
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a command with just a method, and without header or body.
                     * @param method the wrapped method
                     */
                    // @ts-ignore
                    constructor(method: com.rabbitmq.client.Method)
                    /**
                     * Construct a command with a specified method, header and body.
                     * @param method the wrapped method
                     * @param contentHeader the wrapped content header
                     * @param body the message body data
                     */
                    // @ts-ignore
                    constructor(method: com.rabbitmq.client.Method, contentHeader: com.rabbitmq.client.impl.AMQContentHeader, body: number /*byte*/[])
                    /**
                     * EMPTY_FRAME_SIZE = 8 = 1 + 2 + 4 + 1
                     * <ul><li>1 byte of frame type</li>
                     * <li>2 bytes of channel number</li>
                     * <li>4 bytes of frame payload length</li>
                     * <li>1 byte of payload trailer FRAME_END byte</li></ul>
                     * See {@link #checkEmptyFrameSize}, an assertion checked at
                     * startup.
                     */
                    // @ts-ignore
                    public static readonly EMPTY_FRAME_SIZE: number /*int*/
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public getMethod(): com.rabbitmq.client.impl.Method
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public getContentHeader(): com.rabbitmq.client.impl.AMQContentHeader
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public getContentBody(): number /*byte*/[]
                    // @ts-ignore
                    public handleFrame(f: com.rabbitmq.client.impl.Frame): boolean
                    /**
                     * Sends this command down the named channel on the channel's
                     * connection, possibly in multiple frames.
                     * @param channel the channel on which to transmit the command
                     * @throws IOException if an error is encountered
                     */
                    // @ts-ignore
                    public transmit(channel: com.rabbitmq.client.impl.AMQChannel): void
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public toString(suppressBody: boolean): string
                    /**
                     * Called to check internal code assumptions.
                     */
                    // @ts-ignore
                    public static checkPreconditions(): void
                }
            }
        }
    }
}
