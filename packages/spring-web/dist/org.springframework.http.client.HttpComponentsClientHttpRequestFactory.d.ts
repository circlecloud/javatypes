declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * {@link org.springframework.http.client.ClientHttpRequestFactory} implementation that
                 * uses <a href="https://hc.apache.org/httpcomponents-client-ga/">Apache HttpComponents
                 * HttpClient</a> to create requests.
                 * <p>Allows to use a pre-configured {@link HttpClient} instance -
                 * potentially with authentication, HTTP connection pooling, etc.
                 * <p><b>NOTE:</b> Requires Apache HttpComponents 4.3 or higher, as of Spring 4.0.
                 * @author Oleg Kalnichevski
                 * @author Arjen Poutsma
                 * @author Stephane Nicoll
                 * @author Juergen Hoeller
                 * @since 3.1
                 */
                // @ts-ignore
                class HttpComponentsClientHttpRequestFactory extends java.lang.Object implements org.springframework.http.client.ClientHttpRequestFactory {
                    /**
                     * Create a new instance of the {@code HttpComponentsClientHttpRequestFactory}
                     * with a default {@link HttpClient} based on system properties.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new instance of the {@code HttpComponentsClientHttpRequestFactory}
                     * with the given {@link HttpClient} instance.
                     * @param httpClient the HttpClient instance to use for this request factory
                     */
                    // @ts-ignore
                    constructor(httpClient: HttpClient)
                    /**
                     * Set the {@code HttpClient} used for
                     * {@linkplain #createRequest(URI, HttpMethod) synchronous execution}.
                     */
                    // @ts-ignore
                    public setHttpClient(httpClient: HttpClient): void
                    /**
                     * Return the {@code HttpClient} used for
                     * {@linkplain #createRequest(URI, HttpMethod) synchronous execution}.
                     */
                    // @ts-ignore
                    public getHttpClient(): HttpClient
                    /**
                     * Set the connection timeout for the underlying {@link RequestConfig}.
                     * A timeout value of 0 specifies an infinite timeout.
                     * <p>Additional properties can be configured by specifying a
                     * {@link RequestConfig} instance on a custom {@link HttpClient}.
                     * <p>This options does not affect connection timeouts for SSL
                     * handshakes or CONNECT requests; for that, it is required to
                     * use the {@link org.apache.http.config.SocketConfig} on the
                     * {@link HttpClient} itself.
                     * @param timeout the timeout value in milliseconds
                     * @see RequestConfig#getConnectTimeout()
                     * @see org.apache.http.config.SocketConfig#getSoTimeout
                     */
                    // @ts-ignore
                    public setConnectTimeout(timeout: number /*int*/): void
                    /**
                     * Set the timeout in milliseconds used when requesting a connection
                     * from the connection manager using the underlying {@link RequestConfig}.
                     * A timeout value of 0 specifies an infinite timeout.
                     * <p>Additional properties can be configured by specifying a
                     * {@link RequestConfig} instance on a custom {@link HttpClient}.
                     * @param connectionRequestTimeout the timeout value to request a connection in milliseconds
                     * @see RequestConfig#getConnectionRequestTimeout()
                     */
                    // @ts-ignore
                    public setConnectionRequestTimeout(connectionRequestTimeout: number /*int*/): void
                    /**
                     * Set the socket read timeout for the underlying {@link RequestConfig}.
                     * A timeout value of 0 specifies an infinite timeout.
                     * <p>Additional properties can be configured by specifying a
                     * {@link RequestConfig} instance on a custom {@link HttpClient}.
                     * @param timeout the timeout value in milliseconds
                     * @see RequestConfig#getSocketTimeout()
                     */
                    // @ts-ignore
                    public setReadTimeout(timeout: number /*int*/): void
                    /**
                     * Indicates whether this request factory should buffer the request body internally.
                     * <p>Default is {@code true}. When sending large amounts of data via POST or PUT, it is
                     * recommended to change this property to {@code false}, so as not to run out of memory.
                     * @since 4.0
                     */
                    // @ts-ignore
                    public setBufferRequestBody(bufferRequestBody: boolean): void
                    // @ts-ignore
                    public createRequest(uri: java.net.URI, httpMethod: org.springframework.http.HttpMethod): org.springframework.http.client.ClientHttpRequest
                    /**
                     * Create a default {@link RequestConfig} to use with the given client.
                     * Can return {@code null} to indicate that no custom request config should
                     * be set and the defaults of the {@link HttpClient} should be used.
                     * <p>The default implementation tries to merge the defaults of the client
                     * with the local customizations of this factory instance, if any.
                     * @param client the {#link HttpClient} (or {@code HttpAsyncClient}) to check
                     * @return the actual RequestConfig to use (may be {#code null})
                     * @since 4.2
                     * @see #mergeRequestConfig(RequestConfig)
                     */
                    // @ts-ignore
                    createRequestConfig(client: java.lang.Object | any): RequestConfig
                    /**
                     * Merge the given {@link HttpClient}-level {@link RequestConfig} with
                     * the factory-level {@link RequestConfig}, if necessary.
                     * @param clientConfig the config held by the current
                     * @return the merged request config
                     * @since 4.2
                     */
                    // @ts-ignore
                    mergeRequestConfig(clientConfig: RequestConfig): RequestConfig
                    /**
                     * Create a Commons HttpMethodBase object for the given HTTP method and URI specification.
                     * @param httpMethod the HTTP method
                     * @param uri the URI
                     * @return the Commons HttpMethodBase object
                     */
                    // @ts-ignore
                    createHttpUriRequest(httpMethod: org.springframework.http.HttpMethod, uri: java.net.URI): HttpUriRequest
                    /**
                     * Template method that allows for manipulating the {@link HttpUriRequest} before it is
                     * returned as part of a {@link HttpComponentsClientHttpRequest}.
                     * <p>The default implementation is empty.
                     * @param request the request to process
                     */
                    // @ts-ignore
                    postProcessHttpRequest(request: HttpUriRequest): void
                    /**
                     * Template methods that creates a {@link HttpContext} for the given HTTP method and URI.
                     * <p>The default implementation returns {@code null}.
                     * @param httpMethod the HTTP method
                     * @param uri the URI
                     * @return the http context
                     */
                    // @ts-ignore
                    createHttpContext(httpMethod: org.springframework.http.HttpMethod, uri: java.net.URI): HttpContext
                    /**
                     * Shutdown hook that closes the underlying
                     * {@link org.apache.http.conn.HttpClientConnectionManager ClientConnectionManager}'s
                     * connection pool, if any.
                     */
                    // @ts-ignore
                    public destroy(): void
                }
            }
        }
    }
}
