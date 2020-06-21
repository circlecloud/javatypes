declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace annotation {
                    /**
                     * A {@link DeferredImportSelector} implementation with the lowest order to import a
                     * {@link RabbitBootstrapConfiguration} as late as possible.
                     * @author Artem Bilan
                     * @since 2.1.6
                     */
                    // @ts-ignore
                    class RabbitListenerConfigurationSelector extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public selectImports(importingClassMetadata: AnnotationMetadata): string[]
                    }
                }
            }
        }
    }
}
