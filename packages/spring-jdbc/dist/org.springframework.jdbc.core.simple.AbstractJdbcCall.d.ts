declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace simple {
                    /**
                     * Abstract class to provide base functionality for easy stored procedure calls
                     * based on configuration options and database meta-data.
                     * <p>This class provides the base SPI for {@link SimpleJdbcCall}.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    abstract class AbstractJdbcCall extends java.lang.Object {
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
                         * Set the name of the stored procedure.
                         */
                        // @ts-ignore
                        public setProcedureName(procedureName: java.lang.String | string): void
                        /**
                         * Get the name of the stored procedure.
                         */
                        // @ts-ignore
                        public getProcedureName(): string
                        /**
                         * Set the names of in parameters to be used.
                         */
                        // @ts-ignore
                        public setInParameterNames(inParameterNames: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>): void
                        /**
                         * Get the names of in parameters to be used.
                         */
                        // @ts-ignore
                        public getInParameterNames(): Array<java.lang.String | string>
                        /**
                         * Set the catalog name to use.
                         */
                        // @ts-ignore
                        public setCatalogName(catalogName: java.lang.String | string): void
                        /**
                         * Get the catalog name used.
                         */
                        // @ts-ignore
                        public getCatalogName(): string
                        /**
                         * Set the schema name to use.
                         */
                        // @ts-ignore
                        public setSchemaName(schemaName: java.lang.String | string): void
                        /**
                         * Get the schema name used.
                         */
                        // @ts-ignore
                        public getSchemaName(): string
                        /**
                         * Specify whether this call is a function call.
                         * The default is {@code false}.
                         */
                        // @ts-ignore
                        public setFunction(func: boolean): void
                        /**
                         * Is this call a function call?
                         */
                        // @ts-ignore
                        public isFunction(): boolean
                        /**
                         * Specify whether the call requires a return value.
                         * The default is {@code false}.
                         */
                        // @ts-ignore
                        public setReturnValueRequired(returnValueRequired: boolean): void
                        /**
                         * Does the call require a return value?
                         */
                        // @ts-ignore
                        public isReturnValueRequired(): boolean
                        /**
                         * Specify whether parameters should be bound by name.
                         * The default is {@code false}.
                         * @since 4.2
                         */
                        // @ts-ignore
                        public setNamedBinding(namedBinding: boolean): void
                        /**
                         * Should parameters be bound by name?
                         * @since 4.2
                         */
                        // @ts-ignore
                        public isNamedBinding(): boolean
                        /**
                         * Specify whether the parameter meta-data for the call should be used.
                         * The default is {@code true}.
                         */
                        // @ts-ignore
                        public setAccessCallParameterMetaData(accessCallParameterMetaData: boolean): void
                        /**
                         * Get the call string that should be used based on parameters and meta-data.
                         */
                        // @ts-ignore
                        public getCallString(): string
                        /**
                         * Get the {@link CallableStatementCreatorFactory} being used.
                         */
                        // @ts-ignore
                        getCallableStatementFactory(): org.springframework.jdbc.core.CallableStatementCreatorFactory
                        /**
                         * Add a declared parameter to the list of parameters for the call.
                         * <p>Only parameters declared as {@code SqlParameter} and {@code SqlInOutParameter} will
                         * be used to provide input values. This is different from the {@code StoredProcedure}
                         * class which - for backwards compatibility reasons - allows input values to be provided
                         * for parameters declared as {@code SqlOutParameter}.
                         * @param parameter the {#link SqlParameter} to add
                         */
                        // @ts-ignore
                        public addDeclaredParameter(parameter: org.springframework.jdbc.core.SqlParameter): void
                        /**
                         * Add a {@link org.springframework.jdbc.core.RowMapper} for the specified parameter or column.
                         * @param parameterName name of parameter or column
                         * @param rowMapper the RowMapper implementation to use
                         */
                        // @ts-ignore
                        public addDeclaredRowMapper(parameterName: java.lang.String | string, rowMapper: org.springframework.jdbc.core.RowMapper<any>): void
                        /**
                         * Compile this JdbcCall using provided parameters and meta-data plus other settings.
                         * <p>This finalizes the configuration for this object and subsequent attempts to compile are
                         * ignored. This will be implicitly called the first time an un-compiled call is executed.
                         * @throws org.springframework.dao.InvalidDataAccessApiUsageException if the object hasn't
                         *  been correctly initialized, for example if no DataSource has been provided
                         */
                        // @ts-ignore
                        public compile(): void
                        /**
                         * Delegate method to perform the actual compilation.
                         * <p>Subclasses can override this template method to perform their own compilation.
                         * Invoked after this base class's compilation is complete.
                         */
                        // @ts-ignore
                        compileInternal(): void
                        /**
                         * Hook method that subclasses may override to react to compilation.
                         * This implementation does nothing.
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
                         * <p>Automatically called by {@code doExecute}.
                         */
                        // @ts-ignore
                        checkCompiled(): void
                        /**
                         * Delegate method that executes the call using the passed-in {@link SqlParameterSource}.
                         * @param parameterSource parameter names and values to be used in call
                         * @return a Map of out parameters
                         */
                        // @ts-ignore
                        doExecute(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        /**
                         * Delegate method that executes the call using the passed-in array of parameters.
                         * @param args array of parameter values. The order of values must match the order
                         *  declared for the stored procedure.
                         * @return a Map of out parameters
                         */
                        // @ts-ignore
                        doExecute(...args: java.lang.Object[] | any[]): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        /**
                         * Delegate method that executes the call using the passed-in Map of parameters.
                         * @param args a Map of parameter name and values
                         * @return a Map of out parameters
                         */
                        // @ts-ignore
                        doExecute(args: java.util.Map<java.lang.String | string, any>): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        /**
                         * Get the name of a single out parameter or return value.
                         * Used for functions or procedures with one out parameter.
                         */
                        // @ts-ignore
                        getScalarOutParameterName(): string
                        /**
                         * Get a List of all the call parameters to be used for call.
                         * This includes any parameters added based on meta-data processing.
                         */
                        // @ts-ignore
                        getCallParameters(): Array<org.springframework.jdbc.core.SqlParameter>
                        /**
                         * Match the provided in parameter values with registered parameters and
                         * parameters defined via meta-data processing.
                         * @param parameterSource the parameter vakues provided as a {#link SqlParameterSource}
                         * @return a Map with parameter names and values
                         */
                        // @ts-ignore
                        matchInParameterValuesWithCallParameters(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        /**
                         * Match the provided in parameter values with registered parameters and
                         * parameters defined via meta-data processing.
                         * @param args the parameter values provided in a Map
                         * @return a Map with parameter names and values
                         */
                        // @ts-ignore
                        matchInParameterValuesWithCallParameters(args: java.util.Map<java.lang.String | string, any>): java.util.Map<java.lang.String | string, any>
                    }
                }
            }
        }
    }
}
