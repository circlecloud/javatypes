declare namespace javax {
    namespace websocket {
        // @ts-ignore
        abstract class Endpoint extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Event that is triggered when a new session starts.
             * @param session   The new session.
             * @param config    The configuration with which the Endpoint was
             *                   configured.
             */
            // @ts-ignore
            public abstract onOpen(session: javax.websocket.Session, config: javax.websocket.EndpointConfig): void
            /**
             * Event that is triggered when a session has closed.
             * @param session       The session
             * @param closeReason   Why the session was closed
             */
            // @ts-ignore
            public onClose(session: javax.websocket.Session, closeReason: javax.websocket.CloseReason): void
            /**
             * Event that is triggered when a protocol error occurs.
             * @param session   The session.
             * @param throwable The exception.
             */
            // @ts-ignore
            public onError(session: javax.websocket.Session, throwable: java.lang.Throwable | Error): void
        }
    }
}
