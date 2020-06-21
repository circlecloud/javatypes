declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Object to represent an SQL parameter definition.
                 * <p>Parameters may be anonymous, in which case "name" is {@code null}.
                 * However, all parameters must define an SQL type according to {@link java.sql.Types}.
                 * @author Rod Johnson
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 * @see java.sql.Types
                 */
                // @ts-ignore
                class SqlParameter extends java.lang.Object {
                    /**
                     * Create a new anonymous SqlParameter, supplying the SQL type.
                     * @param sqlType the SQL type of the parameter according to {#code java.sql.Types}
                     */
                    // @ts-ignore
                    constructor(sqlType: number /*int*/)
                    /**
                     * Create a new anonymous SqlParameter, supplying the SQL type.
                     * @param sqlType the SQL type of the parameter according to {#code java.sql.Types}
                     * @param typeName the type name of the parameter (optional)
                     */
                    // @ts-ignore
                    constructor(sqlType: number /*int*/, typeName: java.lang.String | string)
                    /**
                     * Create a new anonymous SqlParameter, supplying the SQL type.
                     * @param sqlType the SQL type of the parameter according to {#code java.sql.Types}
                     * @param scale the number of digits after the decimal point
                     *  (for DECIMAL and NUMERIC types)
                     */
                    // @ts-ignore
                    constructor(sqlType: number /*int*/, scale: number /*int*/)
                    /**
                     * Create a new SqlParameter, supplying name and SQL type.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the SQL type of the parameter according to {#code java.sql.Types}
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/)
                    /**
                     * Create a new SqlParameter, supplying name and SQL type.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the SQL type of the parameter according to {#code java.sql.Types}
                     * @param typeName the type name of the parameter (optional)
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, typeName: java.lang.String | string)
                    /**
                     * Create a new SqlParameter, supplying name and SQL type.
                     * @param name the name of the parameter, as used in input and output maps
                     * @param sqlType the SQL type of the parameter according to {#code java.sql.Types}
                     * @param scale the number of digits after the decimal point
                     *  (for DECIMAL and NUMERIC types)
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, sqlType: number /*int*/, scale: number /*int*/)
                    /**
                     * Copy constructor.
                     * @param otherParam the SqlParameter object to copy from
                     */
                    // @ts-ignore
                    constructor(otherParam: org.springframework.jdbc.core.SqlParameter)
                    /**
                     * Return the name of the parameter, or {@code null} if anonymous.
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Return the SQL type of the parameter.
                     */
                    // @ts-ignore
                    public getSqlType(): number /*int*/
                    /**
                     * Return the type name of the parameter, if any.
                     */
                    // @ts-ignore
                    public getTypeName(): string
                    /**
                     * Return the scale of the parameter, if any.
                     */
                    // @ts-ignore
                    public getScale(): number
                    /**
                     * Return whether this parameter holds input values that should be set
                     * before execution even if they are {@code null}.
                     * <p>This implementation always returns {@code true}.
                     */
                    // @ts-ignore
                    public isInputValueProvided(): boolean
                    /**
                     * Return whether this parameter is an implicit return parameter used during the
                     * results processing of {@code CallableStatement.getMoreResults/getUpdateCount}.
                     * <p>This implementation always returns {@code false}.
                     */
                    // @ts-ignore
                    public isResultsParameter(): boolean
                    /**
                     * Convert a list of JDBC types, as defined in {@code java.sql.Types},
                     * to a List of SqlParameter objects as used in this package.
                     */
                    // @ts-ignore
                    public static sqlTypesToAnonymousParameterList(...types: number /*int*/[]): Array<org.springframework.jdbc.core.SqlParameter>
                }
            }
        }
    }
}
