declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ChangeStreamOptions {
                        /**
                         * Builder for creating {@link ChangeStreamOptions}.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        class ChangeStreamOptionsBuilder extends java.lang.Object {
                            /**
                             * Set the collation to use.
                             * @param collation must not be {#literal null} nor {@literal empty}.
                             * @return this.
                             */
                            // @ts-ignore
                            public collation(collation: org.springframework.data.mongodb.core.query.Collation): org.springframework.data.mongodb.core.ChangeStreamOptions.ChangeStreamOptionsBuilder
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
                             * @param filter the {#link Aggregation Aggregation pipeline} to apply for filtering events. Must not be
                             *           {@literal null}.
                             * @return this.
                             */
                            // @ts-ignore
                            public filter(filter: org.springframework.data.mongodb.core.aggregation.Aggregation): org.springframework.data.mongodb.core.ChangeStreamOptions.ChangeStreamOptionsBuilder
                            /**
                             * Set the plain filter chain to apply.
                             * @param filter must not be {#literal null} nor contain {@literal null} values.
                             * @return this.
                             */
                            // @ts-ignore
                            public filter(...filter: Document[]): org.springframework.data.mongodb.core.ChangeStreamOptions.ChangeStreamOptionsBuilder
                            /**
                             * Set the resume token (typically a {@link org.bson.BsonDocument} containing a {@link org.bson.BsonBinary binary
                             * token}) after which to start with listening.
                             * @param resumeToken must not be {#literal null}.
                             * @return this.
                             */
                            // @ts-ignore
                            public resumeToken(resumeToken: BsonValue): org.springframework.data.mongodb.core.ChangeStreamOptions.ChangeStreamOptionsBuilder
                            /**
                             * Set the {@link FullDocument} lookup to {@link FullDocument#UPDATE_LOOKUP}.
                             * @return this.
                             * @see #fullDocumentLookup(FullDocument)
                             */
                            // @ts-ignore
                            public returnFullDocumentOnUpdate(): org.springframework.data.mongodb.core.ChangeStreamOptions.ChangeStreamOptionsBuilder
                            /**
                             * Set the {@link FullDocument} lookup to use.
                             * @param lookup must not be {#literal null}.
                             * @return this.
                             */
                            // @ts-ignore
                            public fullDocumentLookup(lookup: FullDocument): org.springframework.data.mongodb.core.ChangeStreamOptions.ChangeStreamOptionsBuilder
                            /**
                             * Set the cluster time to resume from.
                             * @param resumeTimestamp must not be {#literal null}.
                             * @return this.
                             */
                            // @ts-ignore
                            public resumeAt(resumeTimestamp: java.time.Instant): org.springframework.data.mongodb.core.ChangeStreamOptions.ChangeStreamOptionsBuilder
                            /**
                             * @return the built {#link ChangeStreamOptions}
                             */
                            // @ts-ignore
                            public build(): org.springframework.data.mongodb.core.ChangeStreamOptions
                        }
                    }
                }
            }
        }
    }
}
