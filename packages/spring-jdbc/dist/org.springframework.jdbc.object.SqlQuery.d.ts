declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace object {
                /**
                 * Reusable operation object representing an SQL query.
                 * <p>Subclasses must implement the {@link #newRowMapper} method to provide
                 * an object that can extract the results of iterating over the
                 * {@code ResultSet} created during the execution of the query.
                 * <p>This class provides a number of public {@code execute} methods that are
                 * analogous to the different convenient JDO query execute methods. Subclasses
                 * can either rely on one of these inherited methods, or can add their own
                 * custom execution methods, with meaningful names and typed parameters
                 * (definitely a best practice). Each custom query method will invoke one of
                 * this class's untyped query methods.
                 * <p>Like all {@code RdbmsOperation} classes that ship with the Spring
                 * Framework, {@code SqlQuery} instances are thread-safe after their
                 * initialization is complete. That is, after they are constructed and configured
                 * via their setter methods, they can be used safely from multiple threads.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @author Thomas Risberg
                 * @param <T> the result type
                 * @see SqlUpdate
                 */
                // @ts-ignore
                abstract class SqlQuery<T> extends org.springframework.jdbc.object.SqlOperation {
                    /**
                     * Constructor to allow use as a JavaBean.
                     * <p>The {@code DataSource} and SQL must be supplied before
                     * compilation and use.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Convenient constructor with a {@code DataSource} and SQL string.
                     * @param ds the {#code DataSource} to use to get connections
                     * @param sql the SQL to execute; SQL can also be supplied at runtime
                     *  by overriding the {#link #getSql()} method.
                     */
                    // @ts-ignore
                    constructor(ds: javax.sql.DataSource, sql: java.lang.String | string)
                    /**
                     * Set the number of rows expected.
                     * <p>This can be used to ensure efficient storage of results. The
                     * default behavior is not to expect any specific number of rows.
                     */
                    // @ts-ignore
                    public setRowsExpected(rowsExpected: number /*int*/): void
                    /**
                     * Get the number of rows expected.
                     */
                    // @ts-ignore
                    public getRowsExpected(): number /*int*/
                    /**
                     * Central execution method. All un-named parameter execution goes through this method.
                     * @param params parameters, similar to JDO query parameters.
                     *  Primitive parameters must be represented by their Object wrapper type.
                     *  The ordering of parameters is significant.
                     * @param context the contextual information passed to the {#code mapRow}
                     *  callback method. The JDBC operation itself doesn't rely on this parameter,
                     *  but it can be useful for creating the objects of the result list.
                     * @return a List of objects, one per row of the ResultSet. Normally all these
                     *  will be of the same class, although it is possible to use different types.
                     */
                    // @ts-ignore
                    public execute(params: java.lang.Object[] | any[], context: java.util.Map<any, any>): Array<T>
                    /**
                     * Convenient method to execute without context.
                     * @param params parameters for the query. Primitive parameters must
                     *  be represented by their Object wrapper type. The ordering of parameters is
                     *  significant.
                     */
                    // @ts-ignore
                    public execute(...params: java.lang.Object[] | any[]): Array<T>
                    /**
                     * Convenient method to execute without parameters.
                     * @param context the contextual information for object creation
                     */
                    // @ts-ignore
                    public execute(context: java.util.Map<any, any>): Array<T>
                    /**
                     * Convenient method to execute without parameters nor context.
                     */
                    // @ts-ignore
                    public execute(): Array<T>
                    /**
                     * Convenient method to execute with a single int parameter and context.
                     * @param p1 single int parameter
                     * @param context the contextual information for object creation
                     */
                    // @ts-ignore
                    public execute(p1: number /*int*/, context: java.util.Map<any, any>): Array<T>
                    /**
                     * Convenient method to execute with a single int parameter.
                     * @param p1 single int parameter
                     */
                    // @ts-ignore
                    public execute(p1: number /*int*/): Array<T>
                    /**
                     * Convenient method to execute with two int parameters and context.
                     * @param p1 first int parameter
                     * @param p2 second int parameter
                     * @param context the contextual information for object creation
                     */
                    // @ts-ignore
                    public execute(p1: number /*int*/, p2: number /*int*/, context: java.util.Map<any, any>): Array<T>
                    /**
                     * Convenient method to execute with two int parameters.
                     * @param p1 first int parameter
                     * @param p2 second int parameter
                     */
                    // @ts-ignore
                    public execute(p1: number /*int*/, p2: number /*int*/): Array<T>
                    /**
                     * Convenient method to execute with a single long parameter and context.
                     * @param p1 single long parameter
                     * @param context the contextual information for object creation
                     */
                    // @ts-ignore
                    public execute(p1: number /*long*/, context: java.util.Map<any, any>): Array<T>
                    /**
                     * Convenient method to execute with a single long parameter.
                     * @param p1 single long parameter
                     */
                    // @ts-ignore
                    public execute(p1: number /*long*/): Array<T>
                    /**
                     * Convenient method to execute with a single String parameter and context.
                     * @param p1 single String parameter
                     * @param context the contextual information for object creation
                     */
                    // @ts-ignore
                    public execute(p1: java.lang.String | string, context: java.util.Map<any, any>): Array<T>
                    /**
                     * Convenient method to execute with a single String parameter.
                     * @param p1 single String parameter
                     */
                    // @ts-ignore
                    public execute(p1: java.lang.String | string): Array<T>
                    /**
                     * Central execution method. All named parameter execution goes through this method.
                     * @param paramMap parameters associated with the name specified while declaring
                     *  the SqlParameters. Primitive parameters must be represented by their Object wrapper
                     *  type. The ordering of parameters is not significant since they are supplied in a
                     *  SqlParameterMap which is an implementation of the Map interface.
                     * @param context the contextual information passed to the {#code mapRow}
                     *  callback method. The JDBC operation itself doesn't rely on this parameter,
                     *  but it can be useful for creating the objects of the result list.
                     * @return a List of objects, one per row of the ResultSet. Normally all these
                     *  will be of the same class, although it is possible to use different types.
                     */
                    // @ts-ignore
                    public executeByNamedParam(paramMap: java.util.Map<java.lang.String | string, any>, context: java.util.Map<any, any>): Array<T>
                    /**
                     * Convenient method to execute without context.
                     * @param paramMap parameters associated with the name specified while declaring
                     *  the SqlParameters. Primitive parameters must be represented by their Object wrapper
                     *  type. The ordering of parameters is not significant.
                     */
                    // @ts-ignore
                    public executeByNamedParam(paramMap: java.util.Map<java.lang.String | string, any>): Array<T>
                    /**
                     * Generic object finder method, used by all other {@code findObject} methods.
                     * Object finder methods are like EJB entity bean finders, in that it is
                     * considered an error if they return more than one result.
                     * @return the result object, or {#code null} if not found. Subclasses may
                     *  choose to treat this as an error and throw an exception.
                     * @see org.springframework.dao.support.DataAccessUtils#singleResult
                     */
                    // @ts-ignore
                    public findObject(params: java.lang.Object[] | any[], context: java.util.Map<any, any>): T
                    /**
                     * Convenient method to find a single object without context.
                     */
                    // @ts-ignore
                    public findObject(...params: java.lang.Object[] | any[]): T
                    /**
                     * Convenient method to find a single object given a single int parameter
                     * and a context.
                     */
                    // @ts-ignore
                    public findObject(p1: number /*int*/, context: java.util.Map<any, any>): T
                    /**
                     * Convenient method to find a single object given a single int parameter.
                     */
                    // @ts-ignore
                    public findObject(p1: number /*int*/): T
                    /**
                     * Convenient method to find a single object given two int parameters
                     * and a context.
                     */
                    // @ts-ignore
                    public findObject(p1: number /*int*/, p2: number /*int*/, context: java.util.Map<any, any>): T
                    /**
                     * Convenient method to find a single object given two int parameters.
                     */
                    // @ts-ignore
                    public findObject(p1: number /*int*/, p2: number /*int*/): T
                    /**
                     * Convenient method to find a single object given a single long parameter
                     * and a context.
                     */
                    // @ts-ignore
                    public findObject(p1: number /*long*/, context: java.util.Map<any, any>): T
                    /**
                     * Convenient method to find a single object given a single long parameter.
                     */
                    // @ts-ignore
                    public findObject(p1: number /*long*/): T
                    /**
                     * Convenient method to find a single object given a single String parameter
                     * and a context.
                     */
                    // @ts-ignore
                    public findObject(p1: java.lang.String | string, context: java.util.Map<any, any>): T
                    /**
                     * Convenient method to find a single object given a single String parameter.
                     */
                    // @ts-ignore
                    public findObject(p1: java.lang.String | string): T
                    /**
                     * Generic object finder method for named parameters.
                     * @param paramMap a Map of parameter name to parameter object,
                     *  matching named parameters specified in the SQL statement.
                     *  Ordering is not significant.
                     * @param context the contextual information passed to the {#code mapRow}
                     *  callback method. The JDBC operation itself doesn't rely on this parameter,
                     *  but it can be useful for creating the objects of the result list.
                     * @return a List of objects, one per row of the ResultSet. Normally all these
                     *  will be of the same class, although it is possible to use different types.
                     */
                    // @ts-ignore
                    public findObjectByNamedParam(paramMap: java.util.Map<java.lang.String | string, any>, context: java.util.Map<any, any>): T
                    /**
                     * Convenient method to execute without context.
                     * @param paramMap a Map of parameter name to parameter object,
                     *  matching named parameters specified in the SQL statement.
                     *  Ordering is not significant.
                     */
                    // @ts-ignore
                    public findObjectByNamedParam(paramMap: java.util.Map<java.lang.String | string, any>): T
                    /**
                     * Subclasses must implement this method to extract an object per row, to be
                     * returned by the {@code execute} method as an aggregated {@link List}.
                     * @param parameters the parameters to the {#code execute()} method,
                     *  in case subclass is interested; may be {@code null} if there
                     *  were no parameters.
                     * @param context the contextual information passed to the {#code mapRow}
                     *  callback method. The JDBC operation itself doesn't rely on this parameter,
                     *  but it can be useful for creating the objects of the result list.
                     * @see #execute
                     */
                    // @ts-ignore
                    abstract newRowMapper(parameters: java.lang.Object[] | any[], context: java.util.Map<any, any>): org.springframework.jdbc.core.RowMapper<T>
                }
            }
        }
    }
}
