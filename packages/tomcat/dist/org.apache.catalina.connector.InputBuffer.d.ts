declare namespace org {
    namespace apache {
        namespace catalina {
            namespace connector {
                /**
                 * The buffer used by Tomcat request. This is a derivative of the Tomcat 3.3
                 * OutputBuffer, adapted to handle input instead of output. This allows
                 * complete recycling of the facade objects (the ServletInputStream and the
                 * BufferedReader).
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class InputBuffer extends java.io.Reader implements org.apache.tomcat.util.buf.ByteChunk.ByteInputChannel, org.apache.tomcat.util.net.ApplicationBufferHandler {
                    /**
                     * Default constructor. Allocate the buffer with the default buffer size.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Alternate constructor which allows specifying the initial buffer size.
                     * @param size Buffer size to use
                     */
                    // @ts-ignore
                    constructor(size: number /*int*/)
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    public static readonly DEFAULT_BUFFER_SIZE: number /*int*/
                    // @ts-ignore
                    public readonly INITIAL_STATE: number /*int*/
                    // @ts-ignore
                    public readonly CHAR_STATE: number /*int*/
                    // @ts-ignore
                    public readonly BYTE_STATE: number /*int*/
                    /**
                     * Current byte to char converter.
                     */
                    // @ts-ignore
                    conv: org.apache.tomcat.util.buf.B2CConverter
                    /**
                     * Associated Coyote request.
                     * @param coyoteRequest Associated Coyote request
                     */
                    // @ts-ignore
                    public setRequest(coyoteRequest: org.apache.coyote.Request): void
                    /**
                     * Recycle the output buffer.
                     */
                    // @ts-ignore
                    public recycle(): void
                    /**
                     * Close the input buffer.
                     * @throws IOException An underlying IOException occurred
                     */
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    public available(): number /*int*/
                    // @ts-ignore
                    public setReadListener(listener: javax.servlet.ReadListener): void
                    // @ts-ignore
                    public isFinished(): boolean
                    // @ts-ignore
                    public isReady(): boolean
                    /**
                     * Reads new bytes in the byte chunk.
                     * @throws IOException An underlying IOException occurred
                     */
                    // @ts-ignore
                    public realReadBytes(): number /*int*/
                    // @ts-ignore
                    public readByte(): number /*int*/
                    // @ts-ignore
                    public read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                    /**
                     * Transfers bytes from the buffer to the specified ByteBuffer. After the
                     * operation the position of the ByteBuffer will be returned to the one
                     * before the operation, the limit will be the position incremented by
                     * the number of the transferred bytes.
                     * @param to the ByteBuffer into which bytes are to be written.
                     * @return an integer specifying the actual number of bytes read, or -1 if
                     *          the end of the stream is reached
                     * @throws IOException if an input or output exception has occurred
                     */
                    // @ts-ignore
                    public read(to: java.nio.ByteBuffer): number /*int*/
                    // @ts-ignore
                    public realReadChars(): number /*int*/
                    // @ts-ignore
                    public read(): number /*int*/
                    // @ts-ignore
                    public read(cbuf: string[]): number /*int*/
                    // @ts-ignore
                    public read(cbuf: string[], off: number /*int*/, len: number /*int*/): number /*int*/
                    // @ts-ignore
                    public skip(n: number /*long*/): number /*long*/
                    // @ts-ignore
                    public ready(): boolean
                    // @ts-ignore
                    public markSupported(): boolean
                    // @ts-ignore
                    public mark(readAheadLimit: number /*int*/): void
                    // @ts-ignore
                    public reset(): void
                    // @ts-ignore
                    public checkConverter(): void
                    // @ts-ignore
                    public setByteBuffer(buffer: java.nio.ByteBuffer): void
                    // @ts-ignore
                    public getByteBuffer(): java.nio.ByteBuffer
                    // @ts-ignore
                    public expand(size: number /*int*/): void
                }
            }
        }
    }
}
