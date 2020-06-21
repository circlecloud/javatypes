declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * Implementation of <b>Realm</b> that works with any JDBC supported database.
                 * See the JDBCRealm.howto for more details on how to set up the database and
                 * for configuration options.
                 * <p>For a <b>Realm</b> implementation that supports connection pooling and
                 * doesn't require synchronisation of <code>authenticate()</code>,
                 * <code>getPassword()</code>, <code>roles()</code> and
                 * <code>getPrincipal()</code> or the ugly connection logic use the
                 * <code>DataSourceRealm</code>.</p>
                 * @author Craig R. McClanahan
                 * @author Carson McDonald
                 * @author Ignacio Ortega
                 */
                // @ts-ignore
                class JDBCRealm extends org.apache.catalina.realm.RealmBase {
                    // @ts-ignore
                    constructor()
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
                     * The connection URL to use when trying to connect to the database.
                     */
                    // @ts-ignore
                    connectionURL: java.lang.String | string
                    /**
                     * The connection to the database.
                     */
                    // @ts-ignore
                    dbConnection: java.sql.Connection
                    /**
                     * Instance of the JDBC Driver class we use as a connection factory.
                     */
                    // @ts-ignore
                    driver: java.sql.Driver
                    /**
                     * The JDBC driver to use.
                     */
                    // @ts-ignore
                    driverName: java.lang.String | string
                    /**
                     * The PreparedStatement to use for authenticating users.
                     */
                    // @ts-ignore
                    preparedCredentials: java.sql.PreparedStatement
                    /**
                     * The PreparedStatement to use for identifying the roles for
                     * a specified user.
                     */
                    // @ts-ignore
                    preparedRoles: java.sql.PreparedStatement
                    /**
                     * The column in the user role table that names a role
                     */
                    // @ts-ignore
                    roleNameCol: java.lang.String | string
                    /**
                     * The column in the user table that holds the user's credentials
                     */
                    // @ts-ignore
                    userCredCol: java.lang.String | string
                    /**
                     * The column in the user table that holds the user's name
                     */
                    // @ts-ignore
                    userNameCol: java.lang.String | string
                    /**
                     * The table that holds the relation between user's and roles
                     */
                    // @ts-ignore
                    userRoleTable: java.lang.String | string
                    /**
                     * The table that holds user data.
                     */
                    // @ts-ignore
                    userTable: java.lang.String | string
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
                     * @return the URL to use to connect to the database.
                     */
                    // @ts-ignore
                    public getConnectionURL(): string
                    /**
                     * Set the URL to use to connect to the database.
                     * @param connectionURL The new connection URL
                     */
                    // @ts-ignore
                    public setConnectionURL(connectionURL: java.lang.String | string): void
                    /**
                     * @return the JDBC driver that will be used.
                     */
                    // @ts-ignore
                    public getDriverName(): string
                    /**
                     * Set the JDBC driver that will be used.
                     * @param driverName The driver name
                     */
                    // @ts-ignore
                    public setDriverName(driverName: java.lang.String | string): void
                    /**
                     * @return the column in the user role table that names a role.
                     */
                    // @ts-ignore
                    public getRoleNameCol(): string
                    /**
                     * Set the column in the user role table that names a role.
                     * @param roleNameCol The column name
                     */
                    // @ts-ignore
                    public setRoleNameCol(roleNameCol: java.lang.String | string): void
                    /**
                     * @return the column in the user table that holds the user's credentials.
                     */
                    // @ts-ignore
                    public getUserCredCol(): string
                    /**
                     * Set the column in the user table that holds the user's credentials.
                     * @param userCredCol The column name
                     */
                    // @ts-ignore
                    public setUserCredCol(userCredCol: java.lang.String | string): void
                    /**
                     * @return the column in the user table that holds the user's name.
                     */
                    // @ts-ignore
                    public getUserNameCol(): string
                    /**
                     * Set the column in the user table that holds the user's name.
                     * @param userNameCol The column name
                     */
                    // @ts-ignore
                    public setUserNameCol(userNameCol: java.lang.String | string): void
                    /**
                     * @return the table that holds the relation between user's and roles.
                     */
                    // @ts-ignore
                    public getUserRoleTable(): string
                    /**
                     * Set the table that holds the relation between user's and roles.
                     * @param userRoleTable The table name
                     */
                    // @ts-ignore
                    public setUserRoleTable(userRoleTable: java.lang.String | string): void
                    /**
                     * @return the table that holds user data..
                     */
                    // @ts-ignore
                    public getUserTable(): string
                    /**
                     * Set the table that holds user data.
                     * @param userTable The table name
                     */
                    // @ts-ignore
                    public setUserTable(userTable: java.lang.String | string): void
                    /**
                     * Return the Principal associated with the specified username and
                     * credentials, if there is one; otherwise return <code>null</code>.
                     * If there are any errors with the JDBC connection, executing
                     * the query or anything we return null (don't authenticate). This
                     * event is also logged, and the connection will be closed so that
                     * a subsequent request will automatically re-open it.
                     * @param username Username of the Principal to look up
                     * @param credentials Password or other credentials to use in
                     *   authenticating this username
                     * @return the associated principal, or <code>null</code> if there is none.
                     */
                    // @ts-ignore
                    public authenticate(username: java.lang.String | string, credentials: java.lang.String | string): java.security.Principal
                    /**
                     * Attempt to authenticate the user with the provided credentials.
                     * @param dbConnection The database connection to be used
                     * @param username Username of the Principal to look up
                     * @param credentials Password or other credentials to use in authenticating
                     *                     this username
                     * @return Return the Principal associated with the specified username and
                     *          credentials, if there is one; otherwise return <code>null</code>.
                     */
                    // @ts-ignore
                    public authenticate(dbConnection: java.sql.Connection, username: java.lang.String | string, credentials: java.lang.String | string): java.security.Principal
                    // @ts-ignore
                    public isAvailable(): boolean
                    /**
                     * Close the specified database connection.
                     * @param dbConnection The connection to be closed
                     */
                    // @ts-ignore
                    close(dbConnection: java.sql.Connection): void
                    /**
                     * Return a PreparedStatement configured to perform the SELECT required
                     * to retrieve user credentials for the specified username.
                     * @param dbConnection The database connection to be used
                     * @param username Username for which credentials should be retrieved
                     * @return the prepared statement
                     * @exception SQLException if a database error occurs
                     */
                    // @ts-ignore
                    credentials(dbConnection: java.sql.Connection, username: java.lang.String | string): java.sql.PreparedStatement
                    /**
                     * Get the password for the specified user.
                     * @param username The user name
                     * @return the password associated with the given principal's user name.
                     */
                    // @ts-ignore
                    getPassword(username: java.lang.String | string): string
                    /**
                     * Get the principal associated with the specified user.
                     * @param username The user name
                     * @return the Principal associated with the given user name.
                     */
                    // @ts-ignore
                    getPrincipal(username: java.lang.String | string): java.security.Principal
                    /**
                     * Return the roles associated with the given user name.
                     * @param username The user name
                     * @return an array list of the role names
                     */
                    // @ts-ignore
                    getRoles(username: java.lang.String | string): java.util.ArrayList<java.lang.String | string>
                    /**
                     * Open (if necessary) and return a database connection for use by
                     * this Realm.
                     * @return the opened connection
                     * @exception SQLException if a database error occurs
                     */
                    // @ts-ignore
                    open(): java.sql.Connection
                    /**
                     * Return a PreparedStatement configured to perform the SELECT required
                     * to retrieve user roles for the specified username.
                     * @param dbConnection The database connection to be used
                     * @param username Username for which roles should be retrieved
                     * @return the prepared statement
                     * @exception SQLException if a database error occurs
                     */
                    // @ts-ignore
                    roles(dbConnection: java.sql.Connection, username: java.lang.String | string): java.sql.PreparedStatement
                    /**
                     * Prepare for the beginning of active use of the public methods of this
                     * component and implement the requirements of
                     * {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Gracefully terminate the active use of the public methods of this
                     * component and implement the requirements of
                     * {@link org.apache.catalina.util.LifecycleBase#stopInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that needs to be reported
                     */
                    // @ts-ignore
                    stopInternal(): void
                }
            }
        }
    }
}
