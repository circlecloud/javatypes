declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace scan {
                    /**
                     * Implementation of {@link org.apache.tomcat.Jar} that is optimised for
                     * non-file based JAR URLs.
                     */
                    // @ts-ignore
                    class UrlJar extends org.apache.tomcat.util.scan.AbstractInputStreamJar {
                        // @ts-ignore
                        constructor(jarFileURL: java.net.URL)
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        createJarInputStream(): org.apache.tomcat.util.scan.NonClosingJarInputStream
                    }
                }
            }
        }
    }
}
