declare namespace javax {
    namespace xml {
        namespace ws {
            namespace handler {
                /**
                 * The <code>LogicalMessageContext</code> interface extends
                 * <code>MessageContext</code> to
                 * provide access to a the contained message as a protocol neutral
                 * LogicalMessage
                 * @since JAX-WS 2.0
                 */
                // @ts-ignore
                interface LogicalMessageContext extends javax.xml.ws.handler.MessageContext {
                    /**
                     * Gets the message from this message context
                     * @return The contained message; returns <code>null</code> if no
                     *           message is present in this message context
                     */
                    // @ts-ignore
                    getMessage(): javax.xml.ws.LogicalMessage
                }
            }
        }
    }
}
