declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace namedparam {
                    /**
                     * Generic utility methods for working with JDBC batch statements using named parameters.
                     * Mainly for internal use within the framework.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 3.0
                     * @deprecated as of 5.1.3, not used by {#link NamedParameterJdbcTemplate} anymore
                     */
                    // @ts-ignore
                    abstract class NamedParameterBatchUpdateUtils extends org.springframework.jdbc.core.BatchUpdateUtils {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static executeBatchUpdateWithNamedParameters(parsedSql: org.springframework.jdbc.core.namedparam.ParsedSql, batchArgs: org.springframework.jdbc.core.namedparam.SqlParameterSource[], jdbcOperations: org.springframework.jdbc.core.JdbcOperations): number /*int*/[]
                    }
                }
            }
        }
    }
}
