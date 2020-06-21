declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace OAuth2ClientCredentialsGrantCredentialsProvider {
                    /**
                     * Helper to create {@link OAuth2ClientCredentialsGrantCredentialsProvider} instances.
                     */
                    // @ts-ignore
                    class OAuth2ClientCredentialsGrantCredentialsProviderBuilder extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the URI to request to get the token.
                         * @param tokenEndpointUri
                         * @return this builder instance
                         */
                        // @ts-ignore
                        public tokenEndpointUri(tokenEndpointUri: java.lang.String | string): com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.OAuth2ClientCredentialsGrantCredentialsProviderBuilder
                        /**
                         * Set the OAuth 2 client ID
                         * <p>
                         * The client ID usually identifies the application that requests a token.
                         * @param clientId
                         * @return this builder instance
                         */
                        // @ts-ignore
                        public clientId(clientId: java.lang.String | string): com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.OAuth2ClientCredentialsGrantCredentialsProviderBuilder
                        /**
                         * Set the secret (password) to use to get a token.
                         * @param clientSecret
                         * @return this builder instance
                         */
                        // @ts-ignore
                        public clientSecret(clientSecret: java.lang.String | string): com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.OAuth2ClientCredentialsGrantCredentialsProviderBuilder
                        /**
                         * Set the grant type to use when requesting the token.
                         * <p>
                         * The default is <code>client_credentials</code>, but some OAuth 2 servers can use
                         * non-standard grant types to request tokens with extra-information.
                         * @param grantType
                         * @return this builder instance
                         */
                        // @ts-ignore
                        public grantType(grantType: java.lang.String | string): com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.OAuth2ClientCredentialsGrantCredentialsProviderBuilder
                        /**
                         * Extra parameters to pass in the request.
                         * <p>
                         * These parameters can be used by the OAuth 2 server to narrow down the identify of the user.
                         * @param name
                         * @param value
                         * @return this builder instance
                         */
                        // @ts-ignore
                        public parameter(name: java.lang.String | string, value: java.lang.String | string): com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.OAuth2ClientCredentialsGrantCredentialsProviderBuilder
                        /**
                         * A hook to configure the {@link HttpURLConnection} before the request is sent.
                         * <p>
                         * Can be used to configuration settings like timeouts.
                         * @param connectionConfigurator
                         * @return this builder instance
                         */
                        // @ts-ignore
                        public connectionConfigurator(connectionConfigurator: java.util.function$.Consumer<java.net.HttpURLConnection>): com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.OAuth2ClientCredentialsGrantCredentialsProviderBuilder
                        /**
                         * Get access to the TLS configuration to get the token on HTTPS.
                         * <p>
                         * It is recommended that applications in production use HTTPS and configure it properly
                         * to perform token retrieval. Not doing so could result in sensitive data
                         * transiting in clear on the network.
                         * <p>
                         * You can "exit" the TLS configuration and come back to the builder by
                         * calling {@link TlsConfiguration#builder()}.
                         * @return the TLS configuration for this builder.
                         * @see TlsConfiguration
                         * @see TlsConfiguration#builder()
                         */
                        // @ts-ignore
                        public tls(): com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.TlsConfiguration
                        /**
                         * Create the {@link OAuth2ClientCredentialsGrantCredentialsProvider} instance.
                         * @return 
                         */
                        // @ts-ignore
                        public build(): com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider
                    }
                }
            }
        }
    }
}
