declare namespace org {
    namespace springframework {
        namespace scripting {
            namespace groovy {
                /**
                 * Groovy-based implementation of Spring's {@link ScriptEvaluator} strategy interface.
                 * @author Juergen Hoeller
                 * @since 4.0
                 * @see GroovyShell#evaluate(String, String)
                 */
                // @ts-ignore
                class GroovyScriptEvaluator extends java.lang.Object implements org.springframework.scripting.ScriptEvaluator {
                    /**
                     * Construct a new GroovyScriptEvaluator.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new GroovyScriptEvaluator.
                     * @param classLoader the ClassLoader to use as a parent for the {#link GroovyShell}
                     */
                    // @ts-ignore
                    constructor(classLoader: java.lang.ClassLoader)
                    /**
                     * Set a custom compiler configuration for this evaluator.
                     * @since 4.3.3
                     * @see #setCompilationCustomizers
                     */
                    // @ts-ignore
                    setCompilerConfiguration(compilerConfiguration: CompilerConfiguration): void
                    /**
                     * Return this evaluator's compiler configuration (never {@code null}).
                     * @since 4.3.3
                     * @see #setCompilerConfiguration
                     */
                    // @ts-ignore
                    getCompilerConfiguration(): CompilerConfiguration
                    /**
                     * Set one or more customizers to be applied to this evaluator's compiler configuration.
                     * <p>Note that this modifies the shared compiler configuration held by this evaluator.
                     * @since 4.3.3
                     * @see #setCompilerConfiguration
                     */
                    // @ts-ignore
                    setCompilationCustomizers(...compilationCustomizers: CompilationCustomizer[]): void
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
