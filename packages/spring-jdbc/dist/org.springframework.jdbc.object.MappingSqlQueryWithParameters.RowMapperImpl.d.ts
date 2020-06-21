declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace object {
                namespace MappingSqlQueryWithParameters {
                    /**
                     * Implementation of RowMapper that calls the enclosing
                     * class's {@code mapRow} method for each row.
                     */
                    // @ts-ignore
                    class RowMapperImpl extends java.lang.Object implements org.springframework.jdbc.core.RowMapper<T> {
                        /**
                         * Use an array results. More efficient if we know how many results to expect.
                         */
                        // @ts-ignore
                        constructor(parameters: java.lang.Object[] | any[], context: java.util.Map<any, any>)
                        // @ts-ignore
                        public mapRow(rs: java.sql.ResultSet, rowNum: number /*int*/): T
                    }
                }
            }
        }
    }
}
