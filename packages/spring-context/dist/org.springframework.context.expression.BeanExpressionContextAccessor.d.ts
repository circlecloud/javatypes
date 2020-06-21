declare namespace org {
    namespace springframework {
        namespace context {
            namespace expression {
                /**
                 * EL property accessor that knows how to traverse the beans and contextual objects
                 * of a Spring {@link org.springframework.beans.factory.config.BeanExpressionContext}.
                 * @author Juergen Hoeller
                 * @author Andy Clement
                 * @since 3.0
                 */
                // @ts-ignore
                class BeanExpressionContextAccessor extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public canRead(context: EvaluationContext, target: java.lang.Object | any, name: java.lang.String | string): boolean
                    // @ts-ignore
                    public read(context: EvaluationContext, target: java.lang.Object | any, name: java.lang.String | string): TypedValue
                    // @ts-ignore
                    public canWrite(context: EvaluationContext, target: java.lang.Object | any, name: java.lang.String | string): boolean
                    // @ts-ignore
                    public write(context: EvaluationContext, target: java.lang.Object | any, name: java.lang.String | string, newValue: java.lang.Object | any): void
                    // @ts-ignore
                    public getSpecificTargetClasses(): java.lang.Class<any>[]
                }
            }
        }
    }
}
