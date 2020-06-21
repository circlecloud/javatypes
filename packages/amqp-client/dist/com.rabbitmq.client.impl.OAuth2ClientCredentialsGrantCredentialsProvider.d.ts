declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * A {@link CredentialsProvider} that performs an
                 * <a href="https://tools.ietf.org/html/rfc6749#section-4.4">OAuth 2 Client Credentials flow</a>
                 * to retrieve a token.
                 * <p>
                 * The provider has different parameters to set, e.g. the token endpoint URI of the OAuth server to
                 * request, the client ID, the client secret, the grant type, etc. The {@link OAuth2ClientCredentialsGrantCredentialsProviderBuilder}
                 * class is the preferred way to create an instance of the provider.
                 * <p>
                 * The implementation uses the JDK {@link HttpURLConnection} API to request the OAuth server. This can
                 * be easily changed by overriding the {@link #retrieveToken()} method.
                 * <p>
                 * This class expects a JSON document as a response and needs <a href="https://github.com/FasterXML/jackson">Jackson</a>
                 * to deserialize the response into a {@link Token}. This can be changed by overriding the {@link #parseToken(String)}
                 * method.
                 * <p>
                 * TLS is supported by providing a <code>HTTPS</code> URI and setting a {@link SSLContext}. See
                 * {@link OAuth2ClientCredentialsGrantCredentialsProviderBuilder#tls()} for more information.
                 * <em>Applications in production should always use HTTPS to retrieve tokens.</em>
                 * <p>
                 * If more customization is needed, a {@link #connectionConfigurator} callback can be provided to configure
                 * the connection.
                 * @see RefreshProtectedCredentialsProvider
                 * @see CredentialsRefreshService
                 * @see OAuth2ClientCredentialsGrantCredentialsProviderBuilder
                 * @see OAuth2ClientCredentialsGrantCredentialsProviderBuilder#tls()
                 */
                // @ts-ignore
                class OAuth2ClientCredentialsGrantCredentialsProvider extends com.rabbitmq.client.impl.RefreshProtectedCredentialsProvider<com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.Token> {
                    /**
                     * Use {@link OAuth2ClientCredentialsGrantCredentialsProviderBuilder} to create an instance.
                     * @param tokenEndpointUri
                     * @param clientId
                     * @param clientSecret
                     * @param grantType
                     */
                    // @ts-ignore
                    constructor(tokenEndpointUri: java.lang.String | string, clientId: java.lang.String | string, clientSecret: java.lang.String | string, grantType: java.lang.String | string)
                    /**
                     * Use {@link OAuth2ClientCredentialsGrantCredentialsProviderBuilder} to create an instance.
                     * @param tokenEndpointUri
                     * @param clientId
                     * @param clientSecret
                     * @param grantType
                     * @param parameters
                     */
                    // @ts-ignore
                    constructor(tokenEndpointUri: java.lang.String | string, clientId: java.lang.String | string, clientSecret: java.lang.String | string, grantType: java.lang.String | string, parameters: java.util.Map<java.lang.String | string, java.lang.String | string>)
                    /**
                     * Use {@link OAuth2ClientCredentialsGrantCredentialsProviderBuilder} to create an instance.
                     * @param tokenEndpointUri
                     * @param clientId
                     * @param clientSecret
                     * @param grantType
                     * @param parameters
                     * @param connectionConfigurator
                     */
                    // @ts-ignore
                    constructor(tokenEndpointUri: java.lang.String | string, clientId: java.lang.String | string, clientSecret: java.lang.String | string, grantType: java.lang.String | string, parameters: java.util.Map<java.lang.String | string, java.lang.String | string>, connectionConfigurator: java.util.function$.Consumer<java.net.HttpURLConnection>)
                    /**
                     * Use {@link OAuth2ClientCredentialsGrantCredentialsProviderBuilder} to create an instance.
                     * @param tokenEndpointUri
                     * @param clientId
                     * @param clientSecret
                     * @param grantType
                     * @param hostnameVerifier
                     * @param sslSocketFactory
                     */
                    // @ts-ignore
                    constructor(tokenEndpointUri: java.lang.String | string, clientId: java.lang.String | string, clientSecret: java.lang.String | string, grantType: java.lang.String | string, hostnameVerifier: javax.net.ssl.HostnameVerifier, sslSocketFactory: javax.net.ssl.SSLSocketFactory)
                    /**
                     * Use {@link OAuth2ClientCredentialsGrantCredentialsProviderBuilder} to create an instance.
                     * @param tokenEndpointUri
                     * @param clientId
                     * @param clientSecret
                     * @param grantType
                     * @param parameters
                     * @param hostnameVerifier
                     * @param sslSocketFactory
                     */
                    // @ts-ignore
                    constructor(tokenEndpointUri: java.lang.String | string, clientId: java.lang.String | string, clientSecret: java.lang.String | string, grantType: java.lang.String | string, parameters: java.util.Map<java.lang.String | string, java.lang.String | string>, hostnameVerifier: javax.net.ssl.HostnameVerifier, sslSocketFactory: javax.net.ssl.SSLSocketFactory)
                    /**
                     * Use {@link OAuth2ClientCredentialsGrantCredentialsProviderBuilder} to create an instance.
                     * @param tokenEndpointUri
                     * @param clientId
                     * @param clientSecret
                     * @param grantType
                     * @param parameters
                     * @param hostnameVerifier
                     * @param sslSocketFactory
                     * @param connectionConfigurator
                     */
                    // @ts-ignore
                    constructor(tokenEndpointUri: java.lang.String | string, clientId: java.lang.String | string, clientSecret: java.lang.String | string, grantType: java.lang.String | string, parameters: java.util.Map<java.lang.String | string, java.lang.String | string>, hostnameVerifier: javax.net.ssl.HostnameVerifier, sslSocketFactory: javax.net.ssl.SSLSocketFactory, connectionConfigurator: java.util.function$.Consumer<java.net.HttpURLConnection>)
                    // @ts-ignore
                    public getUsername(): string
                    // @ts-ignore
                    usernameFromToken(token: com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.Token): string
                    // @ts-ignore
                    parseToken(response: java.lang.String | string): com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.Token
                    // @ts-ignore
                    retrieveToken(): com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.Token
                    // @ts-ignore
                    checkContentType(headerField: java.lang.String | string): void
                    // @ts-ignore
                    checkResponseCode(responseCode: number /*int*/): void
                    // @ts-ignore
                    extractResponseBody(inputStream: java.io.InputStream): string
                    // @ts-ignore
                    passwordFromToken(token: com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.Token): string
                    // @ts-ignore
                    timeBeforeExpiration(token: com.rabbitmq.client.impl.OAuth2ClientCredentialsGrantCredentialsProvider.Token): java.time.Duration
                    // @ts-ignore
                    configureConnection(connection: java.net.HttpURLConnection): void
                    // @ts-ignore
                    configureConnectionForHttps(connection: java.net.HttpURLConnection): void
                    // @ts-ignore
                    public equals(o: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                }
            }
        }
    }
}
