declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace lob {
                    namespace DefaultLobHandler {
                        /**
                         * Default LobCreator implementation as an inner class.
                         * Can be subclassed in DefaultLobHandler extensions.
                         */
                        // @ts-ignore
                        class DefaultLobCreator extends java.lang.Object implements org.springframework.jdbc.support.lob.LobCreator {
                            // @ts-ignore
                            constructor()
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
}
