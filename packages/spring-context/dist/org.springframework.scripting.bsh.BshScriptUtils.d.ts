declare namespace org {
    namespace springframework {
        namespace scripting {
            namespace bsh {
                /**
                 * Utility methods for handling BeanShell-scripted objects.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 2.0
                 */
                // @ts-ignore
                abstract class BshScriptUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new BeanShell-scripted object from the given script source.
                     * <p>With this {@code createBshObject} variant, the script needs to
                     * declare a full class or return an actual instance of the scripted object.
                     * @param scriptSource the script source text
                     * @return the scripted Java object
                     * @throws EvalError in case of BeanShell parsing failure
                     */
                    // @ts-ignore
                    public static createBshObject(scriptSource: java.lang.String | string): any
                    /**
                     * Create a new BeanShell-scripted object from the given script source,
                     * using the default ClassLoader.
                     * <p>The script may either be a simple script that needs a corresponding proxy
                     * generated (implementing the specified interfaces), or declare a full class
                     * or return an actual instance of the scripted object (in which case the
                     * specified interfaces, if any, need to be implemented by that class/instance).
                     * @param scriptSource the script source text
                     * @param scriptInterfaces the interfaces that the scripted Java object is
                     *  supposed to implement (may be {#code null} or empty if the script itself
                     *  declares a full class or returns an actual instance of the scripted object)
                     * @return the scripted Java object
                     * @throws EvalError in case of BeanShell parsing failure
                     * @see #createBshObject(String, Class[], ClassLoader)
                     */
                    // @ts-ignore
                    public static createBshObject(scriptSource: java.lang.String | string, ...scriptInterfaces: java.lang.Class<any>[]): any
                    /**
                     * Create a new BeanShell-scripted object from the given script source.
                     * <p>The script may either be a simple script that needs a corresponding proxy
                     * generated (implementing the specified interfaces), or declare a full class
                     * or return an actual instance of the scripted object (in which case the
                     * specified interfaces, if any, need to be implemented by that class/instance).
                     * @param scriptSource the script source text
                     * @param scriptInterfaces the interfaces that the scripted Java object is
                     *  supposed to implement (may be {#code null} or empty if the script itself
                     *  declares a full class or returns an actual instance of the scripted object)
                     * @param classLoader the ClassLoader to use for evaluating the script
                     * @return the scripted Java object
                     * @throws EvalError in case of BeanShell parsing failure
                     */
                    // @ts-ignore
                    public static createBshObject(scriptSource: java.lang.String | string, scriptInterfaces: java.lang.Class<any>[], classLoader: java.lang.ClassLoader): any
                }
            }
        }
    }
}
