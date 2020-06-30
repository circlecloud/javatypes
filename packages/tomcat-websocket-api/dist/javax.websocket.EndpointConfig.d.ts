declare namespace javax {
    namespace websocket {
        // @ts-ignore
        interface EndpointConfig {
            // @ts-ignore
            getEncoders(): Array<java.lang.Class<any>>
            // @ts-ignore
            getDecoders(): Array<java.lang.Class<any>>
            // @ts-ignore
            getUserProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
        }
    }
}
