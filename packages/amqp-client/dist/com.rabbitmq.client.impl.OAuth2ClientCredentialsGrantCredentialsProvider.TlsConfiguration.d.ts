declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace OAuth2ClientCredentialsGrantCredentialsProvider {
                    /**
                     * TLS configuration for a {@link OAuth2ClientCredentialsGrantCredentialsProvider}.
                     * <p>
                     * Use it from {@link OAuth2ClientCredentialsGrantCredentialsProviderBuilder#tls()}.
                     */
                    // @ts-ignore
                    class TlsConfiguration extends java.lang.Object {
                        // @ts-ignore
                        constructor(builder: com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.OAuth2ClientCredentialsGrantCredentialsProviderBuilder)
                        /**
                         * Set the hostname verifier.
                         * <p>
                         * {@link HttpsURLConnection} sets a default hostname verifier, so
                         * setting a custom one is only needed for specific cases.
                         * @param hostnameVerifier
                         * @return this TLS configuration instance
                         * @see HostnameVerifier
                         */
                        // @ts-ignore
                        public hostnameVerifier(hostnameVerifier: javax.net.ssl.HostnameVerifier): com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.TlsConfiguration
                        /**
                         * Set the {@link SSLSocketFactory} to use in the {@link HttpsURLConnection}.
                         * <p>
                         * The {@link SSLSocketFactory} supersedes the {@link SSLContext} value if both are set up.
                         * @param sslSocketFactory
                         * @return this TLS configuration instance
                         */
                        // @ts-ignore
                        public sslSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.TlsConfiguration
                        /**
                         * Set the {@link SSLContext} to use to create the {@link SSLSocketFactory} for the {@link HttpsURLConnection}.
                         * <p>
                         * This is the preferred way to configure TLS version to use, trusted servers, etc.
                         * <p>
                         * Note the {@link SSLContext} is not used if the {@link SSLSocketFactory} is set.
                         * @param sslContext
                         * @return this TLS configuration instances
                         */
                        // @ts-ignore
                        public sslContext(sslContext: javax.net.ssl.SSLContext): com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.TlsConfiguration
                        /**
                         * Set up a non-secured environment, useful for development and testing.
                         * <p>
                         * With this configuration, all servers are trusted.
                         * <em>DO NOT USE this in production.</em>
                         * @return a TLS configuration that trusts all servers
                         */
                        // @ts-ignore
                        public dev(): com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.TlsConfiguration
                        /**
                         * Go back to the builder to configure non-TLS settings.
                         * @return the wrapping builder
                         */
                        // @ts-ignore
                        public builder(): com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.OAuth2ClientCredentialsGrantCredentialsProviderBuilder
                    }
                }
            }
        }
    }
}
