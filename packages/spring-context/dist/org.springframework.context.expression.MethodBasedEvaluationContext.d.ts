declare namespace org {
    namespace springframework {
        namespace context {
            namespace expression {
                /**
                 * A method-based {@link org.springframework.expression.EvaluationContext} that
                 * provides explicit support for method-based invocations.
                 * <p>Expose the actual method arguments using the following aliases:
                 * <ol>
                 * <li>pX where X is the index of the argument (p0 for the first argument)</li>
                 * <li>aX where X is the index of the argument (a1 for the second argument)</li>
                 * <li>the name of the parameter as discovered by a configurable {@link ParameterNameDiscoverer}</li>
                 * </ol>
                 * @author Stephane Nicoll
                 * @author Juergen Hoeller
                 * @since 4.2
                 */
                // @ts-ignore
                class MethodBasedEvaluationContext extends StandardEvaluationContext {
                    // @ts-ignore
                    constructor(rootObject: any, method: java.lang.reflect.Method, arguments: any[], parameterNameDiscoverer: ParameterNameDiscoverer)
                    // @ts-ignore
                    lookupVariable(name: string): java.lang.Object
                    /**
                     * Load the param information only when needed.
                     */
                    // @ts-ignore
                    lazyLoadArguments(): void
                }
            }
        }
    }
}
