declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace config {
                /**
                 * Parser for the 'executor' element of the 'task' namespace.
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class ExecutorBeanDefinitionParser extends AbstractSingleBeanDefinitionParser {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getBeanClassName(element: org.w3c.dom.Element): string
                    // @ts-ignore
                    doParse(element: org.w3c.dom.Element, parserContext: ParserContext, builder: BeanDefinitionBuilder): void
                }
            }
        }
    }
}
