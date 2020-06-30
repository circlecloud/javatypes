declare namespace javax {
    namespace websocket {
        // @ts-ignore
        interface Decoder {
            // @ts-ignore
            init(endpointConfig: javax.websocket.EndpointConfig): void
            // @ts-ignore
            destroy(): void
        }
    }
}
