declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * Representation of an alias that has been registered during the parsing process.
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see ReaderEventListener#aliasRegistered(AliasDefinition)
                     */
                    // @ts-ignore
                    class AliasDefinition extends java.lang.Object implements org.springframework.beans.BeanMetadataElement {
                        /**
                         * Create a new AliasDefinition.
                         * @param beanName the canonical name of the bean
                         * @param alias the alias registered for the bean
                         */
                        // @ts-ignore
                        constructor(beanName: string, alias: string)
                        /**
                         * Create a new AliasDefinition.
                         * @param beanName the canonical name of the bean
                         * @param alias the alias registered for the bean
                         * @param source the source object (may be {#code null})
                         */
                        // @ts-ignore
                        constructor(beanName: string, alias: string, source: any)
                        /**
                         * Return the canonical name of the bean.
                         */
                        // @ts-ignore
                        getBeanName(): java.lang.String
                        /**
                         * Return the alias registered for the bean.
                         */
                        // @ts-ignore
                        getAlias(): java.lang.String
                        // @ts-ignore
                        getSource(): java.lang.Object
                    }
                }
            }
        }
    }
}
