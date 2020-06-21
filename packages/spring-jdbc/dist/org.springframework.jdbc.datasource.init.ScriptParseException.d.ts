declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace init {
                    /**
                     * Thrown by {@link ScriptUtils} if an SQL script cannot be properly parsed.
                     * @author Sam Brannen
                     * @since 4.0.3
                     */
                    // @ts-ignore
                    class ScriptParseException extends org.springframework.jdbc.datasource.init.ScriptException {
                        /**
                         * Construct a new {@code ScriptParseException}.
                         * @param message detailed message
                         * @param resource the resource from which the SQL script was read
                         */
                        // @ts-ignore
                        constructor(message: java.lang.String | string, resource: EncodedResource)
                        /**
                         * Construct a new {@code ScriptParseException}.
                         * @param message detailed message
                         * @param resource the resource from which the SQL script was read
                         * @param cause the underlying cause of the failure
                         */
                        // @ts-ignore
                        constructor(message: java.lang.String | string, resource: EncodedResource, cause: java.lang.Throwable | Error)
                    }
                }
            }
        }
    }
}
