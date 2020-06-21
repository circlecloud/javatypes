declare namespace org {
    namespace springframework {
        namespace jdbc {
            /**
             * Exception thrown when SQL specified is invalid. Such exceptions always have
             * a {@code java.sql.SQLException} root cause.
             * <p>It would be possible to have subclasses for no such table, no such column etc.
             * A custom SQLExceptionTranslator could create such more specific exceptions,
             * without affecting code using this class.
             * @author Rod Johnson
             * @see InvalidResultSetAccessException
             */
            // @ts-ignore
            class BadSqlGrammarException extends InvalidDataAccessResourceUsageException {
                /**
                 * Constructor for BadSqlGrammarException.
                 * @param task name of current task
                 * @param sql the offending SQL statement
                 * @param ex the root cause
                 */
                // @ts-ignore
                constructor(task: java.lang.String | string, sql: java.lang.String | string, ex: java.sql.SQLException)
                /**
                 * Return the wrapped SQLException.
                 */
                // @ts-ignore
                public getSQLException(): java.sql.SQLException
                /**
                 * Return the SQL that caused the problem.
                 */
                // @ts-ignore
                public getSql(): string
            }
        }
    }
}
