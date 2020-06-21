declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * Base class for {@link org.springframework.jdbc.core.JdbcTemplate} and
                 * other JDBC-accessing DAO helpers, defining common properties such as
                 * DataSource and exception translator.
                 * <p>Not intended to be used directly.
                 * See {@link org.springframework.jdbc.core.JdbcTemplate}.
                 * @author Juergen Hoeller
                 * @since 28.11.2003
                 * @see org.springframework.jdbc.core.JdbcTemplate
                 */
                // @ts-ignore
                abstract class JdbcAccessor extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Logger available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Set the JDBC DataSource to obtain connections from.
                     */
                    // @ts-ignore
                    public setDataSource(dataSource: javax.sql.DataSource): void
                    /**
                     * Return the DataSource used by this template.
                     */
                    // @ts-ignore
                    public getDataSource(): javax.sql.DataSource
                    /**
                     * Obtain the DataSource for actual use.
                     * @return the DataSource (never {#code null})
                     * @throws IllegalStateException in case of no DataSource set
                     * @since 5.0
                     */
                    // @ts-ignore
                    obtainDataSource(): javax.sql.DataSource
                    /**
                     * Specify the database product name for the DataSource that this accessor uses.
                     * This allows to initialize an SQLErrorCodeSQLExceptionTranslator without
                     * obtaining a Connection from the DataSource to get the meta-data.
                     * @param dbName the database product name that identifies the error codes entry
                     * @see SQLErrorCodeSQLExceptionTranslator#setDatabaseProductName
                     * @see java.sql.DatabaseMetaData#getDatabaseProductName()
                     */
                    // @ts-ignore
                    public setDatabaseProductName(dbName: java.lang.String | string): void
                    /**
                     * Set the exception translator for this instance.
                     * <p>If no custom translator is provided, a default
                     * {@link SQLErrorCodeSQLExceptionTranslator} is used
                     * which examines the SQLException's vendor-specific error code.
                     * @see org.springframework.jdbc.support.SQLErrorCodeSQLExceptionTranslator
                     * @see org.springframework.jdbc.support.SQLStateSQLExceptionTranslator
                     */
                    // @ts-ignore
                    public setExceptionTranslator(exceptionTranslator: org.springframework.jdbc.support.SQLExceptionTranslator): void
                    /**
                     * Return the exception translator for this instance.
                     * <p>Creates a default {@link SQLErrorCodeSQLExceptionTranslator}
                     * for the specified DataSource if none set, or a
                     * {@link SQLStateSQLExceptionTranslator} in case of no DataSource.
                     * @see #getDataSource()
                     */
                    // @ts-ignore
                    public getExceptionTranslator(): org.springframework.jdbc.support.SQLExceptionTranslator
                    /**
                     * Set whether to lazily initialize the SQLExceptionTranslator for this accessor,
                     * on first encounter of an SQLException. Default is "true"; can be switched to
                     * "false" for initialization on startup.
                     * <p>Early initialization just applies if {@code afterPropertiesSet()} is called.
                     * @see #getExceptionTranslator()
                     * @see #afterPropertiesSet()
                     */
                    // @ts-ignore
                    public setLazyInit(lazyInit: boolean): void
                    /**
                     * Return whether to lazily initialize the SQLExceptionTranslator for this accessor.
                     * @see #getExceptionTranslator()
                     */
                    // @ts-ignore
                    public isLazyInit(): boolean
                    /**
                     * Eagerly initialize the exception translator, if demanded,
                     * creating a default one for the specified DataSource if none set.
                     */
                    // @ts-ignore
                    public afterPropertiesSet(): void
                }
            }
        }
    }
}
