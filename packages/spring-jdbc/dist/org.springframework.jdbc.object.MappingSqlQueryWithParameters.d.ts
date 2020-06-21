declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace object {
                /**
                 * Reusable RDBMS query in which concrete subclasses must implement
                 * the abstract mapRow(ResultSet, int) method to map each row of
                 * the JDBC ResultSet into an object.
                 * <p>Such manual mapping is usually preferable to "automatic"
                 * mapping using reflection, which can become complex in non-trivial
                 * cases. For example, the present class allows different objects
                 * to be used for different rows (for example, if a subclass is indicated).
                 * It allows computed fields to be set. And there's no need for
                 * ResultSet columns to have the same names as bean properties.
                 * The Pareto Principle in action: going the extra mile to automate
                 * the extraction process makes the framework much more complex
                 * and delivers little real benefit.
                 * <p>Subclasses can be constructed providing SQL, parameter types
                 * and a DataSource. SQL will often vary between subclasses.
                 * @author Rod Johnson
                 * @author Thomas Risberg
                 * @author Jean-Pierre Pawlak
                 * @param <T> the result type
                 * @see org.springframework.jdbc.object.MappingSqlQuery
                 * @see org.springframework.jdbc.object.SqlQuery
                 */
                // @ts-ignore
                abstract class MappingSqlQueryWithParameters<T> extends org.springframework.jdbc.object.SqlQuery<T> {
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
                     * Implementation of protected abstract method. This invokes the subclass's
                     * implementation of the mapRow() method.
                     */
                    // @ts-ignore
                    newRowMapper(parameters: java.lang.Object[] | any[], context: java.util.Map<any, any>): org.springframework.jdbc.core.RowMapper<T>
                    /**
                     * Subclasses must implement this method to convert each row
                     * of the ResultSet into an object of the result type.
                     * @param rs the ResultSet we're working through
                     * @param rowNum row number (from 0) we're up to
                     * @param parameters to the query (passed to the execute() method).
                     *  Subclasses are rarely interested in these.
                     *  It can be {#code null} if there are no parameters.
                     * @param context passed to the execute() method.
                     *  It can be {#code null} if no contextual information is need.
                     * @return an object of the result type
                     * @throws SQLException if there's an error extracting data.
                     *  Subclasses can simply not catch SQLExceptions, relying on the
                     *  framework to clean up.
                     */
                    // @ts-ignore
                    abstract mapRow(rs: java.sql.ResultSet, rowNum: number /*int*/, parameters: java.lang.Object[] | any[], context: java.util.Map<any, any>): T
                }
            }
        }
    }
}
