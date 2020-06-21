declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                namespace support {
                    /**
                     * Abstract implementation of the {@link InterruptibleBatchPreparedStatementSetter}
                     * interface, combining the check for available values and setting of those
                     * into a single callback method {@link #setValuesIfAvailable}.
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see #setValuesIfAvailable
                     */
                    // @ts-ignore
                    abstract class AbstractInterruptibleBatchPreparedStatementSetter extends java.lang.Object implements org.springframework.jdbc.core.InterruptibleBatchPreparedStatementSetter {
                        // @ts-ignore
                        constructor()
                        /**
                         * This implementation calls {@link #setValuesIfAvailable}
                         * and sets this instance's exhaustion flag accordingly.
                         */
                        // @ts-ignore
                        public setValues(ps: java.sql.PreparedStatement, i: number /*int*/): void
                        /**
                         * This implementation return this instance's current exhaustion flag.
                         */
                        // @ts-ignore
                        public isBatchExhausted(i: number /*int*/): boolean
                        /**
                         * This implementation returns {@code Integer.MAX_VALUE}.
                         * Can be overridden in subclasses to lower the maximum batch size.
                         */
                        // @ts-ignore
                        public getBatchSize(): number /*int*/
                        /**
                         * Check for available values and set them on the given PreparedStatement.
                         * If no values are available anymore, return {@code false}.
                         * @param ps the PreparedStatement we'll invoke setter methods on
                         * @param i index of the statement we're issuing in the batch, starting from 0
                         * @return whether there were values to apply (that is, whether the applied
                         *  parameters should be added to the batch and this method should be called
                         *  for a further iteration)
                         * @throws SQLException if an SQLException is encountered
                         *  (i.e. there is no need to catch SQLException)
                         */
                        // @ts-ignore
                        abstract setValuesIfAvailable(ps: java.sql.PreparedStatement, i: number /*int*/): boolean
                    }
                }
            }
        }
    }
}
