declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace reactive {
                    /**
                     * {@link ClientHttpConnector} for the Jetty Reactive Streams HttpClient.
                     * @author Sebastien Deleuze
                     * @since 5.1
                     * @see <a href="https://github.com/jetty-project/jetty-reactive-httpclient">Jetty ReactiveStreams HttpClient</a>
                     */
                    // @ts-ignore
                    class JettyClientHttpConnector extends java.lang.Object implements org.springframework.http.client.reactive.ClientHttpConnector {
                        /**
                         * Default constructor that creates a new instance of {@link HttpClient}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Constructor with an initialized {@link HttpClient}.
                         */
                        // @ts-ignore
                        constructor(httpClient: HttpClient)
                        /**
                         * Constructor with an initialized {@link HttpClient} and configures it
                         * with the given {@link JettyResourceFactory}.
                         * @param httpClient the {#link HttpClient} to use
                         * @param resourceFactory the {#link JettyResourceFactory} to use
                         * @since 5.2
                         */
                        // @ts-ignore
                        constructor(httpClient: HttpClient, resourceFactory: org.springframework.http.client.reactive.JettyResourceFactory)
                        /**
                         * Constructor with an {@link JettyResourceFactory} that will manage shared resources.
                         * @param resourceFactory the {#link JettyResourceFactory} to use
                         * @param customizer the lambda used to customize the {#link HttpClient}
                         * @deprecated as of 5.2, in favor of {#link JettyClientHttpConnector#JettyClientHttpConnector(HttpClient, JettyResourceFactory)}
                         */
                        // @ts-ignore
                        constructor(resourceFactory: org.springframework.http.client.reactive.JettyResourceFactory, customizer: java.util.function$.Consumer<HttpClient>)
                        // @ts-ignore
                        public setBufferFactory(bufferFactory: DataBufferFactory): void
                        // @ts-ignore
                        public connect(method: org.springframework.http.HttpMethod, uri: java.net.URI, requestCallback: java.util.function$.Function<any, object>): object
                    }
                }
            }
        }
    }
}
