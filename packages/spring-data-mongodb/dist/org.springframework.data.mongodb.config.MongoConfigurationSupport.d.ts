declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace config {
                    /**
                     * Base class for Spring Data MongoDB to be extended for JavaConfiguration usage.
                     * @author Mark Paluch
                     * @since 2.0
                     */
                    // @ts-ignore
                    abstract class MongoConfigurationSupport extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Return the name of the database to connect to.
                         * @return must not be {#literal null}.
                         */
                        // @ts-ignore
                        abstract getDatabaseName(): string
                        /**
                         * Returns the base packages to scan for MongoDB mapped entities at startup. Will return the package name of the
                         * configuration class' (the concrete class, not this one here) by default. So if you have a
                         * {@code com.acme.AppConfig} extending {@link MongoConfigurationSupport} the base package will be considered
                         * {@code com.acme} unless the method is overridden to implement alternate behavior.
                         * @return the base packages to scan for mapped {#link Document} classes or an empty collection to not enable scanning
                         *          for entities.
                         * @since 1.10
                         */
                        // @ts-ignore
                        getMappingBasePackages(): Array<java.lang.String | string>
                        /**
                         * Creates a {@link MongoMappingContext} equipped with entity classes scanned from the mapping base package.
                         * @see #getMappingBasePackages()
                         * @return 
                         * @throws ClassNotFoundException
                         */
                        // @ts-ignore
                        public mongoMappingContext(): org.springframework.data.mongodb.core.mapping.MongoMappingContext
                        /**
                         * Returns a {@link MappingContextIsNewStrategyFactory} wrapped into a {@link CachingIsNewStrategyFactory}.
                         * @return 
                         * @throws ClassNotFoundException
                         */
                        // @ts-ignore
                        public isNewStrategyFactory(): IsNewStrategyFactory
                        /**
                         * Register custom {@link Converter}s in a {@link CustomConversions} object if required. These
                         * {@link CustomConversions} will be registered with the {@link #mappingMongoConverter()} and
                         * {@link #mongoMappingContext()}. Returns an empty {@link MongoCustomConversions} instance by default.
                         * @return must not be {#literal null}.
                         */
                        // @ts-ignore
                        public customConversions(): CustomConversions
                        /**
                         * Scans the mapping base package for classes annotated with {@link Document}. By default, it scans for entities in
                         * all packages returned by {@link #getMappingBasePackages()}.
                         * @see #getMappingBasePackages()
                         * @return 
                         * @throws ClassNotFoundException
                         */
                        // @ts-ignore
                        getInitialEntitySet(): Array<java.lang.Class<any>>
                        /**
                         * Scans the given base package for entities, i.e. MongoDB specific types annotated with {@link Document} and
                         * {@link Persistent}.
                         * @param basePackage must not be {#literal null}.
                         * @return 
                         * @throws ClassNotFoundException
                         * @since 1.10
                         */
                        // @ts-ignore
                        scanForEntities(basePackage: java.lang.String | string): Array<java.lang.Class<any>>
                        /**
                         * Configures whether to abbreviate field names for domain objects by configuring a
                         * {@link CamelCaseAbbreviatingFieldNamingStrategy} on the {@link MongoMappingContext} instance created. For advanced
                         * customization needs, consider overriding {@link #mappingMongoConverter()}.
                         * @return 
                         */
                        // @ts-ignore
                        abbreviateFieldNames(): boolean
                        /**
                         * Configures a {@link FieldNamingStrategy} on the {@link MongoMappingContext} instance created.
                         * @return 
                         * @since 1.5
                         */
                        // @ts-ignore
                        fieldNamingStrategy(): FieldNamingStrategy
                    }
                }
            }
        }
    }
}
