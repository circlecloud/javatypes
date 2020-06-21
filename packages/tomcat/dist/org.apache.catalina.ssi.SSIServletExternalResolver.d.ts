declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * An implementation of SSIExternalResolver that is used with servlets.
                 * @author Dan Sandberg
                 * @author David Becker
                 */
                // @ts-ignore
                class SSIServletExternalResolver extends java.lang.Object implements org.apache.catalina.ssi.SSIExternalResolver {
                    // @ts-ignore
                    constructor(context: javax.servlet.ServletContext, req: javax.servlet.http.HttpServletRequest, res: javax.servlet.http.HttpServletResponse, isVirtualWebappRelative: boolean, debug: number /*int*/, inputEncoding: java.lang.String | string)
                    // @ts-ignore
                    readonly VARIABLE_NAMES: java.lang.String[] | string[]
                    // @ts-ignore
                    readonly context: javax.servlet.ServletContext
                    // @ts-ignore
                    readonly req: javax.servlet.http.HttpServletRequest
                    // @ts-ignore
                    readonly res: javax.servlet.http.HttpServletResponse
                    // @ts-ignore
                    readonly isVirtualWebappRelative: boolean
                    // @ts-ignore
                    readonly debug: number /*int*/
                    // @ts-ignore
                    readonly inputEncoding: java.lang.String | string
                    // @ts-ignore
                    public log(message: java.lang.String | string, throwable: java.lang.Throwable | Error): void
                    // @ts-ignore
                    public addVariableNames(variableNames: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>): void
                    // @ts-ignore
                    getReqAttributeIgnoreCase(targetName: java.lang.String | string): any
                    // @ts-ignore
                    isNameReserved(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public setVariableValue(name: java.lang.String | string, value: java.lang.String | string): void
                    // @ts-ignore
                    public getVariableValue(name: java.lang.String | string): string
                    // @ts-ignore
                    getCGIVariable(name: java.lang.String | string): string
                    // @ts-ignore
                    public getCurrentDate(): java.util.Date
                    // @ts-ignore
                    nullToEmptyString(string: java.lang.String | string): string
                    // @ts-ignore
                    getPathWithoutFileName(servletPath: java.lang.String | string): string
                    // @ts-ignore
                    getPathWithoutContext(contextPath: java.lang.String | string, servletPath: java.lang.String | string): string
                    // @ts-ignore
                    getAbsolutePath(path: java.lang.String | string): string
                    // @ts-ignore
                    getServletContextAndPathFromNonVirtualPath(nonVirtualPath: java.lang.String | string): org.apache.catalina.ssi.SSIServletExternalResolver.ServletContextAndPath
                    // @ts-ignore
                    getServletContextAndPathFromVirtualPath(virtualPath: java.lang.String | string): org.apache.catalina.ssi.SSIServletExternalResolver.ServletContextAndPath
                    // @ts-ignore
                    isRootContext(servletContext: javax.servlet.ServletContext): boolean
                    // @ts-ignore
                    getServletContextAndPath(originalPath: java.lang.String | string, virtual: boolean): org.apache.catalina.ssi.SSIServletExternalResolver.ServletContextAndPath
                    // @ts-ignore
                    getURLConnection(originalPath: java.lang.String | string, virtual: boolean): java.net.URLConnection
                    // @ts-ignore
                    public getFileLastModified(path: java.lang.String | string, virtual: boolean): number /*long*/
                    // @ts-ignore
                    public getFileSize(path: java.lang.String | string, virtual: boolean): number /*long*/
                    // @ts-ignore
                    public getFileText(originalPath: java.lang.String | string, virtual: boolean): string
                }
            }
        }
    }
}
