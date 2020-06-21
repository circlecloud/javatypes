declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace support {
                    /**
                     * {@link ClientHttpRequestInterceptor} to apply a BASIC authorization header.
                     * @author Phillip Webb
                     * @since 4.3.1
                     * @deprecated as of 5.1.1, in favor of {#link BasicAuthenticationInterceptor}
                     *  which reuses {@link org.springframework.http.HttpHeaders#setBasicAuth},
                     *  sharing its default charset ISO-8859-1 instead of UTF-8 as used here
                     */
                    // @ts-ignore
                    class BasicAuthorizationInterceptor extends java.lang.Object implements org.springframework.http.client.ClientHttpRequestInterceptor {
                        /**
                         * Create a new interceptor which adds a BASIC authorization header
                         * for the given username and password.
                         * @param username the username to use
                         * @param password the password to use
                         */
                        // @ts-ignore
                        constructor(username: java.lang.String | string, password: java.lang.String | string)
                        // @ts-ignore
                        public intercept(request: org.springframework.http.HttpRequest, body: number /*byte*/[], execution: org.springframework.http.client.ClientHttpRequestExecution): org.springframework.http.client.ClientHttpResponse
                    }
                }
            }
        }
    }
}
