declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * An adapter for a target JDBC {@link javax.sql.DataSource}, applying the specified
                 * user credentials to every standard {@code getConnection()} call, implicitly
                 * invoking {@code getConnection(username, password)} on the target.
                 * All other methods simply delegate to the corresponding methods of the
                 * target DataSource.
                 * <p>Can be used to proxy a target JNDI DataSource that does not have user
                 * credentials configured. Client code can work with this DataSource as usual,
                 * using the standard {@code getConnection()} call.
                 * <p>In the following example, client code can simply transparently work with
                 * the preconfigured "myDataSource", implicitly accessing "myTargetDataSource"
                 * with the specified user credentials.
                 * <pre class="code">
                 * &lt;bean id="myTargetDataSource" class="org.springframework.jndi.JndiObjectFactoryBean"&gt;
                 * &lt;property name="jndiName" value="java:comp/env/jdbc/myds"/&gt;
                 * &lt;/bean&gt;
                 * &lt;bean id="myDataSource" class="org.springframework.jdbc.datasource.UserCredentialsDataSourceAdapter"&gt;
                 * &lt;property name="targetDataSource" ref="myTargetDataSource"/&gt;
                 * &lt;property name="username" value="myusername"/&gt;
                 * &lt;property name="password" value="mypassword"/&gt;
                 * &lt;/bean></pre>
                 * <p>If the "username" is empty, this proxy will simply delegate to the
                 * standard {@code getConnection()} method of the target DataSource.
                 * This can be used to keep a UserCredentialsDataSourceAdapter bean definition
                 * just for the <i>option</i> of implicitly passing in user credentials if
                 * the particular target DataSource requires it.
                 * @author Juergen Hoeller
                 * @since 1.0.2
                 * @see #getConnection
                 */
                // @ts-ignore
                class UserCredentialsDataSourceAdapter extends org.springframework.jdbc.datasource.DelegatingDataSource {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the default username that this adapter should use for retrieving Connections.
                     * <p>Default is no specific user. Note that an explicitly specified username
                     * will always override any username/password specified at the DataSource level.
                     * @see #setPassword
                     * @see #setCredentialsForCurrentThread(String, String)
                     * @see #getConnection(String, String)
                     */
                    // @ts-ignore
                    public setUsername(username: java.lang.String | string): void
                    /**
                     * Set the default user's password that this adapter should use for retrieving Connections.
                     * <p>Default is no specific password. Note that an explicitly specified username
                     * will always override any username/password specified at the DataSource level.
                     * @see #setUsername
                     * @see #setCredentialsForCurrentThread(String, String)
                     * @see #getConnection(String, String)
                     */
                    // @ts-ignore
                    public setPassword(password: java.lang.String | string): void
                    /**
                     * Specify a database catalog to be applied to each retrieved Connection.
                     * @since 4.3.2
                     * @see Connection#setCatalog
                     */
                    // @ts-ignore
                    public setCatalog(catalog: java.lang.String | string): void
                    /**
                     * Specify a database schema to be applied to each retrieved Connection.
                     * @since 4.3.2
                     * @see Connection#setSchema
                     */
                    // @ts-ignore
                    public setSchema(schema: java.lang.String | string): void
                    /**
                     * Set user credententials for this proxy and the current thread.
                     * The given username and password will be applied to all subsequent
                     * {@code getConnection()} calls on this DataSource proxy.
                     * <p>This will override any statically specified user credentials,
                     * that is, values of the "username" and "password" bean properties.
                     * @param username the username to apply
                     * @param password the password to apply
                     * @see #removeCredentialsFromCurrentThread
                     */
                    // @ts-ignore
                    public setCredentialsForCurrentThread(username: java.lang.String | string, password: java.lang.String | string): void
                    /**
                     * Remove any user credentials for this proxy from the current thread.
                     * Statically specified user credentials apply again afterwards.
                     * @see #setCredentialsForCurrentThread
                     */
                    // @ts-ignore
                    public removeCredentialsFromCurrentThread(): void
                    /**
                     * Determine whether there are currently thread-bound credentials,
                     * using them if available, falling back to the statically specified
                     * username and password (i.e. values of the bean properties) otherwise.
                     * <p>Delegates to {@link #doGetConnection(String, String)} with the
                     * determined credentials as parameters.
                     * @see #doGetConnection
                     */
                    // @ts-ignore
                    public getConnection(): java.sql.Connection
                    /**
                     * Simply delegates to {@link #doGetConnection(String, String)},
                     * keeping the given user credentials as-is.
                     */
                    // @ts-ignore
                    public getConnection(username: java.lang.String | string, password: java.lang.String | string): java.sql.Connection
                    /**
                     * This implementation delegates to the {@code getConnection(username, password)}
                     * method of the target DataSource, passing in the specified user credentials.
                     * If the specified username is empty, it will simply delegate to the standard
                     * {@code getConnection()} method of the target DataSource.
                     * @param username the username to use
                     * @param password the password to use
                     * @return the Connection
                     * @see javax.sql.DataSource#getConnection(String, String)
                     * @see javax.sql.DataSource#getConnection()
                     */
                    // @ts-ignore
                    doGetConnection(username: java.lang.String | string, password: java.lang.String | string): java.sql.Connection
                }
            }
        }
    }
}
