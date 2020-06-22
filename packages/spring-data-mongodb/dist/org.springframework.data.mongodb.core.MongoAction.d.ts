declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Represents an action taken against the collection. Used by {@link WriteConcernResolver} to determine a custom
                     * {@link WriteConcern} based on this information.
                     * <ul>
                     * <li>INSERT, SAVE have null query</li>
                     * <li>REMOVE has null document</li>
                     * <li>INSERT_LIST has null entityType, document, and query</li>
                     * </ul>
                     * @author Mark Pollack
                     * @author Oliver Gierke
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    class MongoAction extends java.lang.Object {
                        /**
                         * Create an instance of a {@link MongoAction}.
                         * @param defaultWriteConcern the default write concern. Can be {#literal null}.
                         * @param mongoActionOperation action being taken against the collection. Must not be {#literal null}.
                         * @param collectionName the collection name, must not be {#literal null} or empty.
                         * @param entityType the POJO that is being operated against. Can be {#literal null}.
                         * @param document the converted Document from the POJO or Spring Update object. Can be {#literal null}.
                         * @param query the converted Document from the Spring Query object. Can be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(defaultWriteConcern: WriteConcern, mongoActionOperation: org.springframework.data.mongodb.core.MongoActionOperation, collectionName: java.lang.String | string, entityType: java.lang.Class<any>, document: Document, query: Document)
                        // @ts-ignore
                        public getCollectionName(): string
                        // @ts-ignore
                        public getDefaultWriteConcern(): WriteConcern
                        // @ts-ignore
                        public getEntityType(): java.lang.Class<any>
                        // @ts-ignore
                        public getMongoActionOperation(): org.springframework.data.mongodb.core.MongoActionOperation
                        // @ts-ignore
                        public getQuery(): Document
                        // @ts-ignore
                        public getDocument(): Document
                    }
                }
            }
        }
    }
}
