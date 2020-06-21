declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * Generic utility methods for working with JDBC. Mainly for internal use
                 * within the framework, but also useful for custom JDBC access code.
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 */
                // @ts-ignore
                abstract class JdbcUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Constant that indicates an unknown (or unspecified) SQL type.
                     * @see java.sql.Types
                     */
                    // @ts-ignore
                    public static readonly TYPE_UNKNOWN: number /*int*/
                    /**
                     * Close the given JDBC Connection and ignore any thrown exception.
                     * This is useful for typical finally blocks in manual JDBC code.
                     * @param con the JDBC Connection to close (may be {#code null})
                     */
                    // @ts-ignore
                    public static closeConnection(con: java.sql.Connection): void
                    /**
                     * Close the given JDBC Statement and ignore any thrown exception.
                     * This is useful for typical finally blocks in manual JDBC code.
                     * @param stmt the JDBC Statement to close (may be {#code null})
                     */
                    // @ts-ignore
                    public static closeStatement(stmt: java.sql.Statement): void
                    /**
                     * Close the given JDBC ResultSet and ignore any thrown exception.
                     * This is useful for typical finally blocks in manual JDBC code.
                     * @param rs the JDBC ResultSet to close (may be {#code null})
                     */
                    // @ts-ignore
                    public static closeResultSet(rs: java.sql.ResultSet): void
                    /**
                     * Retrieve a JDBC column value from a ResultSet, using the specified value type.
                     * <p>Uses the specifically typed ResultSet accessor methods, falling back to
                     * {@link #getResultSetValue(java.sql.ResultSet, int)} for unknown types.
                     * <p>Note that the returned value may not be assignable to the specified
                     * required type, in case of an unknown type. Calling code needs to deal
                     * with this case appropriately, e.g. throwing a corresponding exception.
                     * @param rs is the ResultSet holding the data
                     * @param index is the column index
                     * @param requiredType the required value type (may be {#code null})
                     * @return the value object (possibly not of the specified required type,
                     *  with further conversion steps necessary)
                     * @throws SQLException if thrown by the JDBC API
                     * @see #getResultSetValue(ResultSet, int)
                     */
                    // @ts-ignore
                    public static getResultSetValue(rs: java.sql.ResultSet, index: number /*int*/, requiredType: java.lang.Class<any>): any
                    /**
                     * Retrieve a JDBC column value from a ResultSet, using the most appropriate
                     * value type. The returned value should be a detached value object, not having
                     * any ties to the active ResultSet: in particular, it should not be a Blob or
                     * Clob object but rather a byte array or String representation, respectively.
                     * <p>Uses the {@code getObject(index)} method, but includes additional "hacks"
                     * to get around Oracle 10g returning a non-standard object for its TIMESTAMP
                     * datatype and a {@code java.sql.Date} for DATE columns leaving out the
                     * time portion: These columns will explicitly be extracted as standard
                     * {@code java.sql.Timestamp} object.
                     * @param rs is the ResultSet holding the data
                     * @param index is the column index
                     * @return the value object
                     * @throws SQLException if thrown by the JDBC API
                     * @see java.sql.Blob
                     * @see java.sql.Clob
                     * @see java.sql.Timestamp
                     */
                    // @ts-ignore
                    public static getResultSetValue(rs: java.sql.ResultSet, index: number /*int*/): any
                    /**
                     * Extract database meta-data via the given DatabaseMetaDataCallback.
                     * <p>This method will open a connection to the database and retrieve the database meta-data.
                     * Since this method is called before the exception translation feature is configured for
                     * a datasource, this method can not rely on the SQLException translation functionality.
                     * <p>Any exceptions will be wrapped in a MetaDataAccessException. This is a checked exception
                     * and any calling code should catch and handle this exception. You can just log the
                     * error and hope for the best, but there is probably a more serious error that will
                     * reappear when you try to access the database again.
                     * @param dataSource the DataSource to extract meta-data for
                     * @param action callback that will do the actual work
                     * @return object containing the extracted information, as returned by
                     *  the DatabaseMetaDataCallback's {#code processMetaData} method
                     * @throws MetaDataAccessException if meta-data access failed
                     */
                    // @ts-ignore
                    public static extractDatabaseMetaData(dataSource: javax.sql.DataSource, action: org.springframework.jdbc.support.DatabaseMetaDataCallback): any
                    /**
                     * Call the specified method on DatabaseMetaData for the given DataSource,
                     * and extract the invocation result.
                     * @param dataSource the DataSource to extract meta-data for
                     * @param metaDataMethodName the name of the DatabaseMetaData method to call
                     * @return the object returned by the specified DatabaseMetaData method
                     * @throws MetaDataAccessException if we couldn't access the DatabaseMetaData
                     *  or failed to invoke the specified method
                     * @see java.sql.DatabaseMetaData
                     */
                    // @ts-ignore
                    public static extractDatabaseMetaData<T>(dataSource: javax.sql.DataSource, metaDataMethodName: java.lang.String | string): T
                    /**
                     * Return whether the given JDBC driver supports JDBC 2.0 batch updates.
                     * <p>Typically invoked right before execution of a given set of statements:
                     * to decide whether the set of SQL statements should be executed through
                     * the JDBC 2.0 batch mechanism or simply in a traditional one-by-one fashion.
                     * <p>Logs a warning if the "supportsBatchUpdates" methods throws an exception
                     * and simply returns {@code false} in that case.
                     * @param con the Connection to check
                     * @return whether JDBC 2.0 batch updates are supported
                     * @see java.sql.DatabaseMetaData#supportsBatchUpdates()
                     */
                    // @ts-ignore
                    public static supportsBatchUpdates(con: java.sql.Connection): boolean
                    /**
                     * Extract a common name for the target database in use even if
                     * various drivers/platforms provide varying names at runtime.
                     * @param source the name as provided in database meta-data
                     * @return the common name to be used (e.g. "DB2" or "Sybase")
                     */
                    // @ts-ignore
                    public static commonDatabaseName(source: java.lang.String | string): string
                    /**
                     * Check whether the given SQL type is numeric.
                     * @param sqlType the SQL type to be checked
                     * @return whether the type is numeric
                     */
                    // @ts-ignore
                    public static isNumeric(sqlType: number /*int*/): boolean
                    /**
                     * Resolve the standard type name for the given SQL type, if possible.
                     * @param sqlType the SQL type to resolve
                     * @return the corresponding constant name in {#link java.sql.Types}
                     *  (e.g. "VARCHAR"/"NUMERIC"), or {@code null} if not resolvable
                     * @since 5.2
                     */
                    // @ts-ignore
                    public static resolveTypeName(sqlType: number /*int*/): string
                    /**
                     * Determine the column name to use. The column name is determined based on a
                     * lookup using ResultSetMetaData.
                     * <p>This method implementation takes into account recent clarifications
                     * expressed in the JDBC 4.0 specification:
                     * <p><i>columnLabel - the label for the column specified with the SQL AS clause.
                     * If the SQL AS clause was not specified, then the label is the name of the column</i>.
                     * @param resultSetMetaData the current meta-data to use
                     * @param columnIndex the index of the column for the look up
                     * @return the column name to use
                     * @throws SQLException in case of lookup failure
                     */
                    // @ts-ignore
                    public static lookupColumnName(resultSetMetaData: java.sql.ResultSetMetaData, columnIndex: number /*int*/): string
                    /**
                     * Convert a column name with underscores to the corresponding property name using "camel case".
                     * A name like "customer_number" would match a "customerNumber" property name.
                     * @param name the column name to be converted
                     * @return the name using "camel case"
                     */
                    // @ts-ignore
                    public static convertUnderscoreNameToPropertyName(name: java.lang.String | string): string
                }
            }
        }
    }
}
