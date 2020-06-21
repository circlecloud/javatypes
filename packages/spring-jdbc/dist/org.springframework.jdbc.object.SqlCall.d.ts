declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace object {
                /**
                 * RdbmsOperation using a JdbcTemplate and representing an SQL-based
                 * call such as a stored procedure or a stored function.
                 * <p>Configures a CallableStatementCreatorFactory based on the declared
                 * parameters.
                 * @author Rod Johnson
                 * @author Thomas Risberg
                 * @see CallableStatementCreatorFactory
                 */
                // @ts-ignore
                abstract class SqlCall extends org.springframework.jdbc.object.RdbmsOperation {
                    /**
                     * Constructor to allow use as a JavaBean.
                     * A DataSource, SQL and any parameters must be supplied before
                     * invoking the {@code compile} method and using this object.
                     * @see #setDataSource
                     * @see #setSql
                     * @see #compile
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new SqlCall object with SQL, but without parameters.
                     * Must add parameters or settle with none.
                     * @param ds the DataSource to obtain connections from
                     * @param sql the SQL to execute
                     */
                    // @ts-ignore
                    constructor(ds: javax.sql.DataSource, sql: java.lang.String | string)
                    /**
                     * Set whether this call is for a function.
                     */
                    // @ts-ignore
                    public setFunction(func: boolean): void
                    /**
                     * Return whether this call is for a function.
                     */
                    // @ts-ignore
                    public isFunction(): boolean
                    /**
                     * Set whether the SQL can be used as is.
                     */
                    // @ts-ignore
                    public setSqlReadyForUse(sqlReadyForUse: boolean): void
                    /**
                     * Return whether the SQL can be used as is.
                     */
                    // @ts-ignore
                    public isSqlReadyForUse(): boolean
                    /**
                     * Overridden method to configure the CallableStatementCreatorFactory
                     * based on our declared parameters.
                     * @see RdbmsOperation#compileInternal()
                     */
                    // @ts-ignore
                    compileInternal(): void
                    /**
                     * Hook method that subclasses may override to react to compilation.
                     * This implementation does nothing.
                     */
                    // @ts-ignore
                    onCompileInternal(): void
                    /**
                     * Get the call string.
                     */
                    // @ts-ignore
                    public getCallString(): string
                    /**
                     * Return a CallableStatementCreator to perform an operation
                     * with this parameters.
                     * @param inParams parameters. May be {#code null}.
                     */
                    // @ts-ignore
                    newCallableStatementCreator(inParams: java.util.Map<java.lang.String | string, any>): org.springframework.jdbc.core.CallableStatementCreator
                    /**
                     * Return a CallableStatementCreator to perform an operation
                     * with the parameters returned from this ParameterMapper.
                     * @param inParamMapper parametermapper. May not be {#code null}.
                     */
                    // @ts-ignore
                    newCallableStatementCreator(inParamMapper: org.springframework.jdbc.core.ParameterMapper): org.springframework.jdbc.core.CallableStatementCreator
                }
            }
        }
    }
}
