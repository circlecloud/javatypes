declare namespace java {
    namespace sql {
        /**
         * The output stream for writing the attributes of a user-defined
         * type back to the database.  This interface, used
         * only for custom mapping, is used by the driver, and its
         * methods are never directly invoked by a programmer.
         * <p>When an object of a class implementing the interface
         * <code>SQLData</code> is passed as an argument to an SQL statement, the
         * JDBC driver calls the method <code>SQLData.getSQLType</code> to
         * determine the  kind of SQL
         * datum being passed to the database.
         * The driver then creates an instance of <code>SQLOutput</code> and
         * passes it to the method <code>SQLData.writeSQL</code>.
         * The method <code>writeSQL</code> in turn calls the
         * appropriate <code>SQLOutput</code> <i>writer</i> methods
         * <code>writeBoolean</code>, <code>writeCharacterStream</code>, and so on)
         * to write data from the <code>SQLData</code> object to
         * the <code>SQLOutput</code> output stream as the
         * representation of an SQL user-defined type.
         * @since 1.2
         */
        // @ts-ignore
        interface SQLOutput {
            /**
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeString(x: string): void
            /**
             * Writes the next attribute to the stream as a Java boolean.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeBoolean(x: boolean): void
            /**
             * Writes the next attribute to the stream as a Java byte.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeByte(x: number /*byte*/): void
            /**
             * Writes the next attribute to the stream as a Java short.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeShort(x: number /*short*/): void
            /**
             * Writes the next attribute to the stream as a Java int.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeInt(x: number /*int*/): void
            /**
             * Writes the next attribute to the stream as a Java long.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeLong(x: number /*long*/): void
            /**
             * Writes the next attribute to the stream as a Java float.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeFloat(x: number /*float*/): void
            /**
             * Writes the next attribute to the stream as a Java double.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeDouble(x: number /*double*/): void
            /**
             * Writes the next attribute to the stream as a java.math.BigDecimal object.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeBigDecimal(x: java.math.BigDecimal): void
            /**
             * Writes the next attribute to the stream as an array of bytes.
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeBytes(x: number /*byte*/[]): void
            /**
             * Writes the next attribute to the stream as a java.sql.Date object.
             * Writes the next attribute to the stream as a <code>java.sql.Date</code> object
             * in the Java programming language.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeDate(x: java.sql.Date): void
            /**
             * Writes the next attribute to the stream as a java.sql.Time object.
             * Writes the next attribute to the stream as a <code>java.sql.Date</code> object
             * in the Java programming language.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeTime(x: java.sql.Time): void
            /**
             * Writes the next attribute to the stream as a java.sql.Timestamp object.
             * Writes the next attribute to the stream as a <code>java.sql.Date</code> object
             * in the Java programming language.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeTimestamp(x: java.sql.Timestamp): void
            /**
             * Writes the next attribute to the stream as a stream of Unicode characters.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeCharacterStream(x: java.io.Reader): void
            /**
             * Writes the next attribute to the stream as a stream of ASCII characters.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeAsciiStream(x: java.io.InputStream): void
            /**
             * Writes the next attribute to the stream as a stream of uninterpreted
             * bytes.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeBinaryStream(x: java.io.InputStream): void
            /**
             * Writes to the stream the data contained in the given
             * <code>SQLData</code> object.
             * When the <code>SQLData</code> object is <code>null</code>, this
             * method writes an SQL <code>NULL</code> to the stream.
             * Otherwise, it calls the <code>SQLData.writeSQL</code>
             * method of the given object, which
             * writes the object's attributes to the stream.
             * The implementation of the method <code>SQLData.writeSQL</code>
             * calls the appropriate <code>SQLOutput</code> writer method(s)
             * for writing each of the object's attributes in order.
             * The attributes must be read from an <code>SQLInput</code>
             * input stream and written to an <code>SQLOutput</code>
             * output stream in the same order in which they were
             * listed in the SQL definition of the user-defined type.
             * @param x the object representing data of an SQL structured or
             *  distinct type
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeObject(x: java.sql.SQLData): void
            /**
             * Writes an SQL <code>REF</code> value to the stream.
             * @param x a <code>Ref</code> object representing data of an SQL
             *  <code>REF</code> value
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeRef(x: java.sql.Ref): void
            /**
             * Writes an SQL <code>BLOB</code> value to the stream.
             * @param x a <code>Blob</code> object representing data of an SQL
             *  <code>BLOB</code> value
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeBlob(x: java.sql.Blob): void
            /**
             * Writes an SQL <code>CLOB</code> value to the stream.
             * @param x a <code>Clob</code> object representing data of an SQL
             *  <code>CLOB</code> value
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeClob(x: java.sql.Clob): void
            /**
             * Writes an SQL structured type value to the stream.
             * @param x a <code>Struct</code> object representing data of an SQL
             *  structured type
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeStruct(x: java.sql.Struct): void
            /**
             * Writes an SQL <code>ARRAY</code> value to the stream.
             * @param x an <code>Array</code> object representing data of an SQL
             *  <code>ARRAY</code> type
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.2
             */
            // @ts-ignore
            writeArray(x: java.sql.Array): void
            /**
             * Writes a SQL <code>DATALINK</code> value to the stream.
             * @param x a <code>java.net.URL</code> object representing the data
             *  of SQL DATALINK type
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            writeURL(x: java.net.URL): void
            /**
             * Writes the next attribute to the stream as a <code>String</code>
             * in the Java programming language. The driver converts this to a
             * SQL <code>NCHAR</code> or
             * <code>NVARCHAR</code> or <code>LONGNVARCHAR</code> value
             * (depending on the argument's
             * size relative to the driver's limits on <code>NVARCHAR</code> values)
             * when it sends it to the stream.
             * @param x the value to pass to the database
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            writeNString(x: string): void
            /**
             * Writes an SQL <code>NCLOB</code> value to the stream.
             * @param x a <code>NClob</code> object representing data of an SQL
             *  <code>NCLOB</code> value
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            writeNClob(x: java.sql.NClob): void
            /**
             * Writes an SQL <code>ROWID</code> value to the stream.
             * @param x a <code>RowId</code> object representing data of an SQL
             *  <code>ROWID</code> value
             * @exception SQLException if a database access error occurs
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            writeRowId(x: java.sql.RowId): void
            /**
             * Writes an SQL <code>XML</code> value to the stream.
             * @param x a <code>SQLXML</code> object representing data of an SQL
             *  <code>XML</code> value
             * @throws SQLException if a database access error occurs,
             *  the <code>java.xml.transform.Result</code>,
             *   <code>Writer</code> or <code>OutputStream</code> has not been closed for the <code>SQLXML</code> object or
             *   if there is an error processing the XML value.  The <code>getCause</code> method
             *   of the exception may provide a more detailed exception, for example, if the
             *   stream does not contain valid XML.
             * @exception SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.6
             */
            // @ts-ignore
            writeSQLXML(x: java.sql.SQLXML): void
            /**
             * Writes to the stream the data contained in the given object. The
             * object will be converted to the specified targetSqlType
             * before being sent to the stream.
             * <p>
             * When the {@code object} is {@code null}, this
             * method writes an SQL {@code NULL} to the stream.
             * <p>
             * If the object has a custom mapping (is of a class implementing the
             * interface {@code SQLData}),
             * the JDBC driver should call the method {@code SQLData.writeSQL} to
             * write it to the SQL data stream.
             * If, on the other hand, the object is of a class implementing
             * {@code Ref}, {@code Blob}, {@code Clob},  {@code NClob},
             * {@code Struct}, {@code java.net.URL},
             * or {@code Array}, the driver should pass it to the database as a
             * value of the corresponding SQL type.
             * <P>
             * The default implementation will throw {@code SQLFeatureNotSupportedException}
             * @param x the object containing the input parameter value
             * @param targetSqlType the SQL type to be sent to the database.
             * @exception SQLException if a database access error occurs  or
             *             if the Java Object specified by x is an InputStream
             *             or Reader object and the value of the scale parameter is less
             *             than zero
             * @exception SQLFeatureNotSupportedException if
             *  the JDBC driver does not support this data type
             * @see JDBCType
             * @see SQLType
             * @since 1.8
             */
            // @ts-ignore
            writeObject(x: any, targetSqlType: java.sql.SQLType): void
        }
    }
}
