declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * {@link org.springframework.http.client.ClientHttpRequestFactory} implementation
                 * that uses <a href="https://netty.io/">Netty 4</a> to create requests.
                 * <p>Allows to use a pre-configured {@link EventLoopGroup} instance: useful for
                 * sharing across multiple clients.
                 * <p>Note that this implementation consistently closes the HTTP connection on each
                 * request.
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @author Brian Clozel
                 * @author Mark Paluch
                 * @since 4.1.2
                 * @deprecated as of Spring 5.0, in favor of
                 *  {#link org.springframework.http.client.reactive.ReactorClientHttpConnector}
                 */
                // @ts-ignore
                class Netty4ClientHttpRequestFactory extends java.lang.Object implements org.springframework.http.client.ClientHttpRequestFactory, org.springframework.http.client.AsyncClientHttpRequestFactory {
                    /**
                     * Create a new {@code Netty4ClientHttpRequestFactory} with a default
                     * {@link NioEventLoopGroup}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new {@code Netty4ClientHttpRequestFactory} with the given
                     * {@link EventLoopGroup}.
                     * <p><b>NOTE:</b> the given group will <strong>not</strong> be
                     * {@linkplain EventLoopGroup#shutdownGracefully() shutdown} by this factory;
                     * doing so becomes the responsibility of the caller.
                     */
                    // @ts-ignore
                    constructor(eventLoopGroup: EventLoopGroup)
                    /**
                     * The default maximum response size.
                     * @see #setMaxResponseSize(int)
                     */
                    // @ts-ignore
                    readonly DEFAULT_MAX_RESPONSE_SIZE: number /*int*/
                    /**
                     * Set the default maximum response size.
                     * <p>By default this is set to {@link #DEFAULT_MAX_RESPONSE_SIZE}.
                     * @since 4.1.5
                     * @see HttpObjectAggregator#HttpObjectAggregator(int)
                     */
                    // @ts-ignore
                    setMaxResponseSize(maxResponseSize: number /*int*/): void
                    /**
                     * Set the SSL context. When configured it is used to create and insert an
                     * {@link io.netty.handler.ssl.SslHandler} in the channel pipeline.
                     * <p>A default client SslContext is configured if none has been provided.
                     */
                    // @ts-ignore
                    setSslContext(sslContext: SslContext): void
                    /**
                     * Set the underlying connect timeout (in milliseconds).
                     * A timeout value of 0 specifies an infinite timeout.
                     * @see ChannelConfig#setConnectTimeoutMillis(int)
                     */
                    // @ts-ignore
                    setConnectTimeout(connectTimeout: number /*int*/): void
                    /**
                     * Set the underlying URLConnection's read timeout (in milliseconds).
                     * A timeout value of 0 specifies an infinite timeout.
                     * @see ReadTimeoutHandler
                     */
                    // @ts-ignore
                    setReadTimeout(readTimeout: number /*int*/): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                    // @ts-ignore
                    createRequest(uri: java.net.URI, httpMethod: org.springframework.http.HttpMethod): org.springframework.http.client.ClientHttpRequest
                    // @ts-ignore
                    createAsyncRequest(uri: java.net.URI, httpMethod: org.springframework.http.HttpMethod): org.springframework.http.client.AsyncClientHttpRequest
                    /**
                     * Template method for changing properties on the given {@link SocketChannelConfig}.
                     * <p>The default implementation sets the connect timeout based on the set property.
                     * @param config the channel configuration
                     */
                    // @ts-ignore
                    configureChannel(config: SocketChannelConfig): void
                    // @ts-ignore
                    destroy(): void
                }
            }
        }
    }
}
