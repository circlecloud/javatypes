declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace lookup {
                    /**
                     * Abstract {@link javax.sql.DataSource} implementation that routes {@link #getConnection()}
                     * calls to one of various target DataSources based on a lookup key. The latter is usually
                     * (but not necessarily) determined through some thread-bound transaction context.
                     * @author Juergen Hoeller
                     * @since 2.0.1
                     * @see #setTargetDataSources
                     * @see #setDefaultTargetDataSource
                     * @see #determineCurrentLookupKey()
                     */
                    // @ts-ignore
                    abstract class AbstractRoutingDataSource extends org.springframework.jdbc.datasource.AbstractDataSource {
                        // @ts-ignore
                        constructor()
                        /**
                         * Specify the map of target DataSources, with the lookup key as key.
                         * The mapped value can either be a corresponding {@link javax.sql.DataSource}
                         * instance or a data source name String (to be resolved via a
                         * {@link #setDataSourceLookup DataSourceLookup}).
                         * <p>The key can be of arbitrary type; this class implements the
                         * generic lookup process only. The concrete key representation will
                         * be handled by {@link #resolveSpecifiedLookupKey(Object)} and
                         * {@link #determineCurrentLookupKey()}.
                         */
                        // @ts-ignore
                        public setTargetDataSources(targetDataSources: java.util.Map<java.lang.Object | any, java.lang.Object | any>): void
                        /**
                         * Specify the default target DataSource, if any.
                         * <p>The mapped value can either be a corresponding {@link javax.sql.DataSource}
                         * instance or a data source name String (to be resolved via a
                         * {@link #setDataSourceLookup DataSourceLookup}).
                         * <p>This DataSource will be used as target if none of the keyed
                         * {@link #setTargetDataSources targetDataSources} match the
                         * {@link #determineCurrentLookupKey()} current lookup key.
                         */
                        // @ts-ignore
                        public setDefaultTargetDataSource(defaultTargetDataSource: java.lang.Object | any): void
                        /**
                         * Specify whether to apply a lenient fallback to the default DataSource
                         * if no specific DataSource could be found for the current lookup key.
                         * <p>Default is "true", accepting lookup keys without a corresponding entry
                         * in the target DataSource map - simply falling back to the default DataSource
                         * in that case.
                         * <p>Switch this flag to "false" if you would prefer the fallback to only apply
                         * if the lookup key was {@code null}. Lookup keys without a DataSource
                         * entry will then lead to an IllegalStateException.
                         * @see #setTargetDataSources
                         * @see #setDefaultTargetDataSource
                         * @see #determineCurrentLookupKey()
                         */
                        // @ts-ignore
                        public setLenientFallback(lenientFallback: boolean): void
                        /**
                         * Set the DataSourceLookup implementation to use for resolving data source
                         * name Strings in the {@link #setTargetDataSources targetDataSources} map.
                         * <p>Default is a {@link JndiDataSourceLookup}, allowing the JNDI names
                         * of application server DataSources to be specified directly.
                         */
                        // @ts-ignore
                        public setDataSourceLookup(dataSourceLookup: org.springframework.jdbc.datasource.lookup.DataSourceLookup): void
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        /**
                         * Resolve the given lookup key object, as specified in the
                         * {@link #setTargetDataSources targetDataSources} map, into
                         * the actual lookup key to be used for matching with the
                         * {@link #determineCurrentLookupKey() current lookup key}.
                         * <p>The default implementation simply returns the given key as-is.
                         * @param lookupKey the lookup key object as specified by the user
                         * @return the lookup key as needed for matching
                         */
                        // @ts-ignore
                        resolveSpecifiedLookupKey(lookupKey: java.lang.Object | any): any
                        /**
                         * Resolve the specified data source object into a DataSource instance.
                         * <p>The default implementation handles DataSource instances and data source
                         * names (to be resolved via a {@link #setDataSourceLookup DataSourceLookup}).
                         * @param dataSource the data source value object as specified in the
                         *  {#link #setTargetDataSources targetDataSources} map
                         * @return the resolved DataSource (never {#code null})
                         * @throws IllegalArgumentException in case of an unsupported value type
                         */
                        // @ts-ignore
                        resolveSpecifiedDataSource(dataSource: java.lang.Object | any): javax.sql.DataSource
                        // @ts-ignore
                        public getConnection(): java.sql.Connection
                        // @ts-ignore
                        public getConnection(username: java.lang.String | string, password: java.lang.String | string): java.sql.Connection
                        // @ts-ignore
                        public unwrap<T>(iface: java.lang.Class<T>): T
                        // @ts-ignore
                        public isWrapperFor(iface: java.lang.Class<any>): boolean
                        /**
                         * Retrieve the current target DataSource. Determines the
                         * {@link #determineCurrentLookupKey() current lookup key}, performs
                         * a lookup in the {@link #setTargetDataSources targetDataSources} map,
                         * falls back to the specified
                         * {@link #setDefaultTargetDataSource default target DataSource} if necessary.
                         * @see #determineCurrentLookupKey()
                         */
                        // @ts-ignore
                        determineTargetDataSource(): javax.sql.DataSource
                        /**
                         * Determine the current lookup key. This will typically be
                         * implemented to check a thread-bound transaction context.
                         * <p>Allows for arbitrary keys. The returned key needs
                         * to match the stored lookup key type, as resolved by the
                         * {@link #resolveSpecifiedLookupKey} method.
                         */
                        // @ts-ignore
                        abstract determineCurrentLookupKey(): any
                    }
                }
            }
        }
    }
}
