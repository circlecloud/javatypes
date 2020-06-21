declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Represents a returned {@link java.sql.ResultSet} from a stored procedure call.
                 * <p>A {@link ResultSetExtractor}, {@link RowCallbackHandler} or {@link RowMapper}
                 * must be provided to handle any returned rows.
                 * <p>Returned {@link java.sql.ResultSet ResultSets} - like all stored procedure
                 * parameters - must have names.
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 */
                // @ts-ignore
                class SqlReturnResultSet extends org.springframework.jdbc.core.ResultSetSupportingSqlParameter {
                    /**
                     * Create a new instance of the {@link SqlReturnResultSet} class.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param extractor the {#link ResultSetExtractor} to use for parsing the {@link java.sql.ResultSet}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, extractor: org.springframework.jdbc.core.ResultSetExtractor<any>)
                    /**
                     * Create a new instance of the {@link SqlReturnResultSet} class.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param handler the {#link RowCallbackHandler} to use for parsing the {@link java.sql.ResultSet}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, handler: org.springframework.jdbc.core.RowCallbackHandler)
                    /**
                     * Create a new instance of the {@link SqlReturnResultSet} class.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param mapper the {#link RowMapper} to use for parsing the {@link java.sql.ResultSet}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, mapper: org.springframework.jdbc.core.RowMapper<any>)
                    /**
                     * This implementation always returns {@code true}.
                     */
                    // @ts-ignore
                    public isResultsParameter(): boolean
                }
            }
        }
    }
}
