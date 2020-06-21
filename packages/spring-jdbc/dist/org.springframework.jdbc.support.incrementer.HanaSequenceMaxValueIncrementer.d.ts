declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace incrementer {
                    /**
                     * {@link DataFieldMaxValueIncrementer} that retrieves the next value
                     * of a given SAP HANA sequence.
                     * @author Jonathan Bregler
                     * @author Juergen Hoeller
                     * @since 4.3.15
                     */
                    // @ts-ignore
                    class HanaSequenceMaxValueIncrementer extends org.springframework.jdbc.support.incrementer.AbstractSequenceMaxValueIncrementer {
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
