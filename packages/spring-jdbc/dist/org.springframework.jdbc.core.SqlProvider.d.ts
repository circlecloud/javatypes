declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Interface to be implemented by objects that can provide SQL strings.
                 * <p>Typically implemented by PreparedStatementCreators, CallableStatementCreators
                 * and StatementCallbacks that want to expose the SQL they use to create their
                 * statements, to allow for better contextual information in case of exceptions.
                 * @author Juergen Hoeller
                 * @since 16.03.2004
                 * @see PreparedStatementCreator
                 * @see CallableStatementCreator
                 * @see StatementCallback
                 */
                // @ts-ignore
                interface SqlProvider {
                    /**
                     * Return the SQL string for this object, i.e.
                     * typically the SQL used for creating statements.
                     * @return the SQL string, or {#code null}
                     */
                    // @ts-ignore
                    getSql(): string
                }
            }
        }
    }
}
