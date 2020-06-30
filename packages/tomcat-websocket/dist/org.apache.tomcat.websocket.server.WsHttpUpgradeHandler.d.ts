declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace server {
                    /**
                     * Servlet 3.1 HTTP upgrade handler for WebSocket connections.
                     */
                    // @ts-ignore
                    class WsHttpUpgradeHandler extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setSocketWrapper(socketWrapper: object): void
                        // @ts-ignore
                        public preInit(ep: Endpoint, serverEndpointConfig: ServerEndpointConfig, wsc: org.apache.tomcat.websocket.server.WsServerContainer, handshakeRequest: org.apache.tomcat.websocket.server.WsHandshakeRequest, negotiatedExtensionsPhase2: java.util.List<Extension> | Array<Extension>, subProtocol: java.lang.String | string, transformation: org.apache.tomcat.websocket.Transformation, pathParameters: java.util.Map<java.lang.String | string, java.lang.String | string>, secure: boolean): void
                        // @ts-ignore
                        public init(connection: WebConnection): void
                        // @ts-ignore
                        public upgradeDispatch(status: SocketEvent): SocketState
                        // @ts-ignore
                        public timeoutAsync(now: number /*long*/): void
                        // @ts-ignore
                        public pause(): void
                        // @ts-ignore
                        public destroy(): void
                        // @ts-ignore
                        public setSslSupport(sslSupport: SSLSupport): void
                    }
                }
            }
        }
    }
}
