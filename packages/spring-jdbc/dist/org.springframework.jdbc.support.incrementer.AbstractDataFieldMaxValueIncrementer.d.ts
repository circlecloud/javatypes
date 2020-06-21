declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace incrementer {
                    /**
                     * Base implementation of {@link DataFieldMaxValueIncrementer} that delegates
                     * to a single {@link #getNextKey} template method that returns a {@code long}.
                     * Uses longs for String values, padding with zeroes if required.
                     * @author Dmitriy Kopylenko
                     * @author Juergen Hoeller
                     * @author Jean-Pierre Pawlak
                     * @author Juergen Hoeller
                     */
                    // @ts-ignore
                    abstract class AbstractDataFieldMaxValueIncrementer extends java.lang.Object implements org.springframework.jdbc.support.incrementer.DataFieldMaxValueIncrementer {
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
                         * The length to which a string result should be pre-pended with zeroes.
                         */
                        // @ts-ignore
                        paddingLength: number /*int*/
                        /**
                         * Set the data source to retrieve the value from.
                         */
                        // @ts-ignore
                        public setDataSource(dataSource: javax.sql.DataSource): void
                        /**
                         * Return the data source to retrieve the value from.
                         */
                        // @ts-ignore
                        public getDataSource(): javax.sql.DataSource
                        /**
                         * Set the name of the sequence/table.
                         */
                        // @ts-ignore
                        public setIncrementerName(incrementerName: java.lang.String | string): void
                        /**
                         * Return the name of the sequence/table.
                         */
                        // @ts-ignore
                        public getIncrementerName(): string
                        /**
                         * Set the padding length, i.e. the length to which a string result
                         * should be pre-pended with zeroes.
                         */
                        // @ts-ignore
                        public setPaddingLength(paddingLength: number /*int*/): void
                        /**
                         * Return the padding length for String values.
                         */
                        // @ts-ignore
                        public getPaddingLength(): number /*int*/
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public nextIntValue(): number /*int*/
                        // @ts-ignore
                        public nextLongValue(): number /*long*/
                        // @ts-ignore
                        public nextStringValue(): string
                        /**
                         * Determine the next key to use, as a long.
                         * @return the key to use as a long. It will eventually be converted later
                         *  in another format by the public concrete methods of this class.
                         */
                        // @ts-ignore
                        abstract getNextKey(): number /*long*/
                    }
                }
            }
        }
    }
}
