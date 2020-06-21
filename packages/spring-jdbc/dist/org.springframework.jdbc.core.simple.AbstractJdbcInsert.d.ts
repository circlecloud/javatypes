declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace simple {
                    /**
                     * Abstract class to provide base functionality for easy inserts
                     * based on configuration options and database meta-data.
                     * <p>This class provides the base SPI for {@link SimpleJdbcInsert}.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    abstract class AbstractJdbcInsert extends java.lang.Object {
                        /**
                         * Constructor to be used when initializing using a {@link DataSource}.
                         * @param dataSource the DataSource to be used
                         */
                        // @ts-ignore
                        constructor(dataSource: javax.sql.DataSource)
                        /**
                         * Constructor to be used when initializing using a {@link JdbcTemplate}.
                         * @param jdbcTemplate the JdbcTemplate to use
                         */
                        // @ts-ignore
                        constructor(jdbcTemplate: org.springframework.jdbc.core.JdbcTemplate)
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Get the configured {@link JdbcTemplate}.
                         */
                        // @ts-ignore
                        public getJdbcTemplate(): org.springframework.jdbc.core.JdbcTemplate
                        /**
                         * Set the name of the table for this insert.
                         */
                        // @ts-ignore
                        public setTableName(tableName: java.lang.String | string): void
                        /**
                         * Get the name of the table for this insert.
                         */
                        // @ts-ignore
                        public getTableName(): string
                        /**
                         * Set the name of the schema for this insert.
                         */
                        // @ts-ignore
                        public setSchemaName(schemaName: java.lang.String | string): void
                        /**
                         * Get the name of the schema for this insert.
                         */
                        // @ts-ignore
                        public getSchemaName(): string
                        /**
                         * Set the name of the catalog for this insert.
                         */
                        // @ts-ignore
                        public setCatalogName(catalogName: java.lang.String | string): void
                        /**
                         * Get the name of the catalog for this insert.
                         */
                        // @ts-ignore
                        public getCatalogName(): string
                        /**
                         * Set the names of the columns to be used.
                         */
                        // @ts-ignore
                        public setColumnNames(columnNames: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                        /**
                         * Get the names of the columns used.
                         */
                        // @ts-ignore
                        public getColumnNames(): Array<java.lang.String | string>
                        /**
                         * Specify the name of a single generated key column.
                         */
                        // @ts-ignore
                        public setGeneratedKeyName(generatedKeyName: java.lang.String | string): void
                        /**
                         * Set the names of any generated keys.
                         */
                        // @ts-ignore
                        public setGeneratedKeyNames(...generatedKeyNames: java.lang.String[] | string[]): void
                        /**
                         * Get the names of any generated keys.
                         */
                        // @ts-ignore
                        public getGeneratedKeyNames(): string[]
                        /**
                         * Specify whether the parameter meta-data for the call should be used.
                         * The default is {@code true}.
                         */
                        // @ts-ignore
                        public setAccessTableColumnMetaData(accessTableColumnMetaData: boolean): void
                        /**
                         * Specify whether the default for including synonyms should be changed.
                         * The default is {@code false}.
                         */
                        // @ts-ignore
                        public setOverrideIncludeSynonymsDefault(override: boolean): void
                        /**
                         * Get the insert string to be used.
                         */
                        // @ts-ignore
                        public getInsertString(): string
                        /**
                         * Get the array of {@link java.sql.Types} to be used for insert.
                         */
                        // @ts-ignore
                        public getInsertTypes(): number /*int*/[]
                        /**
                         * Compile this JdbcInsert using provided parameters and meta-data plus other settings.
                         * This finalizes the configuration for this object and subsequent attempts to compile are
                         * ignored. This will be implicitly called the first time an un-compiled insert is executed.
                         * @throws InvalidDataAccessApiUsageException if the object hasn't been correctly initialized,
                         *  for example if no DataSource has been provided
                         */
                        // @ts-ignore
                        public compile(): void
                        /**
                         * Delegate method to perform the actual compilation.
                         * <p>Subclasses can override this template method to perform  their own compilation.
                         * Invoked after this base class's compilation is complete.
                         */
                        // @ts-ignore
                        compileInternal(): void
                        /**
                         * Hook method that subclasses may override to react to compilation.
                         * <p>This implementation is empty.
                         */
                        // @ts-ignore
                        onCompileInternal(): void
                        /**
                         * Is this operation "compiled"?
                         * @return whether this operation is compiled and ready to use
                         */
                        // @ts-ignore
                        public isCompiled(): boolean
                        /**
                         * Check whether this operation has been compiled already;
                         * lazily compile it if not already compiled.
                         * <p>Automatically called by {@code validateParameters}.
                         */
                        // @ts-ignore
                        checkCompiled(): void
                        /**
                         * Method to check whether we are allowed to make any configuration changes at this time.
                         * If the class has been compiled, then no further changes to the configuration are allowed.
                         */
                        // @ts-ignore
                        checkIfConfigurationModificationIsAllowed(): void
                        /**
                         * Delegate method that executes the insert using the passed-in Map of parameters.
                         * @param args a Map with parameter names and values to be used in insert
                         * @return the number of rows affected
                         */
                        // @ts-ignore
                        doExecute(args: java.util.Map<java.lang.String | string, any>): number /*int*/
                        /**
                         * Delegate method that executes the insert using the passed-in {@link SqlParameterSource}.
                         * @param parameterSource parameter names and values to be used in insert
                         * @return the number of rows affected
                         */
                        // @ts-ignore
                        doExecute(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): number /*int*/
                        /**
                         * Method that provides execution of the insert using the passed-in
                         * Map of parameters and returning a generated key.
                         * @param args a Map with parameter names and values to be used in insert
                         * @return the key generated by the insert
                         */
                        // @ts-ignore
                        doExecuteAndReturnKey(args: java.util.Map<java.lang.String | string, any>): java.lang.Number
                        /**
                         * Method that provides execution of the insert using the passed-in
                         * {@link SqlParameterSource} and returning a generated key.
                         * @param parameterSource parameter names and values to be used in insert
                         * @return the key generated by the insert
                         */
                        // @ts-ignore
                        doExecuteAndReturnKey(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): java.lang.Number
                        /**
                         * Method that provides execution of the insert using the passed-in
                         * Map of parameters and returning all generated keys.
                         * @param args a Map with parameter names and values to be used in insert
                         * @return the KeyHolder containing keys generated by the insert
                         */
                        // @ts-ignore
                        doExecuteAndReturnKeyHolder(args: java.util.Map<java.lang.String | string, any>): org.springframework.jdbc.support.KeyHolder
                        /**
                         * Method that provides execution of the insert using the passed-in
                         * {@link SqlParameterSource} and returning all generated keys.
                         * @param parameterSource parameter names and values to be used in insert
                         * @return the KeyHolder containing keys generated by the insert
                         */
                        // @ts-ignore
                        doExecuteAndReturnKeyHolder(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): org.springframework.jdbc.support.KeyHolder
                        /**
                         * Delegate method that executes a batch insert using the passed-in Maps of parameters.
                         * @param batch array of Maps with parameter names and values to be used in batch insert
                         * @return array of number of rows affected
                         */
                        // @ts-ignore
                        doExecuteBatch(...batch: java.util.Map<java.lang.String | string, any>[]): number /*int*/[]
                        /**
                         * Delegate method that executes a batch insert using the passed-in {@link SqlParameterSource SqlParameterSources}.
                         * @param batch array of SqlParameterSource with parameter names and values to be used in insert
                         * @return array of number of rows affected
                         */
                        // @ts-ignore
                        doExecuteBatch(...batch: org.springframework.jdbc.core.namedparam.SqlParameterSource[]): number /*int*/[]
                        /**
                         * Match the provided in parameter values with registered parameters and parameters
                         * defined via meta-data processing.
                         * @param parameterSource the parameter values provided as a {#link SqlParameterSource}
                         * @return a Map with parameter names and values
                         */
                        // @ts-ignore
                        matchInParameterValuesWithInsertColumns(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): Array<java.lang.Object | any>
                        /**
                         * Match the provided in parameter values with registered parameters and parameters
                         * defined via meta-data processing.
                         * @param args the parameter values provided in a Map
                         * @return a Map with parameter names and values
                         */
                        // @ts-ignore
                        matchInParameterValuesWithInsertColumns(args: java.util.Map<java.lang.String | string, any>): Array<java.lang.Object | any>
                    }
                }
            }
        }
    }
}
