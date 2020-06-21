declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace incrementer {
                    /**
                     * {@link DataFieldMaxValueIncrementer} that retrieves the next value
                     * of a given sequence on DB2 for the mainframe (z/OS, DB2/390, DB2/400).
                     * <p>Thanks to Jens Eickmeyer for the suggestion!
                     * @author Juergen Hoeller
                     * @since 4.3.15
                     * @see Db2LuwMaxValueIncrementer
                     */
                    // @ts-ignore
                    class Db2MainframeMaxValueIncrementer extends org.springframework.jdbc.support.incrementer.AbstractSequenceMaxValueIncrementer {
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
