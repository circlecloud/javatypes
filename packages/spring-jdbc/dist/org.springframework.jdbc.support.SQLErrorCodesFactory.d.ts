declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * Factory for creating {@link SQLErrorCodes} based on the
                 * "databaseProductName" taken from the {@link java.sql.DatabaseMetaData}.
                 * <p>Returns {@code SQLErrorCodes} populated with vendor codes
                 * defined in a configuration file named "sql-error-codes.xml".
                 * Reads the default file in this package if not overridden by a file in
                 * the root of the class path (for example in the "/WEB-INF/classes" directory).
                 * @author Thomas Risberg
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @see java.sql.DatabaseMetaData#getDatabaseProductName()
                 */
                // @ts-ignore
                class SQLErrorCodesFactory extends java.lang.Object {
                    /**
                     * Create a new instance of the {@link SQLErrorCodesFactory} class.
                     * <p>Not public to enforce Singleton design pattern. Would be private
                     * except to allow testing via overriding the
                     * {@link #loadResource(String)} method.
                     * <p><b>Do not subclass in application code.</b>
                     * @see #loadResource(String)
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * The name of custom SQL error codes file, loading from the root
                     * of the class path (e.g. from the "/WEB-INF/classes" directory).
                     */
                    // @ts-ignore
                    public static readonly SQL_ERROR_CODE_OVERRIDE_PATH: java.lang.String | string
                    /**
                     * The name of default SQL error code files, loading from the class path.
                     */
                    // @ts-ignore
                    public static readonly SQL_ERROR_CODE_DEFAULT_PATH: java.lang.String | string
                    /**
                     * Return the singleton instance.
                     */
                    // @ts-ignore
                    public static getInstance(): org.springframework.jdbc.support.SQLErrorCodesFactory
                    /**
                     * Load the given resource from the class path.
                     * <p><b>Not to be overridden by application developers, who should obtain
                     * instances of this class from the static {@link #getInstance()} method.</b>
                     * <p>Protected for testability.
                     * @param path resource path; either a custom path or one of either
                     *  {#link #SQL_ERROR_CODE_DEFAULT_PATH} or
                     *  {@link #SQL_ERROR_CODE_OVERRIDE_PATH}.
                     * @return the resource, or {#code null} if the resource wasn't found
                     * @see #getInstance
                     */
                    // @ts-ignore
                    loadResource(path: java.lang.String | string): Resource
                    /**
                     * Return the {@link SQLErrorCodes} instance for the given database.
                     * <p>No need for a database meta-data lookup.
                     * @param databaseName the database name (must not be {#code null})
                     * @return the {#code SQLErrorCodes} instance for the given database
                     * @throws IllegalArgumentException if the supplied database name is {#code null}
                     */
                    // @ts-ignore
                    public getErrorCodes(databaseName: java.lang.String | string): org.springframework.jdbc.support.SQLErrorCodes
                    /**
                     * Return {@link SQLErrorCodes} for the given {@link DataSource},
                     * evaluating "databaseProductName" from the
                     * {@link java.sql.DatabaseMetaData}, or an empty error codes
                     * instance if no {@code SQLErrorCodes} were found.
                     * @param dataSource the {#code DataSource} identifying the database
                     * @return the corresponding {#code SQLErrorCodes} object
                     * @see java.sql.DatabaseMetaData#getDatabaseProductName()
                     */
                    // @ts-ignore
                    public getErrorCodes(dataSource: javax.sql.DataSource): org.springframework.jdbc.support.SQLErrorCodes
                    /**
                     * Associate the specified database name with the given {@link DataSource}.
                     * @param dataSource the {#code DataSource} identifying the database
                     * @param databaseName the corresponding database name as stated in the error codes
                     *  definition file (must not be {#code null})
                     * @return the corresponding {#code SQLErrorCodes} object (never {@code null})
                     * @see #unregisterDatabase(DataSource)
                     */
                    // @ts-ignore
                    public registerDatabase(dataSource: javax.sql.DataSource, databaseName: java.lang.String | string): org.springframework.jdbc.support.SQLErrorCodes
                    /**
                     * Clear the cache for the specified {@link DataSource}, if registered.
                     * @param dataSource the {#code DataSource} identifying the database
                     * @return the corresponding {#code SQLErrorCodes} object that got removed,
                     *  or {@code null} if not registered
                     * @since 4.3.5
                     * @see #registerDatabase(DataSource, String)
                     */
                    // @ts-ignore
                    public unregisterDatabase(dataSource: javax.sql.DataSource): org.springframework.jdbc.support.SQLErrorCodes
                }
            }
        }
    }
}
