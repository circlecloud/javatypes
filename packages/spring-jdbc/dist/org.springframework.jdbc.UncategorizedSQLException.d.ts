declare namespace org {
    namespace springframework {
        namespace jdbc {
            /**
             * Exception thrown when we can't classify an SQLException into
             * one of our generic data access exceptions.
             * @author Rod Johnson
             * @author Juergen Hoeller
             */
            // @ts-ignore
            class UncategorizedSQLException extends UncategorizedDataAccessException {
                /**
                 * Constructor for UncategorizedSQLException.
                 * @param task name of current task
                 * @param sql the offending SQL statement
                 * @param ex the root cause
                 */
                // @ts-ignore
                constructor(task: java.lang.String | string, sql: java.lang.String | string, ex: java.sql.SQLException)
                /**
                 * Return the underlying SQLException.
                 */
                // @ts-ignore
                public getSQLException(): java.sql.SQLException
                /**
                 * Return the SQL that led to the problem (if known).
                 */
                // @ts-ignore
                public getSql(): string
            }
        }
    }
}
