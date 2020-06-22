declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace config {
                    /**
                     * Base class for reactive Spring Data MongoDB configuration using JavaConfig.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     * @see MongoConfigurationSupport
                     */
                    // @ts-ignore
                    abstract class AbstractReactiveMongoConfiguration extends org.springframework.data.mongodb.config.MongoConfigurationSupport {
                        // @ts-ignore
                        constructor()
                        /**
                         * Return the Reactive Streams {@link MongoClient} instance to connect to. Annotate with {@link Bean} in case you want
                         * to expose a {@link MongoClient} instance to the {@link org.springframework.context.ApplicationContext}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public abstract reactiveMongoClient(): MongoClient
                        /**
                         * Creates {@link ReactiveMongoOperations}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public reactiveMongoTemplate(): org.springframework.data.mongodb.core.ReactiveMongoOperations
                        /**
                         * Creates a {@link ReactiveMongoDatabaseFactory} to be used by the {@link ReactiveMongoOperations}. Will use the
                         * {@link MongoClient} instance configured in {@link #reactiveMongoClient()}.
                         * @see #reactiveMongoClient()
                         * @see #reactiveMongoTemplate()
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        public reactiveMongoDbFactory(): org.springframework.data.mongodb.ReactiveMongoDatabaseFactory
                        /**
                         * Creates a {@link MappingMongoConverter} using the configured {@link #reactiveMongoDbFactory()} and
                         * {@link #mongoMappingContext()}. Will get {@link #customConversions()} applied.
                         * @see #customConversions()
                         * @see #mongoMappingContext()
                         * @see #reactiveMongoDbFactory()
                         * @return never {#literal null}.
                         * @throws Exception
                         */
                        // @ts-ignore
                        public mappingMongoConverter(): org.springframework.data.mongodb.core.convert.MappingMongoConverter
                    }
                }
            }
        }
    }
}
