declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace init {
                    /**
                     * Thrown by {@link ScriptUtils} if a statement in an SQL script failed when
                     * executing it against the target database.
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @since 3.0.5
                     */
                    // @ts-ignore
                    class ScriptStatementFailedException extends org.springframework.jdbc.datasource.init.ScriptException {
                        /**
                         * Construct a new {@code ScriptStatementFailedException}.
                         * @param stmt the actual SQL statement that failed
                         * @param stmtNumber the statement number in the SQL script (i.e.,
                         *  the n<sup>th</sup> statement present in the resource)
                         * @param encodedResource the resource from which the SQL statement was read
                         * @param cause the underlying cause of the failure
                         */
                        // @ts-ignore
                        constructor(stmt: java.lang.String | string, stmtNumber: number /*int*/, encodedResource: EncodedResource, cause: java.lang.Throwable | Error)
                        /**
                         * Build an error message for an SQL script execution failure,
                         * based on the supplied arguments.
                         * @param stmt the actual SQL statement that failed
                         * @param stmtNumber the statement number in the SQL script (i.e.,
                         *  the n<sup>th</sup> statement present in the resource)
                         * @param encodedResource the resource from which the SQL statement was read
                         * @return an error message suitable for an exception's <em>detail message</em>
                         *  or logging
                         * @since 4.2
                         */
                        // @ts-ignore
                        public static buildErrorMessage(stmt: java.lang.String | string, stmtNumber: number /*int*/, encodedResource: EncodedResource): string
                    }
                }
            }
        }
    }
}
