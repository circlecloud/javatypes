declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                /**
                 * A simple interface for obtaining a {@link ClientSession} to be consumed by
                 * {@link org.springframework.data.mongodb.core.MongoOperations} and MongoDB native operations that support causal
                 * consistency and transactions.
                 * @author Christoph Strobl
                 * @currentRead Shadow's Edge - Brent Weeks
                 * @since 2.1
                 */
                // @ts-ignore
                interface MongoSessionProvider {
                    /**
                     * Obtain a {@link ClientSession} with with given options.
                     * @param options must not be {#literal null}.
                     * @return never {#literal null}.
                     * @throws org.springframework.dao.DataAccessException
                     */
                    // @ts-ignore
                    getSession(options: ClientSessionOptions): ClientSession
                }
            }
        }
    }
}
