declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * Utility class for working with URIs and URLs.
                     */
                    // @ts-ignore
                    class UriUtil extends java.lang.Object {
                        /**
                         * Determine if a URI string has a <code>scheme</code> component.
                         * @param uri The URI to test
                         * @return {#code true} if a scheme is present, otherwise {code @false}
                         */
                        // @ts-ignore
                        public static hasScheme(uri: java.lang.CharSequence): boolean
                        // @ts-ignore
                        public static buildJarUrl(jarFile: java.io.File): java.net.URL
                        // @ts-ignore
                        public static buildJarUrl(jarFile: java.io.File, entryPath: java.lang.String | string): java.net.URL
                        // @ts-ignore
                        public static buildJarUrl(fileUrlString: java.lang.String | string): java.net.URL
                        // @ts-ignore
                        public static buildJarUrl(fileUrlString: java.lang.String | string, entryPath: java.lang.String | string): java.net.URL
                        // @ts-ignore
                        public static buildJarSafeUrl(file: java.io.File): java.net.URL
                        /**
                         * Convert a URL of the form <code>war:file:...</code> to
                         * <code>jar:file:...</code>.
                         * @param warUrl The WAR URL to convert
                         * @return The equivalent JAR URL
                         * @throws MalformedURLException If the conversion fails
                         */
                        // @ts-ignore
                        public static warToJar(warUrl: java.net.URL): java.net.URL
                        // @ts-ignore
                        public static getWarSeparator(): string
                    }
                }
            }
        }
    }
}
