declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace incrementer {
                    /**
                     * Abstract base class for {@link DataFieldMaxValueIncrementer} implementations that use
                     * a database sequence. Subclasses need to provide the database-specific SQL to use.
                     * @author Juergen Hoeller
                     * @since 26.02.2004
                     * @see #getSequenceQuery
                     */
                    // @ts-ignore
                    abstract class AbstractSequenceMaxValueIncrementer extends org.springframework.jdbc.support.incrementer.AbstractDataFieldMaxValueIncrementer {
                        /**
                         * Default constructor for bean property style usage.
                         * @see #setDataSource
                         * @see #setIncrementerName
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Convenience constructor.
                         * @param dataSource the DataSource to use
                         * @param incrementerName the name of the sequence/table to use
                         */
                        // @ts-ignore
                        constructor(dataSource: javax.sql.DataSource, incrementerName: java.lang.String | string)
                        /**
                         * Executes the SQL as specified by {@link #getSequenceQuery()}.
                         */
                        // @ts-ignore
                        getNextKey(): number /*long*/
                        /**
                         * Return the database-specific query to use for retrieving a sequence value.
                         * <p>The provided SQL is supposed to result in a single row with a single
                         * column that allows for extracting a {@code long} value.
                         */
                        // @ts-ignore
                        abstract getSequenceQuery(): string
                    }
                }
            }
        }
    }
}
