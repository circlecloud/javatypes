declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace object {
                /**
                 * Superclass for object abstractions of RDBMS stored procedures.
                 * This class is abstract and it is intended that subclasses will provide a typed
                 * method for invocation that delegates to the supplied {@link #execute} method.
                 * <p>The inherited {@link #setSql sql} property is the name of the stored procedure
                 * in the RDBMS.
                 * @author Rod Johnson
                 * @author Thomas Risberg
                 */
                // @ts-ignore
                abstract class StoredProcedure extends org.springframework.jdbc.object.SqlCall {
                    /**
                     * Allow use as a bean.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new object wrapper for a stored procedure.
                     * @param ds the DataSource to use throughout the lifetime
                     *  of this object to obtain connections
                     * @param name the name of the stored procedure in the database
                     */
                    // @ts-ignore
                    constructor(ds: javax.sql.DataSource, name: java.lang.String | string)
                    /**
                     * Create a new object wrapper for a stored procedure.
                     * @param jdbcTemplate the JdbcTemplate which wraps DataSource
                     * @param name the name of the stored procedure in the database
                     */
                    // @ts-ignore
                    constructor(jdbcTemplate: org.springframework.jdbc.core.JdbcTemplate, name: java.lang.String | string)
                    /**
                     * StoredProcedure parameter Maps are by default allowed to contain
                     * additional entries that are not actually used as parameters.
                     */
                    // @ts-ignore
                    allowsUnusedParameters(): boolean
                    /**
                     * Declare a parameter.
                     * <p>Parameters declared as {@code SqlParameter} and {@code SqlInOutParameter}
                     * will always be used to provide input values. In addition to this, any parameter declared
                     * as {@code SqlOutParameter} where a non-null input value is provided will also be used
                     * as an input parameter.
                     * <b>Note: Calls to declareParameter must be made in the same order as
                     * they appear in the database's stored procedure parameter list.</b>
                     * <p>Names are purely used to help mapping.
                     * @param param the parameter object
                     */
                    // @ts-ignore
                    public declareParameter(param: org.springframework.jdbc.core.SqlParameter): void
                    /**
                     * Execute the stored procedure with the provided parameter values. This is
                     * a convenience method where the order of the passed in parameter values
                     * must match the order that the parameters where declared in.
                     * @param inParams variable number of input parameters. Output parameters should
                     *  not be included in this map. It is legal for values to be {#code null}, and this
                     *  will produce the correct behavior using a NULL argument to the stored procedure.
                     * @return map of output params, keyed by name as in parameter declarations.
                     *  Output parameters will appear here, with their values after the stored procedure
                     *  has been called.
                     */
                    // @ts-ignore
                    public execute(...inParams: java.lang.Object[] | any[]): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Execute the stored procedure. Subclasses should define a strongly typed
                     * execute method (with a meaningful name) that invokes this method, populating
                     * the input map and extracting typed values from the output map. Subclass
                     * execute methods will often take domain objects as arguments and return values.
                     * Alternatively, they can return void.
                     * @param inParams map of input parameters, keyed by name as in parameter
                     *  declarations. Output parameters need not (but can) be included in this map.
                     *  It is legal for map entries to be {#code null}, and this will produce the
                     *  correct behavior using a NULL argument to the stored procedure.
                     * @return map of output params, keyed by name as in parameter declarations.
                     *  Output parameters will appear here, with their values after the
                     *  stored procedure has been called.
                     */
                    // @ts-ignore
                    public execute(inParams: java.util.Map<java.lang.String | string, any>): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Execute the stored procedure. Subclasses should define a strongly typed
                     * execute method (with a meaningful name) that invokes this method, passing in
                     * a ParameterMapper that will populate the input map.  This allows mapping database
                     * specific features since the ParameterMapper has access to the Connection object.
                     * The execute method is also responsible for extracting typed values from the output map.
                     * Subclass execute methods will often take domain objects as arguments and return values.
                     * Alternatively, they can return void.
                     * @param inParamMapper map of input parameters, keyed by name as in parameter
                     *  declarations. Output parameters need not (but can) be included in this map.
                     *  It is legal for map entries to be {#code null}, and this will produce the correct
                     *  behavior using a NULL argument to the stored procedure.
                     * @return map of output params, keyed by name as in parameter declarations.
                     *  Output parameters will appear here, with their values after the
                     *  stored procedure has been called.
                     */
                    // @ts-ignore
                    public execute(inParamMapper: org.springframework.jdbc.core.ParameterMapper): java.util.Map<java.lang.String | string, java.lang.Object | any>
                }
            }
        }
    }
}
