declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace config {
                    /**
                     * {@link BeanDefinitionParser} to parse {@code db-factory} elements into {@link BeanDefinition}s.
                     * @author Jon Brisbin
                     * @author Oliver Gierke
                     * @author Thomas Darimont
                     * @author Christoph Strobl
                     * @author Viktor Khoroshko
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    class MongoDbFactoryParser extends AbstractBeanDefinitionParser {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        resolveId(element: org.w3c.dom.Element, definition: AbstractBeanDefinition, parserContext: ParserContext): string
                        // @ts-ignore
                        parseInternal(element: org.w3c.dom.Element, parserContext: ParserContext): AbstractBeanDefinition
                    }
                }
            }
        }
    }
}
