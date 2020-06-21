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
                        constructor(beanName: java.lang.String | string, alias: java.lang.String | string)
                        /**
                         * Create a new AliasDefinition.
                         * @param beanName the canonical name of the bean
                         * @param alias the alias registered for the bean
                         * @param source the source object (may be {#code null})
                         */
                        // @ts-ignore
                        constructor(beanName: java.lang.String | string, alias: java.lang.String | string, source: java.lang.Object | any)
                        /**
                         * Return the canonical name of the bean.
                         */
                        // @ts-ignore
                        public getBeanName(): string
                        /**
                         * Return the alias registered for the bean.
                         */
                        // @ts-ignore
                        public getAlias(): string
                        // @ts-ignore
                        public getSource(): any
                    }
                }
            }
        }
    }
}
