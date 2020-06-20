declare namespace org {
    namespace springframework {
        namespace context {
            namespace expression {
                /**
                 * EL bean resolver that operates against a Spring
                 * {@link org.springframework.beans.factory.BeanFactory}.
                 * @author Juergen Hoeller
                 * @since 3.0.4
                 */
                // @ts-ignore
                class BeanFactoryResolver extends java.lang.Object {
                    /**
                     * Create a new {@link BeanFactoryResolver} for the given factory.
                     * @param beanFactory the {#link BeanFactory} to resolve bean names against
                     */
                    // @ts-ignore
                    constructor(beanFactory: BeanFactory)
                    // @ts-ignore
                    resolve(context: EvaluationContext, beanName: string): java.lang.Object
                }
            }
        }
    }
}
