declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Simple adapter for {@link PreparedStatementSetter} that applies a given array of arguments.
                 * @author Juergen Hoeller
                 * @since 3.2.3
                 */
                // @ts-ignore
                class ArgumentPreparedStatementSetter extends java.lang.Object implements org.springframework.jdbc.core.PreparedStatementSetter, org.springframework.jdbc.core.ParameterDisposer {
                    /**
                     * Create a new ArgPreparedStatementSetter for the given arguments.
                     * @param args the arguments to set
                     */
                    // @ts-ignore
                    constructor(args: java.lang.Object[] | any[])
                    // @ts-ignore
                    public setValues(ps: java.sql.PreparedStatement): void
                    /**
                     * Set the value for prepared statements specified parameter index using the passed in value.
                     * This method can be overridden by sub-classes if needed.
                     * @param ps the PreparedStatement
                     * @param parameterPosition index of the parameter position
                     * @param argValue the value to set
                     * @throws SQLException if thrown by PreparedStatement methods
                     */
                    // @ts-ignore
                    doSetValue(ps: java.sql.PreparedStatement, parameterPosition: number /*int*/, argValue: java.lang.Object | any): void
                    // @ts-ignore
                    public cleanupParameters(): void
                }
            }
        }
    }
}
