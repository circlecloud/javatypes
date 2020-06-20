declare namespace javax {
    namespace xml {
        namespace ws {
            namespace handler {
                namespace soap {
                    /**
                     * The <code>SOAPHandler</code> class extends <code>Handler</code>
                     * to provide typesafety for the message context parameter and add a method
                     * to obtain access to the headers that may be processed by the handler.
                     * @since JAX-WS 2.0
                     */
                    // @ts-ignore
                    interface SOAPHandler<T extends javax.xml.ws.handler.soap.SOAPMessageContext> extends javax.xml.ws.handler.Handler<T> {
                        /**
                         * Gets the header blocks that can be processed by this Handler
                         * instance.
                         * @return Set of <code>QNames</code> of header blocks processed by this
                         *            handler instance. <code>QName</code> is the qualified
                         *            name of the outermost element of the Header block.
                         */
                        // @ts-ignore
                        getHeaders(): java.util.Set<javax.xml.namespace.QName>
                    }
                }
            }
        }
    }
}
