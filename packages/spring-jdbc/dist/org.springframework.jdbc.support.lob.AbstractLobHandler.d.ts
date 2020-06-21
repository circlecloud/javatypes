declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace lob {
                    /**
                     * Abstract base class for {@link LobHandler} implementations.
                     * <p>Implements all accessor methods for column names through a column lookup
                     * and delegating to the corresponding accessor that takes a column index.
                     * @author Juergen Hoeller
                     * @since 1.2
                     * @see java.sql.ResultSet#findColumn
                     */
                    // @ts-ignore
                    abstract class AbstractLobHandler extends java.lang.Object implements org.springframework.jdbc.support.lob.LobHandler {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getBlobAsBytes(rs: java.sql.ResultSet, columnName: java.lang.String | string): number /*byte*/[]
                        // @ts-ignore
                        public getBlobAsBinaryStream(rs: java.sql.ResultSet, columnName: java.lang.String | string): java.io.InputStream
                        // @ts-ignore
                        public getClobAsString(rs: java.sql.ResultSet, columnName: java.lang.String | string): string
                        // @ts-ignore
                        public getClobAsAsciiStream(rs: java.sql.ResultSet, columnName: java.lang.String | string): java.io.InputStream
                        // @ts-ignore
                        public getClobAsCharacterStream(rs: java.sql.ResultSet, columnName: java.lang.String | string): java.io.Reader
                    }
                }
            }
        }
    }
}
