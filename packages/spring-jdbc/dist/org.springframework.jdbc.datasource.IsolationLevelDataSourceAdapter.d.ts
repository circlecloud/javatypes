declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * An adapter for a target {@link javax.sql.DataSource}, applying the current
                 * Spring transaction's isolation level (and potentially specified user credentials)
                 * to every {@code getConnection} call. Also applies the read-only flag,
                 * if specified.
                 * <p>Can be used to proxy a target JNDI DataSource that does not have the
                 * desired isolation level (and user credentials) configured. Client code
                 * can work with this DataSource as usual, not worrying about such settings.
                 * <p>Inherits the capability to apply specific user credentials from its superclass
                 * {@link UserCredentialsDataSourceAdapter}; see the latter's javadoc for details
                 * on that functionality (e.g. {@link #setCredentialsForCurrentThread}).
                 * <p><b>WARNING:</b> This adapter simply calls
                 * {@link java.sql.Connection#setTransactionIsolation} and/or
                 * {@link java.sql.Connection#setReadOnly} for every Connection obtained from it.
                 * It does, however, <i>not</i> reset those settings; it rather expects the target
                 * DataSource to perform such resetting as part of its connection pool handling.
                 * <b>Make sure that the target DataSource properly cleans up such transaction state.</b>
                 * @author Juergen Hoeller
                 * @since 2.0.3
                 * @see #setIsolationLevel
                 * @see #setIsolationLevelName
                 * @see #setUsername
                 * @see #setPassword
                 */
                // @ts-ignore
                class IsolationLevelDataSourceAdapter extends org.springframework.jdbc.datasource.UserCredentialsDataSourceAdapter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the default isolation level by the name of the corresponding constant
                     * in {@link org.springframework.transaction.TransactionDefinition}, e.g.
                     * "ISOLATION_SERIALIZABLE".
                     * <p>If not specified, the target DataSource's default will be used.
                     * Note that a transaction-specific isolation value will always override
                     * any isolation setting specified at the DataSource level.
                     * @param constantName name of the constant
                     * @see org.springframework.transaction.TransactionDefinition#ISOLATION_READ_UNCOMMITTED
                     * @see org.springframework.transaction.TransactionDefinition#ISOLATION_READ_COMMITTED
                     * @see org.springframework.transaction.TransactionDefinition#ISOLATION_REPEATABLE_READ
                     * @see org.springframework.transaction.TransactionDefinition#ISOLATION_SERIALIZABLE
                     * @see #setIsolationLevel
                     */
                    // @ts-ignore
                    public setIsolationLevelName(constantName: java.lang.String | string): void
                    /**
                     * Specify the default isolation level to use for Connection retrieval,
                     * according to the JDBC {@link java.sql.Connection} constants
                     * (equivalent to the corresponding Spring
                     * {@link org.springframework.transaction.TransactionDefinition} constants).
                     * <p>If not specified, the target DataSource's default will be used.
                     * Note that a transaction-specific isolation value will always override
                     * any isolation setting specified at the DataSource level.
                     * @see java.sql.Connection#TRANSACTION_READ_UNCOMMITTED
                     * @see java.sql.Connection#TRANSACTION_READ_COMMITTED
                     * @see java.sql.Connection#TRANSACTION_REPEATABLE_READ
                     * @see java.sql.Connection#TRANSACTION_SERIALIZABLE
                     * @see org.springframework.transaction.TransactionDefinition#ISOLATION_READ_UNCOMMITTED
                     * @see org.springframework.transaction.TransactionDefinition#ISOLATION_READ_COMMITTED
                     * @see org.springframework.transaction.TransactionDefinition#ISOLATION_REPEATABLE_READ
                     * @see org.springframework.transaction.TransactionDefinition#ISOLATION_SERIALIZABLE
                     * @see org.springframework.transaction.TransactionDefinition#getIsolationLevel()
                     * @see org.springframework.transaction.support.TransactionSynchronizationManager#getCurrentTransactionIsolationLevel()
                     */
                    // @ts-ignore
                    public setIsolationLevel(isolationLevel: number /*int*/): void
                    /**
                     * Return the statically specified isolation level,
                     * or {@code null} if none.
                     */
                    // @ts-ignore
                    getIsolationLevel(): number
                    /**
                     * Applies the current isolation level value and read-only flag
                     * to the returned Connection.
                     * @see #getCurrentIsolationLevel()
                     * @see #getCurrentReadOnlyFlag()
                     */
                    // @ts-ignore
                    doGetConnection(username: java.lang.String | string, password: java.lang.String | string): java.sql.Connection
                    /**
                     * Determine the current isolation level: either the transaction's
                     * isolation level or a statically defined isolation level.
                     * @return the current isolation level, or {#code null} if none
                     * @see org.springframework.transaction.support.TransactionSynchronizationManager#getCurrentTransactionIsolationLevel()
                     * @see #setIsolationLevel
                     */
                    // @ts-ignore
                    getCurrentIsolationLevel(): number
                    /**
                     * Determine the current read-only flag: by default,
                     * the transaction's read-only hint.
                     * @return whether there is a read-only hint for the current scope
                     * @see org.springframework.transaction.support.TransactionSynchronizationManager#isCurrentTransactionReadOnly()
                     */
                    // @ts-ignore
                    getCurrentReadOnlyFlag(): java.lang.Boolean
                }
            }
        }
    }
}
