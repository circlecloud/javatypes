declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace xml {
                    /**
                     * Abstraction for handling XML fields in specific databases. Its main purpose
                     * is to isolate database-specific handling of XML stored in the database.
                     * <p>JDBC 4.0 introduces the new data type {@code java.sql.SQLXML}
                     * but most databases and their drivers currently rely on database-specific
                     * data types and features.
                     * <p>Provides accessor methods for XML fields and acts as factory for
                     * {@link SqlXmlValue} instances.
                     * @author Thomas Risberg
                     * @since 2.5.5
                     * @see Jdbc4SqlXmlHandler
                     * @see java.sql.SQLXML
                     * @see java.sql.ResultSet#getSQLXML
                     * @see java.sql.PreparedStatement#setSQLXML
                     */
                    // @ts-ignore
                    interface SqlXmlHandler {
                        /**
                         * Retrieve the given column as String from the given ResultSet.
                         * <p>Might simply invoke {@code ResultSet.getString} or work with
                         * {@code SQLXML} or database-specific classes depending on the
                         * database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnName the column name to use
                         * @return the content as String, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getString
                         * @see java.sql.ResultSet#getSQLXML
                         */
                        // @ts-ignore
                        getXmlAsString(rs: java.sql.ResultSet, columnName: java.lang.String | string): string
                        /**
                         * Retrieve the given column as String from the given ResultSet.
                         * <p>Might simply invoke {@code ResultSet.getString} or work with
                         * {@code SQLXML} or database-specific classes depending on the
                         * database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnIndex the column index to use
                         * @return the content as String, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getString
                         * @see java.sql.ResultSet#getSQLXML
                         */
                        // @ts-ignore
                        getXmlAsString(rs: java.sql.ResultSet, columnIndex: number /*int*/): string
                        /**
                         * Retrieve the given column as binary stream from the given ResultSet.
                         * <p>Might simply invoke {@code ResultSet.getAsciiStream} or work with
                         * {@code SQLXML} or database-specific classes depending on the
                         * database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnName the column name to use
                         * @return the content as a binary stream, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getSQLXML
                         * @see java.sql.SQLXML#getBinaryStream
                         */
                        // @ts-ignore
                        getXmlAsBinaryStream(rs: java.sql.ResultSet, columnName: java.lang.String | string): java.io.InputStream
                        /**
                         * Retrieve the given column as binary stream from the given ResultSet.
                         * <p>Might simply invoke {@code ResultSet.getAsciiStream} or work with
                         * {@code SQLXML} or database-specific classes depending on the
                         * database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnIndex the column index to use
                         * @return the content as binary stream, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getSQLXML
                         * @see java.sql.SQLXML#getBinaryStream
                         */
                        // @ts-ignore
                        getXmlAsBinaryStream(rs: java.sql.ResultSet, columnIndex: number /*int*/): java.io.InputStream
                        /**
                         * Retrieve the given column as character stream from the given ResultSet.
                         * <p>Might simply invoke {@code ResultSet.getCharacterStream} or work with
                         * {@code SQLXML} or database-specific classes depending on the
                         * database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnName the column name to use
                         * @return the content as character stream, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getSQLXML
                         * @see java.sql.SQLXML#getCharacterStream
                         */
                        // @ts-ignore
                        getXmlAsCharacterStream(rs: java.sql.ResultSet, columnName: java.lang.String | string): java.io.Reader
                        /**
                         * Retrieve the given column as character stream from the given ResultSet.
                         * <p>Might simply invoke {@code ResultSet.getCharacterStream} or work with
                         * {@code SQLXML} or database-specific classes depending on the
                         * database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnIndex the column index to use
                         * @return the content as character stream, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getSQLXML
                         * @see java.sql.SQLXML#getCharacterStream
                         */
                        // @ts-ignore
                        getXmlAsCharacterStream(rs: java.sql.ResultSet, columnIndex: number /*int*/): java.io.Reader
                        /**
                         * Retrieve the given column as Source implemented using the specified source class
                         * from the given ResultSet.
                         * <p>Might work with {@code SQLXML} or database-specific classes depending
                         * on the database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnName the column name to use
                         * @param sourceClass the implementation class to be used
                         * @return the content as character stream, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getSQLXML
                         * @see java.sql.SQLXML#getSource
                         */
                        // @ts-ignore
                        getXmlAsSource(rs: java.sql.ResultSet, columnName: java.lang.String | string, sourceClass: java.lang.Class<any>): javax.xml.transform.Source
                        /**
                         * Retrieve the given column as Source implemented using the specified source class
                         * from the given ResultSet.
                         * <p>Might work with {@code SQLXML} or database-specific classes depending
                         * on the database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnIndex the column index to use
                         * @param sourceClass the implementation class to be used
                         * @return the content as character stream, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getSQLXML
                         * @see java.sql.SQLXML#getSource
                         */
                        // @ts-ignore
                        getXmlAsSource(rs: java.sql.ResultSet, columnIndex: number /*int*/, sourceClass: java.lang.Class<any>): javax.xml.transform.Source
                        /**
                         * Create a {@code SqlXmlValue} instance for the given XML data,
                         * as supported by the underlying JDBC driver.
                         * @param value the XML String value providing XML data
                         * @return the implementation specific instance
                         * @see SqlXmlValue
                         * @see java.sql.SQLXML#setString(String)
                         */
                        // @ts-ignore
                        newSqlXmlValue(value: java.lang.String | string): org.springframework.jdbc.support.xml.SqlXmlValue
                        /**
                         * Create a {@code SqlXmlValue} instance for the given XML data,
                         * as supported by the underlying JDBC driver.
                         * @param provider the {#code XmlBinaryStreamProvider} providing XML data
                         * @return the implementation specific instance
                         * @see SqlXmlValue
                         * @see java.sql.SQLXML#setBinaryStream()
                         */
                        // @ts-ignore
                        newSqlXmlValue(provider: org.springframework.jdbc.support.xml.XmlBinaryStreamProvider): org.springframework.jdbc.support.xml.SqlXmlValue
                        /**
                         * Create a {@code SqlXmlValue} instance for the given XML data,
                         * as supported by the underlying JDBC driver.
                         * @param provider the {#code XmlCharacterStreamProvider} providing XML data
                         * @return the implementation specific instance
                         * @see SqlXmlValue
                         * @see java.sql.SQLXML#setCharacterStream()
                         */
                        // @ts-ignore
                        newSqlXmlValue(provider: org.springframework.jdbc.support.xml.XmlCharacterStreamProvider): org.springframework.jdbc.support.xml.SqlXmlValue
                        /**
                         * Create a {@code SqlXmlValue} instance for the given XML data,
                         * as supported by the underlying JDBC driver.
                         * @param resultClass the Result implementation class to be used
                         * @param provider the {#code XmlResultProvider} that will provide the XML data
                         * @return the implementation specific instance
                         * @see SqlXmlValue
                         * @see java.sql.SQLXML#setResult(Class)
                         */
                        // @ts-ignore
                        newSqlXmlValue(resultClass: java.lang.Class<any>, provider: org.springframework.jdbc.support.xml.XmlResultProvider): org.springframework.jdbc.support.xml.SqlXmlValue
                        /**
                         * Create a {@code SqlXmlValue} instance for the given XML data,
                         * as supported by the underlying JDBC driver.
                         * @param doc the XML Document to be used
                         * @return the implementation specific instance
                         * @see SqlXmlValue
                         */
                        // @ts-ignore
                        newSqlXmlValue(doc: org.w3c.dom.Document): org.springframework.jdbc.support.xml.SqlXmlValue
                    }
                }
            }
        }
    }
}
