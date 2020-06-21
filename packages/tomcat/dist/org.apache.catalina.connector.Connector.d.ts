declare namespace org {
    namespace apache {
        namespace catalina {
            namespace connector {
                /**
                 * Implementation of a Coyote connector.
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class Connector extends org.apache.catalina.util.LifecycleMBeanBase {
                    /**
                     * Defaults to using HTTP/1.1 NIO implementation.
                     */
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(protocol: java.lang.String | string)
                    /**
                     * Alternate flag to enable recycling of facades.
                     */
                    // @ts-ignore
                    public static readonly RECYCLE_FACADES: boolean
                    // @ts-ignore
                    public static readonly INTERNAL_EXECUTOR_NAME: java.lang.String | string
                    /**
                     * The <code>Service</code> we are associated with (if any).
                     */
                    // @ts-ignore
                    service: org.apache.catalina.Service
                    /**
                     * Do we allow TRACE ?
                     */
                    // @ts-ignore
                    allowTrace: boolean
                    /**
                     * Default timeout for asynchronous requests (ms).
                     */
                    // @ts-ignore
                    asyncTimeout: number /*long*/
                    /**
                     * The "enable DNS lookups" flag for this Connector.
                     */
                    // @ts-ignore
                    enableLookups: boolean
                    // @ts-ignore
                    xpoweredBy: boolean
                    /**
                     * The server name to which we should pretend requests to this Connector
                     * were directed.  This is useful when operating Tomcat behind a proxy
                     * server, so that redirects get constructed accurately.  If not specified,
                     * the server name included in the <code>Host</code> header is used.
                     */
                    // @ts-ignore
                    proxyName: java.lang.String | string
                    /**
                     * The server port to which we should pretend requests to this Connector
                     * were directed.  This is useful when operating Tomcat behind a proxy
                     * server, so that redirects get constructed accurately.  If not specified,
                     * the port number specified by the <code>port</code> property is used.
                     */
                    // @ts-ignore
                    proxyPort: number /*int*/
                    /**
                     * The redirect port for non-SSL to SSL redirects.
                     */
                    // @ts-ignore
                    redirectPort: number /*int*/
                    /**
                     * The request scheme that will be set on all requests received
                     * through this connector.
                     */
                    // @ts-ignore
                    scheme: java.lang.String | string
                    /**
                     * The secure connection flag that will be set on all requests received
                     * through this connector.
                     */
                    // @ts-ignore
                    secure: boolean
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * The maximum number of parameters (GET plus POST) which will be
                     * automatically parsed by the container. 10000 by default. A value of less
                     * than 0 means no limit.
                     */
                    // @ts-ignore
                    maxParameterCount: number /*int*/
                    /**
                     * Maximum size of a POST which will be automatically parsed by the
                     * container. 2MB by default.
                     */
                    // @ts-ignore
                    maxPostSize: number /*int*/
                    /**
                     * Maximum size of a POST which will be saved by the container
                     * during authentication. 4kB by default
                     */
                    // @ts-ignore
                    maxSavePostSize: number /*int*/
                    /**
                     * Comma-separated list of HTTP methods that will be parsed according
                     * to POST-style rules for application/x-www-form-urlencoded request bodies.
                     */
                    // @ts-ignore
                    parseBodyMethods: java.lang.String | string
                    /**
                     * A Set of methods determined by {@link #parseBodyMethods}.
                     */
                    // @ts-ignore
                    parseBodyMethodsSet: java.util.HashSet<java.lang.String | string>
                    /**
                     * Flag to use IP-based virtual hosting.
                     */
                    // @ts-ignore
                    useIPVHosts: boolean
                    /**
                     * Coyote Protocol handler class name.
                     * See {@link #Connector()} for current default.
                     */
                    // @ts-ignore
                    readonly protocolHandlerClassName: java.lang.String | string
                    /**
                     * Coyote protocol handler.
                     */
                    // @ts-ignore
                    readonly protocolHandler: org.apache.coyote.ProtocolHandler
                    /**
                     * Coyote adapter.
                     */
                    // @ts-ignore
                    adapter: org.apache.coyote.Adapter
                    /**
                     * URI encoding as body.
                     */
                    // @ts-ignore
                    useBodyEncodingForURI: boolean
                    /**
                     * Return a property from the protocol handler.
                     * @param name the property name
                     * @return the property value
                     */
                    // @ts-ignore
                    public getProperty(name: java.lang.String | string): any
                    /**
                     * Set a property on the protocol handler.
                     * @param name the property name
                     * @param value the property value
                     * @return <code>true</code> if the property was successfully set
                     */
                    // @ts-ignore
                    public setProperty(name: java.lang.String | string, value: java.lang.String | string): boolean
                    /**
                     * Return a property from the protocol handler.
                     * @param name the property name
                     * @return the property value
                     */
                    // @ts-ignore
                    public getAttribute(name: java.lang.String | string): any
                    /**
                     * Set a property on the protocol handler.
                     * @param name the property name
                     * @param value the property value
                     */
                    // @ts-ignore
                    public setAttribute(name: java.lang.String | string, value: java.lang.Object | any): void
                    /**
                     * @return the <code>Service</code> with which we are associated (if any).
                     */
                    // @ts-ignore
                    public getService(): org.apache.catalina.Service
                    /**
                     * Set the <code>Service</code> with which we are associated (if any).
                     * @param service The service that owns this Engine
                     */
                    // @ts-ignore
                    public setService(service: org.apache.catalina.Service): void
                    /**
                     * @return <code>true</code> if the TRACE method is allowed. Default value
                     *          is <code>false</code>.
                     */
                    // @ts-ignore
                    public getAllowTrace(): boolean
                    /**
                     * Set the allowTrace flag, to disable or enable the TRACE HTTP method.
                     * @param allowTrace The new allowTrace flag
                     */
                    // @ts-ignore
                    public setAllowTrace(allowTrace: boolean): void
                    /**
                     * @return the default timeout for async requests in ms.
                     */
                    // @ts-ignore
                    public getAsyncTimeout(): number /*long*/
                    /**
                     * Set the default timeout for async requests.
                     * @param asyncTimeout The new timeout in ms.
                     */
                    // @ts-ignore
                    public setAsyncTimeout(asyncTimeout: number /*long*/): void
                    /**
                     * @return the "enable DNS lookups" flag.
                     */
                    // @ts-ignore
                    public getEnableLookups(): boolean
                    /**
                     * Set the "enable DNS lookups" flag.
                     * @param enableLookups The new "enable DNS lookups" flag value
                     */
                    // @ts-ignore
                    public setEnableLookups(enableLookups: boolean): void
                    // @ts-ignore
                    public getMaxCookieCount(): number /*int*/
                    // @ts-ignore
                    public setMaxCookieCount(maxCookieCount: number /*int*/): void
                    /**
                     * @return the maximum number of parameters (GET plus POST) that will be
                     *  automatically parsed by the container. A value of less than 0 means no
                     *  limit.
                     */
                    // @ts-ignore
                    public getMaxParameterCount(): number /*int*/
                    /**
                     * Set the maximum number of parameters (GET plus POST) that will be
                     * automatically parsed by the container. A value of less than 0 means no
                     * limit.
                     * @param maxParameterCount The new setting
                     */
                    // @ts-ignore
                    public setMaxParameterCount(maxParameterCount: number /*int*/): void
                    /**
                     * @return the maximum size of a POST which will be automatically
                     *  parsed by the container.
                     */
                    // @ts-ignore
                    public getMaxPostSize(): number /*int*/
                    /**
                     * Set the maximum size of a POST which will be automatically
                     * parsed by the container.
                     * @param maxPostSize The new maximum size in bytes of a POST which will
                     *  be automatically parsed by the container
                     */
                    // @ts-ignore
                    public setMaxPostSize(maxPostSize: number /*int*/): void
                    /**
                     * @return the maximum size of a POST which will be saved by the container
                     *  during authentication.
                     */
                    // @ts-ignore
                    public getMaxSavePostSize(): number /*int*/
                    /**
                     * Set the maximum size of a POST which will be saved by the container
                     * during authentication.
                     * @param maxSavePostSize The new maximum size in bytes of a POST which will
                     *  be saved by the container during authentication.
                     */
                    // @ts-ignore
                    public setMaxSavePostSize(maxSavePostSize: number /*int*/): void
                    /**
                     * @return the HTTP methods which will support body parameters parsing
                     */
                    // @ts-ignore
                    public getParseBodyMethods(): string
                    /**
                     * Set list of HTTP methods which should allow body parameter
                     * parsing. This defaults to <code>POST</code>.
                     * @param methods Comma separated list of HTTP method names
                     */
                    // @ts-ignore
                    public setParseBodyMethods(methods: java.lang.String | string): void
                    // @ts-ignore
                    isParseBodyMethod(method: java.lang.String | string): boolean
                    /**
                     * @return the port number on which this connector is configured to listen
                     *  for requests. The special value of 0 means select a random free port
                     *  when the socket is bound.
                     */
                    // @ts-ignore
                    public getPort(): number /*int*/
                    /**
                     * Set the port number on which we listen for requests.
                     * @param port The new port number
                     */
                    // @ts-ignore
                    public setPort(port: number /*int*/): void
                    // @ts-ignore
                    public getPortOffset(): number /*int*/
                    // @ts-ignore
                    public setPortOffset(portOffset: number /*int*/): void
                    // @ts-ignore
                    public getPortWithOffset(): number /*int*/
                    /**
                     * @return the port number on which this connector is listening to requests.
                     *  If the special value for {#link #getPort} of zero is used then this method
                     *  will report the actual port bound.
                     */
                    // @ts-ignore
                    public getLocalPort(): number /*int*/
                    /**
                     * @return the Coyote protocol handler in use.
                     */
                    // @ts-ignore
                    public getProtocol(): string
                    /**
                     * @return the class name of the Coyote protocol handler in use.
                     */
                    // @ts-ignore
                    public getProtocolHandlerClassName(): string
                    /**
                     * @return the protocol handler associated with the connector.
                     */
                    // @ts-ignore
                    public getProtocolHandler(): org.apache.coyote.ProtocolHandler
                    /**
                     * @return the proxy server name for this Connector.
                     */
                    // @ts-ignore
                    public getProxyName(): string
                    /**
                     * Set the proxy server name for this Connector.
                     * @param proxyName The new proxy server name
                     */
                    // @ts-ignore
                    public setProxyName(proxyName: java.lang.String | string): void
                    /**
                     * @return the proxy server port for this Connector.
                     */
                    // @ts-ignore
                    public getProxyPort(): number /*int*/
                    /**
                     * Set the proxy server port for this Connector.
                     * @param proxyPort The new proxy server port
                     */
                    // @ts-ignore
                    public setProxyPort(proxyPort: number /*int*/): void
                    /**
                     * @return the port number to which a request should be redirected if
                     *  it comes in on a non-SSL port and is subject to a security constraint
                     *  with a transport guarantee that requires SSL.
                     */
                    // @ts-ignore
                    public getRedirectPort(): number /*int*/
                    /**
                     * Set the redirect port number.
                     * @param redirectPort The redirect port number (non-SSL to SSL)
                     */
                    // @ts-ignore
                    public setRedirectPort(redirectPort: number /*int*/): void
                    // @ts-ignore
                    public getRedirectPortWithOffset(): number /*int*/
                    /**
                     * @return the scheme that will be assigned to requests received
                     *  through this connector.  Default value is "http".
                     */
                    // @ts-ignore
                    public getScheme(): string
                    /**
                     * Set the scheme that will be assigned to requests received through
                     * this connector.
                     * @param scheme The new scheme
                     */
                    // @ts-ignore
                    public setScheme(scheme: java.lang.String | string): void
                    /**
                     * @return the secure connection flag that will be assigned to requests
                     *  received through this connector.  Default value is "false".
                     */
                    // @ts-ignore
                    public getSecure(): boolean
                    /**
                     * Set the secure connection flag that will be assigned to requests
                     * received through this connector.
                     * @param secure The new secure connection flag
                     */
                    // @ts-ignore
                    public setSecure(secure: boolean): void
                    /**
                     * @return the name of character encoding to be used for the URI using the
                     *  original case.
                     */
                    // @ts-ignore
                    public getURIEncoding(): string
                    /**
                     * @return The Charset to use to convert raw URI bytes (after %nn decoding)
                     *          to characters. This will never be null
                     */
                    // @ts-ignore
                    public getURICharset(): java.nio.charset.Charset
                    /**
                     * Set the URI encoding to be used for the URI.
                     * @param URIEncoding The new URI character encoding.
                     */
                    // @ts-ignore
                    public setURIEncoding(URIEncoding: java.lang.String | string): void
                    /**
                     * @return the true if the entity body encoding should be used for the URI.
                     */
                    // @ts-ignore
                    public getUseBodyEncodingForURI(): boolean
                    /**
                     * Set if the entity body encoding should be used for the URI.
                     * @param useBodyEncodingForURI The new value for the flag.
                     */
                    // @ts-ignore
                    public setUseBodyEncodingForURI(useBodyEncodingForURI: boolean): void
                    /**
                     * Indicates whether the generation of an X-Powered-By response header for
                     * Servlet-generated responses is enabled or disabled for this Connector.
                     * @return <code>true</code> if generation of X-Powered-By response header is enabled,
                     *  false otherwise
                     */
                    // @ts-ignore
                    public getXpoweredBy(): boolean
                    /**
                     * Enables or disables the generation of an X-Powered-By header (with value
                     * Servlet/2.5) for all servlet-generated responses returned by this
                     * Connector.
                     * @param xpoweredBy true if generation of X-Powered-By response header is
                     *  to be enabled, false otherwise
                     */
                    // @ts-ignore
                    public setXpoweredBy(xpoweredBy: boolean): void
                    /**
                     * Enable the use of IP-based virtual hosting.
                     * @param useIPVHosts <code>true</code> if Hosts are identified by IP,
                     *                     <code>false</code> if Hosts are identified by name.
                     */
                    // @ts-ignore
                    public setUseIPVHosts(useIPVHosts: boolean): void
                    /**
                     * Test if IP-based virtual hosting is enabled.
                     * @return <code>true</code> if IP vhosts are enabled
                     */
                    // @ts-ignore
                    public getUseIPVHosts(): boolean
                    // @ts-ignore
                    public getExecutorName(): string
                    // @ts-ignore
                    public addSslHostConfig(sslHostConfig: org.apache.tomcat.util.net.SSLHostConfig): void
                    // @ts-ignore
                    public findSslHostConfigs(): org.apache.tomcat.util.net.SSLHostConfig[]
                    // @ts-ignore
                    public addUpgradeProtocol(upgradeProtocol: org.apache.coyote.UpgradeProtocol): void
                    // @ts-ignore
                    public findUpgradeProtocols(): org.apache.coyote.UpgradeProtocol[]
                    /**
                     * Create (or allocate) and return a Request object suitable for
                     * specifying the contents of a Request to the responsible Container.
                     * @return a new Servlet request object
                     */
                    // @ts-ignore
                    public createRequest(): org.apache.catalina.connector.Request
                    /**
                     * Create (or allocate) and return a Response object suitable for
                     * receiving the contents of a Response from the responsible Container.
                     * @return a new Servlet response object
                     */
                    // @ts-ignore
                    public createResponse(): org.apache.catalina.connector.Response
                    // @ts-ignore
                    createObjectNameKeyProperties(type: java.lang.String | string): string
                    /**
                     * Pause the connector.
                     */
                    // @ts-ignore
                    public pause(): void
                    /**
                     * Resume the connector.
                     */
                    // @ts-ignore
                    public resume(): void
                    // @ts-ignore
                    initInternal(): void
                    /**
                     * Begin processing requests via this Connector.
                     * @exception LifecycleException if a fatal startup error occurs
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Terminate processing requests via this Connector.
                     * @exception LifecycleException if a fatal shutdown error occurs
                     */
                    // @ts-ignore
                    stopInternal(): void
                    // @ts-ignore
                    destroyInternal(): void
                    /**
                     * Provide a useful toString() implementation as it may be used when logging
                     * Lifecycle errors to identify the component.
                     */
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    getDomainInternal(): string
                    // @ts-ignore
                    getObjectNameKeyProperties(): string
                }
            }
        }
    }
}
