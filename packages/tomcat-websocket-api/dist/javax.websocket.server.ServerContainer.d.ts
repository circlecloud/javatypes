declare namespace javax {
    namespace websocket {
        namespace server {
            /**
             * Provides the ability to deploy endpoints programmatically.
             */
            // @ts-ignore
            interface ServerContainer extends javax.websocket.WebSocketContainer {
                // @ts-ignore
                addEndpoint(clazz: java.lang.Class<any>): void
                // @ts-ignore
                addEndpoint(sec: javax.websocket.server.ServerEndpointConfig): void
            }
        }
    }
}
