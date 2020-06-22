declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                /**
                 * Interface for factories creating {@link MongoDatabase} instances.
                 * @author Mark Pollack
                 * @author Thomas Darimont
                 * @author Christoph Strobl
                 */
                // @ts-ignore
                interface MongoDbFactory extends org.springframework.data.mongodb.CodecRegistryProvider, org.springframework.data.mongodb.MongoSessionProvider {
                    /**
                     * Creates a default {@link MongoDatabase} instance.
                     * @return 
                     * @throws DataAccessException
                     */
                    // @ts-ignore
                    getDb(): MongoDatabase
                    /**
                     * Creates a {@link DB} instance to access the database with the given name.
                     * @param dbName must not be {#literal null} or empty.
                     * @return 
                     * @throws DataAccessException
                     */
                    // @ts-ignore
                    getDb(dbName: java.lang.String | string): MongoDatabase
                    /**
                     * Exposes a shared {@link MongoExceptionTranslator}.
                     * @return will never be {#literal null}.
                     */
                    // @ts-ignore
                    getExceptionTranslator(): PersistenceExceptionTranslator
                    /**
                     * Get the legacy database entry point. Please consider {@link #getDb()} instead.
                     * @return 
                     * @deprecated since 2.1, use {#link #getDb()}. This method will be removed with a future version as it works only
                     *              with the legacy MongoDB driver.
                     */
                    // @ts-ignore
                    getLegacyDb(): DB
                    /**
                     * Get the underlying {@link CodecRegistry} used by the MongoDB Java driver.
                     * @return never {#literal null}.
                     */
                    // @ts-ignore
                    getCodecRegistry(): CodecRegistry
                    /**
                     * Obtain a {@link ClientSession} for given ClientSessionOptions.
                     * @param options must not be {#literal null}.
                     * @return never {#literal null}.
                     * @since 2.1
                     */
                    // @ts-ignore
                    getSession(options: ClientSessionOptions): ClientSession
                    /**
                     * Obtain a {@link ClientSession} bound instance of {@link MongoDbFactory} returning {@link MongoDatabase} instances
                     * that are aware and bound to a new session with given {@link ClientSessionOptions options}.
                     * @param options must not be {#literal null}.
                     * @return never {#literal null}.
                     * @since 2.1
                     */
                    // @ts-ignore
                    withSession(options: ClientSessionOptions): org.springframework.data.mongodb.MongoDbFactory
                    /**
                     * Obtain a {@link ClientSession} bound instance of {@link MongoDbFactory} returning {@link MongoDatabase} instances
                     * that are aware and bound to the given session.
                     * @param session must not be {#literal null}.
                     * @return never {#literal null}.
                     * @since 2.1
                     */
                    // @ts-ignore
                    withSession(session: ClientSession): org.springframework.data.mongodb.MongoDbFactory
                    /**
                     * Returns if the given {@link MongoDbFactory} is bound to a {@link ClientSession} that has an
                     * {@link ClientSession#hasActiveTransaction() active transaction}.
                     * @return {#literal true} if there's an active transaction, {@literal false} otherwise.
                     * @since 2.1.3
                     */
                    // @ts-ignore
                    isTransactionActive(): boolean
                }
            }
        }
    }
}
