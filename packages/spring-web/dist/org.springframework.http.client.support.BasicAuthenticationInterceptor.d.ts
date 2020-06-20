declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace support {
                    /**
                     * {@link ClientHttpRequestInterceptor} to apply a given HTTP Basic Authentication
                     * username/password pair, unless a custom {@code Authorization} header has
                     * already been set.
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @since 5.1.1
                     * @see HttpHeaders#setBasicAuth
                     * @see HttpHeaders#AUTHORIZATION
                     */
                    // @ts-ignore
                    class BasicAuthenticationInterceptor extends java.lang.Object implements org.springframework.http.client.ClientHttpRequestInterceptor {
                        /**
                         * Create a new interceptor which adds Basic Authentication for the
                         * given username and password.
                         * @param username the username to use
                         * @param password the password to use
                         * @see HttpHeaders#setBasicAuth(String, String)
                         * @see HttpHeaders#encodeBasicAuth(String, String, Charset)
                         */
                        // @ts-ignore
                        constructor(username: string, password: string)
                        /**
                         * Create a new interceptor which adds Basic Authentication for the
                         * given username and password, encoded using the specified charset.
                         * @param username the username to use
                         * @param password the password to use
                         * @param charset the charset to use
                         * @see HttpHeaders#setBasicAuth(String, String, Charset)
                         * @see HttpHeaders#encodeBasicAuth(String, String, Charset)
                         */
                        // @ts-ignore
                        constructor(username: string, password: string, charset: java.nio.charset.Charset)
                        // @ts-ignore
                        intercept(request: org.springframework.http.HttpRequest, body: number /*byte*/[], execution: org.springframework.http.client.ClientHttpRequestExecution): org.springframework.http.client.ClientHttpResponse
                    }
                }
            }
        }
    }
}
