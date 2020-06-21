declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Object to represent an SQL parameter value, including parameter meta-data
                 * such as the SQL type and the scale for numeric values.
                 * <p>Designed for use with {@link JdbcTemplate}'s operations that take an array of
                 * argument values: Each such argument value may be a {@code SqlParameterValue},
                 * indicating the SQL type (and optionally the scale) instead of letting the
                 * template guess a default type. Note that this only applies to the operations with
                 * a 'plain' argument array, not to the overloaded variants with an explicit type array.
                 * @author Juergen Hoeller
                 * @since 2.0.5
                 * @see java.sql.Types
                 * @see JdbcTemplate#query(String, Object[], ResultSetExtractor)
                 * @see JdbcTemplate#query(String, Object[], RowCallbackHandler)
                 * @see JdbcTemplate#query(String, Object[], RowMapper)
                 * @see JdbcTemplate#update(String, Object[])
                 */
                // @ts-ignore
                class SqlParameterValue extends org.springframework.jdbc.core.SqlParameter {
                    /**
                     * Create a new SqlParameterValue, supplying the SQL type.
                     * @param sqlType the SQL type of the parameter according to {#code java.sql.Types}
                     * @param value the value object
                     */
                    // @ts-ignore
                    constructor(sqlType: number /*int*/, value: java.lang.Object | any)
                    /**
                     * Create a new SqlParameterValue, supplying the SQL type.
                     * @param sqlType the SQL type of the parameter according to {#code java.sql.Types}
                     * @param typeName the type name of the parameter (optional)
                     * @param value the value object
                     */
                    // @ts-ignore
                    constructor(sqlType: number /*int*/, typeName: java.lang.String | string, value: java.lang.Object | any)
                    /**
                     * Create a new SqlParameterValue, supplying the SQL type.
                     * @param sqlType the SQL type of the parameter according to {#code java.sql.Types}
                     * @param scale the number of digits after the decimal point
                     *  (for DECIMAL and NUMERIC types)
                     * @param value the value object
                     */
                    // @ts-ignore
                    constructor(sqlType: number /*int*/, scale: number /*int*/, value: java.lang.Object | any)
                    /**
                     * Create a new SqlParameterValue based on the given SqlParameter declaration.
                     * @param declaredParam the declared SqlParameter to define a value for
                     * @param value the value object
                     */
                    // @ts-ignore
                    constructor(declaredParam: org.springframework.jdbc.core.SqlParameter, value: java.lang.Object | any)
                    /**
                     * Return the value object that this parameter value holds.
                     */
                    // @ts-ignore
                    public getValue(): any
                }
            }
        }
    }
}
