declare namespace org {
    namespace apache {
        namespace catalina {
            namespace connector {
                /**
                 * The buffer used by Tomcat response. This is a derivative of the Tomcat 3.3
                 * OutputBuffer, with the removal of some of the state handling (which in
                 * Coyote is mostly the Processor's responsibility).
                 * @author Costin Manolache
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class OutputBuffer extends java.io.Writer {
                    /**
                     * Create the buffer with the specified initial size.
                     * @param size Buffer size to use
                     */
                    // @ts-ignore
                    constructor(size: number /*int*/)
                    // @ts-ignore
                    public static readonly DEFAULT_BUFFER_SIZE: number /*int*/
                    /**
                     * Current char to byte converter.
                     */
                    // @ts-ignore
                    conv: org.apache.tomcat.util.buf.C2BConverter
                    /**
                     * Associated Coyote response.
                     * @param coyoteResponse Associated Coyote response
                     */
                    // @ts-ignore
                    public setResponse(coyoteResponse: org.apache.coyote.Response): void
                    /**
                     * Is the response output suspended ?
                     * @return suspended flag value
                     */
                    // @ts-ignore
                    public isSuspended(): boolean
                    /**
                     * Set the suspended flag.
                     * @param suspended New suspended flag value
                     */
                    // @ts-ignore
                    public setSuspended(suspended: boolean): void
                    /**
                     * Is the response output closed ?
                     * @return closed flag value
                     */
                    // @ts-ignore
                    public isClosed(): boolean
                    /**
                     * Recycle the output buffer.
                     */
                    // @ts-ignore
                    public recycle(): void
                    /**
                     * Close the output buffer. This tries to calculate the response size if
                     * the response has not been committed yet.
                     * @throws IOException An underlying IOException occurred
                     */
                    // @ts-ignore
                    public close(): void
                    /**
                     * Flush bytes or chars contained in the buffer.
                     * @throws IOException An underlying IOException occurred
                     */
                    // @ts-ignore
                    public flush(): void
                    /**
                     * Flush bytes or chars contained in the buffer.
                     * @param realFlush <code>true</code> if this should also cause a real network flush
                     * @throws IOException An underlying IOException occurred
                     */
                    // @ts-ignore
                    doFlush(realFlush: boolean): void
                    /**
                     * Sends the buffer data to the client output, checking the
                     * state of Response and calling the right interceptors.
                     * @param buf the ByteBuffer to be written to the response
                     * @throws IOException An underlying IOException occurred
                     */
                    // @ts-ignore
                    public realWriteBytes(buf: java.nio.ByteBuffer): void
                    // @ts-ignore
                    public write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                    // @ts-ignore
                    public write(from: java.nio.ByteBuffer): void
                    // @ts-ignore
                    public writeByte(b: number /*int*/): void
                    /**
                     * Convert the chars to bytes, then send the data to the client.
                     * @param from Char buffer to be written to the response
                     * @throws IOException An underlying IOException occurred
                     */
                    // @ts-ignore
                    public realWriteChars(from: java.nio.CharBuffer): void
                    // @ts-ignore
                    public write(c: number /*int*/): void
                    // @ts-ignore
                    public write(c: string[]): void
                    // @ts-ignore
                    public write(c: string[], off: number /*int*/, len: number /*int*/): void
                    /**
                     * Append a string to the buffer
                     */
                    // @ts-ignore
                    public write(s: java.lang.String | string, off: number /*int*/, len: number /*int*/): void
                    // @ts-ignore
                    public write(s: java.lang.String | string): void
                    // @ts-ignore
                    public checkConverter(): void
                    // @ts-ignore
                    public getContentWritten(): number /*long*/
                    /**
                     * Has this buffer been used at all?
                     * @return true if no chars or bytes have been added to the buffer since the
                     *          last call to {#link #recycle()}
                     */
                    // @ts-ignore
                    public isNew(): boolean
                    // @ts-ignore
                    public setBufferSize(size: number /*int*/): void
                    // @ts-ignore
                    public reset(): void
                    // @ts-ignore
                    public reset(resetWriterStreamFlags: boolean): void
                    // @ts-ignore
                    public getBufferSize(): number /*int*/
                    // @ts-ignore
                    public isReady(): boolean
                    // @ts-ignore
                    public setWriteListener(listener: javax.servlet.WriteListener): void
                    // @ts-ignore
                    public isBlocking(): boolean
                    // @ts-ignore
                    public checkRegisterForWrite(): void
                    /**
                     * Add data to the buffer.
                     * @param src Bytes array
                     * @param off Offset
                     * @param len Length
                     * @throws IOException Writing overflow data to the output channel failed
                     */
                    // @ts-ignore
                    public append(src: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                    /**
                     * Add data to the buffer.
                     * @param src Char array
                     * @param off Offset
                     * @param len Length
                     * @throws IOException Writing overflow data to the output channel failed
                     */
                    // @ts-ignore
                    public append(src: string[], off: number /*int*/, len: number /*int*/): void
                    // @ts-ignore
                    public append(from: java.nio.ByteBuffer): void
                }
            }
        }
    }
}
