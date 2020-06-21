declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace xml {
                    /**
                     * Default implementation of the {@link SqlXmlHandler} interface.
                     * Provides database-specific implementations for storing and
                     * retrieving XML documents to and from fields in a database,
                     * relying on the JDBC 4.0 {@code java.sql.SQLXML} facility.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.5.6
                     * @see java.sql.SQLXML
                     * @see java.sql.ResultSet#getSQLXML
                     * @see java.sql.PreparedStatement#setSQLXML
                     */
                    // @ts-ignore
                    class Jdbc4SqlXmlHandler extends java.lang.Object implements org.springframework.jdbc.support.xml.SqlXmlHandler {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getXmlAsString(rs: java.sql.ResultSet, columnName: java.lang.String | string): string
                        // @ts-ignore
                        public getXmlAsString(rs: java.sql.ResultSet, columnIndex: number /*int*/): string
                        // @ts-ignore
                        public getXmlAsBinaryStream(rs: java.sql.ResultSet, columnName: java.lang.String | string): java.io.InputStream
                        // @ts-ignore
                        public getXmlAsBinaryStream(rs: java.sql.ResultSet, columnIndex: number /*int*/): java.io.InputStream
                        // @ts-ignore
                        public getXmlAsCharacterStream(rs: java.sql.ResultSet, columnName: java.lang.String | string): java.io.Reader
                        // @ts-ignore
                        public getXmlAsCharacterStream(rs: java.sql.ResultSet, columnIndex: number /*int*/): java.io.Reader
                        // @ts-ignore
                        public getXmlAsSource(rs: java.sql.ResultSet, columnName: java.lang.String | string, sourceClass: java.lang.Class<any>): javax.xml.transform.Source
                        // @ts-ignore
                        public getXmlAsSource(rs: java.sql.ResultSet, columnIndex: number /*int*/, sourceClass: java.lang.Class<any>): javax.xml.transform.Source
                        // @ts-ignore
                        public newSqlXmlValue(value: java.lang.String | string): org.springframework.jdbc.support.xml.SqlXmlValue
                        // @ts-ignore
                        public newSqlXmlValue(provider: org.springframework.jdbc.support.xml.XmlBinaryStreamProvider): org.springframework.jdbc.support.xml.SqlXmlValue
                        // @ts-ignore
                        public newSqlXmlValue(provider: org.springframework.jdbc.support.xml.XmlCharacterStreamProvider): org.springframework.jdbc.support.xml.SqlXmlValue
                        // @ts-ignore
                        public newSqlXmlValue(resultClass: java.lang.Class<any>, provider: org.springframework.jdbc.support.xml.XmlResultProvider): org.springframework.jdbc.support.xml.SqlXmlValue
                        // @ts-ignore
                        public newSqlXmlValue(document: org.w3c.dom.Document): org.springframework.jdbc.support.xml.SqlXmlValue
                    }
                }
            }
        }
    }
}
