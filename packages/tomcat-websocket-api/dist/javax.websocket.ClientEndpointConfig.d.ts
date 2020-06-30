declare namespace javax {
    namespace websocket {
        // @ts-ignore
        interface ClientEndpointConfig extends javax.websocket.EndpointConfig {
            // @ts-ignore
            getPreferredSubprotocols(): Array<java.lang.String | string>
            // @ts-ignore
            getExtensions(): Array<javax.websocket.Extension>
            // @ts-ignore
            getConfigurator(): javax.websocket.ClientEndpointConfig.Configurator
        }
    }
}
