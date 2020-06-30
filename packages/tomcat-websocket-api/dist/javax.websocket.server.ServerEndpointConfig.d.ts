declare namespace javax {
    namespace websocket {
        namespace server {
            /**
             * Provides configuration information for WebSocket endpoints published to a
             * server. Applications may provide their own implementation or use
             * {@link Builder}.
             */
            // @ts-ignore
            interface ServerEndpointConfig extends javax.websocket.EndpointConfig {
                // @ts-ignore
                getEndpointClass(): java.lang.Class<any>
                /**
                 * Returns the path at which this WebSocket server endpoint has been
                 * registered. It may be a path or a level 0 URI template.
                 * @return The registered path
                 */
                // @ts-ignore
                getPath(): string
                // @ts-ignore
                getSubprotocols(): Array<java.lang.String | string>
                // @ts-ignore
                getExtensions(): Array<javax.websocket.Extension>
                // @ts-ignore
                getConfigurator(): javax.websocket.server.ServerEndpointConfig.Configurator
            }
        }
    }
}
