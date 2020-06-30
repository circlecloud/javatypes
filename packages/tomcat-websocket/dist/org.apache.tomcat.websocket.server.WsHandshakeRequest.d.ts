declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace server {
                    /**
                     * Represents the request that this session was opened under.
                     */
                    // @ts-ignore
                    class WsHandshakeRequest extends java.lang.Object {
                        // @ts-ignore
                        constructor(request: HttpServletRequest, pathParams: java.util.Map<java.lang.String | string, java.lang.String | string>)
                        // @ts-ignore
                        public getRequestURI(): java.net.URI
                        // @ts-ignore
                        public getParameterMap(): java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                        // @ts-ignore
                        public getQueryString(): string
                        // @ts-ignore
                        public getUserPrincipal(): java.security.Principal
                        // @ts-ignore
                        public getHeaders(): java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                        // @ts-ignore
                        public isUserInRole(role: java.lang.String | string): boolean
                        // @ts-ignore
                        public getHttpSession(): any
                    }
                }
            }
        }
    }
}
