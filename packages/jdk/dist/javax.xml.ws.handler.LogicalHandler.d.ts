declare namespace javax {
    namespace xml {
        namespace ws {
            namespace handler {
                /**
                 * The <code>LogicalHandler</code> extends
                 * Handler to provide typesafety for the message context parameter.
                 * @since JAX-WS 2.0
                 */
                // @ts-ignore
                interface LogicalHandler<C extends javax.xml.ws.handler.LogicalMessageContext> extends javax.xml.ws.handler.Handler<C> {
                }
            }
        }
    }
}
