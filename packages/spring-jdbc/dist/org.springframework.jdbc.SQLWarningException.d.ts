declare namespace org {
    namespace springframework {
        namespace jdbc {
            /**
             * Exception thrown when we're not ignoring {@link java.sql.SQLWarning SQLWarnings}.
             * <p>If an SQLWarning is reported, the operation completed, so we will need
             * to explicitly roll it back if we're not happy when looking at the warning.
             * We might choose to ignore (and log) the warning, or to wrap and throw it
             * in the shape of this SQLWarningException instead.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @see org.springframework.jdbc.core.JdbcTemplate#setIgnoreWarnings
             */
            // @ts-ignore
            class SQLWarningException extends UncategorizedDataAccessException {
                /**
                 * Constructor for SQLWarningException.
                 * @param msg the detail message
                 * @param ex the JDBC warning
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string, ex: java.sql.SQLWarning)
                /**
                 * Return the underlying SQLWarning.
                 */
                // @ts-ignore
                public SQLWarning(): java.sql.SQLWarning
            }
        }
    }
}
