declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                /**
                 * Interface for factories creating reactive {@link MongoDatabase} instances.
                 * @author Mark Paluch
                 * @author Christoph Strobl
                 * @since 2.0
                 */
                // @ts-ignore
                interface ReactiveMongoDatabaseFactory extends org.springframework.data.mongodb.CodecRegistryProvider {
                    /**
                     * Creates a default {@link MongoDatabase} instance.
                     * @return 
                     * @throws DataAccessException
                     */
                    // @ts-ignore
                    getMongoDatabase(): MongoDatabase
                    /**
                     * Creates a {@link MongoDatabase} instance to access the database with the given name.
                     * @param dbName must not be {#literal null} or empty.
                     * @return 
                     * @throws DataAccessException
                     */
                    // @ts-ignore
                    getMongoDatabase(dbName: java.lang.String | string): MongoDatabase
                    /**
                     * Exposes a shared {@link MongoExceptionTranslator}.
                     * @return will never be {#literal null}.
                     */
                    // @ts-ignore
                    getExceptionTranslator(): PersistenceExceptionTranslator
                    /**
                     * Get the underlying {@link CodecRegistry} used by the reactive MongoDB Java driver.
                     * @return never {#literal null}.
                     */
                    // @ts-ignore
                    getCodecRegistry(): CodecRegistry
                    /**
                     * Obtain a {@link Mono} emitting a {@link ClientSession} for given {@link ClientSessionOptions options}.
                     * @param options must not be {#literal null}.
                     * @return never {#literal null}.
                     * @since 2.1
                     */
                    // @ts-ignore
                    getSession(options: ClientSessionOptions): object
                    /**
                     * Obtain a {@link ClientSession} bound instance of {@link ReactiveMongoDatabaseFactory} returning
                     * {@link MongoDatabase} instances that are aware and bound to the given session.
                     * @param session must not be {#literal null}.
                     * @return never {#literal null}.
                     * @since 2.1
                     */
                    // @ts-ignore
                    withSession(session: ClientSession): org.springframework.data.mongodb.ReactiveMongoDatabaseFactory
                }
            }
        }
    }
}
