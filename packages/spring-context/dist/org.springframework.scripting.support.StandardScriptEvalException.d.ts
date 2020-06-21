declare namespace org {
    namespace springframework {
        namespace scripting {
            namespace support {
                /**
                 * Exception decorating a {@link javax.script.ScriptException} coming out of
                 * JSR-223 script evaluation, i.e. a {@link javax.script.ScriptEngine#eval}
                 * call or {@link javax.script.Invocable#invokeMethod} /
                 * {@link javax.script.Invocable#invokeFunction} call.
                 * <p>This exception does not print the Java stacktrace, since the JSR-223
                 * {@link ScriptException} results in a rather convoluted text output.
                 * From that perspective, this exception is primarily a decorator for a
                 * {@link ScriptException} root cause passed into an outer exception.
                 * @author Juergen Hoeller
                 * @author Sebastien Deleuze
                 * @since 4.2.2
                 */
                // @ts-ignore
                class StandardScriptEvalException extends java.lang.RuntimeException {
                    /**
                     * Construct a new script eval exception with the specified original exception.
                     */
                    // @ts-ignore
                    constructor(ex: javax.script.ScriptException)
                    // @ts-ignore
                    getScriptException(): javax.script.ScriptException
                    // @ts-ignore
                    fillInStackTrace(): Error
                }
            }
        }
    }
}
