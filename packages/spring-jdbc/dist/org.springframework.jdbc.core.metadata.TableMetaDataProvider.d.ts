declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * Interface specifying the API to be implemented by a class providing table meta-data.
                     * This is intended for internal use by the Simple JDBC classes.
                     * @author Thomas Risberg
                     * @since 2.5
                     */
                    // @ts-ignore
                    interface TableMetaDataProvider {
                        /**
                         * Initialize using the database meta-data provided.
                         * @param databaseMetaData used to retrieve database specific information
                         * @throws SQLException in case of initialization failure
                         */
                        // @ts-ignore
                        initializeWithMetaData(databaseMetaData: java.sql.DatabaseMetaData): void
                        /**
                         * Initialize using provided database meta-data, table and column information.
                         * This initialization can be turned off by specifying that column meta-data should not be used.
                         * @param databaseMetaData used to retrieve database specific information
                         * @param catalogName name of catalog to use (or {#code null} if none)
                         * @param schemaName name of schema name to use (or {#code null} if none)
                         * @param tableName name of the table
                         * @throws SQLException in case of initialization failure
                         */
                        // @ts-ignore
                        initializeWithTableColumnMetaData(databaseMetaData: java.sql.DatabaseMetaData, catalogName: java.lang.String | string, schemaName: java.lang.String | string, tableName: java.lang.String | string): void
                        /**
                         * Get the table name formatted based on meta-data information.
                         * This could include altering the case.
                         */
                        // @ts-ignore
                        tableNameToUse(tableName: java.lang.String | string): string
                        /**
                         * Get the catalog name formatted based on meta-data information.
                         * This could include altering the case.
                         */
                        // @ts-ignore
                        catalogNameToUse(catalogName: java.lang.String | string): string
                        /**
                         * Get the schema name formatted based on meta-data information.
                         * This could include altering the case.
                         */
                        // @ts-ignore
                        schemaNameToUse(schemaName: java.lang.String | string): string
                        /**
                         * Provide any modification of the catalog name passed in to match the meta-data currently used.
                         * The returned value will be used for meta-data lookups.
                         * This could include altering the case used or providing a base catalog if none is provided.
                         */
                        // @ts-ignore
                        metaDataCatalogNameToUse(catalogName: java.lang.String | string): string
                        /**
                         * Provide any modification of the schema name passed in to match the meta-data currently used.
                         * The returned value will be used for meta-data lookups.
                         * This could include altering the case used or providing a base schema if none is provided.
                         */
                        // @ts-ignore
                        metaDataSchemaNameToUse(schemaName: java.lang.String | string): string
                        /**
                         * Are we using the meta-data for the table columns?
                         */
                        // @ts-ignore
                        isTableColumnMetaDataUsed(): boolean
                        /**
                         * Does this database support the JDBC 3.0 feature of retrieving generated keys:
                         * {@link java.sql.DatabaseMetaData#supportsGetGeneratedKeys()}?
                         */
                        // @ts-ignore
                        isGetGeneratedKeysSupported(): boolean
                        /**
                         * Does this database support a simple query to retrieve the generated key when
                         * the JDBC 3.0 feature of retrieving generated keys is not supported?
                         * @see #isGetGeneratedKeysSupported()
                         */
                        // @ts-ignore
                        isGetGeneratedKeysSimulated(): boolean
                        /**
                         * Get the simple query to retrieve a generated key.
                         */
                        // @ts-ignore
                        getSimpleQueryForGetGeneratedKey(tableName: java.lang.String | string, keyColumnName: java.lang.String | string): string
                        /**
                         * Does this database support a column name String array for retrieving generated keys:
                         * {@link java.sql.Connection#createStruct(String, Object[])}?
                         */
                        // @ts-ignore
                        isGeneratedKeysColumnNameArraySupported(): boolean
                        /**
                         * Get the table parameter meta-data that is currently used.
                         * @return a List of {#link TableParameterMetaData}
                         */
                        // @ts-ignore
                        getTableParameterMetaData(): Array<org.springframework.jdbc.core.metadata.TableParameterMetaData>
                    }
                }
            }
        }
    }
}
