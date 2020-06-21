declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace rowset {
                    /**
                     * Metadata interface for Spring's {@link SqlRowSet}, analogous to JDBC's
                     * {@link java.sql.ResultSetMetaData}.
                     * <p>The main difference to the standard JDBC ResultSetMetaData is that a
                     * {@link java.sql.SQLException} is never thrown here. This allows
                     * SqlRowSetMetaData to be used without having to deal with checked exceptions.
                     * SqlRowSetMetaData will throw Spring's {@link InvalidResultSetAccessException}
                     * instead (when appropriate).
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 1.2
                     * @see SqlRowSet#getMetaData()
                     * @see java.sql.ResultSetMetaData
                     * @see org.springframework.jdbc.InvalidResultSetAccessException
                     */
                    // @ts-ignore
                    interface SqlRowSetMetaData {
                        /**
                         * Retrieve the catalog name of the table that served as the source for the
                         * specified column.
                         * @param columnIndex the index of the column
                         * @return the catalog name
                         * @see java.sql.ResultSetMetaData#getCatalogName(int)
                         */
                        // @ts-ignore
                        getCatalogName(columnIndex: number /*int*/): string
                        /**
                         * Retrieve the fully qualified class that the specified column will be mapped to.
                         * @param columnIndex the index of the column
                         * @return the class name as a String
                         * @see java.sql.ResultSetMetaData#getColumnClassName(int)
                         */
                        // @ts-ignore
                        getColumnClassName(columnIndex: number /*int*/): string
                        /**
                         * Retrieve the number of columns in the RowSet.
                         * @return the number of columns
                         * @see java.sql.ResultSetMetaData#getColumnCount()
                         */
                        // @ts-ignore
                        getColumnCount(): number /*int*/
                        /**
                         * Return the column names of the table that the result set represents.
                         * @return the column names
                         */
                        // @ts-ignore
                        getColumnNames(): string[]
                        /**
                         * Retrieve the maximum width of the designated column.
                         * @param columnIndex the index of the column
                         * @return the width of the column
                         * @see java.sql.ResultSetMetaData#getColumnDisplaySize(int)
                         */
                        // @ts-ignore
                        getColumnDisplaySize(columnIndex: number /*int*/): number /*int*/
                        /**
                         * Retrieve the suggested column title for the column specified.
                         * @param columnIndex the index of the column
                         * @return the column title
                         * @see java.sql.ResultSetMetaData#getColumnLabel(int)
                         */
                        // @ts-ignore
                        getColumnLabel(columnIndex: number /*int*/): string
                        /**
                         * Retrieve the column name for the indicated column.
                         * @param columnIndex the index of the column
                         * @return the column name
                         * @see java.sql.ResultSetMetaData#getColumnName(int)
                         */
                        // @ts-ignore
                        getColumnName(columnIndex: number /*int*/): string
                        /**
                         * Retrieve the SQL type code for the indicated column.
                         * @param columnIndex the index of the column
                         * @return the SQL type code
                         * @see java.sql.ResultSetMetaData#getColumnType(int)
                         * @see java.sql.Types
                         */
                        // @ts-ignore
                        getColumnType(columnIndex: number /*int*/): number /*int*/
                        /**
                         * Retrieve the DBMS-specific type name for the indicated column.
                         * @param columnIndex the index of the column
                         * @return the type name
                         * @see java.sql.ResultSetMetaData#getColumnTypeName(int)
                         */
                        // @ts-ignore
                        getColumnTypeName(columnIndex: number /*int*/): string
                        /**
                         * Retrieve the precision for the indicated column.
                         * @param columnIndex the index of the column
                         * @return the precision
                         * @see java.sql.ResultSetMetaData#getPrecision(int)
                         */
                        // @ts-ignore
                        getPrecision(columnIndex: number /*int*/): number /*int*/
                        /**
                         * Retrieve the scale of the indicated column.
                         * @param columnIndex the index of the column
                         * @return the scale
                         * @see java.sql.ResultSetMetaData#getScale(int)
                         */
                        // @ts-ignore
                        getScale(columnIndex: number /*int*/): number /*int*/
                        /**
                         * Retrieve the schema name of the table that served as the source for the
                         * specified column.
                         * @param columnIndex the index of the column
                         * @return the schema name
                         * @see java.sql.ResultSetMetaData#getSchemaName(int)
                         */
                        // @ts-ignore
                        getSchemaName(columnIndex: number /*int*/): string
                        /**
                         * Retrieve the name of the table that served as the source for the
                         * specified column.
                         * @param columnIndex the index of the column
                         * @return the name of the table
                         * @see java.sql.ResultSetMetaData#getTableName(int)
                         */
                        // @ts-ignore
                        getTableName(columnIndex: number /*int*/): string
                        /**
                         * Indicate whether the case of the designated column is significant.
                         * @param columnIndex the index of the column
                         * @return true if the case sensitive, false otherwise
                         * @see java.sql.ResultSetMetaData#isCaseSensitive(int)
                         */
                        // @ts-ignore
                        isCaseSensitive(columnIndex: number /*int*/): boolean
                        /**
                         * Indicate whether the designated column contains a currency value.
                         * @param columnIndex the index of the column
                         * @return true if the value is a currency value, false otherwise
                         * @see java.sql.ResultSetMetaData#isCurrency(int)
                         */
                        // @ts-ignore
                        isCurrency(columnIndex: number /*int*/): boolean
                        /**
                         * Indicate whether the designated column contains a signed number.
                         * @param columnIndex the index of the column
                         * @return true if the column contains a signed number, false otherwise
                         * @see java.sql.ResultSetMetaData#isSigned(int)
                         */
                        // @ts-ignore
                        isSigned(columnIndex: number /*int*/): boolean
                    }
                }
            }
        }
    }
}
