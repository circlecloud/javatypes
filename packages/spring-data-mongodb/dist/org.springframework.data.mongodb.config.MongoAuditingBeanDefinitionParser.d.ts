declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace config {
                    /**
                     * {@link BeanDefinitionParser} to register a {@link AuditingEventListener} to transparently set auditing information on
                     * an entity.
                     * @author Oliver Gierke
                     */
                    // @ts-ignore
                    class MongoAuditingBeanDefinitionParser extends AbstractSingleBeanDefinitionParser {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        getBeanClass(element: org.w3c.dom.Element): java.lang.Class<any>
                        // @ts-ignore
                        shouldGenerateId(): boolean
                        // @ts-ignore
                        doParse(element: org.w3c.dom.Element, parserContext: ParserContext, builder: BeanDefinitionBuilder): void
                    }
                }
            }
        }
    }
}
