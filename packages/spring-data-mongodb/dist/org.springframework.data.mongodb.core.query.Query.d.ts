declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * MongoDB Query object representing criteria, projection, sorting and query hints.
                         * @author Thomas Risberg
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class Query extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Creates a new {@link Query} using the given {@link CriteriaDefinition}.
                             * @param criteriaDefinition must not be {#literal null}.
                             * @since 1.6
                             */
                            // @ts-ignore
                            constructor(criteriaDefinition: org.springframework.data.mongodb.core.query.CriteriaDefinition)
                            /**
                             * Static factory method to create a {@link Query} using the provided {@link CriteriaDefinition}.
                             * @param criteriaDefinition must not be {#literal null}.
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            public static query(criteriaDefinition: org.springframework.data.mongodb.core.query.CriteriaDefinition): org.springframework.data.mongodb.core.query.Query
                            /**
                             * Adds the given {@link CriteriaDefinition} to the current {@link Query}.
                             * @param criteriaDefinition must not be {#literal null}.
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            public addCriteria(criteriaDefinition: org.springframework.data.mongodb.core.query.CriteriaDefinition): org.springframework.data.mongodb.core.query.Query
                            // @ts-ignore
                            public fields(): org.springframework.data.mongodb.core.query.Field
                            /**
                             * Set number of documents to skip before returning results.
                             * @param skip
                             * @return 
                             */
                            // @ts-ignore
                            public skip(skip: number /*long*/): org.springframework.data.mongodb.core.query.Query
                            /**
                             * Limit the number of returned documents to {@code limit}.
                             * @param limit
                             * @return 
                             */
                            // @ts-ignore
                            public limit(limit: number /*int*/): org.springframework.data.mongodb.core.query.Query
                            /**
                             * Configures the query to use the given hint when being executed.
                             * @param name must not be {#literal null} or empty.
                             * @return 
                             */
                            // @ts-ignore
                            public withHint(name: java.lang.String | string): org.springframework.data.mongodb.core.query.Query
                            /**
                             * Sets the given pagination information on the {@link Query} instance. Will transparently set {@code skip} and
                             * {@code limit} as well as applying the {@link Sort} instance defined with the {@link Pageable}.
                             * @param pageable
                             * @return 
                             */
                            // @ts-ignore
                            public with(pageable: Pageable): org.springframework.data.mongodb.core.query.Query
                            /**
                             * Adds a {@link Sort} to the {@link Query} instance.
                             * @param sort
                             * @return 
                             */
                            // @ts-ignore
                            public with(sort: Sort): org.springframework.data.mongodb.core.query.Query
                            /**
                             * @return the restrictedTypes
                             */
                            // @ts-ignore
                            public getRestrictedTypes(): Array<java.lang.Class<any>>
                            /**
                             * Restricts the query to only return documents instances that are exactly of the given types.
                             * @param type may not be {#literal null}
                             * @param additionalTypes may not be {#literal null}
                             * @return 
                             */
                            // @ts-ignore
                            public restrict(type: java.lang.Class<any>, ...additionalTypes: java.lang.Class<any>[]): org.springframework.data.mongodb.core.query.Query
                            /**
                             * @return the query {#link Document}.
                             */
                            // @ts-ignore
                            public getQueryObject(): Document
                            /**
                             * @return the field {#link Document}.
                             */
                            // @ts-ignore
                            public getFieldsObject(): Document
                            /**
                             * @return the sort {#link Document}.
                             */
                            // @ts-ignore
                            public getSortObject(): Document
                            /**
                             * Returns {@literal true} if the {@link Query} has a sort parameter.
                             * @return {#literal true} if sorted.
                             * @see Sort#isSorted()
                             * @since 2.1
                             */
                            // @ts-ignore
                            public isSorted(): boolean
                            /**
                             * Get the number of documents to skip.
                             * @return 
                             */
                            // @ts-ignore
                            public getSkip(): number /*long*/
                            /**
                             * Get the maximum number of documents to be return.
                             * @return 
                             */
                            // @ts-ignore
                            public getLimit(): number /*int*/
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getHint(): string
                            /**
                             * @param maxTimeMsec
                             * @return this.
                             * @see Meta#setMaxTimeMsec(long)
                             * @since 1.6
                             */
                            // @ts-ignore
                            public maxTimeMsec(maxTimeMsec: number /*long*/): org.springframework.data.mongodb.core.query.Query
                            /**
                             * @param timeout
                             * @param timeUnit
                             * @return this.
                             * @see Meta#setMaxTime(long, TimeUnit)
                             * @since 1.6
                             * @deprecated since 2.1. Use {#link #maxTime(Duration)} instead.
                             */
                            // @ts-ignore
                            public maxTime(timeout: number /*long*/, timeUnit: java.util.concurrent.TimeUnit): org.springframework.data.mongodb.core.query.Query
                            /**
                             * @param timeout
                             * @return this.
                             * @see Meta#setMaxTime(Duration)
                             * @since 2.1
                             */
                            // @ts-ignore
                            public maxTime(timeout: java.time.Duration): org.springframework.data.mongodb.core.query.Query
                            /**
                             * @param maxScan
                             * @return this.
                             * @see Meta#setMaxScan(long)
                             * @since 1.6
                             * @deprecated since 2.1 due to deprecation in MongoDB 4.0.
                             */
                            // @ts-ignore
                            public maxScan(maxScan: number /*long*/): org.springframework.data.mongodb.core.query.Query
                            /**
                             * Add a comment to the query that is propagated to the profile log.
                             * @param comment
                             * @return this.
                             * @see Meta#setComment(String)
                             * @since 1.6
                             */
                            // @ts-ignore
                            public comment(comment: java.lang.String | string): org.springframework.data.mongodb.core.query.Query
                            /**
                             * @return this.
                             * @see Meta#setSnapshot(boolean)
                             * @since 1.6
                             * @deprecated since 2.1 due to deprecation as of MongoDB 3.6
                             */
                            // @ts-ignore
                            public useSnapshot(): org.springframework.data.mongodb.core.query.Query
                            /**
                             * Set the number of documents to return in each response batch. <br />
                             * Use {@literal 0 (zero)} for no limit. A <strong>negative limit</strong> closes the cursor after returning a single
                             * batch indicating to the server that the client will not ask for a subsequent one.
                             * @param batchSize The number of documents to return per batch.
                             * @return this.
                             * @see Meta#setCursorBatchSize(int)
                             * @since 2.1
                             */
                            // @ts-ignore
                            public cursorBatchSize(batchSize: number /*int*/): org.springframework.data.mongodb.core.query.Query
                            /**
                             * @return this.
                             * @see org.springframework.data.mongodb.core.query.Meta.CursorOption#NO_TIMEOUT
                             * @since 1.10
                             */
                            // @ts-ignore
                            public noCursorTimeout(): org.springframework.data.mongodb.core.query.Query
                            /**
                             * @return this.
                             * @see org.springframework.data.mongodb.core.query.Meta.CursorOption#EXHAUST
                             * @since 1.10
                             */
                            // @ts-ignore
                            public exhaust(): org.springframework.data.mongodb.core.query.Query
                            /**
                             * Allows querying of a replica slave.
                             * @return this.
                             * @see org.springframework.data.mongodb.core.query.Meta.CursorOption#SLAVE_OK
                             * @since 1.10
                             */
                            // @ts-ignore
                            public slaveOk(): org.springframework.data.mongodb.core.query.Query
                            /**
                             * @return this.
                             * @see org.springframework.data.mongodb.core.query.Meta.CursorOption#PARTIAL
                             * @since 1.10
                             */
                            // @ts-ignore
                            public partialResults(): org.springframework.data.mongodb.core.query.Query
                            /**
                             * @return never {#literal null}.ø
                             * @since 1.6
                             */
                            // @ts-ignore
                            public getMeta(): org.springframework.data.mongodb.core.query.Meta
                            /**
                             * @param meta must not be {#literal null}.
                             * @since 1.6
                             */
                            // @ts-ignore
                            public setMeta(meta: org.springframework.data.mongodb.core.query.Meta): void
                            /**
                             * Set the {@link Collation} applying language-specific rules for string comparison.
                             * @param collation can be {#literal null}.
                             * @return 
                             * @since 2.0
                             */
                            // @ts-ignore
                            public collation(collation: org.springframework.data.mongodb.core.query.Collation): org.springframework.data.mongodb.core.query.Query
                            /**
                             * Get the {@link Collation} defining language-specific rules for string comparison.
                             * @return 
                             * @since 2.0
                             */
                            // @ts-ignore
                            public getCollation(): java.util.Optional<org.springframework.data.mongodb.core.query.Collation>
                            // @ts-ignore
                            getCriteria(): Array<org.springframework.data.mongodb.core.query.CriteriaDefinition>
                            // @ts-ignore
                            public toString(): string
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                            /**
                             * Tests whether the settings of the given {@link Query} are equal to this query.
                             * @param that
                             * @return 
                             */
                            // @ts-ignore
                            querySettingsEquals(that: org.springframework.data.mongodb.core.query.Query): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            /**
                             * Returns whether the given key is the one used to hold the type restriction information.
                             * @deprecated don't call this method as the restricted type handling will undergo some significant changes going
                             *              forward.
                             * @param key
                             * @return 
                             */
                            // @ts-ignore
                            public static isRestrictedTypeKey(key: java.lang.String | string): boolean
                        }
                    }
                }
            }
        }
    }
}
