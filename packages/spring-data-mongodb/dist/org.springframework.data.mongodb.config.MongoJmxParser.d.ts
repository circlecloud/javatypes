declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace config {
                    /**
                     * @author Mark Pollack
                     * @author Thomas Risberg
                     * @author John Brisbin
                     * @author Oliver Gierke
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    class MongoJmxParser extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public parse(element: org.w3c.dom.Element, parserContext: ParserContext): BeanDefinition
                        // @ts-ignore
                        registerJmxComponents(mongoRefName: java.lang.String | string, element: org.w3c.dom.Element, parserContext: ParserContext): void
                        // @ts-ignore
                        createBeanDefEntry(clazz: java.lang.Class<any>, compositeDef: CompositeComponentDefinition, mongoRefName: java.lang.String | string, eleSource: java.lang.Object | any, parserContext: ParserContext): void
                    }
                }
            }
        }
    }
}
