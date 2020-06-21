declare namespace org {
    namespace apache {
        namespace catalina {
            namespace servlets {
                namespace CGIServlet {
                    /**
                     * Encapsulates the CGI environment and rules to derive
                     * that environment from the servlet container and request information.
                     */
                    // @ts-ignore
                    class CGIEnvironment extends java.lang.Object {
                        /**
                         * Creates a CGIEnvironment and derives the necessary environment,
                         * query parameters, working directory, cgi command, etc.
                         * @param req       HttpServletRequest for information provided by
                         *                    the Servlet API
                         * @param context   ServletContext for information provided by the
                         *                    Servlet API
                         * @throws IOException an IO error occurred
                         */
                        // @ts-ignore
                        constructor(req: javax.servlet.http.HttpServletRequest, context: javax.servlet.ServletContext)
                        /**
                         * Uses the ServletContext to set some CGI variables
                         * @param context   ServletContext for information provided by the
                         *                    Servlet API
                         */
                        // @ts-ignore
                        setupFromContext(context: javax.servlet.ServletContext): void
                        /**
                         * Uses the HttpServletRequest to set most CGI variables
                         * @param req   HttpServletRequest for information provided by
                         *                the Servlet API
                         * @throws UnsupportedEncodingException Unknown encoding
                         */
                        // @ts-ignore
                        setupFromRequest(req: javax.servlet.http.HttpServletRequest): void
                        /**
                         * Resolves core information about the cgi script.
                         * <p>
                         * Example URI:
                         * </p>
                         * <PRE> /servlet/cgigateway/dir1/realCGIscript/pathinfo1 </PRE>
                         * <ul>
                         * <LI><b>path</b> = $CATALINA_HOME/mywebapp/dir1/realCGIscript
                         * <LI><b>scriptName</b> = /servlet/cgigateway/dir1/realCGIscript
                         * <LI><b>cgiName</b> = /dir1/realCGIscript
                         * <LI><b>name</b> = realCGIscript
                         * </ul>
                         * <p>
                         * CGI search algorithm: search the real path below
                         * &lt;my-webapp-root&gt; and find the first non-directory in
                         * the getPathTranslated("/"), reading/searching from left-to-right.
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
                         * @param pathInfo       String from HttpServletRequest.getPathInfo()
                         * @param webAppRootDir  String from context.getRealPath("/")
                         * @param contextPath    String as from
                         *                        HttpServletRequest.getContextPath()
                         * @param servletPath    String as from
                         *                        HttpServletRequest.getServletPath()
                         * @param cgiPathPrefix  subdirectory of webAppRootDir below which
                         *                        the web app's CGIs may be stored; can be null.
                         *                        The CGI search path will start at
                         *                        webAppRootDir + File.separator + cgiPathPrefix
                         *                        (or webAppRootDir alone if cgiPathPrefix is
                         *                        null).  cgiPathPrefix is defined by setting
                         *                        the servlet's cgiPathPrefix init parameter.
                         * @return <ul>
                         *  <li>
                         *  <code>path</code> -    full file-system path to valid cgi script,
                         *                         or null if no cgi was found
                         *  <li>
                         *  <code>scriptName</code> -
                         *                         CGI variable SCRIPT_NAME; the full URL path
                         *                         to valid cgi script or null if no cgi was
                         *                         found
                         *  <li>
                         *  <code>cgiName</code> - servlet pathInfo fragment corresponding to
                         *                         the cgi script itself, or null if not found
                         *  <li>
                         *  <code>name</code> -    simple name (no directories) of the
                         *                         cgi script, or null if no cgi was found
                         *  </ul>
                         */
                        // @ts-ignore
                        findCGI(pathInfo: java.lang.String | string, webAppRootDir: java.lang.String | string, contextPath: java.lang.String | string, servletPath: java.lang.String | string, cgiPathPrefix: java.lang.String | string): string[]
                        /**
                         * Constructs the CGI environment to be supplied to the invoked CGI
                         * script; relies heavily on Servlet API methods and findCGI
                         * @param req request associated with the CGI
                         *            Invocation
                         * @return true if environment was set OK, false if there
                         *            was a problem and no environment was set
                         * @throws IOException an IO error occurred
                         */
                        // @ts-ignore
                        setCGIEnvironment(req: javax.servlet.http.HttpServletRequest): boolean
                        /**
                         * Extracts requested resource from web app archive to context work
                         * directory to enable CGI script to be executed.
                         */
                        // @ts-ignore
                        expandCGIScript(): void
                        /**
                         * Returns important CGI environment information in a multi-line text
                         * format.
                         * @return CGI environment info
                         */
                        // @ts-ignore
                        public toString(): string
                        /**
                         * Gets derived command string
                         * @return command string
                         */
                        // @ts-ignore
                        getCommand(): string
                        /**
                         * Gets derived CGI working directory
                         * @return working directory
                         */
                        // @ts-ignore
                        getWorkingDirectory(): java.io.File
                        /**
                         * Gets derived CGI environment
                         * @return CGI environment
                         */
                        // @ts-ignore
                        getEnvironment(): java.util.Hashtable<java.lang.String | string, java.lang.String | string>
                        /**
                         * Gets derived CGI query parameters
                         * @return CGI query parameters
                         */
                        // @ts-ignore
                        getParameters(): java.util.ArrayList<java.lang.String | string>
                        /**
                         * Gets validity status
                         * @return true if this environment is valid, false
                         *            otherwise
                         */
                        // @ts-ignore
                        isValid(): boolean
                        /**
                         * Converts null strings to blank strings ("")
                         * @param s string to be converted if necessary
                         * @return a non-null string, either the original or the empty string
                         *            ("") if the original was <code>null</code>
                         */
                        // @ts-ignore
                        nullsToBlanks(s: java.lang.String | string): string
                        /**
                         * Converts null strings to another string
                         * @param couldBeNull string to be converted if necessary
                         * @param subForNulls string to return instead of a null string
                         * @return a non-null string, either the original or the substitute
                         *            string if the original was <code>null</code>
                         */
                        // @ts-ignore
                        nullsToString(couldBeNull: java.lang.String | string, subForNulls: java.lang.String | string): string
                        /**
                         * Converts blank strings to another string
                         * @param couldBeBlank string to be converted if necessary
                         * @param subForBlanks string to return instead of a blank string
                         * @return a non-null string, either the original or the substitute
                         *            string if the original was <code>null</code> or empty ("")
                         */
                        // @ts-ignore
                        blanksToString(couldBeBlank: java.lang.String | string, subForBlanks: java.lang.String | string): string
                    }
                }
            }
        }
    }
}
