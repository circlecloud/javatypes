declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace object {
                /**
                 * Reusable operation object representing an SQL update.
                 * <p>This class provides a number of {@code update} methods,
                 * analogous to the {@code execute} methods of query objects.
                 * <p>This class is concrete. Although it can be subclassed (for example
                 * to add a custom update method) it can easily be parameterized by setting
                 * SQL and declaring parameters.
                 * <p>Like all {@code RdbmsOperation} classes that ship with the Spring
                 * Framework, {@code SqlQuery} instances are thread-safe after their
                 * initialization is complete. That is, after they are constructed and configured
                 * via their setter methods, they can be used safely from multiple threads.
                 * @author Rod Johnson
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 * @see SqlQuery
                 */
                // @ts-ignore
                class SqlUpdate extends org.springframework.jdbc.object.SqlOperation {
                    /**
                     * Constructor to allow use as a JavaBean. DataSource and SQL
                     * must be supplied before compilation and use.
                     * @see #setDataSource
                     * @see #setSql
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs an update object with a given DataSource and SQL.
                     * @param ds the DataSource to use to obtain connections
                     * @param sql the SQL statement to execute
                     */
                    // @ts-ignore
                    constructor(ds: javax.sql.DataSource, sql: java.lang.String | string)
                    /**
                     * Construct an update object with a given DataSource, SQL
                     * and anonymous parameters.
                     * @param ds the DataSource to use to obtain connections
                     * @param sql the SQL statement to execute
                     * @param types the SQL types of the parameters, as defined in the
                     *  {#code java.sql.Types} class
                     * @see java.sql.Types
                     */
                    // @ts-ignore
                    constructor(ds: javax.sql.DataSource, sql: java.lang.String | string, types: number /*int*/[])
                    /**
                     * Construct an update object with a given DataSource, SQL,
                     * anonymous parameters and specifying the maximum number of rows
                     * that may be affected.
                     * @param ds the DataSource to use to obtain connections
                     * @param sql the SQL statement to execute
                     * @param types the SQL types of the parameters, as defined in the
                     *  {#code java.sql.Types} class
                     * @param maxRowsAffected the maximum number of rows that may
                     *  be affected by the update
                     * @see java.sql.Types
                     */
                    // @ts-ignore
                    constructor(ds: javax.sql.DataSource, sql: java.lang.String | string, types: number /*int*/[], maxRowsAffected: number /*int*/)
                    /**
                     * Set the maximum number of rows that may be affected by this update.
                     * The default value is 0, which does not limit the number of rows affected.
                     * @param maxRowsAffected the maximum number of rows that can be affected by
                     *  this update without this class's update method considering it an error
                     */
                    // @ts-ignore
                    public setMaxRowsAffected(maxRowsAffected: number /*int*/): void
                    /**
                     * Set the <i>exact</i> number of rows that must be affected by this update.
                     * The default value is 0, which allows any number of rows to be affected.
                     * <p>This is an alternative to setting the <i>maximum</i> number of rows
                     * that may be affected.
                     * @param requiredRowsAffected the exact number of rows that must be affected
                     *  by this update without this class's update method considering it an error
                     */
                    // @ts-ignore
                    public setRequiredRowsAffected(requiredRowsAffected: number /*int*/): void
                    /**
                     * Check the given number of affected rows against the
                     * specified maximum number or required number.
                     * @param rowsAffected the number of affected rows
                     * @throws JdbcUpdateAffectedIncorrectNumberOfRowsException
                     *  if the actually affected rows are out of bounds
                     * @see #setMaxRowsAffected
                     * @see #setRequiredRowsAffected
                     */
                    // @ts-ignore
                    checkRowsAffected(rowsAffected: number /*int*/): void
                    /**
                     * Generic method to execute the update given parameters.
                     * All other update methods invoke this method.
                     * @param params array of parameters objects
                     * @return the number of rows affected by the update
                     */
                    // @ts-ignore
                    public update(...params: java.lang.Object[] | any[]): number /*int*/
                    /**
                     * Method to execute the update given arguments and
                     * retrieve the generated keys using a KeyHolder.
                     * @param params array of parameter objects
                     * @param generatedKeyHolder the KeyHolder that will hold the generated keys
                     * @return the number of rows affected by the update
                     */
                    // @ts-ignore
                    public update(params: java.lang.Object[] | any[], generatedKeyHolder: org.springframework.jdbc.support.KeyHolder): number /*int*/
                    /**
                     * Convenience method to execute an update with no parameters.
                     */
                    // @ts-ignore
                    public update(): number /*int*/
                    /**
                     * Convenient method to execute an update given one int arg.
                     */
                    // @ts-ignore
                    public update(p1: number /*int*/): number /*int*/
                    /**
                     * Convenient method to execute an update given two int args.
                     */
                    // @ts-ignore
                    public update(p1: number /*int*/, p2: number /*int*/): number /*int*/
                    /**
                     * Convenient method to execute an update given one long arg.
                     */
                    // @ts-ignore
                    public update(p1: number /*long*/): number /*int*/
                    /**
                     * Convenient method to execute an update given two long args.
                     */
                    // @ts-ignore
                    public update(p1: number /*long*/, p2: number /*long*/): number /*int*/
                    /**
                     * Convenient method to execute an update given one String arg.
                     */
                    // @ts-ignore
                    public update(p: java.lang.String | string): number /*int*/
                    /**
                     * Convenient method to execute an update given two String args.
                     */
                    // @ts-ignore
                    public update(p1: java.lang.String | string, p2: java.lang.String | string): number /*int*/
                    /**
                     * Generic method to execute the update given named parameters.
                     * All other update methods invoke this method.
                     * @param paramMap a Map of parameter name to parameter object,
                     *  matching named parameters specified in the SQL statement
                     * @return the number of rows affected by the update
                     */
                    // @ts-ignore
                    public updateByNamedParam(paramMap: java.util.Map<java.lang.String | string, any>): number /*int*/
                    /**
                     * Method to execute the update given arguments and
                     * retrieve the generated keys using a KeyHolder.
                     * @param paramMap a Map of parameter name to parameter object,
                     *  matching named parameters specified in the SQL statement
                     * @param generatedKeyHolder the KeyHolder that will hold the generated keys
                     * @return the number of rows affected by the update
                     */
                    // @ts-ignore
                    public updateByNamedParam(paramMap: java.util.Map<java.lang.String | string, any>, generatedKeyHolder: org.springframework.jdbc.support.KeyHolder): number /*int*/
                }
            }
        }
    }
}
