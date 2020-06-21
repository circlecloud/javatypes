declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Facade object which masks the internal <code>ApplicationContext</code>
                 * object from the web application.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class ApplicationContextFacade extends java.lang.Object implements javax.servlet.ServletContext {
                    /**
                     * Construct a new instance of this class, associated with the specified
                     * Context instance.
                     * @param context The associated Context instance
                     */
                    // @ts-ignore
                    constructor(context: org.apache.catalina.core.ApplicationContext)
                    // @ts-ignore
                    public getContext(uripath: java.lang.String | string): javax.servlet.ServletContext
                    // @ts-ignore
                    public getMajorVersion(): number /*int*/
                    // @ts-ignore
                    public getMinorVersion(): number /*int*/
                    // @ts-ignore
                    public getMimeType(file: java.lang.String | string): string
                    // @ts-ignore
                    public getResourcePaths(path: java.lang.String | string): Array<java.lang.String | string>
                    // @ts-ignore
                    public getResource(path: java.lang.String | string): java.net.URL
                    // @ts-ignore
                    public getResourceAsStream(path: java.lang.String | string): java.io.InputStream
                    // @ts-ignore
                    public getRequestDispatcher(path: java.lang.String | string): javax.servlet.RequestDispatcher
                    // @ts-ignore
                    public getNamedDispatcher(name: java.lang.String | string): javax.servlet.RequestDispatcher
                    /**
                     * @deprecated As of Java Servlet API 2.1, with no direct replacement.
                     */
                    // @ts-ignore
                    public getServlet(name: java.lang.String | string): javax.servlet.Servlet
                    /**
                     * @deprecated As of Java Servlet API 2.1, with no direct replacement.
                     */
                    // @ts-ignore
                    public getServlets(): java.util.Enumeration<javax.servlet.Servlet>
                    /**
                     * @deprecated As of Java Servlet API 2.1, with no direct replacement.
                     */
                    // @ts-ignore
                    public getServletNames(): java.util.Enumeration<java.lang.String | string>
                    // @ts-ignore
                    public log(msg: java.lang.String | string): void
                    /**
                     * @deprecated As of Java Servlet API 2.1, use
                     *   <code>log(String, Throwable)</code> instead
                     */
                    // @ts-ignore
                    public log(exception: java.lang.Exception, msg: java.lang.String | string): void
                    // @ts-ignore
                    public log(message: java.lang.String | string, throwable: java.lang.Throwable | Error): void
                    // @ts-ignore
                    public getRealPath(path: java.lang.String | string): string
                    // @ts-ignore
                    public getServerInfo(): string
                    // @ts-ignore
                    public getInitParameter(name: java.lang.String | string): string
                    // @ts-ignore
                    public getInitParameterNames(): java.util.Enumeration<java.lang.String | string>
                    // @ts-ignore
                    public getAttribute(name: java.lang.String | string): any
                    // @ts-ignore
                    public getAttributeNames(): java.util.Enumeration<java.lang.String | string>
                    // @ts-ignore
                    public setAttribute(name: java.lang.String | string, object: java.lang.Object | any): void
                    // @ts-ignore
                    public removeAttribute(name: java.lang.String | string): void
                    // @ts-ignore
                    public getServletContextName(): string
                    // @ts-ignore
                    public getContextPath(): string
                    // @ts-ignore
                    public addFilter(filterName: java.lang.String | string, className: java.lang.String | string): javax.servlet.FilterRegistration.Dynamic
                    // @ts-ignore
                    public addFilter(filterName: java.lang.String | string, filter: javax.servlet.Filter): javax.servlet.FilterRegistration.Dynamic
                    // @ts-ignore
                    public addFilter(filterName: java.lang.String | string, filterClass: java.lang.Class<any>): javax.servlet.FilterRegistration.Dynamic
                    // @ts-ignore
                    public createFilter<T extends javax.servlet.Filter>(c: java.lang.Class<T>): T
                    // @ts-ignore
                    public getFilterRegistration(filterName: java.lang.String | string): javax.servlet.FilterRegistration
                    // @ts-ignore
                    public addServlet(servletName: java.lang.String | string, className: java.lang.String | string): javax.servlet.ServletRegistration.Dynamic
                    // @ts-ignore
                    public addServlet(servletName: java.lang.String | string, servlet: javax.servlet.Servlet): javax.servlet.ServletRegistration.Dynamic
                    // @ts-ignore
                    public addServlet(servletName: java.lang.String | string, servletClass: java.lang.Class<any>): javax.servlet.ServletRegistration.Dynamic
                    // @ts-ignore
                    public addJspFile(jspName: java.lang.String | string, jspFile: java.lang.String | string): javax.servlet.ServletRegistration.Dynamic
                    // @ts-ignore
                    public createServlet<T extends javax.servlet.Servlet>(c: java.lang.Class<T>): T
                    // @ts-ignore
                    public getServletRegistration(servletName: java.lang.String | string): javax.servlet.ServletRegistration
                    // @ts-ignore
                    public getDefaultSessionTrackingModes(): Array<javax.servlet.SessionTrackingMode>
                    // @ts-ignore
                    public getEffectiveSessionTrackingModes(): Array<javax.servlet.SessionTrackingMode>
                    // @ts-ignore
                    public getSessionCookieConfig(): javax.servlet.SessionCookieConfig
                    // @ts-ignore
                    public setSessionTrackingModes(sessionTrackingModes: java.util.Set<javax.servlet.SessionTrackingMode> | Array<javax.servlet.SessionTrackingMode>): void
                    // @ts-ignore
                    public setInitParameter(name: java.lang.String | string, value: java.lang.String | string): boolean
                    // @ts-ignore
                    public addListener(listenerClass: java.lang.Class<any>): void
                    // @ts-ignore
                    public addListener(className: java.lang.String | string): void
                    // @ts-ignore
                    public addListener<T extends java.util.EventListener>(t: T): void
                    // @ts-ignore
                    public createListener<T extends java.util.EventListener>(c: java.lang.Class<T>): T
                    // @ts-ignore
                    public declareRoles(...roleNames: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public getClassLoader(): java.lang.ClassLoader
                    // @ts-ignore
                    public getEffectiveMajorVersion(): number /*int*/
                    // @ts-ignore
                    public getEffectiveMinorVersion(): number /*int*/
                    // @ts-ignore
                    public getFilterRegistrations(): java.util.Map<java.lang.String | string, any>
                    // @ts-ignore
                    public getJspConfigDescriptor(): javax.servlet.descriptor.JspConfigDescriptor
                    // @ts-ignore
                    public getServletRegistrations(): java.util.Map<java.lang.String | string, any>
                    // @ts-ignore
                    public getVirtualServerName(): string
                    // @ts-ignore
                    public getSessionTimeout(): number /*int*/
                    // @ts-ignore
                    public setSessionTimeout(sessionTimeout: number /*int*/): void
                    // @ts-ignore
                    public getRequestCharacterEncoding(): string
                    // @ts-ignore
                    public setRequestCharacterEncoding(encoding: java.lang.String | string): void
                    // @ts-ignore
                    public getResponseCharacterEncoding(): string
                    // @ts-ignore
                    public setResponseCharacterEncoding(encoding: java.lang.String | string): void
                }
            }
        }
    }
}
