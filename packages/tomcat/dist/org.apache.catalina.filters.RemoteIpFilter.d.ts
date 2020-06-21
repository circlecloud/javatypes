declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                /**
                 * <p>
                 * Servlet filter to integrate "X-Forwarded-For" and "X-Forwarded-Proto" HTTP headers.
                 * </p>
                 * <p>
                 * Most of the design of this Servlet Filter is a port of <a
                 * href="https://httpd.apache.org/docs/trunk/mod/mod_remoteip.html">mod_remoteip</a>, this servlet filter replaces the apparent client remote
                 * IP address and hostname for the request with the IP address list presented by a proxy or a load balancer via a request headers (e.g.
                 * "X-Forwarded-For").
                 * </p>
                 * <p>
                 * Another feature of this servlet filter is to replace the apparent scheme (http/https) and server port with the scheme presented by a
                 * proxy or a load balancer via a request header (e.g. "X-Forwarded-Proto").
                 * </p>
                 * <p>
                 * This servlet filter proceeds as follows:
                 * </p>
                 * <p>
                 * If the incoming <code>request.getRemoteAddr()</code> matches the servlet
                 * filter's list of internal or trusted proxies:
                 * </p>
                 * <ul>
                 * <li>Loop on the comma delimited list of IPs and hostnames passed by the preceding load balancer or proxy in the given request's Http
                 * header named <code>$remoteIpHeader</code> (default value <code>x-forwarded-for</code>). Values are processed in right-to-left order.</li>
                 * <li>For each ip/host of the list:
                 * <ul>
                 * <li>if it matches the internal proxies list, the ip/host is swallowed</li>
                 * <li>if it matches the trusted proxies list, the ip/host is added to the created proxies header</li>
                 * <li>otherwise, the ip/host is declared to be the remote ip and looping is stopped.</li>
                 * </ul>
                 * </li>
                 * <li>If the request http header named <code>$protocolHeader</code> (e.g. <code>x-forwarded-proto</code>) consists only of forwards that match
                 * <code>protocolHeaderHttpsValue</code> configuration parameter (default <code>https</code>) then <code>request.isSecure = true</code>,
                 * <code>request.scheme = https</code> and <code>request.serverPort = 443</code>. Note that 443 can be overwritten with the
                 * <code>$httpsServerPort</code> configuration parameter.</li>
                 * </ul>
                 * <table border="1">
                 * <caption>Configuration parameters</caption>
                 * <tr>
                 * <th>XForwardedFilter property</th>
                 * <th>Description</th>
                 * <th>Equivalent mod_remoteip directive</th>
                 * <th>Format</th>
                 * <th>Default Value</th>
                 * </tr>
                 * <tr>
                 * <td>remoteIpHeader</td>
                 * <td>Name of the Http Header read by this servlet filter that holds the list of traversed IP addresses starting from the requesting client
                 * </td>
                 * <td>RemoteIPHeader</td>
                 * <td>Compliant http header name</td>
                 * <td>x-forwarded-for</td>
                 * </tr>
                 * <tr>
                 * <td>internalProxies</td>
                 * <td>Regular expression that matches the IP addresses of internal proxies.
                 * If they appear in the <code>remoteIpHeader</code> value, they will be
                 * trusted and will not appear
                 * in the <code>proxiesHeader</code> value</td>
                 * <td>RemoteIPInternalProxy</td>
                 * <td>Regular expression (in the syntax supported by
                 * {@link java.util.regex.Pattern java.util.regex})</td>
                 * <td>10\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|
                 * 169\.254\.\d{1,3}\.\d{1,3}|127\.\d{1,3}\.\d{1,3}\.\d{1,3}|
                 * 172\.1[6-9]{1}\.\d{1,3}\.\d{1,3}|172\.2[0-9]{1}\.\d{1,3}\.\d{1,3}|
                 * 172\.3[0-1]{1}\.\d{1,3}\.\d{1,3}|
                 * 0:0:0:0:0:0:0:1|::1
                 * <br>
                 * By default, 10/8, 192.168/16, 169.254/16, 127/8, 172.16/12, and 0:0:0:0:0:0:0:1 are allowed.</td>
                 * </tr>
                 * <tr>
                 * <td>proxiesHeader</td>
                 * <td>Name of the http header created by this servlet filter to hold the list of proxies that have been processed in the incoming
                 * <code>remoteIpHeader</code></td>
                 * <td>RemoteIPProxiesHeader</td>
                 * <td>Compliant http header name</td>
                 * <td>x-forwarded-by</td>
                 * </tr>
                 * <tr>
                 * <td>trustedProxies</td>
                 * <td>Regular expression that matches the IP addresses of trusted proxies.
                 * If they appear in the <code>remoteIpHeader</code> value, they will be
                 * trusted and will appear in the <code>proxiesHeader</code> value</td>
                 * <td>RemoteIPTrustedProxy</td>
                 * <td>Regular expression (in the syntax supported by
                 * {@link java.util.regex.Pattern java.util.regex})</td>
                 * <td>&nbsp;</td>
                 * </tr>
                 * <tr>
                 * <td>protocolHeader</td>
                 * <td>Name of the http header read by this servlet filter that holds the flag that this request</td>
                 * <td>N/A</td>
                 * <td>Compliant http header name like <code>X-Forwarded-Proto</code>, <code>X-Forwarded-Ssl</code> or <code>Front-End-Https</code></td>
                 * <td><code>null</code></td>
                 * </tr>
                 * <tr>
                 * <td>protocolHeaderHttpsValue</td>
                 * <td>Value of the <code>protocolHeader</code> to indicate that it is an Https request</td>
                 * <td>N/A</td>
                 * <td>String like <code>https</code> or <code>ON</code></td>
                 * <td><code>https</code></td>
                 * </tr>
                 * <tr>
                 * <td>httpServerPort</td>
                 * <td>Value returned by {@link ServletRequest#getServerPort()} when the <code>protocolHeader</code> indicates <code>http</code> protocol</td>
                 * <td>N/A</td>
                 * <td>integer</td>
                 * <td>80</td>
                 * </tr>
                 * <tr>
                 * <td>httpsServerPort</td>
                 * <td>Value returned by {@link ServletRequest#getServerPort()} when the <code>protocolHeader</code> indicates <code>https</code> protocol</td>
                 * <td>N/A</td>
                 * <td>integer</td>
                 * <td>443</td>
                 * </tr>
                 * </table>
                 * <p>
                 * <strong>Regular expression vs. IP address blocks:</strong> <code>mod_remoteip</code> allows to use address blocks (e.g.
                 * <code>192.168/16</code>) to configure <code>RemoteIPInternalProxy</code> and <code>RemoteIPTrustedProxy</code> ; as the JVM doesn't have a
                 * library similar to <a
                 * href="https://apr.apache.org/docs/apr/1.3/group__apr__network__io.html#gb74d21b8898b7c40bf7fd07ad3eb993d">apr_ipsubnet_test</a>, we rely on
                 * regular expressions.
                 * </p>
                 * <hr>
                 * <p>
                 * <strong>Sample with internal proxies</strong>
                 * </p>
                 * <p>
                 * XForwardedFilter configuration:
                 * </p>
                 * <code>
                 * &lt;filter&gt;
                 * &lt;filter-name&gt;RemoteIpFilter&lt;/filter-name&gt;
                 * &lt;filter-class&gt;org.apache.catalina.filters.RemoteIpFilter&lt;/filter-class&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;internalProxies&lt;/param-name&gt;
                 * &lt;param-value&gt;192\.168\.0\.10|192\.168\.0\.11&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;remoteIpHeader&lt;/param-name&gt;
                 * &lt;param-value&gt;x-forwarded-for&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;remoteIpProxiesHeader&lt;/param-name&gt;
                 * &lt;param-value&gt;x-forwarded-by&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;protocolHeader&lt;/param-name&gt;
                 * &lt;param-value&gt;x-forwarded-proto&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;/filter&gt;
                 * &lt;filter-mapping&gt;
                 * &lt;filter-name&gt;RemoteIpFilter&lt;/filter-name&gt;
                 * &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
                 * &lt;dispatcher&gt;REQUEST&lt;/dispatcher&gt;
                 * &lt;/filter-mapping&gt;</code>
                 * <table border="1">
                 * <caption>Request Values</caption>
                 * <tr>
                 * <th>property</th>
                 * <th>Value Before RemoteIpFilter</th>
                 * <th>Value After RemoteIpFilter</th>
                 * </tr>
                 * <tr>
                 * <td>request.remoteAddr</td>
                 * <td>192.168.0.10</td>
                 * <td>140.211.11.130</td>
                 * </tr>
                 * <tr>
                 * <td>request.header['x-forwarded-for']</td>
                 * <td>140.211.11.130, 192.168.0.10</td>
                 * <td>null</td>
                 * </tr>
                 * <tr>
                 * <td>request.header['x-forwarded-by']</td>
                 * <td>null</td>
                 * <td>null</td>
                 * </tr>
                 * <tr>
                 * <td>request.header['x-forwarded-proto']</td>
                 * <td>https</td>
                 * <td>https</td>
                 * </tr>
                 * <tr>
                 * <td>request.scheme</td>
                 * <td>http</td>
                 * <td>https</td>
                 * </tr>
                 * <tr>
                 * <td>request.secure</td>
                 * <td>false</td>
                 * <td>true</td>
                 * </tr>
                 * <tr>
                 * <td>request.serverPort</td>
                 * <td>80</td>
                 * <td>443</td>
                 * </tr>
                 * </table>
                 * Note : <code>x-forwarded-by</code> header is null because only internal proxies as been traversed by the request.
                 * <code>x-forwarded-by</code> is null because all the proxies are trusted or internal.
                 * <hr>
                 * <p>
                 * <strong>Sample with trusted proxies</strong>
                 * </p>
                 * <p>
                 * RemoteIpFilter configuration:
                 * </p>
                 * <code>
                 * &lt;filter&gt;
                 * &lt;filter-name&gt;RemoteIpFilter&lt;/filter-name&gt;
                 * &lt;filter-class&gt;org.apache.catalina.filters.RemoteIpFilter&lt;/filter-class&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;internalProxies&lt;/param-name&gt;
                 * &lt;param-value&gt;192\.168\.0\.10|192\.168\.0\.11&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;remoteIpHeader&lt;/param-name&gt;
                 * &lt;param-value&gt;x-forwarded-for&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;remoteIpProxiesHeader&lt;/param-name&gt;
                 * &lt;param-value&gt;x-forwarded-by&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;trustedProxies&lt;/param-name&gt;
                 * &lt;param-value&gt;proxy1|proxy2&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;/filter&gt;
                 * &lt;filter-mapping&gt;
                 * &lt;filter-name&gt;RemoteIpFilter&lt;/filter-name&gt;
                 * &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
                 * &lt;dispatcher&gt;REQUEST&lt;/dispatcher&gt;
                 * &lt;/filter-mapping&gt;</code>
                 * <table border="1">
                 * <caption>Request Values</caption>
                 * <tr>
                 * <th>property</th>
                 * <th>Value Before RemoteIpFilter</th>
                 * <th>Value After RemoteIpFilter</th>
                 * </tr>
                 * <tr>
                 * <td>request.remoteAddr</td>
                 * <td>192.168.0.10</td>
                 * <td>140.211.11.130</td>
                 * </tr>
                 * <tr>
                 * <td>request.header['x-forwarded-for']</td>
                 * <td>140.211.11.130, proxy1, proxy2</td>
                 * <td>null</td>
                 * </tr>
                 * <tr>
                 * <td>request.header['x-forwarded-by']</td>
                 * <td>null</td>
                 * <td>proxy1, proxy2</td>
                 * </tr>
                 * </table>
                 * <p>
                 * Note : <code>proxy1</code> and <code>proxy2</code> are both trusted proxies that come in <code>x-forwarded-for</code> header, they both
                 * are migrated in <code>x-forwarded-by</code> header. <code>x-forwarded-by</code> is null because all the proxies are trusted or internal.
                 * </p>
                 * <hr>
                 * <p>
                 * <strong>Sample with internal and trusted proxies</strong>
                 * </p>
                 * <p>
                 * RemoteIpFilter configuration:
                 * </p>
                 * <code>
                 * &lt;filter&gt;
                 * &lt;filter-name&gt;RemoteIpFilter&lt;/filter-name&gt;
                 * &lt;filter-class&gt;org.apache.catalina.filters.RemoteIpFilter&lt;/filter-class&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;internalProxies&lt;/param-name&gt;
                 * &lt;param-value&gt;192\.168\.0\.10|192\.168\.0\.11&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;remoteIpHeader&lt;/param-name&gt;
                 * &lt;param-value&gt;x-forwarded-for&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;remoteIpProxiesHeader&lt;/param-name&gt;
                 * &lt;param-value&gt;x-forwarded-by&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;trustedProxies&lt;/param-name&gt;
                 * &lt;param-value&gt;proxy1|proxy2&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;/filter&gt;
                 * &lt;filter-mapping&gt;
                 * &lt;filter-name&gt;RemoteIpFilter&lt;/filter-name&gt;
                 * &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
                 * &lt;dispatcher&gt;REQUEST&lt;/dispatcher&gt;
                 * &lt;/filter-mapping&gt;</code>
                 * <table border="1">
                 * <caption>Request Values</caption>
                 * <tr>
                 * <th>property</th>
                 * <th>Value Before RemoteIpFilter</th>
                 * <th>Value After RemoteIpFilter</th>
                 * </tr>
                 * <tr>
                 * <td>request.remoteAddr</td>
                 * <td>192.168.0.10</td>
                 * <td>140.211.11.130</td>
                 * </tr>
                 * <tr>
                 * <td>request.header['x-forwarded-for']</td>
                 * <td>140.211.11.130, proxy1, proxy2, 192.168.0.10</td>
                 * <td>null</td>
                 * </tr>
                 * <tr>
                 * <td>request.header['x-forwarded-by']</td>
                 * <td>null</td>
                 * <td>proxy1, proxy2</td>
                 * </tr>
                 * </table>
                 * <p>
                 * Note : <code>proxy1</code> and <code>proxy2</code> are both trusted proxies that come in <code>x-forwarded-for</code> header, they both
                 * are migrated in <code>x-forwarded-by</code> header. As <code>192.168.0.10</code> is an internal proxy, it does not appear in
                 * <code>x-forwarded-by</code>. <code>x-forwarded-by</code> is null because all the proxies are trusted or internal.
                 * </p>
                 * <hr>
                 * <p>
                 * <strong>Sample with an untrusted proxy</strong>
                 * </p>
                 * <p>
                 * RemoteIpFilter configuration:
                 * </p>
                 * <code>
                 * &lt;filter&gt;
                 * &lt;filter-name&gt;RemoteIpFilter&lt;/filter-name&gt;
                 * &lt;filter-class&gt;org.apache.catalina.filters.RemoteIpFilter&lt;/filter-class&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;internalProxies&lt;/param-name&gt;
                 * &lt;param-value&gt;192\.168\.0\.10|192\.168\.0\.11&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;remoteIpHeader&lt;/param-name&gt;
                 * &lt;param-value&gt;x-forwarded-for&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;remoteIpProxiesHeader&lt;/param-name&gt;
                 * &lt;param-value&gt;x-forwarded-by&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;init-param&gt;
                 * &lt;param-name&gt;trustedProxies&lt;/param-name&gt;
                 * &lt;param-value&gt;proxy1|proxy2&lt;/param-value&gt;
                 * &lt;/init-param&gt;
                 * &lt;/filter&gt;
                 * &lt;filter-mapping&gt;
                 * &lt;filter-name&gt;RemoteIpFilter&lt;/filter-name&gt;
                 * &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
                 * &lt;dispatcher&gt;REQUEST&lt;/dispatcher&gt;
                 * &lt;/filter-mapping&gt;</code>
                 * <table border="1">
                 * <caption>Request Values</caption>
                 * <tr>
                 * <th>property</th>
                 * <th>Value Before RemoteIpFilter</th>
                 * <th>Value After RemoteIpFilter</th>
                 * </tr>
                 * <tr>
                 * <td>request.remoteAddr</td>
                 * <td>192.168.0.10</td>
                 * <td>untrusted-proxy</td>
                 * </tr>
                 * <tr>
                 * <td>request.header['x-forwarded-for']</td>
                 * <td>140.211.11.130, untrusted-proxy, proxy1</td>
                 * <td>140.211.11.130</td>
                 * </tr>
                 * <tr>
                 * <td>request.header['x-forwarded-by']</td>
                 * <td>null</td>
                 * <td>proxy1</td>
                 * </tr>
                 * </table>
                 * <p>
                 * Note : <code>x-forwarded-by</code> holds the trusted proxy <code>proxy1</code>. <code>x-forwarded-by</code> holds
                 * <code>140.211.11.130</code> because <code>untrusted-proxy</code> is not trusted and thus, we cannot trust that
                 * <code>untrusted-proxy</code> is the actual remote ip. <code>request.remoteAddr</code> is <code>untrusted-proxy</code> that is an IP
                 * verified by <code>proxy1</code>.
                 * </p>
                 * <hr>
                 */
                // @ts-ignore
                class RemoteIpFilter extends javax.servlet.GenericFilter {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly HTTP_SERVER_PORT_PARAMETER: java.lang.String | string
                    // @ts-ignore
                    static readonly HTTPS_SERVER_PORT_PARAMETER: java.lang.String | string
                    // @ts-ignore
                    static readonly INTERNAL_PROXIES_PARAMETER: java.lang.String | string
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    static readonly PROTOCOL_HEADER_PARAMETER: java.lang.String | string
                    // @ts-ignore
                    static readonly PROTOCOL_HEADER_HTTPS_VALUE_PARAMETER: java.lang.String | string
                    // @ts-ignore
                    static readonly PORT_HEADER_PARAMETER: java.lang.String | string
                    // @ts-ignore
                    static readonly CHANGE_LOCAL_PORT_PARAMETER: java.lang.String | string
                    // @ts-ignore
                    static readonly PROXIES_HEADER_PARAMETER: java.lang.String | string
                    // @ts-ignore
                    static readonly REMOTE_IP_HEADER_PARAMETER: java.lang.String | string
                    // @ts-ignore
                    static readonly TRUSTED_PROXIES_PARAMETER: java.lang.String | string
                    /**
                     * Convert a given comma delimited list of regular expressions into an array of String
                     * @param commaDelimitedStrings The string to split
                     * @return array of patterns (non <code>null</code>)
                     */
                    // @ts-ignore
                    static commaDelimitedListToStringArray(commaDelimitedStrings: java.lang.String | string): string[]
                    /**
                     * Convert a list of strings in a comma delimited string.
                     * @param stringList List of strings
                     * @return concatenated string
                     */
                    // @ts-ignore
                    static listToCommaDelimitedString(stringList: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): string
                    // @ts-ignore
                    public doFilter(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, chain: javax.servlet.FilterChain): void
                    /**
                     * Wrap the incoming <code>request</code> in a {@link XForwardedRequest} if the http header <code>x-forwarded-for</code> is not empty.
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                    // @ts-ignore
                    public isChangeLocalPort(): boolean
                    // @ts-ignore
                    public getHttpsServerPort(): number /*int*/
                    // @ts-ignore
                    public getInternalProxies(): java.util.regex.Pattern
                    // @ts-ignore
                    public getProtocolHeader(): string
                    // @ts-ignore
                    public getPortHeader(): string
                    // @ts-ignore
                    public getProtocolHeaderHttpsValue(): string
                    // @ts-ignore
                    public getProxiesHeader(): string
                    // @ts-ignore
                    public getRemoteIpHeader(): string
                    /**
                     * @see #setRequestAttributesEnabled(boolean)
                     * @return <code>true</code> if the attributes will be logged, otherwise
                     *          <code>false</code>
                     */
                    // @ts-ignore
                    public getRequestAttributesEnabled(): boolean
                    // @ts-ignore
                    public getTrustedProxies(): java.util.regex.Pattern
                    // @ts-ignore
                    public init(): void
                    /**
                     * <p>
                     * If <code>true</code>, the return values for both {@link
                     * ServletRequest#getLocalPort()} and {@link ServletRequest#getServerPort()}
                     * will be modified by this Filter rather than just
                     * {@link ServletRequest#getServerPort()}.
                     * </p>
                     * <p>
                     * Default value : <code>false</code>
                     * </p>
                     * @param changeLocalPort The new flag value
                     */
                    // @ts-ignore
                    public setChangeLocalPort(changeLocalPort: boolean): void
                    /**
                     * <p>
                     * Server Port value if the {@link #protocolHeader} indicates HTTP (i.e. {@link #protocolHeader} is not null and
                     * has a value different of {@link #protocolHeaderHttpsValue}).
                     * </p>
                     * <p>
                     * Default value : 80
                     * </p>
                     * @param httpServerPort The server port to use
                     */
                    // @ts-ignore
                    public setHttpServerPort(httpServerPort: number /*int*/): void
                    /**
                     * <p>
                     * Server Port value if the {@link #protocolHeader} indicates HTTPS
                     * </p>
                     * <p>
                     * Default value : 443
                     * </p>
                     * @param httpsServerPort The server port to use
                     */
                    // @ts-ignore
                    public setHttpsServerPort(httpsServerPort: number /*int*/): void
                    /**
                     * <p>
                     * Regular expression that defines the internal proxies.
                     * </p>
                     * <p>
                     * Default value : 10\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|169\.254.\d{1,3}.\d{1,3}|127\.\d{1,3}\.\d{1,3}\.\d{1,3}|0:0:0:0:0:0:0:1
                     * </p>
                     * @param internalProxies The regexp
                     */
                    // @ts-ignore
                    public setInternalProxies(internalProxies: java.lang.String | string): void
                    /**
                     * <p>
                     * Header that holds the incoming port, usually named
                     * <code>X-Forwarded-Port</code>. If <code>null</code>,
                     * {@link #httpServerPort} or {@link #httpsServerPort} will be used.
                     * </p>
                     * <p>
                     * Default value : <code>null</code>
                     * </p>
                     * @param portHeader The header name
                     */
                    // @ts-ignore
                    public setPortHeader(portHeader: java.lang.String | string): void
                    /**
                     * <p>
                     * Header that holds the incoming protocol, usually named <code>X-Forwarded-Proto</code>. If <code>null</code>, request.scheme and
                     * request.secure will not be modified.
                     * </p>
                     * <p>
                     * Default value : <code>null</code>
                     * </p>
                     * @param protocolHeader The header name
                     */
                    // @ts-ignore
                    public setProtocolHeader(protocolHeader: java.lang.String | string): void
                    /**
                     * <p>
                     * Case insensitive value of the protocol header to indicate that the incoming http request uses HTTPS.
                     * </p>
                     * <p>
                     * Default value : <code>https</code>
                     * </p>
                     * @param protocolHeaderHttpsValue The header value
                     */
                    // @ts-ignore
                    public setProtocolHeaderHttpsValue(protocolHeaderHttpsValue: java.lang.String | string): void
                    /**
                     * <p>
                     * The proxiesHeader directive specifies a header into which mod_remoteip will collect a list of all of the intermediate client IP
                     * addresses trusted to resolve the actual remote IP. Note that intermediate RemoteIPTrustedProxy addresses are recorded in this header,
                     * while any intermediate RemoteIPInternalProxy addresses are discarded.
                     * </p>
                     * <p>
                     * Name of the http header that holds the list of trusted proxies that has been traversed by the http request.
                     * </p>
                     * <p>
                     * The value of this header can be comma delimited.
                     * </p>
                     * <p>
                     * Default value : <code>X-Forwarded-By</code>
                     * </p>
                     * @param proxiesHeader The header name
                     */
                    // @ts-ignore
                    public setProxiesHeader(proxiesHeader: java.lang.String | string): void
                    /**
                     * <p>
                     * Name of the http header from which the remote ip is extracted.
                     * </p>
                     * <p>
                     * The value of this header can be comma delimited.
                     * </p>
                     * <p>
                     * Default value : <code>X-Forwarded-For</code>
                     * </p>
                     * @param remoteIpHeader The header name
                     */
                    // @ts-ignore
                    public setRemoteIpHeader(remoteIpHeader: java.lang.String | string): void
                    /**
                     * Should this filter set request attributes for IP address, Hostname,
                     * protocol and port used for the request? This are typically used in
                     * conjunction with an {@link AccessLog} which will otherwise log the
                     * original values. Default is <code>true</code>.
                     * The attributes set are:
                     * <ul>
                     * <li>org.apache.catalina.AccessLog.RemoteAddr</li>
                     * <li>org.apache.catalina.AccessLog.RemoteHost</li>
                     * <li>org.apache.catalina.AccessLog.Protocol</li>
                     * <li>org.apache.catalina.AccessLog.ServerPort</li>
                     * <li>org.apache.tomcat.remoteAddr</li>
                     * </ul>
                     * @param requestAttributesEnabled  <code>true</code> causes the attributes
                     *                                   to be set, <code>false</code> disables
                     *                                   the setting of the attributes.
                     */
                    // @ts-ignore
                    public setRequestAttributesEnabled(requestAttributesEnabled: boolean): void
                    /**
                     * <p>
                     * Regular expression defining proxies that are trusted when they appear in
                     * the {@link #remoteIpHeader} header.
                     * </p>
                     * <p>
                     * Default value : empty list, no external proxy is trusted.
                     * </p>
                     * @param trustedProxies The trusted proxies regexp
                     */
                    // @ts-ignore
                    public setTrustedProxies(trustedProxies: java.lang.String | string): void
                }
            }
        }
    }
}
