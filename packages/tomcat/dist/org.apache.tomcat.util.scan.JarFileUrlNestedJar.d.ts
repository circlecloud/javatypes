declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace scan {
                    /**
                     * Implementation of {@link org.apache.tomcat.Jar} that is optimised for file
                     * based JAR URLs that refer to a JAR file nested inside a WAR
                     * (e.g URLs of the form jar:file: ... .war!/ ... .jar).
                     */
                    // @ts-ignore
                    class JarFileUrlNestedJar extends org.apache.tomcat.util.scan.AbstractInputStreamJar {
                        // @ts-ignore
                        constructor(url: java.net.URL)
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
