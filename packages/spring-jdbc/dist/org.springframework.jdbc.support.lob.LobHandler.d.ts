declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace lob {
                    /**
                     * Abstraction for handling large binary fields and large text fields in
                     * specific databases, no matter if represented as simple types or Large OBjects.
                     * <p>Provides accessor methods for BLOBs and CLOBs, and acts as factory for
                     * LobCreator instances, to be used as sessions for creating BLOBs or CLOBs.
                     * LobCreators are typically instantiated for each statement execution or for
                     * each transaction; they are not thread-safe because they might track
                     * allocated database resources in order to free them after execution.
                     * <p>Most databases/drivers should be able to work with {@link DefaultLobHandler},
                     * which by default delegates to JDBC's direct accessor methods, avoiding the
                     * {@code java.sql.Blob} and {@code java.sql.Clob} API completely.
                     * {@link DefaultLobHandler} can also be configured to access LOBs using
                     * {@code PreparedStatement.setBlob/setClob} (e.g. for PostgreSQL), through
                     * setting the {@link DefaultLobHandler#setWrapAsLob "wrapAsLob"} property.
                     * <p>Of course, you need to declare different field types for each database.
                     * In Oracle, any binary content needs to go into a BLOB, and all character content
                     * beyond 4000 bytes needs to go into a CLOB. In MySQL, there is no notion of a
                     * CLOB type but rather a LONGTEXT type that behaves like a VARCHAR. For complete
                     * portability, use a LobHandler for fields that might typically require LOBs on
                     * some database because of the field size (take Oracle's numbers as a guideline).
                     * <p><b>Summarizing the recommended options (for actual LOB fields):</b>
                     * <ul>
                     * <li><b>JDBC 4.0 driver (including Oracle 11g driver):</b> Use {@link DefaultLobHandler},
                     * potentially with {@code streamAsLob=true} if your database driver requires that
                     * hint when populating a LOB field. Fall back to {@code createTemporaryLob=true}
                     * if you happen to run into LOB size limitations with your (Oracle) database setup.
                     * <li><b>Oracle 10g driver:</b> Use {@link DefaultLobHandler} with standard setup.
                     * On Oracle 10.1, set the "SetBigStringTryClob" connection property; as of Oracle 10.2,
                     * DefaultLobHandler should work with standard setup out of the box.
                     * <li><b>PostgreSQL:</b> Configure {@link DefaultLobHandler} with {@code wrapAsLob=true},
                     * and use that LobHandler to access OID columns (but not BYTEA) in your database tables.
                     * <li>For all other database drivers (and for non-LOB fields that might potentially
                     * turn into LOBs on some databases): Simply use a plain {@link DefaultLobHandler}.
                     * </ul>
                     * @author Juergen Hoeller
                     * @since 23.12.2003
                     * @see DefaultLobHandler
                     * @see java.sql.ResultSet#getBlob
                     * @see java.sql.ResultSet#getClob
                     * @see java.sql.ResultSet#getBytes
                     * @see java.sql.ResultSet#getBinaryStream
                     * @see java.sql.ResultSet#getString
                     * @see java.sql.ResultSet#getAsciiStream
                     * @see java.sql.ResultSet#getCharacterStream
                     */
                    // @ts-ignore
                    interface LobHandler {
                        /**
                         * Retrieve the given column as bytes from the given ResultSet.
                         * Might simply invoke {@code ResultSet.getBytes} or work with
                         * {@code ResultSet.getBlob}, depending on the database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnName the column name to use
                         * @return the content as byte array, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getBytes
                         */
                        // @ts-ignore
                        getBlobAsBytes(rs: java.sql.ResultSet, columnName: java.lang.String | string): number /*byte*/[]
                        /**
                         * Retrieve the given column as bytes from the given ResultSet.
                         * Might simply invoke {@code ResultSet.getBytes} or work with
                         * {@code ResultSet.getBlob}, depending on the database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnIndex the column index to use
                         * @return the content as byte array, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getBytes
                         */
                        // @ts-ignore
                        getBlobAsBytes(rs: java.sql.ResultSet, columnIndex: number /*int*/): number /*byte*/[]
                        /**
                         * Retrieve the given column as binary stream from the given ResultSet.
                         * Might simply invoke {@code ResultSet.getBinaryStream} or work with
                         * {@code ResultSet.getBlob}, depending on the database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnName the column name to use
                         * @return the content as binary stream, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getBinaryStream
                         */
                        // @ts-ignore
                        getBlobAsBinaryStream(rs: java.sql.ResultSet, columnName: java.lang.String | string): java.io.InputStream
                        /**
                         * Retrieve the given column as binary stream from the given ResultSet.
                         * Might simply invoke {@code ResultSet.getBinaryStream} or work with
                         * {@code ResultSet.getBlob}, depending on the database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnIndex the column index to use
                         * @return the content as binary stream, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getBinaryStream
                         */
                        // @ts-ignore
                        getBlobAsBinaryStream(rs: java.sql.ResultSet, columnIndex: number /*int*/): java.io.InputStream
                        /**
                         * Retrieve the given column as String from the given ResultSet.
                         * Might simply invoke {@code ResultSet.getString} or work with
                         * {@code ResultSet.getClob}, depending on the database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnName the column name to use
                         * @return the content as String, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getString
                         */
                        // @ts-ignore
                        getClobAsString(rs: java.sql.ResultSet, columnName: java.lang.String | string): string
                        /**
                         * Retrieve the given column as String from the given ResultSet.
                         * Might simply invoke {@code ResultSet.getString} or work with
                         * {@code ResultSet.getClob}, depending on the database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnIndex the column index to use
                         * @return the content as String, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getString
                         */
                        // @ts-ignore
                        getClobAsString(rs: java.sql.ResultSet, columnIndex: number /*int*/): string
                        /**
                         * Retrieve the given column as ASCII stream from the given ResultSet.
                         * Might simply invoke {@code ResultSet.getAsciiStream} or work with
                         * {@code ResultSet.getClob}, depending on the database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnName the column name to use
                         * @return the content as ASCII stream, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getAsciiStream
                         */
                        // @ts-ignore
                        getClobAsAsciiStream(rs: java.sql.ResultSet, columnName: java.lang.String | string): java.io.InputStream
                        /**
                         * Retrieve the given column as ASCII stream from the given ResultSet.
                         * Might simply invoke {@code ResultSet.getAsciiStream} or work with
                         * {@code ResultSet.getClob}, depending on the database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnIndex the column index to use
                         * @return the content as ASCII stream, or {#code null} in case of SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getAsciiStream
                         */
                        // @ts-ignore
                        getClobAsAsciiStream(rs: java.sql.ResultSet, columnIndex: number /*int*/): java.io.InputStream
                        /**
                         * Retrieve the given column as character stream from the given ResultSet.
                         * Might simply invoke {@code ResultSet.getCharacterStream} or work with
                         * {@code ResultSet.getClob}, depending on the database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnName the column name to use
                         * @return the content as character stream
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getCharacterStream
                         */
                        // @ts-ignore
                        getClobAsCharacterStream(rs: java.sql.ResultSet, columnName: java.lang.String | string): java.io.Reader
                        /**
                         * Retrieve the given column as character stream from the given ResultSet.
                         * Might simply invoke {@code ResultSet.getCharacterStream} or work with
                         * {@code ResultSet.getClob}, depending on the database and driver.
                         * @param rs the ResultSet to retrieve the content from
                         * @param columnIndex the column index to use
                         * @return the content as character stream
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.ResultSet#getCharacterStream
                         */
                        // @ts-ignore
                        getClobAsCharacterStream(rs: java.sql.ResultSet, columnIndex: number /*int*/): java.io.Reader
                        /**
                         * Create a new {@link LobCreator} instance, i.e. a session for creating BLOBs
                         * and CLOBs. Needs to be closed after the created LOBs are not needed anymore -
                         * typically after statement execution or transaction completion.
                         * @return the new LobCreator instance
                         * @see LobCreator#close()
                         */
                        // @ts-ignore
                        getLobCreator(): org.springframework.jdbc.support.lob.LobCreator
                    }
                }
            }
        }
    }
}
