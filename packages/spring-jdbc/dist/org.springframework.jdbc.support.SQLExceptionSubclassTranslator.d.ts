declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * {@link SQLExceptionTranslator} implementation which analyzes the specific
                 * {@link java.sql.SQLException} subclass thrown by the JDBC driver.
                 * <p>Falls back to a standard {@link SQLStateSQLExceptionTranslator} if the JDBC
                 * driver does not actually expose JDBC 4 compliant {@code SQLException} subclasses.
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 * @since 2.5
                 * @see java.sql.SQLTransientException
                 * @see java.sql.SQLTransientException
                 * @see java.sql.SQLRecoverableException
                 */
                // @ts-ignore
                class SQLExceptionSubclassTranslator extends org.springframework.jdbc.support.AbstractFallbackSQLExceptionTranslator {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    doTranslate(task: java.lang.String | string, sql: java.lang.String | string, ex: java.sql.SQLException): DataAccessException
                }
            }
        }
    }
}
