declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        namespace event {
                            /**
                             * Base {@link ApplicationEvent} triggered by Spring Data MongoDB.
                             * @author Jon Brisbin
                             * @author Christoph Strobl
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class MongoMappingEvent<T> extends ApplicationEvent {
                                /**
                                 * Creates new {@link MongoMappingEvent}.
                                 * @param source must not be {#literal null}.
                                 * @param document can be {#literal null}.
                                 * @param collectionName can be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(source: T, document: Document, collectionName: java.lang.String | string)
                                /**
                                 * @return {#literal null} if not set.
                                 */
                                // @ts-ignore
                                public getDocument(): Document
                                /**
                                 * Get the collection the event refers to.
                                 * @return {#literal null} if not set.
                                 * @since 1.8
                                 */
                                // @ts-ignore
                                public getCollectionName(): string
                                // @ts-ignore
                                public getSource(): T
                            }
                        }
                    }
                }
            }
        }
    }
}
