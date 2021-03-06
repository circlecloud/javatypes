declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * Empty implementation of the {@link ReaderEventListener} interface,
                     * providing no-op implementations of all callback methods.
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    class EmptyReaderEventListener extends java.lang.Object implements org.springframework.beans.factory.parsing.ReaderEventListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public defaultsRegistered(defaultsDefinition: org.springframework.beans.factory.parsing.DefaultsDefinition): void
                        // @ts-ignore
                        public componentRegistered(componentDefinition: org.springframework.beans.factory.parsing.ComponentDefinition): void
                        // @ts-ignore
                        public aliasRegistered(aliasDefinition: org.springframework.beans.factory.parsing.AliasDefinition): void
                        // @ts-ignore
                        public importProcessed(importDefinition: org.springframework.beans.factory.parsing.ImportDefinition): void
                    }
                }
            }
        }
    }
}
