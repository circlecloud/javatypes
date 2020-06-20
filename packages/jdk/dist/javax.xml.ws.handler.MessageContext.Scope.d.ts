declare namespace javax {
    namespace xml {
        namespace ws {
            namespace handler {
                namespace MessageContext {
                    /**
                     * Property scope. Properties scoped as <code>APPLICATION</code> are
                     * visible to handlers,
                     * client applications and service endpoints; properties scoped as
                     * <code>HANDLER</code>
                     * are only normally visible to handlers.
                     */
                    // @ts-ignore
                    class Scope extends java.lang.Enum<javax.xml.ws.handler.MessageContext.Scope> {
                        // @ts-ignore
                        values(): javax.xml.ws.handler.MessageContext.Scope[]
                        // @ts-ignore
                        valueOf(name: string): javax.xml.ws.handler.MessageContext.Scope
                    }
                }
            }
        }
    }
}
