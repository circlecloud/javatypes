declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * Proxy for a target DataSource, fetching actual JDBC Connections lazily,
                 * i.e. not until first creation of a Statement. Connection initialization
                 * properties like auto-commit mode, transaction isolation and read-only mode
                 * will be kept and applied to the actual JDBC Connection as soon as an
                 * actual Connection is fetched (if ever). Consequently, commit and rollback
                 * calls will be ignored if no Statements have been created.
                 * <p>This DataSource proxy allows to avoid fetching JDBC Connections from
                 * a pool unless actually necessary. JDBC transaction control can happen
                 * without fetching a Connection from the pool or communicating with the
                 * database; this will be done lazily on first creation of a JDBC Statement.
                 * <p><b>If you configure both a LazyConnectionDataSourceProxy and a
                 * TransactionAwareDataSourceProxy, make sure that the latter is the outermost
                 * DataSource.</b> In such a scenario, data access code will talk to the
                 * transaction-aware DataSource, which will in turn work with the
                 * LazyConnectionDataSourceProxy.
                 * <p>Lazy fetching of physical JDBC Connections is particularly beneficial
                 * in a generic transaction demarcation environment. It allows you to demarcate
                 * transactions on all methods that could potentially perform data access,
                 * without paying a performance penalty if no actual data access happens.
                 * <p>This DataSource proxy gives you behavior analogous to JTA and a
                 * transactional JNDI DataSource (as provided by the Java EE server), even
                 * with a local transaction strategy like DataSourceTransactionManager or
                 * HibernateTransactionManager. It does not add value with Spring's
                 * JtaTransactionManager as transaction strategy.
                 * <p>Lazy fetching of JDBC Connections is also recommended for read-only
                 * operations with Hibernate, in particular if the chances of resolving the
                 * result in the second-level cache are high. This avoids the need to
                 * communicate with the database at all for such read-only operations.
                 * You will get the same effect with non-transactional reads, but lazy fetching
                 * of JDBC Connections allows you to still perform reads in transactions.
                 * <p><b>NOTE:</b> This DataSource proxy needs to return wrapped Connections
                 * (which implement the {@link ConnectionProxy} interface) in order to handle
                 * lazy fetching of an actual JDBC Connection. Use {@link Connection#unwrap}
                 * to retrieve the native JDBC Connection.
                 * @author Juergen Hoeller
                 * @since 1.1.4
                 * @see DataSourceTransactionManager
                 */
                // @ts-ignore
                class LazyConnectionDataSourceProxy extends org.springframework.jdbc.datasource.DelegatingDataSource {
                    /**
                     * Create a new LazyConnectionDataSourceProxy.
                     * @see #setTargetDataSource
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new LazyConnectionDataSourceProxy.
                     * @param targetDataSource the target DataSource
                     */
                    // @ts-ignore
                    constructor(targetDataSource: javax.sql.DataSource)
                    /**
                     * Set the default auto-commit mode to expose when no target Connection
                     * has been fetched yet (-> actual JDBC Connection default not known yet).
                     * <p>If not specified, the default gets determined by checking a target
                     * Connection on startup. If that check fails, the default will be determined
                     * lazily on first access of a Connection.
                     * @see java.sql.Connection#setAutoCommit
                     */
                    // @ts-ignore
                    public setDefaultAutoCommit(defaultAutoCommit: boolean): void
                    /**
                     * Set the default transaction isolation level to expose when no target Connection
                     * has been fetched yet (-> actual JDBC Connection default not known yet).
                     * <p>This property accepts the int constant value (e.g. 8) as defined in the
                     * {@link java.sql.Connection} interface; it is mainly intended for programmatic
                     * use. Consider using the "defaultTransactionIsolationName" property for setting
                     * the value by name (e.g. "TRANSACTION_SERIALIZABLE").
                     * <p>If not specified, the default gets determined by checking a target
                     * Connection on startup. If that check fails, the default will be determined
                     * lazily on first access of a Connection.
                     * @see #setDefaultTransactionIsolationName
                     * @see java.sql.Connection#setTransactionIsolation
                     */
                    // @ts-ignore
                    public setDefaultTransactionIsolation(defaultTransactionIsolation: number /*int*/): void
                    /**
                     * Set the default transaction isolation level by the name of the corresponding
                     * constant in {@link java.sql.Connection}, e.g. "TRANSACTION_SERIALIZABLE".
                     * @param constantName name of the constant
                     * @see #setDefaultTransactionIsolation
                     * @see java.sql.Connection#TRANSACTION_READ_UNCOMMITTED
                     * @see java.sql.Connection#TRANSACTION_READ_COMMITTED
                     * @see java.sql.Connection#TRANSACTION_REPEATABLE_READ
                     * @see java.sql.Connection#TRANSACTION_SERIALIZABLE
                     */
                    // @ts-ignore
                    public setDefaultTransactionIsolationName(constantName: java.lang.String | string): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    /**
                     * Check the default connection properties (auto-commit, transaction isolation),
                     * keeping them to be able to expose them correctly without fetching an actual
                     * JDBC Connection from the target DataSource.
                     * <p>This will be invoked once on startup, but also for each retrieval of a
                     * target Connection. If the check failed on startup (because the database was
                     * down), we'll lazily retrieve those settings.
                     * @param con the Connection to use for checking
                     * @throws SQLException if thrown by Connection methods
                     */
                    // @ts-ignore
                    checkDefaultConnectionProperties(con: java.sql.Connection): void
                    /**
                     * Expose the default auto-commit value.
                     */
                    // @ts-ignore
                    defaultAutoCommit(): java.lang.Boolean
                    /**
                     * Expose the default transaction isolation value.
                     */
                    // @ts-ignore
                    defaultTransactionIsolation(): number
                    /**
                     * Return a Connection handle that lazily fetches an actual JDBC Connection
                     * when asked for a Statement (or PreparedStatement or CallableStatement).
                     * <p>The returned Connection handle implements the ConnectionProxy interface,
                     * allowing to retrieve the underlying target Connection.
                     * @return a lazy Connection handle
                     * @see ConnectionProxy#getTargetConnection()
                     */
                    // @ts-ignore
                    public getConnection(): java.sql.Connection
                    /**
                     * Return a Connection handle that lazily fetches an actual JDBC Connection
                     * when asked for a Statement (or PreparedStatement or CallableStatement).
                     * <p>The returned Connection handle implements the ConnectionProxy interface,
                     * allowing to retrieve the underlying target Connection.
                     * @param username the per-Connection username
                     * @param password the per-Connection password
                     * @return a lazy Connection handle
                     * @see ConnectionProxy#getTargetConnection()
                     */
                    // @ts-ignore
                    public getConnection(username: java.lang.String | string, password: java.lang.String | string): java.sql.Connection
                }
            }
        }
    }
}
