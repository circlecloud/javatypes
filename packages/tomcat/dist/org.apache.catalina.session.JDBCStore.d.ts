declare namespace org {
    namespace apache {
        namespace catalina {
            namespace session {
                /**
                 * Implementation of the {@link org.apache.catalina.Store Store}
                 * interface that stores serialized session objects in a database.
                 * Sessions that are saved are still subject to being expired
                 * based on inactivity.
                 * @author Bip Thelin
                 */
                // @ts-ignore
                class JDBCStore extends org.apache.catalina.session.StoreBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * Name to register for this Store, used for logging.
                     */
                    // @ts-ignore
                    static readonly storeName: java.lang.String | string
                    /**
                     * Name to register for the background thread.
                     */
                    // @ts-ignore
                    static readonly threadName: java.lang.String | string
                    /**
                     * The connection username to use when trying to connect to the database.
                     */
                    // @ts-ignore
                    connectionName: java.lang.String | string
                    /**
                     * The connection URL to use when trying to connect to the database.
                     */
                    // @ts-ignore
                    connectionPassword: java.lang.String | string
                    /**
                     * Connection string to use when connecting to the DB.
                     */
                    // @ts-ignore
                    connectionURL: java.lang.String | string
                    /**
                     * Instance of the JDBC Driver class we use as a connection factory.
                     */
                    // @ts-ignore
                    driver: java.sql.Driver
                    /**
                     * Driver to use.
                     */
                    // @ts-ignore
                    driverName: java.lang.String | string
                    /**
                     * name of the JNDI resource
                     */
                    // @ts-ignore
                    dataSourceName: java.lang.String | string
                    /**
                     * DataSource to use
                     */
                    // @ts-ignore
                    dataSource: javax.sql.DataSource
                    /**
                     * Table to use.
                     */
                    // @ts-ignore
                    sessionTable: java.lang.String | string
                    /**
                     * Column to use for /Engine/Host/Context name
                     */
                    // @ts-ignore
                    sessionAppCol: java.lang.String | string
                    /**
                     * Id column to use.
                     */
                    // @ts-ignore
                    sessionIdCol: java.lang.String | string
                    /**
                     * Data column to use.
                     */
                    // @ts-ignore
                    sessionDataCol: java.lang.String | string
                    /**
                     * {@code Is Valid} column to use.
                     */
                    // @ts-ignore
                    sessionValidCol: java.lang.String | string
                    /**
                     * Max Inactive column to use.
                     */
                    // @ts-ignore
                    sessionMaxInactiveCol: java.lang.String | string
                    /**
                     * Last Accessed column to use.
                     */
                    // @ts-ignore
                    sessionLastAccessedCol: java.lang.String | string
                    /**
                     * Variable to hold the <code>getSize()</code> prepared statement.
                     */
                    // @ts-ignore
                    preparedSizeSql: java.sql.PreparedStatement
                    /**
                     * Variable to hold the <code>save()</code> prepared statement.
                     */
                    // @ts-ignore
                    preparedSaveSql: java.sql.PreparedStatement
                    /**
                     * Variable to hold the <code>clear()</code> prepared statement.
                     */
                    // @ts-ignore
                    preparedClearSql: java.sql.PreparedStatement
                    /**
                     * Variable to hold the <code>remove()</code> prepared statement.
                     */
                    // @ts-ignore
                    preparedRemoveSql: java.sql.PreparedStatement
                    /**
                     * Variable to hold the <code>load()</code> prepared statement.
                     */
                    // @ts-ignore
                    preparedLoadSql: java.sql.PreparedStatement
                    /**
                     * @return the name for this instance (built from container name)
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * @return the thread name for this Store.
                     */
                    // @ts-ignore
                    public getThreadName(): string
                    /**
                     * @return the name for this Store, used for logging.
                     */
                    // @ts-ignore
                    public getStoreName(): string
                    /**
                     * Set the driver for this Store.
                     * @param driverName The new driver
                     */
                    // @ts-ignore
                    public setDriverName(driverName: java.lang.String | string): void
                    /**
                     * @return the driver for this Store.
                     */
                    // @ts-ignore
                    public getDriverName(): string
                    /**
                     * @return the username to use to connect to the database.
                     */
                    // @ts-ignore
                    public getConnectionName(): string
                    /**
                     * Set the username to use to connect to the database.
                     * @param connectionName Username
                     */
                    // @ts-ignore
                    public setConnectionName(connectionName: java.lang.String | string): void
                    /**
                     * @return the password to use to connect to the database.
                     */
                    // @ts-ignore
                    public getConnectionPassword(): string
                    /**
                     * Set the password to use to connect to the database.
                     * @param connectionPassword User password
                     */
                    // @ts-ignore
                    public setConnectionPassword(connectionPassword: java.lang.String | string): void
                    /**
                     * Set the Connection URL for this Store.
                     * @param connectionURL The new Connection URL
                     */
                    // @ts-ignore
                    public setConnectionURL(connectionURL: java.lang.String | string): void
                    /**
                     * @return the Connection URL for this Store.
                     */
                    // @ts-ignore
                    public getConnectionURL(): string
                    /**
                     * Set the table for this Store.
                     * @param sessionTable The new table
                     */
                    // @ts-ignore
                    public setSessionTable(sessionTable: java.lang.String | string): void
                    /**
                     * @return the table for this Store.
                     */
                    // @ts-ignore
                    public getSessionTable(): string
                    /**
                     * Set the App column for the table.
                     * @param sessionAppCol the column name
                     */
                    // @ts-ignore
                    public setSessionAppCol(sessionAppCol: java.lang.String | string): void
                    /**
                     * @return the web application name column for the table.
                     */
                    // @ts-ignore
                    public getSessionAppCol(): string
                    /**
                     * Set the Id column for the table.
                     * @param sessionIdCol the column name
                     */
                    // @ts-ignore
                    public setSessionIdCol(sessionIdCol: java.lang.String | string): void
                    /**
                     * @return the Id column for the table.
                     */
                    // @ts-ignore
                    public getSessionIdCol(): string
                    /**
                     * Set the Data column for the table
                     * @param sessionDataCol the column name
                     */
                    // @ts-ignore
                    public setSessionDataCol(sessionDataCol: java.lang.String | string): void
                    /**
                     * @return the data column for the table
                     */
                    // @ts-ignore
                    public getSessionDataCol(): string
                    /**
                     * Set the {@code Is Valid} column for the table
                     * @param sessionValidCol The column name
                     */
                    // @ts-ignore
                    public setSessionValidCol(sessionValidCol: java.lang.String | string): void
                    /**
                     * @return the {#code Is Valid} column
                     */
                    // @ts-ignore
                    public getSessionValidCol(): string
                    /**
                     * Set the {@code Max Inactive} column for the table
                     * @param sessionMaxInactiveCol The column name
                     */
                    // @ts-ignore
                    public setSessionMaxInactiveCol(sessionMaxInactiveCol: java.lang.String | string): void
                    /**
                     * @return the {#code Max Inactive} column
                     */
                    // @ts-ignore
                    public getSessionMaxInactiveCol(): string
                    /**
                     * Set the {@code Last Accessed} column for the table
                     * @param sessionLastAccessedCol The column name
                     */
                    // @ts-ignore
                    public setSessionLastAccessedCol(sessionLastAccessedCol: java.lang.String | string): void
                    /**
                     * @return the {#code Last Accessed} column
                     */
                    // @ts-ignore
                    public getSessionLastAccessedCol(): string
                    /**
                     * Set the JNDI name of a DataSource-factory to use for db access
                     * @param dataSourceName The JNDI name of the DataSource-factory
                     */
                    // @ts-ignore
                    public setDataSourceName(dataSourceName: java.lang.String | string): void
                    /**
                     * @return the name of the JNDI DataSource-factory
                     */
                    // @ts-ignore
                    public getDataSourceName(): string
                    /**
                     * @return if the datasource will be looked up in the webapp JNDI Context.
                     */
                    // @ts-ignore
                    public getLocalDataSource(): boolean
                    /**
                     * Set to {@code true} to cause the datasource to be looked up in the webapp
                     * JNDI Context.
                     * @param localDataSource the new flag value
                     */
                    // @ts-ignore
                    public setLocalDataSource(localDataSource: boolean): void
                    // @ts-ignore
                    public expiredKeys(): string[]
                    // @ts-ignore
                    public keys(): string[]
                    /**
                     * Return an integer containing a count of all Sessions
                     * currently saved in this Store.  If there are no Sessions,
                     * <code>0</code> is returned.
                     * @return the count of all sessions currently saved in this Store
                     * @exception IOException if an input/output error occurred
                     */
                    // @ts-ignore
                    public getSize(): number /*int*/
                    /**
                     * Load the Session associated with the id <code>id</code>.
                     * If no such session is found <code>null</code> is returned.
                     * @param id a value of type <code>String</code>
                     * @return the stored <code>Session</code>
                     * @exception ClassNotFoundException if an error occurs
                     * @exception IOException if an input/output error occurred
                     */
                    // @ts-ignore
                    public load(id: java.lang.String | string): org.apache.catalina.Session
                    /**
                     * Remove the Session with the specified session identifier from
                     * this Store, if present.  If no such Session is present, this method
                     * takes no action.
                     * @param id Session identifier of the Session to be removed
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public remove(id: java.lang.String | string): void
                    /**
                     * Remove all of the Sessions in this Store.
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public clear(): void
                    /**
                     * Save a session to the Store.
                     * @param session the session to be stored
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public save(session: org.apache.catalina.Session): void
                    /**
                     * Check the connection associated with this store, if it's
                     * <code>null</code> or closed try to reopen it.
                     * Returns <code>null</code> if the connection could not be established.
                     * @return <code>Connection</code> if the connection succeeded
                     */
                    // @ts-ignore
                    getConnection(): java.sql.Connection
                    /**
                     * Open (if necessary) and return a database connection for use by
                     * this Store.
                     * @return database connection ready to use
                     * @exception SQLException if a database error occurs
                     */
                    // @ts-ignore
                    open(): java.sql.Connection
                    /**
                     * Close the specified database connection.
                     * @param dbConnection The connection to be closed
                     */
                    // @ts-ignore
                    close(dbConnection: java.sql.Connection): void
                    /**
                     * Release the connection, if it
                     * is associated with a connection pool.
                     * @param conn The connection to be released
                     */
                    // @ts-ignore
                    release(conn: java.sql.Connection): void
                    /**
                     * Start this component and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Stop this component and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#stopInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    stopInternal(): void
                }
            }
        }
    }
}
