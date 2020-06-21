declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * Implementation of <b>Realm</b> that works with any JDBC JNDI DataSource.
                 * See the JDBCRealm.howto for more details on how to set up the database and
                 * for configuration options.
                 * @author Glenn L. Nielsen
                 * @author Craig R. McClanahan
                 * @author Carson McDonald
                 * @author Ignacio Ortega
                 */
                // @ts-ignore
                class DataSourceRealm extends org.apache.catalina.realm.RealmBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * The name of the JNDI JDBC DataSource
                     */
                    // @ts-ignore
                    dataSourceName: java.lang.String | string
                    /**
                     * Context local datasource.
                     */
                    // @ts-ignore
                    localDataSource: boolean
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
                     * @return the name of the JNDI JDBC DataSource.
                     */
                    // @ts-ignore
                    public getDataSourceName(): string
                    /**
                     * Set the name of the JNDI JDBC DataSource.
                     * @param dataSourceName the name of the JNDI JDBC DataSource
                     */
                    // @ts-ignore
                    public setDataSourceName(dataSourceName: java.lang.String | string): void
                    /**
                     * @return if the datasource will be looked up in the webapp JNDI Context.
                     */
                    // @ts-ignore
                    public getLocalDataSource(): boolean
                    /**
                     * Set to true to cause the datasource to be looked up in the webapp JNDI
                     * Context.
                     * @param localDataSource the new flag value
                     */
                    // @ts-ignore
                    public setLocalDataSource(localDataSource: boolean): void
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
                    // @ts-ignore
                    public isAvailable(): boolean
                    /**
                     * Return the Principal associated with the specified username and
                     * credentials, if there is one; otherwise return <code>null</code>.
                     * @param dbConnection The database connection to be used
                     * @param username Username of the Principal to look up
                     * @param credentials Password or other credentials to use in
                     *   authenticating this username
                     * @return the associated principal, or <code>null</code> if there is none.
                     */
                    // @ts-ignore
                    authenticate(dbConnection: java.sql.Connection, username: java.lang.String | string, credentials: java.lang.String | string): java.security.Principal
                    /**
                     * Close the specified database connection.
                     * @param dbConnection The connection to be closed
                     */
                    // @ts-ignore
                    close(dbConnection: java.sql.Connection): void
                    /**
                     * Open the specified database connection.
                     * @return Connection to the database
                     */
                    // @ts-ignore
                    open(): java.sql.Connection
                    /**
                     * @return the password associated with the given principal's user name.
                     */
                    // @ts-ignore
                    getPassword(username: java.lang.String | string): string
                    /**
                     * Return the password associated with the given principal's user name.
                     * @param dbConnection The database connection to be used
                     * @param username Username for which password should be retrieved
                     * @return the password for the specified user
                     */
                    // @ts-ignore
                    getPassword(dbConnection: java.sql.Connection, username: java.lang.String | string): string
                    /**
                     * Return the Principal associated with the given user name.
                     * @param username the user name
                     * @return the principal object
                     */
                    // @ts-ignore
                    getPrincipal(username: java.lang.String | string): java.security.Principal
                    /**
                     * Return the roles associated with the given user name.
                     * @param username User name for which roles should be retrieved
                     * @return an array list of the role names
                     */
                    // @ts-ignore
                    getRoles(username: java.lang.String | string): java.util.ArrayList<java.lang.String | string>
                    /**
                     * Return the roles associated with the given user name
                     * @param dbConnection The database connection to be used
                     * @param username User name for which roles should be retrieved
                     * @return an array list of the role names
                     */
                    // @ts-ignore
                    getRoles(dbConnection: java.sql.Connection, username: java.lang.String | string): java.util.ArrayList<java.lang.String | string>
                    /**
                     * Prepare for the beginning of active use of the public methods of this
                     * component and implement the requirements of
                     * {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                }
            }
        }
    }
}
