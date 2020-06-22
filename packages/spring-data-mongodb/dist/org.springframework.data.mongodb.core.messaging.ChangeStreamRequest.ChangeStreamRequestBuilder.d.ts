declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        namespace ChangeStreamRequest {
                            /**
                             * Builder for creating {@link ChangeStreamRequest}.
                             * @author Christoph Strobl
                             * @since 2.1
                             * @see ChangeStreamOptions
                             */
                            // @ts-ignore
                            class ChangeStreamRequestBuilder<T> extends java.lang.Object {
                                /**
                                 * Set the name of the {@link com.mongodb.client.MongoDatabase} to listen to.
                                 * @param databaseName must not be {#literal null} nor empty.
                                 * @return this.
                                 */
                                // @ts-ignore
                                public database(databaseName: java.lang.String | string): org.springframework.data.mongodb.core.messaging.ChangeStreamRequest.ChangeStreamRequestBuilder<T>
                                /**
                                 * Set the name of the {@link com.mongodb.client.MongoCollection} to listen to.
                                 * @param collectionName must not be {#literal null} nor empty.
                                 * @return this.
                                 */
                                // @ts-ignore
                                public collection(collectionName: java.lang.String | string): org.springframework.data.mongodb.core.messaging.ChangeStreamRequest.ChangeStreamRequestBuilder<T>
                                /**
                                 * Set the {@link MessageListener} event {@link Message messages} will be published to.
                                 * @param messageListener must not be {#literal null}.
                                 * @return this.
                                 */
                                // @ts-ignore
                                public publishTo(messageListener: org.springframework.data.mongodb.core.messaging.MessageListener<object, any>): org.springframework.data.mongodb.core.messaging.ChangeStreamRequest.ChangeStreamRequestBuilder<T>
                                /**
                                 * Set the filter to apply.
                                 * <p/>
                                 * Fields on aggregation expression root level are prefixed to map to fields contained in
                                 * {@link ChangeStreamDocument#getFullDocument() fullDocument}. However {@literal operationType}, {@literal ns},
                                 * {@literal documentKey} and {@literal fullDocument} are reserved words that will be omitted, and therefore taken
                                 * as given, during the mapping procedure. You may want to have a look at the
                                 * <a href="https://docs.mongodb.com/manual/reference/change-events/">structure of Change Events</a>.
                                 * <p/>
                                 * Use {@link org.springframework.data.mongodb.core.aggregation.TypedAggregation} to ensure filter expressions are
                                 * mapped to domain type fields.
                                 * @param aggregation the {#link Aggregation Aggregation pipeline} to apply for filtering events. Must not be
                                 *           {@literal null}.
                                 * @return this.
                                 * @see ChangeStreamOptions#getFilter()
                                 * @see ChangeStreamOptionsBuilder#filter(Aggregation)
                                 */
                                // @ts-ignore
                                public filter(aggregation: org.springframework.data.mongodb.core.aggregation.Aggregation): org.springframework.data.mongodb.core.messaging.ChangeStreamRequest.ChangeStreamRequestBuilder<T>
                                /**
                                 * Set the plain filter chain to apply.
                                 * @param pipeline must not be {#literal null} nor contain {@literal null} values.
                                 * @return this.
                                 * @see ChangeStreamOptions#getFilter()
                                 */
                                // @ts-ignore
                                public filter(...pipeline: Document[]): org.springframework.data.mongodb.core.messaging.ChangeStreamRequest.ChangeStreamRequestBuilder<T>
                                /**
                                 * Set the collation to use.
                                 * @param collation must not be {#literal null} nor {@literal empty}.
                                 * @return this.
                                 * @see ChangeStreamOptions#getCollation()
                                 * @see ChangeStreamOptionsBuilder#collation(Collation)
                                 */
                                // @ts-ignore
                                public collation(collation: org.springframework.data.mongodb.core.query.Collation): org.springframework.data.mongodb.core.messaging.ChangeStreamRequest.ChangeStreamRequestBuilder<any>
                                /**
                                 * Set the resume token (typically a {@link org.bson.BsonDocument} containing a {@link org.bson.BsonBinary binary
                                 * token}) after which to start with listening.
                                 * @param resumeToken must not be {#literal null}.
                                 * @return this.
                                 * @see ChangeStreamOptions#getResumeToken()
                                 * @see ChangeStreamOptionsBuilder#resumeToken(org.bson.BsonValue)
                                 */
                                // @ts-ignore
                                public resumeToken(resumeToken: BsonValue): org.springframework.data.mongodb.core.messaging.ChangeStreamRequest.ChangeStreamRequestBuilder<T>
                                /**
                                 * Set the cluster time at which to resume listening.
                                 * @param clusterTime must not be {#literal null}.
                                 * @return this.
                                 * @see ChangeStreamOptions#getResumeTimestamp()
                                 * @see ChangeStreamOptionsBuilder#resumeAt(java.time.Instant)
                                 */
                                // @ts-ignore
                                public resumeAt(clusterTime: java.time.Instant): org.springframework.data.mongodb.core.messaging.ChangeStreamRequest.ChangeStreamRequestBuilder<T>
                                /**
                                 * Set the {@link FullDocument} lookup to {@link FullDocument#UPDATE_LOOKUP}.
                                 * @return this.
                                 * @see #fullDocumentLookup(FullDocument)
                                 * @see ChangeStreamOptions#getFullDocumentLookup()
                                 * @see ChangeStreamOptionsBuilder#fullDocumentLookup(FullDocument)
                                 */
                                // @ts-ignore
                                public fullDocumentLookup(lookup: FullDocument): org.springframework.data.mongodb.core.messaging.ChangeStreamRequest.ChangeStreamRequestBuilder<T>
                                /**
                                 * @return the build {#link ChangeStreamRequest}.
                                 */
                                // @ts-ignore
                                public build(): org.springframework.data.mongodb.core.messaging.ChangeStreamRequest<T>
                            }
                        }
                    }
                }
            }
        }
    }
}
