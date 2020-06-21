declare namespace org {
    namespace apache {
        namespace catalina {
            namespace connector {
                /**
                 * Coyote implementation of the servlet writer.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class CoyoteWriter extends java.io.PrintWriter {
                    // @ts-ignore
                    constructor(ob: org.apache.catalina.connector.OutputBuffer)
                    // @ts-ignore
                    ob: org.apache.catalina.connector.OutputBuffer
                    // @ts-ignore
                    error: boolean
                    /**
                     * Prevent cloning the facade.
                     */
                    // @ts-ignore
                    clone(): any
                    // @ts-ignore
                    public flush(): void
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    public checkError(): boolean
                    // @ts-ignore
                    public write(c: number /*int*/): void
                    // @ts-ignore
                    public write(buf: string[], off: number /*int*/, len: number /*int*/): void
                    // @ts-ignore
                    public write(buf: string[]): void
                    // @ts-ignore
                    public write(s: java.lang.String | string, off: number /*int*/, len: number /*int*/): void
                    // @ts-ignore
                    public write(s: java.lang.String | string): void
                    // @ts-ignore
                    public print(b: boolean): void
                    // @ts-ignore
                    public print(c: string): void
                    // @ts-ignore
                    public print(i: number /*int*/): void
                    // @ts-ignore
                    public print(l: number /*long*/): void
                    // @ts-ignore
                    public print(f: number /*float*/): void
                    // @ts-ignore
                    public print(d: number /*double*/): void
                    // @ts-ignore
                    public print(s: string[]): void
                    // @ts-ignore
                    public print(s: java.lang.String | string): void
                    // @ts-ignore
                    public print(obj: java.lang.Object | any): void
                    // @ts-ignore
                    public println(): void
                    // @ts-ignore
                    public println(b: boolean): void
                    // @ts-ignore
                    public println(c: string): void
                    // @ts-ignore
                    public println(i: number /*int*/): void
                    // @ts-ignore
                    public println(l: number /*long*/): void
                    // @ts-ignore
                    public println(f: number /*float*/): void
                    // @ts-ignore
                    public println(d: number /*double*/): void
                    // @ts-ignore
                    public println(c: string[]): void
                    // @ts-ignore
                    public println(s: java.lang.String | string): void
                    // @ts-ignore
                    public println(o: java.lang.Object | any): void
                }
            }
        }
    }
}
