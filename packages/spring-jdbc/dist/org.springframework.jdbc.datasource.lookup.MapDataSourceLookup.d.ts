declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace lookup {
                    /**
                     * Simple {@link DataSourceLookup} implementation that relies on a map for doing lookups.
                     * <p>Useful for testing environments or applications that need to match arbitrary
                     * {@link String} names to target {@link DataSource} objects.
                     * @author Costin Leau
                     * @author Juergen Hoeller
                     * @author Rick Evans
                     * @since 2.0
                     */
                    // @ts-ignore
                    class MapDataSourceLookup extends java.lang.Object implements org.springframework.jdbc.datasource.lookup.DataSourceLookup {
                        /**
                         * Create a new instance of the {@link MapDataSourceLookup} class.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new instance of the {@link MapDataSourceLookup} class.
                         * @param dataSources the {#link Map} of {@link DataSource DataSources}; the keys
                         *  are {@link String Strings}, the values are actual {@link DataSource} instances.
                         */
                        // @ts-ignore
                        constructor(dataSources: java.util.Map<java.lang.String | string, javax.sql.DataSource>)
                        /**
                         * Create a new instance of the {@link MapDataSourceLookup} class.
                         * @param dataSourceName the name under which the supplied {#link DataSource} is to be added
                         * @param dataSource the {#link DataSource} to be added
                         */
                        // @ts-ignore
                        constructor(dataSourceName: java.lang.String | string, dataSource: javax.sql.DataSource)
                        /**
                         * Set the {@link Map} of {@link DataSource DataSources}; the keys
                         * are {@link String Strings}, the values are actual {@link DataSource} instances.
                         * <p>If the supplied {@link Map} is {@code null}, then this method
                         * call effectively has no effect.
                         * @param dataSources said {#link Map} of {@link DataSource DataSources}
                         */
                        // @ts-ignore
                        public setDataSources(dataSources: java.util.Map<java.lang.String | string, javax.sql.DataSource>): void
                        /**
                         * Get the {@link Map} of {@link DataSource DataSources} maintained by this object.
                         * <p>The returned {@link Map} is {@link Collections#unmodifiableMap(java.util.Map) unmodifiable}.
                         * @return said {#link Map} of {@link DataSource DataSources} (never {@code null})
                         */
                        // @ts-ignore
                        public getDataSources(): java.util.Map<java.lang.String | string, javax.sql.DataSource>
                        /**
                         * Add the supplied {@link DataSource} to the map of {@link DataSource DataSources}
                         * maintained by this object.
                         * @param dataSourceName the name under which the supplied {#link DataSource} is to be added
                         * @param dataSource the {#link DataSource} to be so added
                         */
                        // @ts-ignore
                        public addDataSource(dataSourceName: java.lang.String | string, dataSource: javax.sql.DataSource): void
                        // @ts-ignore
                        public getDataSource(dataSourceName: java.lang.String | string): javax.sql.DataSource
                    }
                }
            }
        }
    }
}
