declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * Abstract base class for JDBC {@link javax.sql.DataSource} implementations
                 * that operate on a JDBC {@link java.sql.Driver}.
                 * @author Juergen Hoeller
                 * @since 2.5.5
                 * @see SimpleDriverDataSource
                 * @see DriverManagerDataSource
                 */
                // @ts-ignore
                abstract class AbstractDriverBasedDataSource extends org.springframework.jdbc.datasource.AbstractDataSource {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the JDBC URL to use for connecting through the Driver.
                     * @see java.sql.Driver#connect(String, java.util.Properties)
                     */
                    // @ts-ignore
                    public setUrl(url: java.lang.String | string): void
                    /**
                     * Return the JDBC URL to use for connecting through the Driver.
                     */
                    // @ts-ignore
                    public getUrl(): string
                    /**
                     * Set the JDBC username to use for connecting through the Driver.
                     * @see java.sql.Driver#connect(String, java.util.Properties)
                     */
                    // @ts-ignore
                    public setUsername(username: java.lang.String | string): void
                    /**
                     * Return the JDBC username to use for connecting through the Driver.
                     */
                    // @ts-ignore
                    public getUsername(): string
                    /**
                     * Set the JDBC password to use for connecting through the Driver.
                     * @see java.sql.Driver#connect(String, java.util.Properties)
                     */
                    // @ts-ignore
                    public setPassword(password: java.lang.String | string): void
                    /**
                     * Return the JDBC password to use for connecting through the Driver.
                     */
                    // @ts-ignore
                    public getPassword(): string
                    /**
                     * Specify a database catalog to be applied to each Connection.
                     * @since 4.3.2
                     * @see Connection#setCatalog
                     */
                    // @ts-ignore
                    public setCatalog(catalog: java.lang.String | string): void
                    /**
                     * Return the database catalog to be applied to each Connection, if any.
                     * @since 4.3.2
                     */
                    // @ts-ignore
                    public getCatalog(): string
                    /**
                     * Specify a database schema to be applied to each Connection.
                     * @since 4.3.2
                     * @see Connection#setSchema
                     */
                    // @ts-ignore
                    public setSchema(schema: java.lang.String | string): void
                    /**
                     * Return the database schema to be applied to each Connection, if any.
                     * @since 4.3.2
                     */
                    // @ts-ignore
                    public getSchema(): string
                    /**
                     * Specify arbitrary connection properties as key/value pairs,
                     * to be passed to the Driver.
                     * <p>Can also contain "user" and "password" properties. However,
                     * any "username" and "password" bean properties specified on this
                     * DataSource will override the corresponding connection properties.
                     * @see java.sql.Driver#connect(String, java.util.Properties)
                     */
                    // @ts-ignore
                    public setConnectionProperties(connectionProperties: java.util.Properties): void
                    /**
                     * Return the connection properties to be passed to the Driver, if any.
                     */
                    // @ts-ignore
                    public getConnectionProperties(): java.util.Properties
                    /**
                     * This implementation delegates to {@code getConnectionFromDriver},
                     * using the default username and password of this DataSource.
                     * @see #getConnectionFromDriver(String, String)
                     * @see #setUsername
                     * @see #setPassword
                     */
                    // @ts-ignore
                    public getConnection(): java.sql.Connection
                    /**
                     * This implementation delegates to {@code getConnectionFromDriver},
                     * using the given username and password.
                     * @see #getConnectionFromDriver(String, String)
                     */
                    // @ts-ignore
                    public getConnection(username: java.lang.String | string, password: java.lang.String | string): java.sql.Connection
                    /**
                     * Build properties for the Driver, including the given username and password (if any),
                     * and obtain a corresponding Connection.
                     * @param username the name of the user
                     * @param password the password to use
                     * @return the obtained Connection
                     * @throws SQLException in case of failure
                     * @see java.sql.Driver#connect(String, java.util.Properties)
                     */
                    // @ts-ignore
                    getConnectionFromDriver(username: java.lang.String | string, password: java.lang.String | string): java.sql.Connection
                    /**
                     * Obtain a Connection using the given properties.
                     * <p>Template method to be implemented by subclasses.
                     * @param props the merged connection properties
                     * @return the obtained Connection
                     * @throws SQLException in case of failure
                     */
                    // @ts-ignore
                    abstract getConnectionFromDriver(props: java.util.Properties): java.sql.Connection
                }
            }
        }
    }
}
