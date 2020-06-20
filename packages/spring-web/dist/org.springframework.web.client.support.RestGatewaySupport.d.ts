declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                namespace support {
                    /**
                     * Convenient super class for application classes that need REST access.
                     * <p>Requires a {@link ClientHttpRequestFactory} or a {@link RestTemplate} instance to be set.
                     * @author Arjen Poutsma
                     * @since 3.0
                     * @see #setRestTemplate
                     * @see org.springframework.web.client.RestTemplate
                     */
                    // @ts-ignore
                    class RestGatewaySupport extends java.lang.Object {
                        /**
                         * Construct a new instance of the {@link RestGatewaySupport}, with default parameters.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a new instance of the {@link RestGatewaySupport}, with the given {@link ClientHttpRequestFactory}.
                         * @see RestTemplate#RestTemplate(ClientHttpRequestFactory)
                         */
                        // @ts-ignore
                        constructor(requestFactory: org.springframework.http.client.ClientHttpRequestFactory)
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Sets the {@link RestTemplate} for the gateway.
                         */
                        // @ts-ignore
                        setRestTemplate(restTemplate: org.springframework.web.client.RestTemplate): void
                        /**
                         * Returns the {@link RestTemplate} for the gateway.
                         */
                        // @ts-ignore
                        getRestTemplate(): org.springframework.web.client.RestTemplate
                    }
                }
            }
        }
    }
}
