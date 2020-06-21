declare namespace org {
    namespace apache {
        namespace catalina {
            namespace servlets {
                /**
                 * <p>The default resource-serving servlet for most web applications,
                 * used to serve static resources such as HTML pages and images.
                 * </p>
                 * <p>
                 * This servlet is intended to be mapped to <em>/</em> e.g.:
                 * </p>
                 * <pre>
                 * &lt;servlet-mapping&gt;
                 * &lt;servlet-name&gt;default&lt;/servlet-name&gt;
                 * &lt;url-pattern&gt;/&lt;/url-pattern&gt;
                 * &lt;/servlet-mapping&gt;
                 * </pre>
                 * <p>It can be mapped to sub-paths, however in all cases resources are served
                 * from the web application resource root using the full path from the root
                 * of the web application context.
                 * <br>e.g. given a web application structure:
                 * </p>
                 * <pre>
                 * /context
                 * /images
                 * tomcat2.jpg
                 * /static
                 * /images
                 * tomcat.jpg
                 * </pre>
                 * <p>
                 * ... and a servlet mapping that maps only <code>/static/*</code> to the default servlet:
                 * </p>
                 * <pre>
                 * &lt;servlet-mapping&gt;
                 * &lt;servlet-name&gt;default&lt;/servlet-name&gt;
                 * &lt;url-pattern&gt;/static/*&lt;/url-pattern&gt;
                 * &lt;/servlet-mapping&gt;
                 * </pre>
                 * <p>
                 * Then a request to <code>/context/static/images/tomcat.jpg</code> will succeed
                 * while a request to <code>/context/images/tomcat2.jpg</code> will fail.
                 * </p>
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class DefaultServlet extends javax.servlet.http.HttpServlet {
                    // @ts-ignore
                    constructor()
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Full range marker.
                     */
                    // @ts-ignore
                    static readonly FULL: java.util.ArrayList<org.apache.catalina.servlets.DefaultServlet.Range>
                    /**
                     * MIME multipart separation string
                     */
                    // @ts-ignore
                    static readonly mimeSeparation: java.lang.String | string
                    /**
                     * Size of file transfer buffer in bytes.
                     */
                    // @ts-ignore
                    static readonly BUFFER_SIZE: number /*int*/
                    /**
                     * The debugging detail level for this servlet.
                     */
                    // @ts-ignore
                    debug: number /*int*/
                    /**
                     * The input buffer size to use when serving resources.
                     */
                    // @ts-ignore
                    input: number /*int*/
                    /**
                     * Should we generate directory listings?
                     */
                    // @ts-ignore
                    listings: boolean
                    /**
                     * Read only flag. By default, it's set to true.
                     */
                    // @ts-ignore
                    readOnly: boolean
                    /**
                     * List of compression formats to serve and their preference order.
                     */
                    // @ts-ignore
                    compressionFormats: org.apache.catalina.servlets.DefaultServlet.CompressionFormat[]
                    /**
                     * The output buffer size to use when serving resources.
                     */
                    // @ts-ignore
                    output: number /*int*/
                    /**
                     * Allow customized directory listing per directory.
                     */
                    // @ts-ignore
                    localXsltFile: java.lang.String | string
                    /**
                     * Allow customized directory listing per context.
                     */
                    // @ts-ignore
                    contextXsltFile: java.lang.String | string
                    /**
                     * Allow customized directory listing per instance.
                     */
                    // @ts-ignore
                    globalXsltFile: java.lang.String | string
                    /**
                     * Allow a readme file to be included.
                     */
                    // @ts-ignore
                    readmeFile: java.lang.String | string
                    /**
                     * The complete set of web application resources
                     */
                    // @ts-ignore
                    resources: org.apache.catalina.WebResourceRoot
                    /**
                     * File encoding to be used when reading static files. If none is specified
                     * the platform default is used.
                     */
                    // @ts-ignore
                    fileEncoding: java.lang.String | string
                    /**
                     * Minimum size for sendfile usage in bytes.
                     */
                    // @ts-ignore
                    sendfileSize: number /*int*/
                    /**
                     * Should the Accept-Ranges: bytes header be send with static resources?
                     */
                    // @ts-ignore
                    useAcceptRanges: boolean
                    /**
                     * Flag to determine if server information is presented.
                     */
                    // @ts-ignore
                    showServerInfo: boolean
                    /**
                     * Finalize this servlet.
                     */
                    // @ts-ignore
                    public destroy(): void
                    /**
                     * Initialize this servlet.
                     */
                    // @ts-ignore
                    public init(): void
                    /**
                     * Return the relative path associated with this servlet.
                     * @param request The servlet request we are processing
                     * @return the relative path
                     */
                    // @ts-ignore
                    getRelativePath(request: javax.servlet.http.HttpServletRequest): string
                    // @ts-ignore
                    getRelativePath(request: javax.servlet.http.HttpServletRequest, allowEmptyPath: boolean): string
                    /**
                     * Determines the appropriate path to prepend resources with
                     * when generating directory listings. Depending on the behaviour of
                     * {@link #getRelativePath(HttpServletRequest)} this will change.
                     * @param request the request to determine the path for
                     * @return the prefix to apply to all resources in the listing.
                     */
                    // @ts-ignore
                    getPathPrefix(request: javax.servlet.http.HttpServletRequest): string
                    // @ts-ignore
                    service(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                    /**
                     * Process a GET request for the specified resource.
                     * @param request The servlet request we are processing
                     * @param response The servlet response we are creating
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet-specified error occurs
                     */
                    // @ts-ignore
                    doGet(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse): void
                    /**
                     * Process a HEAD request for the specified resource.
                     * @param request The servlet request we are processing
                     * @param response The servlet response we are creating
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet-specified error occurs
                     */
                    // @ts-ignore
                    doHead(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse): void
                    /**
                     * Override default implementation to ensure that TRACE is correctly
                     * handled.
                     * @param req   the {#link HttpServletRequest} object that
                     *                   contains the request the client made of
                     *                   the servlet
                     * @param resp  the {#link HttpServletResponse} object that
                     *                   contains the response the servlet returns
                     *                   to the client
                     * @exception IOException   if an input or output error occurs
                     *                               while the servlet is handling the
                     *                               OPTIONS request
                     * @exception ServletException  if the request for the
                     *                                   OPTIONS cannot be handled
                     */
                    // @ts-ignore
                    doOptions(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                    // @ts-ignore
                    determineMethodsAllowed(req: javax.servlet.http.HttpServletRequest): string
                    // @ts-ignore
                    sendNotAllowed(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                    /**
                     * Process a POST request for the specified resource.
                     * @param request The servlet request we are processing
                     * @param response The servlet response we are creating
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet-specified error occurs
                     */
                    // @ts-ignore
                    doPost(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse): void
                    /**
                     * Process a PUT request for the specified resource.
                     * @param req The servlet request we are processing
                     * @param resp The servlet response we are creating
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet-specified error occurs
                     */
                    // @ts-ignore
                    doPut(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                    /**
                     * Handle a partial PUT.  New content specified in request is appended to
                     * existing content in oldRevisionContent (if present). This code does
                     * not support simultaneous partial updates to the same resource.
                     * @param req The Servlet request
                     * @param range The range that will be written
                     * @param path The path
                     * @return the associated file object
                     * @throws IOException an IO error occurred
                     */
                    // @ts-ignore
                    executePartialPut(req: javax.servlet.http.HttpServletRequest, range: org.apache.catalina.servlets.DefaultServlet.Range, path: java.lang.String | string): java.io.File
                    /**
                     * Process a DELETE request for the specified resource.
                     * @param req The servlet request we are processing
                     * @param resp The servlet response we are creating
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet-specified error occurs
                     */
                    // @ts-ignore
                    doDelete(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                    /**
                     * Check if the conditions specified in the optional If headers are
                     * satisfied.
                     * @param request   The servlet request we are processing
                     * @param response  The servlet response we are creating
                     * @param resource  The resource
                     * @return <code>true</code> if the resource meets all the specified
                     *   conditions, and <code>false</code> if any of the conditions is not
                     *   satisfied, in which case request processing is stopped
                     * @throws IOException an IO error occurred
                     */
                    // @ts-ignore
                    checkIfHeaders(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, resource: org.apache.catalina.WebResource): boolean
                    /**
                     * URL rewriter.
                     * @param path Path which has to be rewritten
                     * @return the rewritten path
                     */
                    // @ts-ignore
                    rewriteUrl(path: java.lang.String | string): string
                    /**
                     * Serve the specified resource, optionally including the data content.
                     * @param request       The servlet request we are processing
                     * @param response      The servlet response we are creating
                     * @param content       Should the content be included?
                     * @param inputEncoding The encoding to use if it is necessary to access the
                     *                       source as characters rather than as bytes
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet-specified error occurs
                     */
                    // @ts-ignore
                    serveResource(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, content: boolean, inputEncoding: java.lang.String | string): void
                    /**
                     * Parse the content-range header.
                     * @param request The servlet request we a)re processing
                     * @param response The servlet response we are creating
                     * @return the range object
                     * @throws IOException an IO error occurred
                     */
                    // @ts-ignore
                    parseContentRange(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse): org.apache.catalina.servlets.DefaultServlet.Range
                    /**
                     * Parse the range header.
                     * @param request   The servlet request we are processing
                     * @param response  The servlet response we are creating
                     * @param resource  The resource
                     * @return a list of ranges
                     * @throws IOException an IO error occurred
                     */
                    // @ts-ignore
                    parseRange(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, resource: org.apache.catalina.WebResource): java.util.ArrayList<org.apache.catalina.servlets.DefaultServlet.Range>
                    /**
                     * Decide which way to render. HTML or XML.
                     * @param contextPath The path
                     * @param resource    The resource
                     * @param encoding    The encoding to use to process the readme (if any)
                     * @return the input stream with the rendered output
                     * @throws IOException an IO error occurred
                     * @throws ServletException rendering error
                     */
                    // @ts-ignore
                    render(contextPath: java.lang.String | string, resource: org.apache.catalina.WebResource, encoding: java.lang.String | string): java.io.InputStream
                    /**
                     * Return an InputStream to an XML representation of the contents this
                     * directory.
                     * @param contextPath Context path to which our internal paths are relative
                     * @param resource    The associated resource
                     * @param xsltSource  The XSL stylesheet
                     * @param encoding    The encoding to use to process the readme (if any)
                     * @return the XML data
                     * @throws IOException an IO error occurred
                     * @throws ServletException rendering error
                     */
                    // @ts-ignore
                    renderXml(contextPath: java.lang.String | string, resource: org.apache.catalina.WebResource, xsltSource: javax.xml.transform.Source, encoding: java.lang.String | string): java.io.InputStream
                    /**
                     * Return an InputStream to an HTML representation of the contents of this
                     * directory.
                     * @param contextPath Context path to which our internal paths are relative
                     * @param resource    The associated resource
                     * @param encoding    The encoding to use to process the readme (if any)
                     * @return the HTML data
                     * @throws IOException an IO error occurred
                     */
                    // @ts-ignore
                    renderHtml(contextPath: java.lang.String | string, resource: org.apache.catalina.WebResource, encoding: java.lang.String | string): java.io.InputStream
                    /**
                     * Render the specified file size (in bytes).
                     * @param size File size (in bytes)
                     * @return the formatted size
                     */
                    // @ts-ignore
                    renderSize(size: number /*long*/): string
                    /**
                     * Get the readme file as a string.
                     * @param directory The directory to search
                     * @param encoding The readme encoding
                     * @return the readme for the specified directory
                     */
                    // @ts-ignore
                    getReadme(directory: org.apache.catalina.WebResource, encoding: java.lang.String | string): string
                    /**
                     * Return a Source for the xsl template (if possible).
                     * @param directory The directory to search
                     * @return the source for the specified directory
                     * @throws IOException an IO error occurred
                     */
                    // @ts-ignore
                    findXsltSource(directory: org.apache.catalina.WebResource): javax.xml.transform.Source
                    /**
                     * Check if sendfile can be used.
                     * @param request The Servlet request
                     * @param response The Servlet response
                     * @param resource The resource
                     * @param length The length which will be written (will be used only if
                     *   range is null)
                     * @param range The range that will be written
                     * @return <code>true</code> if sendfile should be used (writing is then
                     *   delegated to the endpoint)
                     */
                    // @ts-ignore
                    checkSendfile(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, resource: org.apache.catalina.WebResource, length: number /*long*/, range: org.apache.catalina.servlets.DefaultServlet.Range): boolean
                    /**
                     * Check if the if-match condition is satisfied.
                     * @param request   The servlet request we are processing
                     * @param response  The servlet response we are creating
                     * @param resource  The resource
                     * @return <code>true</code> if the resource meets the specified condition,
                     *   and <code>false</code> if the condition is not satisfied, in which case
                     *   request processing is stopped
                     * @throws IOException an IO error occurred
                     */
                    // @ts-ignore
                    checkIfMatch(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, resource: org.apache.catalina.WebResource): boolean
                    /**
                     * Check if the if-modified-since condition is satisfied.
                     * @param request   The servlet request we are processing
                     * @param response  The servlet response we are creating
                     * @param resource  The resource
                     * @return <code>true</code> if the resource meets the specified condition,
                     *   and <code>false</code> if the condition is not satisfied, in which case
                     *   request processing is stopped
                     */
                    // @ts-ignore
                    checkIfModifiedSince(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, resource: org.apache.catalina.WebResource): boolean
                    /**
                     * Check if the if-none-match condition is satisfied.
                     * @param request   The servlet request we are processing
                     * @param response  The servlet response we are creating
                     * @param resource  The resource
                     * @return <code>true</code> if the resource meets the specified condition,
                     *   and <code>false</code> if the condition is not satisfied, in which case
                     *   request processing is stopped
                     * @throws IOException an IO error occurred
                     */
                    // @ts-ignore
                    checkIfNoneMatch(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, resource: org.apache.catalina.WebResource): boolean
                    /**
                     * Check if the if-unmodified-since condition is satisfied.
                     * @param request   The servlet request we are processing
                     * @param response  The servlet response we are creating
                     * @param resource  The resource
                     * @return <code>true</code> if the resource meets the specified condition,
                     *   and <code>false</code> if the condition is not satisfied, in which case
                     *   request processing is stopped
                     * @throws IOException an IO error occurred
                     */
                    // @ts-ignore
                    checkIfUnmodifiedSince(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, resource: org.apache.catalina.WebResource): boolean
                    /**
                     * Copy the contents of the specified input stream to the specified
                     * output stream, and ensure that both streams are closed before returning
                     * (even in the face of an exception).
                     * @param is        The input stream to read the source resource from
                     * @param ostream   The output stream to write to
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    copy(jis: java.io.InputStream, ostream: javax.servlet.ServletOutputStream): void
                    /**
                     * Copy the contents of the specified input stream to the specified
                     * output stream, and ensure that both streams are closed before returning
                     * (even in the face of an exception).
                     * @param is        The input stream to read the source resource from
                     * @param writer    The writer to write to
                     * @param encoding  The encoding to use when reading the source input stream
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    copy(jis: java.io.InputStream, writer: java.io.PrintWriter, encoding: java.lang.String | string): void
                    /**
                     * Copy the contents of the specified input stream to the specified
                     * output stream, and ensure that both streams are closed before returning
                     * (even in the face of an exception).
                     * @param resource  The source resource
                     * @param ostream   The output stream to write to
                     * @param range     Range the client wanted to retrieve
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    copy(resource: org.apache.catalina.WebResource, ostream: javax.servlet.ServletOutputStream, range: org.apache.catalina.servlets.DefaultServlet.Range): void
                    /**
                     * Copy the contents of the specified input stream to the specified
                     * output stream, and ensure that both streams are closed before returning
                     * (even in the face of an exception).
                     * @param resource      The source resource
                     * @param ostream       The output stream to write to
                     * @param ranges        Enumeration of the ranges the client wanted to
                     *                           retrieve
                     * @param contentType   Content type of the resource
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    copy(resource: org.apache.catalina.WebResource, ostream: javax.servlet.ServletOutputStream, ranges: java.util.Iterator<org.apache.catalina.servlets.DefaultServlet.Range>, contentType: java.lang.String | string): void
                    /**
                     * Copy the contents of the specified input stream to the specified
                     * output stream, and ensure that both streams are closed before returning
                     * (even in the face of an exception).
                     * @param istream The input stream to read from
                     * @param ostream The output stream to write to
                     * @return Exception which occurred during processing
                     */
                    // @ts-ignore
                    copyRange(istream: java.io.InputStream, ostream: javax.servlet.ServletOutputStream): java.io.IOException
                    /**
                     * Copy the contents of the specified input stream to the specified
                     * output stream, and ensure that both streams are closed before returning
                     * (even in the face of an exception).
                     * @param reader The reader to read from
                     * @param writer The writer to write to
                     * @return Exception which occurred during processing
                     */
                    // @ts-ignore
                    copyRange(reader: java.io.Reader, writer: java.io.PrintWriter): java.io.IOException
                    /**
                     * Copy the contents of the specified input stream to the specified
                     * output stream, and ensure that both streams are closed before returning
                     * (even in the face of an exception).
                     * @param istream The input stream to read from
                     * @param ostream The output stream to write to
                     * @param start Start of the range which will be copied
                     * @param end End of the range which will be copied
                     * @return Exception which occurred during processing
                     */
                    // @ts-ignore
                    copyRange(istream: java.io.InputStream, ostream: javax.servlet.ServletOutputStream, start: number /*long*/, end: number /*long*/): java.io.IOException
                }
            }
        }
    }
}
