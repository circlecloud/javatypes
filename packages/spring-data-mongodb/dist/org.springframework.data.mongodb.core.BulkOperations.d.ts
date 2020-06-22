declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Bulk operations for insert/update/remove actions on a collection. These bulks operation are available since MongoDB
                     * 2.6 and make use of low level bulk commands on the protocol level. This interface defines a fluent API to add
                     * multiple single operations or list of similar operations in sequence which can then eventually be executed by calling
                     * {@link #execute()}.
                     * @author Tobias Trelle
                     * @author Oliver Gierke
                     * @since 1.9
                     */
                    // @ts-ignore
                    interface BulkOperations {
                        /**
                         * Add a single insert to the bulk operation.
                         * @param documents the document to insert, must not be {#literal null}.
                         * @return the current {#link BulkOperations} instance with the insert added, will never be {@literal null}.
                         */
                        // @ts-ignore
                        insert(documents: java.lang.Object | any): org.springframework.data.mongodb.core.BulkOperations
                        /**
                         * Add a list of inserts to the bulk operation.
                         * @param documents List of documents to insert, must not be {#literal null}.
                         * @return the current {#link BulkOperations} instance with the insert added, will never be {@literal null}.
                         */
                        // @ts-ignore
                        insert(documents: java.util.List<any> | Array<any>): org.springframework.data.mongodb.core.BulkOperations
                        /**
                         * Add a single update to the bulk operation. For the update request, only the first matching document is updated.
                         * @param query update criteria, must not be {#literal null}.
                         * @param update {#link Update} operation to perform, must not be {@literal null}.
                         * @return the current {#link BulkOperations} instance with the update added, will never be {@literal null}.
                         */
                        // @ts-ignore
                        updateOne(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update): org.springframework.data.mongodb.core.BulkOperations
                        /**
                         * Add a list of updates to the bulk operation. For each update request, only the first matching document is updated.
                         * @param updates Update operations to perform.
                         * @return the current {#link BulkOperations} instance with the update added, will never be {@literal null}.
                         */
                        // @ts-ignore
                        updateOne(updates: java.util.List<object> | Array<object>): org.springframework.data.mongodb.core.BulkOperations
                        /**
                         * Add a single update to the bulk operation. For the update request, all matching documents are updated.
                         * @param query Update criteria.
                         * @param update Update operation to perform.
                         * @return the current {#link BulkOperations} instance with the update added, will never be {@literal null}.
                         */
                        // @ts-ignore
                        updateMulti(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update): org.springframework.data.mongodb.core.BulkOperations
                        /**
                         * Add a list of updates to the bulk operation. For each update request, all matching documents are updated.
                         * @param updates Update operations to perform.
                         * @return The bulk operation.
                         * @return the current {#link BulkOperations} instance with the update added, will never be {@literal null}.
                         */
                        // @ts-ignore
                        updateMulti(updates: java.util.List<object> | Array<object>): org.springframework.data.mongodb.core.BulkOperations
                        /**
                         * Add a single upsert to the bulk operation. An upsert is an update if the set of matching documents is not empty,
                         * else an insert.
                         * @param query Update criteria.
                         * @param update Update operation to perform.
                         * @return The bulk operation.
                         * @return the current {#link BulkOperations} instance with the update added, will never be {@literal null}.
                         */
                        // @ts-ignore
                        upsert(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update): org.springframework.data.mongodb.core.BulkOperations
                        /**
                         * Add a list of upserts to the bulk operation. An upsert is an update if the set of matching documents is not empty,
                         * else an insert.
                         * @param updates Updates/insert operations to perform.
                         * @return The bulk operation.
                         * @return the current {#link BulkOperations} instance with the update added, will never be {@literal null}.
                         */
                        // @ts-ignore
                        upsert(updates: java.util.List<object> | Array<object>): org.springframework.data.mongodb.core.BulkOperations
                        /**
                         * Add a single remove operation to the bulk operation.
                         * @param remove the {#link Query} to select the documents to be removed, must not be {@literal null}.
                         * @return the current {#link BulkOperations} instance with the removal added, will never be {@literal null}.
                         */
                        // @ts-ignore
                        remove(remove: org.springframework.data.mongodb.core.query.Query): org.springframework.data.mongodb.core.BulkOperations
                        /**
                         * Add a list of remove operations to the bulk operation.
                         * @param removes the remove operations to perform, must not be {#literal null}.
                         * @return the current {#link BulkOperations} instance with the removal added, will never be {@literal null}.
                         */
                        // @ts-ignore
                        remove(removes: java.util.List<org.springframework.data.mongodb.core.query.Query> | Array<org.springframework.data.mongodb.core.query.Query>): org.springframework.data.mongodb.core.BulkOperations
                        /**
                         * Execute all bulk operations using the default write concern.
                         * @return Result of the bulk operation providing counters for inserts/updates etc.
                         * @throws org.springframework.data.mongodb.BulkOperationException if an error occurred during bulk processing.
                         */
                        // @ts-ignore
                        execute(): BulkWriteResult
                    }
                }
            }
        }
    }
}
