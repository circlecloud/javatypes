declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace incrementer {
                    /**
                     * Interface that defines contract of incrementing any data store field's
                     * maximum value. Works much like a sequence number generator.
                     * <p>Typical implementations may use standard SQL, native RDBMS sequences
                     * or Stored Procedures to do the job.
                     * @author Dmitriy Kopylenko
                     * @author Jean-Pierre Pawlak
                     * @author Juergen Hoeller
                     */
                    // @ts-ignore
                    interface DataFieldMaxValueIncrementer {
                        /**
                         * Increment the data store field's max value as int.
                         * @return int next data store value such as <b>max + 1</b>
                         * @throws org.springframework.dao.DataAccessException in case of errors
                         */
                        // @ts-ignore
                        nextIntValue(): number /*int*/
                        /**
                         * Increment the data store field's max value as long.
                         * @return int next data store value such as <b>max + 1</b>
                         * @throws org.springframework.dao.DataAccessException in case of errors
                         */
                        // @ts-ignore
                        nextLongValue(): number /*long*/
                        /**
                         * Increment the data store field's max value as String.
                         * @return next data store value such as <b>max + 1</b>
                         * @throws org.springframework.dao.DataAccessException in case of errors
                         */
                        // @ts-ignore
                        nextStringValue(): string
                    }
                }
            }
        }
    }
}
