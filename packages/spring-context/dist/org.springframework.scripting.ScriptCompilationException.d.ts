declare namespace org {
    namespace springframework {
        namespace scripting {
            /**
             * Exception to be thrown on script compilation failure.
             * @author Juergen Hoeller
             * @since 2.0
             */
            // @ts-ignore
            class ScriptCompilationException extends NestedRuntimeException {
                /**
                 * Constructor for ScriptCompilationException.
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Constructor for ScriptCompilationException.
                 * @param msg the detail message
                 * @param cause the root cause (usually from using an underlying script compiler API)
                 */
                // @ts-ignore
                constructor(msg: string, cause: Error)
                /**
                 * Constructor for ScriptCompilationException.
                 * @param scriptSource the source for the offending script
                 * @param msg the detail message
                 * @since 4.2
                 */
                // @ts-ignore
                constructor(scriptSource: org.springframework.scripting.ScriptSource, msg: string)
                /**
                 * Constructor for ScriptCompilationException.
                 * @param scriptSource the source for the offending script
                 * @param cause the root cause (usually from using an underlying script compiler API)
                 */
                // @ts-ignore
                constructor(scriptSource: org.springframework.scripting.ScriptSource, cause: Error)
                /**
                 * Constructor for ScriptCompilationException.
                 * @param scriptSource the source for the offending script
                 * @param msg the detail message
                 * @param cause the root cause (usually from using an underlying script compiler API)
                 */
                // @ts-ignore
                constructor(scriptSource: org.springframework.scripting.ScriptSource, msg: string, cause: Error)
                /**
                 * Return the source for the offending script.
                 * @return the source, or {#code null} if not available
                 */
                // @ts-ignore
                getScriptSource(): org.springframework.scripting.ScriptSource
            }
        }
    }
}
