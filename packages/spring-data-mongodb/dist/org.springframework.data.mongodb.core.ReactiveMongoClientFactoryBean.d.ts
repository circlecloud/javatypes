declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Convenient factory for configuring a reactive streams {@link MongoClient}.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    class ReactiveMongoClientFactoryBean extends java.lang.Object {
                        // @ts-ignore
                        constructor()
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
                         * Configures the connection string.
                         * @param connectionString
                         */
                        // @ts-ignore
                        public setConnectionString(connectionString: java.lang.String | string): void
                        /**
                         * Configures the mongo client settings.
                         * @param mongoClientSettings
                         */
                        // @ts-ignore
                        public setMongoClientSettings(mongoClientSettings: MongoClientSettings): void
                        /**
                         * Configures the {@link PersistenceExceptionTranslator} to use.
                         * @param exceptionTranslator
                         */
                        // @ts-ignore
                        public setExceptionTranslator(exceptionTranslator: PersistenceExceptionTranslator): void
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        // @ts-ignore
                        createInstance(): MongoClient
                        // @ts-ignore
                        destroyInstance(instance: MongoClient): void
                        // @ts-ignore
                        public translateExceptionIfPossible(ex: java.lang.RuntimeException): DataAccessException
                    }
                }
            }
        }
    }
}
