declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace log {
                    /**
                     * This helper class may be used to do sophisticated redirection of
                     * System.out and System.err on a per Thread basis.
                     * A stack is implemented per Thread so that nested startCapture
                     * and stopCapture can be used.
                     * @author Remy Maucherat
                     * @author Glenn L. Nielsen
                     */
                    // @ts-ignore
                    class SystemLogHandler extends java.io.PrintStream {
                        /**
                         * Construct the handler to capture the output of the given steam.
                         * @param wrapped The stream to capture
                         */
                        // @ts-ignore
                        constructor(wrapped: java.io.PrintStream)
                        /**
                         * Start capturing thread's output.
                         */
                        // @ts-ignore
                        public static startCapture(): void
                        /**
                         * Stop capturing thread's output.
                         * @return The captured data
                         */
                        // @ts-ignore
                        public static stopCapture(): string
                        /**
                         * Find PrintStream to which the output must be written to.
                         * @return the print stream
                         */
                        // @ts-ignore
                        findStream(): java.io.PrintStream
                        // @ts-ignore
                        public flush(): void
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public checkError(): boolean
                        // @ts-ignore
                        setError(): void
                        // @ts-ignore
                        public write(b: number /*int*/): void
                        // @ts-ignore
                        public write(b: number /*byte*/[]): void
                        // @ts-ignore
                        public write(buf: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
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
                        public println(x: boolean): void
                        // @ts-ignore
                        public println(x: string): void
                        // @ts-ignore
                        public println(x: number /*int*/): void
                        // @ts-ignore
                        public println(x: number /*long*/): void
                        // @ts-ignore
                        public println(x: number /*float*/): void
                        // @ts-ignore
                        public println(x: number /*double*/): void
                        // @ts-ignore
                        public println(x: string[]): void
                        // @ts-ignore
                        public println(x: java.lang.String | string): void
                        // @ts-ignore
                        public println(x: java.lang.Object | any): void
                    }
                }
            }
        }
    }
}
