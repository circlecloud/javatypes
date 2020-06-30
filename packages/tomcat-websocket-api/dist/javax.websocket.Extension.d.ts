declare namespace javax {
    namespace websocket {
        // @ts-ignore
        interface Extension {
            // @ts-ignore
            getName(): string
            // @ts-ignore
            getParameters(): Array<javax.websocket.Extension.Parameter>
        }
    }
}
