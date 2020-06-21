declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                namespace ExpiresFilter {
                    /**
                     * Wrapping extension of {@link PrintWriter} to trap the
                     * "Start Write Response Body" event.
                     */
                    // @ts-ignore
                    class XPrintWriter extends java.io.PrintWriter {
                        // @ts-ignore
                        constructor(out: java.io.PrintWriter, request: javax.servlet.http.HttpServletRequest, response: org.apache.catalina.filters.ExpiresFilter.XHttpServletResponse)
                        // @ts-ignore
                        public append(c: string): java.io.PrintWriter
                        // @ts-ignore
                        public append(csq: java.lang.CharSequence): java.io.PrintWriter
                        // @ts-ignore
                        public append(csq: java.lang.CharSequence, start: number /*int*/, end: number /*int*/): java.io.PrintWriter
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public flush(): void
                        // @ts-ignore
                        public print(b: boolean): void
                        // @ts-ignore
                        public print(c: string): void
                        // @ts-ignore
                        public print(s: string[]): void
                        // @ts-ignore
                        public print(d: number /*double*/): void
                        // @ts-ignore
                        public print(f: number /*float*/): void
                        // @ts-ignore
                        public print(i: number /*int*/): void
                        // @ts-ignore
                        public print(l: number /*long*/): void
                        // @ts-ignore
                        public print(obj: java.lang.Object | any): void
                        // @ts-ignore
                        public print(s: java.lang.String | string): void
                        // @ts-ignore
                        public printf(l: java.util.Locale, format: java.lang.String | string, ...args: java.lang.Object[] | any[]): java.io.PrintWriter
                        // @ts-ignore
                        public printf(format: java.lang.String | string, ...args: java.lang.Object[] | any[]): java.io.PrintWriter
                        // @ts-ignore
                        public println(): void
                        // @ts-ignore
                        public println(x: boolean): void
                        // @ts-ignore
                        public println(x: string): void
                        // @ts-ignore
                        public println(x: string[]): void
                        // @ts-ignore
                        public println(x: number /*double*/): void
                        // @ts-ignore
                        public println(x: number /*float*/): void
                        // @ts-ignore
                        public println(x: number /*int*/): void
                        // @ts-ignore
                        public println(x: number /*long*/): void
                        // @ts-ignore
                        public println(x: java.lang.Object | any): void
                        // @ts-ignore
                        public println(x: java.lang.String | string): void
                        // @ts-ignore
                        public write(buf: string[]): void
                        // @ts-ignore
                        public write(buf: string[], off: number /*int*/, len: number /*int*/): void
                        // @ts-ignore
                        public write(c: number /*int*/): void
                        // @ts-ignore
                        public write(s: java.lang.String | string): void
                        // @ts-ignore
                        public write(s: java.lang.String | string, off: number /*int*/, len: number /*int*/): void
                    }
                }
            }
        }
    }
}
