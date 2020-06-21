declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * Postgres-specific implementation for the {@link CallMetaDataProvider} interface.
                     * This class is intended for internal use by the Simple JDBC classes.
                     * @author Thomas Risberg
                     * @since 2.5
                     */
                    // @ts-ignore
                    class PostgresCallMetaDataProvider extends org.springframework.jdbc.core.metadata.GenericCallMetaDataProvider {
                        // @ts-ignore
                        constructor(databaseMetaData: java.sql.DatabaseMetaData)
                        // @ts-ignore
                        public isReturnResultSetSupported(): boolean
                        // @ts-ignore
                        public isRefCursorSupported(): boolean
                        // @ts-ignore
                        public getRefCursorSqlType(): number /*int*/
                        // @ts-ignore
                        public metaDataSchemaNameToUse(schemaName: java.lang.String | string): string
                        // @ts-ignore
                        public createDefaultOutParameter(parameterName: java.lang.String | string, meta: org.springframework.jdbc.core.metadata.CallParameterMetaData): org.springframework.jdbc.core.SqlParameter
                        // @ts-ignore
                        public byPassReturnParameter(parameterName: java.lang.String | string): boolean
                    }
                }
            }
        }
    }
}
