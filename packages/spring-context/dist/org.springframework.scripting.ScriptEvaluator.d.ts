declare namespace org {
    namespace springframework {
        namespace scripting {
            /**
             * Spring's strategy interface for evaluating a script.
             * <p>Aside from language-specific implementations, Spring also ships
             * a version based on the standard {@code javax.script} package (JSR-223):
             * {@link org.springframework.scripting.support.StandardScriptEvaluator}.
             * @author Juergen Hoeller
             * @author Costin Leau
             * @since 4.0
             */
            // @ts-ignore
            interface ScriptEvaluator {
                /**
                 * Evaluate the given script.
                 * @param script the ScriptSource for the script to evaluate
                 * @return the return value of the script, if any
                 * @throws ScriptCompilationException if the evaluator failed to read,
                 *  compile or evaluate the script
                 */
                // @ts-ignore
                evaluate(script: org.springframework.scripting.ScriptSource): java.lang.Object
                /**
                 * Evaluate the given script with the given arguments.
                 * @param script the ScriptSource for the script to evaluate
                 * @param arguments the key-value pairs to expose to the script,
                 *  typically as script variables (may be {#code null} or empty)
                 * @return the return value of the script, if any
                 * @throws ScriptCompilationException if the evaluator failed to read,
                 *  compile or evaluate the script
                 */
                // @ts-ignore
                evaluate(script: org.springframework.scripting.ScriptSource, arguments: java.util.Map<java.lang.String, java.lang.Object>): java.lang.Object
            }
        }
    }
}
