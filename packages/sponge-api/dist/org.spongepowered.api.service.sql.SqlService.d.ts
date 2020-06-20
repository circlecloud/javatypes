declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace sql {
                    /**
                     * This service provides the basics for an abstraction over SQL connections.
                     * <p>Implementations of this service are expected to be thread-safe.</p>
                     */
                    // @ts-ignore
                    interface SqlService {
                        /**
                         * Returns a data source for the provided JDBC connection string or
                         * an alias.
                         * <p>A jdbc connection url is expected to be of the form:
                         * jdbc:&lt;engine&gt;://[&lt;username&gt;[:&lt;password&gt;]@]&lt;host
                         * &gt;/&lt;database&gt; or an alias (available aliases are known only by
                         * the service provider)</p>
                         * @param jdbcConnection The jdbc url or connection alias
                         * @return A data source providing connections to the given URL.
                         * @throws SQLException if a connection to the given database could not
                         *      be established
                         */
                        // @ts-ignore
                        getDataSource(jdbcConnection: string): javax.sql.DataSource
                        /**
                         * Returns a data source for the provided JDBC connection string or an
                         * alias.
                         * <p>A jdbc connection url is expected to be of the form:
                         * jdbc:&lt;engine&gt;://[&lt;username&gt;[:&lt;password&gt;]@]
                         * &lt;host&gt;/&lt;database&gt;
                         * or an alias (available aliases are known only by the service
                         * provider)</p>
                         * @param plugin The plugin to lookup databases relative to (primarily
                         *      applying to file-backed databases)
                         * @param jdbcConnection The jdbc url or connection alias
                         * @return A data source providing connections to the given URL.
                         * @throws SQLException if a connection to the given database could not
                         *      be established
                         */
                        // @ts-ignore
                        getDataSource(plugin: any, jdbcConnection: string): javax.sql.DataSource
                        /**
                         * Returns a possible connection URL for a given alias.
                         * @param alias The alias to check
                         * @return The connection url as a String if it exists,
                         *           or {#link Optional#empty()}
                         */
                        // @ts-ignore
                        getConnectionUrlFromAlias(alias: string): java.util.Optional<java.lang.String>
                    }
                }
            }
        }
    }
}
