declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace reactive {
                    /**
                     * Reactor-Netty implementation of {@link ClientHttpConnector}.
                     * @author Brian Clozel
                     * @since 5.0
                     * @see reactor.netty.http.client.HttpClient
                     */
                    // @ts-ignore
                    class ReactorClientHttpConnector extends java.lang.Object implements org.springframework.http.client.reactive.ClientHttpConnector {
                        /**
                         * Default constructor. Initializes {@link HttpClient} via:
                         * <pre class="code">
                         * HttpClient.create().compress()
                         * </pre>
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Constructor with externally managed Reactor Netty resources, including
                         * {@link LoopResources} for event loop threads, and {@link ConnectionProvider}
                         * for the connection pool.
                         * <p>This constructor should be used only when you don't want the client
                         * to participate in the Reactor Netty global resources. By default the
                         * client participates in the Reactor Netty global resources held in
                         * {@link reactor.netty.http.HttpResources}, which is recommended since
                         * fixed, shared resources are favored for event loop concurrency. However,
                         * consider declaring a {@link ReactorResourceFactory} bean with
                         * {@code globalResources=true} in order to ensure the Reactor Netty global
                         * resources are shut down when the Spring ApplicationContext is closed.
                         * @param factory the resource factory to obtain the resources from
                         * @param mapper a mapper for further initialization of the created client
                         * @since 5.1
                         */
                        // @ts-ignore
                        constructor(factory: org.springframework.http.client.reactive.ReactorResourceFactory, mapper: java.util.function.Function<HttpClient, HttpClient> | java.util.function$.Function<HttpClient, HttpClient>)
                        /**
                         * Constructor with a pre-configured {@code HttpClient} instance.
                         * @param httpClient the client to use
                         * @since 5.1
                         */
                        // @ts-ignore
                        constructor(httpClient: HttpClient)
                        // @ts-ignore
                        connect(method: org.springframework.http.HttpMethod, uri: java.net.URI, requestCallback: java.util.function.Function<any super org.springframework.http.client.reactive.ClientHttpRequest, <any>> | java.util.function$.Function<? super org.springframework.http.client.reactive.ClientHttpRequest, <any>>): <any>
                    }
                }
            }
        }
    }
}
