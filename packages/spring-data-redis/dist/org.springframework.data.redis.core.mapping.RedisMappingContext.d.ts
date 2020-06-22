declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace mapping {
                        /**
                         * Redis specific {@link MappingContext}.
                         * @author Christoph Strobl
                         * @author Oliver Gierke
                         * @since 1.7
                         */
                        // @ts-ignore
                        class RedisMappingContext extends java.lang.Object {
                            /**
                             * Creates new {@link RedisMappingContext} with empty {@link MappingConfiguration}.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Creates new {@link RedisMappingContext}.
                             * @param mappingConfiguration can be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(mappingConfiguration: org.springframework.data.redis.core.convert.MappingConfiguration)
                            /**
                             * Configures the {@link KeySpaceResolver} to be used if not explicit key space is annotated to the domain type.
                             * @param fallbackKeySpaceResolver can be {#literal null}.
                             */
                            // @ts-ignore
                            public setFallbackKeySpaceResolver(fallbackKeySpaceResolver: KeySpaceResolver): void
                            // @ts-ignore
                            createPersistentEntity<T>(typeInformation: object): org.springframework.data.redis.core.mapping.RedisPersistentEntity<T>
                            // @ts-ignore
                            createPersistentProperty(property: Property, owner: org.springframework.data.redis.core.mapping.RedisPersistentEntity<any>, simpleTypeHolder: SimpleTypeHolder): org.springframework.data.redis.core.mapping.RedisPersistentProperty
                            /**
                             * Get the {@link MappingConfiguration} used.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getMappingConfiguration(): org.springframework.data.redis.core.convert.MappingConfiguration
                        }
                    }
                }
            }
        }
    }
}
