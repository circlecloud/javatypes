declare namespace org {
    namespace springframework {
        namespace context {
            namespace expression {
                /**
                 * EL property accessor that knows how to traverse the keys
                 * of a standard {@link java.util.Map}.
                 * @author Juergen Hoeller
                 * @author Andy Clement
                 * @since 3.0
                 */
                // @ts-ignore
                class MapAccessor extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getSpecificTargetClasses(): java.lang.Class<any>[]
                    // @ts-ignore
                    public canRead(context: EvaluationContext, target: java.lang.Object | any, name: java.lang.String | string): boolean
                    // @ts-ignore
                    public read(context: EvaluationContext, target: java.lang.Object | any, name: java.lang.String | string): TypedValue
                    // @ts-ignore
                    public canWrite(context: EvaluationContext, target: java.lang.Object | any, name: java.lang.String | string): boolean
                    // @ts-ignore
                    public write(context: EvaluationContext, target: java.lang.Object | any, name: java.lang.String | string, newValue: java.lang.Object | any): void
                    // @ts-ignore
                    public isCompilable(): boolean
                    // @ts-ignore
                    public getPropertyType(): java.lang.Class<any>
                    // @ts-ignore
                    public generateCode(propertyName: java.lang.String | string, mv: MethodVisitor, cf: CodeFlow): void
                }
            }
        }
    }
}
