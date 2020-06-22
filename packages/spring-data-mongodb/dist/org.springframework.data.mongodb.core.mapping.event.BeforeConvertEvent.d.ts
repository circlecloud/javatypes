declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        namespace event {
                            /**
                             * Event being thrown before a domain object is converted to be persisted.
                             * @author Jon Brisbin
                             * @author Oliver Gierke
                             * @author Christoph Strobl
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class BeforeConvertEvent<T> extends org.springframework.data.mongodb.core.mapping.event.MongoMappingEvent<T> {
                                /**
                                 * Creates new {@link BeforeConvertEvent}.
                                 * @param source must not be {#literal null}.
                                 * @param collectionName must not be {#literal null}.
                                 * @since 1.8
                                 */
                                // @ts-ignore
                                constructor(source: T, collectionName: java.lang.String | string)
                            }
                        }
                    }
                }
            }
        }
    }
}
