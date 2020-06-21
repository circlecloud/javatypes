declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * Simple implementation of the standard JDBC {@link javax.sql.DataSource} interface,
                 * configuring the plain old JDBC {@link java.sql.DriverManager} via bean properties, and
                 * returning a new {@link java.sql.Connection} from every {@code getConnection} call.
                 * <p><b>NOTE: This class is not an actual connection pool; it does not actually
                 * pool Connections.</b> It just serves as simple replacement for a full-blown
                 * connection pool, implementing the same standard interface, but creating new
                 * Connections on every call.
                 * <p>Useful for test or standalone environments outside of a Java EE container, either
                 * as a DataSource bean in a corresponding ApplicationContext or in conjunction with
                 * a simple JNDI environment. Pool-assuming {@code Connection.close()} calls will
                 * simply close the Connection, so any DataSource-aware persistence code should work.
                 * <p><b>NOTE: Within special class loading environments such as OSGi, this class
                 * is effectively superseded by {@link SimpleDriverDataSource} due to general class
                 * loading issues with the JDBC DriverManager that be resolved through direct Driver
                 * usage (which is exactly what SimpleDriverDataSource does).</b>
                 * <p>In a Java EE container, it is recommended to use a JNDI DataSource provided by
                 * the container. Such a DataSource can be exposed as a DataSource bean in a Spring
                 * ApplicationContext via {@link org.springframework.jndi.JndiObjectFactoryBean},
                 * for seamless switching to and from a local DataSource bean like this class.
                 * For tests, you can then either set up a mock JNDI environment through Spring's
                 * {@link org.springframework.mock.jndi.SimpleNamingContextBuilder}, or switch the
                 * bean definition to a local DataSource (which is simpler and thus recommended).
                 * <p>This {@code DriverManagerDataSource} class was originally designed alongside
                 * <a href="https://commons.apache.org/proper/commons-dbcp">Apache Commons DBCP</a>
                 * and <a href="https://sourceforge.net/projects/c3p0">C3P0</a>, featuring bean-style
                 * {@code BasicDataSource}/{@code ComboPooledDataSource} classes with configuration
                 * properties for local resource setups. For a modern JDBC connection pool, consider
                 * <a href="https://github.com/brettwooldridge/HikariCP">HikariCP</a> instead,
                 * exposing a corresponding {@code HikariDataSource} instance to the application.
                 * @author Juergen Hoeller
                 * @since 14.03.2003
                 * @see SimpleDriverDataSource
                 */
                // @ts-ignore
                class DriverManagerDataSource extends org.springframework.jdbc.datasource.AbstractDriverBasedDataSource {
                    /**
                     * Constructor for bean-style configuration.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new DriverManagerDataSource with the given JDBC URL,
                     * not specifying a username or password for JDBC access.
                     * @param url the JDBC URL to use for accessing the DriverManager
                     * @see java.sql.DriverManager#getConnection(String)
                     */
                    // @ts-ignore
                    constructor(url: java.lang.String | string)
                    /**
                     * Create a new DriverManagerDataSource with the given standard
                     * DriverManager parameters.
                     * @param url the JDBC URL to use for accessing the DriverManager
                     * @param username the JDBC username to use for accessing the DriverManager
                     * @param password the JDBC password to use for accessing the DriverManager
                     * @see java.sql.DriverManager#getConnection(String, String, String)
                     */
                    // @ts-ignore
                    constructor(url: java.lang.String | string, username: java.lang.String | string, password: java.lang.String | string)
                    /**
                     * Create a new DriverManagerDataSource with the given JDBC URL,
                     * not specifying a username or password for JDBC access.
                     * @param url the JDBC URL to use for accessing the DriverManager
                     * @param conProps the JDBC connection properties
                     * @see java.sql.DriverManager#getConnection(String)
                     */
                    // @ts-ignore
                    constructor(url: java.lang.String | string, conProps: java.util.Properties)
                    /**
                     * Set the JDBC driver class name. This driver will get initialized
                     * on startup, registering itself with the JDK's DriverManager.
                     * <p><b>NOTE: DriverManagerDataSource is primarily intended for accessing
                     * <i>pre-registered</i> JDBC drivers.</b> If you need to register a new driver,
                     * consider using {@link SimpleDriverDataSource} instead. Alternatively, consider
                     * initializing the JDBC driver yourself before instantiating this DataSource.
                     * The "driverClassName" property is mainly preserved for backwards compatibility,
                     * as well as for migrating between Commons DBCP and this DataSource.
                     * @see java.sql.DriverManager#registerDriver(java.sql.Driver)
                     * @see SimpleDriverDataSource
                     */
                    // @ts-ignore
                    public setDriverClassName(driverClassName: java.lang.String | string): void
                    // @ts-ignore
                    getConnectionFromDriver(props: java.util.Properties): java.sql.Connection
                    /**
                     * Getting a Connection using the nasty static from DriverManager is extracted
                     * into a protected method to allow for easy unit testing.
                     * @see java.sql.DriverManager#getConnection(String, java.util.Properties)
                     */
                    // @ts-ignore
                    getConnectionFromDriverManager(url: java.lang.String | string, props: java.util.Properties): java.sql.Connection
                }
            }
        }
    }
}
