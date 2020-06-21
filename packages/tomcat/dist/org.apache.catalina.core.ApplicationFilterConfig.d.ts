declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Implementation of a <code>javax.servlet.FilterConfig</code> useful in
                 * managing the filter instances instantiated when a web application
                 * is first started.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class ApplicationFilterConfig extends java.lang.Object implements javax.servlet.FilterConfig, java.io.Serializable {
                    /**
                     * Return the name of the filter we are configuring.
                     */
                    // @ts-ignore
                    public getFilterName(): string
                    /**
                     * @return The class of the filter we are configuring.
                     */
                    // @ts-ignore
                    public getFilterClass(): string
                    /**
                     * Return a <code>String</code> containing the value of the named
                     * initialization parameter, or <code>null</code> if the parameter
                     * does not exist.
                     * @param name Name of the requested initialization parameter
                     */
                    // @ts-ignore
                    public getInitParameter(name: java.lang.String | string): string
                    /**
                     * Return an <code>Enumeration</code> of the names of the initialization
                     * parameters for this Filter.
                     */
                    // @ts-ignore
                    public getInitParameterNames(): java.util.Enumeration<java.lang.String | string>
                    /**
                     * Return the ServletContext of our associated web application.
                     */
                    // @ts-ignore
                    public getServletContext(): javax.servlet.ServletContext
                    /**
                     * Return a String representation of this object.
                     */
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public getFilterInitParameterMap(): java.util.Map<java.lang.String | string, java.lang.String | string>
                }
            }
        }
    }
}
