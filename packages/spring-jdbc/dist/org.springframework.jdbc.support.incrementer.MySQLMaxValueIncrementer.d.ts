declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace incrementer {
                    /**
                     * {@link DataFieldMaxValueIncrementer} that increments the maximum value of a given MySQL table
                     * with the equivalent of an auto-increment column. Note: If you use this class, your MySQL
                     * key column should <i>NOT</i> be auto-increment, as the sequence table does the job.
                     * <p>The sequence is kept in a table; there should be one sequence table per
                     * table that needs an auto-generated key. The storage engine used by the sequence table
                     * can be MYISAM or INNODB since the sequences are allocated using a separate connection
                     * without being affected by any other transactions that might be in progress.
                     * <p>Example:
                     * <pre class="code">create table tab (id int unsigned not null primary key, text varchar(100));
                     * create table tab_sequence (value int not null);
                     * insert into tab_sequence values(0);</pre>
                     * If "cacheSize" is set, the intermediate values are served without querying the
                     * database. If the server or your application is stopped or crashes or a transaction
                     * is rolled back, the unused values will never be served. The maximum hole size in
                     * numbering is consequently the value of cacheSize.
                     * <p>It is possible to avoid acquiring a new connection for the incrementer by setting the
                     * "useNewConnection" property to false. In this case you <i>MUST</i> use a non-transactional
                     * storage engine like MYISAM when defining the incrementer table.
                     * @author Jean-Pierre Pawlak
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     */
                    // @ts-ignore
                    class MySQLMaxValueIncrementer extends org.springframework.jdbc.support.incrementer.AbstractColumnMaxValueIncrementer {
                        /**
                         * Default constructor for bean property style usage.
                         * @see #setDataSource
                         * @see #setIncrementerName
                         * @see #setColumnName
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Convenience constructor.
                         * @param dataSource the DataSource to use
                         * @param incrementerName the name of the sequence table to use
                         * @param columnName the name of the column in the sequence table to use
                         */
                        // @ts-ignore
                        constructor(dataSource: javax.sql.DataSource, incrementerName: java.lang.String | string, columnName: java.lang.String | string)
                        /**
                         * Set whether to use a new connection for the incrementer.
                         * <p>{@code true} is necessary to support transactional storage engines,
                         * using an isolated separate transaction for the increment operation.
                         * {@code false} is sufficient if the storage engine of the sequence table
                         * is non-transactional (like MYISAM), avoiding the effort of acquiring an
                         * extra {@code Connection} for the increment operation.
                         * <p>Default is {@code true} since Spring Framework 5.0.
                         * @since 4.3.6
                         * @see DataSource#getConnection()
                         */
                        // @ts-ignore
                        public setUseNewConnection(useNewConnection: boolean): void
                        // @ts-ignore
                        getNextKey(): number /*long*/
                    }
                }
            }
        }
    }
}
