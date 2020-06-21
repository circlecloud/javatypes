declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * A generic implementation of the {@link CallMetaDataProvider} interface.
                     * This class can be extended to provide database specific behavior.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class GenericCallMetaDataProvider extends java.lang.Object implements org.springframework.jdbc.core.metadata.CallMetaDataProvider {
                        /**
                         * Constructor used to initialize with provided database meta-data.
                         * @param databaseMetaData meta-data to be used
                         */
                        // @ts-ignore
                        constructor(databaseMetaData: java.sql.DatabaseMetaData)
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        static readonly logger: Log
                        // @ts-ignore
                        public initializeWithMetaData(databaseMetaData: java.sql.DatabaseMetaData): void
                        // @ts-ignore
                        public initializeWithProcedureColumnMetaData(databaseMetaData: java.sql.DatabaseMetaData, catalogName: java.lang.String | string, schemaName: java.lang.String | string, procedureName: java.lang.String | string): void
                        // @ts-ignore
                        public getCallParameterMetaData(): Array<org.springframework.jdbc.core.metadata.CallParameterMetaData>
                        // @ts-ignore
                        public procedureNameToUse(procedureName: java.lang.String | string): string
                        // @ts-ignore
                        public catalogNameToUse(catalogName: java.lang.String | string): string
                        // @ts-ignore
                        public schemaNameToUse(schemaName: java.lang.String | string): string
                        // @ts-ignore
                        public metaDataCatalogNameToUse(catalogName: java.lang.String | string): string
                        // @ts-ignore
                        public metaDataSchemaNameToUse(schemaName: java.lang.String | string): string
                        // @ts-ignore
                        public parameterNameToUse(parameterName: java.lang.String | string): string
                        // @ts-ignore
                        public byPassReturnParameter(parameterName: java.lang.String | string): boolean
                        // @ts-ignore
                        public createDefaultOutParameter(parameterName: java.lang.String | string, meta: org.springframework.jdbc.core.metadata.CallParameterMetaData): org.springframework.jdbc.core.SqlParameter
                        // @ts-ignore
                        public createDefaultInOutParameter(parameterName: java.lang.String | string, meta: org.springframework.jdbc.core.metadata.CallParameterMetaData): org.springframework.jdbc.core.SqlParameter
                        // @ts-ignore
                        public createDefaultInParameter(parameterName: java.lang.String | string, meta: org.springframework.jdbc.core.metadata.CallParameterMetaData): org.springframework.jdbc.core.SqlParameter
                        // @ts-ignore
                        public getUserName(): string
                        // @ts-ignore
                        public isReturnResultSetSupported(): boolean
                        // @ts-ignore
                        public isRefCursorSupported(): boolean
                        // @ts-ignore
                        public getRefCursorSqlType(): number /*int*/
                        // @ts-ignore
                        public isProcedureColumnMetaDataUsed(): boolean
                        /**
                         * Specify whether the database supports the use of catalog name in procedure calls.
                         */
                        // @ts-ignore
                        setSupportsCatalogsInProcedureCalls(supportsCatalogsInProcedureCalls: boolean): void
                        /**
                         * Does the database support the use of catalog name in procedure calls?
                         */
                        // @ts-ignore
                        public isSupportsCatalogsInProcedureCalls(): boolean
                        /**
                         * Specify whether the database supports the use of schema name in procedure calls.
                         */
                        // @ts-ignore
                        setSupportsSchemasInProcedureCalls(supportsSchemasInProcedureCalls: boolean): void
                        /**
                         * Does the database support the use of schema name in procedure calls?
                         */
                        // @ts-ignore
                        public isSupportsSchemasInProcedureCalls(): boolean
                        /**
                         * Specify whether the database uses upper case for identifiers.
                         */
                        // @ts-ignore
                        setStoresUpperCaseIdentifiers(storesUpperCaseIdentifiers: boolean): void
                        /**
                         * Does the database use upper case for identifiers?
                         */
                        // @ts-ignore
                        isStoresUpperCaseIdentifiers(): boolean
                        /**
                         * Specify whether the database uses lower case for identifiers.
                         */
                        // @ts-ignore
                        setStoresLowerCaseIdentifiers(storesLowerCaseIdentifiers: boolean): void
                        /**
                         * Does the database use lower case for identifiers?
                         */
                        // @ts-ignore
                        isStoresLowerCaseIdentifiers(): boolean
                    }
                }
            }
        }
    }
}
