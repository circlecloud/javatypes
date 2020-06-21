declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                /**
                 * Base class for filters that provides generic initialisation and a simple
                 * no-op destruction.
                 */
                // @ts-ignore
                abstract class FilterBase extends java.lang.Object implements javax.servlet.Filter {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    abstract getLogger(): org.apache.juli.logging.Log
                    /**
                     * Iterates over the configuration parameters and either logs a warning,
                     * or throws an exception for any parameter that does not have a matching
                     * setter in this filter.
                     * @param filterConfig The configuration information associated with the
                     *                      filter instance being initialised
                     * @throws ServletException if {#link #isConfigProblemFatal()} returns
                     *                           {@code true} and a configured parameter does not
                     *                           have a matching setter
                     */
                    // @ts-ignore
                    public init(filterConfig: javax.servlet.FilterConfig): void
                    /**
                     * Determines if an exception when calling a setter or an unknown
                     * configuration attribute triggers the failure of the this filter which in
                     * turn will prevent the web application from starting.
                     * @return <code>true</code> if a problem should trigger the failure of this
                     *          filter, else <code>false</code>
                     */
                    // @ts-ignore
                    isConfigProblemFatal(): boolean
                }
            }
        }
    }
}
