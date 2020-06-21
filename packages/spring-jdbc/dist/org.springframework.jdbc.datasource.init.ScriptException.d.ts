declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace init {
                    /**
                     * Root of the hierarchy of data access exceptions that are related to processing
                     * of SQL scripts.
                     * @author Sam Brannen
                     * @since 4.0.3
                     */
                    // @ts-ignore
                    abstract class ScriptException extends DataAccessException {
                        /**
                         * Constructor for {@code ScriptException}.
                         * @param message the detail message
                         */
                        // @ts-ignore
                        constructor(message: java.lang.String | string)
                        /**
                         * Constructor for {@code ScriptException}.
                         * @param message the detail message
                         * @param cause the root cause
                         */
                        // @ts-ignore
                        constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
                    }
                }
            }
        }
    }
}
