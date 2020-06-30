declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace server {
                    // @ts-ignore
                    class DefaultServerEndpointConfigurator extends ServerEndpointConfig.Configurator {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getEndpointInstance<T>(clazz: java.lang.Class<T>): T
                        // @ts-ignore
                        public getNegotiatedSubprotocol(supported: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, requested: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): string
                        // @ts-ignore
                        public getNegotiatedExtensions(installed: java.util.List<Extension> | Array<Extension>, requested: java.util.List<Extension> | Array<Extension>): Array<Extension>
                        // @ts-ignore
                        public checkOrigin(originHeaderValue: java.lang.String | string): boolean
                        // @ts-ignore
                        public modifyHandshake(sec: ServerEndpointConfig, request: HandshakeRequest, response: HandshakeResponse): void
                    }
                }
            }
        }
    }
}
