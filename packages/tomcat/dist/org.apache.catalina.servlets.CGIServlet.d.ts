declare namespace org {
    namespace apache {
        namespace catalina {
            namespace servlets {
                /**
                 * CGI-invoking servlet for web applications, used to execute scripts which
                 * comply to the Common Gateway Interface (CGI) specification and are named
                 * in the path-info used to invoke this servlet.
                 * <p>
                 * <i>Note: This code compiles and even works for simple CGI cases.
                 * Exhaustive testing has not been done.  Please consider it beta
                 * quality.  Feedback is appreciated to the author (see below).</i>
                 * </p>
                 * <p>
                 * <b>Example</b>:<br>
                 * If an instance of this servlet was mapped (using
                 * <code>&lt;web-app&gt;/WEB-INF/web.xml</code>) to:
                 * </p>
                 * <p>
                 * <code>
                 * &lt;web-app&gt;/cgi-bin/*
                 * </code>
                 * </p>
                 * <p>
                 * then the following request:
                 * </p>
                 * <p>
                 * <code>
                 * http://localhost:8080/&lt;web-app&gt;/cgi-bin/dir1/script/pathinfo1
                 * </code>
                 * </p>
                 * <p>
                 * would result in the execution of the script
                 * </p>
                 * <p>
                 * <code>
                 * &lt;web-app-root&gt;/WEB-INF/cgi/dir1/script
                 * </code>
                 * </p>
                 * <p>
                 * with the script's <code>PATH_INFO</code> set to <code>/pathinfo1</code>.
                 * </p>
                 * <p>
                 * Recommendation:  House all your CGI scripts under
                 * <code>&lt;webapp&gt;/WEB-INF/cgi</code>.  This will ensure that you do not
                 * accidentally expose your cgi scripts' code to the outside world and that
                 * your cgis will be cleanly ensconced underneath the WEB-INF (i.e.,
                 * non-content) area.
                 * </p>
                 * <p>
                 * The default CGI location is mentioned above.  You have the flexibility to
                 * put CGIs wherever you want, however:
                 * </p>
                 * <p>
                 * The CGI search path will start at
                 * webAppRootDir + File.separator + cgiPathPrefix
                 * (or webAppRootDir alone if cgiPathPrefix is
                 * null).
                 * </p>
                 * <p>
                 * cgiPathPrefix is defined by setting
                 * this servlet's cgiPathPrefix init parameter
                 * </p>
                 * <p>
                 * <B>CGI Specification</B>:<br> derived from
                 * <a href="http://cgi-spec.golux.com">http://cgi-spec.golux.com</a>.
                 * A work-in-progress &amp; expired Internet Draft.  Note no actual RFC describing
                 * the CGI specification exists.  Where the behavior of this servlet differs
                 * from the specification cited above, it is either documented here, a bug,
                 * or an instance where the specification cited differs from Best
                 * Community Practice (BCP).
                 * Such instances should be well-documented here.  Please email the
                 * <a href="https://tomcat.apache.org/lists.html">Tomcat group</a>
                 * with amendments.
                 * </p>
                 * <p>
                 * <b>Canonical metavariables</b>:<br>
                 * The CGI specification defines the following canonical metavariables:
                 * <br>
                 * [excerpt from CGI specification]
                 * <PRE>
                 * AUTH_TYPE
                 * CONTENT_LENGTH
                 * CONTENT_TYPE
                 * GATEWAY_INTERFACE
                 * PATH_INFO
                 * PATH_TRANSLATED
                 * QUERY_STRING
                 * REMOTE_ADDR
                 * REMOTE_HOST
                 * REMOTE_IDENT
                 * REMOTE_USER
                 * REQUEST_METHOD
                 * SCRIPT_NAME
                 * SERVER_NAME
                 * SERVER_PORT
                 * SERVER_PROTOCOL
                 * SERVER_SOFTWARE
                 * </PRE>
                 * <p>
                 * Metavariables with names beginning with the protocol name (<EM>e.g.</EM>,
                 * "HTTP_ACCEPT") are also canonical in their description of request header
                 * fields.  The number and meaning of these fields may change independently
                 * of this specification.  (See also section 6.1.5 [of the CGI specification].)
                 * </p>
                 * [end excerpt]
                 * <h2> Implementation notes</h2>
                 * <p>
                 * <b>standard input handling</b>: If your script accepts standard input,
                 * then the client must start sending input within a certain timeout period,
                 * otherwise the servlet will assume no input is coming and carry on running
                 * the script.  The script's the standard input will be closed and handling of
                 * any further input from the client is undefined.  Most likely it will be
                 * ignored.  If this behavior becomes undesirable, then this servlet needs
                 * to be enhanced to handle threading of the spawned process' stdin, stdout,
                 * and stderr (which should not be too hard).
                 * <br>
                 * If you find your cgi scripts are timing out receiving input, you can set
                 * the init parameter <code>stderrTimeout</code> of your webapps' cgi-handling
                 * servlet.
                 * </p>
                 * <p>
                 * <b>Metavariable Values</b>: According to the CGI specification,
                 * implementations may choose to represent both null or missing values in an
                 * implementation-specific manner, but must define that manner.  This
                 * implementation chooses to always define all required metavariables, but
                 * set the value to "" for all metavariables whose value is either null or
                 * undefined.  PATH_TRANSLATED is the sole exception to this rule, as per the
                 * CGI Specification.
                 * </p>
                 * <p>
                 * <b>NPH --  Non-parsed-header implementation</b>:  This implementation does
                 * not support the CGI NPH concept, whereby server ensures that the data
                 * supplied to the script are precisely as supplied by the client and
                 * unaltered by the server.
                 * </p>
                 * <p>
                 * The function of a servlet container (including Tomcat) is specifically
                 * designed to parse and possible alter CGI-specific variables, and as
                 * such makes NPH functionality difficult to support.
                 * </p>
                 * <p>
                 * The CGI specification states that compliant servers MAY support NPH output.
                 * It does not state servers MUST support NPH output to be unconditionally
                 * compliant.  Thus, this implementation maintains unconditional compliance
                 * with the specification though NPH support is not present.
                 * </p>
                 * <p>
                 * The CGI specification is located at
                 * <a href="http://cgi-spec.golux.com">http://cgi-spec.golux.com</a>.
                 * </p>
                 * <h3>TODO:</h3>
                 * <ul>
                 * <li> Support for setting headers (for example, Location headers don't work)
                 * <li> Support for collapsing multiple header lines (per RFC 2616)
                 * <li> Ensure handling of POST method does not interfere with 2.3 Filters
                 * <li> Refactor some debug code out of core
                 * <li> Ensure header handling preserves encoding
                 * <li> Possibly rewrite CGIRunner.run()?
                 * <li> Possibly refactor CGIRunner and CGIEnvironment as non-inner classes?
                 * <li> Document handling of cgi stdin when there is no stdin
                 * <li> Revisit IOException handling in CGIRunner.run()
                 * <li> Better documentation
                 * <li> Confirm use of ServletInputStream.available() in CGIRunner.run() is
                 * not needed
                 * <li> [add more to this TODO list]
                 * </ul>
                 * @author Martin T Dengler [root#martindengler.com]
                 * @author Amy Roh
                 */
                // @ts-ignore
                class CGIServlet extends javax.servlet.http.HttpServlet {
                    // @ts-ignore
                    constructor()
                    /**
                     * Sets instance variables.
                     * <P>
                     * Modified from Craig R. McClanahan's InvokerServlet
                     * </P>
                     * @param config                    a <code>ServletConfig</code> object
                     *                                   containing the servlet's
                     *                                   configuration and initialization
                     *                                   parameters
                     * @exception ServletException      if an exception has occurred that
                     *                                   interferes with the servlet's normal
                     *                                   operation
                     */
                    // @ts-ignore
                    public init(config: javax.servlet.ServletConfig): void
                    // @ts-ignore
                    service(req: javax.servlet.http.HttpServletRequest, res: javax.servlet.http.HttpServletResponse): void
                    /**
                     * Provides CGI Gateway service.
                     * @param req   HttpServletRequest passed in by servlet container
                     * @param res   HttpServletResponse passed in by servlet container
                     * @exception ServletException  if a servlet-specific exception occurs
                     * @exception IOException  if a read/write exception occurs
                     */
                    // @ts-ignore
                    doGet(req: javax.servlet.http.HttpServletRequest, res: javax.servlet.http.HttpServletResponse): void
                    // @ts-ignore
                    doOptions(req: javax.servlet.http.HttpServletRequest, res: javax.servlet.http.HttpServletResponse): void
                }
            }
        }
    }
}
