declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace incrementer {
                    /**
                     * {@link DataFieldMaxValueIncrementer} that increments the maximum value of a given Derby table
                     * with the equivalent of an auto-increment column. Note: If you use this class, your Derby key
                     * column should <i>NOT</i> be defined as an IDENTITY column, as the sequence table does the job.
                     * <p>The sequence is kept in a table. There should be one sequence table per
                     * table that needs an auto-generated key.
                     * <p>Derby requires an additional column to be used for the insert since it is impossible
                     * to insert a null into the identity column and have the value generated.  This is solved by
                     * providing the name of a dummy column that also must be created in the sequence table.
                     * <p>Example:
                     * <pre class="code">create table tab (id int not null primary key, text varchar(100));
                     * create table tab_sequence (value int generated always as identity, dummy char(1));
                     * insert into tab_sequence (dummy) values(null);</pre>
                     * If "cacheSize" is set, the intermediate values are served without querying the
                     * database. If the server or your application is stopped or crashes or a transaction
                     * is rolled back, the unused values will never be served. The maximum hole size in
                     * numbering is consequently the value of cacheSize.
                     * <b>HINT:</b> Since Derby supports the JDBC 3.0 {@code getGeneratedKeys} method,
                     * it is recommended to use IDENTITY columns directly in the tables and then utilizing
                     * a {@link org.springframework.jdbc.support.KeyHolder} when calling the with the
                     * {@code update(PreparedStatementCreator psc, KeyHolder generatedKeyHolder)}
                     * method of the {@link org.springframework.jdbc.core.JdbcTemplate}.
                     * <p>Thanks to Endre Stolsvik for the suggestion!
                     * @author Thomas Risberg
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class DerbyMaxValueIncrementer extends org.springframework.jdbc.support.incrementer.AbstractIdentityColumnMaxValueIncrementer {
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
                        /**
                         * Convenience constructor.
                         * @param dataSource the DataSource to use
                         * @param incrementerName the name of the sequence/table to use
                         * @param columnName the name of the column in the sequence table to use
                         * @param dummyName the name of the dummy column used for inserts
                         */
                        // @ts-ignore
                        constructor(dataSource: javax.sql.DataSource, incrementerName: java.lang.String | string, columnName: java.lang.String | string, dummyName: java.lang.String | string)
                        /**
                         * Set the name of the dummy column.
                         */
                        // @ts-ignore
                        public setDummyName(dummyName: java.lang.String | string): void
                        /**
                         * Return the name of the dummy column.
                         */
                        // @ts-ignore
                        public getDummyName(): string
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
