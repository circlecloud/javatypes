declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Convenient factory for configuring MongoDB.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.7
                     */
                    // @ts-ignore
                    class MongoClientFactoryBean extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the {@link MongoClientOptions} to be used when creating {@link MongoClient}.
                         * @param mongoClientOptions
                         */
                        // @ts-ignore
                        public setMongoClientOptions(mongoClientOptions: MongoClientOptions): void
                        /**
                         * Set the list of credentials to be used when creating {@link MongoClient}.
                         * @param credentials can be {#literal null}.
                         */
                        // @ts-ignore
                        public setCredentials(credentials: MongoCredential[]): void
                        /**
                         * Set the list of {@link ServerAddress} to build up a replica set for.
                         * @param replicaSetSeeds can be {#literal null}.
                         */
                        // @ts-ignore
                        public setReplicaSetSeeds(replicaSetSeeds: ServerAddress[]): void
                        /**
                         * Configures the host to connect to.
                         * @param host
                         */
                        // @ts-ignore
                        public setHost(host: java.lang.String | string): void
                        /**
                         * Configures the port to connect to.
                         * @param port
                         */
                        // @ts-ignore
                        public setPort(port: number /*int*/): void
                        /**
                         * Configures the {@link PersistenceExceptionTranslator} to use.
                         * @param exceptionTranslator
                         */
                        // @ts-ignore
                        public setExceptionTranslator(exceptionTranslator: PersistenceExceptionTranslator): void
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        // @ts-ignore
                        public translateExceptionIfPossible(ex: java.lang.RuntimeException): DataAccessException
                        // @ts-ignore
                        createInstance(): MongoClient
                        // @ts-ignore
                        destroyInstance(instance: MongoClient): void
                    }
                }
            }
        }
    }
}
