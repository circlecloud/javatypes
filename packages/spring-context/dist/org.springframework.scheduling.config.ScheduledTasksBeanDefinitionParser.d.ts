declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace config {
                /**
                 * Parser for the 'scheduled-tasks' element of the scheduling namespace.
                 * @author Mark Fisher
                 * @author Chris Beams
                 * @since 3.0
                 */
                // @ts-ignore
                class ScheduledTasksBeanDefinitionParser extends AbstractSingleBeanDefinitionParser {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    shouldGenerateId(): boolean
                    // @ts-ignore
                    getBeanClassName(element: org.w3c.dom.Element): java.lang.String
                    // @ts-ignore
                    doParse(element: org.w3c.dom.Element, parserContext: ParserContext, builder: BeanDefinitionBuilder): void
                }
            }
        }
    }
}
