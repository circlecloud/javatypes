declare namespace org {
    namespace apache {
        namespace catalina {
            namespace connector {
                /**
                 * Coyote implementation of the buffered reader.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class CoyoteReader extends java.io.BufferedReader {
                    // @ts-ignore
                    constructor(ib: org.apache.catalina.connector.InputBuffer)
                    // @ts-ignore
                    ib: org.apache.catalina.connector.InputBuffer
                    // @ts-ignore
                    lineBuffer: string[]
                    /**
                     * Prevent cloning the facade.
                     */
                    // @ts-ignore
                    clone(): any
                    // @ts-ignore
                    public close(): void
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
                    public readLine(): string
                }
            }
        }
    }
}
