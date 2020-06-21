declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace metadata {
                    /**
                     * Class to manage context meta-data used for the configuration
                     * and execution of a stored procedure call.
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @author Kiril Nugmanov
                     * @since 2.5
                     */
                    // @ts-ignore
                    class CallMetaDataContext extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Specify the name used for the return value of the function.
                         */
                        // @ts-ignore
                        public setFunctionReturnName(functionReturnName: java.lang.String | string): void
                        /**
                         * Get the name used for the return value of the function.
                         */
                        // @ts-ignore
                        public getFunctionReturnName(): string
                        /**
                         * Specify a limited set of in parameters to be used.
                         */
                        // @ts-ignore
                        public setLimitedInParameterNames(limitedInParameterNames: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>): void
                        /**
                         * Get a limited set of in parameters to be used.
                         */
                        // @ts-ignore
                        public getLimitedInParameterNames(): Array<java.lang.String | string>
                        /**
                         * Specify the names of the out parameters.
                         */
                        // @ts-ignore
                        public setOutParameterNames(outParameterNames: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                        /**
                         * Get a list of the out parameter names.
                         */
                        // @ts-ignore
                        public getOutParameterNames(): Array<java.lang.String | string>
                        /**
                         * Specify the name of the procedure.
                         */
                        // @ts-ignore
                        public setProcedureName(procedureName: java.lang.String | string): void
                        /**
                         * Get the name of the procedure.
                         */
                        // @ts-ignore
                        public getProcedureName(): string
                        /**
                         * Specify the name of the catalog.
                         */
                        // @ts-ignore
                        public setCatalogName(catalogName: java.lang.String | string): void
                        /**
                         * Get the name of the catalog.
                         */
                        // @ts-ignore
                        public getCatalogName(): string
                        /**
                         * Specify the name of the schema.
                         */
                        // @ts-ignore
                        public setSchemaName(schemaName: java.lang.String | string): void
                        /**
                         * Get the name of the schema.
                         */
                        // @ts-ignore
                        public getSchemaName(): string
                        /**
                         * Specify whether this call is a function call.
                         */
                        // @ts-ignore
                        public setFunction(func: boolean): void
                        /**
                         * Check whether this call is a function call.
                         */
                        // @ts-ignore
                        public isFunction(): boolean
                        /**
                         * Specify whether a return value is required.
                         */
                        // @ts-ignore
                        public setReturnValueRequired(returnValueRequired: boolean): void
                        /**
                         * Check whether a return value is required.
                         */
                        // @ts-ignore
                        public isReturnValueRequired(): boolean
                        /**
                         * Specify whether call parameter meta-data should be accessed.
                         */
                        // @ts-ignore
                        public setAccessCallParameterMetaData(accessCallParameterMetaData: boolean): void
                        /**
                         * Check whether call parameter meta-data should be accessed.
                         */
                        // @ts-ignore
                        public isAccessCallParameterMetaData(): boolean
                        /**
                         * Specify whether parameters should be bound by name.
                         * @since 4.2
                         */
                        // @ts-ignore
                        public setNamedBinding(namedBinding: boolean): void
                        /**
                         * Check whether parameters should be bound by name.
                         * @since 4.2
                         */
                        // @ts-ignore
                        public isNamedBinding(): boolean
                        /**
                         * Initialize this class with meta-data from the database.
                         * @param dataSource the DataSource used to retrieve meta-data
                         */
                        // @ts-ignore
                        public initializeMetaData(dataSource: javax.sql.DataSource): void
                        /**
                         * Create a ReturnResultSetParameter/SqlOutParameter depending on the support provided
                         * by the JDBC driver used for the database in use.
                         * @param parameterName the name of the parameter (also used as the name of the List returned in the output)
                         * @param rowMapper a RowMapper implementation used to map the data returned in the result set
                         * @return the appropriate SqlParameter
                         */
                        // @ts-ignore
                        public createReturnResultSetParameter(parameterName: java.lang.String | string, rowMapper: org.springframework.jdbc.core.RowMapper<any>): org.springframework.jdbc.core.SqlParameter
                        /**
                         * Get the name of the single out parameter for this call.
                         * If there are multiple parameters, the name of the first one will be returned.
                         */
                        // @ts-ignore
                        public getScalarOutParameterName(): string
                        /**
                         * Get the List of SqlParameter objects to be used in call execution.
                         */
                        // @ts-ignore
                        public getCallParameters(): Array<org.springframework.jdbc.core.SqlParameter>
                        /**
                         * Process the list of parameters provided, and if procedure column meta-data is used,
                         * the parameters will be matched against the meta-data information and any missing
                         * ones will be automatically included.
                         * @param parameters the list of parameters to use as a base
                         */
                        // @ts-ignore
                        public processParameters(parameters: java.util.List<org.springframework.jdbc.core.SqlParameter> | Array<org.springframework.jdbc.core.SqlParameter>): void
                        /**
                         * Reconcile the provided parameters with available meta-data and add new ones where appropriate.
                         */
                        // @ts-ignore
                        reconcileParameters(parameters: java.util.List<org.springframework.jdbc.core.SqlParameter> | Array<org.springframework.jdbc.core.SqlParameter>): Array<org.springframework.jdbc.core.SqlParameter>
                        /**
                         * Match input parameter values with the parameters declared to be used in the call.
                         * @param parameterSource the input values
                         * @return a Map containing the matched parameter names with the value taken from the input
                         */
                        // @ts-ignore
                        public matchInParameterValuesWithCallParameters(parameterSource: org.springframework.jdbc.core.namedparam.SqlParameterSource): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        /**
                         * Match input parameter values with the parameters declared to be used in the call.
                         * @param inParameters the input values
                         * @return a Map containing the matched parameter names with the value taken from the input
                         */
                        // @ts-ignore
                        public matchInParameterValuesWithCallParameters(inParameters: java.util.Map<java.lang.String | string, any>): java.util.Map<java.lang.String | string, any>
                        // @ts-ignore
                        public matchInParameterValuesWithCallParameters(parameterValues: java.lang.Object[] | any[]): java.util.Map<java.lang.String | string, any>
                        /**
                         * Build the call string based on configuration and meta-data information.
                         * @return the call string to be used
                         */
                        // @ts-ignore
                        public createCallString(): string
                        /**
                         * Build the parameter binding fragment.
                         * @param parameter call parameter
                         * @return parameter binding fragment
                         * @since 4.2
                         */
                        // @ts-ignore
                        createParameterBinding(parameter: org.springframework.jdbc.core.SqlParameter): string
                    }
                }
            }
        }
    }
}
