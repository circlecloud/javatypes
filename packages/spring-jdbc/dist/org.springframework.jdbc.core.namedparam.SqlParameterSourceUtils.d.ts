declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace namedparam {
                    /**
                     * Class that provides helper methods for the use of {@link SqlParameterSource},
                     * in particular with {@link NamedParameterJdbcTemplate}.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    abstract class SqlParameterSourceUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Create an array of {@link SqlParameterSource} objects populated with data
                         * from the values passed in (either a {@link Map} or a bean object).
                         * This will define what is included in a batch operation.
                         * @param candidates object array of objects containing the values to be used
                         * @return an array of {#link SqlParameterSource}
                         * @see MapSqlParameterSource
                         * @see BeanPropertySqlParameterSource
                         * @see NamedParameterJdbcTemplate#batchUpdate(String, SqlParameterSource[])
                         */
                        // @ts-ignore
                        public static createBatch(...candidates: java.lang.Object[] | any[]): org.springframework.jdbc.core.namedparam.SqlParameterSource[]
                        /**
                         * Create an array of {@link SqlParameterSource} objects populated with data
                         * from the values passed in (either a {@link Map} or a bean object).
                         * This will define what is included in a batch operation.
                         * @param candidates collection of objects containing the values to be used
                         * @return an array of {#link SqlParameterSource}
                         * @since 5.0.2
                         * @see MapSqlParameterSource
                         * @see BeanPropertySqlParameterSource
                         * @see NamedParameterJdbcTemplate#batchUpdate(String, SqlParameterSource[])
                         */
                        // @ts-ignore
                        public static createBatch(candidates: java.util.Collection<any> | Array<any>): org.springframework.jdbc.core.namedparam.SqlParameterSource[]
                        /**
                         * Create an array of {@link MapSqlParameterSource} objects populated with data from
                         * the values passed in. This will define what is included in a batch operation.
                         * @param valueMaps array of {#link Map} instances containing the values to be used
                         * @return an array of {#link SqlParameterSource}
                         * @see MapSqlParameterSource
                         * @see NamedParameterJdbcTemplate#batchUpdate(String, Map[])
                         */
                        // @ts-ignore
                        public static createBatch(valueMaps: java.util.Map<java.lang.String | string, any>[]): org.springframework.jdbc.core.namedparam.SqlParameterSource[]
                        /**
                         * Create a wrapped value if parameter has type information, plain object if not.
                         * @param source the source of parameter values and type information
                         * @param parameterName the name of the parameter
                         * @return the value object
                         */
                        // @ts-ignore
                        public static getTypedValue(source: org.springframework.jdbc.core.namedparam.SqlParameterSource, parameterName: java.lang.String | string): any
                        /**
                         * Create a Map of case insensitive parameter names together with the original name.
                         * @param parameterSource the source of parameter names
                         * @return the Map that can be used for case insensitive matching of parameter names
                         */
                        // @ts-ignore
                        public static extractCaseInsensitiveParameterNames(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): java.util.Map<java.lang.String | string, java.lang.String | string>
                    }
                }
            }
        }
    }
}
