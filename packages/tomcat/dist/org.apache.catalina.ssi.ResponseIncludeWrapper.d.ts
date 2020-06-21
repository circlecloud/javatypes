declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * A HttpServletResponseWrapper, used from
                 * <code>SSIServletExternalResolver</code>
                 * @author Bip Thelin
                 * @author David Becker
                 */
                // @ts-ignore
                class ResponseIncludeWrapper extends javax.servlet.http.HttpServletResponseWrapper {
                    /**
                     * Initialize our wrapper with the current HttpServletResponse and
                     * ServletOutputStream.
                     * @param response The response to use
                     * @param captureServletOutputStream The ServletOutputStream to use
                     */
                    // @ts-ignore
                    constructor(response: javax.servlet.http.HttpServletResponse, captureServletOutputStream: javax.servlet.ServletOutputStream)
                    // @ts-ignore
                    lastModified: number /*long*/
                    /**
                     * Our ServletOutputStream
                     */
                    // @ts-ignore
                    readonly captureServletOutputStream: javax.servlet.ServletOutputStream
                    // @ts-ignore
                    servletOutputStream: javax.servlet.ServletOutputStream
                    // @ts-ignore
                    printWriter: java.io.PrintWriter
                    /**
                     * Flush the servletOutputStream or printWriter ( only one will be non-null )
                     * This must be called after a requestDispatcher.include, since we can't
                     * assume that the included servlet flushed its stream.
                     * @throws IOException an IO error occurred
                     */
                    // @ts-ignore
                    public flushOutputStreamOrWriter(): void
                    /**
                     * Return a printwriter, throws and exception if a OutputStream already
                     * been returned.
                     * @return a PrintWriter object
                     * @exception java.io.IOException
                     *                 if the outputstream already been called
                     */
                    // @ts-ignore
                    public getWriter(): java.io.PrintWriter
                    /**
                     * Return a OutputStream, throws and exception if a printwriter already
                     * been returned.
                     * @return a OutputStream object
                     * @exception java.io.IOException
                     *                 if the printwriter already been called
                     */
                    // @ts-ignore
                    public getOutputStream(): javax.servlet.ServletOutputStream
                    /**
                     * Returns the value of the <code>last-modified</code> header field. The
                     * result is the number of milliseconds since January 1, 1970 GMT.
                     * @return the date the resource referenced by this
                     *    <code>ResponseIncludeWrapper</code> was last modified, or -1 if not
                     *    known.
                     */
                    // @ts-ignore
                    public getLastModified(): number /*long*/
                    // @ts-ignore
                    public addDateHeader(name: java.lang.String | string, value: number /*long*/): void
                    // @ts-ignore
                    public addHeader(name: java.lang.String | string, value: java.lang.String | string): void
                    // @ts-ignore
                    public setDateHeader(name: java.lang.String | string, value: number /*long*/): void
                    // @ts-ignore
                    public setHeader(name: java.lang.String | string, value: java.lang.String | string): void
                }
            }
        }
    }
}
