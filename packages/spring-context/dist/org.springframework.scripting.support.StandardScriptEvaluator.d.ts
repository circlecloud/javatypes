declare namespace org {
    namespace springframework {
        namespace scripting {
            namespace support {
                /**
                 * {@code javax.script} (JSR-223) based implementation of Spring's {@link ScriptEvaluator}
                 * strategy interface.
                 * @author Juergen Hoeller
                 * @author Costin Leau
                 * @since 4.0
                 * @see ScriptEngine#eval(String)
                 */
                // @ts-ignore
                class StandardScriptEvaluator extends java.lang.Object implements org.springframework.scripting.ScriptEvaluator {
                    /**
                     * Construct a new {@code StandardScriptEvaluator}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new {@code StandardScriptEvaluator} for the given class loader.
                     * @param classLoader the class loader to use for script engine detection
                     */
                    // @ts-ignore
                    constructor(classLoader: java.lang.ClassLoader)
                    /**
                     * Construct a new {@code StandardScriptEvaluator} for the given JSR-223
                     * {@link ScriptEngineManager} to obtain script engines from.
                     * @param scriptEngineManager the ScriptEngineManager (or subclass thereof) to use
                     * @since 4.2.2
                     */
                    // @ts-ignore
                    constructor(scriptEngineManager: javax.script.ScriptEngineManager)
                    /**
                     * Set the name of the language meant for evaluating the scripts (e.g. "Groovy").
                     * <p>This is effectively an alias for {@link #setEngineName "engineName"},
                     * potentially (but not yet) providing common abbreviations for certain languages
                     * beyond what the JSR-223 script engine factory exposes.
                     * @see #setEngineName
                     */
                    // @ts-ignore
                    public setLanguage(language: java.lang.String | string): void
                    /**
                     * Set the name of the script engine for evaluating the scripts (e.g. "Groovy"),
                     * as exposed by the JSR-223 script engine factory.
                     * @since 4.2.2
                     * @see #setLanguage
                     */
                    // @ts-ignore
                    public setEngineName(engineName: java.lang.String | string): void
                    /**
                     * Set the globally scoped bindings on the underlying script engine manager,
                     * shared by all scripts, as an alternative to script argument bindings.
                     * @since 4.2.2
                     * @see #evaluate(ScriptSource, Map)
                     * @see javax.script.ScriptEngineManager#setBindings(Bindings)
                     * @see javax.script.SimpleBindings
                     */
                    // @ts-ignore
                    public setGlobalBindings(globalBindings: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                    // @ts-ignore
                    public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    public evaluate(script: org.springframework.scripting.ScriptSource): any
                    // @ts-ignore
                    public evaluate(script: org.springframework.scripting.ScriptSource, argumentBindings: java.util.Map<java.lang.String | string, java.lang.Object | any>): any
                    /**
                     * Obtain the JSR-223 ScriptEngine to use for the given script.
                     * @param script the script to evaluate
                     * @return the ScriptEngine (never {#code null})
                     */
                    // @ts-ignore
                    getScriptEngine(script: org.springframework.scripting.ScriptSource): javax.script.ScriptEngine
                }
            }
        }
    }
}
