declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * Class to manage context meta-data used for the configuration
                     * and execution of operations on a database table.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class TableMetaDataContext extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Set the name of the table for this context.
                         */
                        // @ts-ignore
                        public setTableName(tableName: java.lang.String | string): void
                        /**
                         * Get the name of the table for this context.
                         */
                        // @ts-ignore
                        public getTableName(): string
                        /**
                         * Set the name of the catalog for this context.
                         */
                        // @ts-ignore
                        public setCatalogName(catalogName: java.lang.String | string): void
                        /**
                         * Get the name of the catalog for this context.
                         */
                        // @ts-ignore
                        public getCatalogName(): string
                        /**
                         * Set the name of the schema for this context.
                         */
                        // @ts-ignore
                        public setSchemaName(schemaName: java.lang.String | string): void
                        /**
                         * Get the name of the schema for this context.
                         */
                        // @ts-ignore
                        public getSchemaName(): string
                        /**
                         * Specify whether we should access table column meta-data.
                         */
                        // @ts-ignore
                        public setAccessTableColumnMetaData(accessTableColumnMetaData: boolean): void
                        /**
                         * Are we accessing table meta-data?
                         */
                        // @ts-ignore
                        public isAccessTableColumnMetaData(): boolean
                        /**
                         * Specify whether we should override default for accessing synonyms.
                         */
                        // @ts-ignore
                        public setOverrideIncludeSynonymsDefault(override: boolean): void
                        /**
                         * Are we overriding include synonyms default?
                         */
                        // @ts-ignore
                        public isOverrideIncludeSynonymsDefault(): boolean
                        /**
                         * Get a List of the table column names.
                         */
                        // @ts-ignore
                        public getTableColumns(): Array<java.lang.String | string>
                        /**
                         * Process the current meta-data with the provided configuration options.
                         * @param dataSource the DataSource being used
                         * @param declaredColumns any columns that are declared
                         * @param generatedKeyNames name of generated keys
                         */
                        // @ts-ignore
                        public processMetaData(dataSource: javax.sql.DataSource, declaredColumns: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, generatedKeyNames: java.lang.String[] | string[]): void
                        /**
                         * Compare columns created from meta-data with declared columns and return a reconciled list.
                         * @param declaredColumns declared column names
                         * @param generatedKeyNames names of generated key columns
                         */
                        // @ts-ignore
                        reconcileColumnsToUse(declaredColumns: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, generatedKeyNames: java.lang.String[] | string[]): Array<java.lang.String | string>
                        /**
                         * Match the provided column names and values with the list of columns used.
                         * @param parameterSource the parameter names and values
                         */
                        // @ts-ignore
                        public matchInParameterValuesWithInsertColumns(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): Array<java.lang.Object | any>
                        /**
                         * Match the provided column names and values with the list of columns used.
                         * @param inParameters the parameter names and values
                         */
                        // @ts-ignore
                        public matchInParameterValuesWithInsertColumns(inParameters: java.util.Map<java.lang.String | string, any>): Array<java.lang.Object | any>
                        /**
                         * Build the insert string based on configuration and meta-data information.
                         * @return the insert string to be used
                         */
                        // @ts-ignore
                        public createInsertString(...generatedKeyNames: java.lang.String[] | string[]): string
                        /**
                         * Build the array of {@link java.sql.Types} based on configuration and meta-data information.
                         * @return the array of types to be used
                         */
                        // @ts-ignore
                        public createInsertTypes(): number /*int*/[]
                        /**
                         * Does this database support the JDBC 3.0 feature of retrieving generated keys:
                         * {@link java.sql.DatabaseMetaData#supportsGetGeneratedKeys()}?
                         */
                        // @ts-ignore
                        public isGetGeneratedKeysSupported(): boolean
                        /**
                         * Does this database support simple query to retrieve generated keys
                         * when the JDBC 3.0 feature is not supported:
                         * {@link java.sql.DatabaseMetaData#supportsGetGeneratedKeys()}?
                         */
                        // @ts-ignore
                        public isGetGeneratedKeysSimulated(): boolean
                        /**
                         * Does this database support a simple query to retrieve generated keys
                         * when the JDBC 3.0 feature is not supported:
                         * {@link java.sql.DatabaseMetaData#supportsGetGeneratedKeys()}?
                         * @deprecated as of 4.3.15, in favor of {#link #getSimpleQueryForGetGeneratedKey}
                         */
                        // @ts-ignore
                        public getSimulationQueryForGetGeneratedKey(tableName: java.lang.String | string, keyColumnName: java.lang.String | string): string
                        /**
                         * Does this database support a simple query to retrieve generated keys
                         * when the JDBC 3.0 feature is not supported:
                         * {@link java.sql.DatabaseMetaData#supportsGetGeneratedKeys()}?
                         */
                        // @ts-ignore
                        public getSimpleQueryForGetGeneratedKey(tableName: java.lang.String | string, keyColumnName: java.lang.String | string): string
                        /**
                         * Is a column name String array for retrieving generated keys supported:
                         * {@link java.sql.Connection#createStruct(String, Object[])}?
                         */
                        // @ts-ignore
                        public isGeneratedKeysColumnNameArraySupported(): boolean
                    }
                }
            }
        }
    }
}
