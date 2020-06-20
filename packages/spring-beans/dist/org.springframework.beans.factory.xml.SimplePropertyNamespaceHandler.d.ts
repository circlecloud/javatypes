declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Simple {@code NamespaceHandler} implementation that maps custom attributes
                     * directly through to bean properties. An important point to note is that this
                     * {@code NamespaceHandler} does not have a corresponding schema since there
                     * is no way to know in advance all possible attribute names.
                     * <p>An example of the usage of this {@code NamespaceHandler} is shown below:
                     * <pre class="code">
                     * &lt;bean id=&quot;rob&quot; class=&quot;..TestBean&quot; p:name=&quot;Rob Harrop&quot; p:spouse-ref=&quot;sally&quot;/&gt;</pre>
                     * Here the '{@code p:name}' corresponds directly to the '{@code name}'
                     * property on class '{@code TestBean}'. The '{@code p:spouse-ref}'
                     * attributes corresponds to the '{@code spouse}' property and, rather
                     * than being the concrete value, it contains the name of the bean that will
                     * be injected into that property.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    class SimplePropertyNamespaceHandler extends java.lang.Object implements org.springframework.beans.factory.xml.NamespaceHandler {
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
