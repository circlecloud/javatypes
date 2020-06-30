declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace server {
                    // @ts-ignore
                    class UpgradeUtil extends java.lang.Object {
                        /**
                         * Checks to see if this is an HTTP request that includes a valid upgrade
                         * request to web socket.
                         * <p>
                         * Note: RFC 2616 does not limit HTTP upgrade to GET requests but the Java
                         * WebSocket spec 1.0, section 8.2 implies such a limitation and RFC
                         * 6455 section 4.1 requires that a WebSocket Upgrade uses GET.
                         * @param request  The request to check if it is an HTTP upgrade request for
                         *                  a WebSocket connection
                         * @param response The response associated with the request
                         * @return <code>true</code> if the request includes an HTTP Upgrade request
                         *          for the WebSocket protocol, otherwise <code>false</code>
                         */
                        // @ts-ignore
                        public static isWebSocketUpgradeRequest(request: ServletRequest, response: ServletResponse): boolean
                        // @ts-ignore
                        public static doUpgrade(sc: org.apache.tomcat.websocket.server.WsServerContainer, req: HttpServletRequest, resp: HttpServletResponse, sec: ServerEndpointConfig, pathParams: java.util.Map<java.lang.String | string, java.lang.String | string>): void
                    }
                }
            }
        }
    }
}
