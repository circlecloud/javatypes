declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace object {
                /**
                 * Reusable query in which concrete subclasses must implement the abstract
                 * mapRow(ResultSet, int) method to convert each row of the JDBC ResultSet
                 * into an object.
                 * <p>Simplifies MappingSqlQueryWithParameters API by dropping parameters and
                 * context. Most subclasses won't care about parameters. If you don't use
                 * contextual information, subclass this instead of MappingSqlQueryWithParameters.
                 * @author Rod Johnson
                 * @author Thomas Risberg
                 * @author Jean-Pierre Pawlak
                 * @param <T> the result type
                 * @see MappingSqlQueryWithParameters
                 */
                // @ts-ignore
                abstract class MappingSqlQuery<T> extends org.springframework.jdbc.object.MappingSqlQueryWithParameters<T> {
                    /**
                     * Constructor that allows use as a JavaBean.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Convenient constructor with DataSource and SQL string.
                     * @param ds the DataSource to use to obtain connections
                     * @param sql the SQL to run
                     */
                    // @ts-ignore
                    constructor(ds: javax.sql.DataSource, sql: java.lang.String | string)
                    /**
                     * This method is implemented to invoke the simpler mapRow
                     * template method, ignoring parameters.
                     * @see #mapRow(ResultSet, int)
                     */
                    // @ts-ignore
                    mapRow(rs: java.sql.ResultSet, rowNum: number /*int*/, parameters: java.lang.Object[] | any[], context: java.util.Map<any, any>): T
                    /**
                     * Subclasses must implement this method to convert each row of the
                     * ResultSet into an object of the result type.
                     * <p>Subclasses of this class, as opposed to direct subclasses of
                     * MappingSqlQueryWithParameters, don't need to concern themselves
                     * with the parameters to the execute method of the query object.
                     * @param rs the ResultSet we're working through
                     * @param rowNum row number (from 0) we're up to
                     * @return an object of the result type
                     * @throws SQLException if there's an error extracting data.
                     *  Subclasses can simply not catch SQLExceptions, relying on the
                     *  framework to clean up.
                     */
                    // @ts-ignore
                    abstract mapRow(rs: java.sql.ResultSet, rowNum: number /*int*/): T
                }
            }
        }
    }
}
