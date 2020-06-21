declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * Strategy interface for translating between {@link SQLException SQLExceptions}
                 * and Spring's data access strategy-agnostic {@link DataAccessException}
                 * hierarchy.
                 * <p>Implementations can be generic (for example, using
                 * {@link java.sql.SQLException#getSQLState() SQLState} codes for JDBC) or wholly
                 * proprietary (for example, using Oracle error codes) for greater precision.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @see org.springframework.dao.DataAccessException
                 */
                // @ts-ignore
                interface SQLExceptionTranslator {
                    /**
                     * Translate the given {@link SQLException} into a generic {@link DataAccessException}.
                     * <p>The returned DataAccessException is supposed to contain the original
                     * {@code SQLException} as root cause. However, client code may not generally
                     * rely on this due to DataAccessExceptions possibly being caused by other resource
                     * APIs as well. That said, a {@code getRootCause() instanceof SQLException}
                     * check (and subsequent cast) is considered reliable when expecting JDBC-based
                     * access to have happened.
                     * @param task readable text describing the task being attempted
                     * @param sql the SQL query or update that caused the problem (if known)
                     * @param ex the offending {#code SQLException}
                     * @return the DataAccessException wrapping the {#code SQLException},
                     *  or {@code null} if no translation could be applied
                     *  (in a custom translator; the default translators always throw an
                     *  {@link org.springframework.jdbc.UncategorizedSQLException} in such a case)
                     * @see org.springframework.dao.DataAccessException#getRootCause()
                     */
                    // @ts-ignore
                    translate(task: java.lang.String | string, sql: java.lang.String | string, ex: java.sql.SQLException): DataAccessException
                }
            }
        }
    }
}
