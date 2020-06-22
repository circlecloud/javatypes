declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * {@link RedisConverter} implementation creating flat binary map structure out of a given domain type. Considers
                         * {@link Indexed} annotation for enabling helper structures for finder operations. <br />
                         * <br />
                         * <strong>NOTE</strong> {@link MappingRedisConverter} is an {@link InitializingBean} and requires
                         * {@link MappingRedisConverter#afterPropertiesSet()} to be called.
                         * <pre>
                         * <code>
                         * &#64;RedisHash("persons")
                         * class Person {
                         * &#64;Id String id;
                         * String firstname;
                         * List<String> nicknames;
                         * List<Person> coworkers;
                         * Address address;
                         * &#64;Reference Country nationality;
                         * }
                         * </code>
                         * </pre>
                         * The above is represented as:
                         * <pre>
                         * <code>
                         * _class=org.example.Person
                         * id=1
                         * firstname=rand
                         * lastname=al'thor
                         * coworkers.[0].firstname=mat
                         * coworkers.[0].nicknames.[0]=prince of the ravens
                         * coworkers.[1].firstname=perrin
                         * coworkers.[1].address.city=two rivers
                         * nationality=nationality:andora
                         * </code>
                         * </pre>
                         * @author Christoph Strobl
                         * @author Greg Turnquist
                         * @author Mark Paluch
                         * @since 1.7
                         */
                        // @ts-ignore
                        class MappingRedisConverter extends java.lang.Object implements org.springframework.data.redis.core.convert.RedisConverter {
                            /**
                             * Creates new {@link MappingRedisConverter} and defaults {@link RedisMappingContext} when {@literal null}.
                             * @param mappingContext can be {#literal null}.
                             * @param indexResolver can be {#literal null}.
                             * @param referenceResolver can be not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(mappingContext: org.springframework.data.redis.core.mapping.RedisMappingContext, indexResolver: org.springframework.data.redis.core.convert.IndexResolver, referenceResolver: org.springframework.data.redis.core.convert.ReferenceResolver)
                            /**
                             * Creates new {@link MappingRedisConverter} and defaults {@link RedisMappingContext} when {@literal null}.
                             * @param mappingContext can be {#literal null}.
                             * @param indexResolver can be {#literal null}.
                             * @param referenceResolver can be {#literal null}.
                             * @param typeMapper can be {#literal null}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            constructor(mappingContext: org.springframework.data.redis.core.mapping.RedisMappingContext, indexResolver: org.springframework.data.redis.core.convert.IndexResolver, referenceResolver: org.springframework.data.redis.core.convert.ReferenceResolver, typeMapper: org.springframework.data.redis.core.convert.RedisTypeMapper)
                            // @ts-ignore
                            public read<R>(type: java.lang.Class<R>, source: org.springframework.data.redis.core.convert.RedisData): R
                            // @ts-ignore
                            readProperty(path: java.lang.String | string, source: org.springframework.data.redis.core.convert.RedisData, persistentProperty: org.springframework.data.redis.core.mapping.RedisPersistentProperty): any
                            // @ts-ignore
                            public write(source: java.lang.Object | any, sink: org.springframework.data.redis.core.convert.RedisData): void
                            // @ts-ignore
                            writePartialUpdate(update: org.springframework.data.redis.core.PartialUpdate<any>, sink: org.springframework.data.redis.core.convert.RedisData): void
                            /**
                             * Convert given source to binary representation using the underlying {@link ConversionService}.
                             * @param source
                             * @return 
                             * @throws ConverterNotFoundException
                             */
                            // @ts-ignore
                            public toBytes(source: java.lang.Object | any): number /*byte*/[]
                            /**
                             * Convert given binary representation to desired target type using the underlying {@link ConversionService}.
                             * @param source
                             * @param type
                             * @return 
                             * @throws ConverterNotFoundException
                             */
                            // @ts-ignore
                            public fromBytes<T>(source: number /*byte*/[], type: java.lang.Class<T>): T
                            // @ts-ignore
                            public setIndexResolver(indexResolver: org.springframework.data.redis.core.convert.IndexResolver): void
                            // @ts-ignore
                            public setReferenceResolver(referenceResolver: org.springframework.data.redis.core.convert.ReferenceResolver): void
                            /**
                             * Set {@link CustomConversions} to be applied.
                             * @param customConversions
                             */
                            // @ts-ignore
                            public setCustomConversions(customConversions: org.springframework.data.redis.core.convert.CustomConversions): void
                            // @ts-ignore
                            public getMappingContext(): org.springframework.data.redis.core.mapping.RedisMappingContext
                            // @ts-ignore
                            public getIndexResolver(): org.springframework.data.redis.core.convert.IndexResolver
                            // @ts-ignore
                            public getConversionService(): ConversionService
                            // @ts-ignore
                            public afterPropertiesSet(): void
                        }
                    }
                }
            }
        }
    }
}
