declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * Implementation of {@link SmartDataSource} that wraps a single JDBC Connection
                 * which is not closed after use. Obviously, this is not multi-threading capable.
                 * <p>Note that at shutdown, someone should close the underlying Connection
                 * via the {@code close()} method. Client code will never call close
                 * on the Connection handle if it is SmartDataSource-aware (e.g. uses
                 * {@code DataSourceUtils.releaseConnection}).
                 * <p>If client code will call {@code close()} in the assumption of a pooled
                 * Connection, like when using persistence tools, set "suppressClose" to "true".
                 * This will return a close-suppressing proxy instead of the physical Connection.
                 * <p>This is primarily intended for testing. For example, it enables easy testing
                 * outside an application server, for code that expects to work on a DataSource.
                 * In contrast to {@link DriverManagerDataSource}, it reuses the same Connection
                 * all the time, avoiding excessive creation of physical Connections.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @see #getConnection()
                 * @see java.sql.Connection#close()
                 * @see DataSourceUtils#releaseConnection
                 */
                // @ts-ignore
                class SingleConnectionDataSource extends org.springframework.jdbc.datasource.DriverManagerDataSource implements org.springframework.jdbc.datasource.SmartDataSource {
                    /**
                     * Constructor for bean-style configuration.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new SingleConnectionDataSource with the given standard
                     * DriverManager parameters.
                     * @param url the JDBC URL to use for accessing the DriverManager
                     * @param username the JDBC username to use for accessing the DriverManager
                     * @param password the JDBC password to use for accessing the DriverManager
                     * @param suppressClose if the returned Connection should be a
                     *  close-suppressing proxy or the physical Connection
                     * @see java.sql.DriverManager#getConnection(String, String, String)
                     */
                    // @ts-ignore
                    constructor(url: java.lang.String | string, username: java.lang.String | string, password: java.lang.String | string, suppressClose: boolean)
                    /**
                     * Create a new SingleConnectionDataSource with the given standard
                     * DriverManager parameters.
                     * @param url the JDBC URL to use for accessing the DriverManager
                     * @param suppressClose if the returned Connection should be a
                     *  close-suppressing proxy or the physical Connection
                     * @see java.sql.DriverManager#getConnection(String, String, String)
                     */
                    // @ts-ignore
                    constructor(url: java.lang.String | string, suppressClose: boolean)
                    /**
                     * Create a new SingleConnectionDataSource with a given Connection.
                     * @param target underlying target Connection
                     * @param suppressClose if the Connection should be wrapped with a Connection that
                     *  suppresses {#code close()} calls (to allow for normal {@code close()}
                     *  usage in applications that expect a pooled Connection but do not know our
                     *  SmartDataSource interface)
                     */
                    // @ts-ignore
                    constructor(target: java.sql.Connection, suppressClose: boolean)
                    /**
                     * Set whether the returned Connection should be a close-suppressing proxy
                     * or the physical Connection.
                     */
                    // @ts-ignore
                    public setSuppressClose(suppressClose: boolean): void
                    /**
                     * Return whether the returned Connection will be a close-suppressing proxy
                     * or the physical Connection.
                     */
                    // @ts-ignore
                    isSuppressClose(): boolean
                    /**
                     * Set whether the returned Connection's "autoCommit" setting should be overridden.
                     */
                    // @ts-ignore
                    public setAutoCommit(autoCommit: boolean): void
                    /**
                     * Return whether the returned Connection's "autoCommit" setting should be overridden.
                     * @return the "autoCommit" value, or {#code null} if none to be applied
                     */
                    // @ts-ignore
                    getAutoCommitValue(): java.lang.Boolean
                    // @ts-ignore
                    public getConnection(): java.sql.Connection
                    /**
                     * Specifying a custom username and password doesn't make sense
                     * with a single Connection. Returns the single Connection if given
                     * the same username and password; throws an SQLException else.
                     */
                    // @ts-ignore
                    public getConnection(username: java.lang.String | string, password: java.lang.String | string): java.sql.Connection
                    /**
                     * This is a single Connection: Do not close it when returning to the "pool".
                     */
                    // @ts-ignore
                    public shouldClose(con: java.sql.Connection): boolean
                    /**
                     * Close the underlying Connection.
                     * The provider of this DataSource needs to care for proper shutdown.
                     * <p>As this bean implements DisposableBean, a bean factory will
                     * automatically invoke this on destruction of its cached singletons.
                     */
                    // @ts-ignore
                    public destroy(): void
                    /**
                     * Initialize the underlying Connection via the DriverManager.
                     */
                    // @ts-ignore
                    public initConnection(): void
                    /**
                     * Reset the underlying shared Connection, to be reinitialized on next access.
                     */
                    // @ts-ignore
                    public resetConnection(): void
                    /**
                     * Prepare the given Connection before it is exposed.
                     * <p>The default implementation applies the auto-commit flag, if necessary.
                     * Can be overridden in subclasses.
                     * @param con the Connection to prepare
                     * @see #setAutoCommit
                     */
                    // @ts-ignore
                    prepareConnection(con: java.sql.Connection): void
                    /**
                     * Wrap the given Connection with a proxy that delegates every method call to it
                     * but suppresses close calls.
                     * @param target the original Connection to wrap
                     * @return the wrapped Connection
                     */
                    // @ts-ignore
                    getCloseSuppressingConnectionProxy(target: java.sql.Connection): java.sql.Connection
                }
            }
        }
    }
}
