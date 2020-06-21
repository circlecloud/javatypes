declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * Base class for {@link SQLExceptionTranslator} implementations that allow for
                 * fallback to some other {@link SQLExceptionTranslator}.
                 * @author Juergen Hoeller
                 * @since 2.5.6
                 */
                // @ts-ignore
                abstract class AbstractFallbackSQLExceptionTranslator extends java.lang.Object implements org.springframework.jdbc.support.SQLExceptionTranslator {
                    // @ts-ignore
                    constructor()
                    /**
                     * Logger available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Override the default SQL state fallback translator
                     * (typically a {@link SQLStateSQLExceptionTranslator}).
                     */
                    // @ts-ignore
                    public setFallbackTranslator(fallback: org.springframework.jdbc.support.SQLExceptionTranslator): void
                    /**
                     * Return the fallback exception translator, if any.
                     */
                    // @ts-ignore
                    public getFallbackTranslator(): org.springframework.jdbc.support.SQLExceptionTranslator
                    /**
                     * Pre-checks the arguments, calls {@link #doTranslate}, and invokes the
                     * {@link #getFallbackTranslator() fallback translator} if necessary.
                     */
                    // @ts-ignore
                    public translate(task: java.lang.String | string, sql: java.lang.String | string, ex: java.sql.SQLException): DataAccessException
                    /**
                     * Template method for actually translating the given exception.
                     * <p>The passed-in arguments will have been pre-checked. Furthermore, this method
                     * is allowed to return {@code null} to indicate that no exception match has
                     * been found and that fallback translation should kick in.
                     * @param task readable text describing the task being attempted
                     * @param sql the SQL query or update that caused the problem (if known)
                     * @param ex the offending {#code SQLException}
                     * @return the DataAccessException, wrapping the {#code SQLException};
                     *  or {@code null} if no exception match found
                     */
                    // @ts-ignore
                    abstract doTranslate(task: java.lang.String | string, sql: java.lang.String | string, ex: java.sql.SQLException): DataAccessException
                    /**
                     * Build a message {@code String} for the given {@link java.sql.SQLException}.
                     * <p>To be called by translator subclasses when creating an instance of a generic
                     * {@link org.springframework.dao.DataAccessException} class.
                     * @param task readable text describing the task being attempted
                     * @param sql the SQL statement that caused the problem
                     * @param ex the offending {#code SQLException}
                     * @return the message {#code String} to use
                     */
                    // @ts-ignore
                    buildMessage(task: java.lang.String | string, sql: java.lang.String | string, ex: java.sql.SQLException): string
                }
            }
        }
    }
}
