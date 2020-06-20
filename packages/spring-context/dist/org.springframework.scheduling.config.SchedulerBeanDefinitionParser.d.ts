declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace config {
                /**
                 * Parser for the 'scheduler' element of the 'task' namespace.
                 * @author Mark Fisher
                 * @since 3.0
                 */
                // @ts-ignore
                class SchedulerBeanDefinitionParser extends AbstractSingleBeanDefinitionParser {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getBeanClassName(element: org.w3c.dom.Element): java.lang.String
                    // @ts-ignore
                    doParse(element: org.w3c.dom.Element, builder: BeanDefinitionBuilder): void
                }
            }
        }
    }
}
