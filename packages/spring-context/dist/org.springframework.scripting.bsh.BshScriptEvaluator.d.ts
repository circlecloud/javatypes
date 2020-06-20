declare namespace org {
    namespace springframework {
        namespace scripting {
            namespace bsh {
                /**
                 * BeanShell-based implementation of Spring's {@link ScriptEvaluator} strategy interface.
                 * @author Juergen Hoeller
                 * @since 4.0
                 * @see Interpreter#eval(String)
                 */
                // @ts-ignore
                class BshScriptEvaluator extends java.lang.Object implements org.springframework.scripting.ScriptEvaluator {
                    /**
                     * Construct a new BshScriptEvaluator.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new BshScriptEvaluator.
                     * @param classLoader the ClassLoader to use for the {#link Interpreter}
                     */
                    // @ts-ignore
                    constructor(classLoader: java.lang.ClassLoader)
                    // @ts-ignore
                    setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    evaluate(script: org.springframework.scripting.ScriptSource): java.lang.Object
                    // @ts-ignore
                    evaluate(script: org.springframework.scripting.ScriptSource, arguments: java.util.Map<java.lang.String, java.lang.Object>): java.lang.Object
                }
            }
        }
    }
}
