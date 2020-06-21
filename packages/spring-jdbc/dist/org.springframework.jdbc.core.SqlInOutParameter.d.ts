declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Subclass of {@link SqlOutParameter} to represent an INOUT parameter.
                 * Will return {@code true} for SqlParameter's {@link #isInputValueProvided}
                 * test, in contrast to a standard SqlOutParameter.
                 * <p>Output parameters - like all stored procedure parameters - must have names.
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 * @since 2.0
                 */
                // @ts-ignore
                class SqlInOutParameter extends org.springframework.jdbc.core.SqlOutParameter {
                    /**
                     * Create a new SqlInOutParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/)
                    /**
                     * Create a new SqlInOutParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param scale the number of digits after the decimal point
                     *  (for DECIMAL and NUMERIC types)
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, scale: number /*int*/)
                    /**
                     * Create a new SqlInOutParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param typeName the type name of the parameter (optional)
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, typeName: java.lang.String | string)
                    /**
                     * Create a new SqlInOutParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param typeName the type name of the parameter (optional)
                     * @param sqlReturnType custom value handler for complex type (optional)
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, typeName: java.lang.String | string, sqlReturnType: org.springframework.jdbc.core.SqlReturnType)
                    /**
                     * Create a new SqlInOutParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param rse the {#link ResultSetExtractor} to use for parsing the {@link ResultSet}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, rse: org.springframework.jdbc.core.ResultSetExtractor<any>)
                    /**
                     * Create a new SqlInOutParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param rch the {#link RowCallbackHandler} to use for parsing the {@link ResultSet}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, rch: org.springframework.jdbc.core.RowCallbackHandler)
                    /**
                     * Create a new SqlInOutParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param rm the {#link RowMapper} to use for parsing the {@link ResultSet}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, rm: org.springframework.jdbc.core.RowMapper<any>)
                    /**
                     * This implementation always returns {@code true}.
                     */
                    // @ts-ignore
                    public isInputValueProvided(): boolean
                }
            }
        }
    }
}
