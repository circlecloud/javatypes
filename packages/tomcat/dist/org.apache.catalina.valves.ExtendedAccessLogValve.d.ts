declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                /**
                 * An implementation of the W3c Extended Log File Format. See
                 * http://www.w3.org/TR/WD-logfile.html for more information about the format.
                 * The following fields are supported:
                 * <ul>
                 * <li><code>c-dns</code>:  Client hostname (or ip address if
                 * <code>enableLookups</code> for the connector is false)</li>
                 * <li><code>c-ip</code>:  Client ip address</li>
                 * <li><code>bytes</code>:  bytes served</li>
                 * <li><code>cs-method</code>:  request method</li>
                 * <li><code>cs-uri</code>:  The full uri requested</li>
                 * <li><code>cs-uri-query</code>:  The query string</li>
                 * <li><code>cs-uri-stem</code>:  The uri without query string</li>
                 * <li><code>date</code>:  The date in yyyy-mm-dd  format for GMT</li>
                 * <li><code>s-dns</code>: The server dns entry </li>
                 * <li><code>s-ip</code>:  The server ip address</li>
                 * <li><code>cs(XXX)</code>:  The value of header XXX from client to server</li>
                 * <li><code>sc(XXX)</code>: The value of header XXX from server to client </li>
                 * <li><code>sc-status</code>:  The status code</li>
                 * <li><code>time</code>:  Time the request was served</li>
                 * <li><code>time-taken</code>:  Time (in seconds) taken to serve the request</li>
                 * <li><code>x-threadname</code>: Current request thread name (can compare later with stacktraces)</li>
                 * <li><code>x-A(XXX)</code>: Pull XXX attribute from the servlet context </li>
                 * <li><code>x-C(XXX)</code>: Pull the first cookie of the name XXX </li>
                 * <li><code>x-O(XXX)</code>: Pull the all response header values XXX </li>
                 * <li><code>x-R(XXX)</code>: Pull XXX attribute from the servlet request </li>
                 * <li><code>x-S(XXX)</code>: Pull XXX attribute from the session </li>
                 * <li><code>x-P(...)</code>:  Call request.getParameter(...)
                 * and URLencode it. Helpful to capture
                 * certain POST parameters.
                 * </li>
                 * <li>For any of the x-H(...) the following method will be called from the
                 * HttpServletRequest object </li>
                 * <li><code>x-H(authType)</code>: getAuthType </li>
                 * <li><code>x-H(characterEncoding)</code>: getCharacterEncoding </li>
                 * <li><code>x-H(contentLength)</code>: getContentLength </li>
                 * <li><code>x-H(locale)</code>:  getLocale</li>
                 * <li><code>x-H(protocol)</code>: getProtocol </li>
                 * <li><code>x-H(remoteUser)</code>:  getRemoteUser</li>
                 * <li><code>x-H(requestedSessionId)</code>: getRequestedSessionId</li>
                 * <li><code>x-H(requestedSessionIdFromCookie)</code>:
                 * isRequestedSessionIdFromCookie </li>
                 * <li><code>x-H(requestedSessionIdValid)</code>:
                 * isRequestedSessionIdValid</li>
                 * <li><code>x-H(scheme)</code>:  getScheme</li>
                 * <li><code>x-H(secure)</code>:  isSecure</li>
                 * </ul>
                 * <p>
                 * Log rotation can be on or off. This is dictated by the
                 * <code>rotatable</code> property.
                 * </p>
                 * <p>
                 * For UNIX users, another field called <code>checkExists</code> is also
                 * available. If set to true, the log file's existence will be checked before
                 * each logging. This way an external log rotator can move the file
                 * somewhere and Tomcat will start with a new file.
                 * </p>
                 * <p>
                 * For JMX junkies, a public method called <code>rotate</code> has
                 * been made available to allow you to tell this instance to move
                 * the existing log file to somewhere else and start writing a new log file.
                 * </p>
                 * <p>
                 * Conditional logging is also supported. This can be done with the
                 * <code>condition</code> property.
                 * If the value returned from ServletRequest.getAttribute(condition)
                 * yields a non-null value, the logging will be skipped.
                 * </p>
                 * <p>
                 * For extended attributes coming from a getAttribute() call,
                 * it is you responsibility to ensure there are no newline or
                 * control characters.
                 * </p>
                 * @author Peter Rossbach
                 */
                // @ts-ignore
                class ExtendedAccessLogValve extends org.apache.catalina.valves.AccessLogValve {
                    // @ts-ignore
                    constructor()
                    /**
                     * The descriptive information about this implementation.
                     */
                    // @ts-ignore
                    static readonly extendedAccessLogInfo: java.lang.String | string
                    /**
                     * Open the new log file for the date specified by <code>dateStamp</code>.
                     */
                    // @ts-ignore
                    open(): void
                    // @ts-ignore
                    createLogElements(): org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement[]
                    // @ts-ignore
                    getLogElement(token: java.lang.String | string, tokenizer: org.apache.catalina.valves.ExtendedAccessLogValve.PatternTokenizer): org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement
                    // @ts-ignore
                    getClientToServerElement(tokenizer: org.apache.catalina.valves.ExtendedAccessLogValve.PatternTokenizer): org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement
                    // @ts-ignore
                    getServerToClientElement(tokenizer: org.apache.catalina.valves.ExtendedAccessLogValve.PatternTokenizer): org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement
                    // @ts-ignore
                    getProxyElement(tokenizer: org.apache.catalina.valves.ExtendedAccessLogValve.PatternTokenizer): org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement
                    // @ts-ignore
                    getXParameterElement(tokenizer: org.apache.catalina.valves.ExtendedAccessLogValve.PatternTokenizer): org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement
                    // @ts-ignore
                    getServletRequestElement(parameter: java.lang.String | string): org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement
                }
            }
        }
    }
}
