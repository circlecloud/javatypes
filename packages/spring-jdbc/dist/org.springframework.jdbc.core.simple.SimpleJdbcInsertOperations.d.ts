declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace simple {
                    /**
                     * Interface specifying the API for a Simple JDBC Insert implemented by {@link SimpleJdbcInsert}.
                     * This interface is not often used directly, but provides the option to enhance testability,
                     * as it can easily be mocked or stubbed.
                     * @author Thomas Risberg
                     * @since 2.5
                     */
                    // @ts-ignore
                    interface SimpleJdbcInsertOperations {
                        /**
                         * Specify the table name to be used for the insert.
                         * @param tableName the name of the stored table
                         * @return the instance of this SimpleJdbcInsert
                         */
                        // @ts-ignore
                        withTableName(tableName: java.lang.String | string): org.springframework.jdbc.core.simple.SimpleJdbcInsertOperations
                        /**
                         * Specify the schema name, if any, to be used for the insert.
                         * @param schemaName the name of the schema
                         * @return the instance of this SimpleJdbcInsert
                         */
                        // @ts-ignore
                        withSchemaName(schemaName: java.lang.String | string): org.springframework.jdbc.core.simple.SimpleJdbcInsertOperations
                        /**
                         * Specify the catalog name, if any, to be used for the insert.
                         * @param catalogName the name of the catalog
                         * @return the instance of this SimpleJdbcInsert
                         */
                        // @ts-ignore
                        withCatalogName(catalogName: java.lang.String | string): org.springframework.jdbc.core.simple.SimpleJdbcInsertOperations
                        /**
                         * Specify the column names that the insert statement should be limited to use.
                         * @param columnNames one or more column names
                         * @return the instance of this SimpleJdbcInsert
                         */
                        // @ts-ignore
                        usingColumns(...columnNames: java.lang.String[] | string[]): org.springframework.jdbc.core.simple.SimpleJdbcInsertOperations
                        /**
                         * Specify the names of any columns that have auto generated keys.
                         * @param columnNames one or more column names
                         * @return the instance of this SimpleJdbcInsert
                         */
                        // @ts-ignore
                        usingGeneratedKeyColumns(...columnNames: java.lang.String[] | string[]): org.springframework.jdbc.core.simple.SimpleJdbcInsertOperations
                        /**
                         * Turn off any processing of column meta-data information obtained via JDBC.
                         * @return the instance of this SimpleJdbcInsert
                         */
                        // @ts-ignore
                        withoutTableColumnMetaDataAccess(): org.springframework.jdbc.core.simple.SimpleJdbcInsertOperations
                        /**
                         * Include synonyms for the column meta-data lookups via JDBC.
                         * <p>Note: This is only necessary to include for Oracle since other databases
                         * supporting synonyms seems to include the synonyms automatically.
                         * @return the instance of this SimpleJdbcInsert
                         */
                        // @ts-ignore
                        includeSynonymsForTableColumnMetaData(): org.springframework.jdbc.core.simple.SimpleJdbcInsertOperations
                        /**
                         * Execute the insert using the values passed in.
                         * @param args a Map containing column names and corresponding value
                         * @return the number of rows affected as returned by the JDBC driver
                         */
                        // @ts-ignore
                        execute(args: java.util.Map<java.lang.String | string, any>): number /*int*/
                        /**
                         * Execute the insert using the values passed in.
                         * @param parameterSource the SqlParameterSource containing values to use for insert
                         * @return the number of rows affected as returned by the JDBC driver
                         */
                        // @ts-ignore
                        execute(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): number /*int*/
                        /**
                         * Execute the insert using the values passed in and return the generated key.
                         * <p>This requires that the name of the columns with auto generated keys have been specified.
                         * This method will always return a KeyHolder but the caller must verify that it actually
                         * contains the generated keys.
                         * @param args a Map containing column names and corresponding value
                         * @return the generated key value
                         */
                        // @ts-ignore
                        executeAndReturnKey(args: java.util.Map<java.lang.String | string, any>): java.lang.Number
                        /**
                         * Execute the insert using the values passed in and return the generated key.
                         * <p>This requires that the name of the columns with auto generated keys have been specified.
                         * This method will always return a KeyHolder but the caller must verify that it actually
                         * contains the generated keys.
                         * @param parameterSource the SqlParameterSource containing values to use for insert
                         * @return the generated key value.
                         */
                        // @ts-ignore
                        executeAndReturnKey(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): java.lang.Number
                        /**
                         * Execute the insert using the values passed in and return the generated keys.
                         * <p>This requires that the name of the columns with auto generated keys have been specified.
                         * This method will always return a KeyHolder but the caller must verify that it actually
                         * contains the generated keys.
                         * @param args a Map containing column names and corresponding value
                         * @return the KeyHolder containing all generated keys
                         */
                        // @ts-ignore
                        executeAndReturnKeyHolder(args: java.util.Map<java.lang.String | string, any>): org.springframework.jdbc.support.KeyHolder
                        /**
                         * Execute the insert using the values passed in and return the generated keys.
                         * <p>This requires that the name of the columns with auto generated keys have been specified.
                         * This method will always return a KeyHolder but the caller must verify that it actually
                         * contains the generated keys.
                         * @param parameterSource the SqlParameterSource containing values to use for insert
                         * @return the KeyHolder containing all generated keys
                         */
                        // @ts-ignore
                        executeAndReturnKeyHolder(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): org.springframework.jdbc.support.KeyHolder
                        /**
                         * Execute a batch insert using the batch of values passed in.
                         * @param batch an array of Maps containing a batch of column names and corresponding value
                         * @return the array of number of rows affected as returned by the JDBC driver
                         */
                        // @ts-ignore
                        executeBatch(...batch: java.util.Map<java.lang.String | string, any>[]): number /*int*/[]
                        /**
                         * Execute a batch insert using the batch of values passed in.
                         * @param batch an array of SqlParameterSource containing values for the batch
                         * @return the array of number of rows affected as returned by the JDBC driver
                         */
                        // @ts-ignore
                        executeBatch(...batch: org.springframework.jdbc.core.namedparam.SqlParameterSource[]): number /*int*/[]
                    }
                }
            }
        }
    }
}
