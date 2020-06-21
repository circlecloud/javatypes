declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace lob {
                    /**
                     * Default implementation of the {@link LobHandler} interface.
                     * Invokes the direct accessor methods that {@code java.sql.ResultSet}
                     * and {@code java.sql.PreparedStatement} offer.
                     * <p>By default, incoming streams are going to be passed to the appropriate
                     * {@code setBinary/Ascii/CharacterStream} method on the JDBC driver's
                     * {@link PreparedStatement}. If the specified content length is negative,
                     * this handler will use the JDBC 4.0 variants of the set-stream methods
                     * without a length parameter; otherwise, it will pass the specified length
                     * on to the driver.
                     * <p>This LobHandler should work for any JDBC driver that is JDBC compliant
                     * in terms of the spec's suggestions regarding simple BLOB and CLOB handling.
                     * This does not apply to Oracle 9i's drivers at all; as of Oracle 10g,
                     * it does work but may still come with LOB size limitations. Consider using
                     * recent Oracle drivers even when working against an older database server.
                     * See the {@link LobHandler} javadoc for the full set of recommendations.
                     * <p>Some JDBC drivers require values with a BLOB/CLOB target column to be
                     * explicitly set through the JDBC {@code setBlob} / {@code setClob} API:
                     * for example, PostgreSQL's driver. Switch the {@link #setWrapAsLob "wrapAsLob"}
                     * property to "true" when operating against such a driver.
                     * <p>On JDBC 4.0, this LobHandler also supports streaming the BLOB/CLOB content
                     * via the {@code setBlob} / {@code setClob} variants that take a stream
                     * argument directly. Consider switching the {@link #setStreamAsLob "streamAsLob"}
                     * property to "true" when operating against a fully compliant JDBC 4.0 driver.
                     * <p>Finally, this LobHandler also supports the creation of temporary BLOB/CLOB
                     * objects. Consider switching the {@link #setCreateTemporaryLob "createTemporaryLob"}
                     * property to "true" when "streamAsLob" happens to run into LOB size limitations.
                     * <p>See the {@link LobHandler} interface javadoc for a summary of recommendations.
                     * @author Juergen Hoeller
                     * @since 04.12.2003
                     * @see java.sql.ResultSet#getBytes
                     * @see java.sql.ResultSet#getBinaryStream
                     * @see java.sql.ResultSet#getString
                     * @see java.sql.ResultSet#getAsciiStream
                     * @see java.sql.ResultSet#getCharacterStream
                     * @see java.sql.PreparedStatement#setBytes
                     * @see java.sql.PreparedStatement#setBinaryStream
                     * @see java.sql.PreparedStatement#setString
                     * @see java.sql.PreparedStatement#setAsciiStream
                     * @see java.sql.PreparedStatement#setCharacterStream
                     */
                    // @ts-ignore
                    class DefaultLobHandler extends org.springframework.jdbc.support.lob.AbstractLobHandler {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Specify whether to submit a byte array / String to the JDBC driver
                         * wrapped in a JDBC Blob / Clob object, using the JDBC {@code setBlob} /
                         * {@code setClob} method with a Blob / Clob argument.
                         * <p>Default is "false", using the common JDBC 2.0 {@code setBinaryStream}
                         * / {@code setCharacterStream} method for setting the content. Switch this
                         * to "true" for explicit Blob / Clob wrapping against JDBC drivers that
                         * are known to require such wrapping (e.g. PostgreSQL's for access to OID
                         * columns, whereas BYTEA columns need to be accessed the standard way).
                         * <p>This setting affects byte array / String arguments as well as stream
                         * arguments, unless {@link #setStreamAsLob "streamAsLob"} overrides this
                         * handling to use JDBC 4.0's new explicit streaming support (if available).
                         * @see java.sql.PreparedStatement#setBlob(int, java.sql.Blob)
                         * @see java.sql.PreparedStatement#setClob(int, java.sql.Clob)
                         */
                        // @ts-ignore
                        public setWrapAsLob(wrapAsLob: boolean): void
                        /**
                         * Specify whether to submit a binary stream / character stream to the JDBC
                         * driver as explicit LOB content, using the JDBC 4.0 {@code setBlob} /
                         * {@code setClob} method with a stream argument.
                         * <p>Default is "false", using the common JDBC 2.0 {@code setBinaryStream}
                         * / {@code setCharacterStream} method for setting the content.
                         * Switch this to "true" for explicit JDBC 4.0 streaming, provided that your
                         * JDBC driver actually supports those JDBC 4.0 operations (e.g. Derby's).
                         * <p>This setting affects stream arguments as well as byte array / String
                         * arguments, requiring JDBC 4.0 support. For supporting LOB content against
                         * JDBC 3.0, check out the {@link #setWrapAsLob "wrapAsLob"} setting.
                         * @see java.sql.PreparedStatement#setBlob(int, java.io.InputStream, long)
                         * @see java.sql.PreparedStatement#setClob(int, java.io.Reader, long)
                         */
                        // @ts-ignore
                        public setStreamAsLob(streamAsLob: boolean): void
                        /**
                         * Specify whether to copy a byte array / String into a temporary JDBC
                         * Blob / Clob object created through the JDBC 4.0 {@code createBlob} /
                         * {@code createClob} methods.
                         * <p>Default is "false", using the common JDBC 2.0 {@code setBinaryStream}
                         * / {@code setCharacterStream} method for setting the content. Switch this
                         * to "true" for explicit Blob / Clob creation using JDBC 4.0.
                         * <p>This setting affects stream arguments as well as byte array / String
                         * arguments, requiring JDBC 4.0 support. For supporting LOB content against
                         * JDBC 3.0, check out the {@link #setWrapAsLob "wrapAsLob"} setting.
                         * @see java.sql.Connection#createBlob()
                         * @see java.sql.Connection#createClob()
                         */
                        // @ts-ignore
                        public setCreateTemporaryLob(createTemporaryLob: boolean): void
                        // @ts-ignore
                        public getBlobAsBytes(rs: java.sql.ResultSet, columnIndex: number /*int*/): number /*byte*/[]
                        // @ts-ignore
                        public getBlobAsBinaryStream(rs: java.sql.ResultSet, columnIndex: number /*int*/): java.io.InputStream
                        // @ts-ignore
                        public getClobAsString(rs: java.sql.ResultSet, columnIndex: number /*int*/): string
                        // @ts-ignore
                        public getClobAsAsciiStream(rs: java.sql.ResultSet, columnIndex: number /*int*/): java.io.InputStream
                        // @ts-ignore
                        public getClobAsCharacterStream(rs: java.sql.ResultSet, columnIndex: number /*int*/): java.io.Reader
                        // @ts-ignore
                        public getLobCreator(): org.springframework.jdbc.support.lob.LobCreator
                    }
                }
            }
        }
    }
}
