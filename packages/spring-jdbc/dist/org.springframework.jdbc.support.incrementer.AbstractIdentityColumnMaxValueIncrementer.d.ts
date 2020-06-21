declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                namespace incrementer {
                    /**
                     * Abstract base class for {@link DataFieldMaxValueIncrementer} implementations
                     * which are based on identity columns in a sequence-like table.
                     * @author Juergen Hoeller
                     * @author Thomas Risberg
                     * @since 4.1.2
                     */
                    // @ts-ignore
                    abstract class AbstractIdentityColumnMaxValueIncrementer extends org.springframework.jdbc.support.incrementer.AbstractColumnMaxValueIncrementer {
                        /**
                         * Default constructor for bean property style usage.
                         * @see #setDataSource
                         * @see #setIncrementerName
                         * @see #setColumnName
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(dataSource: javax.sql.DataSource, incrementerName: java.lang.String | string, columnName: java.lang.String | string)
                        /**
                         * Specify whether to delete the entire range below the current maximum key value
                         * ({@code false} - the default), or the specifically generated values ({@code true}).
                         * The former mode will use a where range clause whereas the latter will use an in
                         * clause starting with the lowest value minus 1, just preserving the maximum value.
                         */
                        // @ts-ignore
                        public setDeleteSpecificValues(deleteSpecificValues: boolean): void
                        /**
                         * Return whether to delete the entire range below the current maximum key value
                         * ({@code false} - the default), or the specifically generated values ({@code true}).
                         */
                        // @ts-ignore
                        public isDeleteSpecificValues(): boolean
                        // @ts-ignore
                        getNextKey(): number /*long*/
                        /**
                         * Statement to use to increment the "sequence" value.
                         * @return the SQL statement to use
                         */
                        // @ts-ignore
                        abstract getIncrementStatement(): string
                        /**
                         * Statement to use to obtain the current identity value.
                         * @return the SQL statement to use
                         */
                        // @ts-ignore
                        abstract getIdentityStatement(): string
                        /**
                         * Statement to use to clean up "sequence" values.
                         * <p>The default implementation either deletes the entire range below
                         * the current maximum value, or the specifically generated values
                         * (starting with the lowest minus 1, just preserving the maximum value)
                         * - according to the {@link #isDeleteSpecificValues()} setting.
                         * @param values the currently generated key values
                         *  (the number of values corresponds to {#link #getCacheSize()})
                         * @return the SQL statement to use
                         */
                        // @ts-ignore
                        getDeleteStatement(values: number /*long*/[]): string
                    }
                }
            }
        }
    }
}
