declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Common base class for ResultSet-supporting SqlParameters like
                 * {@link SqlOutParameter} and {@link SqlReturnResultSet}.
                 * @author Juergen Hoeller
                 * @since 1.0.2
                 */
                // @ts-ignore
                class ResultSetSupportingSqlParameter extends org.springframework.jdbc.core.SqlParameter {
                    /**
                     * Create a new ResultSetSupportingSqlParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/)
                    /**
                     * Create a new ResultSetSupportingSqlParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param scale the number of digits after the decimal point
                     *  (for DECIMAL and NUMERIC types)
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, scale: number /*int*/)
                    /**
                     * Create a new ResultSetSupportingSqlParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param typeName the type name of the parameter (optional)
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, typeName: java.lang.String | string)
                    /**
                     * Create a new ResultSetSupportingSqlParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param rse the {#link ResultSetExtractor} to use for parsing the {@link ResultSet}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, rse: org.springframework.jdbc.core.ResultSetExtractor<any>)
                    /**
                     * Create a new ResultSetSupportingSqlParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param rch the {#link RowCallbackHandler} to use for parsing the {@link ResultSet}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, rch: org.springframework.jdbc.core.RowCallbackHandler)
                    /**
                     * Create a new ResultSetSupportingSqlParameter.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the parameter SQL type according to {#code java.sql.Types}
                     * @param rm the {#link RowMapper} to use for parsing the {@link ResultSet}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, rm: org.springframework.jdbc.core.RowMapper<any>)
                    /**
                     * Does this parameter support a ResultSet, i.e. does it hold a
                     * ResultSetExtractor, RowCallbackHandler or RowMapper?
                     */
                    // @ts-ignore
                    public isResultSetSupported(): boolean
                    /**
                     * Return the ResultSetExtractor held by this parameter, if any.
                     */
                    // @ts-ignore
                    public getResultSetExtractor(): org.springframework.jdbc.core.ResultSetExtractor<any>
                    /**
                     * Return the RowCallbackHandler held by this parameter, if any.
                     */
                    // @ts-ignore
                    public getRowCallbackHandler(): org.springframework.jdbc.core.RowCallbackHandler
                    /**
                     * Return the RowMapper held by this parameter, if any.
                     */
                    // @ts-ignore
                    public getRowMapper(): org.springframework.jdbc.core.RowMapper<any>
                    /**
                     * This implementation always returns {@code false}.
                     */
                    // @ts-ignore
                    public isInputValueProvided(): boolean
                }
            }
        }
    }
}
