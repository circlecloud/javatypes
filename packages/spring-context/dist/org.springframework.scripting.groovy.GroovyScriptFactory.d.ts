declare namespace org {
    namespace springframework {
        namespace scripting {
            namespace groovy {
                /**
                 * {@link org.springframework.scripting.ScriptFactory} implementation
                 * for a Groovy script.
                 * <p>Typically used in combination with a
                 * {@link org.springframework.scripting.support.ScriptFactoryPostProcessor};
                 * see the latter's javadoc for a configuration example.
                 * <p>Note: Spring 4.0 supports Groovy 1.8 and higher.
                 * @author Juergen Hoeller
                 * @author Rob Harrop
                 * @author Rod Johnson
                 * @since 2.0
                 * @see groovy.lang.GroovyClassLoader
                 * @see org.springframework.scripting.support.ScriptFactoryPostProcessor
                 */
                // @ts-ignore
                class GroovyScriptFactory extends java.lang.Object implements org.springframework.scripting.ScriptFactory {
                    /**
                     * Create a new GroovyScriptFactory for the given script source.
                     * <p>We don't need to specify script interfaces here, since
                     * a Groovy script defines its Java interfaces itself.
                     * @param scriptSourceLocator a locator that points to the source of the script.
                     *  Interpreted by the post-processor that actually creates the script.
                     */
                    // @ts-ignore
                    constructor(scriptSourceLocator: string)
                    /**
                     * Create a new GroovyScriptFactory for the given script source,
                     * specifying a strategy interface that can create a custom MetaClass
                     * to supply missing methods and otherwise change the behavior of the object.
                     * @param scriptSourceLocator a locator that points to the source of the script.
                     *  Interpreted by the post-processor that actually creates the script.
                     * @param groovyObjectCustomizer a customizer that can set a custom metaclass
                     *  or make other changes to the GroovyObject created by this factory
                     *  (may be {#code null})
                     * @see GroovyObjectCustomizer#customize
                     */
                    // @ts-ignore
                    constructor(scriptSourceLocator: string, groovyObjectCustomizer: org.springframework.scripting.groovy.GroovyObjectCustomizer)
                    /**
                     * Create a new GroovyScriptFactory for the given script source,
                     * specifying a strategy interface that can create a custom MetaClass
                     * to supply missing methods and otherwise change the behavior of the object.
                     * @param scriptSourceLocator a locator that points to the source of the script.
                     *  Interpreted by the post-processor that actually creates the script.
                     * @param compilerConfiguration a custom compiler configuration to be applied
                     *  to the GroovyClassLoader (may be {#code null})
                     * @since 4.3.3
                     * @see GroovyClassLoader#GroovyClassLoader(ClassLoader, CompilerConfiguration)
                     */
                    // @ts-ignore
                    constructor(scriptSourceLocator: string, compilerConfiguration: CompilerConfiguration)
                    /**
                     * Create a new GroovyScriptFactory for the given script source,
                     * specifying a strategy interface that can customize Groovy's compilation
                     * process within the underlying GroovyClassLoader.
                     * @param scriptSourceLocator a locator that points to the source of the script.
                     *  Interpreted by the post-processor that actually creates the script.
                     * @param compilationCustomizers one or more customizers to be applied to the
                     *  GroovyClassLoader compiler configuration
                     * @since 4.3.3
                     * @see CompilerConfiguration#addCompilationCustomizers
                     * @see org.codehaus.groovy.control.customizers.ImportCustomizer
                     */
                    // @ts-ignore
                    constructor(scriptSourceLocator: string, ...compilationCustomizers: CompilationCustomizer[])
                    // @ts-ignore
                    setBeanFactory(beanFactory: BeanFactory): void
                    // @ts-ignore
                    setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    /**
                     * Return the GroovyClassLoader used by this script factory.
                     */
                    // @ts-ignore
                    getGroovyClassLoader(): GroovyClassLoader
                    /**
                     * Build a {@link GroovyClassLoader} for the given {@code ClassLoader}.
                     * @param classLoader the ClassLoader to build a GroovyClassLoader for
                     * @since 4.3.3
                     */
                    // @ts-ignore
                    buildGroovyClassLoader(classLoader: java.lang.ClassLoader): GroovyClassLoader
                    // @ts-ignore
                    getScriptSourceLocator(): java.lang.String
                    /**
                     * Groovy scripts determine their interfaces themselves,
                     * hence we don't need to explicitly expose interfaces here.
                     * @return {#code null} always
                     */
                    // @ts-ignore
                    getScriptInterfaces(): java.lang.Class[]
                    /**
                     * Groovy scripts do not need a config interface,
                     * since they expose their setters as public methods.
                     */
                    // @ts-ignore
                    requiresConfigInterface(): boolean
                    /**
                     * Loads and parses the Groovy script via the GroovyClassLoader.
                     * @see groovy.lang.GroovyClassLoader
                     */
                    // @ts-ignore
                    getScriptedObject(scriptSource: org.springframework.scripting.ScriptSource, ...actualInterfaces: java.lang.Class[]): java.lang.Object
                    // @ts-ignore
                    getScriptedObjectType(scriptSource: org.springframework.scripting.ScriptSource): java.lang.Class<?>
                    // @ts-ignore
                    requiresScriptedObjectRefresh(scriptSource: org.springframework.scripting.ScriptSource): boolean
                    /**
                     * Instantiate the given Groovy script class and run it if necessary.
                     * @param scriptSource the source for the underlying script
                     * @param scriptClass the Groovy script class
                     * @return the result object (either an instance of the script class
                     *  or the result of running the script instance)
                     * @throws ScriptCompilationException in case of instantiation failure
                     */
                    // @ts-ignore
                    executeScript(scriptSource: org.springframework.scripting.ScriptSource, scriptClass: java.lang.Class<any>): java.lang.Object
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
