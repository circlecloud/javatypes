declare namespace javax {
    namespace websocket {
        namespace MessageHandler {
            // @ts-ignore
            interface Whole<T> extends javax.websocket.MessageHandler {
                /**
                 * Called when a whole message is available to be processed.
                 * @param message   The message
                 */
                // @ts-ignore
                onMessage(message: T): void
            }
        }
    }
}
