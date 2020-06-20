declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Simple {@code NamespaceHandler} implementation that maps custom
                     * attributes directly through to bean properties. An important point to note is
                     * that this {@code NamespaceHandler} does not have a corresponding schema
                     * since there is no way to know in advance all possible attribute names.
                     * <p>An example of the usage of this {@code NamespaceHandler} is shown below:
                     * <pre class="code">
                     * &lt;bean id=&quot;author&quot; class=&quot;..TestBean&quot; c:name=&quot;Enescu&quot; c:work-ref=&quot;compositions&quot;/&gt;
                     * </pre>
                     * Here the '{@code c:name}' corresponds directly to the '{@code name}
                     * ' argument declared on the constructor of class '{@code TestBean}'. The
                     * '{@code c:work-ref}' attributes corresponds to the '{@code work}'
                     * argument and, rather than being the concrete value, it contains the name of
                     * the bean that will be considered as a parameter.
                     * <b>Note</b>: This implementation supports only named parameters - there is no
                     * support for indexes or types. Further more, the names are used as hints by
                     * the container which, by default, does type introspection.
                     * @author Costin Leau
                     * @since 3.1
                     * @see SimplePropertyNamespaceHandler
                     */
                    // @ts-ignore
                    class SimpleConstructorNamespaceHandler extends java.lang.Object implements org.springframework.beans.factory.xml.NamespaceHandler {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        init(): void
                        // @ts-ignore
                        parse(element: org.w3c.dom.Element, parserContext: org.springframework.beans.factory.xml.ParserContext): org.springframework.beans.factory.config.BeanDefinition
                        // @ts-ignore
                        decorate(node: org.w3c.dom.Node, definition: org.springframework.beans.factory.config.BeanDefinitionHolder, parserContext: org.springframework.beans.factory.xml.ParserContext): org.springframework.beans.factory.config.BeanDefinitionHolder
                    }
                }
            }
        }
    }
}
