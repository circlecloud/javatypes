declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * A generic implementation of the {@link TableMetaDataProvider} interface
                     * which should provide enough features for all supported databases.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class GenericTableMetaDataProvider extends java.lang.Object implements org.springframework.jdbc.core.metadata.TableMetaDataProvider {
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
                        public setStoresUpperCaseIdentifiers(storesUpperCaseIdentifiers: boolean): void
                        // @ts-ignore
                        public isStoresUpperCaseIdentifiers(): boolean
                        // @ts-ignore
                        public setStoresLowerCaseIdentifiers(storesLowerCaseIdentifiers: boolean): void
                        // @ts-ignore
                        public isStoresLowerCaseIdentifiers(): boolean
                        // @ts-ignore
                        public isTableColumnMetaDataUsed(): boolean
                        // @ts-ignore
                        public getTableParameterMetaData(): Array<org.springframework.jdbc.core.metadata.TableParameterMetaData>
                        // @ts-ignore
                        public isGetGeneratedKeysSupported(): boolean
                        // @ts-ignore
                        public isGetGeneratedKeysSimulated(): boolean
                        // @ts-ignore
                        public getSimpleQueryForGetGeneratedKey(tableName: java.lang.String | string, keyColumnName: java.lang.String | string): string
                        // @ts-ignore
                        public setGetGeneratedKeysSupported(getGeneratedKeysSupported: boolean): void
                        // @ts-ignore
                        public setGeneratedKeysColumnNameArraySupported(generatedKeysColumnNameArraySupported: boolean): void
                        // @ts-ignore
                        public isGeneratedKeysColumnNameArraySupported(): boolean
                        // @ts-ignore
                        public initializeWithMetaData(databaseMetaData: java.sql.DatabaseMetaData): void
                        // @ts-ignore
                        public initializeWithTableColumnMetaData(databaseMetaData: java.sql.DatabaseMetaData, catalogName: java.lang.String | string, schemaName: java.lang.String | string, tableName: java.lang.String | string): void
                        // @ts-ignore
                        public tableNameToUse(tableName: java.lang.String | string): string
                        // @ts-ignore
                        public catalogNameToUse(catalogName: java.lang.String | string): string
                        // @ts-ignore
                        public schemaNameToUse(schemaName: java.lang.String | string): string
                        // @ts-ignore
                        public metaDataCatalogNameToUse(catalogName: java.lang.String | string): string
                        // @ts-ignore
                        public metaDataSchemaNameToUse(schemaName: java.lang.String | string): string
                        /**
                         * Provide access to default schema for subclasses.
                         */
                        // @ts-ignore
                        getDefaultSchema(): string
                        /**
                         * Provide access to version info for subclasses.
                         */
                        // @ts-ignore
                        getDatabaseVersion(): string
                    }
                }
            }
        }
    }
}
