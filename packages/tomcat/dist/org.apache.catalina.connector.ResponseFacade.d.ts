declare namespace org {
    namespace apache {
        namespace catalina {
            namespace connector {
                /**
                 * Facade class that wraps a Coyote response object.
                 * All methods are delegated to the wrapped response.
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class ResponseFacade extends java.lang.Object implements javax.servlet.http.HttpServletResponse {
                    /**
                     * Construct a wrapper for the specified response.
                     * @param response The response to be wrapped
                     */
                    // @ts-ignore
                    constructor(response: org.apache.catalina.connector.Response)
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * The wrapped response.
                     */
                    // @ts-ignore
                    response: org.apache.catalina.connector.Response
                    /**
                     * Clear facade.
                     */
                    // @ts-ignore
                    public clear(): void
                    /**
                     * Prevent cloning the facade.
                     */
                    // @ts-ignore
                    clone(): any
                    // @ts-ignore
                    public finish(): void
                    // @ts-ignore
                    public isFinished(): boolean
                    // @ts-ignore
                    public getContentWritten(): number /*long*/
                    // @ts-ignore
                    public getCharacterEncoding(): string
                    // @ts-ignore
                    public getOutputStream(): javax.servlet.ServletOutputStream
                    // @ts-ignore
                    public getWriter(): java.io.PrintWriter
                    // @ts-ignore
                    public setContentLength(len: number /*int*/): void
                    // @ts-ignore
                    public setContentLengthLong(length: number /*long*/): void
                    // @ts-ignore
                    public setContentType(type: java.lang.String | string): void
                    // @ts-ignore
                    public setBufferSize(size: number /*int*/): void
                    // @ts-ignore
                    public getBufferSize(): number /*int*/
                    // @ts-ignore
                    public flushBuffer(): void
                    // @ts-ignore
                    public resetBuffer(): void
                    // @ts-ignore
                    public isCommitted(): boolean
                    // @ts-ignore
                    public reset(): void
                    // @ts-ignore
                    public setLocale(loc: java.util.Locale): void
                    // @ts-ignore
                    public getLocale(): java.util.Locale
                    // @ts-ignore
                    public addCookie(cookie: javax.servlet.http.Cookie): void
                    // @ts-ignore
                    public containsHeader(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public encodeURL(url: java.lang.String | string): string
                    // @ts-ignore
                    public encodeRedirectURL(url: java.lang.String | string): string
                    // @ts-ignore
                    public encodeUrl(url: java.lang.String | string): string
                    // @ts-ignore
                    public encodeRedirectUrl(url: java.lang.String | string): string
                    // @ts-ignore
                    public sendError(sc: number /*int*/, msg: java.lang.String | string): void
                    // @ts-ignore
                    public sendError(sc: number /*int*/): void
                    // @ts-ignore
                    public sendRedirect(location: java.lang.String | string): void
                    // @ts-ignore
                    public setDateHeader(name: java.lang.String | string, date: number /*long*/): void
                    // @ts-ignore
                    public addDateHeader(name: java.lang.String | string, date: number /*long*/): void
                    // @ts-ignore
                    public setHeader(name: java.lang.String | string, value: java.lang.String | string): void
                    // @ts-ignore
                    public addHeader(name: java.lang.String | string, value: java.lang.String | string): void
                    // @ts-ignore
                    public setIntHeader(name: java.lang.String | string, value: number /*int*/): void
                    // @ts-ignore
                    public addIntHeader(name: java.lang.String | string, value: number /*int*/): void
                    // @ts-ignore
                    public setStatus(sc: number /*int*/): void
                    // @ts-ignore
                    public setStatus(sc: number /*int*/, sm: java.lang.String | string): void
                    // @ts-ignore
                    public getContentType(): string
                    // @ts-ignore
                    public setCharacterEncoding(arg0: java.lang.String | string): void
                    // @ts-ignore
                    public getStatus(): number /*int*/
                    // @ts-ignore
                    public getHeader(name: java.lang.String | string): string
                    // @ts-ignore
                    public getHeaderNames(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getHeaders(name: java.lang.String | string): Array<java.lang.String | string>
                    // @ts-ignore
                    public setTrailerFields(supplier: java.util.function$.Supplier<java.util.Map<java.lang.String | string, java.lang.String | string>>): void
                    // @ts-ignore
                    public getTrailerFields(): java.util.function$.Supplier<java.util.Map<java.lang.String | string, java.lang.String | string>>
                }
            }
        }
    }
}
