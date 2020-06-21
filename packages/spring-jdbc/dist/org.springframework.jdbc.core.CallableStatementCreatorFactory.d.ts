declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Helper class that efficiently creates multiple {@link CallableStatementCreator}
                 * objects with different parameters based on an SQL statement and a single
                 * set of parameter declarations.
                 * @author Rod Johnson
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 */
                // @ts-ignore
                class CallableStatementCreatorFactory extends java.lang.Object {
                    /**
                     * Create a new factory. Will need to add parameters via the
                     * {@link #addParameter} method or have no parameters.
                     * @param callString the SQL call string
                     */
                    // @ts-ignore
                    constructor(callString: java.lang.String | string)
                    /**
                     * Create a new factory with the given SQL and the given parameters.
                     * @param callString the SQL call string
                     * @param declaredParameters list of {#link SqlParameter} objects
                     */
                    // @ts-ignore
                    constructor(callString: java.lang.String | string, declaredParameters: java.util.List<org.springframework.jdbc.core.SqlParameter> | Array<org.springframework.jdbc.core.SqlParameter>)
                    /**
                     * Return the SQL call string.
                     * @since 5.1.3
                     */
                    // @ts-ignore
                    public getCallString(): string
                    /**
                     * Add a new declared parameter.
                     * <p>Order of parameter addition is significant.
                     * @param param the parameter to add to the list of declared parameters
                     */
                    // @ts-ignore
                    public addParameter(param: org.springframework.jdbc.core.SqlParameter): void
                    /**
                     * Set whether to use prepared statements that return a specific type of ResultSet.
                     * specific type of ResultSet.
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
                     * Return a new CallableStatementCreator instance given this parameters.
                     * @param params list of parameters (may be {#code null})
                     */
                    // @ts-ignore
                    public newCallableStatementCreator(params: java.util.Map<java.lang.String | string, any>): org.springframework.jdbc.core.CallableStatementCreator
                    /**
                     * Return a new CallableStatementCreator instance given this parameter mapper.
                     * @param inParamMapper the ParameterMapper implementation that will return a Map of parameters
                     */
                    // @ts-ignore
                    public newCallableStatementCreator(inParamMapper: org.springframework.jdbc.core.ParameterMapper): org.springframework.jdbc.core.CallableStatementCreator
                }
            }
        }
    }
}
