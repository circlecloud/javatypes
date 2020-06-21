declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Utility methods for PreparedStatementSetter/Creator and CallableStatementCreator
                 * implementations, providing sophisticated parameter management (including support
                 * for LOB values).
                 * <p>Used by PreparedStatementCreatorFactory and CallableStatementCreatorFactory,
                 * but also available for direct use in custom setter/creator implementations.
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see PreparedStatementSetter
                 * @see PreparedStatementCreator
                 * @see CallableStatementCreator
                 * @see PreparedStatementCreatorFactory
                 * @see CallableStatementCreatorFactory
                 * @see SqlParameter
                 * @see SqlTypeValue
                 * @see org.springframework.jdbc.core.support.SqlLobValue
                 */
                // @ts-ignore
                abstract class StatementCreatorUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * System property that instructs Spring to ignore {@link java.sql.ParameterMetaData#getParameterType}
                     * completely, i.e. to never even attempt to retrieve {@link PreparedStatement#getParameterMetaData()}
                     * for {@link StatementCreatorUtils#setNull} calls.
                     * <p>The default is "false", trying {@code getParameterType} calls first and falling back to
                     * {@link PreparedStatement#setNull} / {@link PreparedStatement#setObject} calls based on well-known
                     * behavior of common databases. Spring records JDBC drivers with non-working {@code getParameterType}
                     * implementations and won't attempt to call that method for that driver again, always falling back.
                     * <p>Consider switching this flag to "true" if you experience misbehavior at runtime, e.g. with
                     * a connection pool setting back the {@link PreparedStatement} instance in case of an exception
                     * thrown from {@code getParameterType} (as reported on JBoss AS 7).
                     */
                    // @ts-ignore
                    public static readonly IGNORE_GETPARAMETERTYPE_PROPERTY_NAME: java.lang.String | string
                    /**
                     * Derive a default SQL type from the given Java type.
                     * @param javaType the Java type to translate
                     * @return the corresponding SQL type, or {#link SqlTypeValue#TYPE_UNKNOWN} if none found
                     */
                    // @ts-ignore
                    public static javaTypeToSqlParameterType(javaType: java.lang.Class<any>): number /*int*/
                    /**
                     * Set the value for a parameter. The method used is based on the SQL type
                     * of the parameter and we can handle complex types like arrays and LOBs.
                     * @param ps the prepared statement or callable statement
                     * @param paramIndex index of the parameter we are setting
                     * @param param the parameter as it is declared including type
                     * @param inValue the value to set
                     * @throws SQLException if thrown by PreparedStatement methods
                     */
                    // @ts-ignore
                    public static setParameterValue(ps: java.sql.PreparedStatement, paramIndex: number /*int*/, param: org.springframework.jdbc.core.SqlParameter, inValue: java.lang.Object | any): void
                    /**
                     * Set the value for a parameter. The method used is based on the SQL type
                     * of the parameter and we can handle complex types like arrays and LOBs.
                     * @param ps the prepared statement or callable statement
                     * @param paramIndex index of the parameter we are setting
                     * @param sqlType the SQL type of the parameter
                     * @param inValue the value to set (plain value or an SqlTypeValue)
                     * @throws SQLException if thrown by PreparedStatement methods
                     * @see SqlTypeValue
                     */
                    // @ts-ignore
                    public static setParameterValue(ps: java.sql.PreparedStatement, paramIndex: number /*int*/, sqlType: number /*int*/, inValue: java.lang.Object | any): void
                    /**
                     * Set the value for a parameter. The method used is based on the SQL type
                     * of the parameter and we can handle complex types like arrays and LOBs.
                     * @param ps the prepared statement or callable statement
                     * @param paramIndex index of the parameter we are setting
                     * @param sqlType the SQL type of the parameter
                     * @param typeName the type name of the parameter
                     *  (optional, only used for SQL NULL and SqlTypeValue)
                     * @param inValue the value to set (plain value or an SqlTypeValue)
                     * @throws SQLException if thrown by PreparedStatement methods
                     * @see SqlTypeValue
                     */
                    // @ts-ignore
                    public static setParameterValue(ps: java.sql.PreparedStatement, paramIndex: number /*int*/, sqlType: number /*int*/, typeName: java.lang.String | string, inValue: java.lang.Object | any): void
                    /**
                     * Clean up all resources held by parameter values which were passed to an
                     * execute method. This is for example important for closing LOB values.
                     * @param paramValues parameter values supplied. May be {#code null}.
                     * @see DisposableSqlTypeValue#cleanup()
                     * @see org.springframework.jdbc.core.support.SqlLobValue#cleanup()
                     */
                    // @ts-ignore
                    public static cleanupParameters(...paramValues: java.lang.Object[] | any[]): void
                    /**
                     * Clean up all resources held by parameter values which were passed to an
                     * execute method. This is for example important for closing LOB values.
                     * @param paramValues parameter values supplied. May be {#code null}.
                     * @see DisposableSqlTypeValue#cleanup()
                     * @see org.springframework.jdbc.core.support.SqlLobValue#cleanup()
                     */
                    // @ts-ignore
                    public static cleanupParameters(paramValues: java.util.Collection<any> | Array<any>): void
                }
            }
        }
    }
}
