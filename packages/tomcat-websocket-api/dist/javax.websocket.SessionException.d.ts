declare namespace javax {
    namespace websocket {
        // @ts-ignore
        class SessionException extends java.lang.Exception {
            // @ts-ignore
            constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error, session: javax.websocket.Session)
            // @ts-ignore
            getSession(): javax.websocket.Session
        }
    }
}
