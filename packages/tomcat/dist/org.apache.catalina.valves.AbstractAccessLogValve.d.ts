declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                /**
                 * <p>Abstract implementation of the <b>Valve</b> interface that generates a web
                 * server access log with the detailed line contents matching a configurable
                 * pattern. The syntax of the available patterns is similar to that supported by
                 * the <a href="https://httpd.apache.org/">Apache HTTP Server</a>
                 * <code>mod_log_config</code> module.</p>
                 * <p>Patterns for the logged message may include constant text or any of the
                 * following replacement strings, for which the corresponding information
                 * from the specified Response is substituted:</p>
                 * <ul>
                 * <li><b>%a</b> - Remote IP address
                 * <li><b>%A</b> - Local IP address
                 * <li><b>%b</b> - Bytes sent, excluding HTTP headers, or '-' if no bytes
                 * were sent
                 * <li><b>%B</b> - Bytes sent, excluding HTTP headers
                 * <li><b>%h</b> - Remote host name (or IP address if
                 * <code>enableLookups</code> for the connector is false)
                 * <li><b>%H</b> - Request protocol
                 * <li><b>%l</b> - Remote logical username from identd (always returns '-')
                 * <li><b>%m</b> - Request method
                 * <li><b>%p</b> - Local port
                 * <li><b>%q</b> - Query string (prepended with a '?' if it exists, otherwise
                 * an empty string
                 * <li><b>%r</b> - First line of the request
                 * <li><b>%s</b> - HTTP status code of the response
                 * <li><b>%S</b> - User session ID
                 * <li><b>%t</b> - Date and time, in Common Log Format format
                 * <li><b>%u</b> - Remote user that was authenticated
                 * <li><b>%U</b> - Requested URL path
                 * <li><b>%v</b> - Local server name
                 * <li><b>%D</b> - Time taken to process the request, in millis
                 * <li><b>%T</b> - Time taken to process the request, in seconds
                 * <li><b>%F</b> - Time taken to commit the response, in millis
                 * <li><b>%I</b> - current Request thread name (can compare later with stacktraces)
                 * <li><b>%X</b> - Connection status when response is completed:
                 * <ul>
                 * <li><code>X</code> = Connection aborted before the response completed.</li>
                 * <li><code>+</code> = Connection may be kept alive after the response is sent.</li>
                 * <li><code>-</code> = Connection will be closed after the response is sent.</li>
                 * </ul>
                 * </ul>
                 * <p>In addition, the caller can specify one of the following aliases for
                 * commonly utilized patterns:</p>
                 * <ul>
                 * <li><b>common</b> - <code>%h %l %u %t "%r" %s %b</code>
                 * <li><b>combined</b> -
                 * <code>%h %l %u %t "%r" %s %b "%{Referer}i" "%{User-Agent}i"</code>
                 * </ul>
                 * <p>
                 * There is also support to write information from the cookie, incoming
                 * header, the Session or something else in the ServletRequest.<br>
                 * It is modeled after the
                 * <a href="https://httpd.apache.org/">Apache HTTP Server</a> log configuration
                 * syntax:</p>
                 * <ul>
                 * <li><code>%{xxx}i</code> for incoming headers
                 * <li><code>%{xxx}o</code> for outgoing response headers
                 * <li><code>%{xxx}c</code> for a specific cookie
                 * <li><code>%{xxx}r</code> xxx is an attribute in the ServletRequest
                 * <li><code>%{xxx}s</code> xxx is an attribute in the HttpSession
                 * <li><code>%{xxx}t</code> xxx is an enhanced SimpleDateFormat pattern
                 * (see Configuration Reference document for details on supported time patterns)
                 * </ul>
                 * <p>
                 * Conditional logging is also supported. This can be done with the
                 * <code>conditionUnless</code> and <code>conditionIf</code> properties.
                 * If the value returned from ServletRequest.getAttribute(conditionUnless)
                 * yields a non-null value, the logging will be skipped.
                 * If the value returned from ServletRequest.getAttribute(conditionIf)
                 * yields the null value, the logging will be skipped.
                 * The <code>condition</code> attribute is synonym for
                 * <code>conditionUnless</code> and is provided for backwards compatibility.
                 * </p>
                 * <p>
                 * For extended attributes coming from a getAttribute() call,
                 * it is you responsibility to ensure there are no newline or
                 * control characters.
                 * </p>
                 * @author Craig R. McClanahan
                 * @author Jason Brittain
                 * @author Remy Maucherat
                 * @author Takayuki Kaneko
                 * @author Peter Rossbach
                 */
                // @ts-ignore
                abstract class AbstractAccessLogValve extends org.apache.catalina.valves.ValveBase implements org.apache.catalina.AccessLog {
                    // @ts-ignore
                    constructor()
                    /**
                     * enabled this component
                     */
                    // @ts-ignore
                    enabled: boolean
                    /**
                     * The pattern used to format our access log lines.
                     */
                    // @ts-ignore
                    pattern: java.lang.String | string
                    /**
                     * Are we doing conditional logging. default null.
                     * It is the value of <code>conditionUnless</code> property.
                     */
                    // @ts-ignore
                    condition: java.lang.String | string
                    /**
                     * Are we doing conditional logging. default null.
                     * It is the value of <code>conditionIf</code> property.
                     */
                    // @ts-ignore
                    conditionIf: java.lang.String | string
                    /**
                     * Name of locale used to format timestamps in log entries and in
                     * log file name suffix.
                     */
                    // @ts-ignore
                    localeName: java.lang.String | string
                    /**
                     * Locale used to format timestamps in log entries and in
                     * log file name suffix.
                     */
                    // @ts-ignore
                    locale: java.util.Locale
                    /**
                     * Array of AccessLogElement, they will be used to make log message.
                     */
                    // @ts-ignore
                    logElements: org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement[]
                    /**
                     * Should this valve set request attributes for IP address, hostname,
                     * protocol and port used for the request.
                     * Default is <code>false</code>.
                     * @see #setRequestAttributesEnabled(boolean)
                     */
                    // @ts-ignore
                    requestAttributesEnabled: boolean
                    // @ts-ignore
                    public getIpv6Canonical(): boolean
                    // @ts-ignore
                    public setIpv6Canonical(ipv6Canonical: boolean): void
                    /**
                     * {@inheritDoc}
                     * Default is <code>false</code>.
                     */
                    // @ts-ignore
                    public setRequestAttributesEnabled(requestAttributesEnabled: boolean): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getRequestAttributesEnabled(): boolean
                    /**
                     * @return the enabled flag.
                     */
                    // @ts-ignore
                    public getEnabled(): boolean
                    /**
                     * @param enabled
                     *             The enabled to set.
                     */
                    // @ts-ignore
                    public setEnabled(enabled: boolean): void
                    /**
                     * @return the format pattern.
                     */
                    // @ts-ignore
                    public getPattern(): string
                    /**
                     * Set the format pattern, first translating any recognized alias.
                     * @param pattern The new pattern
                     */
                    // @ts-ignore
                    public setPattern(pattern: java.lang.String | string): void
                    /**
                     * Return whether the attribute name to look for when
                     * performing conditional logging. If null, every
                     * request is logged.
                     * @return the attribute name
                     */
                    // @ts-ignore
                    public getCondition(): string
                    /**
                     * Set the ServletRequest.attribute to look for to perform
                     * conditional logging. Set to null to log everything.
                     * @param condition Set to null to log everything
                     */
                    // @ts-ignore
                    public setCondition(condition: java.lang.String | string): void
                    /**
                     * Return whether the attribute name to look for when
                     * performing conditional logging. If null, every
                     * request is logged.
                     * @return the attribute name
                     */
                    // @ts-ignore
                    public getConditionUnless(): string
                    /**
                     * Set the ServletRequest.attribute to look for to perform
                     * conditional logging. Set to null to log everything.
                     * @param condition Set to null to log everything
                     */
                    // @ts-ignore
                    public setConditionUnless(condition: java.lang.String | string): void
                    /**
                     * Return whether the attribute name to look for when
                     * performing conditional logging. If null, every
                     * request is logged.
                     * @return the attribute name
                     */
                    // @ts-ignore
                    public getConditionIf(): string
                    /**
                     * Set the ServletRequest.attribute to look for to perform
                     * conditional logging. Set to null to log everything.
                     * @param condition Set to null to log everything
                     */
                    // @ts-ignore
                    public setConditionIf(condition: java.lang.String | string): void
                    /**
                     * Return the locale used to format timestamps in log entries and in
                     * log file name suffix.
                     * @return the locale
                     */
                    // @ts-ignore
                    public getLocale(): string
                    /**
                     * Set the locale used to format timestamps in log entries and in
                     * log file name suffix. Changing the locale is only supported
                     * as long as the AccessLogValve has not logged anything. Changing
                     * the locale later can lead to inconsistent formatting.
                     * @param localeName The locale to use.
                     */
                    // @ts-ignore
                    public setLocale(localeName: java.lang.String | string): void
                    /**
                     * Log a message summarizing the specified request and response, according
                     * to the format specified by the <code>pattern</code> property.
                     * @param request Request being processed
                     * @param response Response being processed
                     * @exception IOException if an input/output error has occurred
                     * @exception ServletException if a servlet error has occurred
                     */
                    // @ts-ignore
                    public invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                    // @ts-ignore
                    public log(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, time: number /*long*/): void
                    /**
                     * Log the specified message.
                     * @param message Message to be logged. This object will be recycled by
                     *   the calling method.
                     */
                    // @ts-ignore
                    abstract log(message: java.io.CharArrayWriter): void
                    /**
                     * Find a locale by name.
                     * @param name The locale name
                     * @param fallback Fallback locale if the name is not found
                     * @return the locale object
                     */
                    // @ts-ignore
                    static findLocale(name: java.lang.String | string, fallback: java.util.Locale): java.util.Locale
                    /**
                     * Start this component and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Stop this component and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#stopInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    stopInternal(): void
                    /**
                     * Parse pattern string and create the array of AccessLogElement.
                     * @return the log elements array
                     */
                    // @ts-ignore
                    createLogElements(): org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement[]
                    /**
                     * Create an AccessLogElement implementation which needs an element name.
                     * @param name Header name
                     * @param pattern char in the log pattern
                     * @return the log element
                     */
                    // @ts-ignore
                    createAccessLogElement(name: java.lang.String | string, pattern: string): org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement
                    /**
                     * Create an AccessLogElement implementation.
                     * @param pattern char in the log pattern
                     * @return the log element
                     */
                    // @ts-ignore
                    createAccessLogElement(pattern: string): org.apache.catalina.valves.AbstractAccessLogValve.AccessLogElement
                }
            }
        }
    }
}
