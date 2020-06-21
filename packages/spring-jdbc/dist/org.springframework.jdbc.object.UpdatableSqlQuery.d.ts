declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace object {
                /**
                 * Reusable RDBMS query in which concrete subclasses must implement
                 * the abstract updateRow(ResultSet, int, context) method to update each
                 * row of the JDBC ResultSet and optionally map contents into an object.
                 * <p>Subclasses can be constructed providing SQL, parameter types
                 * and a DataSource. SQL will often vary between subclasses.
                 * @author Thomas Risberg
                 * @param <T> the result type
                 * @see org.springframework.jdbc.object.SqlQuery
                 */
                // @ts-ignore
                abstract class UpdatableSqlQuery<T> extends org.springframework.jdbc.object.SqlQuery<T> {
                    /**
                     * Constructor to allow use as a JavaBean.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Convenient constructor with DataSource and SQL string.
                     * @param ds the DataSource to use to get connections
                     * @param sql the SQL to run
                     */
                    // @ts-ignore
                    constructor(ds: javax.sql.DataSource, sql: java.lang.String | string)
                    /**
                     * Implementation of the superclass template method. This invokes the subclass's
                     * implementation of the {@code updateRow()} method.
                     */
                    // @ts-ignore
                    newRowMapper(parameters: java.lang.Object[] | any[], context: java.util.Map<any, any>): org.springframework.jdbc.core.RowMapper<T>
                    /**
                     * Subclasses must implement this method to update each row of the
                     * ResultSet and optionally create object of the result type.
                     * @param rs the ResultSet we're working through
                     * @param rowNum row number (from 0) we're up to
                     * @param context passed to the execute() method.
                     *  It can be {#code null} if no contextual information is need.  If you
                     *  need to pass in data for each row, you can pass in a HashMap with
                     *  the primary key of the row being the key for the HashMap.  That way
                     *  it is easy to locate the updates for each row
                     * @return an object of the result type
                     * @throws SQLException if there's an error updateing data.
                     *  Subclasses can simply not catch SQLExceptions, relying on the
                     *  framework to clean up.
                     */
                    // @ts-ignore
                    abstract updateRow(rs: java.sql.ResultSet, rowNum: number /*int*/, context: java.util.Map<any, any>): T
                }
            }
        }
    }
}
