declare namespace javax {
    namespace xml {
        namespace ws {
            namespace handler {
                /**
                 * The <code>Handler</code> interface
                 * is the base interface for JAX-WS handlers.
                 * @since JAX-WS 2.0
                 */
                // @ts-ignore
                interface Handler<C extends javax.xml.ws.handler.MessageContext> {
                    /**
                     * The <code>handleMessage</code> method is invoked for normal processing
                     * of inbound and outbound messages. Refer to the description of the handler
                     * framework in the JAX-WS specification for full details.
                     * @param context the message context.
                     * @return An indication of whether handler processing should continue for
                     *   the current message
                     *                  <ul>
                     *                  <li>Return <code>true</code> to continue
                     *                      processing.</li>
                     *                  <li>Return <code>false</code> to block
                     *                      processing.</li>
                     *                   </ul>
                     * @throws RuntimeException Causes the JAX-WS runtime to cease
                     *     handler processing and generate a fault.
                     * @throws ProtocolException Causes the JAX-WS runtime to switch to
                     *     fault message processing.
                     */
                    // @ts-ignore
                    handleMessage(context: C): boolean
                    /**
                     * The <code>handleFault</code> method is invoked for fault message
                     * processing.  Refer to the description of the handler
                     * framework in the JAX-WS specification for full details.
                     * @param context the message context
                     * @return An indication of whether handler fault processing should continue
                     *   for the current message
                     *                  <ul>
                     *                  <li>Return <code>true</code> to continue
                     *                      processing.</li>
                     *                  <li>Return <code>false</code> to block
                     *                      processing.</li>
                     *                   </ul>
                     * @throws RuntimeException Causes the JAX-WS runtime to cease
                     *     handler fault processing and dispatch the fault.
                     * @throws ProtocolException Causes the JAX-WS runtime to cease
                     *     handler fault processing and dispatch the fault.
                     */
                    // @ts-ignore
                    handleFault(context: C): boolean
                    /**
                     * Called at the conclusion of a message exchange pattern just prior to
                     * the JAX-WS runtime dispatching a message, fault or exception.  Refer to
                     * the description of the handler
                     * framework in the JAX-WS specification for full details.
                     * @param context the message context
                     */
                    // @ts-ignore
                    close(context: javax.xml.ws.handler.MessageContext): void
                }
            }
        }
    }
}
