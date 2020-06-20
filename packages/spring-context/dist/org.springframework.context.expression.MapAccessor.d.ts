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
                    getSpecificTargetClasses(): java.lang.Class[]
                    // @ts-ignore
                    canRead(context: EvaluationContext, target: any, name: string): boolean
                    // @ts-ignore
                    read(context: EvaluationContext, target: any, name: string): TypedValue
                    // @ts-ignore
                    canWrite(context: EvaluationContext, target: any, name: string): boolean
                    // @ts-ignore
                    write(context: EvaluationContext, target: any, name: string, newValue: any): void
                    // @ts-ignore
                    isCompilable(): boolean
                    // @ts-ignore
                    getPropertyType(): java.lang.Class<?>
                    // @ts-ignore
                    generateCode(propertyName: string, mv: MethodVisitor, cf: CodeFlow): void
                }
            }
        }
    }
}
