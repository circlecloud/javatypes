declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace init {
                    /**
                     * Thrown when we cannot determine anything more specific than "something went
                     * wrong while processing an SQL script": for example, a {@link java.sql.SQLException}
                     * from JDBC that we cannot pinpoint more precisely.
                     * @author Sam Brannen
                     * @since 4.0.3
                     */
                    // @ts-ignore
                    class UncategorizedScriptException extends org.springframework.jdbc.datasource.init.ScriptException {
                        /**
                         * Construct a new {@code UncategorizedScriptException}.
                         * @param message detailed message
                         */
                        // @ts-ignore
                        constructor(message: java.lang.String | string)
                        /**
                         * Construct a new {@code UncategorizedScriptException}.
                         * @param message detailed message
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
