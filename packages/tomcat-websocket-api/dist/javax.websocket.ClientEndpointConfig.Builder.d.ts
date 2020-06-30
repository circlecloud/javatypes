declare namespace javax {
    namespace websocket {
        namespace ClientEndpointConfig {
            // @ts-ignore
            class Builder extends java.lang.Object {
                // @ts-ignore
                public static create(): javax.websocket.ClientEndpointConfig.Builder
                // @ts-ignore
                public build(): javax.websocket.ClientEndpointConfig
                // @ts-ignore
                public configurator(configurator: javax.websocket.ClientEndpointConfig.Configurator): javax.websocket.ClientEndpointConfig.Builder
                // @ts-ignore
                public preferredSubprotocols(preferredSubprotocols: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): javax.websocket.ClientEndpointConfig.Builder
                // @ts-ignore
                public extensions(extensions: java.util.List<javax.websocket.Extension> | Array<javax.websocket.Extension>): javax.websocket.ClientEndpointConfig.Builder
                // @ts-ignore
                public encoders(encoders: java.util.List<java.lang.Class<any>> | Array<java.lang.Class<any>>): javax.websocket.ClientEndpointConfig.Builder
                // @ts-ignore
                public decoders(decoders: java.util.List<java.lang.Class<any>> | Array<java.lang.Class<any>>): javax.websocket.ClientEndpointConfig.Builder
            }
        }
    }
}
