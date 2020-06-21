declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * {@link ClientHttpRequestFactory} implementation that uses standard JDK facilities.
                 * @author Arjen Poutsma
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see java.net.HttpURLConnection
                 * @see HttpComponentsClientHttpRequestFactory
                 */
                // @ts-ignore
                class SimpleClientHttpRequestFactory extends java.lang.Object implements org.springframework.http.client.ClientHttpRequestFactory, org.springframework.http.client.AsyncClientHttpRequestFactory {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the {@link Proxy} to use for this request factory.
                     */
                    // @ts-ignore
                    public setProxy(proxy: java.net.Proxy): void
                    /**
                     * Indicate whether this request factory should buffer the
                     * {@linkplain ClientHttpRequest#getBody() request body} internally.
                     * <p>Default is {@code true}. When sending large amounts of data via POST or PUT,
                     * it is recommended to change this property to {@code false}, so as not to run
                     * out of memory. This will result in a {@link ClientHttpRequest} that either
                     * streams directly to the underlying {@link HttpURLConnection} (if the
                     * {@link org.springframework.http.HttpHeaders#getContentLength() Content-Length}
                     * is known in advance), or that will use "Chunked transfer encoding"
                     * (if the {@code Content-Length} is not known in advance).
                     * @see #setChunkSize(int)
                     * @see HttpURLConnection#setFixedLengthStreamingMode(int)
                     */
                    // @ts-ignore
                    public setBufferRequestBody(bufferRequestBody: boolean): void
                    /**
                     * Set the number of bytes to write in each chunk when not buffering request
                     * bodies locally.
                     * <p>Note that this parameter is only used when
                     * {@link #setBufferRequestBody(boolean) bufferRequestBody} is set to {@code false},
                     * and the {@link org.springframework.http.HttpHeaders#getContentLength() Content-Length}
                     * is not known in advance.
                     * @see #setBufferRequestBody(boolean)
                     */
                    // @ts-ignore
                    public setChunkSize(chunkSize: number /*int*/): void
                    /**
                     * Set the underlying URLConnection's connect timeout (in milliseconds).
                     * A timeout value of 0 specifies an infinite timeout.
                     * <p>Default is the system's default timeout.
                     * @see URLConnection#setConnectTimeout(int)
                     */
                    // @ts-ignore
                    public setConnectTimeout(connectTimeout: number /*int*/): void
                    /**
                     * Set the underlying URLConnection's read timeout (in milliseconds).
                     * A timeout value of 0 specifies an infinite timeout.
                     * <p>Default is the system's default timeout.
                     * @see URLConnection#setReadTimeout(int)
                     */
                    // @ts-ignore
                    public setReadTimeout(readTimeout: number /*int*/): void
                    /**
                     * Set if the underlying URLConnection can be set to 'output streaming' mode.
                     * Default is {@code true}.
                     * <p>When output streaming is enabled, authentication and redirection cannot be handled automatically.
                     * If output streaming is disabled, the {@link HttpURLConnection#setFixedLengthStreamingMode} and
                     * {@link HttpURLConnection#setChunkedStreamingMode} methods of the underlying connection will never
                     * be called.
                     * @param outputStreaming if output streaming is enabled
                     */
                    // @ts-ignore
                    public setOutputStreaming(outputStreaming: boolean): void
                    /**
                     * Set the task executor for this request factory. Setting this property is required
                     * for {@linkplain #createAsyncRequest(URI, HttpMethod) creating asynchronous requests}.
                     * @param taskExecutor the task executor
                     */
                    // @ts-ignore
                    public setTaskExecutor(taskExecutor: AsyncListenableTaskExecutor): void
                    // @ts-ignore
                    public createRequest(uri: java.net.URI, httpMethod: org.springframework.http.HttpMethod): org.springframework.http.client.ClientHttpRequest
                    /**
                     * {@inheritDoc}
                     * <p>Setting the {@link #setTaskExecutor taskExecutor} property is required before calling this method.
                     */
                    // @ts-ignore
                    public createAsyncRequest(uri: java.net.URI, httpMethod: org.springframework.http.HttpMethod): org.springframework.http.client.AsyncClientHttpRequest
                    /**
                     * Opens and returns a connection to the given URL.
                     * <p>The default implementation uses the given {@linkplain #setProxy(java.net.Proxy) proxy} -
                     * if any - to open a connection.
                     * @param url the URL to open a connection to
                     * @param proxy the proxy to use, may be {#code null}
                     * @return the opened connection
                     * @throws IOException in case of I/O errors
                     */
                    // @ts-ignore
                    openConnection(url: java.net.URL, proxy: java.net.Proxy): java.net.HttpURLConnection
                    /**
                     * Template method for preparing the given {@link HttpURLConnection}.
                     * <p>The default implementation prepares the connection for input and output, and sets the HTTP method.
                     * @param connection the connection to prepare
                     * @param httpMethod the HTTP request method ({#code GET}, {@code POST}, etc.)
                     * @throws IOException in case of I/O errors
                     */
                    // @ts-ignore
                    prepareConnection(connection: java.net.HttpURLConnection, httpMethod: java.lang.String | string): void
                }
            }
        }
    }
}
