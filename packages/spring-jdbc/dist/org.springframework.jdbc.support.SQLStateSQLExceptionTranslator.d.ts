declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * {@link SQLExceptionTranslator} implementation that analyzes the SQL state in
                 * the {@link SQLException} based on the first two digits (the SQL state "class").
                 * Detects standard SQL state values and well-known vendor-specific SQL states.
                 * <p>Not able to diagnose all problems, but is portable between databases and
                 * does not require special initialization (no database vendor detection, etc.).
                 * For more precise translation, consider {@link SQLErrorCodeSQLExceptionTranslator}.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @author Thomas Risberg
                 * @see java.sql.SQLException#getSQLState()
                 * @see SQLErrorCodeSQLExceptionTranslator
                 */
                // @ts-ignore
                class SQLStateSQLExceptionTranslator extends org.springframework.jdbc.support.AbstractFallbackSQLExceptionTranslator {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    doTranslate(task: java.lang.String | string, sql: java.lang.String | string, ex: java.sql.SQLException): DataAccessException
                }
            }
        }
    }
}
