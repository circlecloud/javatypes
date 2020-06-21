declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * {@link ClientHttpRequestFactory} implementation that uses
                 * <a href="https://square.github.io/okhttp/">OkHttp</a> 3.x to create requests.
                 * @author Luciano Leggieri
                 * @author Arjen Poutsma
                 * @author Roy Clarkson
                 * @since 4.3
                 */
                // @ts-ignore
                class OkHttp3ClientHttpRequestFactory extends java.lang.Object implements org.springframework.http.client.ClientHttpRequestFactory, org.springframework.http.client.AsyncClientHttpRequestFactory {
                    /**
                     * Create a factory with a default {@link OkHttpClient} instance.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a factory with the given {@link OkHttpClient} instance.
                     * @param client the client to use
                     */
                    // @ts-ignore
                    constructor(client: OkHttpClient)
                    /**
                     * Set the underlying read timeout in milliseconds.
                     * A value of 0 specifies an infinite timeout.
                     */
                    // @ts-ignore
                    public setReadTimeout(readTimeout: number /*int*/): void
                    /**
                     * Set the underlying write timeout in milliseconds.
                     * A value of 0 specifies an infinite timeout.
                     */
                    // @ts-ignore
                    public setWriteTimeout(writeTimeout: number /*int*/): void
                    /**
                     * Set the underlying connect timeout in milliseconds.
                     * A value of 0 specifies an infinite timeout.
                     */
                    // @ts-ignore
                    public setConnectTimeout(connectTimeout: number /*int*/): void
                    // @ts-ignore
                    public createRequest(uri: java.net.URI, httpMethod: org.springframework.http.HttpMethod): org.springframework.http.client.ClientHttpRequest
                    // @ts-ignore
                    public createAsyncRequest(uri: java.net.URI, httpMethod: org.springframework.http.HttpMethod): org.springframework.http.client.AsyncClientHttpRequest
                    // @ts-ignore
                    public destroy(): void
                }
            }
        }
    }
}
