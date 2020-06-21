declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace namedparam {
                    /**
                     * {@link SqlParameterSource} implementation that holds a given Map of parameters.
                     * <p>This class is intended for passing in a simple Map of parameter values
                     * to the methods of the {@link NamedParameterJdbcTemplate} class.
                     * <p>The {@code addValue} methods on this class will make adding several values
                     * easier. The methods return a reference to the {@link MapSqlParameterSource}
                     * itself, so you can chain several method calls together within a single statement.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see #addValue(String, Object)
                     * @see #addValue(String, Object, int)
                     * @see #registerSqlType
                     * @see NamedParameterJdbcTemplate
                     */
                    // @ts-ignore
                    class MapSqlParameterSource extends org.springframework.jdbc.core.namedparam.AbstractSqlParameterSource {
                        /**
                         * Create an empty MapSqlParameterSource,
                         * with values to be added via {@code addValue}.
                         * @see #addValue(String, Object)
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new MapSqlParameterSource, with one value
                         * comprised of the supplied arguments.
                         * @param paramName the name of the parameter
                         * @param value the value of the parameter
                         * @see #addValue(String, Object)
                         */
                        // @ts-ignore
                        constructor(paramName: java.lang.String | string, value: java.lang.Object | any)
                        /**
                         * Create a new MapSqlParameterSource based on a Map.
                         * @param values a Map holding existing parameter values (can be {#code null})
                         */
                        // @ts-ignore
                        constructor(values: java.util.Map<java.lang.String | string, any>)
                        /**
                         * Add a parameter to this parameter source.
                         * @param paramName the name of the parameter
                         * @param value the value of the parameter
                         * @return a reference to this parameter source,
                         *  so it's possible to chain several calls together
                         */
                        // @ts-ignore
                        public addValue(paramName: java.lang.String | string, value: java.lang.Object | any): org.springframework.jdbc.core.namedparam.MapSqlParameterSource
                        /**
                         * Add a parameter to this parameter source.
                         * @param paramName the name of the parameter
                         * @param value the value of the parameter
                         * @param sqlType the SQL type of the parameter
                         * @return a reference to this parameter source,
                         *  so it's possible to chain several calls together
                         */
                        // @ts-ignore
                        public addValue(paramName: java.lang.String | string, value: java.lang.Object | any, sqlType: number /*int*/): org.springframework.jdbc.core.namedparam.MapSqlParameterSource
                        /**
                         * Add a parameter to this parameter source.
                         * @param paramName the name of the parameter
                         * @param value the value of the parameter
                         * @param sqlType the SQL type of the parameter
                         * @param typeName the type name of the parameter
                         * @return a reference to this parameter source,
                         *  so it's possible to chain several calls together
                         */
                        // @ts-ignore
                        public addValue(paramName: java.lang.String | string, value: java.lang.Object | any, sqlType: number /*int*/, typeName: java.lang.String | string): org.springframework.jdbc.core.namedparam.MapSqlParameterSource
                        /**
                         * Add a Map of parameters to this parameter source.
                         * @param values a Map holding existing parameter values (can be {#code null})
                         * @return a reference to this parameter source,
                         *  so it's possible to chain several calls together
                         */
                        // @ts-ignore
                        public addValues(values: java.util.Map<java.lang.String | string, any>): org.springframework.jdbc.core.namedparam.MapSqlParameterSource
                        /**
                         * Expose the current parameter values as read-only Map.
                         */
                        // @ts-ignore
                        public getValues(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public hasValue(paramName: java.lang.String | string): boolean
                        // @ts-ignore
                        public getValue(paramName: java.lang.String | string): any
                        // @ts-ignore
                        public getParameterNames(): string[]
                    }
                }
            }
        }
    }
}
