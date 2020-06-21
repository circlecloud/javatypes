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
                    public getSpecificTargetClasses(): java.lang.Class<any>[]
                    /**
                     * Can read any {@link Environment}, thus always returns true.
                     * @return true
                     */
                    // @ts-ignore
                    public canRead(context: EvaluationContext, target: java.lang.Object | any, name: java.lang.String | string): boolean
                    /**
                     * Access the given target object by resolving the given property name against the given target
                     * environment.
                     */
                    // @ts-ignore
                    public read(context: EvaluationContext, target: java.lang.Object | any, name: java.lang.String | string): TypedValue
                    /**
                     * Read-only: returns {@code false}.
                     */
                    // @ts-ignore
                    public canWrite(context: EvaluationContext, target: java.lang.Object | any, name: java.lang.String | string): boolean
                    /**
                     * Read-only: no-op.
                     */
                    // @ts-ignore
                    public write(context: EvaluationContext, target: java.lang.Object | any, name: java.lang.String | string, newValue: java.lang.Object | any): void
                }
            }
        }
    }
}
