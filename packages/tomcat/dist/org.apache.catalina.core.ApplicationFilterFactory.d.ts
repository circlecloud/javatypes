declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Factory for the creation and caching of Filters and creation
                 * of Filter Chains.
                 * @author Greg Murray
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class ApplicationFilterFactory extends java.lang.Object {
                    /**
                     * Construct a FilterChain implementation that will wrap the execution of
                     * the specified servlet instance.
                     * @param request The servlet request we are processing
                     * @param wrapper The wrapper managing the servlet instance
                     * @param servlet The servlet instance to be wrapped
                     * @return The configured FilterChain instance or null if none is to be
                     *          executed.
                     */
                    // @ts-ignore
                    public static createFilterChain(request: javax.servlet.ServletRequest, wrapper: org.apache.catalina.Wrapper, servlet: javax.servlet.Servlet): org.apache.catalina.core.ApplicationFilterChain
                }
            }
        }
    }
}
