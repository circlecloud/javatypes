declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace rowset {
                    /**
                     * The default implementation of Spring's {@link SqlRowSet} interface, wrapping a
                     * {@link java.sql.ResultSet}, catching any {@link SQLException SQLExceptions} and
                     * translating them to a corresponding Spring {@link InvalidResultSetAccessException}.
                     * <p>The passed-in ResultSet should already be disconnected if the SqlRowSet is supposed
                     * to be usable in a disconnected fashion. This means that you will usually pass in a
                     * {@code javax.sql.rowset.CachedRowSet}, which implements the ResultSet interface.
                     * <p>Note: Since JDBC 4.0, it has been clarified that any methods using a String to identify
                     * the column should be using the column label. The column label is assigned using the ALIAS
                     * keyword in the SQL query string. When the query doesn't use an ALIAS, the default label is
                     * the column name. Most JDBC ResultSet implementations follow this new pattern but there are
                     * exceptions such as the {@code com.sun.rowset.CachedRowSetImpl} class which only uses
                     * the column name, ignoring any column labels. As of Spring 3.0.5, ResultSetWrappingSqlRowSet
                     * will translate column labels to the correct column index to provide better support for the
                     * {@code com.sun.rowset.CachedRowSetImpl} which is the default implementation used by
                     * {@link org.springframework.jdbc.core.JdbcTemplate} when working with RowSets.
                     * <p>Note: This class implements the {@code java.io.Serializable} marker interface
                     * through the SqlRowSet interface, but is only actually serializable if the disconnected
                     * ResultSet/RowSet contained in it is serializable. Most CachedRowSet implementations
                     * are actually serializable, so this should usually work out.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 1.2
                     * @see java.sql.ResultSet
                     * @see javax.sql.rowset.CachedRowSet
                     * @see org.springframework.jdbc.core.JdbcTemplate#queryForRowSet
                     */
                    // @ts-ignore
                    class ResultSetWrappingSqlRowSet extends java.lang.Object implements org.springframework.jdbc.support.rowset.SqlRowSet {
                        /**
                         * Create a new ResultSetWrappingSqlRowSet for the given ResultSet.
                         * @param resultSet a disconnected ResultSet to wrap
                         *  (usually a {#code javax.sql.rowset.CachedRowSet})
                         * @throws InvalidResultSetAccessException if extracting
                         *  the ResultSetMetaData failed
                         * @see javax.sql.rowset.CachedRowSet
                         * @see java.sql.ResultSet#getMetaData
                         * @see ResultSetWrappingSqlRowSetMetaData
                         */
                        // @ts-ignore
                        constructor(resultSet: java.sql.ResultSet)
                        /**
                         * Return the underlying ResultSet
                         * (usually a {@code javax.sql.rowset.CachedRowSet}).
                         * @see javax.sql.rowset.CachedRowSet
                         */
                        // @ts-ignore
                        public getResultSet(): java.sql.ResultSet
                        /**
                         * @see java.sql.ResultSetMetaData#getCatalogName(int)
                         */
                        // @ts-ignore
                        public getMetaData(): org.springframework.jdbc.support.rowset.SqlRowSetMetaData
                        /**
                         * @see java.sql.ResultSet#findColumn(String)
                         */
                        // @ts-ignore
                        public findColumn(columnLabel: java.lang.String | string): number /*int*/
                        /**
                         * @see java.sql.ResultSet#getBigDecimal(int)
                         */
                        // @ts-ignore
                        public getBigDecimal(columnIndex: number /*int*/): java.math.BigDecimal
                        /**
                         * @see java.sql.ResultSet#getBigDecimal(String)
                         */
                        // @ts-ignore
                        public getBigDecimal(columnLabel: java.lang.String | string): java.math.BigDecimal
                        /**
                         * @see java.sql.ResultSet#getBoolean(int)
                         */
                        // @ts-ignore
                        public getBoolean(columnIndex: number /*int*/): boolean
                        /**
                         * @see java.sql.ResultSet#getBoolean(String)
                         */
                        // @ts-ignore
                        public getBoolean(columnLabel: java.lang.String | string): boolean
                        /**
                         * @see java.sql.ResultSet#getByte(int)
                         */
                        // @ts-ignore
                        public getByte(columnIndex: number /*int*/): number /*byte*/
                        /**
                         * @see java.sql.ResultSet#getByte(String)
                         */
                        // @ts-ignore
                        public getByte(columnLabel: java.lang.String | string): number /*byte*/
                        /**
                         * @see java.sql.ResultSet#getDate(int)
                         */
                        // @ts-ignore
                        public getDate(columnIndex: number /*int*/): java.sql.Date
                        /**
                         * @see java.sql.ResultSet#getDate(String)
                         */
                        // @ts-ignore
                        public getDate(columnLabel: java.lang.String | string): java.sql.Date
                        /**
                         * @see java.sql.ResultSet#getDate(int, Calendar)
                         */
                        // @ts-ignore
                        public getDate(columnIndex: number /*int*/, cal: java.util.Calendar): java.sql.Date
                        /**
                         * @see java.sql.ResultSet#getDate(String, Calendar)
                         */
                        // @ts-ignore
                        public getDate(columnLabel: java.lang.String | string, cal: java.util.Calendar): java.sql.Date
                        /**
                         * @see java.sql.ResultSet#getDouble(int)
                         */
                        // @ts-ignore
                        public getDouble(columnIndex: number /*int*/): number /*double*/
                        /**
                         * @see java.sql.ResultSet#getDouble(String)
                         */
                        // @ts-ignore
                        public getDouble(columnLabel: java.lang.String | string): number /*double*/
                        /**
                         * @see java.sql.ResultSet#getFloat(int)
                         */
                        // @ts-ignore
                        public getFloat(columnIndex: number /*int*/): number /*float*/
                        /**
                         * @see java.sql.ResultSet#getFloat(String)
                         */
                        // @ts-ignore
                        public getFloat(columnLabel: java.lang.String | string): number /*float*/
                        /**
                         * @see java.sql.ResultSet#getInt(int)
                         */
                        // @ts-ignore
                        public getInt(columnIndex: number /*int*/): number /*int*/
                        /**
                         * @see java.sql.ResultSet#getInt(String)
                         */
                        // @ts-ignore
                        public getInt(columnLabel: java.lang.String | string): number /*int*/
                        /**
                         * @see java.sql.ResultSet#getLong(int)
                         */
                        // @ts-ignore
                        public getLong(columnIndex: number /*int*/): number /*long*/
                        /**
                         * @see java.sql.ResultSet#getLong(String)
                         */
                        // @ts-ignore
                        public getLong(columnLabel: java.lang.String | string): number /*long*/
                        /**
                         * @see java.sql.ResultSet#getNString(int)
                         */
                        // @ts-ignore
                        public getNString(columnIndex: number /*int*/): string
                        /**
                         * @see java.sql.ResultSet#getNString(String)
                         */
                        // @ts-ignore
                        public getNString(columnLabel: java.lang.String | string): string
                        /**
                         * @see java.sql.ResultSet#getObject(int)
                         */
                        // @ts-ignore
                        public getObject(columnIndex: number /*int*/): any
                        /**
                         * @see java.sql.ResultSet#getObject(String)
                         */
                        // @ts-ignore
                        public getObject(columnLabel: java.lang.String | string): any
                        /**
                         * @see java.sql.ResultSet#getObject(int, Map)
                         */
                        // @ts-ignore
                        public getObject(columnIndex: number /*int*/, map: java.util.Map<java.lang.String | string, java.lang.Class<any>>): any
                        /**
                         * @see java.sql.ResultSet#getObject(String, Map)
                         */
                        // @ts-ignore
                        public getObject(columnLabel: java.lang.String | string, map: java.util.Map<java.lang.String | string, java.lang.Class<any>>): any
                        /**
                         * @see java.sql.ResultSet#getObject(int, Class)
                         */
                        // @ts-ignore
                        public getObject<T>(columnIndex: number /*int*/, type: java.lang.Class<T>): T
                        /**
                         * @see java.sql.ResultSet#getObject(String, Class)
                         */
                        // @ts-ignore
                        public getObject<T>(columnLabel: java.lang.String | string, type: java.lang.Class<T>): T
                        /**
                         * @see java.sql.ResultSet#getShort(int)
                         */
                        // @ts-ignore
                        public getShort(columnIndex: number /*int*/): number /*short*/
                        /**
                         * @see java.sql.ResultSet#getShort(String)
                         */
                        // @ts-ignore
                        public getShort(columnLabel: java.lang.String | string): number /*short*/
                        /**
                         * @see java.sql.ResultSet#getString(int)
                         */
                        // @ts-ignore
                        public getString(columnIndex: number /*int*/): string
                        /**
                         * @see java.sql.ResultSet#getString(String)
                         */
                        // @ts-ignore
                        public getString(columnLabel: java.lang.String | string): string
                        /**
                         * @see java.sql.ResultSet#getTime(int)
                         */
                        // @ts-ignore
                        public getTime(columnIndex: number /*int*/): java.sql.Time
                        /**
                         * @see java.sql.ResultSet#getTime(String)
                         */
                        // @ts-ignore
                        public getTime(columnLabel: java.lang.String | string): java.sql.Time
                        /**
                         * @see java.sql.ResultSet#getTime(int, Calendar)
                         */
                        // @ts-ignore
                        public getTime(columnIndex: number /*int*/, cal: java.util.Calendar): java.sql.Time
                        /**
                         * @see java.sql.ResultSet#getTime(String, Calendar)
                         */
                        // @ts-ignore
                        public getTime(columnLabel: java.lang.String | string, cal: java.util.Calendar): java.sql.Time
                        /**
                         * @see java.sql.ResultSet#getTimestamp(int)
                         */
                        // @ts-ignore
                        public getTimestamp(columnIndex: number /*int*/): java.sql.Timestamp
                        /**
                         * @see java.sql.ResultSet#getTimestamp(String)
                         */
                        // @ts-ignore
                        public getTimestamp(columnLabel: java.lang.String | string): java.sql.Timestamp
                        /**
                         * @see java.sql.ResultSet#getTimestamp(int, Calendar)
                         */
                        // @ts-ignore
                        public getTimestamp(columnIndex: number /*int*/, cal: java.util.Calendar): java.sql.Timestamp
                        /**
                         * @see java.sql.ResultSet#getTimestamp(String, Calendar)
                         */
                        // @ts-ignore
                        public getTimestamp(columnLabel: java.lang.String | string, cal: java.util.Calendar): java.sql.Timestamp
                        /**
                         * @see java.sql.ResultSet#absolute(int)
                         */
                        // @ts-ignore
                        public absolute(row: number /*int*/): boolean
                        /**
                         * @see java.sql.ResultSet#afterLast()
                         */
                        // @ts-ignore
                        public afterLast(): void
                        /**
                         * @see java.sql.ResultSet#beforeFirst()
                         */
                        // @ts-ignore
                        public beforeFirst(): void
                        /**
                         * @see java.sql.ResultSet#first()
                         */
                        // @ts-ignore
                        public first(): boolean
                        /**
                         * @see java.sql.ResultSet#getRow()
                         */
                        // @ts-ignore
                        public getRow(): number /*int*/
                        /**
                         * @see java.sql.ResultSet#isAfterLast()
                         */
                        // @ts-ignore
                        public isAfterLast(): boolean
                        /**
                         * @see java.sql.ResultSet#isBeforeFirst()
                         */
                        // @ts-ignore
                        public isBeforeFirst(): boolean
                        /**
                         * @see java.sql.ResultSet#isFirst()
                         */
                        // @ts-ignore
                        public isFirst(): boolean
                        /**
                         * @see java.sql.ResultSet#isLast()
                         */
                        // @ts-ignore
                        public isLast(): boolean
                        /**
                         * @see java.sql.ResultSet#last()
                         */
                        // @ts-ignore
                        public last(): boolean
                        /**
                         * @see java.sql.ResultSet#next()
                         */
                        // @ts-ignore
                        public next(): boolean
                        /**
                         * @see java.sql.ResultSet#previous()
                         */
                        // @ts-ignore
                        public previous(): boolean
                        /**
                         * @see java.sql.ResultSet#relative(int)
                         */
                        // @ts-ignore
                        public relative(rows: number /*int*/): boolean
                        /**
                         * @see java.sql.ResultSet#wasNull()
                         */
                        // @ts-ignore
                        public wasNull(): boolean
                    }
                }
            }
        }
    }
}
