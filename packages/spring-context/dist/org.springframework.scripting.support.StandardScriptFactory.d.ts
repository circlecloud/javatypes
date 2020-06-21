declare namespace org {
    namespace springframework {
        namespace scripting {
            namespace support {
                /**
                 * {@link org.springframework.scripting.ScriptFactory} implementation based
                 * on the JSR-223 script engine abstraction (as included in Java 6+).
                 * Supports JavaScript, Groovy, JRuby, and other JSR-223 compliant engines.
                 * <p>Typically used in combination with a
                 * {@link org.springframework.scripting.support.ScriptFactoryPostProcessor};
                 * see the latter's javadoc for a configuration example.
                 * @author Juergen Hoeller
                 * @since 4.2
                 * @see ScriptFactoryPostProcessor
                 */
                // @ts-ignore
                class StandardScriptFactory extends java.lang.Object implements org.springframework.scripting.ScriptFactory {
                    /**
                     * Create a new StandardScriptFactory for the given script source.
                     * @param scriptSourceLocator a locator that points to the source of the script.
                     *  Interpreted by the post-processor that actually creates the script.
                     */
                    // @ts-ignore
                    constructor(scriptSourceLocator: java.lang.String | string)
                    /**
                     * Create a new StandardScriptFactory for the given script source.
                     * @param scriptSourceLocator a locator that points to the source of the script.
                     *  Interpreted by the post-processor that actually creates the script.
                     * @param scriptInterfaces the Java interfaces that the scripted object
                     *  is supposed to implement
                     */
                    // @ts-ignore
                    constructor(scriptSourceLocator: java.lang.String | string, ...scriptInterfaces: java.lang.Class<any>[])
                    /**
                     * Create a new StandardScriptFactory for the given script source.
                     * @param scriptEngineName the name of the JSR-223 ScriptEngine to use
                     *  (explicitly given instead of inferred from the script source)
                     * @param scriptSourceLocator a locator that points to the source of the script.
                     *  Interpreted by the post-processor that actually creates the script.
                     */
                    // @ts-ignore
                    constructor(scriptEngineName: java.lang.String | string, scriptSourceLocator: java.lang.String | string)
                    /**
                     * Create a new StandardScriptFactory for the given script source.
                     * @param scriptEngineName the name of the JSR-223 ScriptEngine to use
                     *  (explicitly given instead of inferred from the script source)
                     * @param scriptSourceLocator a locator that points to the source of the script.
                     *  Interpreted by the post-processor that actually creates the script.
                     * @param scriptInterfaces the Java interfaces that the scripted object
                     *  is supposed to implement
                     */
                    // @ts-ignore
                    constructor(scriptEngineName: java.lang.String | string, scriptSourceLocator: java.lang.String | string, ...scriptInterfaces: java.lang.Class<any>[])
                    // @ts-ignore
                    public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    public getScriptSourceLocator(): string
                    // @ts-ignore
                    public getScriptInterfaces(): java.lang.Class<any>[]
                    // @ts-ignore
                    public requiresConfigInterface(): boolean
                    /**
                     * Load and parse the script via JSR-223's ScriptEngine.
                     */
                    // @ts-ignore
                    public getScriptedObject(scriptSource: org.springframework.scripting.ScriptSource, ...actualInterfaces: java.lang.Class<any>[]): any
                    // @ts-ignore
                    evaluateScript(scriptSource: org.springframework.scripting.ScriptSource): any
                    // @ts-ignore
                    retrieveScriptEngine(scriptSource: org.springframework.scripting.ScriptSource): javax.script.ScriptEngine
                    // @ts-ignore
                    adaptToInterfaces(script: java.lang.Object | any, scriptSource: org.springframework.scripting.ScriptSource, ...actualInterfaces: java.lang.Class<any>[]): any
                    // @ts-ignore
                    public getScriptedObjectType(scriptSource: org.springframework.scripting.ScriptSource): java.lang.Class<any>
                    // @ts-ignore
                    public requiresScriptedObjectRefresh(scriptSource: org.springframework.scripting.ScriptSource): boolean
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
