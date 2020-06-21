declare namespace org {
    namespace apache {
        namespace catalina {
            namespace servlets {
                namespace CGIServlet {
                    /**
                     * Encapsulates the knowledge of how to run a CGI script, given the
                     * script's desired environment and (optionally) input/output streams
                     * <p>
                     * Exposes a <code>run</code> method used to actually invoke the
                     * CGI.
                     * </p>
                     * <p>
                     * The CGI environment and settings are derived from the information
                     * passed to the constructor.
                     * </p>
                     * <p>
                     * The input and output streams can be set by the <code>setInput</code>
                     * and <code>setResponse</code> methods, respectively.
                     * </p>
                     */
                    // @ts-ignore
                    class CGIRunner extends java.lang.Object {
                        /**
                         * Creates a CGIRunner and initializes its environment, working
                         * directory, and query parameters.
                         * <BR>
                         * Input/output streams (optional) are set using the
                         * <code>setInput</code> and <code>setResponse</code> methods,
                         * respectively.
                         * @param command  string full path to command to be executed
                         * @param env      Hashtable with the desired script environment
                         * @param wd       File with the script's desired working directory
                         * @param params   ArrayList with the script's query command line
                         *                   parameters as strings
                         */
                        // @ts-ignore
                        constructor(command: java.lang.String | string, env: java.util.Hashtable<java.lang.String | string, java.lang.String | string>, wd: java.io.File, params: java.util.ArrayList<java.lang.String | string>)
                        /**
                         * Checks and sets ready status
                         */
                        // @ts-ignore
                        updateReadyStatus(): void
                        /**
                         * Gets ready status
                         * @return false if not ready (<code>run</code> will throw
                         *            an exception), true if ready
                         */
                        // @ts-ignore
                        isReady(): boolean
                        /**
                         * Sets HttpServletResponse object used to set headers and send
                         * output to
                         * @param response   HttpServletResponse to be used
                         */
                        // @ts-ignore
                        setResponse(response: javax.servlet.http.HttpServletResponse): void
                        /**
                         * Sets standard input to be passed on to the invoked cgi script
                         * @param stdin   InputStream to be used
                         */
                        // @ts-ignore
                        setInput(stdin: java.io.InputStream): void
                        /**
                         * Converts a Hashtable to a String array by converting each
                         * key/value pair in the Hashtable to a String in the form
                         * "key=value" (hashkey + "=" + hash.get(hashkey).toString())
                         * @param h   Hashtable to convert
                         * @return converted string array
                         * @exception NullPointerException   if a hash key has a null value
                         */
                        // @ts-ignore
                        hashToStringArray(h: java.util.Hashtable<java.lang.String | string, any>): string[]
                        /**
                         * Executes a CGI script with the desired environment, current working
                         * directory, and input/output streams
                         * <p>
                         * This implements the following CGI specification recommendations:
                         * </p>
                         * <UL>
                         * <LI> Servers SHOULD provide the "<code>query</code>" component of
                         * the script-URI as command-line arguments to scripts if it
                         * does not contain any unencoded "=" characters and the
                         * command-line arguments can be generated in an unambiguous
                         * manner.
                         * <LI> Servers SHOULD set the AUTH_TYPE metavariable to the value
                         * of the "<code>auth-scheme</code>" token of the
                         * "<code>Authorization</code>" if it was supplied as part of the
                         * request header.  See <code>getCGIEnvironment</code> method.
                         * <LI> Where applicable, servers SHOULD set the current working
                         * directory to the directory in which the script is located
                         * before invoking it.
                         * <LI> Server implementations SHOULD define their behavior for the
                         * following cases:
                         * <ul>
                         * <LI> <u>Allowed characters in pathInfo</u>:  This implementation
                         * does not allow ASCII NUL nor any character which cannot
                         * be URL-encoded according to internet standards;
                         * <LI> <u>Allowed characters in path segments</u>: This
                         * implementation does not allow non-terminal NULL
                         * segments in the the path -- IOExceptions may be thrown;
                         * <LI> <u>"<code>.</code>" and "<code>..</code>" path
                         * segments</u>:
                         * This implementation does not allow "<code>.</code>" and
                         * "<code>..</code>" in the the path, and such characters
                         * will result in an IOException being thrown (this should
                         * never happen since Tomcat normalises the requestURI
                         * before determining the contextPath, servletPath and
                         * pathInfo);
                         * <LI> <u>Implementation limitations</u>: This implementation
                         * does not impose any limitations except as documented
                         * above.  This implementation may be limited by the
                         * servlet container used to house this implementation.
                         * In particular, all the primary CGI variable values
                         * are derived either directly or indirectly from the
                         * container's implementation of the Servlet API methods.
                         * </ul>
                         * </UL>
                         * @exception IOException if problems during reading/writing occur
                         * @see java.lang.Runtime#exec(String command, String[] envp,
                         *                                 File dir)
                         */
                        // @ts-ignore
                        run(): void
                    }
                }
            }
        }
    }
}
