declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace httpinvoker {
                /**
                 * {@link org.springframework.remoting.httpinvoker.HttpInvokerRequestExecutor} implementation that uses
                 * <a href="https://hc.apache.org/httpcomponents-client-ga/httpclient/">Apache HttpComponents HttpClient</a>
                 * to execute POST requests.
                 * <p>Allows to use a pre-configured {@link org.apache.http.client.HttpClient}
                 * instance, potentially with authentication, HTTP connection pooling, etc.
                 * Also designed for easy subclassing, providing specific template methods.
                 * <p>As of Spring 4.1, this request executor requires Apache HttpComponents 4.3 or higher.
                 * @author Juergen Hoeller
                 * @author Stephane Nicoll
                 * @since 3.1
                 * @see org.springframework.remoting.httpinvoker.SimpleHttpInvokerRequestExecutor
                 */
                // @ts-ignore
                class HttpComponentsHttpInvokerRequestExecutor extends org.springframework.remoting.httpinvoker.AbstractHttpInvokerRequestExecutor {
                    /**
                     * Create a new instance of the HttpComponentsHttpInvokerRequestExecutor with a default
                     * {@link HttpClient} that uses a default {@code org.apache.http.impl.conn.PoolingClientConnectionManager}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new instance of the HttpComponentsClientHttpRequestFactory
                     * with the given {@link HttpClient} instance.
                     * @param httpClient the HttpClient instance to use for this request executor
                     */
                    // @ts-ignore
                    constructor(httpClient: HttpClient)
                    /**
                     * Set the {@link HttpClient} instance to use for this request executor.
                     */
                    // @ts-ignore
                    public setHttpClient(httpClient: HttpClient): void
                    /**
                     * Return the {@link HttpClient} instance that this request executor uses.
                     */
                    // @ts-ignore
                    public getHttpClient(): HttpClient
                    /**
                     * Set the connection timeout for the underlying HttpClient.
                     * A timeout value of 0 specifies an infinite timeout.
                     * <p>Additional properties can be configured by specifying a
                     * {@link RequestConfig} instance on a custom {@link HttpClient}.
                     * @param timeout the timeout value in milliseconds
                     * @see RequestConfig#getConnectTimeout()
                     */
                    // @ts-ignore
                    public setConnectTimeout(timeout: number /*int*/): void
                    /**
                     * Set the timeout in milliseconds used when requesting a connection from the connection
                     * manager using the underlying HttpClient.
                     * A timeout value of 0 specifies an infinite timeout.
                     * <p>Additional properties can be configured by specifying a
                     * {@link RequestConfig} instance on a custom {@link HttpClient}.
                     * @param connectionRequestTimeout the timeout value to request a connection in milliseconds
                     * @see RequestConfig#getConnectionRequestTimeout()
                     */
                    // @ts-ignore
                    public setConnectionRequestTimeout(connectionRequestTimeout: number /*int*/): void
                    /**
                     * Set the socket read timeout for the underlying HttpClient.
                     * A timeout value of 0 specifies an infinite timeout.
                     * <p>Additional properties can be configured by specifying a
                     * {@link RequestConfig} instance on a custom {@link HttpClient}.
                     * @param timeout the timeout value in milliseconds
                     * @see #DEFAULT_READ_TIMEOUT_MILLISECONDS
                     * @see RequestConfig#getSocketTimeout()
                     */
                    // @ts-ignore
                    public setReadTimeout(timeout: number /*int*/): void
                    /**
                     * Execute the given request through the HttpClient.
                     * <p>This method implements the basic processing workflow:
                     * The actual work happens in this class's template methods.
                     * @see #createHttpPost
                     * @see #setRequestBody
                     * @see #executeHttpPost
                     * @see #validateResponse
                     * @see #getResponseBody
                     */
                    // @ts-ignore
                    doExecuteRequest(config: org.springframework.remoting.httpinvoker.HttpInvokerClientConfiguration, baos: java.io.ByteArrayOutputStream): RemoteInvocationResult
                    /**
                     * Create an HttpPost for the given configuration.
                     * <p>The default implementation creates a standard HttpPost with
                     * "application/x-java-serialized-object" as "Content-Type" header.
                     * @param config the HTTP invoker configuration that specifies the
                     *  target service
                     * @return the HttpPost instance
                     * @throws java.io.IOException if thrown by I/O methods
                     */
                    // @ts-ignore
                    createHttpPost(config: org.springframework.remoting.httpinvoker.HttpInvokerClientConfiguration): HttpPost
                    /**
                     * Create a {@link RequestConfig} for the given configuration. Can return {@code null}
                     * to indicate that no custom request config should be set and the defaults of the
                     * {@link HttpClient} should be used.
                     * <p>The default implementation tries to merge the defaults of the client with the
                     * local customizations of the instance, if any.
                     * @param config the HTTP invoker configuration that specifies the
                     *  target service
                     * @return the RequestConfig to use
                     */
                    // @ts-ignore
                    createRequestConfig(config: org.springframework.remoting.httpinvoker.HttpInvokerClientConfiguration): RequestConfig
                    /**
                     * Set the given serialized remote invocation as request body.
                     * <p>The default implementation simply sets the serialized invocation as the
                     * HttpPost's request body. This can be overridden, for example, to write a
                     * specific encoding and to potentially set appropriate HTTP request headers.
                     * @param config the HTTP invoker configuration that specifies the target service
                     * @param httpPost the HttpPost to set the request body on
                     * @param baos the ByteArrayOutputStream that contains the serialized
                     *  RemoteInvocation object
                     * @throws java.io.IOException if thrown by I/O methods
                     */
                    // @ts-ignore
                    setRequestBody(config: org.springframework.remoting.httpinvoker.HttpInvokerClientConfiguration, httpPost: HttpPost, baos: java.io.ByteArrayOutputStream): void
                    /**
                     * Execute the given HttpPost instance.
                     * @param config the HTTP invoker configuration that specifies the target service
                     * @param httpClient the HttpClient to execute on
                     * @param httpPost the HttpPost to execute
                     * @return the resulting HttpResponse
                     * @throws java.io.IOException if thrown by I/O methods
                     */
                    // @ts-ignore
                    executeHttpPost(config: org.springframework.remoting.httpinvoker.HttpInvokerClientConfiguration, httpClient: HttpClient, httpPost: HttpPost): HttpResponse
                    /**
                     * Validate the given response as contained in the HttpPost object,
                     * throwing an exception if it does not correspond to a successful HTTP response.
                     * <p>Default implementation rejects any HTTP status code beyond 2xx, to avoid
                     * parsing the response body and trying to deserialize from a corrupted stream.
                     * @param config the HTTP invoker configuration that specifies the target service
                     * @param response the resulting HttpResponse to validate
                     * @throws java.io.IOException if validation failed
                     */
                    // @ts-ignore
                    validateResponse(config: org.springframework.remoting.httpinvoker.HttpInvokerClientConfiguration, response: HttpResponse): void
                    /**
                     * Extract the response body from the given executed remote invocation request.
                     * <p>The default implementation simply fetches the HttpPost's response body stream.
                     * If the response is recognized as GZIP response, the InputStream will get wrapped
                     * in a GZIPInputStream.
                     * @param config the HTTP invoker configuration that specifies the target service
                     * @param httpResponse the resulting HttpResponse to read the response body from
                     * @return an InputStream for the response body
                     * @throws java.io.IOException if thrown by I/O methods
                     * @see #isGzipResponse
                     * @see java.util.zip.GZIPInputStream
                     */
                    // @ts-ignore
                    getResponseBody(config: org.springframework.remoting.httpinvoker.HttpInvokerClientConfiguration, httpResponse: HttpResponse): java.io.InputStream
                    /**
                     * Determine whether the given response indicates a GZIP response.
                     * <p>The default implementation checks whether the HTTP "Content-Encoding"
                     * header contains "gzip" (in any casing).
                     * @param httpResponse the resulting HttpResponse to check
                     * @return whether the given response indicates a GZIP response
                     */
                    // @ts-ignore
                    isGzipResponse(httpResponse: HttpResponse): boolean
                }
            }
        }
    }
}
