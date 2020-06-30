declare namespace javax {
    namespace websocket {
        namespace server {
            namespace ServerEndpointConfig {
                // @ts-ignore
                class Builder extends java.lang.Object {
                    // @ts-ignore
                    public static create(endpointClass: java.lang.Class<any>, path: java.lang.String | string): javax.websocket.server.ServerEndpointConfig.Builder
                    // @ts-ignore
                    public build(): javax.websocket.server.ServerEndpointConfig
                    // @ts-ignore
                    public encoders(encoders: java.util.List<java.lang.Class<any>> | Array<java.lang.Class<any>>): javax.websocket.server.ServerEndpointConfig.Builder
                    // @ts-ignore
                    public decoders(decoders: java.util.List<java.lang.Class<any>> | Array<java.lang.Class<any>>): javax.websocket.server.ServerEndpointConfig.Builder
                    // @ts-ignore
                    public subprotocols(subprotocols: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): javax.websocket.server.ServerEndpointConfig.Builder
                    // @ts-ignore
                    public extensions(extensions: java.util.List<javax.websocket.Extension> | Array<javax.websocket.Extension>): javax.websocket.server.ServerEndpointConfig.Builder
                    // @ts-ignore
                    public configurator(serverEndpointConfigurator: javax.websocket.server.ServerEndpointConfig.Configurator): javax.websocket.server.ServerEndpointConfig.Builder
                }
            }
        }
    }
}
