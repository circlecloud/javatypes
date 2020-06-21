declare namespace org {
    namespace springframework {
        namespace jdbc {
            /**
             * Exception thrown when a ResultSet has been accessed in an invalid fashion.
             * Such exceptions always have a {@code java.sql.SQLException} root cause.
             * <p>This typically happens when an invalid ResultSet column index or name
             * has been specified. Also thrown by disconnected SqlRowSets.
             * @author Juergen Hoeller
             * @since 1.2
             * @see BadSqlGrammarException
             * @see org.springframework.jdbc.support.rowset.SqlRowSet
             */
            // @ts-ignore
            class InvalidResultSetAccessException extends InvalidDataAccessResourceUsageException {
                /**
                 * Constructor for InvalidResultSetAccessException.
                 * @param task name of current task
                 * @param sql the offending SQL statement
                 * @param ex the root cause
                 */
                // @ts-ignore
                constructor(task: java.lang.String | string, sql: java.lang.String | string, ex: java.sql.SQLException)
                /**
                 * Constructor for InvalidResultSetAccessException.
                 * @param ex the root cause
                 */
                // @ts-ignore
                constructor(ex: java.sql.SQLException)
                /**
                 * Return the wrapped SQLException.
                 */
                // @ts-ignore
                public getSQLException(): java.sql.SQLException
                /**
                 * Return the SQL that caused the problem.
                 * @return the offending SQL, if known
                 */
                // @ts-ignore
                public getSql(): string
            }
        }
    }
}
