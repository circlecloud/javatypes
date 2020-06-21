declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * Class that extends ServletOuputStream, used as a wrapper from within
                 * <code>SsiInclude</code>
                 * @author Bip Thelin
                 * @see ServletOutputStream and ByteArrayOutputStream
                 */
                // @ts-ignore
                class ByteArrayServletOutputStream extends javax.servlet.ServletOutputStream {
                    /**
                     * Construct a new ServletOutputStream.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Our buffer to hold the stream.
                     */
                    // @ts-ignore
                    readonly buf: java.io.ByteArrayOutputStream
                    /**
                     * @return the byte array.
                     */
                    // @ts-ignore
                    public toByteArray(): number /*byte*/[]
                    /**
                     * Write to our buffer.
                     * @param b The parameter to write
                     */
                    // @ts-ignore
                    public write(b: number /*int*/): void
                    /**
                     * TODO SERVLET 3.1
                     */
                    // @ts-ignore
                    public isReady(): boolean
                    /**
                     * TODO SERVLET 3.1
                     */
                    // @ts-ignore
                    public setWriteListener(listener: javax.servlet.WriteListener): void
                }
            }
        }
    }
}
