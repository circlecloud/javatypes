declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Simple adapter for {@link PreparedStatementSetter} that applies
                 * given arrays of arguments and JDBC argument types.
                 * @author Juergen Hoeller
                 * @since 3.2.3
                 */
                // @ts-ignore
                class ArgumentTypePreparedStatementSetter extends java.lang.Object implements org.springframework.jdbc.core.PreparedStatementSetter, org.springframework.jdbc.core.ParameterDisposer {
                    /**
                     * Create a new ArgTypePreparedStatementSetter for the given arguments.
                     * @param args the arguments to set
                     * @param argTypes the corresponding SQL types of the arguments
                     */
                    // @ts-ignore
                    constructor(args: java.lang.Object[] | any[], argTypes: number /*int*/[])
                    // @ts-ignore
                    public setValues(ps: java.sql.PreparedStatement): void
                    /**
                     * Set the value for the prepared statement's specified parameter position using the passed in
                     * value and type. This method can be overridden by sub-classes if needed.
                     * @param ps the PreparedStatement
                     * @param parameterPosition index of the parameter position
                     * @param argType the argument type
                     * @param argValue the argument value
                     * @throws SQLException if thrown by PreparedStatement methods
                     */
                    // @ts-ignore
                    doSetValue(ps: java.sql.PreparedStatement, parameterPosition: number /*int*/, argType: number /*int*/, argValue: java.lang.Object | any): void
                    // @ts-ignore
                    public cleanupParameters(): void
                }
            }
        }
    }
}
