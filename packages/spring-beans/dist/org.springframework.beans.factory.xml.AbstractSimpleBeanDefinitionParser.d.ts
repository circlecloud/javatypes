declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Convenient base class for when there exists a one-to-one mapping
                     * between attribute names on the element that is to be parsed and
                     * the property names on the {@link Class} being configured.
                     * <p>Extend this parser class when you want to create a single
                     * bean definition from a relatively simple custom XML element. The
                     * resulting {@code BeanDefinition} will be automatically
                     * registered with the relevant
                     * {@link org.springframework.beans.factory.support.BeanDefinitionRegistry}.
                     * <p>An example will hopefully make the use of this particular parser
                     * class immediately clear. Consider the following class definition:
                     * <pre class="code">public class SimpleCache implements Cache {
                     * public void setName(String name) {...}
                     * public void setTimeout(int timeout) {...}
                     * public void setEvictionPolicy(EvictionPolicy policy) {...}
                     * // remaining class definition elided for clarity...
                     * }</pre>
                     * <p>Then let us assume the following XML tag has been defined to
                     * permit the easy configuration of instances of the above class;
                     * <pre class="code">&lt;caching:cache name="..." timeout="..." eviction-policy="..."/&gt;</pre>
                     * <p>All that is required of the Java developer tasked with writing
                     * the parser to parse the above XML tag into an actual
                     * {@code SimpleCache} bean definition is the following:
                     * <pre class="code">public class SimpleCacheBeanDefinitionParser extends AbstractSimpleBeanDefinitionParser {
                     * protected Class getBeanClass(Element element) {
                     * return SimpleCache.class;
                     * }
                     * }</pre>
                     * <p>Please note that the {@code AbstractSimpleBeanDefinitionParser}
                     * is limited to populating the created bean definition with property values.
                     * if you want to parse constructor arguments and nested elements from the
                     * supplied XML element, then you will have to implement the
                     * {@link #postProcess(org.springframework.beans.factory.support.BeanDefinitionBuilder, org.w3c.dom.Element)}
                     * method and do such parsing yourself, or (more likely) subclass the
                     * {@link AbstractSingleBeanDefinitionParser} or {@link AbstractBeanDefinitionParser}
                     * classes directly.
                     * <p>The process of actually registering the
                     * {@code SimpleCacheBeanDefinitionParser} with the Spring XML parsing
                     * infrastructure is described in the Spring Framework reference documentation
                     * (in one of the appendices).
                     * <p>For an example of this parser in action (so to speak), do look at
                     * the source code for the
                     * {@link org.springframework.beans.factory.xml.UtilNamespaceHandler.PropertiesBeanDefinitionParser};
                     * the observant (and even not so observant) reader will immediately notice that
                     * there is next to no code in the implementation. The
                     * {@code PropertiesBeanDefinitionParser} populates a
                     * {@link org.springframework.beans.factory.config.PropertiesFactoryBean}
                     * from an XML element that looks like this:
                     * <pre class="code">&lt;util:properties location="jdbc.properties"/&gt;</pre>
                     * <p>The observant reader will notice that the sole attribute on the
                     * {@code <util:properties/>} element matches the
                     * {@link org.springframework.beans.factory.config.PropertiesFactoryBean#setLocation(org.springframework.core.io.Resource)}
                     * method name on the {@code PropertiesFactoryBean} (the general
                     * usage thus illustrated holds true for any number of attributes).
                     * All that the {@code PropertiesBeanDefinitionParser} needs
                     * actually do is supply an implementation of the
                     * {@link #getBeanClass(org.w3c.dom.Element)} method to return the
                     * {@code PropertiesFactoryBean} type.
                     * @author Rob Harrop
                     * @author Rick Evans
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see Conventions#attributeNameToPropertyName(String)
                     */
                    // @ts-ignore
                    abstract class AbstractSimpleBeanDefinitionParser extends org.springframework.beans.factory.xml.AbstractSingleBeanDefinitionParser {
                        // @ts-ignore
                        constructor()
                        /**
                         * Parse the supplied {@link Element} and populate the supplied
                         * {@link BeanDefinitionBuilder} as required.
                         * <p>This implementation maps any attributes present on the
                         * supplied element to {@link org.springframework.beans.PropertyValue}
                         * instances, and
                         * {@link BeanDefinitionBuilder#addPropertyValue(String, Object) adds them}
                         * to the
                         * {@link org.springframework.beans.factory.config.BeanDefinition builder}.
                         * <p>The {@link #extractPropertyName(String)} method is used to
                         * reconcile the name of an attribute with the name of a JavaBean
                         * property.
                         * @param element the XML element being parsed
                         * @param builder used to define the {#code BeanDefinition}
                         * @see #extractPropertyName(String)
                         */
                        // @ts-ignore
                        doParse(element: org.w3c.dom.Element, parserContext: org.springframework.beans.factory.xml.ParserContext, builder: org.springframework.beans.factory.support.BeanDefinitionBuilder): void
                        /**
                         * Determine whether the given attribute is eligible for being
                         * turned into a corresponding bean property value.
                         * <p>The default implementation considers any attribute as eligible,
                         * except for the "id" attribute and namespace declaration attributes.
                         * @param attribute the XML attribute to check
                         * @param parserContext the {#code ParserContext}
                         * @see #isEligibleAttribute(String)
                         */
                        // @ts-ignore
                        isEligibleAttribute(attribute: org.w3c.dom.Attr, parserContext: org.springframework.beans.factory.xml.ParserContext): boolean
                        /**
                         * Determine whether the given attribute is eligible for being
                         * turned into a corresponding bean property value.
                         * <p>The default implementation considers any attribute as eligible,
                         * except for the "id" attribute.
                         * @param attributeName the attribute name taken straight from the
                         *  XML element being parsed (never {#code null})
                         */
                        // @ts-ignore
                        isEligibleAttribute(attributeName: java.lang.String | string): boolean
                        /**
                         * Extract a JavaBean property name from the supplied attribute name.
                         * <p>The default implementation uses the
                         * {@link Conventions#attributeNameToPropertyName(String)}
                         * method to perform the extraction.
                         * <p>The name returned must obey the standard JavaBean property name
                         * conventions. For example for a class with a setter method
                         * '{@code setBingoHallFavourite(String)}', the name returned had
                         * better be '{@code bingoHallFavourite}' (with that exact casing).
                         * @param attributeName the attribute name taken straight from the
                         *  XML element being parsed (never {#code null})
                         * @return the extracted JavaBean property name (must never be {#code null})
                         */
                        // @ts-ignore
                        extractPropertyName(attributeName: java.lang.String | string): string
                        /**
                         * Hook method that derived classes can implement to inspect/change a
                         * bean definition after parsing is complete.
                         * <p>The default implementation does nothing.
                         * @param beanDefinition the parsed (and probably totally defined) bean definition being built
                         * @param element the XML element that was the source of the bean definition's metadata
                         */
                        // @ts-ignore
                        postProcess(beanDefinition: org.springframework.beans.factory.support.BeanDefinitionBuilder, element: org.w3c.dom.Element): void
                    }
                }
            }
        }
    }
}
