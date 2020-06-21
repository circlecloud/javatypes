declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace lookup {
                    /**
                     * DataSource that routes to one of various target DataSources based on the
                     * current transaction isolation level. The target DataSources need to be
                     * configured with the isolation level name as key, as defined on the
                     * {@link org.springframework.transaction.TransactionDefinition TransactionDefinition interface}.
                     * <p>This is particularly useful in combination with JTA transaction management
                     * (typically through Spring's {@link org.springframework.transaction.jta.JtaTransactionManager}).
                     * Standard JTA does not support transaction-specific isolation levels. Some JTA
                     * providers support isolation levels as a vendor-specific extension (e.g. WebLogic),
                     * which is the preferred way of addressing this. As alternative (e.g. on WebSphere),
                     * the target database can be represented through multiple JNDI DataSources, each
                     * configured with a different isolation level (for the entire DataSource).
                     * The present DataSource router allows to transparently switch to the
                     * appropriate DataSource based on the current transaction's isolation level.
                     * <p>The configuration can for example look like this, assuming that the target
                     * DataSources are defined as individual Spring beans with names
                     * "myRepeatableReadDataSource", "mySerializableDataSource" and "myDefaultDataSource":
                     * <pre class="code">
                     * &lt;bean id="dataSourceRouter" class="org.springframework.jdbc.datasource.lookup.IsolationLevelDataSourceRouter"&gt;
                     * &lt;property name="targetDataSources"&gt;
                     * &lt;map&gt;
                     * &lt;entry key="ISOLATION_REPEATABLE_READ" value-ref="myRepeatableReadDataSource"/&gt;
                     * &lt;entry key="ISOLATION_SERIALIZABLE" value-ref="mySerializableDataSource"/&gt;
                     * &lt;/map&gt;
                     * &lt;/property&gt;
                     * &lt;property name="defaultTargetDataSource" ref="myDefaultDataSource"/&gt;
                     * &lt;/bean&gt;</pre>
                     * Alternatively, the keyed values can also be data source names, to be resolved
                     * through a {@link #setDataSourceLookup DataSourceLookup}: by default, JNDI
                     * names for a standard JNDI lookup. This allows for a single concise definition
                     * without the need for separate DataSource bean definitions.
                     * <pre class="code">
                     * &lt;bean id="dataSourceRouter" class="org.springframework.jdbc.datasource.lookup.IsolationLevelDataSourceRouter"&gt;
                     * &lt;property name="targetDataSources"&gt;
                     * &lt;map&gt;
                     * &lt;entry key="ISOLATION_REPEATABLE_READ" value="java:comp/env/jdbc/myrrds"/&gt;
                     * &lt;entry key="ISOLATION_SERIALIZABLE" value="java:comp/env/jdbc/myserds"/&gt;
                     * &lt;/map&gt;
                     * &lt;/property&gt;
                     * &lt;property name="defaultTargetDataSource" value="java:comp/env/jdbc/mydefds"/&gt;
                     * &lt;/bean&gt;</pre>
                     * Note: If you are using this router in combination with Spring's
                     * {@link org.springframework.transaction.jta.JtaTransactionManager},
                     * don't forget to switch the "allowCustomIsolationLevels" flag to "true".
                     * (By default, JtaTransactionManager will only accept a default isolation level
                     * because of the lack of isolation level support in standard JTA itself.)
                     * <pre class="code">
                     * &lt;bean id="transactionManager" class="org.springframework.transaction.jta.JtaTransactionManager"&gt;
                     * &lt;property name="allowCustomIsolationLevels" value="true"/&gt;
                     * &lt;/bean&gt;</pre>
                     * @author Juergen Hoeller
                     * @since 2.0.1
                     * @see #setTargetDataSources
                     * @see #setDefaultTargetDataSource
                     * @see org.springframework.transaction.TransactionDefinition#ISOLATION_READ_UNCOMMITTED
                     * @see org.springframework.transaction.TransactionDefinition#ISOLATION_READ_COMMITTED
                     * @see org.springframework.transaction.TransactionDefinition#ISOLATION_REPEATABLE_READ
                     * @see org.springframework.transaction.TransactionDefinition#ISOLATION_SERIALIZABLE
                     * @see org.springframework.transaction.jta.JtaTransactionManager
                     */
                    // @ts-ignore
                    class IsolationLevelDataSourceRouter extends org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource {
                        // @ts-ignore
                        constructor()
                        /**
                         * Supports Integer values for the isolation level constants
                         * as well as isolation level names as defined on the
                         * {@link org.springframework.transaction.TransactionDefinition TransactionDefinition interface}.
                         */
                        // @ts-ignore
                        resolveSpecifiedLookupKey(lookupKey: java.lang.Object | any): any
                        // @ts-ignore
                        determineCurrentLookupKey(): any
                    }
                }
            }
        }
    }
}
