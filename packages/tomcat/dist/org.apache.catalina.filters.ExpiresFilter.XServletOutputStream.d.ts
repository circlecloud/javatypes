declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                namespace ExpiresFilter {
                    /**
                     * Wrapping extension of {@link ServletOutputStream} to trap the
                     * "Start Write Response Body" event.
                     */
                    // @ts-ignore
                    class XServletOutputStream extends javax.servlet.ServletOutputStream {
                        // @ts-ignore
                        constructor(servletOutputStream: javax.servlet.ServletOutputStream, request: javax.servlet.http.HttpServletRequest, response: org.apache.catalina.filters.ExpiresFilter.XHttpServletResponse)
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public flush(): void
                        // @ts-ignore
                        public print(b: boolean): void
                        // @ts-ignore
                        public print(c: string): void
                        // @ts-ignore
                        public print(d: number /*double*/): void
                        // @ts-ignore
                        public print(f: number /*float*/): void
                        // @ts-ignore
                        public print(i: number /*int*/): void
                        // @ts-ignore
                        public print(l: number /*long*/): void
                        // @ts-ignore
                        public print(s: java.lang.String | string): void
                        // @ts-ignore
                        public println(): void
                        // @ts-ignore
                        public println(b: boolean): void
                        // @ts-ignore
                        public println(c: string): void
                        // @ts-ignore
                        public println(d: number /*double*/): void
                        // @ts-ignore
                        public println(f: number /*float*/): void
                        // @ts-ignore
                        public println(i: number /*int*/): void
                        // @ts-ignore
                        public println(l: number /*long*/): void
                        // @ts-ignore
                        public println(s: java.lang.String | string): void
                        // @ts-ignore
                        public write(b: number /*byte*/[]): void
                        // @ts-ignore
                        public write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
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
}
