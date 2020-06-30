declare namespace javax {
    namespace websocket {
        namespace server {
            /**
             * Represents the HTTP request that asked to be upgraded to WebSocket.
             */
            // @ts-ignore
            interface HandshakeRequest {
                // @ts-ignore
                readonly SEC_WEBSOCKET_KEY: java.lang.String | string
                // @ts-ignore
                readonly SEC_WEBSOCKET_PROTOCOL: java.lang.String | string
                // @ts-ignore
                readonly SEC_WEBSOCKET_VERSION: java.lang.String | string
                // @ts-ignore
                readonly SEC_WEBSOCKET_EXTENSIONS: java.lang.String | string
                // @ts-ignore
                getHeaders(): java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                // @ts-ignore
                getUserPrincipal(): java.security.Principal
                // @ts-ignore
                getRequestURI(): java.net.URI
                // @ts-ignore
                isUserInRole(role: java.lang.String | string): boolean
                /**
                 * Get the HTTP Session object associated with this request. Object is used
                 * to avoid a direct dependency on the Servlet API.
                 * @return The javax.servlet.http.HttpSession object associated with this
                 *          request, if any.
                 */
                // @ts-ignore
                getHttpSession(): any
                // @ts-ignore
                getParameterMap(): java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                // @ts-ignore
                getQueryString(): string
            }
        }
    }
}
