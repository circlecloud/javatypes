declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * <b>This is the central class in the JDBC core package.</b>
                 * It simplifies the use of JDBC and helps to avoid common errors.
                 * It executes core JDBC workflow, leaving application code to provide SQL
                 * and extract results. This class executes SQL queries or updates, initiating
                 * iteration over ResultSets and catching JDBC exceptions and translating
                 * them to the generic, more informative exception hierarchy defined in the
                 * {@code org.springframework.dao} package.
                 * <p>Code using this class need only implement callback interfaces, giving
                 * them a clearly defined contract. The {@link PreparedStatementCreator} callback
                 * interface creates a prepared statement given a Connection, providing SQL and
                 * any necessary parameters. The {@link ResultSetExtractor} interface extracts
                 * values from a ResultSet. See also {@link PreparedStatementSetter} and
                 * {@link RowMapper} for two popular alternative callback interfaces.
                 * <p>Can be used within a service implementation via direct instantiation
                 * with a DataSource reference, or get prepared in an application context
                 * and given to services as bean reference. Note: The DataSource should
                 * always be configured as a bean in the application context, in the first case
                 * given to the service directly, in the second case to the prepared template.
                 * <p>Because this class is parameterizable by the callback interfaces and
                 * the {@link org.springframework.jdbc.support.SQLExceptionTranslator}
                 * interface, there should be no need to subclass it.
                 * <p>All SQL operations performed by this class are logged at debug level,
                 * using "org.springframework.jdbc.core.JdbcTemplate" as log category.
                 * <p><b>NOTE: An instance of this class is thread-safe once configured.</b>
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @author Thomas Risberg
                 * @since May 3, 2001
                 * @see PreparedStatementCreator
                 * @see PreparedStatementSetter
                 * @see CallableStatementCreator
                 * @see PreparedStatementCallback
                 * @see CallableStatementCallback
                 * @see ResultSetExtractor
                 * @see RowCallbackHandler
                 * @see RowMapper
                 * @see org.springframework.jdbc.support.SQLExceptionTranslator
                 */
                // @ts-ignore
                class JdbcTemplate extends org.springframework.jdbc.support.JdbcAccessor implements org.springframework.jdbc.core.JdbcOperations {
                    /**
                     * Construct a new JdbcTemplate for bean usage.
                     * <p>Note: The DataSource has to be set before using the instance.
                     * @see #setDataSource
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new JdbcTemplate, given a DataSource to obtain connections from.
                     * <p>Note: This will not trigger initialization of the exception translator.
                     * @param dataSource the JDBC DataSource to obtain connections from
                     */
                    // @ts-ignore
                    constructor(dataSource: javax.sql.DataSource)
                    /**
                     * Construct a new JdbcTemplate, given a DataSource to obtain connections from.
                     * <p>Note: Depending on the "lazyInit" flag, initialization of the exception translator
                     * will be triggered.
                     * @param dataSource the JDBC DataSource to obtain connections from
                     * @param lazyInit whether to lazily initialize the SQLExceptionTranslator
                     */
                    // @ts-ignore
                    constructor(dataSource: javax.sql.DataSource, lazyInit: boolean)
                    /**
                     * Set whether or not we want to ignore SQLWarnings.
                     * <p>Default is "true", swallowing and logging all warnings. Switch this flag
                     * to "false" to make the JdbcTemplate throw an SQLWarningException instead.
                     * @see java.sql.SQLWarning
                     * @see org.springframework.jdbc.SQLWarningException
                     * @see #handleWarnings
                     */
                    // @ts-ignore
                    public setIgnoreWarnings(ignoreWarnings: boolean): void
                    /**
                     * Return whether or not we ignore SQLWarnings.
                     */
                    // @ts-ignore
                    public isIgnoreWarnings(): boolean
                    /**
                     * Set the fetch size for this JdbcTemplate. This is important for processing large
                     * result sets: Setting this higher than the default value will increase processing
                     * speed at the cost of memory consumption; setting this lower can avoid transferring
                     * row data that will never be read by the application.
                     * <p>Default is -1, indicating to use the JDBC driver's default configuration
                     * (i.e. to not pass a specific fetch size setting on to the driver).
                     * <p>Note: As of 4.3, negative values other than -1 will get passed on to the
                     * driver, since e.g. MySQL supports special behavior for {@code Integer.MIN_VALUE}.
                     * @see java.sql.Statement#setFetchSize
                     */
                    // @ts-ignore
                    public setFetchSize(fetchSize: number /*int*/): void
                    /**
                     * Return the fetch size specified for this JdbcTemplate.
                     */
                    // @ts-ignore
                    public getFetchSize(): number /*int*/
                    /**
                     * Set the maximum number of rows for this JdbcTemplate. This is important for
                     * processing subsets of large result sets, avoiding to read and hold the entire
                     * result set in the database or in the JDBC driver if we're never interested in
                     * the entire result in the first place (for example, when performing searches
                     * that might return a large number of matches).
                     * <p>Default is -1, indicating to use the JDBC driver's default configuration
                     * (i.e. to not pass a specific max rows setting on to the driver).
                     * <p>Note: As of 4.3, negative values other than -1 will get passed on to the
                     * driver, in sync with {@link #setFetchSize}'s support for special MySQL values.
                     * @see java.sql.Statement#setMaxRows
                     */
                    // @ts-ignore
                    public setMaxRows(maxRows: number /*int*/): void
                    /**
                     * Return the maximum number of rows specified for this JdbcTemplate.
                     */
                    // @ts-ignore
                    public getMaxRows(): number /*int*/
                    /**
                     * Set the query timeout for statements that this JdbcTemplate executes.
                     * <p>Default is -1, indicating to use the JDBC driver's default
                     * (i.e. to not pass a specific query timeout setting on the driver).
                     * <p>Note: Any timeout specified here will be overridden by the remaining
                     * transaction timeout when executing within a transaction that has a
                     * timeout specified at the transaction level.
                     * @see java.sql.Statement#setQueryTimeout
                     */
                    // @ts-ignore
                    public setQueryTimeout(queryTimeout: number /*int*/): void
                    /**
                     * Return the query timeout for statements that this JdbcTemplate executes.
                     */
                    // @ts-ignore
                    public getQueryTimeout(): number /*int*/
                    /**
                     * Set whether results processing should be skipped. Can be used to optimize callable
                     * statement processing when we know that no results are being passed back - the processing
                     * of out parameter will still take place. This can be used to avoid a bug in some older
                     * Oracle JDBC drivers like 10.1.0.2.
                     */
                    // @ts-ignore
                    public setSkipResultsProcessing(skipResultsProcessing: boolean): void
                    /**
                     * Return whether results processing should be skipped.
                     */
                    // @ts-ignore
                    public isSkipResultsProcessing(): boolean
                    /**
                     * Set whether undeclared results should be skipped.
                     */
                    // @ts-ignore
                    public setSkipUndeclaredResults(skipUndeclaredResults: boolean): void
                    /**
                     * Return whether undeclared results should be skipped.
                     */
                    // @ts-ignore
                    public isSkipUndeclaredResults(): boolean
                    /**
                     * Set whether execution of a CallableStatement will return the results in a Map
                     * that uses case insensitive names for the parameters.
                     */
                    // @ts-ignore
                    public setResultsMapCaseInsensitive(resultsMapCaseInsensitive: boolean): void
                    /**
                     * Return whether execution of a CallableStatement will return the results in a Map
                     * that uses case insensitive names for the parameters.
                     */
                    // @ts-ignore
                    public isResultsMapCaseInsensitive(): boolean
                    // @ts-ignore
                    public execute<T>(action: org.springframework.jdbc.core.ConnectionCallback<T>): T
                    /**
                     * Create a close-suppressing proxy for the given JDBC Connection.
                     * Called by the {@code execute} method.
                     * <p>The proxy also prepares returned JDBC Statements, applying
                     * statement settings such as fetch size, max rows, and query timeout.
                     * @param con the JDBC Connection to create a proxy for
                     * @return the Connection proxy
                     * @see java.sql.Connection#close()
                     * @see #execute(ConnectionCallback)
                     * @see #applyStatementSettings
                     */
                    // @ts-ignore
                    createConnectionProxy(con: java.sql.Connection): java.sql.Connection
                    // @ts-ignore
                    public execute<T>(action: org.springframework.jdbc.core.StatementCallback<T>): T
                    // @ts-ignore
                    public execute(sql: java.lang.String | string): void
                    // @ts-ignore
                    public query<T>(sql: java.lang.String | string, rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                    // @ts-ignore
                    public query(sql: java.lang.String | string, rch: org.springframework.jdbc.core.RowCallbackHandler): void
                    // @ts-ignore
                    public query<T>(sql: java.lang.String | string, rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                    // @ts-ignore
                    public queryForMap(sql: java.lang.String | string): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public queryForObject<T>(sql: java.lang.String | string, rowMapper: org.springframework.jdbc.core.RowMapper<T>): T
                    // @ts-ignore
                    public queryForObject<T>(sql: java.lang.String | string, requiredType: java.lang.Class<T>): T
                    // @ts-ignore
                    public queryForList<T>(sql: java.lang.String | string, elementType: java.lang.Class<T>): Array<T>
                    // @ts-ignore
                    public queryForList(sql: java.lang.String | string): Array<java.util.Map<java.lang.String | string, java.lang.Object | any>>
                    // @ts-ignore
                    public queryForRowSet(sql: java.lang.String | string): org.springframework.jdbc.support.rowset.SqlRowSet
                    // @ts-ignore
                    public update(sql: java.lang.String | string): number /*int*/
                    // @ts-ignore
                    public batchUpdate(...sql: java.lang.String[] | string[]): number /*int*/[]
                    // @ts-ignore
                    public execute<T>(psc: org.springframework.jdbc.core.PreparedStatementCreator, action: org.springframework.jdbc.core.PreparedStatementCallback<T>): T
                    // @ts-ignore
                    public execute<T>(sql: java.lang.String | string, action: org.springframework.jdbc.core.PreparedStatementCallback<T>): T
                    /**
                     * Query using a prepared statement, allowing for a PreparedStatementCreator
                     * and a PreparedStatementSetter. Most other query methods use this method,
                     * but application code will always work with either a creator or a setter.
                     * @param psc a callback that creates a PreparedStatement given a Connection
                     * @param pss a callback that knows how to set values on the prepared statement.
                     *  If this is {#code null}, the SQL will be assumed to contain no bind parameters.
                     * @param rse a callback that will extract results
                     * @return an arbitrary result object, as returned by the ResultSetExtractor
                     * @throws DataAccessException if there is any problem
                     */
                    // @ts-ignore
                    public query<T>(psc: org.springframework.jdbc.core.PreparedStatementCreator, pss: org.springframework.jdbc.core.PreparedStatementSetter, rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                    // @ts-ignore
                    public query<T>(psc: org.springframework.jdbc.core.PreparedStatementCreator, rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                    // @ts-ignore
                    public query<T>(sql: java.lang.String | string, pss: org.springframework.jdbc.core.PreparedStatementSetter, rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                    // @ts-ignore
                    public query<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[], rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                    // @ts-ignore
                    public query<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                    // @ts-ignore
                    public query<T>(sql: java.lang.String | string, rse: org.springframework.jdbc.core.ResultSetExtractor<T>, ...args: java.lang.Object[] | any[]): T
                    // @ts-ignore
                    public query(psc: org.springframework.jdbc.core.PreparedStatementCreator, rch: org.springframework.jdbc.core.RowCallbackHandler): void
                    // @ts-ignore
                    public query(sql: java.lang.String | string, pss: org.springframework.jdbc.core.PreparedStatementSetter, rch: org.springframework.jdbc.core.RowCallbackHandler): void
                    // @ts-ignore
                    public query(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[], rch: org.springframework.jdbc.core.RowCallbackHandler): void
                    // @ts-ignore
                    public query(sql: java.lang.String | string, args: java.lang.Object[] | any[], rch: org.springframework.jdbc.core.RowCallbackHandler): void
                    // @ts-ignore
                    public query(sql: java.lang.String | string, rch: org.springframework.jdbc.core.RowCallbackHandler, ...args: java.lang.Object[] | any[]): void
                    // @ts-ignore
                    public query<T>(psc: org.springframework.jdbc.core.PreparedStatementCreator, rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                    // @ts-ignore
                    public query<T>(sql: java.lang.String | string, pss: org.springframework.jdbc.core.PreparedStatementSetter, rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                    // @ts-ignore
                    public query<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[], rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                    // @ts-ignore
                    public query<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                    // @ts-ignore
                    public query<T>(sql: java.lang.String | string, rowMapper: org.springframework.jdbc.core.RowMapper<T>, ...args: java.lang.Object[] | any[]): Array<T>
                    // @ts-ignore
                    public queryForObject<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[], rowMapper: org.springframework.jdbc.core.RowMapper<T>): T
                    // @ts-ignore
                    public queryForObject<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], rowMapper: org.springframework.jdbc.core.RowMapper<T>): T
                    // @ts-ignore
                    public queryForObject<T>(sql: java.lang.String | string, rowMapper: org.springframework.jdbc.core.RowMapper<T>, ...args: java.lang.Object[] | any[]): T
                    // @ts-ignore
                    public queryForObject<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[], requiredType: java.lang.Class<T>): T
                    // @ts-ignore
                    public queryForObject<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], requiredType: java.lang.Class<T>): T
                    // @ts-ignore
                    public queryForObject<T>(sql: java.lang.String | string, requiredType: java.lang.Class<T>, ...args: java.lang.Object[] | any[]): T
                    // @ts-ignore
                    public queryForMap(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[]): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public queryForMap(sql: java.lang.String | string, ...args: java.lang.Object[] | any[]): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public queryForList<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[], elementType: java.lang.Class<T>): Array<T>
                    // @ts-ignore
                    public queryForList<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], elementType: java.lang.Class<T>): Array<T>
                    // @ts-ignore
                    public queryForList<T>(sql: java.lang.String | string, elementType: java.lang.Class<T>, ...args: java.lang.Object[] | any[]): Array<T>
                    // @ts-ignore
                    public queryForList(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[]): Array<java.util.Map<java.lang.String | string, java.lang.Object | any>>
                    // @ts-ignore
                    public queryForList(sql: java.lang.String | string, ...args: java.lang.Object[] | any[]): Array<java.util.Map<java.lang.String | string, java.lang.Object | any>>
                    // @ts-ignore
                    public queryForRowSet(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[]): org.springframework.jdbc.support.rowset.SqlRowSet
                    // @ts-ignore
                    public queryForRowSet(sql: java.lang.String | string, ...args: java.lang.Object[] | any[]): org.springframework.jdbc.support.rowset.SqlRowSet
                    // @ts-ignore
                    update(psc: org.springframework.jdbc.core.PreparedStatementCreator, pss: org.springframework.jdbc.core.PreparedStatementSetter): number /*int*/
                    // @ts-ignore
                    public update(psc: org.springframework.jdbc.core.PreparedStatementCreator): number /*int*/
                    // @ts-ignore
                    public update(psc: org.springframework.jdbc.core.PreparedStatementCreator, generatedKeyHolder: org.springframework.jdbc.support.KeyHolder): number /*int*/
                    // @ts-ignore
                    public update(sql: java.lang.String | string, pss: org.springframework.jdbc.core.PreparedStatementSetter): number /*int*/
                    // @ts-ignore
                    public update(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[]): number /*int*/
                    // @ts-ignore
                    public update(sql: java.lang.String | string, ...args: java.lang.Object[] | any[]): number /*int*/
                    // @ts-ignore
                    public batchUpdate(sql: java.lang.String | string, pss: org.springframework.jdbc.core.BatchPreparedStatementSetter): number /*int*/[]
                    // @ts-ignore
                    public batchUpdate(sql: java.lang.String | string, batchArgs: java.util.List<java.lang.Object[] | any[]> | Array<java.lang.Object[] | any[]>): number /*int*/[]
                    // @ts-ignore
                    public batchUpdate(sql: java.lang.String | string, batchArgs: java.util.List<java.lang.Object[] | any[]> | Array<java.lang.Object[] | any[]>, argTypes: number /*int*/[]): number /*int*/[]
                    // @ts-ignore
                    public batchUpdate<T>(sql: java.lang.String | string, batchArgs: java.util.Collection<T> | Array<T>, batchSize: number /*int*/, pss: org.springframework.jdbc.core.ParameterizedPreparedStatementSetter<T>): number /*int*/[][]
                    // @ts-ignore
                    public execute<T>(csc: org.springframework.jdbc.core.CallableStatementCreator, action: org.springframework.jdbc.core.CallableStatementCallback<T>): T
                    // @ts-ignore
                    public execute<T>(callString: java.lang.String | string, action: org.springframework.jdbc.core.CallableStatementCallback<T>): T
                    // @ts-ignore
                    public call(csc: org.springframework.jdbc.core.CallableStatementCreator, declaredParameters: java.util.List<org.springframework.jdbc.core.SqlParameter> | Array<org.springframework.jdbc.core.SqlParameter>): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Extract returned ResultSets from the completed stored procedure.
                     * @param cs a JDBC wrapper for the stored procedure
                     * @param updateCountParameters the parameter list of declared update count parameters for the stored procedure
                     * @param resultSetParameters the parameter list of declared resultSet parameters for the stored procedure
                     * @return a Map that contains returned results
                     */
                    // @ts-ignore
                    extractReturnedResults(cs: java.sql.CallableStatement, updateCountParameters: java.util.List<org.springframework.jdbc.core.SqlParameter> | Array<org.springframework.jdbc.core.SqlParameter>, resultSetParameters: java.util.List<org.springframework.jdbc.core.SqlParameter> | Array<org.springframework.jdbc.core.SqlParameter>, updateCount: number /*int*/): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Extract output parameters from the completed stored procedure.
                     * @param cs the JDBC wrapper for the stored procedure
                     * @param parameters parameter list for the stored procedure
                     * @return a Map that contains returned results
                     */
                    // @ts-ignore
                    extractOutputParameters(cs: java.sql.CallableStatement, parameters: java.util.List<org.springframework.jdbc.core.SqlParameter> | Array<org.springframework.jdbc.core.SqlParameter>): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Process the given ResultSet from a stored procedure.
                     * @param rs the ResultSet to process
                     * @param param the corresponding stored procedure parameter
                     * @return a Map that contains returned results
                     */
                    // @ts-ignore
                    processResultSet(rs: java.sql.ResultSet, param: org.springframework.jdbc.core.ResultSetSupportingSqlParameter): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Create a new RowMapper for reading columns as key-value pairs.
                     * @return the RowMapper to use
                     * @see ColumnMapRowMapper
                     */
                    // @ts-ignore
                    getColumnMapRowMapper(): org.springframework.jdbc.core.RowMapper<java.util.Map<java.lang.String | string, java.lang.Object | any>>
                    /**
                     * Create a new RowMapper for reading result objects from a single column.
                     * @param requiredType the type that each result object is expected to match
                     * @return the RowMapper to use
                     * @see SingleColumnRowMapper
                     */
                    // @ts-ignore
                    getSingleColumnRowMapper<T>(requiredType: java.lang.Class<T>): org.springframework.jdbc.core.RowMapper<T>
                    /**
                     * Create a Map instance to be used as the results map.
                     * <p>If {@link #resultsMapCaseInsensitive} has been set to true,
                     * a {@link LinkedCaseInsensitiveMap} will be created; otherwise, a
                     * {@link LinkedHashMap} will be created.
                     * @return the results Map instance
                     * @see #setResultsMapCaseInsensitive
                     * @see #isResultsMapCaseInsensitive
                     */
                    // @ts-ignore
                    createResultsMap(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Prepare the given JDBC Statement (or PreparedStatement or CallableStatement),
                     * applying statement settings such as fetch size, max rows, and query timeout.
                     * @param stmt the JDBC Statement to prepare
                     * @throws SQLException if thrown by JDBC API
                     * @see #setFetchSize
                     * @see #setMaxRows
                     * @see #setQueryTimeout
                     * @see org.springframework.jdbc.datasource.DataSourceUtils#applyTransactionTimeout
                     */
                    // @ts-ignore
                    applyStatementSettings(stmt: java.sql.Statement): void
                    /**
                     * Create a new arg-based PreparedStatementSetter using the args passed in.
                     * <p>By default, we'll create an {@link ArgumentPreparedStatementSetter}.
                     * This method allows for the creation to be overridden by subclasses.
                     * @param args object array with arguments
                     * @return the new PreparedStatementSetter to use
                     */
                    // @ts-ignore
                    newArgPreparedStatementSetter(args: java.lang.Object[] | any[]): org.springframework.jdbc.core.PreparedStatementSetter
                    /**
                     * Create a new arg-type-based PreparedStatementSetter using the args and types passed in.
                     * <p>By default, we'll create an {@link ArgumentTypePreparedStatementSetter}.
                     * This method allows for the creation to be overridden by subclasses.
                     * @param args object array with arguments
                     * @param argTypes int array of SQLTypes for the associated arguments
                     * @return the new PreparedStatementSetter to use
                     */
                    // @ts-ignore
                    newArgTypePreparedStatementSetter(args: java.lang.Object[] | any[], argTypes: number /*int*/[]): org.springframework.jdbc.core.PreparedStatementSetter
                    /**
                     * Throw an SQLWarningException if we're not ignoring warnings,
                     * otherwise log the warnings at debug level.
                     * @param stmt the current JDBC statement
                     * @throws SQLWarningException if not ignoring warnings
                     * @see org.springframework.jdbc.SQLWarningException
                     */
                    // @ts-ignore
                    handleWarnings(stmt: java.sql.Statement): void
                    /**
                     * Throw an SQLWarningException if encountering an actual warning.
                     * @param warning the warnings object from the current statement.
                     *  May be {#code null}, in which case this method does nothing.
                     * @throws SQLWarningException in case of an actual warning to be raised
                     */
                    // @ts-ignore
                    handleWarnings(warning: java.sql.SQLWarning): void
                    /**
                     * Translate the given {@link SQLException} into a generic {@link DataAccessException}.
                     * @param task readable text describing the task being attempted
                     * @param sql the SQL query or update that caused the problem (may be {#code null})
                     * @param ex the offending {#code SQLException}
                     * @return a DataAccessException wrapping the {#code SQLException} (never {@code null})
                     * @since 5.0
                     * @see #getExceptionTranslator()
                     */
                    // @ts-ignore
                    translateException(task: java.lang.String | string, sql: java.lang.String | string, ex: java.sql.SQLException): DataAccessException
                }
            }
        }
    }
}
