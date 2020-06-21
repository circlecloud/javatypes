declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace simple {
                    /**
                     * A SimpleJdbcInsert is a multi-threaded, reusable object providing easy insert
                     * capabilities for a table. It provides meta-data processing to simplify the code
                     * needed to construct a basic insert statement. All you need to provide is the
                     * name of the table and a Map containing the column names and the column values.
                     * <p>The meta-data processing is based on the DatabaseMetaData provided by the
                     * JDBC driver. As long as the JDBC driver can provide the names of the columns
                     * for a specified table than we can rely on this auto-detection feature. If that
                     * is not the case, then the column names must be specified explicitly.
                     * <p>The actual insert is being handled using Spring's {@link JdbcTemplate}.
                     * <p>Many of the configuration methods return the current instance of the
                     * SimpleJdbcInsert to provide the ability to chain multiple ones together
                     * in a "fluent" interface style.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see java.sql.DatabaseMetaData
                     * @see org.springframework.jdbc.core.JdbcTemplate
                     */
                    // @ts-ignore
                    class SimpleJdbcInsert extends org.springframework.jdbc.core.simple.AbstractJdbcInsert implements org.springframework.jdbc.core.simple.SimpleJdbcInsertOperations {
                        /**
                         * Constructor that takes one parameter with the JDBC DataSource to use when creating the
                         * JdbcTemplate.
                         * @param dataSource the {#code DataSource} to use
                         * @see org.springframework.jdbc.core.JdbcTemplate#setDataSource
                         */
                        // @ts-ignore
                        constructor(dataSource: javax.sql.DataSource)
                        /**
                         * Alternative Constructor that takes one parameter with the JdbcTemplate to be used.
                         * @param jdbcTemplate the {#code JdbcTemplate} to use
                         * @see org.springframework.jdbc.core.JdbcTemplate#setDataSource
                         */
                        // @ts-ignore
                        constructor(jdbcTemplate: org.springframework.jdbc.core.JdbcTemplate)
                        // @ts-ignore
                        public withTableName(tableName: java.lang.String | string): org.springframework.jdbc.core.simple.SimpleJdbcInsert
                        // @ts-ignore
                        public withSchemaName(schemaName: java.lang.String | string): org.springframework.jdbc.core.simple.SimpleJdbcInsert
                        // @ts-ignore
                        public withCatalogName(catalogName: java.lang.String | string): org.springframework.jdbc.core.simple.SimpleJdbcInsert
                        // @ts-ignore
                        public usingColumns(...columnNames: java.lang.String[] | string[]): org.springframework.jdbc.core.simple.SimpleJdbcInsert
                        // @ts-ignore
                        public usingGeneratedKeyColumns(...columnNames: java.lang.String[] | string[]): org.springframework.jdbc.core.simple.SimpleJdbcInsert
                        // @ts-ignore
                        public withoutTableColumnMetaDataAccess(): org.springframework.jdbc.core.simple.SimpleJdbcInsertOperations
                        // @ts-ignore
                        public includeSynonymsForTableColumnMetaData(): org.springframework.jdbc.core.simple.SimpleJdbcInsertOperations
                        // @ts-ignore
                        public execute(args: java.util.Map<java.lang.String | string, any>): number /*int*/
                        // @ts-ignore
                        public execute(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): number /*int*/
                        // @ts-ignore
                        public executeAndReturnKey(args: java.util.Map<java.lang.String | string, any>): java.lang.Number
                        // @ts-ignore
                        public executeAndReturnKey(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): java.lang.Number
                        // @ts-ignore
                        public executeAndReturnKeyHolder(args: java.util.Map<java.lang.String | string, any>): org.springframework.jdbc.support.KeyHolder
                        // @ts-ignore
                        public executeAndReturnKeyHolder(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): org.springframework.jdbc.support.KeyHolder
                        // @ts-ignore
                        public executeBatch(...batch: java.util.Map<java.lang.String | string, any>[]): number /*int*/[]
                        // @ts-ignore
                        public executeBatch(...batch: org.springframework.jdbc.core.namedparam.SqlParameterSource[]): number /*int*/[]
                    }
                }
            }
        }
    }
}
