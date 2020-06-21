declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * {@link org.springframework.transaction.PlatformTransactionManager}
                 * implementation for a single JDBC {@link javax.sql.DataSource}. This class is
                 * capable of working in any environment with any JDBC driver, as long as the setup
                 * uses a {@code javax.sql.DataSource} as its {@code Connection} factory mechanism.
                 * Binds a JDBC Connection from the specified DataSource to the current thread,
                 * potentially allowing for one thread-bound Connection per DataSource.
                 * <p><b>Note: The DataSource that this transaction manager operates on needs
                 * to return independent Connections.</b> The Connections may come from a pool
                 * (the typical case), but the DataSource must not return thread-scoped /
                 * request-scoped Connections or the like. This transaction manager will
                 * associate Connections with thread-bound transactions itself, according
                 * to the specified propagation behavior. It assumes that a separate,
                 * independent Connection can be obtained even during an ongoing transaction.
                 * <p>Application code is required to retrieve the JDBC Connection via
                 * {@link DataSourceUtils#getConnection(DataSource)} instead of a standard
                 * Java EE-style {@link DataSource#getConnection()} call. Spring classes such as
                 * {@link org.springframework.jdbc.core.JdbcTemplate} use this strategy implicitly.
                 * If not used in combination with this transaction manager, the
                 * {@link DataSourceUtils} lookup strategy behaves exactly like the native
                 * DataSource lookup; it can thus be used in a portable fashion.
                 * <p>Alternatively, you can allow application code to work with the standard
                 * Java EE-style lookup pattern {@link DataSource#getConnection()}, for example for
                 * legacy code that is not aware of Spring at all. In that case, define a
                 * {@link TransactionAwareDataSourceProxy} for your target DataSource, and pass
                 * that proxy DataSource to your DAOs, which will automatically participate in
                 * Spring-managed transactions when accessing it.
                 * <p>Supports custom isolation levels, and timeouts which get applied as
                 * appropriate JDBC statement timeouts. To support the latter, application code
                 * must either use {@link org.springframework.jdbc.core.JdbcTemplate}, call
                 * {@link DataSourceUtils#applyTransactionTimeout} for each created JDBC Statement,
                 * or go through a {@link TransactionAwareDataSourceProxy} which will create
                 * timeout-aware JDBC Connections and Statements automatically.
                 * <p>Consider defining a {@link LazyConnectionDataSourceProxy} for your target
                 * DataSource, pointing both this transaction manager and your DAOs to it.
                 * This will lead to optimized handling of "empty" transactions, i.e. of transactions
                 * without any JDBC statements executed. A LazyConnectionDataSourceProxy will not fetch
                 * an actual JDBC Connection from the target DataSource until a Statement gets executed,
                 * lazily applying the specified transaction settings to the target Connection.
                 * <p>This transaction manager supports nested transactions via the JDBC 3.0
                 * {@link java.sql.Savepoint} mechanism. The
                 * {@link #setNestedTransactionAllowed "nestedTransactionAllowed"} flag defaults
                 * to "true", since nested transactions will work without restrictions on JDBC
                 * drivers that support savepoints (such as the Oracle JDBC driver).
                 * <p>This transaction manager can be used as a replacement for the
                 * {@link org.springframework.transaction.jta.JtaTransactionManager} in the single
                 * resource case, as it does not require a container that supports JTA, typically
                 * in combination with a locally defined JDBC DataSource (e.g. an Apache Commons
                 * DBCP connection pool). Switching between this local strategy and a JTA
                 * environment is just a matter of configuration!
                 * <p>As of 4.3.4, this transaction manager triggers flush callbacks on registered
                 * transaction synchronizations (if synchronization is generally active), assuming
                 * resources operating on the underlying JDBC {@code Connection}. This allows for
                 * setup analogous to {@code JtaTransactionManager}, in particular with respect to
                 * lazily registered ORM resources (e.g. a Hibernate {@code Session}).
                 * @author Juergen Hoeller
                 * @since 02.05.2003
                 * @see #setNestedTransactionAllowed
                 * @see java.sql.Savepoint
                 * @see DataSourceUtils#getConnection(javax.sql.DataSource)
                 * @see DataSourceUtils#applyTransactionTimeout
                 * @see DataSourceUtils#releaseConnection
                 * @see TransactionAwareDataSourceProxy
                 * @see LazyConnectionDataSourceProxy
                 * @see org.springframework.jdbc.core.JdbcTemplate
                 */
                // @ts-ignore
                class DataSourceTransactionManager extends AbstractPlatformTransactionManager {
                    /**
                     * Create a new DataSourceTransactionManager instance.
                     * A DataSource has to be set to be able to use it.
                     * @see #setDataSource
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new DataSourceTransactionManager instance.
                     * @param dataSource the JDBC DataSource to manage transactions for
                     */
                    // @ts-ignore
                    constructor(dataSource: javax.sql.DataSource)
                    /**
                     * Set the JDBC DataSource that this instance should manage transactions for.
                     * <p>This will typically be a locally defined DataSource, for example an
                     * Apache Commons DBCP connection pool. Alternatively, you can also drive
                     * transactions for a non-XA J2EE DataSource fetched from JNDI. For an XA
                     * DataSource, use JtaTransactionManager.
                     * <p>The DataSource specified here should be the target DataSource to manage
                     * transactions for, not a TransactionAwareDataSourceProxy. Only data access
                     * code may work with TransactionAwareDataSourceProxy, while the transaction
                     * manager needs to work on the underlying target DataSource. If there's
                     * nevertheless a TransactionAwareDataSourceProxy passed in, it will be
                     * unwrapped to extract its target DataSource.
                     * <p><b>The DataSource passed in here needs to return independent Connections.</b>
                     * The Connections may come from a pool (the typical case), but the DataSource
                     * must not return thread-scoped / request-scoped Connections or the like.
                     * @see TransactionAwareDataSourceProxy
                     * @see org.springframework.transaction.jta.JtaTransactionManager
                     */
                    // @ts-ignore
                    public setDataSource(dataSource: javax.sql.DataSource): void
                    /**
                     * Return the JDBC DataSource that this instance manages transactions for.
                     */
                    // @ts-ignore
                    public getDataSource(): javax.sql.DataSource
                    /**
                     * Obtain the DataSource for actual use.
                     * @return the DataSource (never {#code null})
                     * @throws IllegalStateException in case of no DataSource set
                     * @since 5.0
                     */
                    // @ts-ignore
                    obtainDataSource(): javax.sql.DataSource
                    /**
                     * Specify whether to enforce the read-only nature of a transaction
                     * (as indicated by {@link TransactionDefinition#isReadOnly()}
                     * through an explicit statement on the transactional connection:
                     * "SET TRANSACTION READ ONLY" as understood by Oracle, MySQL and Postgres.
                     * <p>The exact treatment, including any SQL statement executed on the connection,
                     * can be customized through {@link #prepareTransactionalConnection}.
                     * <p>This mode of read-only handling goes beyond the {@link Connection#setReadOnly}
                     * hint that Spring applies by default. In contrast to that standard JDBC hint,
                     * "SET TRANSACTION READ ONLY" enforces an isolation-level-like connection mode
                     * where data manipulation statements are strictly disallowed. Also, on Oracle,
                     * this read-only mode provides read consistency for the entire transaction.
                     * <p>Note that older Oracle JDBC drivers (9i, 10g) used to enforce this read-only
                     * mode even for {@code Connection.setReadOnly(true}. However, with recent drivers,
                     * this strong enforcement needs to be applied explicitly, e.g. through this flag.
                     * @since 4.3.7
                     * @see #prepareTransactionalConnection
                     */
                    // @ts-ignore
                    public setEnforceReadOnly(enforceReadOnly: boolean): void
                    /**
                     * Return whether to enforce the read-only nature of a transaction
                     * through an explicit statement on the transactional connection.
                     * @since 4.3.7
                     * @see #setEnforceReadOnly
                     */
                    // @ts-ignore
                    public isEnforceReadOnly(): boolean
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public getResourceFactory(): any
                    // @ts-ignore
                    doGetTransaction(): any
                    // @ts-ignore
                    isExistingTransaction(transaction: java.lang.Object | any): boolean
                    /**
                     * This implementation sets the isolation level but ignores the timeout.
                     */
                    // @ts-ignore
                    doBegin(transaction: java.lang.Object | any, definition: TransactionDefinition): void
                    // @ts-ignore
                    doSuspend(transaction: java.lang.Object | any): any
                    // @ts-ignore
                    doResume(transaction: java.lang.Object | any, suspendedResources: java.lang.Object | any): void
                    // @ts-ignore
                    doCommit(status: DefaultTransactionStatus): void
                    // @ts-ignore
                    doRollback(status: DefaultTransactionStatus): void
                    // @ts-ignore
                    doSetRollbackOnly(status: DefaultTransactionStatus): void
                    // @ts-ignore
                    doCleanupAfterCompletion(transaction: java.lang.Object | any): void
                    /**
                     * Prepare the transactional {@code Connection} right after transaction begin.
                     * <p>The default implementation executes a "SET TRANSACTION READ ONLY" statement
                     * if the {@link #setEnforceReadOnly "enforceReadOnly"} flag is set to {@code true}
                     * and the transaction definition indicates a read-only transaction.
                     * <p>The "SET TRANSACTION READ ONLY" is understood by Oracle, MySQL and Postgres
                     * and may work with other databases as well. If you'd like to adapt this treatment,
                     * override this method accordingly.
                     * @param con the transactional JDBC Connection
                     * @param definition the current transaction definition
                     * @throws SQLException if thrown by JDBC API
                     * @since 4.3.7
                     * @see #setEnforceReadOnly
                     */
                    // @ts-ignore
                    prepareTransactionalConnection(con: java.sql.Connection, definition: TransactionDefinition): void
                }
            }
        }
    }
}
