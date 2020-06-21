declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace file {
                    /**
                     * This class is used to obtain {@link InputStream}s for configuration files
                     * from a given location String. This allows greater flexibility than these
                     * files having to be loaded directly from a file system.
                     */
                    // @ts-ignore
                    class ConfigFileLoader extends java.lang.Object {
                        // @ts-ignore
                        public static getSource(): org.apache.tomcat.util.file.ConfigurationSource
                        // @ts-ignore
                        public static setSource(source: org.apache.tomcat.util.file.ConfigurationSource): void
                        /**
                         * Load the resource from the specified location.
                         * @param location The location for the resource of interest. The location
                         *                  may be a URL or a file path. Relative paths will be
                         *                  resolved against CATALINA_BASE.
                         * @return The InputStream for the given resource. The caller is responsible
                         *          for closing this stream when it is no longer used.
                         * @throws IOException If an InputStream cannot be created using the
                         *                      provided location
                         */
                        // @ts-ignore
                        public static getInputStream(location: java.lang.String | string): java.io.InputStream
                        // @ts-ignore
                        public static getURI(location: java.lang.String | string): java.net.URI
                    }
                }
            }
        }
    }
}
