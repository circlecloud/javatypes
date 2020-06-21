declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * {@link RowMapper} implementation that creates a {@code java.util.Map}
                 * for each row, representing all columns as key-value pairs: one
                 * entry for each column, with the column name as key.
                 * <p>The Map implementation to use and the key to use for each column
                 * in the column Map can be customized through overriding
                 * {@link #createColumnMap} and {@link #getColumnKey}, respectively.
                 * <p><b>Note:</b> By default, ColumnMapRowMapper will try to build a linked Map
                 * with case-insensitive keys, to preserve column order as well as allow any
                 * casing to be used for column names. This requires Commons Collections on the
                 * classpath (which will be autodetected). Else, the fallback is a standard linked
                 * HashMap, which will still preserve column order but requires the application
                 * to specify the column names in the same casing as exposed by the driver.
                 * @author Juergen Hoeller
                 * @since 1.2
                 * @see JdbcTemplate#queryForList(String)
                 * @see JdbcTemplate#queryForMap(String)
                 */
                // @ts-ignore
                class ColumnMapRowMapper extends java.lang.Object implements org.springframework.jdbc.core.RowMapper<java.util.Map<java.lang.String | string, java.lang.Object | any>> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public mapRow(rs: java.sql.ResultSet, rowNum: number /*int*/): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Create a Map instance to be used as column map.
                     * <p>By default, a linked case-insensitive Map will be created.
                     * @param columnCount the column count, to be used as initial
                     *  capacity for the Map
                     * @return the new Map instance
                     * @see org.springframework.util.LinkedCaseInsensitiveMap
                     */
                    // @ts-ignore
                    createColumnMap(columnCount: number /*int*/): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Determine the key to use for the given column in the column Map.
                     * @param columnName the column name as returned by the ResultSet
                     * @return the column key to use
                     * @see java.sql.ResultSetMetaData#getColumnName
                     */
                    // @ts-ignore
                    getColumnKey(columnName: java.lang.String | string): string
                    /**
                     * Retrieve a JDBC object value for the specified column.
                     * <p>The default implementation uses the {@code getObject} method.
                     * Additionally, this implementation includes a "hack" to get around Oracle
                     * returning a non standard object for their TIMESTAMP datatype.
                     * @param rs is the ResultSet holding the data
                     * @param index is the column index
                     * @return the Object returned
                     * @see org.springframework.jdbc.support.JdbcUtils#getResultSetValue
                     */
                    // @ts-ignore
                    getColumnValue(rs: java.sql.ResultSet, index: number /*int*/): any
                }
            }
        }
    }
}
