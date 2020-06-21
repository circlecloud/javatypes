declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * Servlet to process SSI requests within a webpage. Mapped to a path from
                 * within web.xml.
                 * @author Bip Thelin
                 * @author Amy Roh
                 * @author Dan Sandberg
                 * @author David Becker
                 */
                // @ts-ignore
                class SSIServlet extends javax.servlet.http.HttpServlet {
                    // @ts-ignore
                    constructor()
                    /**
                     * Debug level for this servlet.
                     */
                    // @ts-ignore
                    debug: number /*int*/
                    /**
                     * Should the output be buffered.
                     */
                    // @ts-ignore
                    buffered: boolean
                    /**
                     * Expiration time in seconds for the doc.
                     */
                    // @ts-ignore
                    expires: java.lang.Long | number
                    /**
                     * virtual path can be webapp-relative
                     */
                    // @ts-ignore
                    isVirtualWebappRelative: boolean
                    /**
                     * Input encoding. If not specified, uses platform default
                     */
                    // @ts-ignore
                    inputEncoding: java.lang.String | string
                    /**
                     * Output encoding. If not specified, uses platform default
                     */
                    // @ts-ignore
                    outputEncoding: java.lang.String | string
                    /**
                     * Allow exec (normally blocked for security)
                     */
                    // @ts-ignore
                    allowExec: boolean
                    /**
                     * Initialize this servlet.
                     * @exception ServletException
                     *                 if an error occurs
                     */
                    // @ts-ignore
                    public init(): void
                    /**
                     * Process and forward the GET request to our <code>requestHandler()</code>*
                     * @param req
                     *             a value of type 'HttpServletRequest'
                     * @param res
                     *             a value of type 'HttpServletResponse'
                     * @exception IOException
                     *                 if an error occurs
                     * @exception ServletException
                     *                 if an error occurs
                     */
                    // @ts-ignore
                    public doGet(req: javax.servlet.http.HttpServletRequest, res: javax.servlet.http.HttpServletResponse): void
                    /**
                     * Process and forward the POST request to our
                     * <code>requestHandler()</code>.
                     * @param req
                     *             a value of type 'HttpServletRequest'
                     * @param res
                     *             a value of type 'HttpServletResponse'
                     * @exception IOException
                     *                 if an error occurs
                     * @exception ServletException
                     *                 if an error occurs
                     */
                    // @ts-ignore
                    public doPost(req: javax.servlet.http.HttpServletRequest, res: javax.servlet.http.HttpServletResponse): void
                    /**
                     * Process our request and locate right SSI command.
                     * @param req
                     *             a value of type 'HttpServletRequest'
                     * @param res
                     *             a value of type 'HttpServletResponse'
                     * @throws IOException an IO error occurred
                     */
                    // @ts-ignore
                    requestHandler(req: javax.servlet.http.HttpServletRequest, res: javax.servlet.http.HttpServletResponse): void
                    // @ts-ignore
                    processSSI(req: javax.servlet.http.HttpServletRequest, res: javax.servlet.http.HttpServletResponse, resource: java.net.URL): void
                }
            }
        }
    }
}
