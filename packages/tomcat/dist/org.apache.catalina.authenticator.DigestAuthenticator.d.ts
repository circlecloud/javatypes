declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                /**
                 * An <b>Authenticator</b> and <b>Valve</b> implementation of HTTP DIGEST
                 * Authentication (see RFC 2069).
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class DigestAuthenticator extends org.apache.catalina.authenticator.AuthenticatorBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * Tomcat's DIGEST implementation only supports auth quality of protection.
                     */
                    // @ts-ignore
                    static readonly QOP: java.lang.String | string
                    /**
                     * List of server nonce values currently being tracked
                     */
                    // @ts-ignore
                    nonces: java.util.Map<java.lang.String | string, org.apache.catalina.authenticator.DigestAuthenticator.NonceInfo>
                    /**
                     * The last timestamp used to generate a nonce. Each nonce should get a
                     * unique timestamp.
                     */
                    // @ts-ignore
                    lastTimestamp: number /*long*/
                    // @ts-ignore
                    readonly lastTimestampLock: java.lang.Object | any
                    /**
                     * Maximum number of server nonces to keep in the cache. If not specified,
                     * the default value of 1000 is used.
                     */
                    // @ts-ignore
                    nonceCacheSize: number /*int*/
                    /**
                     * The window size to use to track seen nonce count values for a given
                     * nonce. If not specified, the default of 100 is used.
                     */
                    // @ts-ignore
                    nonceCountWindowSize: number /*int*/
                    /**
                     * Private key.
                     */
                    // @ts-ignore
                    key: java.lang.String | string
                    /**
                     * How long server nonces are valid for in milliseconds. Defaults to 5
                     * minutes.
                     */
                    // @ts-ignore
                    nonceValidity: number /*long*/
                    /**
                     * Opaque string.
                     */
                    // @ts-ignore
                    opaque: java.lang.String | string
                    /**
                     * Should the URI be validated as required by RFC2617? Can be disabled in
                     * reverse proxies where the proxy has modified the URI.
                     */
                    // @ts-ignore
                    validateUri: boolean
                    // @ts-ignore
                    public getNonceCountWindowSize(): number /*int*/
                    // @ts-ignore
                    public setNonceCountWindowSize(nonceCountWindowSize: number /*int*/): void
                    // @ts-ignore
                    public getNonceCacheSize(): number /*int*/
                    // @ts-ignore
                    public setNonceCacheSize(nonceCacheSize: number /*int*/): void
                    // @ts-ignore
                    public getKey(): string
                    // @ts-ignore
                    public setKey(key: java.lang.String | string): void
                    // @ts-ignore
                    public getNonceValidity(): number /*long*/
                    // @ts-ignore
                    public setNonceValidity(nonceValidity: number /*long*/): void
                    // @ts-ignore
                    public getOpaque(): string
                    // @ts-ignore
                    public setOpaque(opaque: java.lang.String | string): void
                    // @ts-ignore
                    public isValidateUri(): boolean
                    // @ts-ignore
                    public setValidateUri(validateUri: boolean): void
                    /**
                     * Authenticate the user making this request, based on the specified
                     * login configuration.  Return <code>true</code> if any specified
                     * constraint has been satisfied, or <code>false</code> if we have
                     * created a response challenge already.
                     * @param request Request we are processing
                     * @param response Response we are creating
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    doAuthenticate(request: org.apache.catalina.connector.Request, response: javax.servlet.http.HttpServletResponse): boolean
                    // @ts-ignore
                    getAuthMethod(): string
                    /**
                     * Removes the quotes on a string. RFC2617 states quotes are optional for
                     * all parameters except realm.
                     * @param quotedString The quoted string
                     * @param quotesRequired <code>true</code> if quotes were required
                     * @return The unquoted string
                     */
                    // @ts-ignore
                    static removeQuotes(quotedString: java.lang.String | string, quotesRequired: boolean): string
                    /**
                     * Removes the quotes on a string.
                     * @param quotedString The quoted string
                     * @return The unquoted string
                     */
                    // @ts-ignore
                    static removeQuotes(quotedString: java.lang.String | string): string
                    /**
                     * Generate a unique token. The token is generated according to the
                     * following pattern. NOnceToken = Base64 ( MD5 ( client-IP ":"
                     * time-stamp ":" private-key ) ).
                     * @param request HTTP Servlet request
                     * @return The generated nonce
                     */
                    // @ts-ignore
                    generateNonce(request: org.apache.catalina.connector.Request): string
                    /**
                     * Generates the WWW-Authenticate header.
                     * <p>
                     * The header MUST follow this template :
                     * <pre>
                     * WWW-Authenticate    = "WWW-Authenticate" ":" "Digest"
                     * digest-challenge
                     * digest-challenge    = 1#( realm | [ domain ] | nonce |
                     * [ digest-opaque ] |[ stale ] | [ algorithm ] )
                     * realm               = "realm" "=" realm-value
                     * realm-value         = quoted-string
                     * domain              = "domain" "=" &lt;"&gt; 1#URI &lt;"&gt;
                     * nonce               = "nonce" "=" nonce-value
                     * nonce-value         = quoted-string
                     * opaque              = "opaque" "=" quoted-string
                     * stale               = "stale" "=" ( "true" | "false" )
                     * algorithm           = "algorithm" "=" ( "MD5" | token )
                     * </pre>
                     * @param request HTTP Servlet request
                     * @param response HTTP Servlet response
                     * @param nonce nonce token
                     * @param isNonceStale <code>true</code> to add a stale parameter
                     */
                    // @ts-ignore
                    setAuthenticateHeader(request: javax.servlet.http.HttpServletRequest, response: javax.servlet.http.HttpServletResponse, nonce: java.lang.String | string, isNonceStale: boolean): void
                    // @ts-ignore
                    startInternal(): void
                }
            }
        }
    }
}
