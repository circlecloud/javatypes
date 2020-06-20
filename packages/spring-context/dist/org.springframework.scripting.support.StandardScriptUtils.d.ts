declare namespace org {
    namespace springframework {
        namespace scripting {
            namespace support {
                /**
                 * Common operations for dealing with a JSR-223 {@link ScriptEngine}.
                 * @author Juergen Hoeller
                 * @since 4.2.2
                 */
                // @ts-ignore
                class StandardScriptUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Retrieve a {@link ScriptEngine} from the given {@link ScriptEngineManager}
                     * by name, delegating to {@link ScriptEngineManager#getEngineByName} but
                     * throwing a descriptive exception if not found or if initialization failed.
                     * @param scriptEngineManager the ScriptEngineManager to use
                     * @param engineName the name of the engine
                     * @return a corresponding ScriptEngine (never {#code null})
                     * @throws IllegalArgumentException if no matching engine has been found
                     * @throws IllegalStateException if the desired engine failed to initialize
                     */
                    // @ts-ignore
                    retrieveEngineByName(scriptEngineManager: javax.script.ScriptEngineManager, engineName: string): javax.script.ScriptEngine
                }
            }
        }
    }
}
