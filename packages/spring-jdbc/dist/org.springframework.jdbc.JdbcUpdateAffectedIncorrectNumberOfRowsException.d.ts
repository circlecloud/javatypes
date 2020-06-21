declare namespace org {
    namespace springframework {
        namespace jdbc {
            /**
             * Exception thrown when a JDBC update affects an unexpected number of rows.
             * Typically we expect an update to affect a single row, meaning it's an
             * error if it affects multiple rows.
             * @author Rod Johnson
             * @author Juergen Hoeller
             */
            // @ts-ignore
            class JdbcUpdateAffectedIncorrectNumberOfRowsException extends IncorrectUpdateSemanticsDataAccessException {
                /**
                 * Constructor for JdbcUpdateAffectedIncorrectNumberOfRowsException.
                 * @param sql the SQL we were trying to execute
                 * @param expected the expected number of rows affected
                 * @param actual the actual number of rows affected
                 */
                // @ts-ignore
                constructor(sql: java.lang.String | string, expected: number /*int*/, actual: number /*int*/)
                /**
                 * Return the number of rows that should have been affected.
                 */
                // @ts-ignore
                public getExpectedRowsAffected(): number /*int*/
                /**
                 * Return the number of rows that have actually been affected.
                 */
                // @ts-ignore
                public getActualRowsAffected(): number /*int*/
                // @ts-ignore
                public wasDataUpdated(): boolean
            }
        }
    }
}
