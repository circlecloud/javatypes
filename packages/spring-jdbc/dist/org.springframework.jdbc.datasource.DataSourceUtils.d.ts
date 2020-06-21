declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * Helper class that provides static methods for obtaining JDBC Connections from
                 * a {@link javax.sql.DataSource}. Includes special support for Spring-managed
                 * transactional Connections, e.g. managed by {@link DataSourceTransactionManager}
                 * or {@link org.springframework.transaction.jta.JtaTransactionManager}.
                 * <p>Used internally by Spring's {@link org.springframework.jdbc.core.JdbcTemplate},
                 * Spring's JDBC operation objects and the JDBC {@link DataSourceTransactionManager}.
                 * Can also be used directly in application code.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @see #getConnection
                 * @see #releaseConnection
                 * @see DataSourceTransactionManager
                 * @see org.springframework.transaction.jta.JtaTransactionManager
                 * @see org.springframework.transaction.support.TransactionSynchronizationManager
                 */
                // @ts-ignore
                abstract class DataSourceUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Order value for TransactionSynchronization objects that clean up JDBC Connections.
                     */
                    // @ts-ignore
                    public static readonly CONNECTION_SYNCHRONIZATION_ORDER: number /*int*/
                    /**
                     * Obtain a Connection from the given DataSource. Translates SQLExceptions into
                     * the Spring hierarchy of unchecked generic data access exceptions, simplifying
                     * calling code and making any exception that is thrown more meaningful.
                     * <p>Is aware of a corresponding Connection bound to the current thread, for example
                     * when using {@link DataSourceTransactionManager}. Will bind a Connection to the
                     * thread if transaction synchronization is active, e.g. when running within a
                     * {@link org.springframework.transaction.jta.JtaTransactionManager JTA} transaction).
                     * @param dataSource the DataSource to obtain Connections from
                     * @return a JDBC Connection from the given DataSource
                     * @throws org.springframework.jdbc.CannotGetJdbcConnectionException
                     *  if the attempt to get a Connection failed
                     * @see #releaseConnection
                     */
                    // @ts-ignore
                    public static getConnection(dataSource: javax.sql.DataSource): java.sql.Connection
                    /**
                     * Actually obtain a JDBC Connection from the given DataSource.
                     * Same as {@link #getConnection}, but throwing the original SQLException.
                     * <p>Is aware of a corresponding Connection bound to the current thread, for example
                     * when using {@link DataSourceTransactionManager}. Will bind a Connection to the thread
                     * if transaction synchronization is active (e.g. if in a JTA transaction).
                     * <p>Directly accessed by {@link TransactionAwareDataSourceProxy}.
                     * @param dataSource the DataSource to obtain Connections from
                     * @return a JDBC Connection from the given DataSource
                     * @throws SQLException if thrown by JDBC methods
                     * @see #doReleaseConnection
                     */
                    // @ts-ignore
                    public static doGetConnection(dataSource: javax.sql.DataSource): java.sql.Connection
                    /**
                     * Prepare the given Connection with the given transaction semantics.
                     * @param con the Connection to prepare
                     * @param definition the transaction definition to apply
                     * @return the previous isolation level, if any
                     * @throws SQLException if thrown by JDBC methods
                     * @see #resetConnectionAfterTransaction
                     * @see Connection#setTransactionIsolation
                     * @see Connection#setReadOnly
                     */
                    // @ts-ignore
                    public static prepareConnectionForTransaction(con: java.sql.Connection, definition: TransactionDefinition): number
                    /**
                     * Reset the given Connection after a transaction,
                     * regarding read-only flag and isolation level.
                     * @param con the Connection to reset
                     * @param previousIsolationLevel the isolation level to restore, if any
                     * @param resetReadOnly whether to reset the connection's read-only flag
                     * @since 5.2.1
                     * @see #prepareConnectionForTransaction
                     * @see Connection#setTransactionIsolation
                     * @see Connection#setReadOnly
                     */
                    // @ts-ignore
                    public static resetConnectionAfterTransaction(con: java.sql.Connection, previousIsolationLevel: java.lang.Integer | number, resetReadOnly: boolean): void
                    /**
                     * Reset the given Connection after a transaction,
                     * regarding read-only flag and isolation level.
                     * @param con the Connection to reset
                     * @param previousIsolationLevel the isolation level to restore, if any
                     * @deprecated as of 5.1.11, in favor of
                     *  {#link #resetConnectionAfterTransaction(Connection, Integer, boolean)}
                     */
                    // @ts-ignore
                    public static resetConnectionAfterTransaction(con: java.sql.Connection, previousIsolationLevel: java.lang.Integer | number): void
                    /**
                     * Determine whether the given JDBC Connection is transactional, that is,
                     * bound to the current thread by Spring's transaction facilities.
                     * @param con the Connection to check
                     * @param dataSource the DataSource that the Connection was obtained from
                     *  (may be {#code null})
                     * @return whether the Connection is transactional
                     */
                    // @ts-ignore
                    public static isConnectionTransactional(con: java.sql.Connection, dataSource: javax.sql.DataSource): boolean
                    /**
                     * Apply the current transaction timeout, if any,
                     * to the given JDBC Statement object.
                     * @param stmt the JDBC Statement object
                     * @param dataSource the DataSource that the Connection was obtained from
                     * @throws SQLException if thrown by JDBC methods
                     * @see java.sql.Statement#setQueryTimeout
                     */
                    // @ts-ignore
                    public static applyTransactionTimeout(stmt: java.sql.Statement, dataSource: javax.sql.DataSource): void
                    /**
                     * Apply the specified timeout - overridden by the current transaction timeout,
                     * if any - to the given JDBC Statement object.
                     * @param stmt the JDBC Statement object
                     * @param dataSource the DataSource that the Connection was obtained from
                     * @param timeout the timeout to apply (or 0 for no timeout outside of a transaction)
                     * @throws SQLException if thrown by JDBC methods
                     * @see java.sql.Statement#setQueryTimeout
                     */
                    // @ts-ignore
                    public static applyTimeout(stmt: java.sql.Statement, dataSource: javax.sql.DataSource, timeout: number /*int*/): void
                    /**
                     * Close the given Connection, obtained from the given DataSource,
                     * if it is not managed externally (that is, not bound to the thread).
                     * @param con the Connection to close if necessary
                     *  (if this is {#code null}, the call will be ignored)
                     * @param dataSource the DataSource that the Connection was obtained from
                     *  (may be {#code null})
                     * @see #getConnection
                     */
                    // @ts-ignore
                    public static releaseConnection(con: java.sql.Connection, dataSource: javax.sql.DataSource): void
                    /**
                     * Actually close the given Connection, obtained from the given DataSource.
                     * Same as {@link #releaseConnection}, but throwing the original SQLException.
                     * <p>Directly accessed by {@link TransactionAwareDataSourceProxy}.
                     * @param con the Connection to close if necessary
                     *  (if this is {#code null}, the call will be ignored)
                     * @param dataSource the DataSource that the Connection was obtained from
                     *  (may be {#code null})
                     * @throws SQLException if thrown by JDBC methods
                     * @see #doGetConnection
                     */
                    // @ts-ignore
                    public static doReleaseConnection(con: java.sql.Connection, dataSource: javax.sql.DataSource): void
                    /**
                     * Close the Connection, unless a {@link SmartDataSource} doesn't want us to.
                     * @param con the Connection to close if necessary
                     * @param dataSource the DataSource that the Connection was obtained from
                     * @throws SQLException if thrown by JDBC methods
                     * @see Connection#close()
                     * @see SmartDataSource#shouldClose(Connection)
                     */
                    // @ts-ignore
                    public static doCloseConnection(con: java.sql.Connection, dataSource: javax.sql.DataSource): void
                    /**
                     * Return the innermost target Connection of the given Connection. If the given
                     * Connection is a proxy, it will be unwrapped until a non-proxy Connection is
                     * found. Otherwise, the passed-in Connection will be returned as-is.
                     * @param con the Connection proxy to unwrap
                     * @return the innermost target Connection, or the passed-in one if no proxy
                     * @see ConnectionProxy#getTargetConnection()
                     */
                    // @ts-ignore
                    public static getTargetConnection(con: java.sql.Connection): java.sql.Connection
                }
            }
        }
    }
}
