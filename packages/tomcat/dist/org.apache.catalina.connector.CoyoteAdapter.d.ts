declare namespace org {
    namespace apache {
        namespace catalina {
            namespace connector {
                /**
                 * Implementation of a request processor which delegates the processing to a
                 * Coyote processor.
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class CoyoteAdapter extends java.lang.Object implements org.apache.coyote.Adapter {
                    /**
                     * Construct a new CoyoteProcessor associated with the specified connector.
                     * @param connector CoyoteConnector that owns this processor
                     */
                    // @ts-ignore
                    constructor(connector: org.apache.catalina.connector.Connector)
                    // @ts-ignore
                    public static readonly ADAPTER_NOTES: number /*int*/
                    // @ts-ignore
                    static readonly ALLOW_BACKSLASH: boolean
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    public asyncDispatch(req: org.apache.coyote.Request, res: org.apache.coyote.Response, status: org.apache.tomcat.util.net.SocketEvent): boolean
                    // @ts-ignore
                    public service(req: org.apache.coyote.Request, res: org.apache.coyote.Response): void
                    // @ts-ignore
                    public prepare(req: org.apache.coyote.Request, res: org.apache.coyote.Response): boolean
                    // @ts-ignore
                    public log(req: org.apache.coyote.Request, res: org.apache.coyote.Response, time: number /*long*/): void
                    // @ts-ignore
                    public checkRecycled(req: org.apache.coyote.Request, res: org.apache.coyote.Response): void
                    // @ts-ignore
                    public getDomain(): string
                    /**
                     * Perform the necessary processing after the HTTP headers have been parsed
                     * to enable the request/response pair to be passed to the start of the
                     * container pipeline for processing.
                     * @param req      The coyote request object
                     * @param request  The catalina request object
                     * @param res      The coyote response object
                     * @param response The catalina response object
                     * @return <code>true</code> if the request should be passed on to the start
                     *          of the container pipeline, otherwise <code>false</code>
                     * @throws IOException If there is insufficient space in a buffer while
                     *                      processing headers
                     * @throws ServletException If the supported methods of the target servlet
                     *                           cannot be determined
                     */
                    // @ts-ignore
                    postParseRequest(req: org.apache.coyote.Request, request: org.apache.catalina.connector.Request, res: org.apache.coyote.Response, response: org.apache.catalina.connector.Response): boolean
                    /**
                     * Extract the path parameters from the request. This assumes parameters are
                     * of the form /path;name=value;name2=value2/ etc. Currently only really
                     * interested in the session ID that will be in this form. Other parameters
                     * can safely be ignored.
                     * @param req The Coyote request object
                     * @param request The Servlet request object
                     */
                    // @ts-ignore
                    parsePathParameters(req: org.apache.coyote.Request, request: org.apache.catalina.connector.Request): void
                    /**
                     * Look for SSL session ID if required. Only look for SSL Session ID if it
                     * is the only tracking method enabled.
                     * @param request The Servlet request object
                     */
                    // @ts-ignore
                    parseSessionSslId(request: org.apache.catalina.connector.Request): void
                    /**
                     * Parse session id in Cookie.
                     * @param request The Servlet request object
                     */
                    // @ts-ignore
                    parseSessionCookiesId(request: org.apache.catalina.connector.Request): void
                    /**
                     * Character conversion of the URI.
                     * @param uri MessageBytes object containing the URI
                     * @param request The Servlet request object
                     * @throws IOException if a IO exception occurs sending an error to the client
                     */
                    // @ts-ignore
                    convertURI(uri: org.apache.tomcat.util.buf.MessageBytes, request: org.apache.catalina.connector.Request): void
                    /**
                     * Character conversion of the a US-ASCII MessageBytes.
                     * @param mb The MessageBytes instance containing the bytes that should be converted to chars
                     */
                    // @ts-ignore
                    convertMB(mb: org.apache.tomcat.util.buf.MessageBytes): void
                    /**
                     * This method normalizes "\", "//", "/./" and "/../".
                     * @param uriMB URI to be normalized
                     * @return <code>false</code> if normalizing this URI would require going
                     *          above the root, or if the URI contains a null byte, otherwise
                     *          <code>true</code>
                     */
                    // @ts-ignore
                    public static normalize(uriMB: org.apache.tomcat.util.buf.MessageBytes): boolean
                    /**
                     * Check that the URI is normalized following character decoding. This
                     * method checks for "\", 0, "//", "/./" and "/../".
                     * @param uriMB URI to be checked (should be chars)
                     * @return <code>false</code> if sequences that are supposed to be
                     *          normalized are still present in the URI, otherwise
                     *          <code>true</code>
                     */
                    // @ts-ignore
                    public static checkNormalize(uriMB: org.apache.tomcat.util.buf.MessageBytes): boolean
                    /**
                     * Copy an array of bytes to a different position. Used during
                     * normalization.
                     * @param b The bytes that should be copied
                     * @param dest Destination offset
                     * @param src Source offset
                     * @param len Length
                     */
                    // @ts-ignore
                    static copyBytes(b: number /*byte*/[], dest: number /*int*/, src: number /*int*/, len: number /*int*/): void
                }
            }
        }
    }
}
