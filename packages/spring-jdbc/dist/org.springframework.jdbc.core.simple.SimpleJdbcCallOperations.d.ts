declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace simple {
                    /**
                     * Interface specifying the API for a Simple JDBC Call implemented by {@link SimpleJdbcCall}.
                     * This interface is not often used directly, but provides the option to enhance testability,
                     * as it can easily be mocked or stubbed.
                     * @author Thomas Risberg
                     * @author Stephane Nicoll
                     * @since 2.5
                     */
                    // @ts-ignore
                    interface SimpleJdbcCallOperations {
                        /**
                         * Specify the procedure name to be used - this implies that we will be calling a stored procedure.
                         * @param procedureName the name of the stored procedure
                         * @return the instance of this SimpleJdbcCall
                         */
                        // @ts-ignore
                        withProcedureName(procedureName: java.lang.String | string): org.springframework.jdbc.core.simple.SimpleJdbcCallOperations
                        /**
                         * Specify the procedure name to be used - this implies that we will be calling a stored function.
                         * @param functionName the name of the stored function
                         * @return the instance of this SimpleJdbcCall
                         */
                        // @ts-ignore
                        withFunctionName(functionName: java.lang.String | string): org.springframework.jdbc.core.simple.SimpleJdbcCallOperations
                        /**
                         * Optionally, specify the name of the schema that contins the stored procedure.
                         * @param schemaName the name of the schema
                         * @return the instance of this SimpleJdbcCall
                         */
                        // @ts-ignore
                        withSchemaName(schemaName: java.lang.String | string): org.springframework.jdbc.core.simple.SimpleJdbcCallOperations
                        /**
                         * Optionally, specify the name of the catalog that contins the stored procedure.
                         * <p>To provide consistency with the Oracle DatabaseMetaData, this is used to specify the
                         * package name if the procedure is declared as part of a package.
                         * @param catalogName the catalog or package name
                         * @return the instance of this SimpleJdbcCall
                         */
                        // @ts-ignore
                        withCatalogName(catalogName: java.lang.String | string): org.springframework.jdbc.core.simple.SimpleJdbcCallOperations
                        /**
                         * Indicates the procedure's return value should be included in the results returned.
                         * @return the instance of this SimpleJdbcCall
                         */
                        // @ts-ignore
                        withReturnValue(): org.springframework.jdbc.core.simple.SimpleJdbcCallOperations
                        /**
                         * Specify one or more parameters if desired. These parameters will be supplemented with
                         * any parameter information retrieved from the database meta-data.
                         * <p>Note that only parameters declared as {@code SqlParameter} and {@code SqlInOutParameter}
                         * will be used to provide input values. This is different from the {@code StoredProcedure}
                         * class which - for backwards compatibility reasons - allows input values to be provided
                         * for parameters declared as {@code SqlOutParameter}.
                         * @param sqlParameters the parameters to use
                         * @return the instance of this SimpleJdbcCall
                         */
                        // @ts-ignore
                        declareParameters(...sqlParameters: org.springframework.jdbc.core.SqlParameter[]): org.springframework.jdbc.core.simple.SimpleJdbcCallOperations
                        /**
                         * Not used yet.
                         */
                        // @ts-ignore
                        useInParameterNames(...inParameterNames: java.lang.String[] | string[]): org.springframework.jdbc.core.simple.SimpleJdbcCallOperations
                        /**
                         * Used to specify when a ResultSet is returned by the stored procedure and you want it
                         * mapped by a {@link RowMapper}. The results will be returned using the parameter name
                         * specified. Multiple ResultSets must be declared in the correct order.
                         * <p>If the database you are using uses ref cursors then the name specified must match
                         * the name of the parameter declared for the procedure in the database.
                         * @param parameterName the name of the returned results and/or the name of the ref cursor parameter
                         * @param rowMapper the RowMapper implementation that will map the data returned for each row
                         */
                        // @ts-ignore
                        returningResultSet(parameterName: java.lang.String | string, rowMapper: org.springframework.jdbc.core.RowMapper<any>): org.springframework.jdbc.core.simple.SimpleJdbcCallOperations
                        /**
                         * Turn off any processing of parameter meta-data information obtained via JDBC.
                         * @return the instance of this SimpleJdbcCall
                         */
                        // @ts-ignore
                        withoutProcedureColumnMetaDataAccess(): org.springframework.jdbc.core.simple.SimpleJdbcCallOperations
                        /**
                         * Indicates that parameters should be bound by name.
                         * @return the instance of this SimpleJdbcCall
                         * @since 4.2
                         */
                        // @ts-ignore
                        withNamedBinding(): org.springframework.jdbc.core.simple.SimpleJdbcCallOperations
                        /**
                         * Execute the stored function and return the results obtained as an Object of the
                         * specified return type.
                         * @param returnType the type of the value to return
                         * @param args optional array containing the in parameter values to be used in the call.
                         *  Parameter values must be provided in the same order as the parameters are defined
                         *  for the stored procedure.
                         */
                        // @ts-ignore
                        executeFunction<T>(returnType: java.lang.Class<T>, ...args: java.lang.Object[] | any[]): T
                        /**
                         * Execute the stored function and return the results obtained as an Object of the
                         * specified return type.
                         * @param returnType the type of the value to return
                         * @param args a Map containing the parameter values to be used in the call
                         */
                        // @ts-ignore
                        executeFunction<T>(returnType: java.lang.Class<T>, args: java.util.Map<java.lang.String | string, any>): T
                        /**
                         * Execute the stored function and return the results obtained as an Object of the
                         * specified return type.
                         * @param returnType the type of the value to return
                         * @param args the MapSqlParameterSource containing the parameter values to be used in the call
                         */
                        // @ts-ignore
                        executeFunction<T>(returnType: java.lang.Class<T>, args: org.springframework.jdbc.core.namedparam.SqlParameterSource): T
                        /**
                         * Execute the stored procedure and return the single out parameter as an Object
                         * of the specified return type. In the case where there are multiple out parameters,
                         * the first one is returned and additional out parameters are ignored.
                         * @param returnType the type of the value to return
                         * @param args optional array containing the in parameter values to be used in the call.
                         *  Parameter values must be provided in the same order as the parameters are defined for
                         *  the stored procedure.
                         */
                        // @ts-ignore
                        executeObject<T>(returnType: java.lang.Class<T>, ...args: java.lang.Object[] | any[]): T
                        /**
                         * Execute the stored procedure and return the single out parameter as an Object
                         * of the specified return type. In the case where there are multiple out parameters,
                         * the first one is returned and additional out parameters are ignored.
                         * @param returnType the type of the value to return
                         * @param args a Map containing the parameter values to be used in the call
                         */
                        // @ts-ignore
                        executeObject<T>(returnType: java.lang.Class<T>, args: java.util.Map<java.lang.String | string, any>): T
                        /**
                         * Execute the stored procedure and return the single out parameter as an Object
                         * of the specified return type. In the case where there are multiple out parameters,
                         * the first one is returned and additional out parameters are ignored.
                         * @param returnType the type of the value to return
                         * @param args the MapSqlParameterSource containing the parameter values to be used in the call
                         */
                        // @ts-ignore
                        executeObject<T>(returnType: java.lang.Class<T>, args: org.springframework.jdbc.core.namedparam.SqlParameterSource): T
                        /**
                         * Execute the stored procedure and return a map of output params, keyed by name
                         * as in parameter declarations.
                         * @param args optional array containing the in parameter values to be used in the call.
                         *  Parameter values must be provided in the same order as the parameters are defined for
                         *  the stored procedure.
                         * @return a Map of output params
                         */
                        // @ts-ignore
                        execute(...args: java.lang.Object[] | any[]): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        /**
                         * Execute the stored procedure and return a map of output params, keyed by name
                         * as in parameter declarations.
                         * @param args a Map containing the parameter values to be used in the call
                         * @return a Map of output params
                         */
                        // @ts-ignore
                        execute(args: java.util.Map<java.lang.String | string, any>): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        /**
                         * Execute the stored procedure and return a map of output params, keyed by name
                         * as in parameter declarations.
                         * @param args the SqlParameterSource containing the parameter values to be used in the call
                         * @return a Map of output params
                         */
                        // @ts-ignore
                        execute(args: org.springframework.jdbc.core.namedparam.SqlParameterSource): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    }
                }
            }
        }
    }
}
