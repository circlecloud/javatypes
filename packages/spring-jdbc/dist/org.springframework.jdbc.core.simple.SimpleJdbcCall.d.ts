declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace simple {
                    /**
                     * A SimpleJdbcCall is a multi-threaded, reusable object representing a call
                     * to a stored procedure or a stored function. It provides meta-data processing
                     * to simplify the code needed to access basic stored procedures/functions.
                     * All you need to provide is the name of the procedure/function and a Map
                     * containing the parameters when you execute the call. The names of the
                     * supplied parameters will be matched up with in and out parameters declared
                     * when the stored procedure was created.
                     * <p>The meta-data processing is based on the DatabaseMetaData provided by
                     * the JDBC driver. Since we rely on the JDBC driver, this "auto-detection"
                     * can only be used for databases that are known to provide accurate meta-data.
                     * These currently include Derby, MySQL, Microsoft SQL Server, Oracle, DB2,
                     * Sybase and PostgreSQL. For any other databases you are required to declare
                     * all parameters explicitly. You can of course declare all parameters
                     * explicitly even if the database provides the necessary meta-data. In that
                     * case your declared parameters will take precedence. You can also turn off
                     * any meta-data processing if you want to use parameter names that do not
                     * match what is declared during the stored procedure compilation.
                     * <p>The actual insert is being handled using Spring's {@link JdbcTemplate}.
                     * <p>Many of the configuration methods return the current instance of the
                     * SimpleJdbcCall in order to provide the ability to chain multiple ones
                     * together in a "fluent" interface style.
                     * @author Thomas Risberg
                     * @author Stephane Nicoll
                     * @since 2.5
                     * @see java.sql.DatabaseMetaData
                     * @see org.springframework.jdbc.core.JdbcTemplate
                     */
                    // @ts-ignore
                    class SimpleJdbcCall extends org.springframework.jdbc.core.simple.AbstractJdbcCall implements org.springframework.jdbc.core.simple.SimpleJdbcCallOperations {
                        /**
                         * Constructor that takes one parameter with the JDBC DataSource to use when
                         * creating the underlying JdbcTemplate.
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
                        public withProcedureName(procedureName: java.lang.String | string): org.springframework.jdbc.core.simple.SimpleJdbcCall
                        // @ts-ignore
                        public withFunctionName(functionName: java.lang.String | string): org.springframework.jdbc.core.simple.SimpleJdbcCall
                        // @ts-ignore
                        public withSchemaName(schemaName: java.lang.String | string): org.springframework.jdbc.core.simple.SimpleJdbcCall
                        // @ts-ignore
                        public withCatalogName(catalogName: java.lang.String | string): org.springframework.jdbc.core.simple.SimpleJdbcCall
                        // @ts-ignore
                        public withReturnValue(): org.springframework.jdbc.core.simple.SimpleJdbcCall
                        // @ts-ignore
                        public declareParameters(...sqlParameters: org.springframework.jdbc.core.SqlParameter[]): org.springframework.jdbc.core.simple.SimpleJdbcCall
                        // @ts-ignore
                        public useInParameterNames(...inParameterNames: java.lang.String[] | string[]): org.springframework.jdbc.core.simple.SimpleJdbcCall
                        // @ts-ignore
                        public returningResultSet(parameterName: java.lang.String | string, rowMapper: org.springframework.jdbc.core.RowMapper<any>): org.springframework.jdbc.core.simple.SimpleJdbcCall
                        // @ts-ignore
                        public withoutProcedureColumnMetaDataAccess(): org.springframework.jdbc.core.simple.SimpleJdbcCall
                        // @ts-ignore
                        public withNamedBinding(): org.springframework.jdbc.core.simple.SimpleJdbcCall
                        // @ts-ignore
                        public executeFunction<T>(returnType: java.lang.Class<T>, ...args: java.lang.Object[] | any[]): T
                        // @ts-ignore
                        public executeFunction<T>(returnType: java.lang.Class<T>, args: java.util.Map<java.lang.String | string, any>): T
                        // @ts-ignore
                        public executeFunction<T>(returnType: java.lang.Class<T>, args: org.springframework.jdbc.core.namedparam.SqlParameterSource): T
                        // @ts-ignore
                        public executeObject<T>(returnType: java.lang.Class<T>, ...args: java.lang.Object[] | any[]): T
                        // @ts-ignore
                        public executeObject<T>(returnType: java.lang.Class<T>, args: java.util.Map<java.lang.String | string, any>): T
                        // @ts-ignore
                        public executeObject<T>(returnType: java.lang.Class<T>, args: org.springframework.jdbc.core.namedparam.SqlParameterSource): T
                        // @ts-ignore
                        public execute(...args: java.lang.Object[] | any[]): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public execute(args: java.util.Map<java.lang.String | string, any>): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public execute(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    }
                }
            }
        }
    }
}
