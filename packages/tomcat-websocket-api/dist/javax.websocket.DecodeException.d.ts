declare namespace javax {
    namespace websocket {
        // @ts-ignore
        class DecodeException extends java.lang.Exception {
            // @ts-ignore
            constructor(bb: java.nio.ByteBuffer, message: java.lang.String | string, cause: java.lang.Throwable | Error)
            // @ts-ignore
            constructor(encodedString: java.lang.String | string, message: java.lang.String | string, cause: java.lang.Throwable | Error)
            // @ts-ignore
            constructor(bb: java.nio.ByteBuffer, message: java.lang.String | string)
            // @ts-ignore
            constructor(encodedString: java.lang.String | string, message: java.lang.String | string)
            // @ts-ignore
            getBytes(): java.nio.ByteBuffer
            // @ts-ignore
            getText(): string
        }
    }
}
