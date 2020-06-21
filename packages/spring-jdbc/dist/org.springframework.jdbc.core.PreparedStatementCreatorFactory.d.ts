declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Helper class that efficiently creates multiple {@link PreparedStatementCreator}
                 * objects with different parameters based on an SQL statement and a single
                 * set of parameter declarations.
                 * @author Rod Johnson
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 */
                // @ts-ignore
                class PreparedStatementCreatorFactory extends java.lang.Object {
                    /**
                     * Create a new factory. Will need to add parameters via the
                     * {@link #addParameter} method or have no parameters.
                     * @param sql the SQL statement to execute
                     */
                    // @ts-ignore
                    constructor(sql: java.lang.String | string)
                    /**
                     * Create a new factory with the given SQL and JDBC types.
                     * @param sql the SQL statement to execute
                     * @param types int array of JDBC types
                     */
                    // @ts-ignore
                    constructor(sql: java.lang.String | string, ...types: number /*int*/[])
                    /**
                     * Create a new factory with the given SQL and parameters.
                     * @param sql the SQL statement to execute
                     * @param declaredParameters list of {#link SqlParameter} objects
                     */
                    // @ts-ignore
                    constructor(sql: java.lang.String | string, declaredParameters: java.util.List<org.springframework.jdbc.core.SqlParameter> | Array<org.springframework.jdbc.core.SqlParameter>)
                    /**
                     * Return the SQL statement to execute.
                     * @since 5.1.3
                     */
                    // @ts-ignore
                    public getSql(): string
                    /**
                     * Add a new declared parameter.
                     * <p>Order of parameter addition is significant.
                     * @param param the parameter to add to the list of declared parameters
                     */
                    // @ts-ignore
                    public addParameter(param: org.springframework.jdbc.core.SqlParameter): void
                    /**
                     * Set whether to use prepared statements that return a specific type of ResultSet.
                     * @param resultSetType the ResultSet type
                     * @see java.sql.ResultSet#TYPE_FORWARD_ONLY
                     * @see java.sql.ResultSet#TYPE_SCROLL_INSENSITIVE
                     * @see java.sql.ResultSet#TYPE_SCROLL_SENSITIVE
                     */
                    // @ts-ignore
                    public setResultSetType(resultSetType: number /*int*/): void
                    /**
                     * Set whether to use prepared statements capable of returning updatable ResultSets.
                     */
                    // @ts-ignore
                    public setUpdatableResults(updatableResults: boolean): void
                    /**
                     * Set whether prepared statements should be capable of returning auto-generated keys.
                     */
                    // @ts-ignore
                    public setReturnGeneratedKeys(returnGeneratedKeys: boolean): void
                    /**
                     * Set the column names of the auto-generated keys.
                     */
                    // @ts-ignore
                    public setGeneratedKeysColumnNames(...names: java.lang.String[] | string[]): void
                    /**
                     * Return a new PreparedStatementSetter for the given parameters.
                     * @param params list of parameters (may be {#code null})
                     */
                    // @ts-ignore
                    public newPreparedStatementSetter(params: java.util.List<any> | Array<any>): org.springframework.jdbc.core.PreparedStatementSetter
                    /**
                     * Return a new PreparedStatementSetter for the given parameters.
                     * @param params the parameter array (may be {#code null})
                     */
                    // @ts-ignore
                    public newPreparedStatementSetter(params: java.lang.Object[] | any[]): org.springframework.jdbc.core.PreparedStatementSetter
                    /**
                     * Return a new PreparedStatementCreator for the given parameters.
                     * @param params list of parameters (may be {#code null})
                     */
                    // @ts-ignore
                    public newPreparedStatementCreator(params: java.util.List<any> | Array<any>): org.springframework.jdbc.core.PreparedStatementCreator
                    /**
                     * Return a new PreparedStatementCreator for the given parameters.
                     * @param params the parameter array (may be {#code null})
                     */
                    // @ts-ignore
                    public newPreparedStatementCreator(params: java.lang.Object[] | any[]): org.springframework.jdbc.core.PreparedStatementCreator
                    /**
                     * Return a new PreparedStatementCreator for the given parameters.
                     * @param sqlToUse the actual SQL statement to use (if different from
                     *  the factory's, for example because of named parameter expanding)
                     * @param params the parameter array (may be {#code null})
                     */
                    // @ts-ignore
                    public newPreparedStatementCreator(sqlToUse: java.lang.String | string, params: java.lang.Object[] | any[]): org.springframework.jdbc.core.PreparedStatementCreator
                }
            }
        }
    }
}
