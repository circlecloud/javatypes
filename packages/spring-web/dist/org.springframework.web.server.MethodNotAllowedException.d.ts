declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                /**
                 * Exception for errors that fit response status 405 (method not allowed).
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                class MethodNotAllowedException extends org.springframework.web.server.ResponseStatusException {
                    // @ts-ignore
                    constructor(method: org.springframework.http.HttpMethod, supportedMethods: Array<org.springframework.http.HttpMethod>)
                    // @ts-ignore
                    constructor(method: string, supportedMethods: Array<org.springframework.http.HttpMethod>)
                    /**
                     * Return a Map with an "Allow" header.
                     * @since 5.1.11
                     */
                    // @ts-ignore
                    getHeaders(): java.util.Map<java.lang.String, java.lang.String>
                    /**
                     * Return HttpHeaders with an "Allow" header.
                     * @since 5.1.13
                     */
                    // @ts-ignore
                    getResponseHeaders(): org.springframework.http.HttpHeaders
                    /**
                     * Return the HTTP method for the failed request.
                     */
                    // @ts-ignore
                    getHttpMethod(): java.lang.String
                    /**
                     * Return the list of supported HTTP methods.
                     */
                    // @ts-ignore
                    getSupportedMethods(): java.util.Set<org.springframework.http.HttpMethod>
                }
            }
        }
    }
}
