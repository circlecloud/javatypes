declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace incrementer {
                    /**
                     * {@link DataFieldMaxValueIncrementer} that retrieves the next value
                     * of a given PostgreSQL sequence.
                     * <p>Thanks to Tomislav Urban for the suggestion!
                     * @author Juergen Hoeller
                     * @deprecated in favor of the differently named {#link PostgresSequenceMaxValueIncrementer}
                     */
                    // @ts-ignore
                    class PostgreSQLSequenceMaxValueIncrementer extends org.springframework.jdbc.support.incrementer.PostgresSequenceMaxValueIncrementer {
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
                    }
                }
            }
        }
    }
}
