declare namespace org {
    namespace apache {
        namespace catalina {
            namespace connector {
                /**
                 * This class handles reading bytes.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class CoyoteInputStream extends javax.servlet.ServletInputStream {
                    // @ts-ignore
                    constructor(ib: org.apache.catalina.connector.InputBuffer)
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    ib: org.apache.catalina.connector.InputBuffer
                    /**
                     * Prevent cloning the facade.
                     */
                    // @ts-ignore
                    clone(): any
                    // @ts-ignore
                    public read(): number /*int*/
                    // @ts-ignore
                    public available(): number /*int*/
                    // @ts-ignore
                    public read(b: number /*byte*/[]): number /*int*/
                    // @ts-ignore
                    public read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                    /**
                     * Transfers bytes from the buffer to the specified ByteBuffer. After the
                     * operation the position of the ByteBuffer will be returned to the one
                     * before the operation, the limit will be the position incremented by
                     * the number of the transferred bytes.
                     * @param b the ByteBuffer into which bytes are to be written.
                     * @return an integer specifying the actual number of bytes read, or -1 if
                     *          the end of the stream is reached
                     * @throws IOException if an input or output exception has occurred
                     */
                    // @ts-ignore
                    public read(b: java.nio.ByteBuffer): number /*int*/
                    /**
                     * Close the stream
                     * Since we re-cycle, we can't allow the call to super.close()
                     * which would permanently disable us.
                     */
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    public isFinished(): boolean
                    // @ts-ignore
                    public isReady(): boolean
                    // @ts-ignore
                    public setReadListener(listener: javax.servlet.ReadListener): void
                }
            }
        }
    }
}
