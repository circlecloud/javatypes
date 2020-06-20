declare namespace org {
    namespace springframework {
        namespace context {
            namespace expression {
                /**
                 * EL property accessor that knows how to traverse the beans of a
                 * Spring {@link org.springframework.beans.factory.BeanFactory}.
                 * @author Juergen Hoeller
                 * @author Andy Clement
                 * @since 3.0
                 */
                // @ts-ignore
                class BeanFactoryAccessor extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getSpecificTargetClasses(): java.lang.Class[]
                    // @ts-ignore
                    canRead(context: EvaluationContext, target: any, name: string): boolean
                    // @ts-ignore
                    read(context: EvaluationContext, target: any, name: string): TypedValue
                    // @ts-ignore
                    canWrite(context: EvaluationContext, target: any, name: string): boolean
                    // @ts-ignore
                    write(context: EvaluationContext, target: any, name: string, newValue: any): void
                }
            }
        }
    }
}
