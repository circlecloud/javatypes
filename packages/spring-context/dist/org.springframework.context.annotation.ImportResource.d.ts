declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Indicates one or more resources containing bean definitions to import.
                 * <p>Like {@link Import @Import}, this annotation provides functionality similar to
                 * the {@code <import/>} element in Spring XML. It is typically used when designing
                 * {@link Configuration @Configuration} classes to be bootstrapped by an
                 * {@link AnnotationConfigApplicationContext}, but where some XML functionality such
                 * as namespaces is still necessary.
                 * <p>By default, arguments to the {@link #value} attribute will be processed using a
                 * {@link org.springframework.beans.factory.groovy.GroovyBeanDefinitionReader GroovyBeanDefinitionReader}
                 * if ending in {@code ".groovy"}; otherwise, an
                 * {@link org.springframework.beans.factory.xml.XmlBeanDefinitionReader XmlBeanDefinitionReader}
                 * will be used to parse Spring {@code <beans/>} XML files. Optionally, the {@link #reader}
                 * attribute may be declared, allowing the user to choose a custom {@link BeanDefinitionReader}
                 * implementation.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 3.0
                 * @see Configuration
                 * @see Import
                 */
                // @ts-ignore
                class ImportResource implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
