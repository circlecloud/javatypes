declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace lob {
                    /**
                     * Interface that abstracts potentially database-specific creation of large binary
                     * fields and large text fields. Does not work with {@code java.sql.Blob}
                     * and {@code java.sql.Clob} instances in the API, as some JDBC drivers
                     * do not support these types as such.
                     * <p>The LOB creation part is where {@link LobHandler} implementations usually
                     * differ. Possible strategies include usage of
                     * {@code PreparedStatement.setBinaryStream/setCharacterStream} but also
                     * {@code PreparedStatement.setBlob/setClob} with either a stream argument
                     * (requires JDBC 4.0) or {@code java.sql.Blob/Clob} wrapper objects.
                     * <p>A LobCreator represents a session for creating BLOBs: It is <i>not</i>
                     * thread-safe and needs to be instantiated for each statement execution or for
                     * each transaction. Each LobCreator needs to be closed after completion.
                     * <p>For convenient working with a PreparedStatement and a LobCreator,
                     * consider using {@link org.springframework.jdbc.core.JdbcTemplate} with an
                     * {@link org.springframework.jdbc.core.support.AbstractLobCreatingPreparedStatementCallback}
                     * implementation. See the latter's javadoc for details.
                     * @author Juergen Hoeller
                     * @since 04.12.2003
                     * @see #close()
                     * @see LobHandler#getLobCreator()
                     * @see DefaultLobHandler.DefaultLobCreator
                     * @see java.sql.PreparedStatement#setBlob
                     * @see java.sql.PreparedStatement#setClob
                     * @see java.sql.PreparedStatement#setBytes
                     * @see java.sql.PreparedStatement#setBinaryStream
                     * @see java.sql.PreparedStatement#setString
                     * @see java.sql.PreparedStatement#setAsciiStream
                     * @see java.sql.PreparedStatement#setCharacterStream
                     */
                    // @ts-ignore
                    interface LobCreator extends java.io.Closeable {
                        /**
                         * Set the given content as bytes on the given statement, using the given
                         * parameter index. Might simply invoke {@code PreparedStatement.setBytes}
                         * or create a Blob instance for it, depending on the database and driver.
                         * @param ps the PreparedStatement to the set the content on
                         * @param paramIndex the parameter index to use
                         * @param content the content as byte array, or {#code null} for SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.PreparedStatement#setBytes
                         */
                        // @ts-ignore
                        setBlobAsBytes(ps: java.sql.PreparedStatement, paramIndex: number /*int*/, content: number /*byte*/[]): void
                        /**
                         * Set the given content as binary stream on the given statement, using the given
                         * parameter index. Might simply invoke {@code PreparedStatement.setBinaryStream}
                         * or create a Blob instance for it, depending on the database and driver.
                         * @param ps the PreparedStatement to the set the content on
                         * @param paramIndex the parameter index to use
                         * @param contentStream the content as binary stream, or {#code null} for SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.PreparedStatement#setBinaryStream
                         */
                        // @ts-ignore
                        setBlobAsBinaryStream(ps: java.sql.PreparedStatement, paramIndex: number /*int*/, contentStream: java.io.InputStream, contentLength: number /*int*/): void
                        /**
                         * Set the given content as String on the given statement, using the given
                         * parameter index. Might simply invoke {@code PreparedStatement.setString}
                         * or create a Clob instance for it, depending on the database and driver.
                         * @param ps the PreparedStatement to the set the content on
                         * @param paramIndex the parameter index to use
                         * @param content the content as String, or {#code null} for SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.PreparedStatement#setBytes
                         */
                        // @ts-ignore
                        setClobAsString(ps: java.sql.PreparedStatement, paramIndex: number /*int*/, content: java.lang.String | string): void
                        /**
                         * Set the given content as ASCII stream on the given statement, using the given
                         * parameter index. Might simply invoke {@code PreparedStatement.setAsciiStream}
                         * or create a Clob instance for it, depending on the database and driver.
                         * @param ps the PreparedStatement to the set the content on
                         * @param paramIndex the parameter index to use
                         * @param asciiStream the content as ASCII stream, or {#code null} for SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.PreparedStatement#setAsciiStream
                         */
                        // @ts-ignore
                        setClobAsAsciiStream(ps: java.sql.PreparedStatement, paramIndex: number /*int*/, asciiStream: java.io.InputStream, contentLength: number /*int*/): void
                        /**
                         * Set the given content as character stream on the given statement, using the given
                         * parameter index. Might simply invoke {@code PreparedStatement.setCharacterStream}
                         * or create a Clob instance for it, depending on the database and driver.
                         * @param ps the PreparedStatement to the set the content on
                         * @param paramIndex the parameter index to use
                         * @param characterStream the content as character stream, or {#code null} for SQL NULL
                         * @throws SQLException if thrown by JDBC methods
                         * @see java.sql.PreparedStatement#setCharacterStream
                         */
                        // @ts-ignore
                        setClobAsCharacterStream(ps: java.sql.PreparedStatement, paramIndex: number /*int*/, characterStream: java.io.Reader, contentLength: number /*int*/): void
                        /**
                         * Close this LobCreator session and free its temporarily created BLOBs and CLOBs.
                         * Will not need to do anything if using PreparedStatement's standard methods,
                         * but might be necessary to free database resources if using proprietary means.
                         * <p><b>NOTE</b>: Needs to be invoked after the involved PreparedStatements have
                         * been executed or the affected O/R mapping sessions have been flushed.
                         * Otherwise, the database resources for the temporary BLOBs might stay allocated.
                         */
                        // @ts-ignore
                        close(): void
                    }
                }
            }
        }
    }
}
