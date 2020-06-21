declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Abstract {@link BeanDefinitionParser} implementation providing
                     * a number of convenience methods and a
                     * {@link AbstractBeanDefinitionParser#parseInternal template method}
                     * that subclasses must override to provide the actual parsing logic.
                     * <p>Use this {@link BeanDefinitionParser} implementation when you want
                     * to parse some arbitrarily complex XML into one or more
                     * {@link BeanDefinition BeanDefinitions}. If you just want to parse some
                     * XML into a single {@code BeanDefinition}, you may wish to consider
                     * the simpler convenience extensions of this class, namely
                     * {@link AbstractSingleBeanDefinitionParser} and
                     * {@link AbstractSimpleBeanDefinitionParser}.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @author Rick Evans
                     * @author Dave Syer
                     * @since 2.0
                     */
                    // @ts-ignore
                    abstract class AbstractBeanDefinitionParser extends java.lang.Object implements org.springframework.beans.factory.xml.BeanDefinitionParser {
                        // @ts-ignore
                        constructor()
                        /**
                         * Constant for the "id" attribute.
                         */
                        // @ts-ignore
                        public static readonly ID_ATTRIBUTE: java.lang.String | string
                        /**
                         * Constant for the "name" attribute.
                         */
                        // @ts-ignore
                        public static readonly NAME_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public parse(element: org.w3c.dom.Element, parserContext: org.springframework.beans.factory.xml.ParserContext): org.springframework.beans.factory.config.BeanDefinition
                        /**
                         * Resolve the ID for the supplied {@link BeanDefinition}.
                         * <p>When using {@link #shouldGenerateId generation}, a name is generated automatically.
                         * Otherwise, the ID is extracted from the "id" attribute, potentially with a
                         * {@link #shouldGenerateIdAsFallback() fallback} to a generated id.
                         * @param element the element that the bean definition has been built from
                         * @param definition the bean definition to be registered
                         * @param parserContext the object encapsulating the current state of the parsing process;
                         *  provides access to a {#link org.springframework.beans.factory.support.BeanDefinitionRegistry}
                         * @return the resolved id
                         * @throws BeanDefinitionStoreException if no unique name could be generated
                         *  for the given bean definition
                         */
                        // @ts-ignore
                        resolveId(element: org.w3c.dom.Element, definition: org.springframework.beans.factory.support.AbstractBeanDefinition, parserContext: org.springframework.beans.factory.xml.ParserContext): string
                        /**
                         * Register the supplied {@link BeanDefinitionHolder bean} with the supplied
                         * {@link BeanDefinitionRegistry registry}.
                         * <p>Subclasses can override this method to control whether or not the supplied
                         * {@link BeanDefinitionHolder bean} is actually even registered, or to
                         * register even more beans.
                         * <p>The default implementation registers the supplied {@link BeanDefinitionHolder bean}
                         * with the supplied {@link BeanDefinitionRegistry registry} only if the {@code isNested}
                         * parameter is {@code false}, because one typically does not want inner beans
                         * to be registered as top level beans.
                         * @param definition the bean definition to be registered
                         * @param registry the registry that the bean is to be registered with
                         * @see BeanDefinitionReaderUtils#registerBeanDefinition(BeanDefinitionHolder, BeanDefinitionRegistry)
                         */
                        // @ts-ignore
                        registerBeanDefinition(definition: org.springframework.beans.factory.config.BeanDefinitionHolder, registry: org.springframework.beans.factory.support.BeanDefinitionRegistry): void
                        /**
                         * Central template method to actually parse the supplied {@link Element}
                         * into one or more {@link BeanDefinition BeanDefinitions}.
                         * @param element the element that is to be parsed into one or more {#link BeanDefinition BeanDefinitions}
                         * @param parserContext the object encapsulating the current state of the parsing process;
                         *  provides access to a {#link org.springframework.beans.factory.support.BeanDefinitionRegistry}
                         * @return the primary {#link BeanDefinition} resulting from the parsing of the supplied {@link Element}
                         * @see #parse(org.w3c.dom.Element, ParserContext)
                         * @see #postProcessComponentDefinition(org.springframework.beans.factory.parsing.BeanComponentDefinition)
                         */
                        // @ts-ignore
                        abstract parseInternal(element: org.w3c.dom.Element, parserContext: org.springframework.beans.factory.xml.ParserContext): org.springframework.beans.factory.support.AbstractBeanDefinition
                        /**
                         * Should an ID be generated instead of read from the passed in {@link Element}?
                         * <p>Disabled by default; subclasses can override this to enable ID generation.
                         * Note that this flag is about <i>always</i> generating an ID; the parser
                         * won't even check for an "id" attribute in this case.
                         * @return whether the parser should always generate an id
                         */
                        // @ts-ignore
                        shouldGenerateId(): boolean
                        /**
                         * Should an ID be generated instead if the passed in {@link Element} does not
                         * specify an "id" attribute explicitly?
                         * <p>Disabled by default; subclasses can override this to enable ID generation
                         * as fallback: The parser will first check for an "id" attribute in this case,
                         * only falling back to a generated ID if no value was specified.
                         * @return whether the parser should generate an id if no id was specified
                         */
                        // @ts-ignore
                        shouldGenerateIdAsFallback(): boolean
                        /**
                         * Determine whether the element's "name" attribute should get parsed as
                         * bean definition aliases, i.e. alternative bean definition names.
                         * <p>The default implementation returns {@code true}.
                         * @return whether the parser should evaluate the "name" attribute as aliases
                         * @since 4.1.5
                         */
                        // @ts-ignore
                        shouldParseNameAsAliases(): boolean
                        /**
                         * Determine whether this parser is supposed to fire a
                         * {@link org.springframework.beans.factory.parsing.BeanComponentDefinition}
                         * event after parsing the bean definition.
                         * <p>This implementation returns {@code true} by default; that is,
                         * an event will be fired when a bean definition has been completely parsed.
                         * Override this to return {@code false} in order to suppress the event.
                         * @return {#code true} in order to fire a component registration event
                         *  after parsing the bean definition; {@code false} to suppress the event
                         * @see #postProcessComponentDefinition
                         * @see org.springframework.beans.factory.parsing.ReaderContext#fireComponentRegistered
                         */
                        // @ts-ignore
                        shouldFireEvents(): boolean
                        /**
                         * Hook method called after the primary parsing of a
                         * {@link BeanComponentDefinition} but before the
                         * {@link BeanComponentDefinition} has been registered with a
                         * {@link org.springframework.beans.factory.support.BeanDefinitionRegistry}.
                         * <p>Derived classes can override this method to supply any custom logic that
                         * is to be executed after all the parsing is finished.
                         * <p>The default implementation is a no-op.
                         * @param componentDefinition the {#link BeanComponentDefinition} that is to be processed
                         */
                        // @ts-ignore
                        postProcessComponentDefinition(componentDefinition: org.springframework.beans.factory.parsing.BeanComponentDefinition): void
                    }
                }
            }
        }
    }
}
