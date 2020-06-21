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
                    constructor(method: org.springframework.http.HttpMethod, supportedMethods: java.util.Collection<org.springframework.http.HttpMethod> | Array<org.springframework.http.HttpMethod>)
                    // @ts-ignore
                    constructor(method: java.lang.String | string, supportedMethods: java.util.Collection<org.springframework.http.HttpMethod> | Array<org.springframework.http.HttpMethod>)
                    /**
                     * Return a Map with an "Allow" header.
                     * @since 5.1.11
                     */
                    // @ts-ignore
                    public getHeaders(): java.util.Map<java.lang.String | string, java.lang.String | string>
                    /**
                     * Return HttpHeaders with an "Allow" header.
                     * @since 5.1.13
                     */
                    // @ts-ignore
                    public getResponseHeaders(): org.springframework.http.HttpHeaders
                    /**
                     * Return the HTTP method for the failed request.
                     */
                    // @ts-ignore
                    public getHttpMethod(): string
                    /**
                     * Return the list of supported HTTP methods.
                     */
                    // @ts-ignore
                    public getSupportedMethods(): Array<org.springframework.http.HttpMethod>
                }
            }
        }
    }
}
