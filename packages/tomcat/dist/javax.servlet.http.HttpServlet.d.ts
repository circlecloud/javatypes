declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * Provides an abstract class to be subclassed to create
             * an HTTP servlet suitable for a Web site. A subclass of
             * <code>HttpServlet</code> must override at least
             * one method, usually one of these:
             * <ul>
             * <li> <code>doGet</code>, if the servlet supports HTTP GET requests
             * <li> <code>doPost</code>, for HTTP POST requests
             * <li> <code>doPut</code>, for HTTP PUT requests
             * <li> <code>doDelete</code>, for HTTP DELETE requests
             * <li> <code>init</code> and <code>destroy</code>,
             * to manage resources that are held for the life of the servlet
             * <li> <code>getServletInfo</code>, which the servlet uses to
             * provide information about itself
             * </ul>
             * <p>There's almost no reason to override the <code>service</code>
             * method. <code>service</code> handles standard HTTP
             * requests by dispatching them to the handler methods
             * for each HTTP request type (the <code>do</code><i>Method</i>
             * methods listed above).
             * <p>Likewise, there's almost no reason to override the
             * <code>doOptions</code> and <code>doTrace</code> methods.
             * <p>Servlets typically run on multithreaded servers,
             * so be aware that a servlet must handle concurrent
             * requests and be careful to synchronize access to shared resources.
             * Shared resources include in-memory data such as
             * instance or class variables and external objects
             * such as files, database connections, and network
             * connections.
             * See the
             * <a href="http://java.sun.com/Series/Tutorial/java/threads/multithreaded.html">
             * Java Tutorial on Multithreaded Programming</a> for more
             * information on handling multiple threads in a Java program.
             */
            // @ts-ignore
            abstract class HttpServlet extends javax.servlet.GenericServlet {
                /**
                 * Does nothing, because this is an abstract class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Called by the server (via the <code>service</code> method) to
                 * allow a servlet to handle a GET request.
                 * <p>Overriding this method to support a GET request also
                 * automatically supports an HTTP HEAD request. A HEAD
                 * request is a GET request that returns no body in the
                 * response, only the request header fields.
                 * <p>When overriding this method, read the request data,
                 * write the response headers, get the response's writer or
                 * output stream object, and finally, write the response data.
                 * It's best to include content type and encoding. When using
                 * a <code>PrintWriter</code> object to return the response,
                 * set the content type before accessing the
                 * <code>PrintWriter</code> object.
                 * <p>The servlet container must write the headers before
                 * committing the response, because in HTTP the headers must be sent
                 * before the response body.
                 * <p>Where possible, set the Content-Length header (with the
                 * {@link javax.servlet.ServletResponse#setContentLength} method),
                 * to allow the servlet container to use a persistent connection
                 * to return its response to the client, improving performance.
                 * The content length is automatically set if the entire response fits
                 * inside the response buffer.
                 * <p>When using HTTP 1.1 chunked encoding (which means that the response
                 * has a Transfer-Encoding header), do not set the Content-Length header.
                 * <p>The GET method should be safe, that is, without
                 * any side effects for which users are held responsible.
                 * For example, most form queries have no side effects.
                 * If a client request is intended to change stored data,
                 * the request should use some other HTTP method.
                 * <p>The GET method should also be idempotent, meaning
                 * that it can be safely repeated. Sometimes making a
                 * method safe also makes it idempotent. For example,
                 * repeating queries is both safe and idempotent, but
                 * buying a product online or modifying data is neither
                 * safe nor idempotent.
                 * <p>If the request is incorrectly formatted, <code>doGet</code>
                 * returns an HTTP "Bad Request" message.
                 * @param req   an {#link HttpServletRequest} object that
                 *                   contains the request the client has made
                 *                   of the servlet
                 * @param resp  an {#link HttpServletResponse} object that
                 *                   contains the response the servlet sends
                 *                   to the client
                 * @exception IOException   if an input or output error is
                 *                               detected when the servlet handles
                 *                               the GET request
                 * @exception ServletException  if the request for the GET
                 *                                   could not be handled
                 * @see javax.servlet.ServletResponse#setContentType
                 */
                // @ts-ignore
                doGet(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                /**
                 * Returns the time the <code>HttpServletRequest</code>
                 * object was last modified,
                 * in milliseconds since midnight January 1, 1970 GMT.
                 * If the time is unknown, this method returns a negative
                 * number (the default).
                 * <p>Servlets that support HTTP GET requests and can quickly determine
                 * their last modification time should override this method.
                 * This makes browser and proxy caches work more effectively,
                 * reducing the load on server and network resources.
                 * @param req   the <code>HttpServletRequest</code>
                 *                   object that is sent to the servlet
                 * @return a <code>long</code> integer specifying
                 *               the time the <code>HttpServletRequest</code>
                 *               object was last modified, in milliseconds
                 *               since midnight, January 1, 1970 GMT, or
                 *               -1 if the time is not known
                 */
                // @ts-ignore
                getLastModified(req: javax.servlet.http.HttpServletRequest): number /*long*/
                /**
                 * <p>Receives an HTTP HEAD request from the protected
                 * <code>service</code> method and handles the
                 * request.
                 * The client sends a HEAD request when it wants
                 * to see only the headers of a response, such as
                 * Content-Type or Content-Length. The HTTP HEAD
                 * method counts the output bytes in the response
                 * to set the Content-Length header accurately.
                 * <p>If you override this method, you can avoid computing
                 * the response body and just set the response headers
                 * directly to improve performance. Make sure that the
                 * <code>doHead</code> method you write is both safe
                 * and idempotent (that is, protects itself from being
                 * called multiple times for one HTTP HEAD request).
                 * <p>If the HTTP HEAD request is incorrectly formatted,
                 * <code>doHead</code> returns an HTTP "Bad Request"
                 * message.
                 * @param req   the request object that is passed to the servlet
                 * @param resp  the response object that the servlet
                 *                   uses to return the headers to the client
                 * @exception IOException   if an input or output error occurs
                 * @exception ServletException  if the request for the HEAD
                 *                                   could not be handled
                 */
                // @ts-ignore
                doHead(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                /**
                 * Called by the server (via the <code>service</code> method)
                 * to allow a servlet to handle a POST request.
                 * The HTTP POST method allows the client to send
                 * data of unlimited length to the Web server a single time
                 * and is useful when posting information such as
                 * credit card numbers.
                 * <p>When overriding this method, read the request data,
                 * write the response headers, get the response's writer or output
                 * stream object, and finally, write the response data. It's best
                 * to include content type and encoding. When using a
                 * <code>PrintWriter</code> object to return the response, set the
                 * content type before accessing the <code>PrintWriter</code> object.
                 * <p>The servlet container must write the headers before committing the
                 * response, because in HTTP the headers must be sent before the
                 * response body.
                 * <p>Where possible, set the Content-Length header (with the
                 * {@link javax.servlet.ServletResponse#setContentLength} method),
                 * to allow the servlet container to use a persistent connection
                 * to return its response to the client, improving performance.
                 * The content length is automatically set if the entire response fits
                 * inside the response buffer.
                 * <p>When using HTTP 1.1 chunked encoding (which means that the response
                 * has a Transfer-Encoding header), do not set the Content-Length header.
                 * <p>This method does not need to be either safe or idempotent.
                 * Operations requested through POST can have side effects for
                 * which the user can be held accountable, for example,
                 * updating stored data or buying items online.
                 * <p>If the HTTP POST request is incorrectly formatted,
                 * <code>doPost</code> returns an HTTP "Bad Request" message.
                 * @param req   an {#link HttpServletRequest} object that
                 *                   contains the request the client has made
                 *                   of the servlet
                 * @param resp  an {#link HttpServletResponse} object that
                 *                   contains the response the servlet sends
                 *                   to the client
                 * @exception IOException   if an input or output error is
                 *                               detected when the servlet handles
                 *                               the request
                 * @exception ServletException  if the request for the POST
                 *                                   could not be handled
                 * @see javax.servlet.ServletOutputStream
                 * @see javax.servlet.ServletResponse#setContentType
                 */
                // @ts-ignore
                doPost(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                /**
                 * Called by the server (via the <code>service</code> method)
                 * to allow a servlet to handle a PUT request.
                 * The PUT operation allows a client to
                 * place a file on the server and is similar to
                 * sending a file by FTP.
                 * <p>When overriding this method, leave intact
                 * any content headers sent with the request (including
                 * Content-Length, Content-Type, Content-Transfer-Encoding,
                 * Content-Encoding, Content-Base, Content-Language, Content-Location,
                 * Content-MD5, and Content-Range). If your method cannot
                 * handle a content header, it must issue an error message
                 * (HTTP 501 - Not Implemented) and discard the request.
                 * For more information on HTTP 1.1, see RFC 2616
                 * <a href="http://www.ietf.org/rfc/rfc2616.txt"></a>.
                 * <p>This method does not need to be either safe or idempotent.
                 * Operations that <code>doPut</code> performs can have side
                 * effects for which the user can be held accountable. When using
                 * this method, it may be useful to save a copy of the
                 * affected URL in temporary storage.
                 * <p>If the HTTP PUT request is incorrectly formatted,
                 * <code>doPut</code> returns an HTTP "Bad Request" message.
                 * @param req   the {#link HttpServletRequest} object that
                 *                   contains the request the client made of
                 *                   the servlet
                 * @param resp  the {#link HttpServletResponse} object that
                 *                   contains the response the servlet returns
                 *                   to the client
                 * @exception IOException   if an input or output error occurs
                 *                               while the servlet is handling the
                 *                               PUT request
                 * @exception ServletException  if the request for the PUT
                 *                                   cannot be handled
                 */
                // @ts-ignore
                doPut(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                /**
                 * Called by the server (via the <code>service</code> method)
                 * to allow a servlet to handle a DELETE request.
                 * The DELETE operation allows a client to remove a document
                 * or Web page from the server.
                 * <p>This method does not need to be either safe
                 * or idempotent. Operations requested through
                 * DELETE can have side effects for which users
                 * can be held accountable. When using
                 * this method, it may be useful to save a copy of the
                 * affected URL in temporary storage.
                 * <p>If the HTTP DELETE request is incorrectly formatted,
                 * <code>doDelete</code> returns an HTTP "Bad Request"
                 * message.
                 * @param req   the {#link HttpServletRequest} object that
                 *                   contains the request the client made of
                 *                   the servlet
                 * @param resp  the {#link HttpServletResponse} object that
                 *                   contains the response the servlet returns
                 *                   to the client
                 * @exception IOException   if an input or output error occurs
                 *                               while the servlet is handling the
                 *                               DELETE request
                 * @exception ServletException  if the request for the
                 *                                   DELETE cannot be handled
                 */
                // @ts-ignore
                doDelete(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                /**
                 * Called by the server (via the <code>service</code> method)
                 * to allow a servlet to handle a OPTIONS request.
                 * The OPTIONS request determines which HTTP methods
                 * the server supports and
                 * returns an appropriate header. For example, if a servlet
                 * overrides <code>doGet</code>, this method returns the
                 * following header:
                 * <p><code>Allow: GET, HEAD, TRACE, OPTIONS</code>
                 * <p>There's no need to override this method unless the
                 * servlet implements new HTTP methods, beyond those
                 * implemented by HTTP 1.1.
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
                /**
                 * Called by the server (via the <code>service</code> method)
                 * to allow a servlet to handle a TRACE request.
                 * A TRACE returns the headers sent with the TRACE
                 * request to the client, so that they can be used in
                 * debugging. There's no need to override this method.
                 * @param req   the {#link HttpServletRequest} object that
                 *                   contains the request the client made of
                 *                   the servlet
                 * @param resp  the {#link HttpServletResponse} object that
                 *                   contains the response the servlet returns
                 *                   to the client
                 * @exception IOException   if an input or output error occurs
                 *                               while the servlet is handling the
                 *                               TRACE request
                 * @exception ServletException  if the request for the
                 *                                   TRACE cannot be handled
                 */
                // @ts-ignore
                doTrace(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                /**
                 * Receives standard HTTP requests from the public
                 * <code>service</code> method and dispatches
                 * them to the <code>do</code><i>Method</i> methods defined in
                 * this class. This method is an HTTP-specific version of the
                 * {@link javax.servlet.Servlet#service} method. There's no
                 * need to override this method.
                 * @param req   the {#link HttpServletRequest} object that
                 *                   contains the request the client made of
                 *                   the servlet
                 * @param resp  the {#link HttpServletResponse} object that
                 *                   contains the response the servlet returns
                 *                   to the client
                 * @exception IOException   if an input or output error occurs
                 *                               while the servlet is handling the
                 *                               HTTP request
                 * @exception ServletException  if the HTTP request
                 *                                   cannot be handled
                 * @see javax.servlet.Servlet#service
                 */
                // @ts-ignore
                service(req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse): void
                /**
                 * Dispatches client requests to the protected
                 * <code>service</code> method. There's no need to
                 * override this method.
                 * @param req   the {#link HttpServletRequest} object that
                 *                   contains the request the client made of
                 *                   the servlet
                 * @param res   the {#link HttpServletResponse} object that
                 *                   contains the response the servlet returns
                 *                   to the client
                 * @exception IOException   if an input or output error occurs
                 *                               while the servlet is handling the
                 *                               HTTP request
                 * @exception ServletException  if the HTTP request cannot
                 *                                   be handled
                 * @see javax.servlet.Servlet#service
                 */
                // @ts-ignore
                public service(req: javax.servlet.ServletRequest, res: javax.servlet.ServletResponse): void
            }
        }
    }
}
