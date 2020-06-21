declare namespace org {
    namespace springframework {
        namespace jdbc {
            /**
             * Fatal exception thrown when we can't connect to an RDBMS using JDBC.
             * @author Rod Johnson
             * @author Juergen Hoeller
             */
            // @ts-ignore
            class CannotGetJdbcConnectionException extends DataAccessResourceFailureException {
                /**
                 * Constructor for CannotGetJdbcConnectionException.
                 * @param msg the detail message
                 * @since 5.0
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string)
                /**
                 * Constructor for CannotGetJdbcConnectionException.
                 * @param msg the detail message
                 * @param ex the root cause SQLException
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string, ex: java.sql.SQLException)
            }
        }
    }
}
