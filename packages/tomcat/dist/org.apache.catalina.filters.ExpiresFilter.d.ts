declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                /**
                 * <p>
                 * ExpiresFilter is a Java Servlet API port of <a
                 * href="https://httpd.apache.org/docs/2.2/mod/mod_expires.html">Apache
                 * mod_expires</a> to add '{@code Expires}' and
                 * '{@code Cache-Control: max-age=}' headers to HTTP response according to its
                 * '{@code Content-Type}'.
                 * </p>
                 * <p>
                 * Following documentation is inspired by <a
                 * href="https://httpd.apache.org/docs/2.2/mod/mod_expires.html">mod_expires</a>
                 * </p>
                 * <h1>Summary</h1>
                 * <p>
                 * This filter controls the setting of the {@code Expires} HTTP header and the
                 * {@code max-age} directive of the {@code Cache-Control} HTTP header in
                 * server responses. The expiration date can set to be relative to either the
                 * time the source file was last modified, or to the time of the client access.
                 * </p>
                 * <p>
                 * These HTTP headers are an instruction to the client about the document&#x27;s
                 * validity and persistence. If cached, the document may be fetched from the
                 * cache rather than from the source until this time has passed. After that, the
                 * cache copy is considered &quot;expired&quot; and invalid, and a new copy must
                 * be obtained from the source.
                 * </p>
                 * <p>
                 * To modify {@code Cache-Control} directives other than {@code max-age} (see
                 * <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9" >RFC
                 * 2616 section 14.9</a>), you can use other servlet filters or <a
                 * href="https://httpd.apache.org/docs/2.2/mod/mod_headers.html" >Apache Httpd
                 * mod_headers</a> module.
                 * </p>
                 * <h1>Filter Configuration</h1><h2>Basic configuration to add
                 * '{@code Expires}' and '{@code Cache-Control: max-age=}'
                 * headers to images, css and javascript</h2>
                 * <pre>
                 * {@code
                 * <web-app ...>
                 * ...
                 * <filter>
                 * <filter-name>ExpiresFilter</filter-name>
                 * <filter-class>org.apache.catalina.filters.ExpiresFilter</filter-class>
                 * <init-param>
                 * <param-name>ExpiresByType image</param-name>
                 * <param-value>access plus 10 minutes</param-value>
                 * </init-param>
                 * <init-param>
                 * <param-name>ExpiresByType text/css</param-name>
                 * <param-value>access plus 10 minutes</param-value>
                 * </init-param>
                 * <init-param>
                 * <param-name>ExpiresByType application/javascript</param-name>
                 * <param-value>access plus 10 minutes</param-value>
                 * </init-param>
                 * </filter>
                 * ...
                 * <filter-mapping>
                 * <filter-name>ExpiresFilter</filter-name>
                 * <url-pattern>/*</url-pattern>
                 * <dispatcher>REQUEST</dispatcher>
                 * </filter-mapping>
                 * ...
                 * </web-app>
                 * }
                 * </pre>
                 * <h2>Configuration Parameters</h2>
                 * <h3>{@code ExpiresByType <content-type>}</h3>
                 * <p>
                 * This directive defines the value of the {@code Expires} header and the
                 * {@code max-age} directive of the {@code Cache-Control} header generated for
                 * documents of the specified type (<i>e.g.</i>, {@code text/html}). The second
                 * argument sets the number of seconds that will be added to a base time to
                 * construct the expiration date. The {@code Cache-Control: max-age} is
                 * calculated by subtracting the request time from the expiration date and
                 * expressing the result in seconds.
                 * </p>
                 * <p>
                 * The base time is either the last modification time of the file, or the time
                 * of the client&#x27;s access to the document. Which should be used is
                 * specified by the {@code <code>} field; {@code M} means that the
                 * file&#x27;s last modification time should be used as the base time, and
                 * {@code A} means the client&#x27;s access time should be used. The duration
                 * is expressed in seconds. {@code A2592000} stands for
                 * {@code access plus 30 days} in alternate syntax.
                 * </p>
                 * <p>
                 * The difference in effect is subtle. If {@code M} ({@code modification} in
                 * alternate syntax) is used, all current copies of the document in all caches
                 * will expire at the same time, which can be good for something like a weekly
                 * notice that&#x27;s always found at the same URL. If {@code A} (
                 * {@code access} or {@code now} in alternate syntax) is used, the date of
                 * expiration is different for each client; this can be good for image files
                 * that don&#x27;t change very often, particularly for a set of related
                 * documents that all refer to the same images (<i>i.e.</i>, the images will be
                 * accessed repeatedly within a relatively short timespan).
                 * </p>
                 * <p>
                 * <strong>Example:</strong>
                 * </p>
                 * <pre>
                 * {@code
                 * <init-param>
                 * <param-name>ExpiresByType text/html</param-name>
                 * <param-value>access plus 1 month 15 days 2 hours</param-value>
                 * </init-param>
                 * <init-param>
                 * <!-- 2592000 seconds = 30 days -->
                 * <param-name>ExpiresByType image/gif</param-name>
                 * <param-value>A2592000</param-value>
                 * </init-param>
                 * }
                 * </pre>
                 * <p>
                 * Note that this directive only has effect if {@code ExpiresActive On} has
                 * been specified. It overrides, for the specified MIME type <i>only</i>, any
                 * expiration date set by the {@code ExpiresDefault} directive.
                 * </p>
                 * <p>
                 * You can also specify the expiration time calculation using an alternate
                 * syntax, described earlier in this document.
                 * </p>
                 * <h3>
                 * {@code ExpiresExcludedResponseStatusCodes}</h3>
                 * <p>
                 * This directive defines the http response status codes for which the
                 * {@code ExpiresFilter} will not generate expiration headers. By default, the
                 * {@code 304} status code (&quot;{@code Not modified}&quot;) is skipped. The
                 * value is a comma separated list of http status codes.
                 * </p>
                 * <p>
                 * This directive is useful to ease usage of {@code ExpiresDefault} directive.
                 * Indeed, the behavior of {@code 304 Not modified} (which does specify a
                 * {@code Content-Type} header) combined with {@code Expires} and
                 * {@code Cache-Control:max-age=} headers can be unnecessarily tricky to
                 * understand.
                 * </p>
                 * <p>
                 * Configuration sample :
                 * </p>
                 * <pre>
                 * {@code
                 * <init-param>
                 * <param-name>ExpiresExcludedResponseStatusCodes</param-name>
                 * <param-value>302, 500, 503</param-value>
                 * </init-param>
                 * }
                 * </pre>
                 * <h3>ExpiresDefault</h3>
                 * <p>
                 * This directive sets the default algorithm for calculating the expiration time
                 * for all documents in the affected realm. It can be overridden on a
                 * type-by-type basis by the {@code ExpiresByType} directive. See the
                 * description of that directive for details about the syntax of the argument,
                 * and the "alternate syntax" description as well.
                 * </p>
                 * <h1>Alternate Syntax</h1>
                 * <p>
                 * The {@code ExpiresDefault} and {@code ExpiresByType} directives can also be
                 * defined in a more readable syntax of the form:
                 * </p>
                 * <pre>
                 * {@code
                 * <init-param>
                 * <param-name>ExpiresDefault</param-name>
                 * <param-value><base> [plus] (<num> <type>)*</param-value>
                 * </init-param>
                 * <init-param>
                 * <param-name>ExpiresByType type/encoding</param-name>
                 * <param-value><base> [plus] (<num> <type>)*</param-value>
                 * </init-param>
                 * }
                 * </pre>
                 * <p>
                 * where {@code <base>} is one of:
                 * </p>
                 * <ul>
                 * <li>{@code access}</li>
                 * <li>{@code now} (equivalent to &#x27;{@code access}&#x27;)</li>
                 * <li>{@code modification}</li>
                 * </ul>
                 * <p>
                 * The {@code plus} keyword is optional. {@code <num>} should be an
                 * integer value (acceptable to {@code Integer.parseInt()}), and
                 * {@code <type>} is one of:
                 * </p>
                 * <ul>
                 * <li>{@code years}</li>
                 * <li>{@code months}</li>
                 * <li>{@code weeks}</li>
                 * <li>{@code days}</li>
                 * <li>{@code hours}</li>
                 * <li>{@code minutes}</li>
                 * <li>{@code seconds}</li>
                 * </ul>
                 * <p>
                 * For example, any of the following directives can be used to make documents
                 * expire 1 month after being accessed, by default:
                 * </p>
                 * <pre>
                 * {@code
                 * <init-param>
                 * <param-name>ExpiresDefault</param-name>
                 * <param-value>access plus 1 month</param-value>
                 * </init-param>
                 * <init-param>
                 * <param-name>ExpiresDefault</param-name>
                 * <param-value>access plus 4 weeks</param-value>
                 * </init-param>
                 * <init-param>
                 * <param-name>ExpiresDefault</param-name>
                 * <param-value>access plus 30 days</param-value>
                 * </init-param>
                 * }
                 * </pre>
                 * <p>
                 * The expiry time can be fine-tuned by adding several &#x27;
                 * {@code <num> <type>}&#x27; clauses:
                 * </p>
                 * <pre>
                 * {@code
                 * <init-param>
                 * <param-name>ExpiresByType text/html</param-name>
                 * <param-value>access plus 1 month 15 days 2 hours</param-value>
                 * </init-param>
                 * <init-param>
                 * <param-name>ExpiresByType image/gif</param-name>
                 * <param-value>modification plus 5 hours 3 minutes</param-value>
                 * </init-param>
                 * }
                 * </pre>
                 * <p>
                 * Note that if you use a modification date based setting, the {@code Expires}
                 * header will <strong>not</strong> be added to content that does not come from
                 * a file on disk. This is due to the fact that there is no modification time
                 * for such content.
                 * </p>
                 * <h1>Expiration headers generation eligibility</h1>
                 * <p>
                 * A response is eligible to be enriched by {@code ExpiresFilter} if :
                 * </p>
                 * <ol>
                 * <li>no expiration header is defined ({@code Expires} header or the
                 * {@code max-age} directive of the {@code Cache-Control} header),</li>
                 * <li>the response status code is not excluded by the directive
                 * {@code ExpiresExcludedResponseStatusCodes},</li>
                 * <li>the {@code Content-Type} of the response matches one of the types
                 * defined the in {@code ExpiresByType} directives or the
                 * {@code ExpiresDefault} directive is defined.</li>
                 * </ol>
                 * <p>
                 * Note :
                 * </p>
                 * <ul>
                 * <li>If {@code Cache-Control} header contains other directives than
                 * {@code max-age}, they are concatenated with the {@code max-age} directive
                 * that is added by the {@code ExpiresFilter}.</li>
                 * </ul>
                 * <h1>Expiration configuration selection</h1>
                 * <p>
                 * The expiration configuration if elected according to the following algorithm:
                 * </p>
                 * <ol>
                 * <li>{@code ExpiresByType} matching the exact content-type returned by
                 * {@code HttpServletResponse.getContentType()} possibly including the charset
                 * (e.g. &#x27;{@code text/xml;charset=UTF-8}&#x27;),</li>
                 * <li>{@code ExpiresByType} matching the content-type without the charset if
                 * {@code HttpServletResponse.getContentType()} contains a charset (e.g. &#x27;
                 * {@code text/xml;charset=UTF-8}&#x27; -&gt; &#x27;{@code text/xml}&#x27;),</li>
                 * <li>{@code ExpiresByType} matching the major type (e.g. substring before
                 * &#x27;{@code /}&#x27;) of {@code HttpServletResponse.getContentType()}
                 * (e.g. &#x27;{@code text/xml;charset=UTF-8}&#x27; -&gt; &#x27;{@code text}
                 * &#x27;),</li>
                 * <li>{@code ExpiresDefault}</li>
                 * </ol>
                 * <h1>Implementation Details</h1><h2>When to write the expiration headers ?</h2>
                 * <p>
                 * The {@code ExpiresFilter} traps the &#x27;on before write response
                 * body&#x27; event to decide whether it should generate expiration headers or
                 * not.
                 * </p>
                 * <p>
                 * To trap the &#x27;before write response body&#x27; event, the
                 * {@code ExpiresFilter} wraps the http servlet response&#x27;s writer and
                 * outputStream to intercept calls to the methods {@code write()},
                 * {@code print()}, {@code close()} and {@code flush()}. For empty response
                 * body (e.g. empty files), the {@code write()}, {@code print()},
                 * {@code close()} and {@code flush()} methods are not called; to handle this
                 * case, the {@code ExpiresFilter}, at the end of its {@code doFilter()}
                 * method, manually triggers the {@code onBeforeWriteResponseBody()} method.
                 * </p>
                 * <h2>Configuration syntax</h2>
                 * <p>
                 * The {@code ExpiresFilter} supports the same configuration syntax as Apache
                 * Httpd mod_expires.
                 * </p>
                 * <p>
                 * A challenge has been to choose the name of the {@code <param-name>}
                 * associated with {@code ExpiresByType} in the {@code <filter>}
                 * declaration. Indeed, Several {@code ExpiresByType} directives can be
                 * declared when {@code web.xml} syntax does not allow to declare several
                 * {@code <init-param>} with the same name.
                 * </p>
                 * <p>
                 * The workaround has been to declare the content type in the
                 * {@code <param-name>} rather than in the {@code <param-value>}.
                 * </p>
                 * <h2>Designed for extension : the open/close principle</h2>
                 * <p>
                 * The {@code ExpiresFilter} has been designed for extension following the
                 * open/close principle.
                 * </p>
                 * <p>
                 * Key methods to override for extension are :
                 * </p>
                 * <ul>
                 * <li>
                 * {@link #isEligibleToExpirationHeaderGeneration(HttpServletRequest, XHttpServletResponse)}
                 * </li>
                 * <li>
                 * {@link #getExpirationDate(XHttpServletResponse)}</li>
                 * </ul>
                 * <h1>Troubleshooting</h1>
                 * <p>
                 * To troubleshoot, enable logging on the
                 * {@code org.apache.catalina.filters.ExpiresFilter}.
                 * </p>
                 * <p>
                 * Extract of logging.properties
                 * </p>
                 * <code>
                 * org.apache.catalina.filters.ExpiresFilter.level = FINE
                 * </code>
                 * <p>
                 * Sample of initialization log message :
                 * </p>
                 * <code>
                 * Mar 26, 2010 2:01:41 PM org.apache.catalina.filters.ExpiresFilter init
                 * FINE: Filter initialized with configuration ExpiresFilter[
                 * excludedResponseStatusCode=[304],
                 * default=null,
                 * byType={
                 * image=ExpiresConfiguration[startingPoint=ACCESS_TIME, duration=[10 MINUTE]],
                 * text/css=ExpiresConfiguration[startingPoint=ACCESS_TIME, duration=[10 MINUTE]],
                 * application/javascript=ExpiresConfiguration[startingPoint=ACCESS_TIME, duration=[10 MINUTE]]}]
                 * </code>
                 * <p>
                 * Sample of per-request log message where {@code ExpiresFilter} adds an
                 * expiration date
                 * </p>
                 * <code>
                 * Mar 26, 2010 2:09:47 PM org.apache.catalina.filters.ExpiresFilter onBeforeWriteResponseBody
                 * FINE: Request "/tomcat.gif" with response status "200" content-type "image/gif", set expiration date 3/26/10 2:19 PM
                 * </code>
                 * <p>
                 * Sample of per-request log message where {@code ExpiresFilter} does not add
                 * an expiration date
                 * </p>
                 * <code>
                 * Mar 26, 2010 2:10:27 PM org.apache.catalina.filters.ExpiresFilter onBeforeWriteResponseBody
                 * FINE: Request "/docs/config/manager.html" with response status "200" content-type "text/html", no expiration configured
                 * </code>
                 */
                // @ts-ignore
                class ExpiresFilter extends org.apache.catalina.filters.FilterBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * Convert a comma delimited list of numbers into an {@code int[]}.
                     * @param commaDelimitedInts
                     *             can be {#code null}
                     * @return never {#code null} array
                     */
                    // @ts-ignore
                    static commaDelimitedListToIntArray(commaDelimitedInts: java.lang.String | string): number /*int*/[]
                    /**
                     * Convert a given comma delimited list of strings into an array of String
                     * @param commaDelimitedStrings the string to be split
                     * @return array of patterns (non {#code null})
                     */
                    // @ts-ignore
                    static commaDelimitedListToStringArray(commaDelimitedStrings: java.lang.String | string): string[]
                    /**
                     * @return {#code true} if the given {@code str} contains the given
                     *  {@code searchStr}.
                     * @param str String that will be searched
                     * @param searchStr The substring to search
                     */
                    // @ts-ignore
                    static contains(str: java.lang.String | string, searchStr: java.lang.String | string): boolean
                    /**
                     * Convert an array of ints into a comma delimited string
                     * @param ints The int array
                     * @return a comma separated string
                     */
                    // @ts-ignore
                    static intsToCommaDelimitedString(ints: number /*int*/[]): string
                    /**
                     * @param str The String to check
                     * @return {#code true} if the given {@code str} is
                     *  {@code null} or has a zero characters length.
                     */
                    // @ts-ignore
                    static isEmpty(str: java.lang.String | string): boolean
                    /**
                     * @param str The String to check
                     * @return {#code true} if the given {@code str} has at least one
                     *  character (can be a withespace).
                     */
                    // @ts-ignore
                    static isNotEmpty(str: java.lang.String | string): boolean
                    /**
                     * @return {#code true} if the given {@code string} starts with the
                     *  given {@code prefix} ignoring case.
                     * @param string
                     *             can be {#code null}
                     * @param prefix
                     *             can be {#code null}
                     */
                    // @ts-ignore
                    static startsWithIgnoreCase(string: java.lang.String | string, prefix: java.lang.String | string): boolean
                    /**
                     * @return the subset of the given {#code str} that is before the first
                     *  occurrence of the given {@code separator}. Return {@code null}
                     *  if the given {@code str} or the given {@code separator} is
                     *  null. Return and empty string if the {@code separator} is empty.
                     * @param str
                     *             can be {#code null}
                     * @param separator
                     *             can be {#code null}
                     */
                    // @ts-ignore
                    static substringBefore(str: java.lang.String | string, separator: java.lang.String | string): string
                    // @ts-ignore
                    public doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                    // @ts-ignore
                    public getDefaultExpiresConfiguration(): org.apache.catalina.filters.ExpiresFilter.ExpiresConfiguration
                    // @ts-ignore
                    public getExcludedResponseStatusCodes(): string
                    // @ts-ignore
                    public getExcludedResponseStatusCodesAsInts(): number /*int*/[]
                    /**
                     * <p>
                     * Returns the expiration date of the given {@link XHttpServletResponse} or
                     * {@code null} if no expiration date has been configured for the
                     * declared content type.
                     * </p>
                     * <p>
                     * {@code protected} for extension.
                     * </p>
                     * @param response The Servlet response
                     * @return the expiration date
                     * @see HttpServletResponse#getContentType()
                     */
                    // @ts-ignore
                    getExpirationDate(response: org.apache.catalina.filters.ExpiresFilter.XHttpServletResponse): java.util.Date
                    /**
                     * <p>
                     * Returns the expiration date of the given {@link ExpiresConfiguration},
                     * {@link HttpServletRequest} and {@link XHttpServletResponse}.
                     * </p>
                     * <p>
                     * {@code protected} for extension.
                     * </p>
                     * @param configuration The parsed expires
                     * @param response The Servlet response
                     * @return the expiration date
                     */
                    // @ts-ignore
                    getExpirationDate(configuration: org.apache.catalina.filters.ExpiresFilter.ExpiresConfiguration, response: org.apache.catalina.filters.ExpiresFilter.XHttpServletResponse): java.util.Date
                    // @ts-ignore
                    public getExpiresConfigurationByContentType(): java.util.Map<java.lang.String | string, org.apache.catalina.filters.ExpiresFilter.ExpiresConfiguration>
                    // @ts-ignore
                    getLogger(): org.apache.juli.logging.Log
                    // @ts-ignore
                    public init(filterConfig: javax.servlet.FilterConfig): void
                    /**
                     * <p>
                     * {@code protected} for extension.
                     * </p>
                     * @param request The Servlet request
                     * @param response The Servlet response
                     * @return <code>true</code> if an expire header may be added
                     */
                    // @ts-ignore
                    isEligibleToExpirationHeaderGeneration(request: javax.servlet.http.HttpServletRequest, response: org.apache.catalina.filters.ExpiresFilter.XHttpServletResponse): boolean
                    /**
                     * <p>
                     * If no expiration header has been set by the servlet and an expiration has
                     * been defined in the {@link ExpiresFilter} configuration, sets the
                     * '{@code Expires}' header and the attribute '{@code max-age}' of the
                     * '{@code Cache-Control}' header.
                     * </p>
                     * <p>
                     * Must be called on the "Start Write Response Body" event.
                     * </p>
                     * <p>
                     * Invocations to {@code Logger.debug(...)} are guarded by
                     * {@link Log#isDebugEnabled()} because
                     * {@link HttpServletRequest#getRequestURI()} and
                     * {@link HttpServletResponse#getContentType()} costs {@code String}
                     * objects instantiations (as of Tomcat 7).
                     * </p>
                     * @param request The Servlet request
                     * @param response The Servlet response
                     */
                    // @ts-ignore
                    public onBeforeWriteResponseBody(request: javax.servlet.http.HttpServletRequest, response: org.apache.catalina.filters.ExpiresFilter.XHttpServletResponse): void
                    /**
                     * Parse configuration lines like
                     * '{@code access plus 1 month 15 days 2 hours}' or
                     * '{@code modification 1 day 2 hours 5 seconds}'
                     * @param inputLine the input
                     * @return the parsed expires
                     */
                    // @ts-ignore
                    parseExpiresConfiguration(inputLine: java.lang.String | string): org.apache.catalina.filters.ExpiresFilter.ExpiresConfiguration
                    // @ts-ignore
                    public setDefaultExpiresConfiguration(defaultExpiresConfiguration: org.apache.catalina.filters.ExpiresFilter.ExpiresConfiguration): void
                    // @ts-ignore
                    public setExcludedResponseStatusCodes(excludedResponseStatusCodes: number /*int*/[]): void
                    // @ts-ignore
                    public setExpiresConfigurationByContentType(expiresConfigurationByContentType: java.util.Map<java.lang.String | string, org.apache.catalina.filters.ExpiresFilter.ExpiresConfiguration>): void
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
