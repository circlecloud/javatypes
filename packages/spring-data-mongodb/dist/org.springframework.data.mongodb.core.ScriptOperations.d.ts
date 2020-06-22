declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Script operations on {@link com.mongodb.DB} level. Allows interaction with server side JavaScript functions.
                     * @author Christoph Strobl
                     * @author Oliver Gierke
                     * @since 1.7
                     */
                    // @ts-ignore
                    interface ScriptOperations {
                        /**
                         * Store given {@link ExecutableMongoScript} generating a syntheitcal name so that it can be called by it
                         * subsequently.
                         * @param script must not be {#literal null}.
                         * @return {#link NamedMongoScript} with name under which the {@code JavaScript} function can be called.
                         */
                        // @ts-ignore
                        register(script: org.springframework.data.mongodb.core.script.ExecutableMongoScript): org.springframework.data.mongodb.core.script.NamedMongoScript
                        /**
                         * Registers the given {@link NamedMongoScript} in the database.
                         * @param script the {#link NamedMongoScript} to be registered.
                         * @return 
                         */
                        // @ts-ignore
                        register(script: org.springframework.data.mongodb.core.script.NamedMongoScript): org.springframework.data.mongodb.core.script.NamedMongoScript
                        /**
                         * Executes the {@literal script} by either calling it via its {@literal name} or directly sending it.
                         * @param script must not be {#literal null}.
                         * @param args arguments to pass on for script execution.
                         * @return the script evaluation result.
                         * @throws org.springframework.dao.DataAccessException
                         */
                        // @ts-ignore
                        execute(script: org.springframework.data.mongodb.core.script.ExecutableMongoScript, ...args: java.lang.Object[] | any[]): any
                        /**
                         * Call the {@literal JavaScript} by its name.
                         * @param scriptName must not be {#literal null} or empty.
                         * @param args
                         * @return 
                         */
                        // @ts-ignore
                        call(scriptName: java.lang.String | string, ...args: java.lang.Object[] | any[]): any
                        /**
                         * Checks {@link DB} for existence of {@link ServerSideJavaScript} with given name.
                         * @param scriptName must not be {#literal null} or empty.
                         * @return false if no {#link ServerSideJavaScript} with given name exists.
                         */
                        // @ts-ignore
                        exists(scriptName: java.lang.String | string): boolean
                        /**
                         * Returns names of {@literal JavaScript} functions that can be called.
                         * @return empty {#link Set} if no scripts found.
                         */
                        // @ts-ignore
                        getScriptNames(): Array<java.lang.String | string>
                    }
                }
            }
        }
    }
}
