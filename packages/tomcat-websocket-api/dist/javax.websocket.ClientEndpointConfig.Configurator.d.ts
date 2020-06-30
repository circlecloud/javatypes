declare namespace javax {
    namespace websocket {
        namespace ClientEndpointConfig {
            // @ts-ignore
            class Configurator extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Provides the client with a mechanism to inspect and/or modify the headers
                 * that are sent to the server to start the WebSocket handshake.
                 * @param headers   The HTTP headers
                 */
                // @ts-ignore
                public beforeRequest(headers: java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>): void
                /**
                 * Provides the client with a mechanism to inspect the handshake response
                 * that is returned from the server.
                 * @param handshakeResponse The response
                 */
                // @ts-ignore
                public afterResponse(handshakeResponse: javax.websocket.HandshakeResponse): void
            }
        }
    }
}
