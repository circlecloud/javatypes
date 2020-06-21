declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace namedparam {
                    /**
                     * Template class with a basic set of JDBC operations, allowing the use
                     * of named parameters rather than traditional '?' placeholders.
                     * <p>This class delegates to a wrapped {@link #getJdbcOperations() JdbcTemplate}
                     * once the substitution from named parameters to JDBC style '?' placeholders is
                     * done at execution time. It also allows for expanding a {@link java.util.List}
                     * of values to the appropriate number of placeholders.
                     * <p>The underlying {@link org.springframework.jdbc.core.JdbcTemplate} is
                     * exposed to allow for convenient access to the traditional
                     * {@link org.springframework.jdbc.core.JdbcTemplate} methods.
                     * <p><b>NOTE: An instance of this class is thread-safe once configured.</b>
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see NamedParameterJdbcOperations
                     * @see org.springframework.jdbc.core.JdbcTemplate
                     */
                    // @ts-ignore
                    class NamedParameterJdbcTemplate extends java.lang.Object implements org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations {
                        /**
                         * Create a new NamedParameterJdbcTemplate for the given {@link DataSource}.
                         * <p>Creates a classic Spring {@link org.springframework.jdbc.core.JdbcTemplate} and wraps it.
                         * @param dataSource the JDBC DataSource to access
                         */
                        // @ts-ignore
                        constructor(dataSource: javax.sql.DataSource)
                        /**
                         * Create a new NamedParameterJdbcTemplate for the given classic
                         * Spring {@link org.springframework.jdbc.core.JdbcTemplate}.
                         * @param classicJdbcTemplate the classic Spring JdbcTemplate to wrap
                         */
                        // @ts-ignore
                        constructor(classicJdbcTemplate: org.springframework.jdbc.core.JdbcOperations)
                        /**
                         * Default maximum number of entries for this template's SQL cache: 256.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_CACHE_LIMIT: number /*int*/
                        /**
                         * Expose the classic Spring JdbcTemplate operations to allow invocation
                         * of less commonly used methods.
                         */
                        // @ts-ignore
                        public getJdbcOperations(): org.springframework.jdbc.core.JdbcOperations
                        /**
                         * Expose the classic Spring {@link JdbcTemplate} itself, if available,
                         * in particular for passing it on to other {@code JdbcTemplate} consumers.
                         * <p>If sufficient for the purposes at hand, {@link #getJdbcOperations()}
                         * is recommended over this variant.
                         * @since 5.0.3
                         */
                        // @ts-ignore
                        public getJdbcTemplate(): org.springframework.jdbc.core.JdbcTemplate
                        /**
                         * Specify the maximum number of entries for this template's SQL cache.
                         * Default is 256.
                         */
                        // @ts-ignore
                        public setCacheLimit(cacheLimit: number /*int*/): void
                        /**
                         * Return the maximum number of entries for this template's SQL cache.
                         */
                        // @ts-ignore
                        public getCacheLimit(): number /*int*/
                        // @ts-ignore
                        public execute<T>(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, action: org.springframework.jdbc.core.PreparedStatementCallback<T>): T
                        // @ts-ignore
                        public execute<T>(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>, action: org.springframework.jdbc.core.PreparedStatementCallback<T>): T
                        // @ts-ignore
                        public execute<T>(sql: java.lang.String | string, action: org.springframework.jdbc.core.PreparedStatementCallback<T>): T
                        // @ts-ignore
                        public query<T>(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                        // @ts-ignore
                        public query<T>(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>, rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                        // @ts-ignore
                        public query<T>(sql: java.lang.String | string, rse: org.springframework.jdbc.core.ResultSetExtractor<T>): T
                        // @ts-ignore
                        public query(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, rch: org.springframework.jdbc.core.RowCallbackHandler): void
                        // @ts-ignore
                        public query(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>, rch: org.springframework.jdbc.core.RowCallbackHandler): void
                        // @ts-ignore
                        public query(sql: java.lang.String | string, rch: org.springframework.jdbc.core.RowCallbackHandler): void
                        // @ts-ignore
                        public query<T>(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                        // @ts-ignore
                        public query<T>(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>, rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                        // @ts-ignore
                        public query<T>(sql: java.lang.String | string, rowMapper: org.springframework.jdbc.core.RowMapper<T>): Array<T>
                        // @ts-ignore
                        public queryForObject<T>(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, rowMapper: org.springframework.jdbc.core.RowMapper<T>): T
                        // @ts-ignore
                        public queryForObject<T>(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>, rowMapper: org.springframework.jdbc.core.RowMapper<T>): T
                        // @ts-ignore
                        public queryForObject<T>(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, requiredType: java.lang.Class<T>): T
                        // @ts-ignore
                        public queryForObject<T>(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>, requiredType: java.lang.Class<T>): T
                        // @ts-ignore
                        public queryForMap(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public queryForMap(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public queryForList<T>(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, elementType: java.lang.Class<T>): Array<T>
                        // @ts-ignore
                        public queryForList<T>(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>, elementType: java.lang.Class<T>): Array<T>
                        // @ts-ignore
                        public queryForList(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): Array<java.util.Map<java.lang.String | string, java.lang.Object | any>>
                        // @ts-ignore
                        public queryForList(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>): Array<java.util.Map<java.lang.String | string, java.lang.Object | any>>
                        // @ts-ignore
                        public queryForRowSet(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): org.springframework.jdbc.support.rowset.SqlRowSet
                        // @ts-ignore
                        public queryForRowSet(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>): org.springframework.jdbc.support.rowset.SqlRowSet
                        // @ts-ignore
                        public update(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): number /*int*/
                        // @ts-ignore
                        public update(sql: java.lang.String | string, paramMap: java.util.Map<java.lang.String | string, any>): number /*int*/
                        // @ts-ignore
                        public update(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, generatedKeyHolder: org.springframework.jdbc.support.KeyHolder): number /*int*/
                        // @ts-ignore
                        public update(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, generatedKeyHolder: org.springframework.jdbc.support.KeyHolder, keyColumnNames: java.lang.String[] | string[]): number /*int*/
                        // @ts-ignore
                        public batchUpdate(sql: java.lang.String | string, batchValues: java.util.Map<java.lang.String | string, any>[]): number /*int*/[]
                        // @ts-ignore
                        public batchUpdate(sql: java.lang.String | string, batchArgs: org.springframework.jdbc.core.namedparam.SqlParameterSource[]): number /*int*/[]
                        /**
                         * Build a {@link PreparedStatementCreator} based on the given SQL and named parameters.
                         * <p>Note: Directly called from all {@code query} variants. Delegates to the common
                         * {@link #getPreparedStatementCreator(String, SqlParameterSource, Consumer)} method.
                         * @param sql the SQL statement to execute
                         * @param paramSource container of arguments to bind
                         * @return the corresponding {#link PreparedStatementCreator}
                         * @see #getPreparedStatementCreator(String, SqlParameterSource, Consumer)
                         */
                        // @ts-ignore
                        getPreparedStatementCreator(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): org.springframework.jdbc.core.PreparedStatementCreator
                        /**
                         * Build a {@link PreparedStatementCreator} based on the given SQL and named parameters.
                         * <p>Note: Used for the {@code update} variant with generated key handling, and also
                         * delegated from {@link #getPreparedStatementCreator(String, SqlParameterSource)}.
                         * @param sql the SQL statement to execute
                         * @param paramSource container of arguments to bind
                         * @param customizer callback for setting further properties on the
                         *  {#link PreparedStatementCreatorFactory} in use), applied before the
                         *  actual {@code newPreparedStatementCreator} call
                         * @return the corresponding {#link PreparedStatementCreator}
                         * @since 5.0.5
                         * @see #getParsedSql(String)
                         * @see PreparedStatementCreatorFactory#PreparedStatementCreatorFactory(String, List)
                         * @see PreparedStatementCreatorFactory#newPreparedStatementCreator(Object[])
                         */
                        // @ts-ignore
                        getPreparedStatementCreator(sql: java.lang.String | string, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource, customizer: java.util.function$.Consumer<org.springframework.jdbc.core.PreparedStatementCreatorFactory>): org.springframework.jdbc.core.PreparedStatementCreator
                        /**
                         * Obtain a parsed representation of the given SQL statement.
                         * <p>The default implementation uses an LRU cache with an upper limit of 256 entries.
                         * @param sql the original SQL statement
                         * @return a representation of the parsed SQL statement
                         */
                        // @ts-ignore
                        getParsedSql(sql: java.lang.String | string): org.springframework.jdbc.core.namedparam.ParsedSql
                        /**
                         * Build a {@link PreparedStatementCreatorFactory} based on the given SQL and named parameters.
                         * @param parsedSql parsed representation of the given SQL statement
                         * @param paramSource container of arguments to bind
                         * @return the corresponding {#link PreparedStatementCreatorFactory}
                         * @since 5.1.3
                         * @see #getPreparedStatementCreator(String, SqlParameterSource, Consumer)
                         * @see #getParsedSql(String)
                         */
                        // @ts-ignore
                        getPreparedStatementCreatorFactory(parsedSql: org.springframework.jdbc.core.namedparam.ParsedSql, paramSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): org.springframework.jdbc.core.PreparedStatementCreatorFactory
                    }
                }
            }
        }
    }
}
