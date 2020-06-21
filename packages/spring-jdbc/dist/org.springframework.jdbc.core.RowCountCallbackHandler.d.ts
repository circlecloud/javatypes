declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Implementation of RowCallbackHandler. Convenient superclass for callback handlers.
                 * An instance can only be used once.
                 * <p>We can either use this on its own (for example, in a test case, to ensure
                 * that our result sets have valid dimensions), or use it as a superclass
                 * for callback handlers that actually do something, and will benefit
                 * from the dimension information it provides.
                 * <p>A usage example with JdbcTemplate:
                 * <pre class="code">JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);  // reusable object
                 * RowCountCallbackHandler countCallback = new RowCountCallbackHandler();  // not reusable
                 * jdbcTemplate.query("select * from user", countCallback);
                 * int rowCount = countCallback.getRowCount();</pre>
                 * @author Rod Johnson
                 * @since May 3, 2001
                 */
                // @ts-ignore
                class RowCountCallbackHandler extends java.lang.Object implements org.springframework.jdbc.core.RowCallbackHandler {
                    // @ts-ignore
                    constructor()
                    /**
                     * Implementation of ResultSetCallbackHandler.
                     * Work out column size if this is the first row, otherwise just count rows.
                     * <p>Subclasses can perform custom extraction or processing
                     * by overriding the {@code processRow(ResultSet, int)} method.
                     * @see #processRow(java.sql.ResultSet, int)
                     */
                    // @ts-ignore
                    public processRow(rs: java.sql.ResultSet): void
                    /**
                     * Subclasses may override this to perform custom extraction
                     * or processing. This class's implementation does nothing.
                     * @param rs the ResultSet to extract data from. This method is
                     *  invoked for each row
                     * @param rowNum number of the current row (starting from 0)
                     */
                    // @ts-ignore
                    processRow(rs: java.sql.ResultSet, rowNum: number /*int*/): void
                    /**
                     * Return the types of the columns as java.sql.Types constants
                     * Valid after processRow is invoked the first time.
                     * @return the types of the columns as java.sql.Types constants.
                     *  <b>Indexed from 0 to n-1.</b>
                     */
                    // @ts-ignore
                    public getColumnTypes(): number /*int*/[]
                    /**
                     * Return the names of the columns.
                     * Valid after processRow is invoked the first time.
                     * @return the names of the columns.
                     *  <b>Indexed from 0 to n-1.</b>
                     */
                    // @ts-ignore
                    public getColumnNames(): string[]
                    /**
                     * Return the row count of this ResultSet.
                     * Only valid after processing is complete
                     * @return the number of rows in this ResultSet
                     */
                    // @ts-ignore
                    public getRowCount(): number /*int*/
                    /**
                     * Return the number of columns in this result set.
                     * Valid once we've seen the first row,
                     * so subclasses can use it during processing
                     * @return the number of columns in this result set
                     */
                    // @ts-ignore
                    public getColumnCount(): number /*int*/
                }
            }
        }
    }
}
