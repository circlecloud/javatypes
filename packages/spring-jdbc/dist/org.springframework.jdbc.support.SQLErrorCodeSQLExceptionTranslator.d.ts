declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * Implementation of {@link SQLExceptionTranslator} that analyzes vendor-specific error codes.
                 * More precise than an implementation based on SQL state, but heavily vendor-specific.
                 * <p>This class applies the following matching rules:
                 * <ul>
                 * <li>Try custom translation implemented by any subclass. Note that this class is
                 * concrete and is typically used itself, in which case this rule doesn't apply.
                 * <li>Apply error code matching. Error codes are obtained from the SQLErrorCodesFactory
                 * by default. This factory loads a "sql-error-codes.xml" file from the class path,
                 * defining error code mappings for database names from database meta-data.
                 * <li>Fallback to a fallback translator. {@link SQLStateSQLExceptionTranslator} is the
                 * default fallback translator, analyzing the exception's SQL state only. On Java 6
                 * which introduces its own {@code SQLException} subclass hierarchy, we will
                 * use {@link SQLExceptionSubclassTranslator} by default, which in turns falls back
                 * to Spring's own SQL state translation when not encountering specific subclasses.
                 * </ul>
                 * <p>The configuration file named "sql-error-codes.xml" is by default read from
                 * this package. It can be overridden through a file of the same name in the root
                 * of the class path (e.g. in the "/WEB-INF/classes" directory), as long as the
                 * Spring JDBC package is loaded from the same ClassLoader.
                 * @author Rod Johnson
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 * @see SQLErrorCodesFactory
                 * @see SQLStateSQLExceptionTranslator
                 */
                // @ts-ignore
                class SQLErrorCodeSQLExceptionTranslator extends org.springframework.jdbc.support.AbstractFallbackSQLExceptionTranslator {
                    /**
                     * Constructor for use as a JavaBean.
                     * The SqlErrorCodes or DataSource property must be set.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create an SQL error code translator for the given DataSource.
                     * Invoking this constructor will cause a Connection to be obtained
                     * from the DataSource to get the meta-data.
                     * @param dataSource the DataSource to use to find meta-data and establish
                     *  which error codes are usable
                     * @see SQLErrorCodesFactory
                     */
                    // @ts-ignore
                    constructor(dataSource: javax.sql.DataSource)
                    /**
                     * Create an SQL error code translator for the given database product name.
                     * Invoking this constructor will avoid obtaining a Connection from the
                     * DataSource to get the meta-data.
                     * @param dbName the database product name that identifies the error codes entry
                     * @see SQLErrorCodesFactory
                     * @see java.sql.DatabaseMetaData#getDatabaseProductName()
                     */
                    // @ts-ignore
                    constructor(dbName: java.lang.String | string)
                    /**
                     * Create an SQLErrorCode translator given these error codes.
                     * Does not require a database meta-data lookup to be performed using a connection.
                     * @param sec error codes
                     */
                    // @ts-ignore
                    constructor(sec: org.springframework.jdbc.support.SQLErrorCodes)
                    /**
                     * Set the DataSource for this translator.
                     * <p>Setting this property will cause a Connection to be obtained from
                     * the DataSource to get the meta-data.
                     * @param dataSource the DataSource to use to find meta-data and establish
                     *  which error codes are usable
                     * @see SQLErrorCodesFactory#getErrorCodes(javax.sql.DataSource)
                     * @see java.sql.DatabaseMetaData#getDatabaseProductName()
                     */
                    // @ts-ignore
                    public setDataSource(dataSource: javax.sql.DataSource): void
                    /**
                     * Set the database product name for this translator.
                     * <p>Setting this property will avoid obtaining a Connection from the DataSource
                     * to get the meta-data.
                     * @param dbName the database product name that identifies the error codes entry
                     * @see SQLErrorCodesFactory#getErrorCodes(String)
                     * @see java.sql.DatabaseMetaData#getDatabaseProductName()
                     */
                    // @ts-ignore
                    public setDatabaseProductName(dbName: java.lang.String | string): void
                    /**
                     * Set custom error codes to be used for translation.
                     * @param sec custom error codes to use
                     */
                    // @ts-ignore
                    public setSqlErrorCodes(sec: org.springframework.jdbc.support.SQLErrorCodes): void
                    /**
                     * Return the error codes used by this translator.
                     * Usually determined via a DataSource.
                     * @see #setDataSource
                     */
                    // @ts-ignore
                    public getSqlErrorCodes(): org.springframework.jdbc.support.SQLErrorCodes
                    // @ts-ignore
                    doTranslate(task: java.lang.String | string, sql: java.lang.String | string, ex: java.sql.SQLException): DataAccessException
                    /**
                     * Subclasses can override this method to attempt a custom mapping from
                     * {@link SQLException} to {@link DataAccessException}.
                     * @param task readable text describing the task being attempted
                     * @param sql the SQL query or update that caused the problem (may be {#code null})
                     * @param sqlEx the offending SQLException
                     * @return {#code null} if no custom translation applies, otherwise a {@link DataAccessException}
                     *  resulting from custom translation. This exception should include the {@code sqlEx} parameter
                     *  as a nested root cause. This implementation always returns {@code null}, meaning that the
                     *  translator always falls back to the default error codes.
                     */
                    // @ts-ignore
                    customTranslate(task: java.lang.String | string, sql: java.lang.String | string, sqlEx: java.sql.SQLException): DataAccessException
                    /**
                     * Create a custom {@link DataAccessException}, based on a given exception
                     * class from a {@link CustomSQLErrorCodesTranslation} definition.
                     * @param task readable text describing the task being attempted
                     * @param sql the SQL query or update that caused the problem (may be {#code null})
                     * @param sqlEx the offending SQLException
                     * @param exceptionClass the exception class to use, as defined in the
                     *  {#link CustomSQLErrorCodesTranslation} definition
                     * @return {#code null} if the custom exception could not be created, otherwise
                     *  the resulting {@link DataAccessException}. This exception should include the
                     *  {@code sqlEx} parameter as a nested root cause.
                     * @see CustomSQLErrorCodesTranslation#setExceptionClass
                     */
                    // @ts-ignore
                    createCustomException(task: java.lang.String | string, sql: java.lang.String | string, sqlEx: java.sql.SQLException, exceptionClass: java.lang.Class<any>): DataAccessException
                }
            }
        }
    }
}
