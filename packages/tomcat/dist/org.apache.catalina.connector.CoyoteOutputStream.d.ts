declare namespace org {
    namespace apache {
        namespace catalina {
            namespace connector {
                /**
                 * Coyote implementation of the servlet output stream.
                 * @author Costin Manolache
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class CoyoteOutputStream extends javax.servlet.ServletOutputStream {
                    // @ts-ignore
                    constructor(ob: org.apache.catalina.connector.OutputBuffer)
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    ob: org.apache.catalina.connector.OutputBuffer
                    /**
                     * Prevent cloning the facade.
                     */
                    // @ts-ignore
                    clone(): any
                    // @ts-ignore
                    public write(i: number /*int*/): void
                    // @ts-ignore
                    public write(b: number /*byte*/[]): void
                    // @ts-ignore
                    public write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                    // @ts-ignore
                    public write(from: java.nio.ByteBuffer): void
                    /**
                     * Will send the buffer to the client.
                     */
                    // @ts-ignore
                    public flush(): void
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    public isReady(): boolean
                    // @ts-ignore
                    public setWriteListener(listener: javax.servlet.WriteListener): void
                }
            }
        }
    }
}
