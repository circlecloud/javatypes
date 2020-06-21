declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * Simple implementation of the standard JDBC {@link javax.sql.DataSource} interface,
                 * configuring a plain old JDBC {@link java.sql.Driver} via bean properties, and
                 * returning a new {@link java.sql.Connection} from every {@code getConnection} call.
                 * <p><b>NOTE: This class is not an actual connection pool; it does not actually
                 * pool Connections.</b> It just serves as simple replacement for a full-blown
                 * connection pool, implementing the same standard interface, but creating new
                 * Connections on every call.
                 * <p>In a Java EE container, it is recommended to use a JNDI DataSource provided by
                 * the container. Such a DataSource can be exposed as a DataSource bean in a Spring
                 * ApplicationContext via {@link org.springframework.jndi.JndiObjectFactoryBean},
                 * for seamless switching to and from a local DataSource bean like this class.
                 * <p>This {@code SimpleDriverDataSource} class was originally designed alongside
                 * <a href="https://commons.apache.org/proper/commons-dbcp">Apache Commons DBCP</a>
                 * and <a href="https://sourceforge.net/projects/c3p0">C3P0</a>, featuring bean-style
                 * {@code BasicDataSource}/{@code ComboPooledDataSource} classes with configuration
                 * properties for local resource setups. For a modern JDBC connection pool, consider
                 * <a href="https://github.com/brettwooldridge/HikariCP">HikariCP</a> instead,
                 * exposing a corresponding {@code HikariDataSource} instance to the application.
                 * @author Juergen Hoeller
                 * @since 2.5.5
                 * @see DriverManagerDataSource
                 */
                // @ts-ignore
                class SimpleDriverDataSource extends org.springframework.jdbc.datasource.AbstractDriverBasedDataSource {
                    /**
                     * Constructor for bean-style configuration.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new DriverManagerDataSource with the given standard Driver parameters.
                     * @param driver the JDBC Driver object
                     * @param url the JDBC URL to use for accessing the DriverManager
                     * @see java.sql.Driver#connect(String, java.util.Properties)
                     */
                    // @ts-ignore
                    constructor(driver: java.sql.Driver, url: java.lang.String | string)
                    /**
                     * Create a new DriverManagerDataSource with the given standard Driver parameters.
                     * @param driver the JDBC Driver object
                     * @param url the JDBC URL to use for accessing the DriverManager
                     * @param username the JDBC username to use for accessing the DriverManager
                     * @param password the JDBC password to use for accessing the DriverManager
                     * @see java.sql.Driver#connect(String, java.util.Properties)
                     */
                    // @ts-ignore
                    constructor(driver: java.sql.Driver, url: java.lang.String | string, username: java.lang.String | string, password: java.lang.String | string)
                    /**
                     * Create a new DriverManagerDataSource with the given standard Driver parameters.
                     * @param driver the JDBC Driver object
                     * @param url the JDBC URL to use for accessing the DriverManager
                     * @param conProps the JDBC connection properties
                     * @see java.sql.Driver#connect(String, java.util.Properties)
                     */
                    // @ts-ignore
                    constructor(driver: java.sql.Driver, url: java.lang.String | string, conProps: java.util.Properties)
                    /**
                     * Specify the JDBC Driver implementation class to use.
                     * <p>An instance of this Driver class will be created and held
                     * within the SimpleDriverDataSource.
                     * @see #setDriver
                     */
                    // @ts-ignore
                    public setDriverClass(driverClass: java.lang.Class<any>): void
                    /**
                     * Specify the JDBC Driver instance to use.
                     * <p>This allows for passing in a shared, possibly pre-configured
                     * Driver instance.
                     * @see #setDriverClass
                     */
                    // @ts-ignore
                    public setDriver(driver: java.sql.Driver): void
                    /**
                     * Return the JDBC Driver instance to use.
                     */
                    // @ts-ignore
                    public getDriver(): java.sql.Driver
                    // @ts-ignore
                    getConnectionFromDriver(props: java.util.Properties): java.sql.Connection
                }
            }
        }
    }
}
