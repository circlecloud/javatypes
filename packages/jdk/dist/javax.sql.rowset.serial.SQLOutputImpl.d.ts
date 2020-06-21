declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace serial {
                /**
                 * The output stream for writing the attributes of a
                 * custom-mapped user-defined type (UDT) back to the database.
                 * The driver uses this interface internally, and its
                 * methods are never directly invoked by an application programmer.
                 * <p>
                 * When an application calls the
                 * method <code>PreparedStatement.setObject</code>, the driver
                 * checks to see whether the value to be written is a UDT with
                 * a custom mapping.  If it is, there will be an entry in a
                 * type map containing the <code>Class</code> object for the
                 * class that implements <code>SQLData</code> for this UDT.
                 * If the value to be written is an instance of <code>SQLData</code>,
                 * the driver will create an instance of <code>SQLOutputImpl</code>
                 * and pass it to the method <code>SQLData.writeSQL</code>.
                 * The method <code>writeSQL</code> in turn calls the
                 * appropriate <code>SQLOutputImpl.writeXXX</code> methods
                 * to write data from the <code>SQLData</code> object to
                 * the <code>SQLOutputImpl</code> output stream as the
                 * representation of an SQL user-defined type.
                 */
                // @ts-ignore
                class SQLOutputImpl extends java.lang.Object implements java.sql.SQLOutput {
                    /**
                     * Creates a new <code>SQLOutputImpl</code> object
                     * initialized with the given vector of attributes and
                     * type map.  The driver will use the type map to determine
                     * which <code>SQLData.writeSQL</code> method to invoke.
                     * This method will then call the appropriate
                     * <code>SQLOutputImpl</code> writer methods in order and
                     * thereby write the attributes to the new output stream.
                     * @param attributes a <code>Vector</code> object containing the attributes of
                     *         the UDT to be mapped to one or more objects in the Java
                     *         programming language
                     * @param map a <code>java.util.Map</code> object containing zero or
                     *         more entries, with each entry consisting of 1) a <code>String</code>
                     *         giving the fully qualified name of a UDT and 2) the
                     *         <code>Class</code> object for the <code>SQLData</code> implementation
                     *         that defines how the UDT is to be mapped
                     * @throws SQLException if the <code>attributes</code> or the <code>map</code>
                     *         is a <code>null</code> value
                     */
                    // @ts-ignore
                    constructor(attributes: java.util.Vector<any>, map: java.util.Map<java.lang.String | string, any>)
                    /**
                     * Writes a <code>String</code> in the Java programming language
                     * to this <code>SQLOutputImpl</code> object. The driver converts
                     * it to an SQL <code>CHAR</code>, <code>VARCHAR</code>, or
                     * <code>LONGVARCHAR</code> before returning it to the database.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeString(x: java.lang.String | string): void
                    /**
                     * Writes a <code>boolean</code> in the Java programming language
                     * to this <code>SQLOutputImpl</code> object. The driver converts
                     * it to an SQL <code>BIT</code> before returning it to the database.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeBoolean(x: boolean): void
                    /**
                     * Writes a <code>byte</code> in the Java programming language
                     * to this <code>SQLOutputImpl</code> object. The driver converts
                     * it to an SQL <code>BIT</code> before returning it to the database.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeByte(x: number /*byte*/): void
                    /**
                     * Writes a <code>short</code> in the Java programming language
                     * to this <code>SQLOutputImpl</code> object. The driver converts
                     * it to an SQL <code>SMALLINT</code> before returning it to the database.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeShort(x: number /*short*/): void
                    /**
                     * Writes an <code>int</code> in the Java programming language
                     * to this <code>SQLOutputImpl</code> object. The driver converts
                     * it to an SQL <code>INTEGER</code> before returning it to the database.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeInt(x: number /*int*/): void
                    /**
                     * Writes a <code>long</code> in the Java programming language
                     * to this <code>SQLOutputImpl</code> object. The driver converts
                     * it to an SQL <code>BIGINT</code> before returning it to the database.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeLong(x: number /*long*/): void
                    /**
                     * Writes a <code>float</code> in the Java programming language
                     * to this <code>SQLOutputImpl</code> object. The driver converts
                     * it to an SQL <code>REAL</code> before returning it to the database.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeFloat(x: number /*float*/): void
                    /**
                     * Writes a <code>double</code> in the Java programming language
                     * to this <code>SQLOutputImpl</code> object. The driver converts
                     * it to an SQL <code>DOUBLE</code> before returning it to the database.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeDouble(x: number /*double*/): void
                    /**
                     * Writes a <code>java.math.BigDecimal</code> object in the Java programming
                     * language to this <code>SQLOutputImpl</code> object. The driver converts
                     * it to an SQL <code>NUMERIC</code> before returning it to the database.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeBigDecimal(x: java.math.BigDecimal): void
                    /**
                     * Writes an array of <code>bytes</code> in the Java programming language
                     * to this <code>SQLOutputImpl</code> object. The driver converts
                     * it to an SQL <code>VARBINARY</code> or <code>LONGVARBINARY</code>
                     * before returning it to the database.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeBytes(x: number /*byte*/[]): void
                    /**
                     * Writes a <code>java.sql.Date</code> object in the Java programming
                     * language to this <code>SQLOutputImpl</code> object. The driver converts
                     * it to an SQL <code>DATE</code> before returning it to the database.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeDate(x: java.sql.Date): void
                    /**
                     * Writes a <code>java.sql.Time</code> object in the Java programming
                     * language to this <code>SQLOutputImpl</code> object. The driver converts
                     * it to an SQL <code>TIME</code> before returning it to the database.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeTime(x: java.sql.Time): void
                    /**
                     * Writes a <code>java.sql.Timestamp</code> object in the Java programming
                     * language to this <code>SQLOutputImpl</code> object. The driver converts
                     * it to an SQL <code>TIMESTAMP</code> before returning it to the database.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeTimestamp(x: java.sql.Timestamp): void
                    /**
                     * Writes a stream of Unicode characters to this
                     * <code>SQLOutputImpl</code> object. The driver will do any necessary
                     * conversion from Unicode to the database <code>CHAR</code> format.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeCharacterStream(x: java.io.Reader): void
                    /**
                     * Writes a stream of ASCII characters to this
                     * <code>SQLOutputImpl</code> object. The driver will do any necessary
                     * conversion from ASCII to the database <code>CHAR</code> format.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeAsciiStream(x: java.io.InputStream): void
                    /**
                     * Writes a stream of uninterpreted bytes to this <code>SQLOutputImpl</code>
                     * object.
                     * @param x the value to pass to the database
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeBinaryStream(x: java.io.InputStream): void
                    /**
                     * Writes to the stream the data contained in the given
                     * <code>SQLData</code> object.
                     * When the <code>SQLData</code> object is <code>null</code>, this
                     * method writes an SQL <code>NULL</code> to the stream.
                     * Otherwise, it calls the <code>SQLData.writeSQL</code>
                     * method of the given object, which
                     * writes the object's attributes to the stream.
                     * <P>
                     * The implementation of the method <code>SQLData.writeSQ</code>
                     * calls the appropriate <code>SQLOutputImpl.writeXXX</code> method(s)
                     * for writing each of the object's attributes in order.
                     * The attributes must be read from an <code>SQLInput</code>
                     * input stream and written to an <code>SQLOutputImpl</code>
                     * output stream in the same order in which they were
                     * listed in the SQL definition of the user-defined type.
                     * @param x the object representing data of an SQL structured or
                     *           distinct type
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeObject(x: java.sql.SQLData): void
                    /**
                     * Writes a <code>Ref</code> object in the Java programming language
                     * to this <code>SQLOutputImpl</code> object.  The driver converts
                     * it to a serializable <code>SerialRef</code> SQL <code>REF</code> value
                     * before returning it to the database.
                     * @param x an object representing an SQL <code>REF</code> value
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeRef(x: java.sql.Ref): void
                    /**
                     * Writes a <code>Blob</code> object in the Java programming language
                     * to this <code>SQLOutputImpl</code> object.  The driver converts
                     * it to a serializable <code>SerialBlob</code> SQL <code>BLOB</code> value
                     * before returning it to the database.
                     * @param x an object representing an SQL <code>BLOB</code> value
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeBlob(x: java.sql.Blob): void
                    /**
                     * Writes a <code>Clob</code> object in the Java programming language
                     * to this <code>SQLOutputImpl</code> object.  The driver converts
                     * it to a serializable <code>SerialClob</code> SQL <code>CLOB</code> value
                     * before returning it to the database.
                     * @param x an object representing an SQL <code>CLOB</code> value
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeClob(x: java.sql.Clob): void
                    /**
                     * Writes a <code>Struct</code> object in the Java
                     * programming language to this <code>SQLOutputImpl</code>
                     * object. The driver converts this value to an SQL structured type
                     * before returning it to the database.
                     * <P>
                     * This method should be used when an SQL structured type has been
                     * mapped to a <code>Struct</code> object in the Java programming
                     * language (the standard mapping).  The method
                     * <code>writeObject</code> should be used if an SQL structured type
                     * has been custom mapped to a class in the Java programming language.
                     * @param x an object representing the attributes of an SQL structured type
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeStruct(x: java.sql.Struct): void
                    /**
                     * Writes an <code>Array</code> object in the Java
                     * programming language to this <code>SQLOutputImpl</code>
                     * object. The driver converts this value to a serializable
                     * <code>SerialArray</code> SQL <code>ARRAY</code>
                     * value before returning it to the database.
                     * @param x an object representing an SQL <code>ARRAY</code> value
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeArray(x: java.sql.Array): void
                    /**
                     * Writes an <code>java.sql.Type.DATALINK</code> object in the Java
                     * programming language to this <code>SQLOutputImpl</code> object. The
                     * driver converts this value to a serializable <code>SerialDatalink</code>
                     * SQL <code>DATALINK</code> value before return it to the database.
                     * @param url an object representing a SQL <code>DATALINK</code> value
                     * @throws SQLException if the <code>SQLOutputImpl</code> object is in
                     *         use by a <code>SQLData</code> object attempting to write the attribute
                     *         values of a UDT to the database.
                     */
                    // @ts-ignore
                    public writeURL(url: java.net.URL): void
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
                     * @since 1.6
                     */
                    // @ts-ignore
                    public writeNString(x: java.lang.String | string): void
                    /**
                     * Writes an SQL <code>NCLOB</code> value to the stream.
                     * @param x a <code>NClob</code> object representing data of an SQL
                     *  <code>NCLOB</code> value
                     * @exception SQLException if a database access error occurs
                     * @since 1.6
                     */
                    // @ts-ignore
                    public writeNClob(x: java.sql.NClob): void
                    /**
                     * Writes an SQL <code>ROWID</code> value to the stream.
                     * @param x a <code>RowId</code> object representing data of an SQL
                     *  <code>ROWID</code> value
                     * @exception SQLException if a database access error occurs
                     * @since 1.6
                     */
                    // @ts-ignore
                    public writeRowId(x: java.sql.RowId): void
                    /**
                     * Writes an SQL <code>XML</code> value to the stream.
                     * @param x a <code>SQLXML</code> object representing data of an SQL
                     *  <code>XML</code> value
                     * @exception SQLException if a database access error occurs
                     * @since 1.6
                     */
                    // @ts-ignore
                    public writeSQLXML(x: java.sql.SQLXML): void
                }
            }
        }
    }
}
