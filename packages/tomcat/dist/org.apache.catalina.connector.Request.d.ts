declare namespace org {
    namespace apache {
        namespace catalina {
            namespace connector {
                /**
                 * Wrapper object for the Coyote request.
                 * @author Remy Maucherat
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class Request extends java.lang.Object implements javax.servlet.http.HttpServletRequest {
                    /**
                     * Create a new Request object associated with the given Connector.
                     * @param connector The Connector with which this Request object will always
                     *                   be associated. In normal usage this must be non-null. In
                     *                   some test scenarios, it may be possible to use a null
                     *                   Connector without triggering an NPE.
                     */
                    // @ts-ignore
                    constructor(connector: org.apache.catalina.connector.Connector)
                    /**
                     * Coyote request.
                     */
                    // @ts-ignore
                    coyoteRequest: org.apache.coyote.Request
                    /**
                     * @deprecated Unused. This will be removed in Tomcat 10.
                     */
                    // @ts-ignore
                    static readonly GMT_ZONE: java.util.TimeZone
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * The set of cookies associated with this Request.
                     */
                    // @ts-ignore
                    cookies: javax.servlet.http.Cookie[]
                    /**
                     * The set of SimpleDateFormat formats to use in getDateHeader().
                     * Notice that because SimpleDateFormat is not thread-safe, we can't
                     * declare formats[] as a static variable.
                     * @deprecated Unused. This will be removed in Tomcat 10
                     */
                    // @ts-ignore
                    readonly formats: java.text.SimpleDateFormat[]
                    /**
                     * The default Locale if none are specified.
                     */
                    // @ts-ignore
                    static readonly defaultLocale: java.util.Locale
                    /**
                     * Flag that indicates if SSL attributes have been parsed to improve
                     * performance for applications (usually frameworks) that make multiple
                     * calls to {@link Request#getAttributeNames()}.
                     */
                    // @ts-ignore
                    sslAttributesParsed: boolean
                    /**
                     * The preferred Locales associated with this Request.
                     */
                    // @ts-ignore
                    readonly locales: java.util.ArrayList<java.util.Locale>
                    /**
                     * Authentication type.
                     */
                    // @ts-ignore
                    authType: java.lang.String | string
                    /**
                     * The current dispatcher type.
                     */
                    // @ts-ignore
                    internalDispatcherType: javax.servlet.DispatcherType
                    /**
                     * The associated input buffer.
                     */
                    // @ts-ignore
                    readonly inputBuffer: org.apache.catalina.connector.InputBuffer
                    /**
                     * ServletInputStream.
                     */
                    // @ts-ignore
                    inputStream: org.apache.catalina.connector.CoyoteInputStream
                    /**
                     * Reader.
                     */
                    // @ts-ignore
                    reader: org.apache.catalina.connector.CoyoteReader
                    /**
                     * Using stream flag.
                     */
                    // @ts-ignore
                    usingInputStream: boolean
                    /**
                     * Using writer flag.
                     */
                    // @ts-ignore
                    usingReader: boolean
                    /**
                     * User principal.
                     */
                    // @ts-ignore
                    userPrincipal: java.security.Principal
                    /**
                     * Request parameters parsed flag.
                     */
                    // @ts-ignore
                    parametersParsed: boolean
                    /**
                     * Cookie headers parsed flag. Indicates that the cookie headers have been
                     * parsed into ServerCookies.
                     */
                    // @ts-ignore
                    cookiesParsed: boolean
                    /**
                     * Cookie parsed flag. Indicates that the ServerCookies have been converted
                     * into user facing Cookie objects.
                     */
                    // @ts-ignore
                    cookiesConverted: boolean
                    /**
                     * Secure flag.
                     */
                    // @ts-ignore
                    secure: boolean
                    /**
                     * The Subject associated with the current AccessControlContext
                     */
                    // @ts-ignore
                    subject: javax.security.auth.Subject
                    /**
                     * Post data buffer.
                     */
                    // @ts-ignore
                    static readonly CACHED_POST_LEN: number /*int*/
                    // @ts-ignore
                    postData: number /*byte*/[]
                    /**
                     * Hash map used in the getParametersMap method.
                     */
                    // @ts-ignore
                    parameterMap: org.apache.catalina.util.ParameterMap<java.lang.String | string, java.lang.String[] | string[]>
                    /**
                     * The parts, if any, uploaded with this request.
                     */
                    // @ts-ignore
                    parts: java.util.Collection<javax.servlet.http.Part> | Array<javax.servlet.http.Part>
                    /**
                     * The exception thrown, if any when parsing the parts.
                     */
                    // @ts-ignore
                    partsParseException: java.lang.Exception
                    /**
                     * The currently active session for this request.
                     */
                    // @ts-ignore
                    session: org.apache.catalina.Session
                    /**
                     * The current request dispatcher path.
                     */
                    // @ts-ignore
                    requestDispatcherPath: java.lang.Object | any
                    /**
                     * Was the requested session ID received in a cookie?
                     */
                    // @ts-ignore
                    requestedSessionCookie: boolean
                    /**
                     * The requested session ID (if any) for this request.
                     */
                    // @ts-ignore
                    requestedSessionId: java.lang.String | string
                    /**
                     * Was the requested session ID received in a URL?
                     */
                    // @ts-ignore
                    requestedSessionURL: boolean
                    /**
                     * Was the requested session ID obtained from the SSL session?
                     */
                    // @ts-ignore
                    requestedSessionSSL: boolean
                    /**
                     * Parse locales.
                     */
                    // @ts-ignore
                    localesParsed: boolean
                    /**
                     * Local port
                     */
                    // @ts-ignore
                    localPort: number /*int*/
                    /**
                     * Remote address.
                     */
                    // @ts-ignore
                    remoteAddr: java.lang.String | string
                    /**
                     * Remote host.
                     */
                    // @ts-ignore
                    remoteHost: java.lang.String | string
                    /**
                     * Remote port
                     */
                    // @ts-ignore
                    remotePort: number /*int*/
                    /**
                     * Local address
                     */
                    // @ts-ignore
                    localAddr: java.lang.String | string
                    /**
                     * Local address
                     */
                    // @ts-ignore
                    localName: java.lang.String | string
                    // @ts-ignore
                    asyncSupported: java.lang.Boolean
                    /**
                     * Associated Catalina connector.
                     */
                    // @ts-ignore
                    readonly connector: org.apache.catalina.connector.Connector
                    /**
                     * Filter chain associated with the request.
                     */
                    // @ts-ignore
                    filterChain: javax.servlet.FilterChain
                    /**
                     * Mapping data.
                     */
                    // @ts-ignore
                    readonly mappingData: org.apache.catalina.mapper.MappingData
                    /**
                     * The facade associated with this request.
                     */
                    // @ts-ignore
                    facade: org.apache.catalina.connector.RequestFacade
                    /**
                     * The response with which this request is associated.
                     */
                    // @ts-ignore
                    response: org.apache.catalina.connector.Response
                    /**
                     * URI byte to char converter.
                     */
                    // @ts-ignore
                    URIConverter: org.apache.tomcat.util.buf.B2CConverter
                    /**
                     * Set the Coyote request.
                     * @param coyoteRequest The Coyote request
                     */
                    // @ts-ignore
                    public setCoyoteRequest(coyoteRequest: org.apache.coyote.Request): void
                    /**
                     * Get the Coyote request.
                     * @return the Coyote request object
                     */
                    // @ts-ignore
                    public getCoyoteRequest(): org.apache.coyote.Request
                    // @ts-ignore
                    addPathParameter(name: java.lang.String | string, value: java.lang.String | string): void
                    // @ts-ignore
                    getPathParameter(name: java.lang.String | string): string
                    // @ts-ignore
                    public setAsyncSupported(asyncSupported: boolean): void
                    /**
                     * Release all object references, and initialize instance variables, in
                     * preparation for reuse of this object.
                     */
                    // @ts-ignore
                    public recycle(): void
                    // @ts-ignore
                    recycleSessionInfo(): void
                    // @ts-ignore
                    recycleCookieInfo(recycleCoyote: boolean): void
                    /**
                     * @return the Connector through which this Request was received.
                     */
                    // @ts-ignore
                    public getConnector(): org.apache.catalina.connector.Connector
                    /**
                     * Return the Context within which this Request is being processed.
                     * <p>
                     * This is available as soon as the appropriate Context is identified.
                     * Note that availability of a Context allows <code>getContextPath()</code>
                     * to return a value, and thus enables parsing of the request URI.
                     * @return the Context mapped with the request
                     */
                    // @ts-ignore
                    public getContext(): org.apache.catalina.Context
                    /**
                     * Get filter chain associated with the request.
                     * @return the associated filter chain
                     */
                    // @ts-ignore
                    public getFilterChain(): javax.servlet.FilterChain
                    /**
                     * Set filter chain associated with the request.
                     * @param filterChain new filter chain
                     */
                    // @ts-ignore
                    public setFilterChain(filterChain: javax.servlet.FilterChain): void
                    /**
                     * @return the Host within which this Request is being processed.
                     */
                    // @ts-ignore
                    public getHost(): org.apache.catalina.Host
                    /**
                     * @return mapping data.
                     */
                    // @ts-ignore
                    public getMappingData(): org.apache.catalina.mapper.MappingData
                    /**
                     * @return the <code>ServletRequest</code> for which this object
                     *  is the facade.  This method must be implemented by a subclass.
                     */
                    // @ts-ignore
                    public getRequest(): javax.servlet.http.HttpServletRequest
                    /**
                     * Set a wrapped HttpServletRequest to pass to the application. Components
                     * wishing to wrap the request should obtain the request via
                     * {@link #getRequest()}, wrap it and then call this method with the
                     * wrapped request.
                     * @param applicationRequest The wrapped request to pass to the application
                     */
                    // @ts-ignore
                    public setRequest(applicationRequest: javax.servlet.http.HttpServletRequest): void
                    /**
                     * @return the Response with which this Request is associated.
                     */
                    // @ts-ignore
                    public getResponse(): org.apache.catalina.connector.Response
                    /**
                     * Set the Response with which this Request is associated.
                     * @param response The new associated response
                     */
                    // @ts-ignore
                    public setResponse(response: org.apache.catalina.connector.Response): void
                    /**
                     * @return the input stream associated with this Request.
                     */
                    // @ts-ignore
                    public getStream(): java.io.InputStream
                    /**
                     * @return the URI converter.
                     */
                    // @ts-ignore
                    getURIConverter(): org.apache.tomcat.util.buf.B2CConverter
                    /**
                     * Set the URI converter.
                     * @param URIConverter the new URI converter
                     */
                    // @ts-ignore
                    setURIConverter(URIConverter: org.apache.tomcat.util.buf.B2CConverter): void
                    /**
                     * @return the Wrapper within which this Request is being processed.
                     */
                    // @ts-ignore
                    public getWrapper(): org.apache.catalina.Wrapper
                    /**
                     * Create and return a ServletInputStream to read the content
                     * associated with this Request.
                     * @return the created input stream
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public createInputStream(): javax.servlet.ServletInputStream
                    /**
                     * Perform whatever actions are required to flush and close the input
                     * stream or reader, in a single operation.
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public finishRequest(): void
                    /**
                     * @return the object bound with the specified name to the internal notes
                     *  for this request, or <code>null</code> if no such binding exists.
                     * @param name Name of the note to be returned
                     */
                    // @ts-ignore
                    public getNote(name: java.lang.String | string): any
                    /**
                     * Remove any object bound to the specified name in the internal notes
                     * for this request.
                     * @param name Name of the note to be removed
                     */
                    // @ts-ignore
                    public removeNote(name: java.lang.String | string): void
                    /**
                     * Set the port number of the server to process this request.
                     * @param port The server port
                     */
                    // @ts-ignore
                    public setLocalPort(port: number /*int*/): void
                    /**
                     * Bind an object to a specified name in the internal notes associated
                     * with this request, replacing any existing binding for this name.
                     * @param name Name to which the object should be bound
                     * @param value Object to be bound to the specified name
                     */
                    // @ts-ignore
                    public setNote(name: java.lang.String | string, value: java.lang.Object | any): void
                    /**
                     * Set the IP address of the remote client associated with this Request.
                     * @param remoteAddr The remote IP address
                     */
                    // @ts-ignore
                    public setRemoteAddr(remoteAddr: java.lang.String | string): void
                    /**
                     * Set the fully qualified name of the remote client associated with this
                     * Request.
                     * @param remoteHost The remote host name
                     */
                    // @ts-ignore
                    public setRemoteHost(remoteHost: java.lang.String | string): void
                    /**
                     * Set the value to be returned by <code>isSecure()</code>
                     * for this Request.
                     * @param secure The new isSecure value
                     */
                    // @ts-ignore
                    public setSecure(secure: boolean): void
                    /**
                     * Set the port number of the server to process this request.
                     * @param port The server port
                     */
                    // @ts-ignore
                    public setServerPort(port: number /*int*/): void
                    /**
                     * @return the specified request attribute if it exists; otherwise, return
                     *  <code>null</code>.
                     * @param name Name of the request attribute to return
                     */
                    // @ts-ignore
                    public getAttribute(name: java.lang.String | string): any
                    // @ts-ignore
                    public getContentLengthLong(): number /*long*/
                    /**
                     * Return the names of all request attributes for this Request, or an
                     * empty <code>Enumeration</code> if there are none. Note that the attribute
                     * names returned will only be those for the attributes set via
                     * {@link #setAttribute(String, Object)}. Tomcat internal attributes will
                     * not be included although they are accessible via
                     * {@link #getAttribute(String)}. The Tomcat internal attributes include:
                     * <ul>
                     * <li>{@link Globals#DISPATCHER_TYPE_ATTR}</li>
                     * <li>{@link Globals#DISPATCHER_REQUEST_PATH_ATTR}</li>
                     * <li>{@link Globals#ASYNC_SUPPORTED_ATTR}</li>
                     * <li>{@link Globals#CERTIFICATES_ATTR} (SSL connections only)</li>
                     * <li>{@link Globals#CIPHER_SUITE_ATTR} (SSL connections only)</li>
                     * <li>{@link Globals#KEY_SIZE_ATTR} (SSL connections only)</li>
                     * <li>{@link Globals#SSL_SESSION_ID_ATTR} (SSL connections only)</li>
                     * <li>{@link Globals#SSL_SESSION_MGR_ATTR} (SSL connections only)</li>
                     * <li>{@link Globals#PARAMETER_PARSE_FAILED_ATTR}</li>
                     * </ul>
                     * The underlying connector may also expose request attributes. These all
                     * have names starting with "org.apache.tomcat" and include:
                     * <ul>
                     * <li>{@link Globals#SENDFILE_SUPPORTED_ATTR}</li>
                     * </ul>
                     * Connector implementations may return some, all or none of these
                     * attributes and may also support additional attributes.
                     * @return the attribute names enumeration
                     */
                    // @ts-ignore
                    public getAttributeNames(): java.util.Enumeration<java.lang.String | string>
                    /**
                     * @return the character encoding for this Request.
                     */
                    // @ts-ignore
                    public getCharacterEncoding(): string
                    /**
                     * @return the content length for this Request.
                     */
                    // @ts-ignore
                    public getContentLength(): number /*int*/
                    /**
                     * @return the content type for this Request.
                     */
                    // @ts-ignore
                    public getContentType(): string
                    /**
                     * Set the content type for this Request.
                     * @param contentType The content type
                     */
                    // @ts-ignore
                    public setContentType(contentType: java.lang.String | string): void
                    /**
                     * @return the servlet input stream for this Request.  The default
                     *  implementation returns a servlet input stream created by
                     *  <code>createInputStream()</code>.
                     * @exception IllegalStateException if <code>getReader()</code> has
                     *   already been called for this request
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public getInputStream(): javax.servlet.ServletInputStream
                    /**
                     * @return the preferred Locale that the client will accept content in,
                     *  based on the value for the first <code>Accept-Language</code> header
                     *  that was encountered.  If the request did not specify a preferred
                     *  language, the server's default Locale is returned.
                     */
                    // @ts-ignore
                    public getLocale(): java.util.Locale
                    /**
                     * @return the set of preferred Locales that the client will accept
                     *  content in, based on the values for any <code>Accept-Language</code>
                     *  headers that were encountered.  If the request did not specify a
                     *  preferred language, the server's default Locale is returned.
                     */
                    // @ts-ignore
                    public getLocales(): java.util.Enumeration<java.util.Locale>
                    /**
                     * @return the value of the specified request parameter, if any; otherwise,
                     *  return <code>null</code>.  If there is more than one value defined,
                     *  return only the first one.
                     * @param name Name of the desired request parameter
                     */
                    // @ts-ignore
                    public getParameter(name: java.lang.String | string): string
                    /**
                     * Returns a <code>Map</code> of the parameters of this request.
                     * Request parameters are extra information sent with the request.
                     * For HTTP servlets, parameters are contained in the query string
                     * or posted form data.
                     * @return A <code>Map</code> containing parameter names as keys
                     *   and parameter values as map values.
                     */
                    // @ts-ignore
                    public getParameterMap(): java.util.Map<java.lang.String | string, java.lang.String[] | string[]>
                    /**
                     * @return the names of all defined request parameters for this request.
                     */
                    // @ts-ignore
                    public getParameterNames(): java.util.Enumeration<java.lang.String | string>
                    /**
                     * @return the defined values for the specified request parameter, if any;
                     *  otherwise, return <code>null</code>.
                     * @param name Name of the desired request parameter
                     */
                    // @ts-ignore
                    public getParameterValues(name: java.lang.String | string): string[]
                    /**
                     * @return the protocol and version used to make this Request.
                     */
                    // @ts-ignore
                    public getProtocol(): string
                    /**
                     * Read the Reader wrapping the input stream for this Request.  The
                     * default implementation wraps a <code>BufferedReader</code> around the
                     * servlet input stream returned by <code>createInputStream()</code>.
                     * @return a buffered reader for the request
                     * @exception IllegalStateException if <code>getInputStream()</code>
                     *   has already been called for this request
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public getReader(): java.io.BufferedReader
                    /**
                     * @return the real path of the specified virtual path.
                     * @param path Path to be translated
                     * @deprecated As of version 2.1 of the Java Servlet API, use
                     *   <code>ServletContext.getRealPath()</code>.
                     */
                    // @ts-ignore
                    public getRealPath(path: java.lang.String | string): string
                    /**
                     * @return the remote IP address making this Request.
                     */
                    // @ts-ignore
                    public getRemoteAddr(): string
                    /**
                     * @return the remote host name making this Request.
                     */
                    // @ts-ignore
                    public getRemoteHost(): string
                    /**
                     * @return the Internet Protocol (IP) source port of the client
                     *  or last proxy that sent the request.
                     */
                    // @ts-ignore
                    public getRemotePort(): number /*int*/
                    /**
                     * @return the host name of the Internet Protocol (IP) interface on
                     *  which the request was received.
                     */
                    // @ts-ignore
                    public getLocalName(): string
                    /**
                     * @return the Internet Protocol (IP) address of the interface on
                     *  which the request  was received.
                     */
                    // @ts-ignore
                    public getLocalAddr(): string
                    /**
                     * @return the Internet Protocol (IP) port number of the interface
                     *  on which the request was received.
                     */
                    // @ts-ignore
                    public getLocalPort(): number /*int*/
                    /**
                     * @return a RequestDispatcher that wraps the resource at the specified
                     *  path, which may be interpreted as relative to the current request path.
                     * @param path Path of the resource to be wrapped
                     */
                    // @ts-ignore
                    public getRequestDispatcher(path: java.lang.String | string): javax.servlet.RequestDispatcher
                    /**
                     * @return the scheme used to make this Request.
                     */
                    // @ts-ignore
                    public getScheme(): string
                    /**
                     * @return the server name responding to this Request.
                     */
                    // @ts-ignore
                    public getServerName(): string
                    /**
                     * @return the server port responding to this Request.
                     */
                    // @ts-ignore
                    public getServerPort(): number /*int*/
                    /**
                     * @return <code>true</code> if this request was received on a secure connection.
                     */
                    // @ts-ignore
                    public isSecure(): boolean
                    /**
                     * Remove the specified request attribute if it exists.
                     * @param name Name of the request attribute to remove
                     */
                    // @ts-ignore
                    public removeAttribute(name: java.lang.String | string): void
                    /**
                     * Set the specified request attribute to the specified value.
                     * @param name Name of the request attribute to set
                     * @param value The associated value
                     */
                    // @ts-ignore
                    public setAttribute(name: java.lang.String | string, value: java.lang.Object | any): void
                    /**
                     * Overrides the name of the character encoding used in the body of
                     * this request.  This method must be called prior to reading request
                     * parameters or reading input using <code>getReader()</code>.
                     * @param enc The character encoding to be used
                     * @exception UnsupportedEncodingException if the specified encoding
                     *   is not supported
                     * @since Servlet 2.3
                     */
                    // @ts-ignore
                    public setCharacterEncoding(enc: java.lang.String | string): void
                    // @ts-ignore
                    public getServletContext(): javax.servlet.ServletContext
                    // @ts-ignore
                    public startAsync(): javax.servlet.AsyncContext
                    // @ts-ignore
                    public startAsync(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse): javax.servlet.AsyncContext
                    // @ts-ignore
                    public isAsyncStarted(): boolean
                    // @ts-ignore
                    public isAsyncDispatching(): boolean
                    // @ts-ignore
                    public isAsyncCompleting(): boolean
                    // @ts-ignore
                    public isAsync(): boolean
                    // @ts-ignore
                    public isAsyncSupported(): boolean
                    // @ts-ignore
                    public getAsyncContext(): javax.servlet.AsyncContext
                    // @ts-ignore
                    public getAsyncContextInternal(): org.apache.catalina.core.AsyncContextImpl
                    // @ts-ignore
                    public getDispatcherType(): javax.servlet.DispatcherType
                    /**
                     * Add a Cookie to the set of Cookies associated with this Request.
                     * @param cookie The new cookie
                     */
                    // @ts-ignore
                    public addCookie(cookie: javax.servlet.http.Cookie): void
                    /**
                     * Add a Locale to the set of preferred Locales for this Request.  The
                     * first added Locale will be the first one returned by getLocales().
                     * @param locale The new preferred Locale
                     */
                    // @ts-ignore
                    public addLocale(locale: java.util.Locale): void
                    /**
                     * Clear the collection of Cookies associated with this Request.
                     */
                    // @ts-ignore
                    public clearCookies(): void
                    /**
                     * Clear the collection of Locales associated with this Request.
                     */
                    // @ts-ignore
                    public clearLocales(): void
                    /**
                     * Set the authentication type used for this request, if any; otherwise
                     * set the type to <code>null</code>.  Typical values are "BASIC",
                     * "DIGEST", or "SSL".
                     * @param type The authentication type used
                     */
                    // @ts-ignore
                    public setAuthType(type: java.lang.String | string): void
                    /**
                     * Set the path information for this Request.  This will normally be called
                     * when the associated Context is mapping the Request to a particular
                     * Wrapper.
                     * @param path The path information
                     */
                    // @ts-ignore
                    public setPathInfo(path: java.lang.String | string): void
                    /**
                     * Set a flag indicating whether or not the requested session ID for this
                     * request came in through a cookie.  This is normally called by the
                     * HTTP Connector, when it parses the request headers.
                     * @param flag The new flag
                     */
                    // @ts-ignore
                    public setRequestedSessionCookie(flag: boolean): void
                    /**
                     * Set the requested session ID for this request.  This is normally called
                     * by the HTTP Connector, when it parses the request headers.
                     * @param id The new session id
                     */
                    // @ts-ignore
                    public setRequestedSessionId(id: java.lang.String | string): void
                    /**
                     * Set a flag indicating whether or not the requested session ID for this
                     * request came in through a URL.  This is normally called by the
                     * HTTP Connector, when it parses the request headers.
                     * @param flag The new flag
                     */
                    // @ts-ignore
                    public setRequestedSessionURL(flag: boolean): void
                    /**
                     * Set a flag indicating whether or not the requested session ID for this
                     * request came in through SSL.  This is normally called by the
                     * HTTP Connector, when it parses the request headers.
                     * @param flag The new flag
                     */
                    // @ts-ignore
                    public setRequestedSessionSSL(flag: boolean): void
                    /**
                     * Get the decoded request URI.
                     * @return the URL decoded request URI
                     */
                    // @ts-ignore
                    public getDecodedRequestURI(): string
                    /**
                     * Get the decoded request URI.
                     * @return the URL decoded request URI
                     */
                    // @ts-ignore
                    public getDecodedRequestURIMB(): org.apache.tomcat.util.buf.MessageBytes
                    /**
                     * Set the Principal who has been authenticated for this Request.  This
                     * value is also used to calculate the value to be returned by the
                     * <code>getRemoteUser()</code> method.
                     * @param principal The user Principal
                     */
                    // @ts-ignore
                    public setUserPrincipal(principal: java.security.Principal): void
                    // @ts-ignore
                    public isTrailerFieldsReady(): boolean
                    // @ts-ignore
                    public getTrailerFields(): java.util.Map<java.lang.String | string, java.lang.String | string>
                    // @ts-ignore
                    public newPushBuilder(): javax.servlet.http.PushBuilder
                    // @ts-ignore
                    public newPushBuilder(request: javax.servlet.http.HttpServletRequest): javax.servlet.http.PushBuilder
                    // @ts-ignore
                    public upgrade<T extends javax.servlet.http.HttpUpgradeHandler>(httpUpgradeHandlerClass: java.lang.Class<T>): T
                    /**
                     * Return the authentication type used for this Request.
                     */
                    // @ts-ignore
                    public getAuthType(): string
                    /**
                     * Return the portion of the request URI used to select the Context
                     * of the Request. The value returned is not decoded which also implies it
                     * is not normalised.
                     */
                    // @ts-ignore
                    public getContextPath(): string
                    /**
                     * Return the set of Cookies received with this Request. Triggers parsing of
                     * the Cookie HTTP headers followed by conversion to Cookie objects if this
                     * has not already been performed.
                     * @return the array of cookies
                     */
                    // @ts-ignore
                    public getCookies(): javax.servlet.http.Cookie[]
                    /**
                     * Return the server representation of the cookies associated with this
                     * request. Triggers parsing of the Cookie HTTP headers (but not conversion
                     * to Cookie objects) if the headers have not yet been parsed.
                     * @return the server cookies
                     */
                    // @ts-ignore
                    public getServerCookies(): org.apache.tomcat.util.http.ServerCookies
                    /**
                     * Return the value of the specified date header, if any; otherwise
                     * return -1.
                     * @param name Name of the requested date header
                     * @return the date as a long
                     * @exception IllegalArgumentException if the specified header value
                     *   cannot be converted to a date
                     */
                    // @ts-ignore
                    public getDateHeader(name: java.lang.String | string): number /*long*/
                    /**
                     * Return the first value of the specified header, if any; otherwise,
                     * return <code>null</code>
                     * @param name Name of the requested header
                     * @return the header value
                     */
                    // @ts-ignore
                    public getHeader(name: java.lang.String | string): string
                    /**
                     * Return all of the values of the specified header, if any; otherwise,
                     * return an empty enumeration.
                     * @param name Name of the requested header
                     * @return the enumeration with the header values
                     */
                    // @ts-ignore
                    public getHeaders(name: java.lang.String | string): java.util.Enumeration<java.lang.String | string>
                    /**
                     * @return the names of all headers received with this request.
                     */
                    // @ts-ignore
                    public getHeaderNames(): java.util.Enumeration<java.lang.String | string>
                    /**
                     * Return the value of the specified header as an integer, or -1 if there
                     * is no such header for this request.
                     * @param name Name of the requested header
                     * @return the header value as an int
                     * @exception IllegalArgumentException if the specified header value
                     *   cannot be converted to an integer
                     */
                    // @ts-ignore
                    public getIntHeader(name: java.lang.String | string): number /*int*/
                    // @ts-ignore
                    public getHttpServletMapping(): javax.servlet.http.HttpServletMapping
                    /**
                     * @return the HTTP request method used in this Request.
                     */
                    // @ts-ignore
                    public getMethod(): string
                    /**
                     * @return the path information associated with this Request.
                     */
                    // @ts-ignore
                    public getPathInfo(): string
                    /**
                     * @return the extra path information for this request, translated
                     *  to a real path.
                     */
                    // @ts-ignore
                    public getPathTranslated(): string
                    /**
                     * @return the query string associated with this request.
                     */
                    // @ts-ignore
                    public getQueryString(): string
                    /**
                     * @return the name of the remote user that has been authenticated
                     *  for this Request.
                     */
                    // @ts-ignore
                    public getRemoteUser(): string
                    /**
                     * Get the request path.
                     * @return the request path
                     */
                    // @ts-ignore
                    public getRequestPathMB(): org.apache.tomcat.util.buf.MessageBytes
                    /**
                     * @return the session identifier included in this request, if any.
                     */
                    // @ts-ignore
                    public getRequestedSessionId(): string
                    /**
                     * @return the request URI for this request.
                     */
                    // @ts-ignore
                    public getRequestURI(): string
                    // @ts-ignore
                    public getRequestURL(): java.lang.StringBuffer
                    /**
                     * @return the portion of the request URI used to select the servlet
                     *  that will process this request.
                     */
                    // @ts-ignore
                    public getServletPath(): string
                    /**
                     * @return the session associated with this Request, creating one
                     *  if necessary.
                     */
                    // @ts-ignore
                    public getSession(): javax.servlet.http.HttpSession
                    /**
                     * @return the session associated with this Request, creating one
                     *  if necessary and requested.
                     * @param create Create a new session if one does not exist
                     */
                    // @ts-ignore
                    public getSession(create: boolean): javax.servlet.http.HttpSession
                    /**
                     * @return <code>true</code> if the session identifier included in this
                     *  request came from a cookie.
                     */
                    // @ts-ignore
                    public isRequestedSessionIdFromCookie(): boolean
                    /**
                     * @return <code>true</code> if the session identifier included in this
                     *  request came from the request URI.
                     */
                    // @ts-ignore
                    public isRequestedSessionIdFromURL(): boolean
                    /**
                     * @return <code>true</code> if the session identifier included in this
                     *  request came from the request URI.
                     * @deprecated As of Version 2.1 of the Java Servlet API, use
                     *   <code>isRequestedSessionIdFromURL()</code> instead.
                     */
                    // @ts-ignore
                    public isRequestedSessionIdFromUrl(): boolean
                    /**
                     * @return <code>true</code> if the session identifier included in this
                     *  request identifies a valid session.
                     */
                    // @ts-ignore
                    public isRequestedSessionIdValid(): boolean
                    /**
                     * @return <code>true</code> if the authenticated user principal
                     *  possesses the specified role name.
                     * @param role Role name to be validated
                     */
                    // @ts-ignore
                    public isUserInRole(role: java.lang.String | string): boolean
                    /**
                     * @return the principal that has been authenticated for this Request.
                     */
                    // @ts-ignore
                    public getPrincipal(): java.security.Principal
                    /**
                     * @return the principal that has been authenticated for this Request.
                     */
                    // @ts-ignore
                    public getUserPrincipal(): java.security.Principal
                    /**
                     * @return the session associated with this Request, creating one
                     *  if necessary.
                     */
                    // @ts-ignore
                    public getSessionInternal(): org.apache.catalina.Session
                    /**
                     * Change the ID of the session that this request is associated with. There
                     * are several things that may trigger an ID change. These include moving
                     * between nodes in a cluster and session fixation prevention during the
                     * authentication process.
                     * @param newSessionId   The session to change the session ID for
                     */
                    // @ts-ignore
                    public changeSessionId(newSessionId: java.lang.String | string): void
                    /**
                     * Changes the session ID of the session associated with this request.
                     * @return the old session ID before it was changed
                     * @see javax.servlet.http.HttpSessionIdListener
                     * @since Servlet 3.1
                     */
                    // @ts-ignore
                    public changeSessionId(): string
                    /**
                     * @return the session associated with this Request, creating one
                     *  if necessary and requested.
                     * @param create Create a new session if one does not exist
                     */
                    // @ts-ignore
                    public getSessionInternal(create: boolean): org.apache.catalina.Session
                    /**
                     * @return <code>true</code> if we have parsed parameters
                     */
                    // @ts-ignore
                    public isParametersParsed(): boolean
                    /**
                     * @return <code>true</code> if an attempt has been made to read the request
                     *          body and all of the request body has been read.
                     */
                    // @ts-ignore
                    public isFinished(): boolean
                    /**
                     * Check the configuration for aborted uploads and if configured to do so,
                     * disable the swallowing of any remaining input and close the connection
                     * once the response has been written.
                     */
                    // @ts-ignore
                    checkSwallowInput(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public authenticate(response: javax.servlet.http.HttpServletResponse): boolean
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public login(username: java.lang.String | string, password: java.lang.String | string): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public logout(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getParts(): Array<javax.servlet.http.Part>
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getPart(name: java.lang.String | string): javax.servlet.http.Part
                    // @ts-ignore
                    doGetSession(create: boolean): org.apache.catalina.Session
                    // @ts-ignore
                    unescape(s: java.lang.String | string): string
                    /**
                     * Parse cookies. This only parses the cookies into the memory efficient
                     * ServerCookies structure. It does not populate the Cookie objects.
                     */
                    // @ts-ignore
                    parseCookies(): void
                    /**
                     * Converts the parsed cookies (parsing the Cookie headers first if they
                     * have not been parsed) into Cookie objects.
                     */
                    // @ts-ignore
                    convertCookies(): void
                    /**
                     * Parse request parameters.
                     */
                    // @ts-ignore
                    parseParameters(): void
                    /**
                     * Read post body in an array.
                     * @param body The bytes array in which the body will be read
                     * @param len The body length
                     * @return the bytes count that has been read
                     * @throws IOException if an IO exception occurred
                     */
                    // @ts-ignore
                    readPostBody(body: number /*byte*/[], len: number /*int*/): number /*int*/
                    /**
                     * Read chunked post body.
                     * @return the post body as a bytes array
                     * @throws IOException if an IO exception occurred
                     */
                    // @ts-ignore
                    readChunkedPostBody(): number /*byte*/[]
                    /**
                     * Parse request locales.
                     */
                    // @ts-ignore
                    parseLocales(): void
                    /**
                     * Parse accept-language header value.
                     * @param value the header value
                     * @param locales the map that will hold the result
                     */
                    // @ts-ignore
                    parseLocalesHeader(value: java.lang.String | string, locales: java.util.TreeMap<java.lang.Double | number, java.util.ArrayList<java.util.Locale>>): void
                }
            }
        }
    }
}
