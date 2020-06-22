declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace config {
                    /**
                     * Bean definition parser for the {@code mapping-converter} element.
                     * @author Jon Brisbin
                     * @author Oliver Gierke
                     * @author Maciej Walkowiak
                     * @author Thomas Darimont
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @author Zied Yaich
                     */
                    // @ts-ignore
                    class MappingMongoConverterParser extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public parse(element: org.w3c.dom.Element, parserContext: ParserContext): BeanDefinition
                        // @ts-ignore
                        public static potentiallyCreateMappingContext(element: org.w3c.dom.Element, parserContext: ParserContext, conversionsDefinition: BeanDefinition, converterId: java.lang.String | string): string
                        // @ts-ignore
                        public parseConverter(element: org.w3c.dom.Element, parserContext: ParserContext): BeanMetadataElement
                        // @ts-ignore
                        public static createIsNewStrategyFactoryBeanDefinition(mappingContextRef: java.lang.String | string, context: ParserContext, element: org.w3c.dom.Element): string
                    }
                }
            }
        }
    }
}
