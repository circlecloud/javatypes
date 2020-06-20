declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Convenience extension of {@link DefaultListableBeanFactory} that reads bean definitions
                     * from an XML document. Delegates to {@link XmlBeanDefinitionReader} underneath; effectively
                     * equivalent to using an XmlBeanDefinitionReader with a DefaultListableBeanFactory.
                     * <p>The structure, element and attribute names of the required XML document
                     * are hard-coded in this class. (Of course a transform could be run if necessary
                     * to produce this format). "beans" doesn't need to be the root element of the XML
                     * document: This class will parse all bean definition elements in the XML file.
                     * <p>This class registers each bean definition with the {@link DefaultListableBeanFactory}
                     * superclass, and relies on the latter's implementation of the {@link BeanFactory} interface.
                     * It supports singletons, prototypes, and references to either of these kinds of bean.
                     * See {@code "spring-beans-3.x.xsd"} (or historically, {@code "spring-beans-2.0.dtd"}) for
                     * details on options and configuration style.
                     * <p><b>For advanced needs, consider using a {@link DefaultListableBeanFactory} with
                     * an {@link XmlBeanDefinitionReader}.</b> The latter allows for reading from multiple XML
                     * resources and is highly configurable in its actual XML parsing behavior.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @author Chris Beams
                     * @since 15 April 2001
                     * @see org.springframework.beans.factory.support.DefaultListableBeanFactory
                     * @see XmlBeanDefinitionReader
                     * @deprecated as of Spring 3.1 in favor of {#link DefaultListableBeanFactory} and
                     *  {@link XmlBeanDefinitionReader}
                     */
                    // @ts-ignore
                    class XmlBeanFactory extends org.springframework.beans.factory.support.DefaultListableBeanFactory {
                        /**
                         * Create a new XmlBeanFactory with the given resource,
                         * which must be parsable using DOM.
                         * @param resource the XML resource to load bean definitions from
                         * @throws BeansException in case of loading or parsing errors
                         */
                        // @ts-ignore
                        constructor(resource: Resource)
                        /**
                         * Create a new XmlBeanFactory with the given input stream,
                         * which must be parsable using DOM.
                         * @param resource the XML resource to load bean definitions from
                         * @param parentBeanFactory parent bean factory
                         * @throws BeansException in case of loading or parsing errors
                         */
                        // @ts-ignore
                        constructor(resource: Resource, parentBeanFactory: org.springframework.beans.factory.BeanFactory)
                    }
                }
            }
        }
    }
}
