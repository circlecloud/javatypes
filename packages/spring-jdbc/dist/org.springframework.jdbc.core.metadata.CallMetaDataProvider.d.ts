declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * Interface specifying the API to be implemented by a class providing call meta-data.
                     * <p>This is intended for internal use by Spring's
                     * {@link org.springframework.jdbc.core.simple.SimpleJdbcCall}.
                     * @author Thomas Risberg
                     * @since 2.5
                     */
                    // @ts-ignore
                    interface CallMetaDataProvider {
                        /**
                         * Initialize using the provided DatabaseMetData.
                         * @param databaseMetaData used to retrieve database specific information
                         * @throws SQLException in case of initialization failure
                         */
                        // @ts-ignore
                        initializeWithMetaData(databaseMetaData: java.sql.DatabaseMetaData): void
                        /**
                         * Initialize the database specific management of procedure column meta-data.
                         * This is only called for databases that are supported. This initialization
                         * can be turned off by specifying that column meta-data should not be used.
                         * @param databaseMetaData used to retrieve database specific information
                         * @param catalogName name of catalog to use (or {#code null} if none)
                         * @param schemaName name of schema name to use (or {#code null} if none)
                         * @param procedureName name of the stored procedure
                         * @throws SQLException in case of initialization failure
                         * @see org.springframework.jdbc.core.simple.SimpleJdbcCall#withoutProcedureColumnMetaDataAccess()
                         */
                        // @ts-ignore
                        initializeWithProcedureColumnMetaData(databaseMetaData: java.sql.DatabaseMetaData, catalogName: java.lang.String | string, schemaName: java.lang.String | string, procedureName: java.lang.String | string): void
                        /**
                         * Provide any modification of the procedure name passed in to match the meta-data currently used.
                         * This could include altering the case.
                         */
                        // @ts-ignore
                        procedureNameToUse(procedureName: java.lang.String | string): string
                        /**
                         * Provide any modification of the catalog name passed in to match the meta-data currently used.
                         * This could include altering the case.
                         */
                        // @ts-ignore
                        catalogNameToUse(catalogName: java.lang.String | string): string
                        /**
                         * Provide any modification of the schema name passed in to match the meta-data currently used.
                         * This could include altering the case.
                         */
                        // @ts-ignore
                        schemaNameToUse(schemaName: java.lang.String | string): string
                        /**
                         * Provide any modification of the catalog name passed in to match the meta-data currently used.
                         * The returned value will be used for meta-data lookups. This could include altering the case
                         * used or providing a base catalog if none is provided.
                         */
                        // @ts-ignore
                        metaDataCatalogNameToUse(catalogName: java.lang.String | string): string
                        /**
                         * Provide any modification of the schema name passed in to match the meta-data currently used.
                         * The returned value will be used for meta-data lookups. This could include altering the case
                         * used or providing a base schema if none is provided.
                         */
                        // @ts-ignore
                        metaDataSchemaNameToUse(schemaName: java.lang.String | string): string
                        /**
                         * Provide any modification of the column name passed in to match the meta-data currently used.
                         * This could include altering the case.
                         * @param parameterName name of the parameter of column
                         */
                        // @ts-ignore
                        parameterNameToUse(parameterName: java.lang.String | string): string
                        /**
                         * Create a default out parameter based on the provided meta-data.
                         * This is used when no explicit parameter declaration has been made.
                         * @param parameterName the name of the parameter
                         * @param meta meta-data used for this call
                         * @return the configured SqlOutParameter
                         */
                        // @ts-ignore
                        createDefaultOutParameter(parameterName: java.lang.String | string, meta: org.springframework.jdbc.core.metadata.CallParameterMetaData): org.springframework.jdbc.core.SqlParameter
                        /**
                         * Create a default in/out parameter based on the provided meta-data.
                         * This is used when no explicit parameter declaration has been made.
                         * @param parameterName the name of the parameter
                         * @param meta meta-data used for this call
                         * @return the configured SqlInOutParameter
                         */
                        // @ts-ignore
                        createDefaultInOutParameter(parameterName: java.lang.String | string, meta: org.springframework.jdbc.core.metadata.CallParameterMetaData): org.springframework.jdbc.core.SqlParameter
                        /**
                         * Create a default in parameter based on the provided meta-data.
                         * This is used when no explicit parameter declaration has been made.
                         * @param parameterName the name of the parameter
                         * @param meta meta-data used for this call
                         * @return the configured SqlParameter
                         */
                        // @ts-ignore
                        createDefaultInParameter(parameterName: java.lang.String | string, meta: org.springframework.jdbc.core.metadata.CallParameterMetaData): org.springframework.jdbc.core.SqlParameter
                        /**
                         * Get the name of the current user. Useful for meta-data lookups etc.
                         * @return current user name from database connection
                         */
                        // @ts-ignore
                        getUserName(): string
                        /**
                         * Does this database support returning ResultSets that should be retrieved with the JDBC call:
                         * {@link java.sql.Statement#getResultSet()}?
                         */
                        // @ts-ignore
                        isReturnResultSetSupported(): boolean
                        /**
                         * Does this database support returning ResultSets as ref cursors to be retrieved with
                         * {@link java.sql.CallableStatement#getObject(int)} for the specified column.
                         */
                        // @ts-ignore
                        isRefCursorSupported(): boolean
                        /**
                         * Get the {@link java.sql.Types} type for columns that return ResultSets as ref cursors
                         * if this feature is supported.
                         */
                        // @ts-ignore
                        getRefCursorSqlType(): number /*int*/
                        /**
                         * Are we using the meta-data for the procedure columns?
                         */
                        // @ts-ignore
                        isProcedureColumnMetaDataUsed(): boolean
                        /**
                         * Should we bypass the return parameter with the specified name.
                         * This allows the database specific implementation to skip the processing
                         * for specific results returned by the database call.
                         */
                        // @ts-ignore
                        byPassReturnParameter(parameterName: java.lang.String | string): boolean
                        /**
                         * Get the call parameter meta-data that is currently used.
                         * @return a List of {#link CallParameterMetaData}
                         */
                        // @ts-ignore
                        getCallParameterMetaData(): Array<org.springframework.jdbc.core.metadata.CallParameterMetaData>
                        /**
                         * Does the database support the use of catalog name in procedure calls?
                         */
                        // @ts-ignore
                        isSupportsCatalogsInProcedureCalls(): boolean
                        /**
                         * Does the database support the use of schema name in procedure calls?
                         */
                        // @ts-ignore
                        isSupportsSchemasInProcedureCalls(): boolean
                    }
                }
            }
        }
    }
}
