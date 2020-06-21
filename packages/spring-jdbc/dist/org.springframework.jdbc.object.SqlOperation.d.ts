declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace object {
                /**
                 * Operation object representing an SQL-based operation such as a query or update,
                 * as opposed to a stored procedure.
                 * <p>Configures a {@link org.springframework.jdbc.core.PreparedStatementCreatorFactory}
                 * based on the declared parameters.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 */
                // @ts-ignore
                abstract class SqlOperation extends org.springframework.jdbc.object.RdbmsOperation {
                    // @ts-ignore
                    constructor()
                    /**
                     * Overridden method to configure the PreparedStatementCreatorFactory
                     * based on our declared parameters.
                     */
                    // @ts-ignore
                    compileInternal(): void
                    /**
                     * Hook method that subclasses may override to post-process compilation.
                     * This implementation does nothing.
                     * @see #compileInternal
                     */
                    // @ts-ignore
                    onCompileInternal(): void
                    /**
                     * Obtain a parsed representation of this operation's SQL statement.
                     * <p>Typically used for named parameter parsing.
                     */
                    // @ts-ignore
                    getParsedSql(): org.springframework.jdbc.core.namedparam.ParsedSql
                    /**
                     * Return a PreparedStatementSetter to perform an operation
                     * with the given parameters.
                     * @param params the parameter array (may be {#code null})
                     */
                    // @ts-ignore
                    newPreparedStatementSetter(params: java.lang.Object[] | any[]): org.springframework.jdbc.core.PreparedStatementSetter
                    /**
                     * Return a PreparedStatementCreator to perform an operation
                     * with the given parameters.
                     * @param params the parameter array (may be {#code null})
                     */
                    // @ts-ignore
                    newPreparedStatementCreator(params: java.lang.Object[] | any[]): org.springframework.jdbc.core.PreparedStatementCreator
                    /**
                     * Return a PreparedStatementCreator to perform an operation
                     * with the given parameters.
                     * @param sqlToUse the actual SQL statement to use (if different from
                     *  the factory's, for example because of named parameter expanding)
                     * @param params the parameter array (may be {#code null})
                     */
                    // @ts-ignore
                    newPreparedStatementCreator(sqlToUse: java.lang.String | string, params: java.lang.Object[] | any[]): org.springframework.jdbc.core.PreparedStatementCreator
                }
            }
        }
    }
}
