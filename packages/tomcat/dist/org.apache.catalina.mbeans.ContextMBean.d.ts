declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                // @ts-ignore
                class ContextMBean extends org.apache.catalina.mbeans.BaseCatalinaMBean<org.apache.catalina.Context> {
                    // @ts-ignore
                    constructor()
                    /**
                     * Return the set of application parameters for this application.
                     * @return a string array with a representation of each parameter
                     * @throws MBeanException propagated from the managed resource access
                     */
                    // @ts-ignore
                    public findApplicationParameters(): string[]
                    /**
                     * Return the security constraints for this web application.
                     * If there are none, a zero-length array is returned.
                     * @return a string array with a representation of each
                     *   security constraint
                     * @throws MBeanException propagated from the managed resource access
                     */
                    // @ts-ignore
                    public findConstraints(): string[]
                    /**
                     * Return the error page entry for the specified HTTP error code,
                     * if any; otherwise return <code>null</code>.
                     * @param errorCode Error code to look up
                     * @return a string representation of the error page
                     * @throws MBeanException propagated from the managed resource access
                     */
                    // @ts-ignore
                    public findErrorPage(errorCode: number /*int*/): string
                    /**
                     * Return the error page entry for the specified Java exception type,
                     * if any; otherwise return <code>null</code>.
                     * @param exceptionType Exception type to look up
                     * @return a string representation of the error page
                     * @throws MBeanException propagated from the managed resource access
                     * @deprecated Unused. Will be removed in Tomcat 10.
                     *              Use {#link #findErrorPage(Throwable)} instead.
                     */
                    // @ts-ignore
                    public findErrorPage(exceptionType: java.lang.String | string): string
                    /**
                     * Return the error page entry for the specified Java exception type,
                     * if any; otherwise return <code>null</code>.
                     * @param exceptionType Exception type to look up
                     * @return a string representation of the error page
                     * @throws MBeanException propagated from the managed resource access
                     */
                    // @ts-ignore
                    public findErrorPage(exceptionType: java.lang.Throwable | Error): string
                    /**
                     * Return the set of defined error pages for all specified error codes
                     * and exception types.
                     * @return a string array with a representation of each error page
                     * @throws MBeanException propagated from the managed resource access
                     */
                    // @ts-ignore
                    public findErrorPages(): string[]
                    /**
                     * Return the filter definition for the specified filter name, if any;
                     * otherwise return <code>null</code>.
                     * @param name Filter name to look up
                     * @return a string representation of the filter definition
                     * @throws MBeanException propagated from the managed resource access
                     */
                    // @ts-ignore
                    public findFilterDef(name: java.lang.String | string): string
                    /**
                     * Return the set of defined filters for this Context.
                     * @return a string array with a representation of all
                     *   the filter definitions
                     * @throws MBeanException propagated from the managed resource access
                     */
                    // @ts-ignore
                    public findFilterDefs(): string[]
                    /**
                     * Return the set of filter mappings for this Context.
                     * @return a string array with a representation of all the filter mappings
                     * @throws MBeanException propagated from the managed resource access
                     */
                    // @ts-ignore
                    public findFilterMaps(): string[]
                }
            }
        }
    }
}
