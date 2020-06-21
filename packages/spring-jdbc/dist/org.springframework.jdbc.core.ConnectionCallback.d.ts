declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Generic callback interface for code that operates on a JDBC Connection.
                 * Allows to execute any number of operations on a single Connection,
                 * using any type and number of Statements.
                 * <p>This is particularly useful for delegating to existing data access code
                 * that expects a Connection to work on and throws SQLException. For newly
                 * written code, it is strongly recommended to use JdbcTemplate's more specific
                 * operations, for example a {@code query} or {@code update} variant.
                 * @author Juergen Hoeller
                 * @since 1.1.3
                 * @param <T> the result type
                 * @see JdbcTemplate#execute(ConnectionCallback)
                 * @see JdbcTemplate#query
                 * @see JdbcTemplate#update
                 */
                // @ts-ignore
                interface ConnectionCallback<T> {
                    /**
                     * Gets called by {@code JdbcTemplate.execute} with an active JDBC
                     * Connection. Does not need to care about activating or closing the
                     * Connection, or handling transactions.
                     * <p>If called without a thread-bound JDBC transaction (initiated by
                     * DataSourceTransactionManager), the code will simply get executed on the
                     * JDBC connection with its transactional semantics. If JdbcTemplate is
                     * configured to use a JTA-aware DataSource, the JDBC Connection and thus
                     * the callback code will be transactional if a JTA transaction is active.
                     * <p>Allows for returning a result object created within the callback, i.e.
                     * a domain object or a collection of domain objects. Note that there's special
                     * support for single step actions: see {@code JdbcTemplate.queryForObject}
                     * etc. A thrown RuntimeException is treated as application exception:
                     * it gets propagated to the caller of the template.
                     * @param con active JDBC Connection
                     * @return a result object, or {#code null} if none
                     * @throws SQLException if thrown by a JDBC method, to be auto-converted
                     *  to a DataAccessException by an SQLExceptionTranslator
                     * @throws DataAccessException in case of custom exceptions
                     * @see JdbcTemplate#queryForObject(String, Class)
                     * @see JdbcTemplate#queryForRowSet(String)
                     */
                    // @ts-ignore
                    doInConnection(con: java.sql.Connection): T
                }
            }
        }
    }
}
