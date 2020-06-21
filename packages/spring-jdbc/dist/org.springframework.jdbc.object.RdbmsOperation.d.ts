declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace object {
                /**
                 * An "RDBMS operation" is a multi-threaded, reusable object representing a query,
                 * update, or stored procedure call. An RDBMS operation is <b>not</b> a command,
                 * as a command is not reusable. However, execute methods may take commands as
                 * arguments. Subclasses should be JavaBeans, allowing easy configuration.
                 * <p>This class and subclasses throw runtime exceptions, defined in the
                 * {@code org.springframework.dao} package (and as thrown by the
                 * {@code org.springframework.jdbc.core} package, which the classes
                 * in this package use under the hood to perform raw JDBC operations).
                 * <p>Subclasses should set SQL and add parameters before invoking the
                 * {@link #compile()} method. The order in which parameters are added is
                 * significant. The appropriate {@code execute} or {@code update}
                 * method can then be invoked.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @see SqlQuery
                 * @see SqlUpdate
                 * @see StoredProcedure
                 * @see org.springframework.jdbc.core.JdbcTemplate
                 */
                // @ts-ignore
                abstract class RdbmsOperation extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Logger available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * An alternative to the more commonly used {@link #setDataSource} when you want to
                     * use the same {@link JdbcTemplate} in multiple {@code RdbmsOperations}. This is
                     * appropriate if the {@code JdbcTemplate} has special configuration such as a
                     * {@link org.springframework.jdbc.support.SQLExceptionTranslator} to be reused.
                     */
                    // @ts-ignore
                    public setJdbcTemplate(jdbcTemplate: org.springframework.jdbc.core.JdbcTemplate): void
                    /**
                     * Return the {@link JdbcTemplate} used by this operation object.
                     */
                    // @ts-ignore
                    public getJdbcTemplate(): org.springframework.jdbc.core.JdbcTemplate
                    /**
                     * Set the JDBC {@link DataSource} to obtain connections from.
                     * @see org.springframework.jdbc.core.JdbcTemplate#setDataSource
                     */
                    // @ts-ignore
                    public setDataSource(dataSource: javax.sql.DataSource): void
                    /**
                     * Set the fetch size for this RDBMS operation. This is important for processing
                     * large result sets: Setting this higher than the default value will increase
                     * processing speed at the cost of memory consumption; setting this lower can
                     * avoid transferring row data that will never be read by the application.
                     * <p>Default is -1, indicating to use the driver's default.
                     * @see org.springframework.jdbc.core.JdbcTemplate#setFetchSize
                     */
                    // @ts-ignore
                    public setFetchSize(fetchSize: number /*int*/): void
                    /**
                     * Set the maximum number of rows for this RDBMS operation. This is important
                     * for processing subsets of large result sets, avoiding to read and hold
                     * the entire result set in the database or in the JDBC driver.
                     * <p>Default is -1, indicating to use the driver's default.
                     * @see org.springframework.jdbc.core.JdbcTemplate#setMaxRows
                     */
                    // @ts-ignore
                    public setMaxRows(maxRows: number /*int*/): void
                    /**
                     * Set the query timeout for statements that this RDBMS operation executes.
                     * <p>Default is -1, indicating to use the JDBC driver's default.
                     * <p>Note: Any timeout specified here will be overridden by the remaining
                     * transaction timeout when executing within a transaction that has a
                     * timeout specified at the transaction level.
                     */
                    // @ts-ignore
                    public setQueryTimeout(queryTimeout: number /*int*/): void
                    /**
                     * Set whether to use statements that return a specific type of ResultSet.
                     * @param resultSetType the ResultSet type
                     * @see java.sql.ResultSet#TYPE_FORWARD_ONLY
                     * @see java.sql.ResultSet#TYPE_SCROLL_INSENSITIVE
                     * @see java.sql.ResultSet#TYPE_SCROLL_SENSITIVE
                     * @see java.sql.Connection#prepareStatement(String, int, int)
                     */
                    // @ts-ignore
                    public setResultSetType(resultSetType: number /*int*/): void
                    /**
                     * Return whether statements will return a specific type of ResultSet.
                     */
                    // @ts-ignore
                    public getResultSetType(): number /*int*/
                    /**
                     * Set whether to use statements that are capable of returning
                     * updatable ResultSets.
                     * @see java.sql.Connection#prepareStatement(String, int, int)
                     */
                    // @ts-ignore
                    public setUpdatableResults(updatableResults: boolean): void
                    /**
                     * Return whether statements will return updatable ResultSets.
                     */
                    // @ts-ignore
                    public isUpdatableResults(): boolean
                    /**
                     * Set whether prepared statements should be capable of returning
                     * auto-generated keys.
                     * @see java.sql.Connection#prepareStatement(String, int)
                     */
                    // @ts-ignore
                    public setReturnGeneratedKeys(returnGeneratedKeys: boolean): void
                    /**
                     * Return whether statements should be capable of returning
                     * auto-generated keys.
                     */
                    // @ts-ignore
                    public isReturnGeneratedKeys(): boolean
                    /**
                     * Set the column names of the auto-generated keys.
                     * @see java.sql.Connection#prepareStatement(String, String[])
                     */
                    // @ts-ignore
                    public setGeneratedKeysColumnNames(...names: java.lang.String[] | string[]): void
                    /**
                     * Return the column names of the auto generated keys.
                     */
                    // @ts-ignore
                    public getGeneratedKeysColumnNames(): string[]
                    /**
                     * Set the SQL executed by this operation.
                     */
                    // @ts-ignore
                    public setSql(sql: java.lang.String | string): void
                    /**
                     * Subclasses can override this to supply dynamic SQL if they wish, but SQL is
                     * normally set by calling the {@link #setSql} method or in a subclass constructor.
                     */
                    // @ts-ignore
                    public getSql(): string
                    /**
                     * Resolve the configured SQL for actual use.
                     * @return the SQL (never {#code null})
                     * @since 5.0
                     */
                    // @ts-ignore
                    resolveSql(): string
                    /**
                     * Add anonymous parameters, specifying only their SQL types
                     * as defined in the {@code java.sql.Types} class.
                     * <p>Parameter ordering is significant. This method is an alternative
                     * to the {@link #declareParameter} method, which should normally be preferred.
                     * @param types array of SQL types as defined in the
                     *  {#code java.sql.Types} class
                     * @throws InvalidDataAccessApiUsageException if the operation is already compiled
                     */
                    // @ts-ignore
                    public setTypes(types: number /*int*/[]): void
                    /**
                     * Declare a parameter for this operation.
                     * <p>The order in which this method is called is significant when using
                     * positional parameters. It is not significant when using named parameters
                     * with named SqlParameter objects here; it remains significant when using
                     * named parameters in combination with unnamed SqlParameter objects here.
                     * @param param the SqlParameter to add. This will specify SQL type and (optionally)
                     *  the parameter's name. Note that you typically use the {#link SqlParameter} class
                     *  itself here, not any of its subclasses.
                     * @throws InvalidDataAccessApiUsageException if the operation is already compiled,
                     *  and hence cannot be configured further
                     */
                    // @ts-ignore
                    public declareParameter(param: org.springframework.jdbc.core.SqlParameter): void
                    /**
                     * Add one or more declared parameters. Used for configuring this operation
                     * when used in a bean factory.  Each parameter will specify SQL type and (optionally)
                     * the parameter's name.
                     * @param parameters an array containing the declared {#link SqlParameter} objects
                     * @see #declaredParameters
                     */
                    // @ts-ignore
                    public setParameters(...parameters: org.springframework.jdbc.core.SqlParameter[]): void
                    /**
                     * Return a list of the declared {@link SqlParameter} objects.
                     */
                    // @ts-ignore
                    getDeclaredParameters(): Array<org.springframework.jdbc.core.SqlParameter>
                    /**
                     * Ensures compilation if used in a bean factory.
                     */
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    /**
                     * Compile this query.
                     * Ignores subsequent attempts to compile.
                     * @throws InvalidDataAccessApiUsageException if the object hasn't
                     *  been correctly initialized, for example if no DataSource has been provided
                     */
                    // @ts-ignore
                    public compile(): void
                    /**
                     * Is this operation "compiled"? Compilation, as in JDO,
                     * means that the operation is fully configured, and ready to use.
                     * The exact meaning of compilation will vary between subclasses.
                     * @return whether this operation is compiled and ready to use
                     */
                    // @ts-ignore
                    public isCompiled(): boolean
                    /**
                     * Check whether this operation has been compiled already;
                     * lazily compile it if not already compiled.
                     * <p>Automatically called by {@code validateParameters}.
                     * @see #validateParameters
                     */
                    // @ts-ignore
                    checkCompiled(): void
                    /**
                     * Validate the parameters passed to an execute method based on declared parameters.
                     * Subclasses should invoke this method before every {@code executeQuery()}
                     * or {@code update()} method.
                     * @param parameters the parameters supplied (may be {#code null})
                     * @throws InvalidDataAccessApiUsageException if the parameters are invalid
                     */
                    // @ts-ignore
                    validateParameters(parameters: java.lang.Object[] | any[]): void
                    /**
                     * Validate the named parameters passed to an execute method based on declared parameters.
                     * Subclasses should invoke this method before every {@code executeQuery()} or
                     * {@code update()} method.
                     * @param parameters parameter Map supplied (may be {#code null})
                     * @throws InvalidDataAccessApiUsageException if the parameters are invalid
                     */
                    // @ts-ignore
                    validateNamedParameters(parameters: java.util.Map<java.lang.String | string, any>): void
                    /**
                     * Subclasses must implement this template method to perform their own compilation.
                     * Invoked after this base class's compilation is complete.
                     * <p>Subclasses can assume that SQL and a DataSource have been supplied.
                     * @throws InvalidDataAccessApiUsageException if the subclass hasn't been
                     *  properly configured
                     */
                    // @ts-ignore
                    abstract compileInternal(): void
                    /**
                     * Return whether BLOB/CLOB parameters are supported for this kind of operation.
                     * <p>The default is {@code true}.
                     */
                    // @ts-ignore
                    supportsLobParameters(): boolean
                    /**
                     * Return whether this operation accepts additional parameters that are
                     * given but not actually used. Applies in particular to parameter Maps.
                     * <p>The default is {@code false}.
                     * @see StoredProcedure
                     */
                    // @ts-ignore
                    allowsUnusedParameters(): boolean
                }
            }
        }
    }
}
