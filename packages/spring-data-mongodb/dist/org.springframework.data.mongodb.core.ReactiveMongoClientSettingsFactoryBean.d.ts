declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * A factory bean for construction of a {@link MongoClientSettings} instance to be used with the async MongoDB driver.
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    class ReactiveMongoClientSettingsFactoryBean extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the {@link ReadPreference}.
                         * @param readPreference
                         */
                        // @ts-ignore
                        public setReadPreference(readPreference: ReadPreference): void
                        /**
                         * Set the {@link WriteConcern}.
                         * @param writeConcern
                         */
                        // @ts-ignore
                        public setWriteConcern(writeConcern: WriteConcern): void
                        /**
                         * Set the {@link ReadConcern}.
                         * @param readConcern
                         */
                        // @ts-ignore
                        public setReadConcern(readConcern: ReadConcern): void
                        /**
                         * Set the List of {@link MongoCredential}s.
                         * @param credentialList must not be {#literal null}.
                         */
                        // @ts-ignore
                        public setCredentialList(credentialList: java.util.List<MongoCredential> | Array<MongoCredential>): void
                        /**
                         * Adds the {@link MongoCredential} to the list of credentials.
                         * @param mongoCredential must not be {#literal null}.
                         */
                        // @ts-ignore
                        public addMongoCredential(mongoCredential: MongoCredential): void
                        /**
                         * Set the {@link StreamFactoryFactory}.
                         * @param streamFactoryFactory
                         */
                        // @ts-ignore
                        public setStreamFactoryFactory(streamFactoryFactory: StreamFactoryFactory): void
                        /**
                         * Set the {@link CodecRegistry}.
                         * @param codecRegistry
                         */
                        // @ts-ignore
                        public setCodecRegistry(codecRegistry: CodecRegistry): void
                        /**
                         * Set the {@link ClusterSettings}.
                         * @param clusterSettings
                         */
                        // @ts-ignore
                        public setClusterSettings(clusterSettings: ClusterSettings): void
                        /**
                         * Set the {@link SocketSettings}.
                         * @param socketSettings
                         */
                        // @ts-ignore
                        public setSocketSettings(socketSettings: SocketSettings): void
                        /**
                         * Set the heartbeat {@link SocketSettings}.
                         * @param heartbeatSocketSettings
                         */
                        // @ts-ignore
                        public setHeartbeatSocketSettings(heartbeatSocketSettings: SocketSettings): void
                        /**
                         * Set the {@link ConnectionPoolSettings}.
                         * @param connectionPoolSettings
                         */
                        // @ts-ignore
                        public setConnectionPoolSettings(connectionPoolSettings: ConnectionPoolSettings): void
                        /**
                         * Set the {@link ServerSettings}.
                         * @param serverSettings
                         */
                        // @ts-ignore
                        public setServerSettings(serverSettings: ServerSettings): void
                        /**
                         * Set the {@link SslSettings}.
                         * @param sslSettings
                         */
                        // @ts-ignore
                        public setSslSettings(sslSettings: SslSettings): void
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        // @ts-ignore
                        createInstance(): MongoClientSettings
                    }
                }
            }
        }
    }
}
