declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * General purpose request parsing and encoding utility methods.
                 * @author Craig R. McClanahan
                 * @author Tim Tye
                 */
                // @ts-ignore
                class RequestUtil extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Build an appropriate return value for
                     * {@link HttpServletRequest#getRequestURL()} based on the provided
                     * request object. Note that this will also work for instances of
                     * {@link javax.servlet.http.HttpServletRequestWrapper}.
                     * @param request The request object for which the URL should be built
                     * @return The request URL for the given request object
                     */
                    // @ts-ignore
                    public static getRequestURL(request: javax.servlet.http.HttpServletRequest): java.lang.StringBuffer
                }
            }
        }
    }
}
