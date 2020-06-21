declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace object {
                /**
                 * SQL "function" wrapper for a query that returns a single row of results.
                 * The default behavior is to return an int, but that can be overridden by
                 * using the constructor with an extra return type parameter.
                 * <p>Intended to use to call SQL functions that return a single result using a
                 * query like "select user()" or "select sysdate from dual". It is not intended
                 * for calling more complex stored functions or for using a CallableStatement to
                 * invoke a stored procedure or stored function. Use StoredProcedure or SqlCall
                 * for this type of processing.
                 * <p>This is a concrete class, which there is often no need to subclass.
                 * Code using this package can create an object of this type, declaring SQL
                 * and parameters, and then invoke the appropriate {@code run} method
                 * repeatedly to execute the function. Subclasses are only supposed to add
                 * specialized {@code run} methods for specific parameter and return types.
                 * <p>Like all RdbmsOperation objects, SqlFunction objects are thread-safe.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @author Jean-Pierre Pawlak
                 * @param <T> the result type
                 * @see StoredProcedure
                 */
                // @ts-ignore
                class SqlFunction<T> extends org.springframework.jdbc.object.MappingSqlQuery<T> {
                    /**
                     * Constructor to allow use as a JavaBean.
                     * A DataSource, SQL and any parameters must be supplied before
                     * invoking the {@code compile} method and using this object.
                     * @see #setDataSource
                     * @see #setSql
                     * @see #compile
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new SqlFunction object with SQL, but without parameters.
                     * Must add parameters or settle with none.
                     * @param ds the DataSource to obtain connections from
                     * @param sql the SQL to execute
                     */
                    // @ts-ignore
                    constructor(ds: javax.sql.DataSource, sql: java.lang.String | string)
                    /**
                     * Create a new SqlFunction object with SQL and parameters.
                     * @param ds the DataSource to obtain connections from
                     * @param sql the SQL to execute
                     * @param types the SQL types of the parameters, as defined in the
                     *  {#code java.sql.Types} class
                     * @see java.sql.Types
                     */
                    // @ts-ignore
                    constructor(ds: javax.sql.DataSource, sql: java.lang.String | string, types: number /*int*/[])
                    /**
                     * Create a new SqlFunction object with SQL, parameters and a result type.
                     * @param ds the DataSource to obtain connections from
                     * @param sql the SQL to execute
                     * @param types the SQL types of the parameters, as defined in the
                     *  {#code java.sql.Types} class
                     * @param resultType the type that the result object is required to match
                     * @see #setResultType(Class)
                     * @see java.sql.Types
                     */
                    // @ts-ignore
                    constructor(ds: javax.sql.DataSource, sql: java.lang.String | string, types: number /*int*/[], resultType: java.lang.Class<T>)
                    /**
                     * Specify the type that the result object is required to match.
                     * <p>If not specified, the result value will be exposed as
                     * returned by the JDBC driver.
                     */
                    // @ts-ignore
                    public setResultType(resultType: java.lang.Class<T>): void
                    /**
                     * This implementation of this method extracts a single value from the
                     * single row returned by the function. If there are a different number
                     * of rows returned, this is treated as an error.
                     */
                    // @ts-ignore
                    mapRow(rs: java.sql.ResultSet, rowNum: number /*int*/): T
                    /**
                     * Convenient method to run the function without arguments.
                     * @return the value of the function
                     */
                    // @ts-ignore
                    public run(): number /*int*/
                    /**
                     * Convenient method to run the function with a single int argument.
                     * @param parameter single int parameter
                     * @return the value of the function
                     */
                    // @ts-ignore
                    public run(parameter: number /*int*/): number /*int*/
                    /**
                     * Analogous to the SqlQuery.execute([]) method. This is a
                     * generic method to execute a query, taken a number of arguments.
                     * @param parameters array of parameters. These will be objects or
                     *  object wrapper types for primitives.
                     * @return the value of the function
                     */
                    // @ts-ignore
                    public run(...parameters: java.lang.Object[] | any[]): number /*int*/
                    /**
                     * Convenient method to run the function without arguments,
                     * returning the value as an object.
                     * @return the value of the function
                     */
                    // @ts-ignore
                    public runGeneric(): any
                    /**
                     * Convenient method to run the function with a single int argument.
                     * @param parameter single int parameter
                     * @return the value of the function as an Object
                     */
                    // @ts-ignore
                    public runGeneric(parameter: number /*int*/): any
                    /**
                     * Analogous to the {@code SqlQuery.findObject(Object[])} method.
                     * This is a generic method to execute a query, taken a number of arguments.
                     * @param parameters array of parameters. These will be objects or
                     *  object wrapper types for primitives.
                     * @return the value of the function, as an Object
                     * @see #execute(Object[])
                     */
                    // @ts-ignore
                    public runGeneric(parameters: java.lang.Object[] | any[]): any
                }
            }
        }
    }
}
