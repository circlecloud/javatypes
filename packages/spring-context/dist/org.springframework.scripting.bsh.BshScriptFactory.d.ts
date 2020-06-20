declare namespace org {
    namespace springframework {
        namespace scripting {
            namespace bsh {
                /**
                 * {@link org.springframework.scripting.ScriptFactory} implementation
                 * for a BeanShell script.
                 * <p>Typically used in combination with a
                 * {@link org.springframework.scripting.support.ScriptFactoryPostProcessor};
                 * see the latter's javadoc for a configuration example.
                 * @author Juergen Hoeller
                 * @author Rob Harrop
                 * @since 2.0
                 * @see BshScriptUtils
                 * @see org.springframework.scripting.support.ScriptFactoryPostProcessor
                 */
                // @ts-ignore
                class BshScriptFactory extends java.lang.Object implements org.springframework.scripting.ScriptFactory {
                    /**
                     * Create a new BshScriptFactory for the given script source.
                     * <p>With this {@code BshScriptFactory} variant, the script needs to
                     * declare a full class or return an actual instance of the scripted object.
                     * @param scriptSourceLocator a locator that points to the source of the script.
                     *  Interpreted by the post-processor that actually creates the script.
                     */
                    // @ts-ignore
                    constructor(scriptSourceLocator: string)
                    /**
                     * Create a new BshScriptFactory for the given script source.
                     * <p>The script may either be a simple script that needs a corresponding proxy
                     * generated (implementing the specified interfaces), or declare a full class
                     * or return an actual instance of the scripted object (in which case the
                     * specified interfaces, if any, need to be implemented by that class/instance).
                     * @param scriptSourceLocator a locator that points to the source of the script.
                     *  Interpreted by the post-processor that actually creates the script.
                     * @param scriptInterfaces the Java interfaces that the scripted object
                     *  is supposed to implement (may be {#code null})
                     */
                    // @ts-ignore
                    constructor(scriptSourceLocator: string, ...scriptInterfaces: java.lang.Class[])
                    // @ts-ignore
                    setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    getScriptSourceLocator(): java.lang.String
                    // @ts-ignore
                    getScriptInterfaces(): java.lang.Class[]
                    /**
                     * BeanShell scripts do require a config interface.
                     */
                    // @ts-ignore
                    requiresConfigInterface(): boolean
                    /**
                     * Load and parse the BeanShell script via {@link BshScriptUtils}.
                     * @see BshScriptUtils#createBshObject(String, Class[], ClassLoader)
                     */
                    // @ts-ignore
                    getScriptedObject(scriptSource: org.springframework.scripting.ScriptSource, ...actualInterfaces: java.lang.Class[]): java.lang.Object
                    // @ts-ignore
                    getScriptedObjectType(scriptSource: org.springframework.scripting.ScriptSource): java.lang.Class<?>
                    // @ts-ignore
                    requiresScriptedObjectRefresh(scriptSource: org.springframework.scripting.ScriptSource): boolean
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
