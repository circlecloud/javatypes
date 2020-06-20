declare namespace org {
    namespace springframework {
        namespace context {
            namespace expression {
                /**
                 * Read-only EL property accessor that knows how to retrieve keys
                 * of a Spring {@link Environment} instance.
                 * @author Chris Beams
                 * @since 3.1
                 */
                // @ts-ignore
                class EnvironmentAccessor extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getSpecificTargetClasses(): java.lang.Class[]
                    /**
                     * Can read any {@link Environment}, thus always returns true.
                     * @return true
                     */
                    // @ts-ignore
                    canRead(context: EvaluationContext, target: any, name: string): boolean
                    /**
                     * Access the given target object by resolving the given property name against the given target
                     * environment.
                     */
                    // @ts-ignore
                    read(context: EvaluationContext, target: any, name: string): TypedValue
                    /**
                     * Read-only: returns {@code false}.
                     */
                    // @ts-ignore
                    canWrite(context: EvaluationContext, target: any, name: string): boolean
                    /**
                     * Read-only: no-op.
                     */
                    // @ts-ignore
                    write(context: EvaluationContext, target: any, name: string, newValue: any): void
                }
            }
        }
    }
}
