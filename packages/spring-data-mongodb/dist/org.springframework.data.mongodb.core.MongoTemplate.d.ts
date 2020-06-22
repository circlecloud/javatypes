declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Primary implementation of {@link MongoOperations}.
                     * @author Thomas Risberg
                     * @author Graeme Rocher
                     * @author Mark Pollack
                     * @author Oliver Gierke
                     * @author Amol Nayak
                     * @author Patryk Wasik
                     * @author Tobias Trelle
                     * @author Sebastian Herold
                     * @author Thomas Darimont
                     * @author Chuong Ngo
                     * @author Christoph Strobl
                     * @author Doménique Tilleuil
                     * @author Niko Schmuck
                     * @author Mark Paluch
                     * @author Laszlo Csontos
                     * @author Maninder Singh
                     * @author Borislav Rangelov
                     * @author duozhilin
                     * @author Andreas Zink
                     * @author Cimon Lucas
                     */
                    // @ts-ignore
                    class MongoTemplate extends java.lang.Object implements org.springframework.data.mongodb.core.MongoOperations, org.springframework.data.mongodb.core.index.IndexOperationsProvider {
                        /**
                         * Constructor used for a basic template configuration.
                         * @param mongoClient must not be {#literal null}.
                         * @param databaseName must not be {#literal null} or empty.
                         */
                        // @ts-ignore
                        constructor(mongoClient: MongoClient, databaseName: java.lang.String | string)
                        /**
                         * Constructor used for a basic template configuration.
                         * @param mongoClient must not be {#literal null}.
                         * @param databaseName must not be {#literal null} or empty.
                         * @since 2.1
                         */
                        // @ts-ignore
                        constructor(mongoClient: com.mongodb.client.MongoClient, databaseName: java.lang.String | string)
                        /**
                         * Constructor used for a basic template configuration.
                         * @param mongoDbFactory must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(mongoDbFactory: org.springframework.data.mongodb.MongoDbFactory)
                        /**
                         * Constructor used for a basic template configuration.
                         * @param mongoDbFactory must not be {#literal null}.
                         * @param mongoConverter
                         */
                        // @ts-ignore
                        constructor(mongoDbFactory: org.springframework.data.mongodb.MongoDbFactory, mongoConverter: org.springframework.data.mongodb.core.convert.MongoConverter)
                        /**
                         * Configures the {@link WriteResultChecking} to be used with the template. Setting {@literal null} will reset the
                         * default of {@link #DEFAULT_WRITE_RESULT_CHECKING}.
                         * @param resultChecking
                         */
                        // @ts-ignore
                        public setWriteResultChecking(resultChecking: org.springframework.data.mongodb.core.WriteResultChecking): void
                        /**
                         * Configures the {@link WriteConcern} to be used with the template. If none is configured the {@link WriteConcern}
                         * configured on the {@link MongoDbFactory} will apply. If you configured a {@link Mongo} instance no
                         * {@link WriteConcern} will be used.
                         * @param writeConcern
                         */
                        // @ts-ignore
                        public setWriteConcern(writeConcern: WriteConcern): void
                        /**
                         * Configures the {@link WriteConcernResolver} to be used with the template.
                         * @param writeConcernResolver
                         */
                        // @ts-ignore
                        public setWriteConcernResolver(writeConcernResolver: org.springframework.data.mongodb.core.WriteConcernResolver): void
                        /**
                         * Used by @{link {@link #prepareCollection(MongoCollection)} to set the {@link ReadPreference} before any operations
                         * are performed.
                         * @param readPreference
                         */
                        // @ts-ignore
                        public setReadPreference(readPreference: ReadPreference): void
                        // @ts-ignore
                        public setApplicationContext(applicationContext: ApplicationContext): void
                        /**
                         * Returns the default {@link org.springframework.data.mongodb.core.convert.MongoConverter}.
                         * @return 
                         */
                        // @ts-ignore
                        public getConverter(): org.springframework.data.mongodb.core.convert.MongoConverter
                        // @ts-ignore
                        public stream<T>(query: org.springframework.data.mongodb.core.query.Query, entityType: java.lang.Class<T>): object
                        // @ts-ignore
                        public stream<T>(query: org.springframework.data.mongodb.core.query.Query, entityType: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        doStream<T>(query: org.springframework.data.mongodb.core.query.Query, entityType: java.lang.Class<any>, collectionName: java.lang.String | string, returnType: java.lang.Class<T>): object
                        // @ts-ignore
                        public getCollectionName(entityClass: java.lang.Class<any>): string
                        // @ts-ignore
                        public executeCommand(jsonCommand: java.lang.String | string): Document
                        // @ts-ignore
                        public executeCommand(command: Document): Document
                        // @ts-ignore
                        public executeCommand(command: Document, readPreference: ReadPreference): Document
                        // @ts-ignore
                        public executeQuery(query: org.springframework.data.mongodb.core.query.Query, collectionName: java.lang.String | string, dch: org.springframework.data.mongodb.core.DocumentCallbackHandler): void
                        /**
                         * Execute a MongoDB query and iterate over the query results on a per-document basis with a
                         * {@link DocumentCallbackHandler} using the provided CursorPreparer.
                         * @param query the query class that specifies the criteria used to find a record and also an optional fields
                         *           specification, must not be {#literal null}.
                         * @param collectionName name of the collection to retrieve the objects from
                         * @param documentCallbackHandler the handler that will extract results, one document at a time
                         * @param preparer allows for customization of the {#link DBCursor} used when iterating over the result set, (apply
                         *           limits, skips and so on).
                         */
                        // @ts-ignore
                        executeQuery(query: org.springframework.data.mongodb.core.query.Query, collectionName: java.lang.String | string, documentCallbackHandler: org.springframework.data.mongodb.core.DocumentCallbackHandler, preparer: org.springframework.data.mongodb.core.CursorPreparer): void
                        // @ts-ignore
                        public execute<T>(action: org.springframework.data.mongodb.core.DbCallback<T>): T
                        // @ts-ignore
                        public execute<T>(entityClass: java.lang.Class<any>, callback: org.springframework.data.mongodb.core.CollectionCallback<T>): T
                        // @ts-ignore
                        public execute<T>(collectionName: java.lang.String | string, callback: org.springframework.data.mongodb.core.CollectionCallback<T>): T
                        // @ts-ignore
                        public withSession(options: ClientSessionOptions): org.springframework.data.mongodb.core.SessionScoped
                        // @ts-ignore
                        public withSession(session: ClientSession): org.springframework.data.mongodb.core.MongoTemplate
                        /**
                         * Define if {@link MongoTemplate} should participate in transactions. Default is set to
                         * {@link SessionSynchronization#ON_ACTUAL_TRANSACTION}.<br />
                         * <strong>NOTE:</strong> MongoDB transactions require at least MongoDB 4.0.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public setSessionSynchronization(sessionSynchronization: org.springframework.data.mongodb.SessionSynchronization): void
                        // @ts-ignore
                        public createCollection<T>(entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public createCollection<T>(entityClass: java.lang.Class<T>, collectionOptions: org.springframework.data.mongodb.core.CollectionOptions): object
                        // @ts-ignore
                        public createCollection(collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public createCollection(collectionName: java.lang.String | string, collectionOptions: org.springframework.data.mongodb.core.CollectionOptions): object
                        // @ts-ignore
                        public getCollection(collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public collectionExists<T>(entityClass: java.lang.Class<T>): boolean
                        // @ts-ignore
                        public collectionExists(collectionName: java.lang.String | string): boolean
                        // @ts-ignore
                        public dropCollection<T>(entityClass: java.lang.Class<T>): void
                        // @ts-ignore
                        public dropCollection(collectionName: java.lang.String | string): void
                        // @ts-ignore
                        public indexOps(collectionName: java.lang.String | string): org.springframework.data.mongodb.core.index.IndexOperations
                        // @ts-ignore
                        public indexOps(entityClass: java.lang.Class<any>): org.springframework.data.mongodb.core.index.IndexOperations
                        // @ts-ignore
                        public bulkOps(bulkMode: org.springframework.data.mongodb.core.BulkOperations.BulkMode, collectionName: java.lang.String | string): org.springframework.data.mongodb.core.BulkOperations
                        // @ts-ignore
                        public bulkOps(bulkMode: org.springframework.data.mongodb.core.BulkOperations.BulkMode, entityClass: java.lang.Class<any>): org.springframework.data.mongodb.core.BulkOperations
                        // @ts-ignore
                        public bulkOps(mode: org.springframework.data.mongodb.core.BulkOperations.BulkMode, entityType: java.lang.Class<any>, collectionName: java.lang.String | string): org.springframework.data.mongodb.core.BulkOperations
                        // @ts-ignore
                        public scriptOps(): org.springframework.data.mongodb.core.ScriptOperations
                        // @ts-ignore
                        public findOne<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): T
                        // @ts-ignore
                        public findOne<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): T
                        // @ts-ignore
                        public exists(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>): boolean
                        // @ts-ignore
                        public exists(query: org.springframework.data.mongodb.core.query.Query, collectionName: java.lang.String | string): boolean
                        // @ts-ignore
                        public exists(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): boolean
                        // @ts-ignore
                        public find<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): Array<T>
                        // @ts-ignore
                        public find<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): Array<T>
                        // @ts-ignore
                        public findById<T>(id: java.lang.Object | any, entityClass: java.lang.Class<T>): T
                        // @ts-ignore
                        public findById<T>(id: java.lang.Object | any, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): T
                        // @ts-ignore
                        public findDistinct<T>(query: org.springframework.data.mongodb.core.query.Query, field: java.lang.String | string, entityClass: java.lang.Class<any>, resultClass: java.lang.Class<T>): Array<T>
                        // @ts-ignore
                        public findDistinct<T>(query: org.springframework.data.mongodb.core.query.Query, field: java.lang.String | string, collectionName: java.lang.String | string, entityClass: java.lang.Class<any>, resultClass: java.lang.Class<T>): Array<T>
                        // @ts-ignore
                        public geoNear<T>(near: org.springframework.data.mongodb.core.query.NearQuery, entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public geoNear<T>(near: org.springframework.data.mongodb.core.query.NearQuery, domainType: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public geoNear<T>(near: org.springframework.data.mongodb.core.query.NearQuery, domainType: java.lang.Class<any>, collectionName: java.lang.String | string, returnType: java.lang.Class<T>): object
                        // @ts-ignore
                        public findAndModify<T>(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<T>): T
                        // @ts-ignore
                        public findAndModify<T>(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): T
                        // @ts-ignore
                        public findAndModify<T>(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, options: org.springframework.data.mongodb.core.FindAndModifyOptions, entityClass: java.lang.Class<T>): T
                        // @ts-ignore
                        public findAndModify<T>(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, options: org.springframework.data.mongodb.core.FindAndModifyOptions, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): T
                        // @ts-ignore
                        public findAndReplace<S, T>(query: org.springframework.data.mongodb.core.query.Query, replacement: S, options: org.springframework.data.mongodb.core.FindAndReplaceOptions, entityType: java.lang.Class<S>, collectionName: java.lang.String | string, resultType: java.lang.Class<T>): T
                        // @ts-ignore
                        public findAndRemove<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): T
                        // @ts-ignore
                        public findAndRemove<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): T
                        // @ts-ignore
                        public count(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>): number /*long*/
                        // @ts-ignore
                        public count(query: org.springframework.data.mongodb.core.query.Query, collectionName: java.lang.String | string): number /*long*/
                        // @ts-ignore
                        public count(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): number /*long*/
                        // @ts-ignore
                        doCount(collectionName: java.lang.String | string, filter: Document, options: CountOptions): number /*long*/
                        // @ts-ignore
                        public insert<T>(objectToSave: T): T
                        // @ts-ignore
                        public insert<T>(objectToSave: T, collectionName: java.lang.String | string): T
                        // @ts-ignore
                        ensureNotIterable(o: java.lang.Object | any): void
                        /**
                         * Prepare the collection before any processing is done using it. This allows a convenient way to apply settings like
                         * slaveOk() etc. Can be overridden in sub-classes.
                         * @param collection
                         */
                        // @ts-ignore
                        prepareCollection(collection: object): object
                        /**
                         * Prepare the WriteConcern before any processing is done using it. This allows a convenient way to apply custom
                         * settings in sub-classes. <br />
                         * In case of using MongoDB Java driver version 3 the returned {@link WriteConcern} will be defaulted to
                         * {@link WriteConcern#ACKNOWLEDGED} when {@link WriteResultChecking} is set to {@link WriteResultChecking#EXCEPTION}.
                         * @param mongoAction any MongoAction already configured or null
                         * @return The prepared WriteConcern or null
                         */
                        // @ts-ignore
                        prepareWriteConcern(mongoAction: org.springframework.data.mongodb.core.MongoAction): WriteConcern
                        // @ts-ignore
                        doInsert<T>(collectionName: java.lang.String | string, objectToSave: T, writer: org.springframework.data.mongodb.core.convert.MongoWriter<T>): T
                        // @ts-ignore
                        public insert<T>(batchToSave: java.util.Collection<any> | Array<any>, entityClass: java.lang.Class<any>): Array<T>
                        // @ts-ignore
                        public insert<T>(batchToSave: java.util.Collection<any> | Array<any>, collectionName: java.lang.String | string): Array<T>
                        // @ts-ignore
                        public insertAll<T>(objectsToSave: java.util.Collection<any> | Array<any>): Array<T>
                        // @ts-ignore
                        doInsertAll<T>(listToSave: java.util.Collection<any> | Array<any>, writer: org.springframework.data.mongodb.core.convert.MongoWriter<T>): Array<T>
                        // @ts-ignore
                        doInsertBatch<T>(collectionName: java.lang.String | string, batchToSave: java.util.Collection<any> | Array<any>, writer: org.springframework.data.mongodb.core.convert.MongoWriter<T>): Array<T>
                        // @ts-ignore
                        public save<T>(objectToSave: T): T
                        // @ts-ignore
                        public save<T>(objectToSave: T, collectionName: java.lang.String | string): T
                        // @ts-ignore
                        doSave<T>(collectionName: java.lang.String | string, objectToSave: T, writer: org.springframework.data.mongodb.core.convert.MongoWriter<T>): T
                        // @ts-ignore
                        insertDocument(collectionName: java.lang.String | string, document: Document, entityClass: java.lang.Class<any>): any
                        // @ts-ignore
                        insertDocumentList(collectionName: java.lang.String | string, documents: java.util.List<Document> | Array<Document>): Array<java.lang.Object | any>
                        // @ts-ignore
                        saveDocument(collectionName: java.lang.String | string, dbDoc: Document, entityClass: java.lang.Class<any>): any
                        // @ts-ignore
                        public upsert(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>): UpdateResult
                        // @ts-ignore
                        public upsert(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, collectionName: java.lang.String | string): UpdateResult
                        // @ts-ignore
                        public upsert(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): UpdateResult
                        // @ts-ignore
                        public updateFirst(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>): UpdateResult
                        // @ts-ignore
                        public updateFirst(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, collectionName: java.lang.String | string): UpdateResult
                        // @ts-ignore
                        public updateFirst(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): UpdateResult
                        // @ts-ignore
                        public updateMulti(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>): UpdateResult
                        // @ts-ignore
                        public updateMulti(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, collectionName: java.lang.String | string): UpdateResult
                        // @ts-ignore
                        public updateMulti(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): UpdateResult
                        // @ts-ignore
                        doUpdate(collectionName: java.lang.String | string, query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>, upsert: boolean, multi: boolean): UpdateResult
                        // @ts-ignore
                        public remove(object: java.lang.Object | any): DeleteResult
                        // @ts-ignore
                        public remove(object: java.lang.Object | any, collectionName: java.lang.String | string): DeleteResult
                        // @ts-ignore
                        public remove(query: org.springframework.data.mongodb.core.query.Query, collectionName: java.lang.String | string): DeleteResult
                        // @ts-ignore
                        public remove(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>): DeleteResult
                        // @ts-ignore
                        public remove(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): DeleteResult
                        // @ts-ignore
                        doRemove<T>(collectionName: java.lang.String | string, query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>, multi: boolean): DeleteResult
                        // @ts-ignore
                        public findAll<T>(entityClass: java.lang.Class<T>): Array<T>
                        // @ts-ignore
                        public findAll<T>(entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): Array<T>
                        // @ts-ignore
                        public mapReduce<T>(inputCollectionName: java.lang.String | string, mapFunction: java.lang.String | string, reduceFunction: java.lang.String | string, entityClass: java.lang.Class<T>): org.springframework.data.mongodb.core.mapreduce.MapReduceResults<T>
                        // @ts-ignore
                        public mapReduce<T>(inputCollectionName: java.lang.String | string, mapFunction: java.lang.String | string, reduceFunction: java.lang.String | string, mapReduceOptions: org.springframework.data.mongodb.core.mapreduce.MapReduceOptions, entityClass: java.lang.Class<T>): org.springframework.data.mongodb.core.mapreduce.MapReduceResults<T>
                        // @ts-ignore
                        public mapReduce<T>(query: org.springframework.data.mongodb.core.query.Query, inputCollectionName: java.lang.String | string, mapFunction: java.lang.String | string, reduceFunction: java.lang.String | string, entityClass: java.lang.Class<T>): org.springframework.data.mongodb.core.mapreduce.MapReduceResults<T>
                        // @ts-ignore
                        public mapReduce<T>(query: org.springframework.data.mongodb.core.query.Query, inputCollectionName: java.lang.String | string, mapFunction: java.lang.String | string, reduceFunction: java.lang.String | string, mapReduceOptions: org.springframework.data.mongodb.core.mapreduce.MapReduceOptions, entityClass: java.lang.Class<T>): org.springframework.data.mongodb.core.mapreduce.MapReduceResults<T>
                        /**
                         * @param query
                         * @param domainType
                         * @param inputCollectionName
                         * @param mapFunction
                         * @param reduceFunction
                         * @param mapReduceOptions
                         * @param resultType
                         * @return 
                         * @since 2.1
                         */
                        // @ts-ignore
                        public mapReduce<T>(query: org.springframework.data.mongodb.core.query.Query, domainType: java.lang.Class<any>, inputCollectionName: java.lang.String | string, mapFunction: java.lang.String | string, reduceFunction: java.lang.String | string, mapReduceOptions: org.springframework.data.mongodb.core.mapreduce.MapReduceOptions, resultType: java.lang.Class<T>): Array<T>
                        // @ts-ignore
                        public group<T>(inputCollectionName: java.lang.String | string, groupBy: org.springframework.data.mongodb.core.mapreduce.GroupBy, entityClass: java.lang.Class<T>): org.springframework.data.mongodb.core.mapreduce.GroupByResults<T>
                        // @ts-ignore
                        public group<T>(criteria: org.springframework.data.mongodb.core.query.Criteria, inputCollectionName: java.lang.String | string, groupBy: org.springframework.data.mongodb.core.mapreduce.GroupBy, entityClass: java.lang.Class<T>): org.springframework.data.mongodb.core.mapreduce.GroupByResults<T>
                        // @ts-ignore
                        public aggregate<O>(aggregation: org.springframework.data.mongodb.core.aggregation.TypedAggregation<any>, outputType: java.lang.Class<O>): org.springframework.data.mongodb.core.aggregation.AggregationResults<O>
                        // @ts-ignore
                        public aggregate<O>(aggregation: org.springframework.data.mongodb.core.aggregation.TypedAggregation<any>, inputCollectionName: java.lang.String | string, outputType: java.lang.Class<O>): org.springframework.data.mongodb.core.aggregation.AggregationResults<O>
                        // @ts-ignore
                        public aggregate<O>(aggregation: org.springframework.data.mongodb.core.aggregation.Aggregation, inputType: java.lang.Class<any>, outputType: java.lang.Class<O>): org.springframework.data.mongodb.core.aggregation.AggregationResults<O>
                        // @ts-ignore
                        public aggregate<O>(aggregation: org.springframework.data.mongodb.core.aggregation.Aggregation, collectionName: java.lang.String | string, outputType: java.lang.Class<O>): org.springframework.data.mongodb.core.aggregation.AggregationResults<O>
                        // @ts-ignore
                        public aggregateStream<O>(aggregation: org.springframework.data.mongodb.core.aggregation.TypedAggregation<any>, inputCollectionName: java.lang.String | string, outputType: java.lang.Class<O>): object
                        // @ts-ignore
                        public aggregateStream<O>(aggregation: org.springframework.data.mongodb.core.aggregation.TypedAggregation<any>, outputType: java.lang.Class<O>): object
                        // @ts-ignore
                        public aggregateStream<O>(aggregation: org.springframework.data.mongodb.core.aggregation.Aggregation, inputType: java.lang.Class<any>, outputType: java.lang.Class<O>): object
                        // @ts-ignore
                        public aggregateStream<O>(aggregation: org.springframework.data.mongodb.core.aggregation.Aggregation, collectionName: java.lang.String | string, outputType: java.lang.Class<O>): object
                        // @ts-ignore
                        public findAllAndRemove<T>(query: org.springframework.data.mongodb.core.query.Query, collectionName: java.lang.String | string): Array<T>
                        // @ts-ignore
                        public findAllAndRemove<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): Array<T>
                        // @ts-ignore
                        public findAllAndRemove<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): Array<T>
                        /**
                         * Retrieve and remove all documents matching the given {@code query} by calling {@link #find(Query, Class, String)}
                         * and {@link #remove(Query, Class, String)}, whereas the {@link Query} for {@link #remove(Query, Class, String)} is
                         * constructed out of the find result.
                         * @param collectionName
                         * @param query
                         * @param entityClass
                         * @return 
                         */
                        // @ts-ignore
                        doFindAndDelete<T>(collectionName: java.lang.String | string, query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): Array<T>
                        // @ts-ignore
                        aggregate<O>(aggregation: org.springframework.data.mongodb.core.aggregation.Aggregation, collectionName: java.lang.String | string, outputType: java.lang.Class<O>, context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): org.springframework.data.mongodb.core.aggregation.AggregationResults<O>
                        // @ts-ignore
                        doAggregate<O>(aggregation: org.springframework.data.mongodb.core.aggregation.Aggregation, collectionName: java.lang.String | string, outputType: java.lang.Class<O>, context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): org.springframework.data.mongodb.core.aggregation.AggregationResults<O>
                        // @ts-ignore
                        aggregateStream<O>(aggregation: org.springframework.data.mongodb.core.aggregation.Aggregation, collectionName: java.lang.String | string, outputType: java.lang.Class<O>, context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): object
                        // @ts-ignore
                        public query<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ExecutableFindOperation.ExecutableFind<T>
                        // @ts-ignore
                        public update<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ExecutableUpdateOperation.ExecutableUpdate<T>
                        // @ts-ignore
                        public remove<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ExecutableRemoveOperation.ExecutableRemove<T>
                        // @ts-ignore
                        public aggregateAndReturn<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ExecutableAggregationOperation.ExecutableAggregation<T>
                        // @ts-ignore
                        public mapReduce<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ExecutableMapReduceOperation.ExecutableMapReduce<T>
                        // @ts-ignore
                        public insert<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ExecutableInsertOperation.ExecutableInsert<T>
                        // @ts-ignore
                        replaceWithResourceIfNecessary(func: java.lang.String | string): string
                        // @ts-ignore
                        public getCollectionNames(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getDb(): MongoDatabase
                        // @ts-ignore
                        doGetDatabase(): MongoDatabase
                        // @ts-ignore
                        prepareDatabase(database: MongoDatabase): MongoDatabase
                        // @ts-ignore
                        maybeEmitEvent<E extends org.springframework.data.mongodb.core.mapping.event.MongoMappingEvent<T>, T>(event: E): E
                        /**
                         * Create the specified collection using the provided options
                         * @param collectionName
                         * @param collectionOptions
                         * @return the collection that was created
                         */
                        // @ts-ignore
                        doCreateCollection(collectionName: java.lang.String | string, collectionOptions: Document): object
                        /**
                         * Map the results of an ad-hoc query on the default MongoDB collection to an object using the template's converter.
                         * The query document is specified as a standard {@link Document} and so is the fields specification.
                         * @param collectionName name of the collection to retrieve the objects from.
                         * @param query the query document that specifies the criteria used to find a record.
                         * @param fields the document that specifies the fields to be returned.
                         * @param entityClass the parameterized type of the returned list.
                         * @return the {#link List} of converted objects.
                         */
                        // @ts-ignore
                        doFindOne<T>(collectionName: java.lang.String | string, query: Document, fields: Document, entityClass: java.lang.Class<T>): T
                        /**
                         * Map the results of an ad-hoc query on the default MongoDB collection to a List using the template's converter. The
                         * query document is specified as a standard Document and so is the fields specification.
                         * @param collectionName name of the collection to retrieve the objects from
                         * @param query the query document that specifies the criteria used to find a record
                         * @param fields the document that specifies the fields to be returned
                         * @param entityClass the parameterized type of the returned list.
                         * @return the List of converted objects.
                         */
                        // @ts-ignore
                        doFind<T>(collectionName: java.lang.String | string, query: Document, fields: Document, entityClass: java.lang.Class<T>): Array<T>
                        /**
                         * Map the results of an ad-hoc query on the default MongoDB collection to a List of the specified type. The object is
                         * converted from the MongoDB native representation using an instance of {@see MongoConverter}. The query document is
                         * specified as a standard Document and so is the fields specification.
                         * @param collectionName name of the collection to retrieve the objects from.
                         * @param query the query document that specifies the criteria used to find a record.
                         * @param fields the document that specifies the fields to be returned.
                         * @param entityClass the parameterized type of the returned list.
                         * @param preparer allows for customization of the {#link DBCursor} used when iterating over the result set, (apply
                         *           limits, skips and so on).
                         * @return the {#link List} of converted objects.
                         */
                        // @ts-ignore
                        doFind<T>(collectionName: java.lang.String | string, query: Document, fields: Document, entityClass: java.lang.Class<T>, preparer: org.springframework.data.mongodb.core.CursorPreparer): Array<T>
                        // @ts-ignore
                        doFind<S, T>(collectionName: java.lang.String | string, query: Document, fields: Document, entityClass: java.lang.Class<S>, preparer: org.springframework.data.mongodb.core.CursorPreparer, objectCallback: org.springframework.data.mongodb.core.MongoTemplate.DocumentCallback<T>): Array<T>
                        /**
                         * Convert given {@link CollectionOptions} to a document and take the domain type information into account when
                         * creating a mapped schema for validation. <br />
                         * This method calls {@link #convertToDocument(CollectionOptions)} for backwards compatibility and potentially
                         * overwrites the validator with the mapped validator document. In the long run
                         * {@link #convertToDocument(CollectionOptions)} will be removed so that this one becomes the only source of truth.
                         * @param collectionOptions can be {#literal null}.
                         * @param targetType must not be {#literal null}. Use {@link Object} type instead.
                         * @return never {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        convertToDocument(collectionOptions: org.springframework.data.mongodb.core.CollectionOptions, targetType: java.lang.Class<any>): Document
                        /**
                         * @param collectionOptions can be {#literal null}.
                         * @return never {#literal null}.
                         * @deprecated since 2.1 in favor of {#link #convertToDocument(CollectionOptions, Class)}.
                         */
                        // @ts-ignore
                        convertToDocument(collectionOptions: org.springframework.data.mongodb.core.CollectionOptions): Document
                        /**
                         * Map the results of an ad-hoc query on the default MongoDB collection to an object using the template's converter.
                         * The first document that matches the query is returned and also removed from the collection in the database.
                         * <p/>
                         * The query document is specified as a standard Document and so is the fields specification.
                         * @param collectionName name of the collection to retrieve the objects from
                         * @param query the query document that specifies the criteria used to find a record
                         * @param entityClass the parameterized type of the returned list.
                         * @return the List of converted objects.
                         */
                        // @ts-ignore
                        doFindAndRemove<T>(collectionName: java.lang.String | string, query: Document, fields: Document, sort: Document, collation: org.springframework.data.mongodb.core.query.Collation, entityClass: java.lang.Class<T>): T
                        // @ts-ignore
                        doFindAndModify<T>(collectionName: java.lang.String | string, query: Document, fields: Document, sort: Document, entityClass: java.lang.Class<T>, update: org.springframework.data.mongodb.core.query.Update, options: org.springframework.data.mongodb.core.FindAndModifyOptions): T
                        /**
                         * Customize this part for findAndReplace.
                         * @param collectionName The name of the collection to perform the operation in.
                         * @param mappedQuery the query to look up documents.
                         * @param mappedFields the fields to project the result to.
                         * @param mappedSort the sort to be applied when executing the query.
                         * @param collation collation settings for the query. Can be {#literal null}.
                         * @param entityType the source domain type.
                         * @param replacement the replacement {#link Document}.
                         * @param options applicable options.
                         * @param resultType the target domain type.
                         * @return {#literal null} if object does not exist, {@link FindAndReplaceOptions#isReturnNew() return new} is
                         *          {@literal false} and {@link FindAndReplaceOptions#isUpsert() upsert} is {@literal false}.
                         */
                        // @ts-ignore
                        doFindAndReplace<T>(collectionName: java.lang.String | string, mappedQuery: Document, mappedFields: Document, mappedSort: Document, collation: com.mongodb.client.model.Collation, entityType: java.lang.Class<any>, replacement: Document, options: org.springframework.data.mongodb.core.FindAndReplaceOptions, resultType: java.lang.Class<T>): T
                        /**
                         * Populates the id property of the saved object, if it's not set already.
                         * @param savedObject
                         * @param id
                         */
                        // @ts-ignore
                        populateIdIfNecessary<T>(savedObject: T, id: java.lang.Object | any): T
                        // @ts-ignore
                        public getExceptionTranslator(): PersistenceExceptionTranslator
                        // @ts-ignore
                        public getMongoDbFactory(): org.springframework.data.mongodb.MongoDbFactory
                    }
                }
            }
        }
    }
}
