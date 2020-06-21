declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace incrementer {
                    /**
                     * {@link DataFieldMaxValueIncrementer} that increments the maximum value of a given HSQL table
                     * with the equivalent of an auto-increment column. Note: If you use this class, your HSQL
                     * key column should <i>NOT</i> be auto-increment, as the sequence table does the job.
                     * <p>The sequence is kept in a table. There should be one sequence table per
                     * table that needs an auto-generated key.
                     * <p>Example:
                     * <pre class="code">create table tab (id int not null primary key, text varchar(100));
                     * create table tab_sequence (value identity);
                     * insert into tab_sequence values(0);</pre>
                     * If "cacheSize" is set, the intermediate values are served without querying the
                     * database. If the server or your application is stopped or crashes or a transaction
                     * is rolled back, the unused values will never be served. The maximum hole size in
                     * numbering is consequently the value of cacheSize.
                     * <p><b>NOTE:</b> HSQL now supports sequences and you should consider using them instead:
                     * {@link HsqlSequenceMaxValueIncrementer}
                     * @author Jean-Pierre Pawlak
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @see HsqlSequenceMaxValueIncrementer
                     */
                    // @ts-ignore
                    class HsqlMaxValueIncrementer extends org.springframework.jdbc.support.incrementer.AbstractIdentityColumnMaxValueIncrementer {
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
                         * @param incrementerName the name of the sequence/table to use
                         * @param columnName the name of the column in the sequence table to use
                         */
                        // @ts-ignore
                        constructor(dataSource: javax.sql.DataSource, incrementerName: java.lang.String | string, columnName: java.lang.String | string)
                        // @ts-ignore
                        getIncrementStatement(): string
                        // @ts-ignore
                        getIdentityStatement(): string
                    }
                }
            }
        }
    }
}
