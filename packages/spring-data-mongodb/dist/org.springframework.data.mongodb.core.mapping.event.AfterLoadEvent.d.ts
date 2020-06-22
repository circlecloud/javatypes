declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        namespace event {
                            /**
                             * Event to be triggered after loading {@link Document}s to be mapped onto a given type.
                             * @author Oliver Gierke
                             * @author Jon Brisbin
                             * @author Christoph Leiter
                             * @author Christoph Strobl
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class AfterLoadEvent<T> extends org.springframework.data.mongodb.core.mapping.event.MongoMappingEvent<Document> {
                                /**
                                 * Creates a new {@link AfterLoadEvent} for the given {@link Document}, type and collectionName.
                                 * @param document must not be {#literal null}.
                                 * @param type must not be {#literal null}.
                                 * @param collectionName must not be {#literal null}.
                                 * @since 1.8
                                 */
                                // @ts-ignore
                                constructor(document: Document, type: java.lang.Class<T>, collectionName: java.lang.String | string)
                                /**
                                 * Returns the type for which the {@link AfterLoadEvent} shall be invoked for.
                                 * @return 
                                 */
                                // @ts-ignore
                                public getType(): java.lang.Class<T>
                            }
                        }
                    }
                }
            }
        }
    }
}
