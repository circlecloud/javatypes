declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * Interface that receives callbacks for component, alias and import
                     * registrations during a bean definition reading process.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see ReaderContext
                     */
                    // @ts-ignore
                    interface ReaderEventListener extends java.util.EventListener {
                        /**
                         * Notification that the given defaults has been registered.
                         * @param defaultsDefinition a descriptor for the defaults
                         * @see org.springframework.beans.factory.xml.DocumentDefaultsDefinition
                         */
                        // @ts-ignore
                        defaultsRegistered(defaultsDefinition: org.springframework.beans.factory.parsing.DefaultsDefinition): void
                        /**
                         * Notification that the given component has been registered.
                         * @param componentDefinition a descriptor for the new component
                         * @see BeanComponentDefinition
                         */
                        // @ts-ignore
                        componentRegistered(componentDefinition: org.springframework.beans.factory.parsing.ComponentDefinition): void
                        /**
                         * Notification that the given alias has been registered.
                         * @param aliasDefinition a descriptor for the new alias
                         */
                        // @ts-ignore
                        aliasRegistered(aliasDefinition: org.springframework.beans.factory.parsing.AliasDefinition): void
                        /**
                         * Notification that the given import has been processed.
                         * @param importDefinition a descriptor for the import
                         */
                        // @ts-ignore
                        importProcessed(importDefinition: org.springframework.beans.factory.parsing.ImportDefinition): void
                    }
                }
            }
        }
    }
}
