declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                /**
                 * Allows the WebSocket implementation to throw an {@link IOException} that
                 * includes a {@link CloseReason} specific to the error that can be passed back
                 * to the client.
                 */
                // @ts-ignore
                class WsIOException extends java.io.IOException {
                    // @ts-ignore
                    constructor(closeReason: CloseReason)
                    // @ts-ignore
                    getCloseReason(): CloseReason
                }
            }
        }
    }
}
