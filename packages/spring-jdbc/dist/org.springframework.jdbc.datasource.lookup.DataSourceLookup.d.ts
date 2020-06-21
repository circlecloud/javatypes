declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace lookup {
                    /**
                     * Strategy interface for looking up DataSources by name.
                     * <p>Used, for example, to resolve data source names in JPA
                     * {@code persistence.xml} files.
                     * @author Costin Leau
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see org.springframework.orm.jpa.persistenceunit.DefaultPersistenceUnitManager#setDataSourceLookup
                     */
                    // @ts-ignore
                    interface DataSourceLookup {
                        /**
                         * Retrieve the DataSource identified by the given name.
                         * @param dataSourceName the name of the DataSource
                         * @return the DataSource (never {#code null})
                         * @throws DataSourceLookupFailureException if the lookup failed
                         */
                        // @ts-ignore
                        getDataSource(dataSourceName: java.lang.String | string): javax.sql.DataSource
                    }
                }
            }
        }
    }
}
