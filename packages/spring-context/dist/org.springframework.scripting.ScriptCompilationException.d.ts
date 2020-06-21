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
                constructor(msg: java.lang.String | string)
                /**
                 * Constructor for ScriptCompilationException.
                 * @param msg the detail message
                 * @param cause the root cause (usually from using an underlying script compiler API)
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                /**
                 * Constructor for ScriptCompilationException.
                 * @param scriptSource the source for the offending script
                 * @param msg the detail message
                 * @since 4.2
                 */
                // @ts-ignore
                constructor(scriptSource: org.springframework.scripting.ScriptSource, msg: java.lang.String | string)
                /**
                 * Constructor for ScriptCompilationException.
                 * @param scriptSource the source for the offending script
                 * @param cause the root cause (usually from using an underlying script compiler API)
                 */
                // @ts-ignore
                constructor(scriptSource: org.springframework.scripting.ScriptSource, cause: java.lang.Throwable | Error)
                /**
                 * Constructor for ScriptCompilationException.
                 * @param scriptSource the source for the offending script
                 * @param msg the detail message
                 * @param cause the root cause (usually from using an underlying script compiler API)
                 */
                // @ts-ignore
                constructor(scriptSource: org.springframework.scripting.ScriptSource, msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                /**
                 * Return the source for the offending script.
                 * @return the source, or {#code null} if not available
                 */
                // @ts-ignore
                public getScriptSource(): org.springframework.scripting.ScriptSource
            }
        }
    }
}
