declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * Asynchronous extension of the {@link HttpComponentsClientHttpRequestFactory}. Uses
                 * <a href="https://hc.apache.org/httpcomponents-asyncclient-dev/">Apache HttpComponents
                 * HttpAsyncClient 4.0</a> to create requests.
                 * @author Arjen Poutsma
                 * @author Stephane Nicoll
                 * @since 4.0
                 * @see HttpAsyncClient
                 * @deprecated as of Spring 5.0, with no direct replacement
                 */
                // @ts-ignore
                class HttpComponentsAsyncClientHttpRequestFactory extends org.springframework.http.client.HttpComponentsClientHttpRequestFactory implements org.springframework.http.client.AsyncClientHttpRequestFactory {
                    /**
                     * Create a new instance of the {@code HttpComponentsAsyncClientHttpRequestFactory}
                     * with a default {@link HttpAsyncClient} and {@link HttpClient}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new instance of the {@code HttpComponentsAsyncClientHttpRequestFactory}
                     * with the given {@link HttpAsyncClient} instance and a default {@link HttpClient}.
                     * @param asyncClient the HttpAsyncClient instance to use for this request factory
                     * @since 4.3.10
                     */
                    // @ts-ignore
                    constructor(asyncClient: HttpAsyncClient)
                    /**
                     * Create a new instance of the {@code HttpComponentsAsyncClientHttpRequestFactory}
                     * with the given {@link CloseableHttpAsyncClient} instance and a default {@link HttpClient}.
                     * @param asyncClient the CloseableHttpAsyncClient instance to use for this request factory
                     */
                    // @ts-ignore
                    constructor(asyncClient: CloseableHttpAsyncClient)
                    /**
                     * Create a new instance of the {@code HttpComponentsAsyncClientHttpRequestFactory}
                     * with the given {@link HttpClient} and {@link HttpAsyncClient} instances.
                     * @param httpClient the HttpClient instance to use for this request factory
                     * @param asyncClient the HttpAsyncClient instance to use for this request factory
                     * @since 4.3.10
                     */
                    // @ts-ignore
                    constructor(httpClient: HttpClient, asyncClient: HttpAsyncClient)
                    /**
                     * Create a new instance of the {@code HttpComponentsAsyncClientHttpRequestFactory}
                     * with the given {@link CloseableHttpClient} and {@link CloseableHttpAsyncClient} instances.
                     * @param httpClient the CloseableHttpClient instance to use for this request factory
                     * @param asyncClient the CloseableHttpAsyncClient instance to use for this request factory
                     */
                    // @ts-ignore
                    constructor(httpClient: CloseableHttpClient, asyncClient: CloseableHttpAsyncClient)
                    /**
                     * Set the {@code HttpAsyncClient} used for
                     * {@linkplain #createAsyncRequest(URI, HttpMethod) synchronous execution}.
                     * @since 4.3.10
                     * @see #setHttpClient(HttpClient)
                     */
                    // @ts-ignore
                    setAsyncClient(asyncClient: HttpAsyncClient): void
                    /**
                     * Return the {@code HttpAsyncClient} used for
                     * {@linkplain #createAsyncRequest(URI, HttpMethod) synchronous execution}.
                     * @since 4.3.10
                     * @see #getHttpClient()
                     */
                    // @ts-ignore
                    getAsyncClient(): HttpAsyncClient
                    /**
                     * Set the {@code CloseableHttpAsyncClient} used for
                     * {@linkplain #createAsyncRequest(URI, HttpMethod) asynchronous execution}.
                     * @deprecated as of 4.3.10, in favor of {#link #setAsyncClient(HttpAsyncClient)}
                     */
                    // @ts-ignore
                    setHttpAsyncClient(asyncClient: CloseableHttpAsyncClient): void
                    /**
                     * Return the {@code CloseableHttpAsyncClient} used for
                     * {@linkplain #createAsyncRequest(URI, HttpMethod) asynchronous execution}.
                     * @deprecated as of 4.3.10, in favor of {#link #getAsyncClient()}
                     */
                    // @ts-ignore
                    getHttpAsyncClient(): CloseableHttpAsyncClient
                    // @ts-ignore
                    afterPropertiesSet(): void
                    // @ts-ignore
                    createAsyncRequest(uri: java.net.URI, httpMethod: org.springframework.http.HttpMethod): org.springframework.http.client.AsyncClientHttpRequest
                    // @ts-ignore
                    destroy(): void
                }
            }
        }
    }
}
