declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Represents a returned update count from a stored procedure call.
                 * <p>Returned update counts - like all stored procedure
                 * parameters - <b>must</b> have names.
                 * @author Thomas Risberg
                 */
                // @ts-ignore
                class SqlReturnUpdateCount extends org.springframework.jdbc.core.SqlParameter {
                    /**
                     * Create a new SqlReturnUpdateCount.
                     * @param name the name of the parameter, as used in input and output maps
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    /**
                     * This implementation always returns {@code false}.
                     */
                    // @ts-ignore
                    public isInputValueProvided(): boolean
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
