declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace object {
                namespace UpdatableSqlQuery {
                    /**
                     * Implementation of RowMapper that calls the enclosing
                     * class's {@code updateRow()} method for each row.
                     */
                    // @ts-ignore
                    class RowMapperImpl extends java.lang.Object implements org.springframework.jdbc.core.RowMapper<T> {
                        // @ts-ignore
                        constructor(context: java.util.Map<any, any>)
                        // @ts-ignore
                        public mapRow(rs: java.sql.ResultSet, rowNum: number /*int*/): T
                    }
                }
            }
        }
    }
}
