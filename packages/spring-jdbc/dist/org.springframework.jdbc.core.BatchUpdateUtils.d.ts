declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Generic utility methods for working with JDBC batch statements.
                 * Mainly for internal use within the framework.
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @deprecated as of 5.1.3, not used by {#link JdbcTemplate} anymore
                 */
                // @ts-ignore
                abstract class BatchUpdateUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static executeBatchUpdate(sql: java.lang.String | string, batchArgs: java.util.List<java.lang.Object[] | any[]> | Array<java.lang.Object[] | any[]>, columnTypes: number /*int*/[], jdbcOperations: org.springframework.jdbc.core.JdbcOperations): number /*int*/[]
                    // @ts-ignore
                    static setStatementParameters(values: java.lang.Object[] | any[], ps: java.sql.PreparedStatement, columnTypes: number /*int*/[]): void
                }
            }
        }
    }
}
