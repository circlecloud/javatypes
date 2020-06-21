declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace namedparam {
                    /**
                     * Interface specifying a basic set of JDBC operations allowing the use
                     * of named parameters rather than the traditional '?' placeholders.
                     * <p>This is an alternative to the classic
                     * {@link org.springframework.jdbc.core.JdbcOperations} interface,
                     * implemented by {@link NamedParameterJdbcTemplate}. This interface is not
                     * often used directly, but provides a useful option to enhance testability,
                     * as it can easily be mocked or stubbed.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see NamedParameterJdbcTemplate
                     * @see org.springframework.jdbc.core.JdbcOperations
                     */
                    // @ts-ignore
                    interface NamedParameterJdbcOperations {
                        /**
                         * Expose the classic Spring JdbcTemplate to allow invocation of
                         * classic JDBC operations.
                         */
                        // @ts-ignore
                        getJdbcOperations(): org.springframework.jdbc.core.JdbcOperations
                        /**
                         * Execute a JDBC data access operation, implemented as callback action
                         * working on a JDBC PreparedStatement. This allows for implementing arbitrary
                         * data access operations on a single Statement, within Spring's managed
                         * JDBC environment: that is, participating in Spring-managed transactions
                         * and converting JDBC SQLExceptions into Spring's DataAccessException hierarchy.
                         * <p>The callback action can return a result object, for example a
                         * domain object or a collection of domain objects.
                         * @param sql the SQL to execute
                         * @param paramSource container of arguments to bind to the query
                         * @param action callback object that specifies the action
                         * @return a result object returned by the action, or {#code null}
                         * @throws DataAccessException if there is any problem
                         */
                        // @ts-ignore
                        execute<T>(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, action: org.springframework.jdbc.core.PreparedStatementCallback<T>): T
                        /**
                         * Execute a JDBC data access operation, implemented as callback action
                         * working on a JDBC PreparedStatement. This allows for implementing arbitrary
                         * data access operations on a single Statement, within Spring's managed
                         * JDBC environment: that is, participating in Spring-managed transactions
                         * and converting JDBC SQLExceptions into Spring's DataAccessException hierarchy.
                         * <p>The callback action can return a result object, for example a
                         * domain object or a collection of domain objects.
                         * @param sql the SQL to execute
                         * @param paramMap map of parameters to bind to the query
                         *  (leaving it to the PreparedStatement to guess the corresponding SQL type)
                         * @param action callback object that specifies the action
                         * @return a result object returned by the action, or {#code null}
                         * @throws DataAccessException if there is any problem
                         */
                        // @ts-ignore
                        execute<T>(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>, action: org.springframework.jdbc.core.PreparedStatementCallback<T>): T
                        /**
                         * Execute a JDBC data access operation, implemented as callback action
                         * working on a JDBC PreparedStatement. This allows for implementing arbitrary
                         * data access operations on a single Statement, within Spring's managed
                         * JDBC environment: that is, participating in Spring-managed transactions
                         * and converting JDBC SQLExceptions into Spring's DataAccessException hierarchy.
                         * <p>The callback action can return a result object, for example a
                         * domain object or a collection of domain objects.
                         * @param sql the SQL to execute
                         * @param action callback object that specifies the action
                         * @return a result object returned by the action, or {#code null}
                         * @throws DataAccessException if there is any problem
                         */
                        // @ts-ignore
                        execute<T>(sql: java.lang.String | string, action: org.springframework.jdbc.core.PreparedStatementCallback<T>): T
                        /**
                         * Query given SQL to create a prepared statement from SQL and a list
                         * of arguments to bind to the query, reading the ResultSet with a
                         * ResultSetExtractor.
                         * @param sql the SQL query to execute
                         * @param paramSource container of arguments to bind to the query
                         * @param rse object that will extract results
                         * @return an arbitrary result object, as returned by the ResultSetExtractor
                         * @throws DataAccessException if the query fails
                         */
                        // @ts-ignore
                        query<T>(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                        /**
                         * Query given SQL to create a prepared statement from SQL and a list
                         * of arguments to bind to the query, reading the ResultSet with a
                         * ResultSetExtractor.
                         * @param sql the SQL query to execute
                         * @param paramMap map of parameters to bind to the query
                         *  (leaving it to the PreparedStatement to guess the corresponding SQL type)
                         * @param rse object that will extract results
                         * @return an arbitrary result object, as returned by the ResultSetExtractor
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         */
                        // @ts-ignore
                        query<T>(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>, rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                        /**
                         * Query given SQL to create a prepared statement from SQL,
                         * reading the ResultSet with a ResultSetExtractor.
                         * <p>Note: In contrast to the JdbcOperations method with the same signature,
                         * this query variant always uses a PreparedStatement. It is effectively
                         * equivalent to a query call with an empty parameter Map.
                         * @param sql the SQL query to execute
                         * @param rse object that will extract results
                         * @return an arbitrary result object, as returned by the ResultSetExtractor
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         */
                        // @ts-ignore
                        query<T>(sql: java.lang.String | string, rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                        /**
                         * Query given SQL to create a prepared statement from SQL and a list of
                         * arguments to bind to the query, reading the ResultSet on a per-row basis
                         * with a RowCallbackHandler.
                         * @param sql the SQL query to execute
                         * @param paramSource container of arguments to bind to the query
                         * @param rch object that will extract results, one row at a time
                         * @throws DataAccessException if the query fails
                         */
                        // @ts-ignore
                        query(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, rch: org.springframework.jdbc.core.RowCallbackHandler): void
                        /**
                         * Query given SQL to create a prepared statement from SQL and a list of
                         * arguments to bind to the query, reading the ResultSet on a per-row basis
                         * with a RowCallbackHandler.
                         * @param sql the SQL query to execute
                         * @param paramMap map of parameters to bind to the query
                         *  (leaving it to the PreparedStatement to guess the corresponding SQL type)
                         * @param rch object that will extract results, one row at a time
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         */
                        // @ts-ignore
                        query(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>, rch: org.springframework.jdbc.core.RowCallbackHandler): void
                        /**
                         * Query given SQL to create a prepared statement from SQL,
                         * reading the ResultSet on a per-row basis with a RowCallbackHandler.
                         * <p>Note: In contrast to the JdbcOperations method with the same signature,
                         * this query variant always uses a PreparedStatement. It is effectively
                         * equivalent to a query call with an empty parameter Map.
                         * @param sql the SQL query to execute
                         * @param rch object that will extract results, one row at a time
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         */
                        // @ts-ignore
                        query(sql: java.lang.String | string, rch: org.springframework.jdbc.core.RowCallbackHandler): void
                        /**
                         * Query given SQL to create a prepared statement from SQL and a list
                         * of arguments to bind to the query, mapping each row to a Java object
                         * via a RowMapper.
                         * @param sql the SQL query to execute
                         * @param paramSource container of arguments to bind to the query
                         * @param rowMapper object that will map one object per row
                         * @return the result List, containing mapped objects
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         */
                        // @ts-ignore
                        query<T>(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                        /**
                         * Query given SQL to create a prepared statement from SQL and a list
                         * of arguments to bind to the query, mapping each row to a Java object
                         * via a RowMapper.
                         * @param sql the SQL query to execute
                         * @param paramMap map of parameters to bind to the query
                         *  (leaving it to the PreparedStatement to guess the corresponding SQL type)
                         * @param rowMapper object that will map one object per row
                         * @return the result List, containing mapped objects
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         */
                        // @ts-ignore
                        query<T>(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>, rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                        /**
                         * Query given SQL to create a prepared statement from SQL,
                         * mapping each row to a Java object via a RowMapper.
                         * <p>Note: In contrast to the JdbcOperations method with the same signature,
                         * this query variant always uses a PreparedStatement. It is effectively
                         * equivalent to a query call with an empty parameter Map.
                         * @param sql the SQL query to execute
                         * @param rowMapper object that will map one object per row
                         * @return the result List, containing mapped objects
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         */
                        // @ts-ignore
                        query<T>(sql: java.lang.String | string, rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                        /**
                         * Query given SQL to create a prepared statement from SQL and a list
                         * of arguments to bind to the query, mapping a single result row to a
                         * Java object via a RowMapper.
                         * @param sql the SQL query to execute
                         * @param paramSource container of arguments to bind to the query
                         * @param rowMapper object that will map one object per row
                         * @return the single mapped object (may be {#code null} if the given
                         *  {@link RowMapper} returned {@code} null)
                         * @throws org.springframework.dao.IncorrectResultSizeDataAccessException
                         *  if the query does not return exactly one row, or does not return exactly
                         *  one column in that row
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         */
                        // @ts-ignore
                        queryForObject<T>(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, rowMapper: org.springframework.jdbc.core.RowMapper<T>): T
                        /**
                         * Query given SQL to create a prepared statement from SQL and a list
                         * of arguments to bind to the query, mapping a single result row to a
                         * Java object via a RowMapper.
                         * @param sql the SQL query to execute
                         * @param paramMap map of parameters to bind to the query
                         *  (leaving it to the PreparedStatement to guess the corresponding SQL type)
                         * @param rowMapper object that will map one object per row
                         * @return the single mapped object (may be {#code null} if the given
                         *  {@link RowMapper} returned {@code} null)
                         * @throws org.springframework.dao.IncorrectResultSizeDataAccessException
                         *  if the query does not return exactly one row, or does not return exactly
                         *  one column in that row
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         */
                        // @ts-ignore
                        queryForObject<T>(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>, rowMapper: org.springframework.jdbc.core.RowMapper<T>): T
                        /**
                         * Query given SQL to create a prepared statement from SQL and a
                         * list of arguments to bind to the query, expecting a result object.
                         * <p>The query is expected to be a single row/single column query; the returned
                         * result will be directly mapped to the corresponding object type.
                         * @param sql the SQL query to execute
                         * @param paramSource container of arguments to bind to the query
                         * @param requiredType the type that the result object is expected to match
                         * @return the result object of the required type, or {#code null} in case of SQL NULL
                         * @throws org.springframework.dao.IncorrectResultSizeDataAccessException
                         *  if the query does not return exactly one row, or does not return exactly
                         *  one column in that row
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         * @see org.springframework.jdbc.core.JdbcTemplate#queryForObject(String, Class)
                         */
                        // @ts-ignore
                        queryForObject<T>(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, requiredType: java.lang.Class<T>): T
                        /**
                         * Query given SQL to create a prepared statement from SQL and a
                         * list of arguments to bind to the query, expecting a result object.
                         * <p>The query is expected to be a single row/single column query; the returned
                         * result will be directly mapped to the corresponding object type.
                         * @param sql the SQL query to execute
                         * @param paramMap map of parameters to bind to the query
                         *  (leaving it to the PreparedStatement to guess the corresponding SQL type)
                         * @param requiredType the type that the result object is expected to match
                         * @return the result object of the required type, or {#code null} in case of SQL NULL
                         * @throws org.springframework.dao.IncorrectResultSizeDataAccessException
                         *  if the query does not return exactly one row, or does not return exactly
                         *  one column in that row
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         * @see org.springframework.jdbc.core.JdbcTemplate#queryForObject(String, Class)
                         */
                        // @ts-ignore
                        queryForObject<T>(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>, requiredType: java.lang.Class<T>): T
                        /**
                         * Query given SQL to create a prepared statement from SQL and a
                         * list of arguments to bind to the query, expecting a result Map.
                         * <p>The query is expected to be a single row query; the result row will be
                         * mapped to a Map (one entry for each column, using the column name as the key).
                         * @param sql the SQL query to execute
                         * @param paramSource container of arguments to bind to the query
                         * @return the result Map (one entry for each column, using the column name as the key)
                         * @throws org.springframework.dao.IncorrectResultSizeDataAccessException
                         *  if the query does not return exactly one row
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         * @see org.springframework.jdbc.core.JdbcTemplate#queryForMap(String)
                         * @see org.springframework.jdbc.core.ColumnMapRowMapper
                         */
                        // @ts-ignore
                        queryForMap(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        /**
                         * Query given SQL to create a prepared statement from SQL and a
                         * list of arguments to bind to the query, expecting a result Map.
                         * The queryForMap() methods defined by this interface are appropriate
                         * when you don't have a domain model. Otherwise, consider using
                         * one of the queryForObject() methods.
                         * <p>The query is expected to be a single row query; the result row will be
                         * mapped to a Map (one entry for each column, using the column name as the key).
                         * @param sql the SQL query to execute
                         * @param paramMap map of parameters to bind to the query
                         *  (leaving it to the PreparedStatement to guess the corresponding SQL type)
                         * @return the result Map (one entry for each column, using the column name as the key)
                         * @throws org.springframework.dao.IncorrectResultSizeDataAccessException
                         *  if the query does not return exactly one row
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         * @see org.springframework.jdbc.core.JdbcTemplate#queryForMap(String)
                         * @see org.springframework.jdbc.core.ColumnMapRowMapper
                         */
                        // @ts-ignore
                        queryForMap(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        /**
                         * Query given SQL to create a prepared statement from SQL and a
                         * list of arguments to bind to the query, expecting a result list.
                         * <p>The results will be mapped to a List (one entry for each row) of
                         * result objects, each of them matching the specified element type.
                         * @param sql the SQL query to execute
                         * @param paramSource container of arguments to bind to the query
                         * @param elementType the required type of element in the result list
                         *  (for example, {#code Integer.class})
                         * @return a List of objects that match the specified element type
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         * @see org.springframework.jdbc.core.JdbcTemplate#queryForList(String, Class)
                         * @see org.springframework.jdbc.core.SingleColumnRowMapper
                         */
                        // @ts-ignore
                        queryForList<T>(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, elementType: java.lang.Class<T>): Array<T>
                        /**
                         * Query given SQL to create a prepared statement from SQL and a
                         * list of arguments to bind to the query, expecting a result list.
                         * <p>The results will be mapped to a List (one entry for each row) of
                         * result objects, each of them matching the specified element type.
                         * @param sql the SQL query to execute
                         * @param paramMap map of parameters to bind to the query
                         *  (leaving it to the PreparedStatement to guess the corresponding SQL type)
                         * @param elementType the required type of element in the result list
                         *  (for example, {#code Integer.class})
                         * @return a List of objects that match the specified element type
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         * @see org.springframework.jdbc.core.JdbcTemplate#queryForList(String, Class)
                         * @see org.springframework.jdbc.core.SingleColumnRowMapper
                         */
                        // @ts-ignore
                        queryForList<T>(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>, elementType: java.lang.Class<T>): Array<T>
                        /**
                         * Query given SQL to create a prepared statement from SQL and a
                         * list of arguments to bind to the query, expecting a result list.
                         * <p>The results will be mapped to a List (one entry for each row) of
                         * Maps (one entry for each column, using the column name as the key).
                         * Each element in the list will be of the form returned by this interface's
                         * {@code queryForMap} methods.
                         * @param sql the SQL query to execute
                         * @param paramSource container of arguments to bind to the query
                         * @return a List that contains a Map per row
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         * @see org.springframework.jdbc.core.JdbcTemplate#queryForList(String)
                         */
                        // @ts-ignore
                        queryForList(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): Array<java.util.Map<java.lang.String | string, java.lang.Object | any>>
                        /**
                         * Query given SQL to create a prepared statement from SQL and a
                         * list of arguments to bind to the query, expecting a result list.
                         * <p>The results will be mapped to a List (one entry for each row) of
                         * Maps (one entry for each column, using the column name as the key).
                         * Each element in the list will be of the form returned by this interface's
                         * {@code queryForMap} methods.
                         * @param sql the SQL query to execute
                         * @param paramMap map of parameters to bind to the query
                         *  (leaving it to the PreparedStatement to guess the corresponding SQL type)
                         * @return a List that contains a Map per row
                         * @throws org.springframework.dao.DataAccessException if the query fails
                         * @see org.springframework.jdbc.core.JdbcTemplate#queryForList(String)
                         */
                        // @ts-ignore
                        queryForList(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>): Array<java.util.Map<java.lang.String | string, java.lang.Object | any>>
                        /**
                         * Query given SQL to create a prepared statement from SQL and a
                         * list of arguments to bind to the query, expecting an SqlRowSet.
                         * <p>The results will be mapped to an SqlRowSet which holds the data in a
                         * disconnected fashion. This wrapper will translate any SQLExceptions thrown.
                         * <p>Note that, for the default implementation, JDBC RowSet support needs to
                         * be available at runtime: by default, Sun's {@code com.sun.rowset.CachedRowSetImpl}
                         * class is used, which is part of JDK 1.5+ and also available separately as part of
                         * Sun's JDBC RowSet Implementations download (rowset.jar).
                         * @param sql the SQL query to execute
                         * @param paramSource container of arguments to bind to the query
                         * @return an SqlRowSet representation (possibly a wrapper around a
                         *  {#code javax.sql.rowset.CachedRowSet})
                         * @throws org.springframework.dao.DataAccessException if there is any problem executing the query
                         * @see org.springframework.jdbc.core.JdbcTemplate#queryForRowSet(String)
                         * @see org.springframework.jdbc.core.SqlRowSetResultSetExtractor
                         * @see javax.sql.rowset.CachedRowSet
                         */
                        // @ts-ignore
                        queryForRowSet(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): org.springframework.jdbc.support.rowset.SqlRowSet
                        /**
                         * Query given SQL to create a prepared statement from SQL and a
                         * list of arguments to bind to the query, expecting an SqlRowSet.
                         * <p>The results will be mapped to an SqlRowSet which holds the data in a
                         * disconnected fashion. This wrapper will translate any SQLExceptions thrown.
                         * <p>Note that, for the default implementation, JDBC RowSet support needs to
                         * be available at runtime: by default, Sun's {@code com.sun.rowset.CachedRowSetImpl}
                         * class is used, which is part of JDK 1.5+ and also available separately as part of
                         * Sun's JDBC RowSet Implementations download (rowset.jar).
                         * @param sql the SQL query to execute
                         * @param paramMap map of parameters to bind to the query
                         *  (leaving it to the PreparedStatement to guess the corresponding SQL type)
                         * @return an SqlRowSet representation (possibly a wrapper around a
                         *  {#code javax.sql.rowset.CachedRowSet})
                         * @throws org.springframework.dao.DataAccessException if there is any problem executing the query
                         * @see org.springframework.jdbc.core.JdbcTemplate#queryForRowSet(String)
                         * @see org.springframework.jdbc.core.SqlRowSetResultSetExtractor
                         * @see javax.sql.rowset.CachedRowSet
                         */
                        // @ts-ignore
                        queryForRowSet(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>): org.springframework.jdbc.support.rowset.SqlRowSet
                        /**
                         * Issue an update via a prepared statement, binding the given arguments.
                         * @param sql the SQL containing named parameters
                         * @param paramSource container of arguments and SQL types to bind to the query
                         * @return the number of rows affected
                         * @throws org.springframework.dao.DataAccessException if there is any problem issuing the update
                         */
                        // @ts-ignore
                        update(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): number /*int*/
                        /**
                         * Issue an update via a prepared statement, binding the given arguments.
                         * @param sql the SQL containing named parameters
                         * @param paramMap map of parameters to bind to the query
                         *  (leaving it to the PreparedStatement to guess the corresponding SQL type)
                         * @return the number of rows affected
                         * @throws org.springframework.dao.DataAccessException if there is any problem issuing the update
                         */
                        // @ts-ignore
                        update(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>): number /*int*/
                        /**
                         * Issue an update via a prepared statement, binding the given arguments,
                         * returning generated keys.
                         * @param sql the SQL containing named parameters
                         * @param paramSource container of arguments and SQL types to bind to the query
                         * @param generatedKeyHolder a {#link KeyHolder} that will hold the generated keys
                         * @return the number of rows affected
                         * @throws org.springframework.dao.DataAccessException if there is any problem issuing the update
                         * @see MapSqlParameterSource
                         * @see org.springframework.jdbc.support.GeneratedKeyHolder
                         */
                        // @ts-ignore
                        update(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, generatedKeyHolder: org.springframework.jdbc.support.KeyHolder): number /*int*/
                        /**
                         * Issue an update via a prepared statement, binding the given arguments,
                         * returning generated keys.
                         * @param sql the SQL containing named parameters
                         * @param paramSource container of arguments and SQL types to bind to the query
                         * @param generatedKeyHolder a {#link KeyHolder} that will hold the generated keys
                         * @param keyColumnNames names of the columns that will have keys generated for them
                         * @return the number of rows affected
                         * @throws org.springframework.dao.DataAccessException if there is any problem issuing the update
                         * @see MapSqlParameterSource
                         * @see org.springframework.jdbc.support.GeneratedKeyHolder
                         */
                        // @ts-ignore
                        update(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, generatedKeyHolder: org.springframework.jdbc.support.KeyHolder, keyColumnNames: java.lang.String[] | string[]): number /*int*/
                        /**
                         * Executes a batch using the supplied SQL statement with the batch of supplied arguments.
                         * @param sql the SQL statement to execute
                         * @param batchValues the array of Maps containing the batch of arguments for the query
                         * @return an array containing the numbers of rows affected by each update in the batch
                         */
                        // @ts-ignore
                        batchUpdate(sql: java.lang.String | string, batchValues: java.util.Map<java.lang.String | string, any>[]): number /*int*/[]
                        /**
                         * Execute a batch using the supplied SQL statement with the batch of supplied arguments.
                         * @param sql the SQL statement to execute
                         * @param batchArgs the array of {#link SqlParameterSource} containing the batch of arguments for the query
                         * @return an array containing the numbers of rows affected by each update in the batch
                         */
                        // @ts-ignore
                        batchUpdate(sql: java.lang.String | string, batchArgs: org.springframework.jdbc.core.namedparam.SqlParameterSource[]): number /*int*/[]
                    }
                }
            }
        }
    }
}
