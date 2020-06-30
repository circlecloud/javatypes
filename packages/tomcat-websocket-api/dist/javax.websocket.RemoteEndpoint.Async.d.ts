declare namespace javax {
    namespace websocket {
        namespace RemoteEndpoint {
            // @ts-ignore
            interface Async extends javax.websocket.RemoteEndpoint {
                /**
                 * Obtain the timeout (in milliseconds) for sending a message
                 * asynchronously. The default value is determined by
                 * {@link WebSocketContainer#getDefaultAsyncSendTimeout()}.
                 * @return The current send timeout in milliseconds. A non-positive
                 *           value means an infinite timeout.
                 */
                // @ts-ignore
                getSendTimeout(): number /*long*/
                /**
                 * Set the timeout (in milliseconds) for sending a message
                 * asynchronously. The default value is determined by
                 * {@link WebSocketContainer#getDefaultAsyncSendTimeout()}.
                 * @param timeout   The new timeout for sending messages asynchronously
                 *                   in milliseconds. A non-positive value means an
                 *                   infinite timeout.
                 */
                // @ts-ignore
                setSendTimeout(timeout: number /*long*/): void
                /**
                 * Send the message asynchronously, using the SendHandler to signal to the
                 * client when the message has been sent.
                 * @param text          The text message to send
                 * @param completion    Used to signal to the client when the message has
                 *                       been sent
                 */
                // @ts-ignore
                sendText(text: java.lang.String | string, completion: javax.websocket.SendHandler): void
                /**
                 * Send the message asynchronously, using the Future to signal to the
                 * client when the message has been sent.
                 * @param text          The text message to send
                 * @return A Future that signals when the message has been sent.
                 */
                // @ts-ignore
                sendText(text: java.lang.String | string): java.util.concurrent.Future<java.lang.Void>
                /**
                 * Send the message asynchronously, using the Future to signal to the client
                 * when the message has been sent.
                 * @param data          The text message to send
                 * @return A Future that signals when the message has been sent.
                 * @throws IllegalArgumentException if {#code data} is {@code null}.
                 */
                // @ts-ignore
                sendBinary(data: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Void>
                /**
                 * Send the message asynchronously, using the SendHandler to signal to the
                 * client when the message has been sent.
                 * @param data          The text message to send
                 * @param completion    Used to signal to the client when the message has
                 *                       been sent
                 * @throws IllegalArgumentException if {#code data} or {@code completion}
                 *                       is {@code null}.
                 */
                // @ts-ignore
                sendBinary(data: java.nio.ByteBuffer, completion: javax.websocket.SendHandler): void
                /**
                 * Encodes object as a message and sends it asynchronously, using the
                 * Future to signal to the client when the message has been sent.
                 * @param obj           The object to be sent.
                 * @return A Future that signals when the message has been sent.
                 * @throws IllegalArgumentException if {#code obj} is {@code null}.
                 */
                // @ts-ignore
                sendObject(obj: java.lang.Object | any): java.util.concurrent.Future<java.lang.Void>
                /**
                 * Encodes object as a message and sends it asynchronously, using the
                 * SendHandler to signal to the client when the message has been sent.
                 * @param obj           The object to be sent.
                 * @param completion    Used to signal to the client when the message has
                 *                       been sent
                 * @throws IllegalArgumentException if {#code obj} or
                 *                       {@code completion} is {@code null}.
                 */
                // @ts-ignore
                sendObject(obj: java.lang.Object | any, completion: javax.websocket.SendHandler): void
            }
        }
    }
}
