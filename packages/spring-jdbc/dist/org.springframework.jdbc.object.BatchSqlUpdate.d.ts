declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace object {
                /**
                 * SqlUpdate subclass that performs batch update operations. Encapsulates
                 * queuing up records to be updated, and adds them as a single batch once
                 * {@code flush} is called or the given batch size has been met.
                 * <p>Note that this class is a <b>non-thread-safe object</b>, in contrast
                 * to all other JDBC operations objects in this package. You need to create
                 * a new instance of it for each use, or call {@code reset} before
                 * reuse within the same thread.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see #flush
                 * @see #reset
                 */
                // @ts-ignore
                class BatchSqlUpdate extends org.springframework.jdbc.object.SqlUpdate {
                    /**
                     * Constructor to allow use as a JavaBean. DataSource and SQL
                     * must be supplied before compilation and use.
                     * @see #setDataSource
                     * @see #setSql
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct an update object with a given DataSource and SQL.
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
                     * @param batchSize the number of statements that will trigger
                     *  an automatic intermediate flush
                     * @see java.sql.Types
                     */
                    // @ts-ignore
                    constructor(ds: javax.sql.DataSource, sql: java.lang.String | string, types: number /*int*/[], batchSize: number /*int*/)
                    /**
                     * Default number of inserts to accumulate before committing a batch (5000).
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_BATCH_SIZE: number /*int*/
                    /**
                     * Set the number of statements that will trigger an automatic intermediate
                     * flush. {@code update} calls or the given statement parameters will
                     * be queued until the batch size is met, at which point it will empty the
                     * queue and execute the batch.
                     * <p>You can also flush already queued statements with an explicit
                     * {@code flush} call. Note that you need to this after queueing
                     * all parameters to guarantee that all statements have been flushed.
                     */
                    // @ts-ignore
                    public setBatchSize(batchSize: number /*int*/): void
                    /**
                     * Set whether to track the rows affected by batch updates performed
                     * by this operation object.
                     * <p>Default is "true". Turn this off to save the memory needed for
                     * the list of row counts.
                     * @see #getRowsAffected()
                     */
                    // @ts-ignore
                    public setTrackRowsAffected(trackRowsAffected: boolean): void
                    /**
                     * BatchSqlUpdate does not support BLOB or CLOB parameters.
                     */
                    // @ts-ignore
                    supportsLobParameters(): boolean
                    /**
                     * Overridden version of {@code update} that adds the given statement
                     * parameters to the queue rather than executing them immediately.
                     * All other {@code update} methods of the SqlUpdate base class go
                     * through this method and will thus behave similarly.
                     * <p>You need to call {@code flush} to actually execute the batch.
                     * If the specified batch size is reached, an implicit flush will happen;
                     * you still need to finally call {@code flush} to flush all statements.
                     * @param params array of parameter objects
                     * @return the number of rows affected by the update (always -1,
                     *  meaning "not applicable", as the statement is not actually
                     *  executed by this method)
                     * @see #flush
                     */
                    // @ts-ignore
                    public update(...params: java.lang.Object[] | any[]): number /*int*/
                    /**
                     * Trigger any queued update operations to be added as a final batch.
                     * @return an array of the number of rows affected by each statement
                     */
                    // @ts-ignore
                    public flush(): number /*int*/[]
                    /**
                     * Return the current number of statements or statement parameters
                     * in the queue.
                     */
                    // @ts-ignore
                    public getQueueCount(): number /*int*/
                    /**
                     * Return the number of already executed statements.
                     */
                    // @ts-ignore
                    public getExecutionCount(): number /*int*/
                    /**
                     * Return the number of affected rows for all already executed statements.
                     * Accumulates all of {@code flush}'s return values until
                     * {@code reset} is invoked.
                     * @return an array of the number of rows affected by each statement
                     * @see #reset
                     */
                    // @ts-ignore
                    public getRowsAffected(): number /*int*/[]
                    /**
                     * Reset the statement parameter queue, the rows affected cache,
                     * and the execution count.
                     */
                    // @ts-ignore
                    public reset(): void
                }
            }
        }
    }
}
