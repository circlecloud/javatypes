declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace lookup {
                    /**
                     * JNDI-based {@link DataSourceLookup} implementation.
                     * <p>For specific JNDI configuration, it is recommended to configure
                     * the "jndiEnvironment"/"jndiTemplate" properties.
                     * @author Costin Leau
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see #setJndiEnvironment
                     * @see #setJndiTemplate
                     */
                    // @ts-ignore
                    class JndiDataSourceLookup extends JndiLocatorSupport implements org.springframework.jdbc.datasource.lookup.DataSourceLookup {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getDataSource(dataSourceName: java.lang.String | string): javax.sql.DataSource
                    }
                }
            }
        }
    }
}
