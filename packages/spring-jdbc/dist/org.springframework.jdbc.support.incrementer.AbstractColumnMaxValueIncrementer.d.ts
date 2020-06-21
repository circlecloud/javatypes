declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace incrementer {
                    /**
                     * Abstract base class for {@link DataFieldMaxValueIncrementer} implementations that use
                     * a column in a custom sequence table. Subclasses need to provide the specific handling
                     * of that table in their {@link #getNextKey()} implementation.
                     * @author Juergen Hoeller
                     * @since 2.5.3
                     */
                    // @ts-ignore
                    abstract class AbstractColumnMaxValueIncrementer extends org.springframework.jdbc.support.incrementer.AbstractDataFieldMaxValueIncrementer {
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
                         * Set the name of the column in the sequence table.
                         */
                        // @ts-ignore
                        public setColumnName(columnName: java.lang.String | string): void
                        /**
                         * Return the name of the column in the sequence table.
                         */
                        // @ts-ignore
                        public getColumnName(): string
                        /**
                         * Set the number of buffered keys.
                         */
                        // @ts-ignore
                        public setCacheSize(cacheSize: number /*int*/): void
                        /**
                         * Return the number of buffered keys.
                         */
                        // @ts-ignore
                        public getCacheSize(): number /*int*/
                        // @ts-ignore
                        public afterPropertiesSet(): void
                    }
                }
            }
        }
    }
}
