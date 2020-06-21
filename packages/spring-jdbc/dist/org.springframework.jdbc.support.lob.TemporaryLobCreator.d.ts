declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace lob {
                    /**
                     * {@link LobCreator} implementation based on temporary LOBs,
                     * using JDBC 4.0's {@link java.sql.Connection#createBlob()} /
                     * {@link java.sql.Connection#createClob()} mechanism.
                     * <p>Used by DefaultLobHandler's {@link DefaultLobHandler#setCreateTemporaryLob} mode.
                     * Can also be used directly to reuse the tracking and freeing of temporary LOBs.
                     * @author Juergen Hoeller
                     * @since 3.2.2
                     * @see DefaultLobHandler#setCreateTemporaryLob
                     * @see java.sql.Connection#createBlob()
                     * @see java.sql.Connection#createClob()
                     */
                    // @ts-ignore
                    class TemporaryLobCreator extends java.lang.Object implements org.springframework.jdbc.support.lob.LobCreator {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        static readonly logger: Log
                        // @ts-ignore
                        public setBlobAsBytes(ps: java.sql.PreparedStatement, paramIndex: number /*int*/, content: number /*byte*/[]): void
                        // @ts-ignore
                        public setBlobAsBinaryStream(ps: java.sql.PreparedStatement, paramIndex: number /*int*/, binaryStream: java.io.InputStream, contentLength: number /*int*/): void
                        // @ts-ignore
                        public setClobAsString(ps: java.sql.PreparedStatement, paramIndex: number /*int*/, content: java.lang.String | string): void
                        // @ts-ignore
                        public setClobAsAsciiStream(ps: java.sql.PreparedStatement, paramIndex: number /*int*/, asciiStream: java.io.InputStream, contentLength: number /*int*/): void
                        // @ts-ignore
                        public setClobAsCharacterStream(ps: java.sql.PreparedStatement, paramIndex: number /*int*/, characterStream: java.io.Reader, contentLength: number /*int*/): void
                        // @ts-ignore
                        public close(): void
                    }
                }
            }
        }
    }
}
