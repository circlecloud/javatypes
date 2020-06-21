declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace rowset {
                    /**
                     * Mirror interface for {@link javax.sql.RowSet}, representing a disconnected variant of
                     * {@link java.sql.ResultSet} data.
                     * <p>The main difference to the standard JDBC RowSet is that a {@link java.sql.SQLException}
                     * is never thrown here. This allows an SqlRowSet to be used without having to deal with
                     * checked exceptions. An SqlRowSet will throw Spring's {@link InvalidResultSetAccessException}
                     * instead (when appropriate).
                     * <p>Note: This interface extends the {@code java.io.Serializable} marker interface.
                     * Implementations, which typically hold disconnected data, are encouraged to be actually
                     * serializable (as far as possible).
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 1.2
                     * @see javax.sql.RowSet
                     * @see java.sql.ResultSet
                     * @see org.springframework.jdbc.InvalidResultSetAccessException
                     * @see org.springframework.jdbc.core.JdbcTemplate#queryForRowSet
                     */
                    // @ts-ignore
                    interface SqlRowSet extends java.io.Serializable {
                        /**
                         * Retrieve the meta-data, i.e. number, types and properties
                         * for the columns of this row set.
                         * @return a corresponding SqlRowSetMetaData instance
                         * @see java.sql.ResultSet#getMetaData()
                         */
                        // @ts-ignore
                        getMetaData(): org.springframework.jdbc.support.rowset.SqlRowSetMetaData
                        /**
                         * Map the given column label to its column index.
                         * @param columnLabel the name of the column
                         * @return the column index for the given column label
                         * @see java.sql.ResultSet#findColumn(String)
                         */
                        // @ts-ignore
                        findColumn(columnLabel: java.lang.String | string): number /*int*/
                        /**
                         * Retrieve the value of the indicated column in the current row as a BigDecimal object.
                         * @param columnIndex the column index
                         * @return an BigDecimal object representing the column value
                         * @see java.sql.ResultSet#getBigDecimal(int)
                         */
                        // @ts-ignore
                        getBigDecimal(columnIndex: number /*int*/): java.math.BigDecimal
                        /**
                         * Retrieve the value of the indicated column in the current row as a BigDecimal object.
                         * @param columnLabel the column label
                         * @return an BigDecimal object representing the column value
                         * @see java.sql.ResultSet#getBigDecimal(String)
                         */
                        // @ts-ignore
                        getBigDecimal(columnLabel: java.lang.String | string): java.math.BigDecimal
                        /**
                         * Retrieve the value of the indicated column in the current row as a boolean.
                         * @param columnIndex the column index
                         * @return a boolean representing the column value
                         * @see java.sql.ResultSet#getBoolean(int)
                         */
                        // @ts-ignore
                        getBoolean(columnIndex: number /*int*/): boolean
                        /**
                         * Retrieve the value of the indicated column in the current row as a boolean.
                         * @param columnLabel the column label
                         * @return a boolean representing the column value
                         * @see java.sql.ResultSet#getBoolean(String)
                         */
                        // @ts-ignore
                        getBoolean(columnLabel: java.lang.String | string): boolean
                        /**
                         * Retrieve the value of the indicated column in the current row as a byte.
                         * @param columnIndex the column index
                         * @return a byte representing the column value
                         * @see java.sql.ResultSet#getByte(int)
                         */
                        // @ts-ignore
                        getByte(columnIndex: number /*int*/): number /*byte*/
                        /**
                         * Retrieve the value of the indicated column in the current row as a byte.
                         * @param columnLabel the column label
                         * @return a byte representing the column value
                         * @see java.sql.ResultSet#getByte(String)
                         */
                        // @ts-ignore
                        getByte(columnLabel: java.lang.String | string): number /*byte*/
                        /**
                         * Retrieve the value of the indicated column in the current row as a Date object.
                         * @param columnIndex the column index
                         * @return a Date object representing the column value
                         * @see java.sql.ResultSet#getDate(int)
                         */
                        // @ts-ignore
                        getDate(columnIndex: number /*int*/): java.sql.Date
                        /**
                         * Retrieve the value of the indicated column in the current row as a Date object.
                         * @param columnLabel the column label
                         * @return a Date object representing the column value
                         * @see java.sql.ResultSet#getDate(String)
                         */
                        // @ts-ignore
                        getDate(columnLabel: java.lang.String | string): java.sql.Date
                        /**
                         * Retrieve the value of the indicated column in the current row as a Date object.
                         * @param columnIndex the column index
                         * @param cal the Calendar to use in constructing the Date
                         * @return a Date object representing the column value
                         * @see java.sql.ResultSet#getDate(int, Calendar)
                         */
                        // @ts-ignore
                        getDate(columnIndex: number /*int*/, cal: java.util.Calendar): java.sql.Date
                        /**
                         * Retrieve the value of the indicated column in the current row as a Date object.
                         * @param columnLabel the column label
                         * @param cal the Calendar to use in constructing the Date
                         * @return a Date object representing the column value
                         * @see java.sql.ResultSet#getDate(String, Calendar)
                         */
                        // @ts-ignore
                        getDate(columnLabel: java.lang.String | string, cal: java.util.Calendar): java.sql.Date
                        /**
                         * Retrieve the value of the indicated column in the current row as a Double object.
                         * @param columnIndex the column index
                         * @return a Double object representing the column value
                         * @see java.sql.ResultSet#getDouble(int)
                         */
                        // @ts-ignore
                        getDouble(columnIndex: number /*int*/): number /*double*/
                        /**
                         * Retrieve the value of the indicated column in the current row as a Double object.
                         * @param columnLabel the column label
                         * @return a Double object representing the column value
                         * @see java.sql.ResultSet#getDouble(String)
                         */
                        // @ts-ignore
                        getDouble(columnLabel: java.lang.String | string): number /*double*/
                        /**
                         * Retrieve the value of the indicated column in the current row as a float.
                         * @param columnIndex the column index
                         * @return a float representing the column value
                         * @see java.sql.ResultSet#getFloat(int)
                         */
                        // @ts-ignore
                        getFloat(columnIndex: number /*int*/): number /*float*/
                        /**
                         * Retrieve the value of the indicated column in the current row as a float.
                         * @param columnLabel the column label
                         * @return a float representing the column value
                         * @see java.sql.ResultSet#getFloat(String)
                         */
                        // @ts-ignore
                        getFloat(columnLabel: java.lang.String | string): number /*float*/
                        /**
                         * Retrieve the value of the indicated column in the current row as an int.
                         * @param columnIndex the column index
                         * @return an int representing the column value
                         * @see java.sql.ResultSet#getInt(int)
                         */
                        // @ts-ignore
                        getInt(columnIndex: number /*int*/): number /*int*/
                        /**
                         * Retrieve the value of the indicated column in the current row as an int.
                         * @param columnLabel the column label
                         * @return an int representing the column value
                         * @see java.sql.ResultSet#getInt(String)
                         */
                        // @ts-ignore
                        getInt(columnLabel: java.lang.String | string): number /*int*/
                        /**
                         * Retrieve the value of the indicated column in the current row as a long.
                         * @param columnIndex the column index
                         * @return a long representing the column value
                         * @see java.sql.ResultSet#getLong(int)
                         */
                        // @ts-ignore
                        getLong(columnIndex: number /*int*/): number /*long*/
                        /**
                         * Retrieve the value of the indicated column in the current row as a long.
                         * @param columnLabel the column label
                         * @return a long representing the column value
                         * @see java.sql.ResultSet#getLong(String)
                         */
                        // @ts-ignore
                        getLong(columnLabel: java.lang.String | string): number /*long*/
                        /**
                         * Retrieve the value of the indicated column in the current row as a String
                         * (for NCHAR, NVARCHAR, LONGNVARCHAR columns).
                         * @param columnIndex the column index
                         * @return a String representing the column value
                         * @since 4.1.3
                         * @see java.sql.ResultSet#getNString(int)
                         */
                        // @ts-ignore
                        getNString(columnIndex: number /*int*/): string
                        /**
                         * Retrieve the value of the indicated column in the current row as a String
                         * (for NCHAR, NVARCHAR, LONGNVARCHAR columns).
                         * @param columnLabel the column label
                         * @return a String representing the column value
                         * @since 4.1.3
                         * @see java.sql.ResultSet#getNString(String)
                         */
                        // @ts-ignore
                        getNString(columnLabel: java.lang.String | string): string
                        /**
                         * Retrieve the value of the indicated column in the current row as an Object.
                         * @param columnIndex the column index
                         * @return a Object representing the column value
                         * @see java.sql.ResultSet#getObject(int)
                         */
                        // @ts-ignore
                        getObject(columnIndex: number /*int*/): any
                        /**
                         * Retrieve the value of the indicated column in the current row as an Object.
                         * @param columnLabel the column label
                         * @return a Object representing the column value
                         * @see java.sql.ResultSet#getObject(String)
                         */
                        // @ts-ignore
                        getObject(columnLabel: java.lang.String | string): any
                        /**
                         * Retrieve the value of the indicated column in the current row as an Object.
                         * @param columnIndex the column index
                         * @param map a Map object containing the mapping from SQL types to Java types
                         * @return a Object representing the column value
                         * @see java.sql.ResultSet#getObject(int, Map)
                         */
                        // @ts-ignore
                        getObject(columnIndex: number /*int*/, map: java.util.Map<java.lang.String | string, java.lang.Class<any>>): any
                        /**
                         * Retrieve the value of the indicated column in the current row as an Object.
                         * @param columnLabel the column label
                         * @param map a Map object containing the mapping from SQL types to Java types
                         * @return a Object representing the column value
                         * @see java.sql.ResultSet#getObject(String, Map)
                         */
                        // @ts-ignore
                        getObject(columnLabel: java.lang.String | string, map: java.util.Map<java.lang.String | string, java.lang.Class<any>>): any
                        /**
                         * Retrieve the value of the indicated column in the current row as an Object.
                         * @param columnIndex the column index
                         * @param type the Java type to convert the designated column to
                         * @return a Object representing the column value
                         * @since 4.1.3
                         * @see java.sql.ResultSet#getObject(int, Class)
                         */
                        // @ts-ignore
                        getObject<T>(columnIndex: number /*int*/, type: java.lang.Class<T>): T
                        /**
                         * Retrieve the value of the indicated column in the current row as an Object.
                         * @param columnLabel the column label
                         * @param type the Java type to convert the designated column to
                         * @return a Object representing the column value
                         * @since 4.1.3
                         * @see java.sql.ResultSet#getObject(String, Class)
                         */
                        // @ts-ignore
                        getObject<T>(columnLabel: java.lang.String | string, type: java.lang.Class<T>): T
                        /**
                         * Retrieve the value of the indicated column in the current row as a short.
                         * @param columnIndex the column index
                         * @return a short representing the column value
                         * @see java.sql.ResultSet#getShort(int)
                         */
                        // @ts-ignore
                        getShort(columnIndex: number /*int*/): number /*short*/
                        /**
                         * Retrieve the value of the indicated column in the current row as a short.
                         * @param columnLabel the column label
                         * @return a short representing the column value
                         * @see java.sql.ResultSet#getShort(String)
                         */
                        // @ts-ignore
                        getShort(columnLabel: java.lang.String | string): number /*short*/
                        /**
                         * Retrieve the value of the indicated column in the current row as a String.
                         * @param columnIndex the column index
                         * @return a String representing the column value
                         * @see java.sql.ResultSet#getString(int)
                         */
                        // @ts-ignore
                        getString(columnIndex: number /*int*/): string
                        /**
                         * Retrieve the value of the indicated column in the current row as a String.
                         * @param columnLabel the column label
                         * @return a String representing the column value
                         * @see java.sql.ResultSet#getString(String)
                         */
                        // @ts-ignore
                        getString(columnLabel: java.lang.String | string): string
                        /**
                         * Retrieve the value of the indicated column in the current row as a Time object.
                         * @param columnIndex the column index
                         * @return a Time object representing the column value
                         * @see java.sql.ResultSet#getTime(int)
                         */
                        // @ts-ignore
                        getTime(columnIndex: number /*int*/): java.sql.Time
                        /**
                         * Retrieve the value of the indicated column in the current row as a Time object.
                         * @param columnLabel the column label
                         * @return a Time object representing the column value
                         * @see java.sql.ResultSet#getTime(String)
                         */
                        // @ts-ignore
                        getTime(columnLabel: java.lang.String | string): java.sql.Time
                        /**
                         * Retrieve the value of the indicated column in the current row as a Time object.
                         * @param columnIndex the column index
                         * @param cal the Calendar to use in constructing the Date
                         * @return a Time object representing the column value
                         * @see java.sql.ResultSet#getTime(int, Calendar)
                         */
                        // @ts-ignore
                        getTime(columnIndex: number /*int*/, cal: java.util.Calendar): java.sql.Time
                        /**
                         * Retrieve the value of the indicated column in the current row as a Time object.
                         * @param columnLabel the column label
                         * @param cal the Calendar to use in constructing the Date
                         * @return a Time object representing the column value
                         * @see java.sql.ResultSet#getTime(String, Calendar)
                         */
                        // @ts-ignore
                        getTime(columnLabel: java.lang.String | string, cal: java.util.Calendar): java.sql.Time
                        /**
                         * Retrieve the value of the indicated column in the current row as a Timestamp object.
                         * @param columnIndex the column index
                         * @return a Timestamp object representing the column value
                         * @see java.sql.ResultSet#getTimestamp(int)
                         */
                        // @ts-ignore
                        getTimestamp(columnIndex: number /*int*/): java.sql.Timestamp
                        /**
                         * Retrieve the value of the indicated column in the current row as a Timestamp object.
                         * @param columnLabel the column label
                         * @return a Timestamp object representing the column value
                         * @see java.sql.ResultSet#getTimestamp(String)
                         */
                        // @ts-ignore
                        getTimestamp(columnLabel: java.lang.String | string): java.sql.Timestamp
                        /**
                         * Retrieve the value of the indicated column in the current row as a Timestamp object.
                         * @param columnIndex the column index
                         * @param cal the Calendar to use in constructing the Date
                         * @return a Timestamp object representing the column value
                         * @see java.sql.ResultSet#getTimestamp(int, Calendar)
                         */
                        // @ts-ignore
                        getTimestamp(columnIndex: number /*int*/, cal: java.util.Calendar): java.sql.Timestamp
                        /**
                         * Retrieve the value of the indicated column in the current row as a Timestamp object.
                         * @param columnLabel the column label
                         * @param cal the Calendar to use in constructing the Date
                         * @return a Timestamp object representing the column value
                         * @see java.sql.ResultSet#getTimestamp(String, Calendar)
                         */
                        // @ts-ignore
                        getTimestamp(columnLabel: java.lang.String | string, cal: java.util.Calendar): java.sql.Timestamp
                        /**
                         * Move the cursor to the given row number in the row set, just after the last row.
                         * @param row the number of the row where the cursor should move
                         * @return {#code true} if the cursor is on the row set, {@code false} otherwise
                         * @see java.sql.ResultSet#absolute(int)
                         */
                        // @ts-ignore
                        absolute(row: number /*int*/): boolean
                        /**
                         * Move the cursor to the end of this row set.
                         * @see java.sql.ResultSet#afterLast()
                         */
                        // @ts-ignore
                        afterLast(): void
                        /**
                         * Move the cursor to the front of this row set, just before the first row.
                         * @see java.sql.ResultSet#beforeFirst()
                         */
                        // @ts-ignore
                        beforeFirst(): void
                        /**
                         * Move the cursor to the first row of this row set.
                         * @return {#code true} if the cursor is on a valid row, {@code false} otherwise
                         * @see java.sql.ResultSet#first()
                         */
                        // @ts-ignore
                        first(): boolean
                        /**
                         * Retrieve the current row number.
                         * @return the current row number
                         * @see java.sql.ResultSet#getRow()
                         */
                        // @ts-ignore
                        getRow(): number /*int*/
                        /**
                         * Retrieve whether the cursor is after the last row of this row set.
                         * @return {#code true} if the cursor is after the last row, {@code false} otherwise
                         * @see java.sql.ResultSet#isAfterLast()
                         */
                        // @ts-ignore
                        isAfterLast(): boolean
                        /**
                         * Retrieve whether the cursor is before the first row of this row set.
                         * @return {#code true} if the cursor is before the first row, {@code false} otherwise
                         * @see java.sql.ResultSet#isBeforeFirst()
                         */
                        // @ts-ignore
                        isBeforeFirst(): boolean
                        /**
                         * Retrieve whether the cursor is on the first row of this row set.
                         * @return {#code true} if the cursor is after the first row, {@code false} otherwise
                         * @see java.sql.ResultSet#isFirst()
                         */
                        // @ts-ignore
                        isFirst(): boolean
                        /**
                         * Retrieve whether the cursor is on the last row of this row set.
                         * @return {#code true} if the cursor is after the last row, {@code false} otherwise
                         * @see java.sql.ResultSet#isLast()
                         */
                        // @ts-ignore
                        isLast(): boolean
                        /**
                         * Move the cursor to the last row of this row set.
                         * @return {#code true} if the cursor is on a valid row, {@code false} otherwise
                         * @see java.sql.ResultSet#last()
                         */
                        // @ts-ignore
                        last(): boolean
                        /**
                         * Move the cursor to the next row.
                         * @return {#code true} if the new row is valid, {@code false} if there are no more rows
                         * @see java.sql.ResultSet#next()
                         */
                        // @ts-ignore
                        next(): boolean
                        /**
                         * Move the cursor to the previous row.
                         * @return {#code true} if the new row is valid, {@code false} if it is off the row set
                         * @see java.sql.ResultSet#previous()
                         */
                        // @ts-ignore
                        previous(): boolean
                        /**
                         * Move the cursor a relative number of rows, either positive or negative.
                         * @return {#code true} if the cursor is on a row, {@code false} otherwise
                         * @see java.sql.ResultSet#relative(int)
                         */
                        // @ts-ignore
                        relative(rows: number /*int*/): boolean
                        /**
                         * Report whether the last column read had a value of SQL {@code NULL}.
                         * <p>Note that you must first call one of the getter methods and then
                         * call the {@code wasNull()} method.
                         * @return {#code true} if the most recent column retrieved was
                         *  SQL {@code NULL}, {@code false} otherwise
                         * @see java.sql.ResultSet#wasNull()
                         */
                        // @ts-ignore
                        wasNull(): boolean
                    }
                }
            }
        }
    }
}
