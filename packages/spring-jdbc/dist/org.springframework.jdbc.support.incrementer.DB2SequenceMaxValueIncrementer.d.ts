declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace incrementer {
                    /**
                     * {@link DataFieldMaxValueIncrementer} that retrieves the next value
                     * of a given sequence on DB2 LUW (for Linux, Unix and Windows).
                     * <p>Thanks to Mark MacMahon for the suggestion!
                     * @author Juergen Hoeller
                     * @since 1.1.3
                     * @deprecated in favor of the specifically named {#link Db2LuwMaxValueIncrementer}
                     */
                    // @ts-ignore
                    class DB2SequenceMaxValueIncrementer extends org.springframework.jdbc.support.incrementer.Db2LuwMaxValueIncrementer {
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
