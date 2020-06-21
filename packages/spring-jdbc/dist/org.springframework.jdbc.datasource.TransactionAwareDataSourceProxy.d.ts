declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * Proxy for a target JDBC {@link javax.sql.DataSource}, adding awareness of
                 * Spring-managed transactions. Similar to a transactional JNDI DataSource
                 * as provided by a Java EE server.
                 * <p>Data access code that should remain unaware of Spring's data access support
                 * can work with this proxy to seamlessly participate in Spring-managed transactions.
                 * Note that the transaction manager, for example {@link DataSourceTransactionManager},
                 * still needs to work with the underlying DataSource, <i>not</i> with this proxy.
                 * <p><b>Make sure that TransactionAwareDataSourceProxy is the outermost DataSource
                 * of a chain of DataSource proxies/adapters.</b> TransactionAwareDataSourceProxy
                 * can delegate either directly to the target connection pool or to some
                 * intermediary proxy/adapter like {@link LazyConnectionDataSourceProxy} or
                 * {@link UserCredentialsDataSourceAdapter}.
                 * <p>Delegates to {@link DataSourceUtils} for automatically participating in
                 * thread-bound transactions, for example managed by {@link DataSourceTransactionManager}.
                 * {@code getConnection} calls and {@code close} calls on returned Connections
                 * will behave properly within a transaction, i.e. always operate on the transactional
                 * Connection. If not within a transaction, normal DataSource behavior applies.
                 * <p>This proxy allows data access code to work with the plain JDBC API and still
                 * participate in Spring-managed transactions, similar to JDBC code in a Java EE/JTA
                 * environment. However, if possible, use Spring's DataSourceUtils, JdbcTemplate or
                 * JDBC operation objects to get transaction participation even without a proxy for
                 * the target DataSource, avoiding the need to define such a proxy in the first place.
                 * <p>As a further effect, using a transaction-aware DataSource will apply remaining
                 * transaction timeouts to all created JDBC (Prepared/Callable)Statement. This means
                 * that all operations performed through standard JDBC will automatically participate
                 * in Spring-managed transaction timeouts.
                 * <p><b>NOTE:</b> This DataSource proxy needs to return wrapped Connections (which
                 * implement the {@link ConnectionProxy} interface) in order to handle close calls
                 * properly. Use {@link Connection#unwrap} to retrieve the native JDBC Connection.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see javax.sql.DataSource#getConnection()
                 * @see java.sql.Connection#close()
                 * @see DataSourceUtils#doGetConnection
                 * @see DataSourceUtils#applyTransactionTimeout
                 * @see DataSourceUtils#doReleaseConnection
                 */
                // @ts-ignore
                class TransactionAwareDataSourceProxy extends org.springframework.jdbc.datasource.DelegatingDataSource {
                    /**
                     * Create a new TransactionAwareDataSourceProxy.
                     * @see #setTargetDataSource
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new TransactionAwareDataSourceProxy.
                     * @param targetDataSource the target DataSource
                     */
                    // @ts-ignore
                    constructor(targetDataSource: javax.sql.DataSource)
                    /**
                     * Specify whether to reobtain the target Connection for each operation
                     * performed within a transaction.
                     * <p>The default is "false". Specify "true" to reobtain transactional
                     * Connections for every call on the Connection proxy; this is advisable
                     * on JBoss if you hold on to a Connection handle across transaction boundaries.
                     * <p>The effect of this setting is similar to the
                     * "hibernate.connection.release_mode" value "after_statement".
                     */
                    // @ts-ignore
                    public setReobtainTransactionalConnections(reobtainTransactionalConnections: boolean): void
                    /**
                     * Delegates to DataSourceUtils for automatically participating in Spring-managed
                     * transactions. Throws the original SQLException, if any.
                     * <p>The returned Connection handle implements the ConnectionProxy interface,
                     * allowing to retrieve the underlying target Connection.
                     * @return a transactional Connection if any, a new one else
                     * @see DataSourceUtils#doGetConnection
                     * @see ConnectionProxy#getTargetConnection
                     */
                    // @ts-ignore
                    public getConnection(): java.sql.Connection
                    /**
                     * Wraps the given Connection with a proxy that delegates every method call to it
                     * but delegates {@code close()} calls to DataSourceUtils.
                     * @param targetDataSource the DataSource that the Connection came from
                     * @return the wrapped Connection
                     * @see java.sql.Connection#close()
                     * @see DataSourceUtils#doReleaseConnection
                     */
                    // @ts-ignore
                    getTransactionAwareConnectionProxy(targetDataSource: javax.sql.DataSource): java.sql.Connection
                    /**
                     * Determine whether to obtain a fixed target Connection for the proxy
                     * or to reobtain the target Connection for each operation.
                     * <p>The default implementation returns {@code true} for all
                     * standard cases. This can be overridden through the
                     * {@link #setReobtainTransactionalConnections "reobtainTransactionalConnections"}
                     * flag, which enforces a non-fixed target Connection within an active transaction.
                     * Note that non-transactional access will always use a fixed Connection.
                     * @param targetDataSource the target DataSource
                     */
                    // @ts-ignore
                    shouldObtainFixedConnection(targetDataSource: javax.sql.DataSource): boolean
                }
            }
        }
    }
}
