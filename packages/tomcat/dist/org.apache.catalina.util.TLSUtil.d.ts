declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                // @ts-ignore
                class TLSUtil extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Determines if the named request attribute is used to pass information
                     * about the TLS configuration of the connection to the application. Both
                     * the standard request attributes defined by the Servlet specification and
                     * Tomcat specific attributes are supported.
                     * @param name  The attribute name to test
                     * @return {#code true} if the attribute is used to pass TLS configuration
                     *          information, otherwise {@code false}
                     */
                    // @ts-ignore
                    public static isTLSRequestAttribute(name: java.lang.String | string): boolean
                }
            }
        }
    }
}
