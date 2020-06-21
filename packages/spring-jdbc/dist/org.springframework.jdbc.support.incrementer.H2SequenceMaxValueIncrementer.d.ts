declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace incrementer {
                    /**
                     * {@link DataFieldMaxValueIncrementer} that retrieves the next value
                     * of a given H2 sequence.
                     * @author Thomas Risberg
                     * @since 2.5
                     */
                    // @ts-ignore
                    class H2SequenceMaxValueIncrementer extends org.springframework.jdbc.support.incrementer.AbstractSequenceMaxValueIncrementer {
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
                        // @ts-ignore
                        getSequenceQuery(): string
                    }
                }
            }
        }
    }
}
