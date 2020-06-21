declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace scan {
                    /**
                     * Provide a mechanism to obtain objects that implement {@link Jar}.
                     */
                    // @ts-ignore
                    class JarFactory extends java.lang.Object {
                        // @ts-ignore
                        public static newInstance(url: java.net.URL): org.apache.tomcat.Jar
                        // @ts-ignore
                        public static getJarEntryURL(baseUrl: java.net.URL, entryName: java.lang.String | string): java.net.URL
                    }
                }
            }
        }
    }
}
