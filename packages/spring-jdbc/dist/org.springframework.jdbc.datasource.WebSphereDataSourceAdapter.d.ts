declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * {@link DataSource} implementation that delegates all calls to a WebSphere
                 * target {@link DataSource}, typically obtained from JNDI, applying a current
                 * isolation level and/or current user credentials to every Connection obtained
                 * from it.
                 * <p>Uses IBM-specific API to get a JDBC Connection with a specific isolation
                 * level (and read-only flag) from a WebSphere DataSource
                 * (<a href="https://publib.boulder.ibm.com/infocenter/wasinfo/v5r1//topic/com.ibm.websphere.base.doc/info/aes/ae/rdat_extiapi.html">IBM code example</a>).
                 * Supports the transaction-specific isolation level exposed by
                 * {@link org.springframework.transaction.support.TransactionSynchronizationManager#getCurrentTransactionIsolationLevel()}.
                 * It's also possible to specify a default isolation level, to be applied when the
                 * current Spring-managed transaction does not define a specific isolation level.
                 * <p>Usage example, defining the target DataSource as an inner-bean JNDI lookup
                 * (of course, you can link to any WebSphere DataSource through a bean reference):
                 * <pre class="code">
                 * &lt;bean id="myDataSource" class="org.springframework.jdbc.datasource.WebSphereDataSourceAdapter"&gt;
                 * &lt;property name="targetDataSource"&gt;
                 * &lt;bean class="org.springframework.jndi.JndiObjectFactoryBean"&gt;
                 * &lt;property name="jndiName" value="jdbc/myds"/&gt;
                 * &lt;/bean&gt;
                 * &lt;/property&gt;
                 * &lt;/bean&gt;</pre>
                 * Thanks to Ricardo Olivieri for submitting the original implementation
                 * of this approach!
                 * @author Juergen Hoeller
                 * @author <a href="mailto:lari.hotari#sagire.fi">Lari Hotari</a>
                 * @author <a href="mailto:roliv#us.ibm.com">Ricardo N. Olivieri</a>
                 * @since 2.0.3
                 * @see com.ibm.websphere.rsadapter.JDBCConnectionSpec
                 * @see com.ibm.websphere.rsadapter.WSDataSource#getConnection(com.ibm.websphere.rsadapter.JDBCConnectionSpec)
                 * @see org.springframework.transaction.support.TransactionSynchronizationManager#getCurrentTransactionIsolationLevel()
                 * @see org.springframework.transaction.support.TransactionSynchronizationManager#isCurrentTransactionReadOnly()
                 */
                // @ts-ignore
                class WebSphereDataSourceAdapter extends org.springframework.jdbc.datasource.IsolationLevelDataSourceAdapter {
                    /**
                     * This constructor retrieves the WebSphere JDBC connection spec API,
                     * so we can get obtain specific WebSphere Connections using reflection.
                     */
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Checks that the specified 'targetDataSource' actually is
                     * a WebSphere WSDataSource.
                     */
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    /**
                     * Builds a WebSphere JDBCConnectionSpec object for the current settings
                     * and calls {@code WSDataSource.getConnection(JDBCConnectionSpec)}.
                     * @see #createConnectionSpec
                     * @see com.ibm.websphere.rsadapter.WSDataSource#getConnection(com.ibm.websphere.rsadapter.JDBCConnectionSpec)
                     */
                    // @ts-ignore
                    doGetConnection(username: java.lang.String | string, password: java.lang.String | string): java.sql.Connection
                    /**
                     * Create a WebSphere {@code JDBCConnectionSpec} object for the given characteristics.
                     * <p>The default implementation uses reflection to apply the given settings.
                     * Can be overridden in subclasses to customize the JDBCConnectionSpec object
                     * (<a href="https://publib.boulder.ibm.com/infocenter/wasinfo/v6r0/topic/com.ibm.websphere.javadoc.doc/public_html/api/com/ibm/websphere/rsadapter/JDBCConnectionSpec.html">JDBCConnectionSpec javadoc</a>;
                     * <a href="https://www.ibm.com/developerworks/websphere/library/techarticles/0404_tang/0404_tang.html">IBM developerWorks article</a>).
                     * @param isolationLevel the isolation level to apply (or {#code null} if none)
                     * @param readOnlyFlag the read-only flag to apply (or {#code null} if none)
                     * @param username the username to apply ({#code null} or empty indicates the default)
                     * @param password the password to apply (may be {#code null} or empty)
                     * @throws SQLException if thrown by JDBCConnectionSpec API methods
                     * @see com.ibm.websphere.rsadapter.JDBCConnectionSpec
                     */
                    // @ts-ignore
                    createConnectionSpec(isolationLevel: java.lang.Integer | number, readOnlyFlag: java.lang.Boolean, username: java.lang.String | string, password: java.lang.String | string): any
                }
            }
        }
    }
}
