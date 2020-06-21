declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Subclass of {@link SqlParameter} to represent an output parameter.
                 * No additional properties: instanceof will be used to check for such types.
                 * <p>Output parameters - like all stored procedure parameters - must have names.
                 * @author Rod Johnson
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 * @see SqlReturnResultSet
                 * @see SqlInOutParameter
                 */
                // @ts-ignore
                class SqlOutParameter extends org.springframework.jdbc.core.ResultSetSupportingSqlParameter {
                    /**
                     * Create a new SqlOutParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/)
                    /**
                     * Create a new SqlOutParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param scale the number of digits after the decimal point
                     *  (for DECIMAL and NUMERIC types)
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, scale: number /*int*/)
                    /**
                     * Create a new SqlOutParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param typeName the type name of the parameter (optional)
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, typeName: java.lang.String | string)
                    /**
                     * Create a new SqlOutParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param typeName the type name of the parameter (optional)
                     * @param sqlReturnType custom value handler for complex type (optional)
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, typeName: java.lang.String | string, sqlReturnType: org.springframework.jdbc.core.SqlReturnType)
                    /**
                     * Create a new SqlOutParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param rse the {#link ResultSetExtractor} to use for parsing the {@link ResultSet}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, rse: org.springframework.jdbc.core.ResultSetExtractor<any>)
                    /**
                     * Create a new SqlOutParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param rch the {#link RowCallbackHandler} to use for parsing the {@link ResultSet}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, rch: org.springframework.jdbc.core.RowCallbackHandler)
                    /**
                     * Create a new SqlOutParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param rm the {#link RowMapper} to use for parsing the {@link ResultSet}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, rm: org.springframework.jdbc.core.RowMapper<any>)
                    /**
                     * Return the custom return type, if any.
                     */
                    // @ts-ignore
                    public getSqlReturnType(): org.springframework.jdbc.core.SqlReturnType
                    /**
                     * Return whether this parameter holds a custom return type.
                     */
                    // @ts-ignore
                    public isReturnTypeSupported(): boolean
                }
            }
        }
    }
}
