declare namespace javax {
    namespace websocket {
        namespace MessageHandler {
            // @ts-ignore
            interface Partial<T> extends javax.websocket.MessageHandler {
                /**
                 * Called when part of a message is available to be processed.
                 * @param messagePart   The message part
                 * @param last          <code>true</code> if this is the last part of
                 *                       this message, else <code>false</code>
                 */
                // @ts-ignore
                onMessage(messagePart: T, last: boolean): void
            }
        }
    }
}
