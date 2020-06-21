declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace support {
                    /**
                     * Object to represent an SQL BLOB/CLOB value parameter. BLOBs can either be an
                     * InputStream or a byte array. CLOBs can be in the form of a Reader, InputStream
                     * or String. Each CLOB/BLOB value will be stored together with its length.
                     * The type is based on which constructor is used. Objects of this class are
                     * immutable except for the LobCreator reference. Use them and discard them.
                     * <p>This class holds a reference to a LocCreator that must be closed after the
                     * update has completed. This is done via a call to the closeLobCreator method.
                     * All handling of the LobCreator is done by the framework classes that use it -
                     * no need to set or close the LobCreator for end users of this class.
                     * <p>A usage example:
                     * <pre class="code">JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);  // reusable object
                     * LobHandler lobHandler = new DefaultLobHandler();  // reusable object
                     * jdbcTemplate.update(
                     * "INSERT INTO imagedb (image_name, content, description) VALUES (?, ?, ?)",
                     * new Object[] {
                     * name,
                     * new SqlLobValue(contentStream, contentLength, lobHandler),
                     * new SqlLobValue(description, lobHandler)
                     * },
                     * new int[] {Types.VARCHAR, Types.BLOB, Types.CLOB});
                     * </pre>
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 1.1
                     * @see org.springframework.jdbc.support.lob.LobHandler
                     * @see org.springframework.jdbc.support.lob.LobCreator
                     * @see org.springframework.jdbc.core.JdbcTemplate#update(String, Object[], int[])
                     * @see org.springframework.jdbc.object.SqlUpdate#update(Object[])
                     * @see org.springframework.jdbc.object.StoredProcedure#execute(java.util.Map)
                     */
                    // @ts-ignore
                    class SqlLobValue extends java.lang.Object implements org.springframework.jdbc.core.DisposableSqlTypeValue {
                        /**
                         * Create a new BLOB value with the given byte array,
                         * using a DefaultLobHandler.
                         * @param bytes the byte array containing the BLOB value
                         * @see org.springframework.jdbc.support.lob.DefaultLobHandler
                         */
                        // @ts-ignore
                        constructor(bytes: number /*byte*/[])
                        /**
                         * Create a new BLOB value with the given byte array.
                         * @param bytes the byte array containing the BLOB value
                         * @param lobHandler the LobHandler to be used
                         */
                        // @ts-ignore
                        constructor(bytes: number /*byte*/[], lobHandler: org.springframework.jdbc.support.lob.LobHandler)
                        /**
                         * Create a new CLOB value with the given content string,
                         * using a DefaultLobHandler.
                         * @param content the String containing the CLOB value
                         * @see org.springframework.jdbc.support.lob.DefaultLobHandler
                         */
                        // @ts-ignore
                        constructor(content: java.lang.String | string)
                        /**
                         * Create a new CLOB value with the given content string.
                         * @param content the String containing the CLOB value
                         * @param lobHandler the LobHandler to be used
                         */
                        // @ts-ignore
                        constructor(content: java.lang.String | string, lobHandler: org.springframework.jdbc.support.lob.LobHandler)
                        /**
                         * Create a new BLOB/CLOB value with the given stream,
                         * using a DefaultLobHandler.
                         * @param stream the stream containing the LOB value
                         * @param length the length of the LOB value
                         * @see org.springframework.jdbc.support.lob.DefaultLobHandler
                         */
                        // @ts-ignore
                        constructor(stream: java.io.InputStream, length: number /*int*/)
                        /**
                         * Create a new BLOB/CLOB value with the given stream.
                         * @param stream the stream containing the LOB value
                         * @param length the length of the LOB value
                         * @param lobHandler the LobHandler to be used
                         */
                        // @ts-ignore
                        constructor(stream: java.io.InputStream, length: number /*int*/, lobHandler: org.springframework.jdbc.support.lob.LobHandler)
                        /**
                         * Create a new CLOB value with the given character stream,
                         * using a DefaultLobHandler.
                         * @param reader the character stream containing the CLOB value
                         * @param length the length of the CLOB value
                         * @see org.springframework.jdbc.support.lob.DefaultLobHandler
                         */
                        // @ts-ignore
                        constructor(reader: java.io.Reader, length: number /*int*/)
                        /**
                         * Create a new CLOB value with the given character stream.
                         * @param reader the character stream containing the CLOB value
                         * @param length the length of the CLOB value
                         * @param lobHandler the LobHandler to be used
                         */
                        // @ts-ignore
                        constructor(reader: java.io.Reader, length: number /*int*/, lobHandler: org.springframework.jdbc.support.lob.LobHandler)
                        /**
                         * Set the specified content via the LobCreator.
                         */
                        // @ts-ignore
                        public setTypeValue(ps: java.sql.PreparedStatement, paramIndex: number /*int*/, sqlType: number /*int*/, typeName: java.lang.String | string): void
                        /**
                         * Close the LobCreator, if any.
                         */
                        // @ts-ignore
                        public cleanup(): void
                    }
                }
            }
        }
    }
}
