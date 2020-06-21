declare namespace org {
    namespace apache {
        namespace catalina {
            namespace servlets {
                /**
                 * Servlet which adds support for WebDAV level 2. All the basic HTTP requests
                 * are handled by the DefaultServlet. The WebDAVServlet must not be used as the
                 * default servlet (ie mapped to '/') as it will not work in this configuration.
                 * <p>
                 * Mapping a subpath (e.g. <code>/webdav/*</code> to this servlet has the effect
                 * of re-mounting the entire web application under that sub-path, with WebDAV
                 * access to all the resources. The <code>WEB-INF</code> and <code>META-INF</code>
                 * directories are protected in this re-mounted resource tree.
                 * <p>
                 * To enable WebDAV for a context add the following to web.xml:
                 * <pre>
                 * &lt;servlet&gt;
                 * &lt;servlet-name&gt;webdav&lt;/servlet-name&gt;
                 * &lt;servlet-class&gt;org.apache.catalina.servlets.WebdavServlet&lt;/servlet-class&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;debug&lt;/param-name&gt;
                 * &lt;param-value&gt;0&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;listings&lt;/param-name&gt;
                 * &lt;param-value&gt;false&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;/servlet&gt;
                 * &lt;servlet-mapping&gt;
                 * &lt;servlet-name&gt;webdav&lt;/servlet-name&gt;
                 * &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
                 * &lt;/servlet-mapping&gt;
                 * </pre>
                 * This will enable read only access. To enable read-write access add:
                 * <pre>
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;readonly&lt;/param-name&gt;
                 * &lt;param-value&gt;false&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * </pre>
                 * To make the content editable via a different URL, use the following
                 * mapping:
                 * <pre>
                 * &lt;servlet-mapping&gt;
                 * &lt;servlet-name&gt;webdav&lt;/servlet-name&gt;
                 * &lt;url-pattern&gt;/webdavedit/*&lt;/url-pattern&gt;
                 * &lt;/servlet-mapping&gt;
                 * </pre>
                 * By default access to /WEB-INF and META-INF are not available via WebDAV. To
                 * enable access to these URLs, use add:
                 * <pre>
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;allowSpecialPaths&lt;/param-name&gt;
                 * &lt;param-value&gt;true&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * </pre>
                 * Don't forget to secure access appropriately to the editing URLs, especially
                 * if allowSpecialPaths is used. With the mapping configuration above, the
                 * context will be accessible to normal users as before. Those users with the
                 * necessary access will be able to edit content available via
                 * http://host:port/context/content using
                 * http://host:port/context/webdavedit/content
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class WebdavServlet extends org.apache.catalina.servlets.DefaultServlet {
                    // @ts-ignore
                    constructor()
                    /**
                     * Default namespace.
                     */
                    // @ts-ignore
                    static readonly DEFAULT_NAMESPACE: java.lang.String | string
                    /**
                     * Simple date format for the creation date ISO representation (partial).
                     */
                    // @ts-ignore
                    static readonly creationDateFormat: org.apache.tomcat.util.http.ConcurrentDateFormat
                    /**
                     * Initialize this servlet.
                     */
                    // @ts-ignore
                    public init(): void
                    /**
                     * Return JAXP document builder instance.
                     * @return the document builder
                     * @throws ServletException document builder creation failed
                     *   (wrapped <code>ParserConfigurationException</code> exception)
                     */
                    // @ts-ignore
                    getDocumentBuilder(): javax.xml.parsers.DocumentBuilder
                    /**
                     * Handles the special WebDAV methods.
                     */
                    // @ts-ignore
                    service(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
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
                     * Override the DefaultServlet implementation and only use the PathInfo. If
                     * the ServletPath is non-null, it will be because the WebDAV servlet has
                     * been mapped to a url other than /* to configure editing at different url
                     * than normal viewing.
                     * @param request The servlet request we are processing
                     */
                    // @ts-ignore
                    getRelativePath(request: javax.servlet.http.HttpServletRequest): string
                    // @ts-ignore
                    getRelativePath(request: javax.servlet.http.HttpServletRequest, allowEmptyPath: boolean): string
                    /**
                     * Determines the prefix for standard directory GET listings.
                     */
                    // @ts-ignore
                    getPathPrefix(request: javax.servlet.http.HttpServletRequest): string
                    /**
                     * OPTIONS Method.
                     * @param req The Servlet request
                     * @param resp The Servlet response
                     * @throws ServletException If an error occurs
                     * @throws IOException If an IO error occurs
                     */
                    // @ts-ignore
                    doOptions(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                    /**
                     * PROPFIND Method.
                     * @param req The Servlet request
                     * @param resp The Servlet response
                     * @throws ServletException If an error occurs
                     * @throws IOException If an IO error occurs
                     */
                    // @ts-ignore
                    doPropfind(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                    /**
                     * PROPPATCH Method.
                     * @param req The Servlet request
                     * @param resp The Servlet response
                     * @throws IOException If an IO error occurs
                     */
                    // @ts-ignore
                    doProppatch(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                    /**
                     * MKCOL Method.
                     * @param req The Servlet request
                     * @param resp The Servlet response
                     * @throws ServletException If an error occurs
                     * @throws IOException If an IO error occurs
                     */
                    // @ts-ignore
                    doMkcol(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                    /**
                     * DELETE Method.
                     * @param req The Servlet request
                     * @param resp The Servlet response
                     * @throws ServletException If an error occurs
                     * @throws IOException If an IO error occurs
                     */
                    // @ts-ignore
                    doDelete(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
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
                     * COPY Method.
                     * @param req The Servlet request
                     * @param resp The Servlet response
                     * @throws IOException If an IO error occurs
                     */
                    // @ts-ignore
                    doCopy(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                    /**
                     * MOVE Method.
                     * @param req The Servlet request
                     * @param resp The Servlet response
                     * @throws IOException If an IO error occurs
                     */
                    // @ts-ignore
                    doMove(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                    /**
                     * LOCK Method.
                     * @param req The Servlet request
                     * @param resp The Servlet response
                     * @throws ServletException If an error occurs
                     * @throws IOException If an IO error occurs
                     */
                    // @ts-ignore
                    doLock(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                    /**
                     * UNLOCK Method.
                     * @param req The Servlet request
                     * @param resp The Servlet response
                     * @throws IOException If an IO error occurs
                     */
                    // @ts-ignore
                    doUnlock(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                    /**
                     * Determines the methods normally allowed for the resource.
                     * @param req The Servlet request
                     * @return The allowed HTTP methods
                     */
                    // @ts-ignore
                    determineMethodsAllowed(req: javax.servlet.http.HttpServletRequest): string
                }
            }
        }
    }
}
