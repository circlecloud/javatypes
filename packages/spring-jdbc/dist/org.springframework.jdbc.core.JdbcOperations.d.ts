declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Interface specifying a basic set of JDBC operations.
                 * Implemented by {@link JdbcTemplate}. Not often used directly, but a useful
                 * option to enhance testability, as it can easily be mocked or stubbed.
                 * <p>Alternatively, the standard JDBC infrastructure can be mocked.
                 * However, mocking this interface constitutes significantly less work.
                 * As an alternative to a mock objects approach to testing data access code,
                 * consider the powerful integration testing support provided in the
                 * {@code org.springframework.test} package, shipped in
                 * {@code spring-test.jar}.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @see JdbcTemplate
                 */
                // @ts-ignore
                interface JdbcOperations {
                    /**
                     * Execute a JDBC data access operation, implemented as callback action
                     * working on a JDBC Connection. This allows for implementing arbitrary
                     * data access operations, within Spring's managed JDBC environment:
                     * that is, participating in Spring-managed transactions and converting
                     * JDBC SQLExceptions into Spring's DataAccessException hierarchy.
                     * <p>The callback action can return a result object, for example a domain
                     * object or a collection of domain objects.
                     * @param action a callback object that specifies the action
                     * @return a result object returned by the action, or {#code null} if none
                     * @throws DataAccessException if there is any problem
                     */
                    // @ts-ignore
                    execute<T>(action: org.springframework.jdbc.core.ConnectionCallback<T>): T
                    /**
                     * Execute a JDBC data access operation, implemented as callback action
                     * working on a JDBC Statement. This allows for implementing arbitrary data
                     * access operations on a single Statement, within Spring's managed JDBC
                     * environment: that is, participating in Spring-managed transactions and
                     * converting JDBC SQLExceptions into Spring's DataAccessException hierarchy.
                     * <p>The callback action can return a result object, for example a domain
                     * object or a collection of domain objects.
                     * @param action a callback that specifies the action
                     * @return a result object returned by the action, or {#code null} if none
                     * @throws DataAccessException if there is any problem
                     */
                    // @ts-ignore
                    execute<T>(action: org.springframework.jdbc.core.StatementCallback<T>): T
                    /**
                     * Issue a single SQL execute, typically a DDL statement.
                     * @param sql static SQL to execute
                     * @throws DataAccessException if there is any problem
                     */
                    // @ts-ignore
                    execute(sql: java.lang.String | string): void
                    /**
                     * Execute a query given static SQL, reading the ResultSet with a
                     * ResultSetExtractor.
                     * <p>Uses a JDBC Statement, not a PreparedStatement. If you want to
                     * execute a static query with a PreparedStatement, use the overloaded
                     * {@code query} method with {@code null} as argument array.
                     * @param sql the SQL query to execute
                     * @param rse a callback that will extract all rows of results
                     * @return an arbitrary result object, as returned by the ResultSetExtractor
                     * @throws DataAccessException if there is any problem executing the query
                     * @see #query(String, Object[], ResultSetExtractor)
                     */
                    // @ts-ignore
                    query<T>(sql: java.lang.String | string, rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                    /**
                     * Execute a query given static SQL, reading the ResultSet on a per-row
                     * basis with a RowCallbackHandler.
                     * <p>Uses a JDBC Statement, not a PreparedStatement. If you want to
                     * execute a static query with a PreparedStatement, use the overloaded
                     * {@code query} method with {@code null} as argument array.
                     * @param sql the SQL query to execute
                     * @param rch a callback that will extract results, one row at a time
                     * @throws DataAccessException if there is any problem executing the query
                     * @see #query(String, Object[], RowCallbackHandler)
                     */
                    // @ts-ignore
                    query(sql: java.lang.String | string, rch: org.springframework.jdbc.core.RowCallbackHandler): void
                    /**
                     * Execute a query given static SQL, mapping each row to a result object
                     * via a RowMapper.
                     * <p>Uses a JDBC Statement, not a PreparedStatement. If you want to
                     * execute a static query with a PreparedStatement, use the overloaded
                     * {@code query} method with {@code null} as argument array.
                     * @param sql the SQL query to execute
                     * @param rowMapper a callback that will map one object per row
                     * @return the result List, containing mapped objects
                     * @throws DataAccessException if there is any problem executing the query
                     * @see #query(String, Object[], RowMapper)
                     */
                    // @ts-ignore
                    query<T>(sql: java.lang.String | string, rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                    /**
                     * Execute a query given static SQL, mapping a single result row to a
                     * result object via a RowMapper.
                     * <p>Uses a JDBC Statement, not a PreparedStatement. If you want to
                     * execute a static query with a PreparedStatement, use the overloaded
                     * {@link #queryForObject(String, RowMapper, Object...)} method with
                     * {@code null} as argument array.
                     * @param sql the SQL query to execute
                     * @param rowMapper a callback that will map one object per row
                     * @return the single mapped object (may be {#code null} if the given
                     *  {@link RowMapper} returned {@code} null)
                     * @throws IncorrectResultSizeDataAccessException if the query does not
                     *  return exactly one row
                     * @throws DataAccessException if there is any problem executing the query
                     * @see #queryForObject(String, Object[], RowMapper)
                     */
                    // @ts-ignore
                    queryForObject<T>(sql: java.lang.String | string, rowMapper: org.springframework.jdbc.core.RowMapper<T>): T
                    /**
                     * Execute a query for a result object, given static SQL.
                     * <p>Uses a JDBC Statement, not a PreparedStatement. If you want to
                     * execute a static query with a PreparedStatement, use the overloaded
                     * {@link #queryForObject(String, Class, Object...)} method with
                     * {@code null} as argument array.
                     * <p>This method is useful for running static SQL with a known outcome.
                     * The query is expected to be a single row/single column query; the returned
                     * result will be directly mapped to the corresponding object type.
                     * @param sql the SQL query to execute
                     * @param requiredType the type that the result object is expected to match
                     * @return the result object of the required type, or {#code null} in case of SQL NULL
                     * @throws IncorrectResultSizeDataAccessException if the query does not return
                     *  exactly one row, or does not return exactly one column in that row
                     * @throws DataAccessException if there is any problem executing the query
                     * @see #queryForObject(String, Object[], Class)
                     */
                    // @ts-ignore
                    queryForObject<T>(sql: java.lang.String | string, requiredType: java.lang.Class<T>): T
                    /**
                     * Execute a query for a result map, given static SQL.
                     * <p>Uses a JDBC Statement, not a PreparedStatement. If you want to
                     * execute a static query with a PreparedStatement, use the overloaded
                     * {@link #queryForMap(String, Object...)} method with {@code null}
                     * as argument array.
                     * <p>The query is expected to be a single row query; the result row will be
                     * mapped to a Map (one entry for each column, using the column name as the key).
                     * @param sql the SQL query to execute
                     * @return the result Map (one entry per column, with column name as key)
                     * @throws IncorrectResultSizeDataAccessException if the query does not
                     *  return exactly one row
                     * @throws DataAccessException if there is any problem executing the query
                     * @see #queryForMap(String, Object[])
                     * @see ColumnMapRowMapper
                     */
                    // @ts-ignore
                    queryForMap(sql: java.lang.String | string): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Execute a query for a result list, given static SQL.
                     * <p>Uses a JDBC Statement, not a PreparedStatement. If you want to
                     * execute a static query with a PreparedStatement, use the overloaded
                     * {@code queryForList} method with {@code null} as argument array.
                     * <p>The results will be mapped to a List (one entry for each row) of
                     * result objects, each of them matching the specified element type.
                     * @param sql the SQL query to execute
                     * @param elementType the required type of element in the result list
                     *  (for example, {#code Integer.class})
                     * @return a List of objects that match the specified element type
                     * @throws DataAccessException if there is any problem executing the query
                     * @see #queryForList(String, Object[], Class)
                     * @see SingleColumnRowMapper
                     */
                    // @ts-ignore
                    queryForList<T>(sql: java.lang.String | string, elementType: java.lang.Class<T>): Array<T>
                    /**
                     * Execute a query for a result list, given static SQL.
                     * <p>Uses a JDBC Statement, not a PreparedStatement. If you want to
                     * execute a static query with a PreparedStatement, use the overloaded
                     * {@code queryForList} method with {@code null} as argument array.
                     * <p>The results will be mapped to a List (one entry for each row) of
                     * Maps (one entry for each column using the column name as the key).
                     * Each element in the list will be of the form returned by this interface's
                     * {@code queryForMap} methods.
                     * @param sql the SQL query to execute
                     * @return an List that contains a Map per row
                     * @throws DataAccessException if there is any problem executing the query
                     * @see #queryForList(String, Object[])
                     */
                    // @ts-ignore
                    queryForList(sql: java.lang.String | string): Array<java.util.Map<java.lang.String | string, java.lang.Object | any>>
                    /**
                     * Execute a query for an SqlRowSet, given static SQL.
                     * <p>Uses a JDBC Statement, not a PreparedStatement. If you want to
                     * execute a static query with a PreparedStatement, use the overloaded
                     * {@code queryForRowSet} method with {@code null} as argument array.
                     * <p>The results will be mapped to an SqlRowSet which holds the data in a
                     * disconnected fashion. This wrapper will translate any SQLExceptions thrown.
                     * <p>Note that, for the default implementation, JDBC RowSet support needs to
                     * be available at runtime: by default, Sun's {@code com.sun.rowset.CachedRowSetImpl}
                     * class is used, which is part of JDK 1.5+ and also available separately as part of
                     * Sun's JDBC RowSet Implementations download (rowset.jar).
                     * @param sql the SQL query to execute
                     * @return an SqlRowSet representation (possibly a wrapper around a
                     *  {#code javax.sql.rowset.CachedRowSet})
                     * @throws DataAccessException if there is any problem executing the query
                     * @see #queryForRowSet(String, Object[])
                     * @see SqlRowSetResultSetExtractor
                     * @see javax.sql.rowset.CachedRowSet
                     */
                    // @ts-ignore
                    queryForRowSet(sql: java.lang.String | string): org.springframework.jdbc.support.rowset.SqlRowSet
                    /**
                     * Issue a single SQL update operation (such as an insert, update or delete statement).
                     * @param sql static SQL to execute
                     * @return the number of rows affected
                     * @throws DataAccessException if there is any problem.
                     */
                    // @ts-ignore
                    update(sql: java.lang.String | string): number /*int*/
                    /**
                     * Issue multiple SQL updates on a single JDBC Statement using batching.
                     * <p>Will fall back to separate updates on a single Statement if the JDBC
                     * driver does not support batch updates.
                     * @param sql defining an array of SQL statements that will be executed.
                     * @return an array of the number of rows affected by each statement
                     * @throws DataAccessException if there is any problem executing the batch
                     */
                    // @ts-ignore
                    batchUpdate(...sql: java.lang.String[] | string[]): number /*int*/[]
                    /**
                     * Execute a JDBC data access operation, implemented as callback action
                     * working on a JDBC PreparedStatement. This allows for implementing arbitrary
                     * data access operations on a single Statement, within Spring's managed JDBC
                     * environment: that is, participating in Spring-managed transactions and
                     * converting JDBC SQLExceptions into Spring's DataAccessException hierarchy.
                     * <p>The callback action can return a result object, for example a domain
                     * object or a collection of domain objects.
                     * @param psc a callback that creates a PreparedStatement given a Connection
                     * @param action a callback that specifies the action
                     * @return a result object returned by the action, or {#code null} if none
                     * @throws DataAccessException if there is any problem
                     */
                    // @ts-ignore
                    execute<T>(psc: org.springframework.jdbc.core.PreparedStatementCreator, action: org.springframework.jdbc.core.PreparedStatementCallback<T>): T
                    /**
                     * Execute a JDBC data access operation, implemented as callback action
                     * working on a JDBC PreparedStatement. This allows for implementing arbitrary
                     * data access operations on a single Statement, within Spring's managed JDBC
                     * environment: that is, participating in Spring-managed transactions and
                     * converting JDBC SQLExceptions into Spring's DataAccessException hierarchy.
                     * <p>The callback action can return a result object, for example a domain
                     * object or a collection of domain objects.
                     * @param sql the SQL to execute
                     * @param action a callback that specifies the action
                     * @return a result object returned by the action, or {#code null} if none
                     * @throws DataAccessException if there is any problem
                     */
                    // @ts-ignore
                    execute<T>(sql: java.lang.String | string, action: org.springframework.jdbc.core.PreparedStatementCallback<T>): T
                    /**
                     * Query using a prepared statement, reading the ResultSet with a ResultSetExtractor.
                     * <p>A PreparedStatementCreator can either be implemented directly or
                     * configured through a PreparedStatementCreatorFactory.
                     * @param psc a callback that creates a PreparedStatement given a Connection
                     * @param rse a callback that will extract results
                     * @return an arbitrary result object, as returned by the ResultSetExtractor
                     * @throws DataAccessException if there is any problem
                     * @see PreparedStatementCreatorFactory
                     */
                    // @ts-ignore
                    query<T>(psc: org.springframework.jdbc.core.PreparedStatementCreator, rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                    /**
                     * Query using a prepared statement, reading the ResultSet with a ResultSetExtractor.
                     * @param sql the SQL query to execute
                     * @param pss a callback that knows how to set values on the prepared statement.
                     *  If this is {#code null}, the SQL will be assumed to contain no bind parameters.
                     *  Even if there are no bind parameters, this callback may be used to set the
                     *  fetch size and other performance options.
                     * @param rse a callback that will extract results
                     * @return an arbitrary result object, as returned by the ResultSetExtractor
                     * @throws DataAccessException if there is any problem
                     */
                    // @ts-ignore
                    query<T>(sql: java.lang.String | string, pss: org.springframework.jdbc.core.PreparedStatementSetter, rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of arguments
                     * to bind to the query, reading the ResultSet with a ResultSetExtractor.
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     * @param argTypes the SQL types of the arguments
                     *  (constants from {#code java.sql.Types})
                     * @param rse a callback that will extract results
                     * @return an arbitrary result object, as returned by the ResultSetExtractor
                     * @throws DataAccessException if the query fails
                     * @see java.sql.Types
                     */
                    // @ts-ignore
                    query<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[], rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of arguments
                     * to bind to the query, reading the ResultSet with a ResultSetExtractor.
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @param rse a callback that will extract results
                     * @return an arbitrary result object, as returned by the ResultSetExtractor
                     * @throws DataAccessException if the query fails
                     */
                    // @ts-ignore
                    query<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of arguments
                     * to bind to the query, reading the ResultSet with a ResultSetExtractor.
                     * @param sql the SQL query to execute
                     * @param rse a callback that will extract results
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @return an arbitrary result object, as returned by the ResultSetExtractor
                     * @throws DataAccessException if the query fails
                     * @since 3.0.1
                     */
                    // @ts-ignore
                    query<T>(sql: java.lang.String | string, rse: org.springframework.jdbc.core.ResultSetExtractor<T>, ...args: java.lang.Object[] | any[]): T
                    /**
                     * Query using a prepared statement, reading the ResultSet on a per-row basis
                     * with a RowCallbackHandler.
                     * <p>A PreparedStatementCreator can either be implemented directly or
                     * configured through a PreparedStatementCreatorFactory.
                     * @param psc a callback that creates a PreparedStatement given a Connection
                     * @param rch a callback that will extract results, one row at a time
                     * @throws DataAccessException if there is any problem
                     * @see PreparedStatementCreatorFactory
                     */
                    // @ts-ignore
                    query(psc: org.springframework.jdbc.core.PreparedStatementCreator, rch: org.springframework.jdbc.core.RowCallbackHandler): void
                    /**
                     * Query given SQL to create a prepared statement from SQL and a
                     * PreparedStatementSetter implementation that knows how to bind values to the
                     * query, reading the ResultSet on a per-row basis with a RowCallbackHandler.
                     * @param sql the SQL query to execute
                     * @param pss a callback that knows how to set values on the prepared statement.
                     *  If this is {#code null}, the SQL will be assumed to contain no bind parameters.
                     *  Even if there are no bind parameters, this callback may be used to set the
                     *  fetch size and other performance options.
                     * @param rch a callback that will extract results, one row at a time
                     * @throws DataAccessException if the query fails
                     */
                    // @ts-ignore
                    query(sql: java.lang.String | string, pss: org.springframework.jdbc.core.PreparedStatementSetter, rch: org.springframework.jdbc.core.RowCallbackHandler): void
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, reading the ResultSet on a per-row basis
                     * with a RowCallbackHandler.
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     * @param argTypes the SQL types of the arguments
                     *  (constants from {#code java.sql.Types})
                     * @param rch a callback that will extract results, one row at a time
                     * @throws DataAccessException if the query fails
                     * @see java.sql.Types
                     */
                    // @ts-ignore
                    query(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[], rch: org.springframework.jdbc.core.RowCallbackHandler): void
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, reading the ResultSet on a per-row basis
                     * with a RowCallbackHandler.
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @param rch a callback that will extract results, one row at a time
                     * @throws DataAccessException if the query fails
                     */
                    // @ts-ignore
                    query(sql: java.lang.String | string, args: java.lang.Object[] | any[], rch: org.springframework.jdbc.core.RowCallbackHandler): void
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, reading the ResultSet on a per-row basis
                     * with a RowCallbackHandler.
                     * @param sql the SQL query to execute
                     * @param rch a callback that will extract results, one row at a time
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @throws DataAccessException if the query fails
                     * @since 3.0.1
                     */
                    // @ts-ignore
                    query(sql: java.lang.String | string, rch: org.springframework.jdbc.core.RowCallbackHandler, ...args: java.lang.Object[] | any[]): void
                    /**
                     * Query using a prepared statement, mapping each row to a result object
                     * via a RowMapper.
                     * <p>A PreparedStatementCreator can either be implemented directly or
                     * configured through a PreparedStatementCreatorFactory.
                     * @param psc a callback that creates a PreparedStatement given a Connection
                     * @param rowMapper a callback that will map one object per row
                     * @return the result List, containing mapped objects
                     * @throws DataAccessException if there is any problem
                     * @see PreparedStatementCreatorFactory
                     */
                    // @ts-ignore
                    query<T>(psc: org.springframework.jdbc.core.PreparedStatementCreator, rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                    /**
                     * Query given SQL to create a prepared statement from SQL and a
                     * PreparedStatementSetter implementation that knows how to bind values
                     * to the query, mapping each row to a result object via a RowMapper.
                     * @param sql the SQL query to execute
                     * @param pss a callback that knows how to set values on the prepared statement.
                     *  If this is {#code null}, the SQL will be assumed to contain no bind parameters.
                     *  Even if there are no bind parameters, this callback may be used to set the
                     *  fetch size and other performance options.
                     * @param rowMapper a callback that will map one object per row
                     * @return the result List, containing mapped objects
                     * @throws DataAccessException if the query fails
                     */
                    // @ts-ignore
                    query<T>(sql: java.lang.String | string, pss: org.springframework.jdbc.core.PreparedStatementSetter, rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, mapping each row to a result object
                     * via a RowMapper.
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     * @param argTypes the SQL types of the arguments
                     *  (constants from {#code java.sql.Types})
                     * @param rowMapper a callback that will map one object per row
                     * @return the result List, containing mapped objects
                     * @throws DataAccessException if the query fails
                     * @see java.sql.Types
                     */
                    // @ts-ignore
                    query<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[], rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, mapping each row to a result object
                     * via a RowMapper.
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @param rowMapper a callback that will map one object per row
                     * @return the result List, containing mapped objects
                     * @throws DataAccessException if the query fails
                     */
                    // @ts-ignore
                    query<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, mapping each row to a result object
                     * via a RowMapper.
                     * @param sql the SQL query to execute
                     * @param rowMapper a callback that will map one object per row
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @return the result List, containing mapped objects
                     * @throws DataAccessException if the query fails
                     * @since 3.0.1
                     */
                    // @ts-ignore
                    query<T>(sql: java.lang.String | string, rowMapper: org.springframework.jdbc.core.RowMapper<T>, ...args: java.lang.Object[] | any[]): Array<T>
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list
                     * of arguments to bind to the query, mapping a single result row to a
                     * result object via a RowMapper.
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type)
                     * @param argTypes the SQL types of the arguments
                     *  (constants from {#code java.sql.Types})
                     * @param rowMapper a callback that will map one object per row
                     * @return the single mapped object (may be {#code null} if the given
                     *  {@link RowMapper} returned {@code} null)
                     * @throws IncorrectResultSizeDataAccessException if the query does not
                     *  return exactly one row
                     * @throws DataAccessException if the query fails
                     */
                    // @ts-ignore
                    queryForObject<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[], rowMapper: org.springframework.jdbc.core.RowMapper<T>): T
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list
                     * of arguments to bind to the query, mapping a single result row to a
                     * result object via a RowMapper.
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @param rowMapper a callback that will map one object per row
                     * @return the single mapped object (may be {#code null} if the given
                     *  {@link RowMapper} returned {@code} null)
                     * @throws IncorrectResultSizeDataAccessException if the query does not
                     *  return exactly one row
                     * @throws DataAccessException if the query fails
                     */
                    // @ts-ignore
                    queryForObject<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], rowMapper: org.springframework.jdbc.core.RowMapper<T>): T
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list
                     * of arguments to bind to the query, mapping a single result row to a
                     * result object via a RowMapper.
                     * @param sql the SQL query to execute
                     * @param rowMapper a callback that will map one object per row
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @return the single mapped object (may be {#code null} if the given
                     *  {@link RowMapper} returned {@code} null)
                     * @throws IncorrectResultSizeDataAccessException if the query does not
                     *  return exactly one row
                     * @throws DataAccessException if the query fails
                     * @since 3.0.1
                     */
                    // @ts-ignore
                    queryForObject<T>(sql: java.lang.String | string, rowMapper: org.springframework.jdbc.core.RowMapper<T>, ...args: java.lang.Object[] | any[]): T
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, expecting a result object.
                     * <p>The query is expected to be a single row/single column query; the returned
                     * result will be directly mapped to the corresponding object type.
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     * @param argTypes the SQL types of the arguments
                     *  (constants from {#code java.sql.Types})
                     * @param requiredType the type that the result object is expected to match
                     * @return the result object of the required type, or {#code null} in case of SQL NULL
                     * @throws IncorrectResultSizeDataAccessException if the query does not return
                     *  exactly one row, or does not return exactly one column in that row
                     * @throws DataAccessException if the query fails
                     * @see #queryForObject(String, Class)
                     * @see java.sql.Types
                     */
                    // @ts-ignore
                    queryForObject<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[], requiredType: java.lang.Class<T>): T
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, expecting a result object.
                     * <p>The query is expected to be a single row/single column query; the returned
                     * result will be directly mapped to the corresponding object type.
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @param requiredType the type that the result object is expected to match
                     * @return the result object of the required type, or {#code null} in case of SQL NULL
                     * @throws IncorrectResultSizeDataAccessException if the query does not return
                     *  exactly one row, or does not return exactly one column in that row
                     * @throws DataAccessException if the query fails
                     * @see #queryForObject(String, Class)
                     */
                    // @ts-ignore
                    queryForObject<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], requiredType: java.lang.Class<T>): T
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, expecting a result object.
                     * <p>The query is expected to be a single row/single column query; the returned
                     * result will be directly mapped to the corresponding object type.
                     * @param sql the SQL query to execute
                     * @param requiredType the type that the result object is expected to match
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @return the result object of the required type, or {#code null} in case of SQL NULL
                     * @throws IncorrectResultSizeDataAccessException if the query does not return
                     *  exactly one row, or does not return exactly one column in that row
                     * @throws DataAccessException if the query fails
                     * @since 3.0.1
                     * @see #queryForObject(String, Class)
                     */
                    // @ts-ignore
                    queryForObject<T>(sql: java.lang.String | string, requiredType: java.lang.Class<T>, ...args: java.lang.Object[] | any[]): T
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, expecting a result map.
                     * <p>The query is expected to be a single row query; the result row will be
                     * mapped to a Map (one entry for each column, using the column name as the key).
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     * @param argTypes the SQL types of the arguments
                     *  (constants from {#code java.sql.Types})
                     * @return the result Map (one entry per column, with column name as key)
                     * @throws IncorrectResultSizeDataAccessException if the query does not
                     *  return exactly one row
                     * @throws DataAccessException if the query fails
                     * @see #queryForMap(String)
                     * @see ColumnMapRowMapper
                     * @see java.sql.Types
                     */
                    // @ts-ignore
                    queryForMap(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[]): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, expecting a result map.
                     * <p>The {@code queryForMap} methods defined by this interface are appropriate
                     * when you don't have a domain model. Otherwise, consider using one of the
                     * {@code queryForObject} methods.
                     * <p>The query is expected to be a single row query; the result row will be
                     * mapped to a Map (one entry for each column, using the column name as the key).
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @return the result Map (one entry for each column, using the
                     *  column name as the key)
                     * @throws IncorrectResultSizeDataAccessException if the query does not
                     *  return exactly one row
                     * @throws DataAccessException if the query fails
                     * @see #queryForMap(String)
                     * @see ColumnMapRowMapper
                     */
                    // @ts-ignore
                    queryForMap(sql: java.lang.String | string, ...args: java.lang.Object[] | any[]): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, expecting a result list.
                     * <p>The results will be mapped to a List (one entry for each row) of
                     * result objects, each of them matching the specified element type.
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     * @param argTypes the SQL types of the arguments
                     *  (constants from {#code java.sql.Types})
                     * @param elementType the required type of element in the result list
                     *  (for example, {#code Integer.class})
                     * @return a List of objects that match the specified element type
                     * @throws DataAccessException if the query fails
                     * @see #queryForList(String, Class)
                     * @see SingleColumnRowMapper
                     */
                    // @ts-ignore
                    queryForList<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[], elementType: java.lang.Class<T>): Array<T>
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, expecting a result list.
                     * <p>The results will be mapped to a List (one entry for each row) of
                     * result objects, each of them matching the specified element type.
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @param elementType the required type of element in the result list
                     *  (for example, {#code Integer.class})
                     * @return a List of objects that match the specified element type
                     * @throws DataAccessException if the query fails
                     * @see #queryForList(String, Class)
                     * @see SingleColumnRowMapper
                     */
                    // @ts-ignore
                    queryForList<T>(sql: java.lang.String | string, args: java.lang.Object[] | any[], elementType: java.lang.Class<T>): Array<T>
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, expecting a result list.
                     * <p>The results will be mapped to a List (one entry for each row) of
                     * result objects, each of them matching the specified element type.
                     * @param sql the SQL query to execute
                     * @param elementType the required type of element in the result list
                     *  (for example, {#code Integer.class})
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @return a List of objects that match the specified element type
                     * @throws DataAccessException if the query fails
                     * @since 3.0.1
                     * @see #queryForList(String, Class)
                     * @see SingleColumnRowMapper
                     */
                    // @ts-ignore
                    queryForList<T>(sql: java.lang.String | string, elementType: java.lang.Class<T>, ...args: java.lang.Object[] | any[]): Array<T>
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, expecting a result list.
                     * <p>The results will be mapped to a List (one entry for each row) of
                     * Maps (one entry for each column, using the column name as the key).
                     * Each element in the list will be of the form returned by this interface's
                     * {@code queryForMap} methods.
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     * @param argTypes the SQL types of the arguments
                     *  (constants from {#code java.sql.Types})
                     * @return a List that contains a Map per row
                     * @throws DataAccessException if the query fails
                     * @see #queryForList(String)
                     * @see java.sql.Types
                     */
                    // @ts-ignore
                    queryForList(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[]): Array<java.util.Map<java.lang.String | string, java.lang.Object | any>>
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, expecting a result list.
                     * <p>The results will be mapped to a List (one entry for each row) of
                     * Maps (one entry for each column, using the column name as the key).
                     * Each element in the list will be of the form returned by this interface's
                     * {@code queryForMap} methods.
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @return a List that contains a Map per row
                     * @throws DataAccessException if the query fails
                     * @see #queryForList(String)
                     */
                    // @ts-ignore
                    queryForList(sql: java.lang.String | string, ...args: java.lang.Object[] | any[]): Array<java.util.Map<java.lang.String | string, java.lang.Object | any>>
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, expecting an SqlRowSet.
                     * <p>The results will be mapped to an SqlRowSet which holds the data in a
                     * disconnected fashion. This wrapper will translate any SQLExceptions thrown.
                     * <p>Note that, for the default implementation, JDBC RowSet support needs to
                     * be available at runtime: by default, Sun's {@code com.sun.rowset.CachedRowSetImpl}
                     * class is used, which is part of JDK 1.5+ and also available separately as part of
                     * Sun's JDBC RowSet Implementations download (rowset.jar).
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     * @param argTypes the SQL types of the arguments
                     *  (constants from {#code java.sql.Types})
                     * @return an SqlRowSet representation (possibly a wrapper around a
                     *  {#code javax.sql.rowset.CachedRowSet})
                     * @throws DataAccessException if there is any problem executing the query
                     * @see #queryForRowSet(String)
                     * @see SqlRowSetResultSetExtractor
                     * @see javax.sql.rowset.CachedRowSet
                     * @see java.sql.Types
                     */
                    // @ts-ignore
                    queryForRowSet(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[]): org.springframework.jdbc.support.rowset.SqlRowSet
                    /**
                     * Query given SQL to create a prepared statement from SQL and a list of
                     * arguments to bind to the query, expecting an SqlRowSet.
                     * <p>The results will be mapped to an SqlRowSet which holds the data in a
                     * disconnected fashion. This wrapper will translate any SQLExceptions thrown.
                     * <p>Note that, for the default implementation, JDBC RowSet support needs to
                     * be available at runtime: by default, Sun's {@code com.sun.rowset.CachedRowSetImpl}
                     * class is used, which is part of JDK 1.5+ and also available separately as part of
                     * Sun's JDBC RowSet Implementations download (rowset.jar).
                     * @param sql the SQL query to execute
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @return an SqlRowSet representation (possibly a wrapper around a
                     *  {#code javax.sql.rowset.CachedRowSet})
                     * @throws DataAccessException if there is any problem executing the query
                     * @see #queryForRowSet(String)
                     * @see SqlRowSetResultSetExtractor
                     * @see javax.sql.rowset.CachedRowSet
                     */
                    // @ts-ignore
                    queryForRowSet(sql: java.lang.String | string, ...args: java.lang.Object[] | any[]): org.springframework.jdbc.support.rowset.SqlRowSet
                    /**
                     * Issue a single SQL update operation (such as an insert, update or delete
                     * statement) using a PreparedStatementCreator to provide SQL and any
                     * required parameters.
                     * <p>A PreparedStatementCreator can either be implemented directly or
                     * configured through a PreparedStatementCreatorFactory.
                     * @param psc a callback that provides SQL and any necessary parameters
                     * @return the number of rows affected
                     * @throws DataAccessException if there is any problem issuing the update
                     * @see PreparedStatementCreatorFactory
                     */
                    // @ts-ignore
                    update(psc: org.springframework.jdbc.core.PreparedStatementCreator): number /*int*/
                    /**
                     * Issue an update statement using a PreparedStatementCreator to provide SQL and
                     * any required parameters. Generated keys will be put into the given KeyHolder.
                     * <p>Note that the given PreparedStatementCreator has to create a statement
                     * with activated extraction of generated keys (a JDBC 3.0 feature). This can
                     * either be done directly or through using a PreparedStatementCreatorFactory.
                     * @param psc a callback that provides SQL and any necessary parameters
                     * @param generatedKeyHolder a KeyHolder that will hold the generated keys
                     * @return the number of rows affected
                     * @throws DataAccessException if there is any problem issuing the update
                     * @see PreparedStatementCreatorFactory
                     * @see org.springframework.jdbc.support.GeneratedKeyHolder
                     */
                    // @ts-ignore
                    update(psc: org.springframework.jdbc.core.PreparedStatementCreator, generatedKeyHolder: org.springframework.jdbc.support.KeyHolder): number /*int*/
                    /**
                     * Issue an update statement using a PreparedStatementSetter to set bind parameters,
                     * with given SQL. Simpler than using a PreparedStatementCreator as this method
                     * will create the PreparedStatement: The PreparedStatementSetter just needs to
                     * set parameters.
                     * @param sql the SQL containing bind parameters
                     * @param pss helper that sets bind parameters. If this is {#code null}
                     *  we run an update with static SQL.
                     * @return the number of rows affected
                     * @throws DataAccessException if there is any problem issuing the update
                     */
                    // @ts-ignore
                    update(sql: java.lang.String | string, pss: org.springframework.jdbc.core.PreparedStatementSetter): number /*int*/
                    /**
                     * Issue a single SQL update operation (such as an insert, update or delete statement)
                     * via a prepared statement, binding the given arguments.
                     * @param sql the SQL containing bind parameters
                     * @param args arguments to bind to the query
                     * @param argTypes the SQL types of the arguments
                     *  (constants from {#code java.sql.Types})
                     * @return the number of rows affected
                     * @throws DataAccessException if there is any problem issuing the update
                     * @see java.sql.Types
                     */
                    // @ts-ignore
                    update(sql: java.lang.String | string, args: java.lang.Object[] | any[], argTypes: number /*int*/[]): number /*int*/
                    /**
                     * Issue a single SQL update operation (such as an insert, update or delete statement)
                     * via a prepared statement, binding the given arguments.
                     * @param sql the SQL containing bind parameters
                     * @param args arguments to bind to the query
                     *  (leaving it to the PreparedStatement to guess the corresponding SQL type);
                     *  may also contain {#link SqlParameterValue} objects which indicate not
                     *  only the argument value but also the SQL type and optionally the scale
                     * @return the number of rows affected
                     * @throws DataAccessException if there is any problem issuing the update
                     */
                    // @ts-ignore
                    update(sql: java.lang.String | string, ...args: java.lang.Object[] | any[]): number /*int*/
                    /**
                     * Issue multiple update statements on a single PreparedStatement,
                     * using batch updates and a BatchPreparedStatementSetter to set values.
                     * <p>Will fall back to separate updates on a single PreparedStatement
                     * if the JDBC driver does not support batch updates.
                     * @param sql defining PreparedStatement that will be reused.
                     *  All statements in the batch will use the same SQL.
                     * @param pss object to set parameters on the PreparedStatement
                     *  created by this method
                     * @return an array of the number of rows affected by each statement
                     * @throws DataAccessException if there is any problem issuing the update
                     */
                    // @ts-ignore
                    batchUpdate(sql: java.lang.String | string, pss: org.springframework.jdbc.core.BatchPreparedStatementSetter): number /*int*/[]
                    /**
                     * Execute a batch using the supplied SQL statement with the batch of supplied arguments.
                     * @param sql the SQL statement to execute
                     * @param batchArgs the List of Object arrays containing the batch of arguments for the query
                     * @return an array containing the numbers of rows affected by each update in the batch
                     */
                    // @ts-ignore
                    batchUpdate(sql: java.lang.String | string, batchArgs: java.util.List<java.lang.Object[] | any[]> | Array<java.lang.Object[] | any[]>): number /*int*/[]
                    /**
                     * Execute a batch using the supplied SQL statement with the batch of supplied arguments.
                     * @param sql the SQL statement to execute.
                     * @param batchArgs the List of Object arrays containing the batch of arguments for the query
                     * @param argTypes the SQL types of the arguments
                     *  (constants from {#code java.sql.Types})
                     * @return an array containing the numbers of rows affected by each update in the batch
                     */
                    // @ts-ignore
                    batchUpdate(sql: java.lang.String | string, batchArgs: java.util.List<java.lang.Object[] | any[]> | Array<java.lang.Object[] | any[]>, argTypes: number /*int*/[]): number /*int*/[]
                    /**
                     * Execute multiple batches using the supplied SQL statement with the collect of supplied arguments.
                     * The arguments' values will be set using the ParameterizedPreparedStatementSetter.
                     * Each batch should be of size indicated in 'batchSize'.
                     * @param sql the SQL statement to execute.
                     * @param batchArgs the List of Object arrays containing the batch of arguments for the query
                     * @param batchSize batch size
                     * @param pss the ParameterizedPreparedStatementSetter to use
                     * @return an array containing for each batch another array containing the numbers of rows affected
                     *  by each update in the batch
                     * @since 3.1
                     */
                    // @ts-ignore
                    batchUpdate<T>(sql: java.lang.String | string, batchArgs: java.util.Collection<T> | Array<T>, batchSize: number /*int*/, pss: org.springframework.jdbc.core.ParameterizedPreparedStatementSetter<T>): number /*int*/[][]
                    /**
                     * Execute a JDBC data access operation, implemented as callback action
                     * working on a JDBC CallableStatement. This allows for implementing arbitrary
                     * data access operations on a single Statement, within Spring's managed JDBC
                     * environment: that is, participating in Spring-managed transactions and
                     * converting JDBC SQLExceptions into Spring's DataAccessException hierarchy.
                     * <p>The callback action can return a result object, for example a domain
                     * object or a collection of domain objects.
                     * @param csc a callback that creates a CallableStatement given a Connection
                     * @param action a callback that specifies the action
                     * @return a result object returned by the action, or {#code null} if none
                     * @throws DataAccessException if there is any problem
                     */
                    // @ts-ignore
                    execute<T>(csc: org.springframework.jdbc.core.CallableStatementCreator, action: org.springframework.jdbc.core.CallableStatementCallback<T>): T
                    /**
                     * Execute a JDBC data access operation, implemented as callback action
                     * working on a JDBC CallableStatement. This allows for implementing arbitrary
                     * data access operations on a single Statement, within Spring's managed JDBC
                     * environment: that is, participating in Spring-managed transactions and
                     * converting JDBC SQLExceptions into Spring's DataAccessException hierarchy.
                     * <p>The callback action can return a result object, for example a domain
                     * object or a collection of domain objects.
                     * @param callString the SQL call string to execute
                     * @param action a callback that specifies the action
                     * @return a result object returned by the action, or {#code null} if none
                     * @throws DataAccessException if there is any problem
                     */
                    // @ts-ignore
                    execute<T>(callString: java.lang.String | string, action: org.springframework.jdbc.core.CallableStatementCallback<T>): T
                    /**
                     * Execute an SQL call using a CallableStatementCreator to provide SQL and
                     * any required parameters.
                     * @param csc a callback that provides SQL and any necessary parameters
                     * @param declaredParameters list of declared SqlParameter objects
                     * @return a Map of extracted out parameters
                     * @throws DataAccessException if there is any problem issuing the update
                     */
                    // @ts-ignore
                    call(csc: org.springframework.jdbc.core.CallableStatementCreator, declaredParameters: java.util.List<org.springframework.jdbc.core.SqlParameter> | Array<org.springframework.jdbc.core.SqlParameter>): java.util.Map<java.lang.String | string, java.lang.Object | any>
                }
            }
        }
    }
}
