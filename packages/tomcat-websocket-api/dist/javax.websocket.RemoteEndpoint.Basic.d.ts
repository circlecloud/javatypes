declare namespace javax {
    namespace websocket {
        namespace RemoteEndpoint {
            // @ts-ignore
            interface Basic extends javax.websocket.RemoteEndpoint {
                /**
                 * Send the message, blocking until the message is sent.
                 * @param text  The text message to send.
                 * @throws IllegalArgumentException if {#code text} is {@code null}.
                 * @throws IOException if an I/O error occurs during the sending of the
                 *                      message.
                 */
                // @ts-ignore
                sendText(text: java.lang.String | string): void
                /**
                 * Send the message, blocking until the message is sent.
                 * @param data  The binary message to send
                 * @throws IllegalArgumentException if {#code data} is {@code null}.
                 * @throws IOException if an I/O error occurs during the sending of the
                 *                      message.
                 */
                // @ts-ignore
                sendBinary(data: java.nio.ByteBuffer): void
                /**
                 * Sends part of a text message to the remote endpoint. Once the first part
                 * of a message has been sent, no other text or binary messages may be sent
                 * until all remaining parts of this message have been sent.
                 * @param fragment  The partial message to send
                 * @param isLast    <code>true</code> if this is the last part of the
                 *                   message, otherwise <code>false</code>
                 * @throws IllegalArgumentException if {#code fragment} is {@code null}.
                 * @throws IOException if an I/O error occurs during the sending of the
                 *                      message.
                 */
                // @ts-ignore
                sendText(fragment: java.lang.String | string, isLast: boolean): void
                /**
                 * Sends part of a binary message to the remote endpoint. Once the first
                 * part of a message has been sent, no other text or binary messages may be
                 * sent until all remaining parts of this message have been sent.
                 * @param partialByte   The partial message to send
                 * @param isLast        <code>true</code> if this is the last part of the
                 *                       message, otherwise <code>false</code>
                 * @throws IllegalArgumentException if {#code partialByte} is
                 *                      {@code null}.
                 * @throws IOException if an I/O error occurs during the sending of the
                 *                      message.
                 */
                // @ts-ignore
                sendBinary(partialByte: java.nio.ByteBuffer, isLast: boolean): void
                // @ts-ignore
                getSendStream(): java.io.OutputStream
                // @ts-ignore
                getSendWriter(): java.io.Writer
                /**
                 * Encodes object as a message and sends it to the remote endpoint.
                 * @param data  The object to be sent.
                 * @throws EncodeException if there was a problem encoding the
                 *                      {#code data} object as a websocket message.
                 * @throws IllegalArgumentException if {#code data} is {@code null}.
                 * @throws IOException if an I/O error occurs during the sending of the
                 *                      message.
                 */
                // @ts-ignore
                sendObject(data: java.lang.Object | any): void
            }
        }
    }
}
