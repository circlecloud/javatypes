declare namespace javax {
    namespace websocket {
        // @ts-ignore
        interface Encoder {
            // @ts-ignore
            init(endpointConfig: javax.websocket.EndpointConfig): void
            // @ts-ignore
            destroy(): void
        }
    }
}
