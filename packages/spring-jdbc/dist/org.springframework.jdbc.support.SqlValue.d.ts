declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * Simple interface for complex types to be set as statement parameters.
                 * <p>Implementations perform the actual work of setting the actual values. They must
                 * implement the callback method {@code setValue} which can throw SQLExceptions
                 * that will be caught and translated by the calling code. This callback method has
                 * access to the underlying Connection via the given PreparedStatement object, if that
                 * should be needed to create any database-specific objects.
                 * @author Juergen Hoeller
                 * @since 2.5.6
                 * @see org.springframework.jdbc.core.SqlTypeValue
                 * @see org.springframework.jdbc.core.DisposableSqlTypeValue
                 */
                // @ts-ignore
                interface SqlValue {
                    /**
                     * Set the value on the given PreparedStatement.
                     * @param ps the PreparedStatement to work on
                     * @param paramIndex the index of the parameter for which we need to set the value
                     * @throws SQLException if an SQLException is encountered while setting parameter values
                     */
                    // @ts-ignore
                    setValue(ps: java.sql.PreparedStatement, paramIndex: number /*int*/): void
                    /**
                     * Clean up resources held by this value object.
                     */
                    // @ts-ignore
                    cleanup(): void
                }
            }
        }
    }
}
