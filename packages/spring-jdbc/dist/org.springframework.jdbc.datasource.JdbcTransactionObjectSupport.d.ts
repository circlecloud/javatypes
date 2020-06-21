declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * Convenient base class for JDBC-aware transaction objects. Can contain a
                 * {@link ConnectionHolder} with a JDBC {@code Connection}, and implements the
                 * {@link SavepointManager} interface based on that {@code ConnectionHolder}.
                 * <p>Allows for programmatic management of JDBC {@link java.sql.Savepoint Savepoints}.
                 * Spring's {@link org.springframework.transaction.support.DefaultTransactionStatus}
                 * automatically delegates to this, as it autodetects transaction objects which
                 * implement the {@link SavepointManager} interface.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see DataSourceTransactionManager
                 */
                // @ts-ignore
                abstract class JdbcTransactionObjectSupport extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the ConnectionHolder for this transaction object.
                     */
                    // @ts-ignore
                    public setConnectionHolder(connectionHolder: org.springframework.jdbc.datasource.ConnectionHolder): void
                    /**
                     * Return the ConnectionHolder for this transaction object.
                     */
                    // @ts-ignore
                    public getConnectionHolder(): org.springframework.jdbc.datasource.ConnectionHolder
                    /**
                     * Check whether this transaction object has a ConnectionHolder.
                     */
                    // @ts-ignore
                    public hasConnectionHolder(): boolean
                    /**
                     * Set the previous isolation level to retain, if any.
                     */
                    // @ts-ignore
                    public setPreviousIsolationLevel(previousIsolationLevel: java.lang.Integer | number): void
                    /**
                     * Return the retained previous isolation level, if any.
                     */
                    // @ts-ignore
                    public getPreviousIsolationLevel(): number
                    /**
                     * Set the read-only status of this transaction.
                     * The default is {@code false}.
                     * @since 5.2.1
                     */
                    // @ts-ignore
                    public setReadOnly(readOnly: boolean): void
                    /**
                     * Return the read-only status of this transaction.
                     * @since 5.2.1
                     */
                    // @ts-ignore
                    public isReadOnly(): boolean
                    /**
                     * Set whether savepoints are allowed within this transaction.
                     * The default is {@code false}.
                     */
                    // @ts-ignore
                    public setSavepointAllowed(savepointAllowed: boolean): void
                    /**
                     * Return whether savepoints are allowed within this transaction.
                     */
                    // @ts-ignore
                    public isSavepointAllowed(): boolean
                    // @ts-ignore
                    public flush(): void
                    /**
                     * This implementation creates a JDBC 3.0 Savepoint and returns it.
                     * @see java.sql.Connection#setSavepoint
                     */
                    // @ts-ignore
                    public createSavepoint(): any
                    /**
                     * This implementation rolls back to the given JDBC 3.0 Savepoint.
                     * @see java.sql.Connection#rollback(java.sql.Savepoint)
                     */
                    // @ts-ignore
                    public rollbackToSavepoint(savepoint: java.lang.Object | any): void
                    /**
                     * This implementation releases the given JDBC 3.0 Savepoint.
                     * @see java.sql.Connection#releaseSavepoint
                     */
                    // @ts-ignore
                    public releaseSavepoint(savepoint: java.lang.Object | any): void
                    // @ts-ignore
                    getConnectionHolderForSavepoint(): org.springframework.jdbc.datasource.ConnectionHolder
                }
            }
        }
    }
}
