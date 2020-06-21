declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace namedparam {
                    /**
                     * Interface that defines common functionality for objects that can
                     * offer parameter values for named SQL parameters, serving as argument
                     * for {@link NamedParameterJdbcTemplate} operations.
                     * <p>This interface allows for the specification of SQL type in addition
                     * to parameter values. All parameter values and types are identified by
                     * specifying the name of the parameter.
                     * <p>Intended to wrap various implementations like a Map or a JavaBean
                     * with a consistent interface.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see NamedParameterJdbcOperations
                     * @see NamedParameterJdbcTemplate
                     * @see MapSqlParameterSource
                     * @see BeanPropertySqlParameterSource
                     */
                    // @ts-ignore
                    interface SqlParameterSource {
                        /**
                         * Constant that indicates an unknown (or unspecified) SQL type.
                         * To be returned from {@code getType} when no specific SQL type known.
                         * @see #getSqlType
                         * @see java.sql.Types
                         */
                        // @ts-ignore
                        readonly TYPE_UNKNOWN: number /*int*/
                        /**
                         * Determine whether there is a value for the specified named parameter.
                         * @param paramName the name of the parameter
                         * @return whether there is a value defined
                         */
                        // @ts-ignore
                        hasValue(paramName: java.lang.String | string): boolean
                        /**
                         * Return the parameter value for the requested named parameter.
                         * @param paramName the name of the parameter
                         * @return the value of the specified parameter
                         * @throws IllegalArgumentException if there is no value for the requested parameter
                         */
                        // @ts-ignore
                        getValue(paramName: java.lang.String | string): any
                        /**
                         * Determine the SQL type for the specified named parameter.
                         * @param paramName the name of the parameter
                         * @return the SQL type of the specified parameter,
                         *  or {#code TYPE_UNKNOWN} if not known
                         * @see #TYPE_UNKNOWN
                         */
                        // @ts-ignore
                        getSqlType(paramName: java.lang.String | string): number /*int*/
                        /**
                         * Determine the type name for the specified named parameter.
                         * @param paramName the name of the parameter
                         * @return the type name of the specified parameter,
                         *  or {#code null} if not known
                         */
                        // @ts-ignore
                        getTypeName(paramName: java.lang.String | string): string
                        /**
                         * Enumerate all available parameter names if possible.
                         * <p>This is an optional operation, primarily for use with
                         * {@link org.springframework.jdbc.core.simple.SimpleJdbcInsert}
                         * and {@link org.springframework.jdbc.core.simple.SimpleJdbcCall}.
                         * @return the array of parameter names, or {#code null} if not determinable
                         * @since 5.0.3
                         * @see SqlParameterSourceUtils#extractCaseInsensitiveParameterNames
                         */
                        // @ts-ignore
                        getParameterNames(): string[]
                    }
                }
            }
        }
    }
}
