declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace config {
                    /**
                     * Base class for Spring Data MongoDB configuration using JavaConfig with {@link com.mongodb.MongoClient}.
                     * <p />
                     * <strong>INFO:</strong>In case you want to use {@link com.mongodb.client.MongoClients} for configuration please refer
                     * to {@link AbstractMongoClientConfiguration}.
                     * @author Mark Pollack
                     * @author Oliver Gierke
                     * @author Thomas Darimont
                     * @author Ryan Tenney
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @see MongoConfigurationSupport
                     * @see AbstractMongoClientConfiguration
                     */
                    // @ts-ignore
                    abstract class AbstractMongoConfiguration extends org.springframework.data.mongodb.config.MongoConfigurationSupport {
                        // @ts-ignore
                        constructor()
                        /**
                         * Return the {@link MongoClient} instance to connect to. Annotate with {@link Bean} in case you want to expose a
                         * {@link MongoClient} instance to the {@link org.springframework.context.ApplicationContext}.
                         * @return 
                         */
                        // @ts-ignore
                        public abstract mongoClient(): MongoClient
                        /**
                         * Creates a {@link MongoTemplate}.
                         * @return 
                         */
                        // @ts-ignore
                        public mongoTemplate(): org.springframework.data.mongodb.core.MongoTemplate
                        /**
                         * Creates a {@link SimpleMongoDbFactory} to be used by the {@link MongoTemplate}. Will use the {@link MongoClient}
                         * instance configured in {@link #mongoClient()}.
                         * @see #mongoClient()
                         * @see #mongoTemplate()
                         * @return 
                         */
                        // @ts-ignore
                        public mongoDbFactory(): org.springframework.data.mongodb.MongoDbFactory
                        /**
                         * Return the base package to scan for mapped {@link Document}s. Will return the package name of the configuration
                         * class' (the concrete class, not this one here) by default. So if you have a {@code com.acme.AppConfig} extending
                         * {@link AbstractMongoConfiguration} the base package will be considered {@code com.acme} unless the method is
                         * overridden to implement alternate behavior.
                         * @return the base package to scan for mapped {#link Document} classes or {@literal null} to not enable scanning for
                         *          entities.
                         * @deprecated use {#link #getMappingBasePackages()} instead.
                         */
                        // @ts-ignore
                        getMappingBasePackage(): string
                        /**
                         * Creates a {@link MappingMongoConverter} using the configured {@link #mongoDbFactory()} and
                         * {@link #mongoMappingContext()}. Will get {@link #customConversions()} applied.
                         * @see #customConversions()
                         * @see #mongoMappingContext()
                         * @see #mongoDbFactory()
                         * @return 
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
