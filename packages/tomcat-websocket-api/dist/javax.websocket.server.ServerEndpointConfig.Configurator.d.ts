declare namespace javax {
    namespace websocket {
        namespace server {
            namespace ServerEndpointConfig {
                // @ts-ignore
                class Configurator extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getNegotiatedSubprotocol(supported: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, requested: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): string
                    // @ts-ignore
                    public getNegotiatedExtensions(installed: java.util.List<javax.websocket.Extension> | Array<javax.websocket.Extension>, requested: java.util.List<javax.websocket.Extension> | Array<javax.websocket.Extension>): Array<javax.websocket.Extension>
                    // @ts-ignore
                    public checkOrigin(originHeaderValue: java.lang.String | string): boolean
                    // @ts-ignore
                    public modifyHandshake(sec: javax.websocket.server.ServerEndpointConfig, request: javax.websocket.server.HandshakeRequest, response: javax.websocket.HandshakeResponse): void
                    // @ts-ignore
                    public getEndpointInstance<T>(clazz: java.lang.Class<T>): T
                }
            }
        }
    }
}
