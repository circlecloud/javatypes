declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * Resource holder wrapping a JDBC {@link Connection}.
                 * {@link DataSourceTransactionManager} binds instances of this class
                 * to the thread, for a specific {@link javax.sql.DataSource}.
                 * <p>Inherits rollback-only support for nested JDBC transactions
                 * and reference count functionality from the base class.
                 * <p>Note: This is an SPI class, not intended to be used by applications.
                 * @author Juergen Hoeller
                 * @since 06.05.2003
                 * @see DataSourceTransactionManager
                 * @see DataSourceUtils
                 */
                // @ts-ignore
                class ConnectionHolder extends ResourceHolderSupport {
                    /**
                     * Create a new ConnectionHolder for the given ConnectionHandle.
                     * @param connectionHandle the ConnectionHandle to hold
                     */
                    // @ts-ignore
                    constructor(connectionHandle: org.springframework.jdbc.datasource.ConnectionHandle)
                    /**
                     * Create a new ConnectionHolder for the given JDBC Connection,
                     * wrapping it with a {@link SimpleConnectionHandle},
                     * assuming that there is no ongoing transaction.
                     * @param connection the JDBC Connection to hold
                     * @see SimpleConnectionHandle
                     * @see #ConnectionHolder(java.sql.Connection, boolean)
                     */
                    // @ts-ignore
                    constructor(connection: java.sql.Connection)
                    /**
                     * Create a new ConnectionHolder for the given JDBC Connection,
                     * wrapping it with a {@link SimpleConnectionHandle}.
                     * @param connection the JDBC Connection to hold
                     * @param transactionActive whether the given Connection is involved
                     *  in an ongoing transaction
                     * @see SimpleConnectionHandle
                     */
                    // @ts-ignore
                    constructor(connection: java.sql.Connection, transactionActive: boolean)
                    /**
                     * Prefix for savepoint names.
                     */
                    // @ts-ignore
                    public static readonly SAVEPOINT_NAME_PREFIX: java.lang.String | string
                    /**
                     * Return the ConnectionHandle held by this ConnectionHolder.
                     */
                    // @ts-ignore
                    public getConnectionHandle(): org.springframework.jdbc.datasource.ConnectionHandle
                    /**
                     * Return whether this holder currently has a Connection.
                     */
                    // @ts-ignore
                    hasConnection(): boolean
                    /**
                     * Set whether this holder represents an active, JDBC-managed transaction.
                     * @see DataSourceTransactionManager
                     */
                    // @ts-ignore
                    setTransactionActive(transactionActive: boolean): void
                    /**
                     * Return whether this holder represents an active, JDBC-managed transaction.
                     */
                    // @ts-ignore
                    isTransactionActive(): boolean
                    /**
                     * Override the existing Connection handle with the given Connection.
                     * Reset the handle if given {@code null}.
                     * <p>Used for releasing the Connection on suspend (with a {@code null}
                     * argument) and setting a fresh Connection on resume.
                     */
                    // @ts-ignore
                    setConnection(connection: java.sql.Connection): void
                    /**
                     * Return the current Connection held by this ConnectionHolder.
                     * <p>This will be the same Connection until {@code released}
                     * gets called on the ConnectionHolder, which will reset the
                     * held Connection, fetching a new Connection on demand.
                     * @see ConnectionHandle#getConnection()
                     * @see #released()
                     */
                    // @ts-ignore
                    public getConnection(): java.sql.Connection
                    /**
                     * Return whether JDBC 3.0 Savepoints are supported.
                     * Caches the flag for the lifetime of this ConnectionHolder.
                     * @throws SQLException if thrown by the JDBC driver
                     */
                    // @ts-ignore
                    public supportsSavepoints(): boolean
                    /**
                     * Create a new JDBC 3.0 Savepoint for the current Connection,
                     * using generated savepoint names that are unique for the Connection.
                     * @return the new Savepoint
                     * @throws SQLException if thrown by the JDBC driver
                     */
                    // @ts-ignore
                    public createSavepoint(): java.sql.Savepoint
                    /**
                     * Releases the current Connection held by this ConnectionHolder.
                     * <p>This is necessary for ConnectionHandles that expect "Connection borrowing",
                     * where each returned Connection is only temporarily leased and needs to be
                     * returned once the data operation is done, to make the Connection available
                     * for other operations within the same transaction.
                     */
                    // @ts-ignore
                    public released(): void
                    // @ts-ignore
                    public clear(): void
                }
            }
        }
    }
}
