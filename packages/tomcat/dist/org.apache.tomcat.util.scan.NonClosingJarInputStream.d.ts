declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace scan {
                    /**
                     * When using a {@link JarInputStream} with an XML parser, the stream will be
                     * closed by the parser. This causes problems if multiple entries from the JAR
                     * need to be parsed. This implementation makes {{@link #close()} a NO-OP and
                     * adds {@link #reallyClose()} that will close the stream.
                     */
                    // @ts-ignore
                    class NonClosingJarInputStream extends java.util.jar.JarInputStream {
                        // @ts-ignore
                        constructor(input: java.io.InputStream, verify: boolean)
                        // @ts-ignore
                        constructor(input: java.io.InputStream)
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public reallyClose(): void
                    }
                }
            }
        }
    }
}
