declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace rowset {
                    /**
                     * The default implementation of Spring's {@link SqlRowSetMetaData} interface, wrapping a
                     * {@link java.sql.ResultSetMetaData} instance, catching any {@link SQLException SQLExceptions}
                     * and translating them to a corresponding Spring {@link InvalidResultSetAccessException}.
                     * <p>Used by {@link ResultSetWrappingSqlRowSet}.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 1.2
                     * @see ResultSetWrappingSqlRowSet#getMetaData()
                     */
                    // @ts-ignore
                    class ResultSetWrappingSqlRowSetMetaData extends java.lang.Object implements org.springframework.jdbc.support.rowset.SqlRowSetMetaData {
                        /**
                         * Create a new ResultSetWrappingSqlRowSetMetaData object
                         * for the given ResultSetMetaData instance.
                         * @param resultSetMetaData a disconnected ResultSetMetaData instance
                         *  to wrap (usually a {#code javax.sql.RowSetMetaData} instance)
                         * @see java.sql.ResultSet#getMetaData
                         * @see javax.sql.RowSetMetaData
                         * @see ResultSetWrappingSqlRowSet#getMetaData
                         */
                        // @ts-ignore
                        constructor(resultSetMetaData: java.sql.ResultSetMetaData)
                        // @ts-ignore
                        public getCatalogName(column: number /*int*/): string
                        // @ts-ignore
                        public getColumnClassName(column: number /*int*/): string
                        // @ts-ignore
                        public getColumnCount(): number /*int*/
                        // @ts-ignore
                        public getColumnNames(): string[]
                        // @ts-ignore
                        public getColumnDisplaySize(column: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getColumnLabel(column: number /*int*/): string
                        // @ts-ignore
                        public getColumnName(column: number /*int*/): string
                        // @ts-ignore
                        public getColumnType(column: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getColumnTypeName(column: number /*int*/): string
                        // @ts-ignore
                        public getPrecision(column: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getScale(column: number /*int*/): number /*int*/
                        // @ts-ignore
                        public getSchemaName(column: number /*int*/): string
                        // @ts-ignore
                        public getTableName(column: number /*int*/): string
                        // @ts-ignore
                        public isCaseSensitive(column: number /*int*/): boolean
                        // @ts-ignore
                        public isCurrency(column: number /*int*/): boolean
                        // @ts-ignore
                        public isSigned(column: number /*int*/): boolean
                    }
                }
            }
        }
    }
}
