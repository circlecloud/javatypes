declare namespace javax {
    namespace sql {
        namespace rowset {
            /**
             * Provides implementations for the methods that set and get
             * metadata information about a <code>RowSet</code> object's columns.
             * A <code>RowSetMetaDataImpl</code> object keeps track of the
             * number of columns in the rowset and maintains an internal array
             * of column attributes for each column.
             * <P>
             * A <code>RowSet</code> object creates a <code>RowSetMetaDataImpl</code>
             * object internally in order to set and retrieve information about
             * its columns.
             * <P>
             * NOTE: All metadata in a <code>RowSetMetaDataImpl</code> object
             * should be considered as unavailable until the <code>RowSet</code> object
             * that it describes is populated.
             * Therefore, any <code>RowSetMetaDataImpl</code> method that retrieves information
             * is defined as having unspecified behavior when it is called
             * before the <code>RowSet</code> object contains data.
             * @since 1.5
             */
            // @ts-ignore
            class RowSetMetaDataImpl extends java.lang.Object implements javax.sql.RowSetMetaData, java.io.Serializable {
                // @ts-ignore
                constructor()
                /**
                 * Sets to the given number the number of columns in the <code>RowSet</code>
                 * object for which this <code>RowSetMetaDataImpl</code> object was created.
                 * @param columnCount an <code>int</code> giving the number of columns in the
                 *         <code>RowSet</code> object
                 * @throws SQLException if the given number is equal to or less than zero
                 */
                // @ts-ignore
                setColumnCount(columnCount: number /*int*/): void
                /**
                 * Sets whether the designated column is automatically
                 * numbered, thus read-only, to the given <code>boolean</code>
                 * value.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns
                 *         in the rowset, inclusive
                 * @param property <code>true</code> if the given column is
                 *                  automatically incremented; <code>false</code>
                 *                  otherwise
                 * @throws SQLException if a database access error occurs or
                 *          the given index is out of bounds
                 */
                // @ts-ignore
                setAutoIncrement(columnIndex: number /*int*/, property: boolean): void
                /**
                 * Sets whether the name of the designated column is case sensitive to
                 * the given <code>boolean</code>.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns
                 *         in the rowset, inclusive
                 * @param property <code>true</code> to indicate that the column
                 *                  name is case sensitive; <code>false</code> otherwise
                 * @throws SQLException if a database access error occurs or
                 *          the given column number is out of bounds
                 */
                // @ts-ignore
                setCaseSensitive(columnIndex: number /*int*/, property: boolean): void
                /**
                 * Sets whether a value stored in the designated column can be used
                 * in a <code>WHERE</code> clause to the given <code>boolean</code> value.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *                     must be between <code>1</code> and the number
                 *                     of columns in the rowset, inclusive
                 * @param property <code>true</code> to indicate that a column
                 *                  value can be used in a <code>WHERE</code> clause;
                 *                  <code>false</code> otherwise
                 * @throws SQLException if a database access error occurs or
                 *          the given column number is out of bounds
                 */
                // @ts-ignore
                setSearchable(columnIndex: number /*int*/, property: boolean): void
                /**
                 * Sets whether a value stored in the designated column is a cash
                 * value to the given <code>boolean</code>.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *  must be between <code>1</code> and the number of columns,
                 *  inclusive between <code>1</code> and the number of columns, inclusive
                 * @param property true if the value is a cash value; false otherwise.
                 * @throws SQLException if a database access error occurs
                 *          or the given column number is out of bounds
                 */
                // @ts-ignore
                setCurrency(columnIndex: number /*int*/, property: boolean): void
                /**
                 * Sets whether a value stored in the designated column can be set
                 * to <code>NULL</code> to the given constant from the interface
                 * <code>ResultSetMetaData</code>.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @param property one of the following <code>ResultSetMetaData</code> constants:
                 *                  <code>columnNoNulls</code>,
                 *                  <code>columnNullable</code>, or
                 *                  <code>columnNullableUnknown</code>
                 * @throws SQLException if a database access error occurs,
                 *          the given column number is out of bounds, or the value supplied
                 *          for the <i>property</i> parameter is not one of the following
                 *          constants:
                 *            <code>ResultSetMetaData.columnNoNulls</code>,
                 *            <code>ResultSetMetaData.columnNullable</code>, or
                 *            <code>ResultSetMetaData.columnNullableUnknown</code>
                 */
                // @ts-ignore
                setNullable(columnIndex: number /*int*/, property: number /*int*/): void
                /**
                 * Sets whether a value stored in the designated column is a signed
                 * number to the given <code>boolean</code>.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @param property <code>true</code> to indicate that a column
                 *                  value is a signed number;
                 *                  <code>false</code> to indicate that it is not
                 * @throws SQLException if a database access error occurs
                 *          or the given column number is out of bounds
                 */
                // @ts-ignore
                setSigned(columnIndex: number /*int*/, property: boolean): void
                /**
                 * Sets the normal maximum number of chars in the designated column
                 * to the given number.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @param size the maximum size of the column in chars; must be
                 *         <code>0</code> or more
                 * @throws SQLException if a database access error occurs,
                 *         the given column number is out of bounds, or <i>size</i> is
                 *         less than <code>0</code>
                 */
                // @ts-ignore
                setColumnDisplaySize(columnIndex: number /*int*/, size: number /*int*/): void
                /**
                 * Sets the suggested column label for use in printouts and
                 * displays, if any, to <i>label</i>. If <i>label</i> is
                 * <code>null</code>, the column label is set to an empty string
                 * ("").
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @param label the column label to be used in printouts and displays; if the
                 *         column label is <code>null</code>, an empty <code>String</code> is
                 *         set
                 * @throws SQLException if a database access error occurs
                 *          or the given column index is out of bounds
                 */
                // @ts-ignore
                setColumnLabel(columnIndex: number /*int*/, label: string): void
                /**
                 * Sets the column name of the designated column to the given name.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *       must be between <code>1</code> and the number of columns, inclusive
                 * @param columnName a <code>String</code> object indicating the column name;
                 *       if the given name is <code>null</code>, an empty <code>String</code>
                 *       is set
                 * @throws SQLException if a database access error occurs or the given column
                 *       index is out of bounds
                 */
                // @ts-ignore
                setColumnName(columnIndex: number /*int*/, columnName: string): void
                /**
                 * Sets the designated column's table's schema name, if any, to
                 * <i>schemaName</i>. If <i>schemaName</i> is <code>null</code>,
                 * the schema name is set to an empty string ("").
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @param schemaName the schema name for the table from which a value in the
                 *         designated column was derived; may be an empty <code>String</code>
                 *         or <code>null</code>
                 * @throws SQLException if a database access error occurs
                 *         or the given column number is out of bounds
                 */
                // @ts-ignore
                setSchemaName(columnIndex: number /*int*/, schemaName: string): void
                /**
                 * Sets the total number of decimal digits in a value stored in the
                 * designated column to the given number.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @param precision the total number of decimal digits; must be <code>0</code>
                 *         or more
                 * @throws SQLException if a database access error occurs,
                 *          <i>columnIndex</i> is out of bounds, or <i>precision</i>
                 *          is less than <code>0</code>
                 */
                // @ts-ignore
                setPrecision(columnIndex: number /*int*/, precision: number /*int*/): void
                /**
                 * Sets the number of digits to the right of the decimal point in a value
                 * stored in the designated column to the given number.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @param scale the number of digits to the right of the decimal point; must be
                 *         zero or greater
                 * @throws SQLException if a database access error occurs,
                 *          <i>columnIndex</i> is out of bounds, or <i>scale</i>
                 *          is less than <code>0</code>
                 */
                // @ts-ignore
                setScale(columnIndex: number /*int*/, scale: number /*int*/): void
                /**
                 * Sets the name of the table from which the designated column
                 * was derived to the given table name.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @param tableName the column's table name; may be <code>null</code> or an
                 *         empty string
                 * @throws SQLException if a database access error occurs
                 *          or the given column number is out of bounds
                 */
                // @ts-ignore
                setTableName(columnIndex: number /*int*/, tableName: string): void
                /**
                 * Sets the catalog name of the table from which the designated
                 * column was derived to <i>catalogName</i>. If <i>catalogName</i>
                 * is <code>null</code>, the catalog name is set to an empty string.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @param catalogName the column's table's catalog name; if the catalogName
                 *         is <code>null</code>, an empty <code>String</code> is set
                 * @throws SQLException if a database access error occurs
                 *          or the given column number is out of bounds
                 */
                // @ts-ignore
                setCatalogName(columnIndex: number /*int*/, catalogName: string): void
                /**
                 * Sets the SQL type code for values stored in the designated column
                 * to the given type code from the class <code>java.sql.Types</code>.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @param SQLType the designated column's SQL type, which must be one of the
                 *                 constants in the class <code>java.sql.Types</code>
                 * @throws SQLException if a database access error occurs,
                 *          the given column number is out of bounds, or the column type
                 *          specified is not one of the constants in
                 *          <code>java.sql.Types</code>
                 * @see java.sql.Types
                 */
                // @ts-ignore
                setColumnType(columnIndex: number /*int*/, SQLType: number /*int*/): void
                /**
                 * Sets the type name used by the data source for values stored in the
                 * designated column to the given type name.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *  must be between <code>1</code> and the number of columns, inclusive
                 * @param typeName the data source-specific type name; if <i>typeName</i> is
                 *         <code>null</code>, an empty <code>String</code> is set
                 * @throws SQLException if a database access error occurs
                 *          or the given column number is out of bounds
                 */
                // @ts-ignore
                setColumnTypeName(columnIndex: number /*int*/, typeName: string): void
                /**
                 * Retrieves the number of columns in the <code>RowSet</code> object
                 * for which this <code>RowSetMetaDataImpl</code> object was created.
                 * @return the number of columns
                 * @throws SQLException if an error occurs determining the column count
                 */
                // @ts-ignore
                getColumnCount(): int
                /**
                 * Retrieves whether a value stored in the designated column is
                 * automatically numbered, and thus readonly.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *          must be between <code>1</code> and the number of columns, inclusive
                 * @return <code>true</code> if the column is automatically numbered;
                 *          <code>false</code> otherwise
                 * @throws SQLException if a database access error occurs
                 *  or the given column number is out of bounds
                 */
                // @ts-ignore
                isAutoIncrement(columnIndex: number /*int*/): boolean
                /**
                 * Indicates whether the case of the designated column's name
                 * matters.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *  must be between <code>1</code> and the number of columns, inclusive
                 * @return <code>true</code> if the column name is case sensitive;
                 *           <code>false</code> otherwise
                 * @throws SQLException if a database access error occurs
                 *  or the given column number is out of bounds
                 */
                // @ts-ignore
                isCaseSensitive(columnIndex: number /*int*/): boolean
                /**
                 * Indicates whether a value stored in the designated column
                 * can be used in a <code>WHERE</code> clause.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @return <code>true</code> if a value in the designated column can be used in a
                 *          <code>WHERE</code> clause; <code>false</code> otherwise
                 * @throws SQLException if a database access error occurs
                 *          or the given column number is out of bounds
                 */
                // @ts-ignore
                isSearchable(columnIndex: number /*int*/): boolean
                /**
                 * Indicates whether a value stored in the designated column
                 * is a cash value.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @return <code>true</code> if a value in the designated column is a cash value;
                 *          <code>false</code> otherwise
                 * @throws SQLException if a database access error occurs
                 *          or the given column number is out of bounds
                 */
                // @ts-ignore
                isCurrency(columnIndex: number /*int*/): boolean
                /**
                 * Retrieves a constant indicating whether it is possible
                 * to store a <code>NULL</code> value in the designated column.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @return a constant from the <code>ResultSetMetaData</code> interface;
                 *          either <code>columnNoNulls</code>,
                 *          <code>columnNullable</code>, or
                 *          <code>columnNullableUnknown</code>
                 * @throws SQLException if a database access error occurs
                 *          or the given column number is out of bounds
                 */
                // @ts-ignore
                isNullable(columnIndex: number /*int*/): int
                /**
                 * Indicates whether a value stored in the designated column is
                 * a signed number.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @return <code>true</code> if a value in the designated column is a signed
                 *          number; <code>false</code> otherwise
                 * @throws SQLException if a database access error occurs
                 *          or the given column number is out of bounds
                 */
                // @ts-ignore
                isSigned(columnIndex: number /*int*/): boolean
                /**
                 * Retrieves the normal maximum width in chars of the designated column.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @return the maximum number of chars that can be displayed in the designated
                 *          column
                 * @throws SQLException if a database access error occurs
                 *          or the given column number is out of bounds
                 */
                // @ts-ignore
                getColumnDisplaySize(columnIndex: number /*int*/): int
                /**
                 * Retrieves the suggested column title for the designated
                 * column for use in printouts and displays.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @return the suggested column name to use in printouts and displays
                 * @throws SQLException if a database access error occurs
                 *          or the given column number is out of bounds
                 */
                // @ts-ignore
                getColumnLabel(columnIndex: number /*int*/): java.lang.String
                /**
                 * Retrieves the name of the designated column.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *  must be between <code>1</code> and the number of columns, inclusive
                 * @return the column name of the designated column
                 * @throws SQLException if a database access error occurs
                 *  or the given column number is out of bounds
                 */
                // @ts-ignore
                getColumnName(columnIndex: number /*int*/): java.lang.String
                /**
                 * Retrieves the schema name of the table from which the value
                 * in the designated column was derived.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *          must be between <code>1</code> and the number of columns,
                 *          inclusive
                 * @return the schema name or an empty <code>String</code> if no schema
                 *          name is available
                 * @throws SQLException if a database access error occurs
                 *  or the given column number is out of bounds
                 */
                // @ts-ignore
                getSchemaName(columnIndex: number /*int*/): java.lang.String
                /**
                 * Retrieves the total number of digits for values stored in
                 * the designated column.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *  must be between <code>1</code> and the number of columns, inclusive
                 * @return the precision for values stored in the designated column
                 * @throws SQLException if a database access error occurs
                 *  or the given column number is out of bounds
                 */
                // @ts-ignore
                getPrecision(columnIndex: number /*int*/): int
                /**
                 * Retrieves the number of digits to the right of the decimal point
                 * for values stored in the designated column.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *  must be between <code>1</code> and the number of columns, inclusive
                 * @return the scale for values stored in the designated column
                 * @throws SQLException if a database access error occurs
                 *  or the given column number is out of bounds
                 */
                // @ts-ignore
                getScale(columnIndex: number /*int*/): int
                /**
                 * Retrieves the name of the table from which the value
                 * in the designated column was derived.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *  must be between <code>1</code> and the number of columns, inclusive
                 * @return the table name or an empty <code>String</code> if no table name
                 *          is available
                 * @throws SQLException if a database access error occurs
                 *  or the given column number is out of bounds
                 */
                // @ts-ignore
                getTableName(columnIndex: number /*int*/): java.lang.String
                /**
                 * Retrieves the catalog name of the table from which the value
                 * in the designated column was derived.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *  must be between <code>1</code> and the number of columns, inclusive
                 * @return the catalog name of the column's table or an empty
                 *          <code>String</code> if no catalog name is available
                 * @throws SQLException if a database access error occurs
                 *  or the given column number is out of bounds
                 */
                // @ts-ignore
                getCatalogName(columnIndex: number /*int*/): java.lang.String
                /**
                 * Retrieves the type code (one of the <code>java.sql.Types</code>
                 * constants) for the SQL type of the value stored in the
                 * designated column.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *  must be between <code>1</code> and the number of columns, inclusive
                 * @return an <code>int</code> representing the SQL type of values
                 *  stored in the designated column
                 * @throws SQLException if a database access error occurs
                 *  or the given column number is out of bounds
                 * @see java.sql.Types
                 */
                // @ts-ignore
                getColumnType(columnIndex: number /*int*/): int
                /**
                 * Retrieves the DBMS-specific type name for values stored in the
                 * designated column.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *  must be between <code>1</code> and the number of columns, inclusive
                 * @return the type name used by the data source
                 * @throws SQLException if a database access error occurs
                 *  or the given column number is out of bounds
                 */
                // @ts-ignore
                getColumnTypeName(columnIndex: number /*int*/): java.lang.String
                /**
                 * Indicates whether the designated column is definitely
                 * not writable, thus readonly.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *  must be between <code>1</code> and the number of columns, inclusive
                 * @return <code>true</code> if this <code>RowSet</code> object is read-Only
                 *  and thus not updatable; <code>false</code> otherwise
                 * @throws SQLException if a database access error occurs
                 *  or the given column number is out of bounds
                 */
                // @ts-ignore
                isReadOnly(columnIndex: number /*int*/): boolean
                /**
                 * Indicates whether it is possible for a write operation on
                 * the designated column to succeed. A return value of
                 * <code>true</code> means that a write operation may or may
                 * not succeed.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *          must be between <code>1</code> and the number of columns, inclusive
                 * @return <code>true</code> if a write operation on the designated column may
                 *           will succeed; <code>false</code> otherwise
                 * @throws SQLException if a database access error occurs
                 *          or the given column number is out of bounds
                 */
                // @ts-ignore
                isWritable(columnIndex: number /*int*/): boolean
                /**
                 * Indicates whether a write operation on the designated column
                 * will definitely succeed.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *  must be between <code>1</code> and the number of columns, inclusive
                 * @return <code>true</code> if a write operation on the designated column will
                 *          definitely succeed; <code>false</code> otherwise
                 * @throws SQLException if a database access error occurs
                 *  or the given column number is out of bounds
                 */
                // @ts-ignore
                isDefinitelyWritable(columnIndex: number /*int*/): boolean
                /**
                 * Retrieves the fully-qualified name of the class in the Java
                 * programming language to which a value in the designated column
                 * will be mapped.  For example, if the value is an <code>int</code>,
                 * the class name returned by this method will be
                 * <code>java.lang.Integer</code>.
                 * <P>
                 * If the value in the designated column has a custom mapping,
                 * this method returns the name of the class that implements
                 * <code>SQLData</code>. When the method <code>ResultSet.getObject</code>
                 * is called to retrieve a value from the designated column, it will
                 * create an instance of this class or one of its subclasses.
                 * @param columnIndex the first column is 1, the second is 2, and so on;
                 *         must be between <code>1</code> and the number of columns, inclusive
                 * @return the fully-qualified name of the class in the Java programming
                 *         language that would be used by the method <code>RowSet.getObject</code> to
                 *         retrieve the value in the specified column. This is the class
                 *         name used for custom mapping when there is a custom mapping.
                 * @throws SQLException if a database access error occurs
                 *          or the given column number is out of bounds
                 */
                // @ts-ignore
                getColumnClassName(columnIndex: number /*int*/): java.lang.String
                /**
                 * Returns an object that implements the given interface to allow access to non-standard methods,
                 * or standard methods not exposed by the proxy.
                 * The result may be either the object found to implement the interface or a proxy for that object.
                 * If the receiver implements the interface then that is the object. If the receiver is a wrapper
                 * and the wrapped object implements the interface then that is the object. Otherwise the object is
                 * the result of calling <code>unwrap</code> recursively on the wrapped object. If the receiver is not a
                 * wrapper and does not implement the interface, then an <code>SQLException</code> is thrown.
                 * @param iface A Class defining an interface that the result must implement.
                 * @return an object that implements the interface. May be a proxy for the actual implementing object.
                 * @throws java.sql.SQLException If no object found that implements the interface
                 * @since 1.6
                 */
                // @ts-ignore
                unwrap<T>(iface: java.lang.Class<T>): T
                /**
                 * Returns true if this either implements the interface argument or is directly or indirectly a wrapper
                 * for an object that does. Returns false otherwise. If this implements the interface then return true,
                 * else if this is a wrapper then return the result of recursively calling <code>isWrapperFor</code> on the wrapped
                 * object. If this does not implement the interface and is not a wrapper, return false.
                 * This method should be implemented as a low-cost operation compared to <code>unwrap</code> so that
                 * callers can use this method to avoid expensive <code>unwrap</code> calls that may fail. If this method
                 * returns true then calling <code>unwrap</code> with the same argument should succeed.
                 * @param interfaces a Class defining an interface.
                 * @return true if this implements the interface or directly or indirectly wraps an object that does.
                 * @throws java.sql.SQLException  if an error occurs while determining whether this is a wrapper
                 *  for an object with the given interface.
                 * @since 1.6
                 */
                // @ts-ignore
                isWrapperFor(interfaces: java.lang.Class<any>): boolean
            }
        }
    }
}
