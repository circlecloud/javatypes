declare namespace javax {
    namespace websocket {
        // @ts-ignore
        interface HandshakeResponse {
            /**
             * Name of the WebSocket accept HTTP header.
             */
            // @ts-ignore
            readonly SEC_WEBSOCKET_ACCEPT: java.lang.String | string
            // @ts-ignore
            getHeaders(): java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
        }
    }
}
