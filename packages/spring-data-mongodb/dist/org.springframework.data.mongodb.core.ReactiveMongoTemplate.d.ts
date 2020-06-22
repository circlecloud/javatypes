declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Primary implementation of {@link ReactiveMongoOperations}. It simplifies the use of Reactive MongoDB usage and helps
                     * to avoid common errors. It executes core MongoDB workflow, leaving application code to provide {@link Document} and
                     * extract results. This class executes BSON queries or updates, initiating iteration over {@link FindPublisher} and
                     * catching MongoDB exceptions and translating them to the generic, more informative exception hierarchy defined in the
                     * org.springframework.dao package. Can be used within a service implementation via direct instantiation with a
                     * {@link SimpleReactiveMongoDatabaseFactory} reference, or get prepared in an application context and given to services
                     * as bean reference. Note: The {@link SimpleReactiveMongoDatabaseFactory} should always be configured as a bean in the
                     * application context, in the first case given to the service directly, in the second case to the prepared template.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     */
                    // @ts-ignore
                    class ReactiveMongoTemplate extends java.lang.Object implements org.springframework.data.mongodb.core.ReactiveMongoOperations {
                        /**
                         * Constructor used for a basic template configuration.
                         * @param mongoClient must not be {#literal null}.
                         * @param databaseName must not be {#literal null} or empty.
                         */
                        // @ts-ignore
                        constructor(mongoClient: MongoClient, databaseName: java.lang.String | string)
                        /**
                         * Constructor used for a basic template configuration.
                         * @param mongoDatabaseFactory must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(mongoDatabaseFactory: org.springframework.data.mongodb.ReactiveMongoDatabaseFactory)
                        /**
                         * Constructor used for a basic template configuration.
                         * @param mongoDatabaseFactory must not be {#literal null}.
                         * @param mongoConverter can be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(mongoDatabaseFactory: org.springframework.data.mongodb.ReactiveMongoDatabaseFactory, mongoConverter: org.springframework.data.mongodb.core.convert.MongoConverter)
                        /**
                         * Constructor used for a basic template configuration.
                         * @param mongoDatabaseFactory must not be {#literal null}.
                         * @param mongoConverter can be {#literal null}.
                         * @param subscriptionExceptionHandler exception handler called by {#link Flux#doOnError(Consumer)} on reactive type
                         *           materialization via {@link Publisher#subscribe(Subscriber)}. This callback is used during non-blocking
                         *           subscription of e.g. index creation {@link Publisher}s. Must not be {@literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        constructor(mongoDatabaseFactory: org.springframework.data.mongodb.ReactiveMongoDatabaseFactory, mongoConverter: org.springframework.data.mongodb.core.convert.MongoConverter, subscriptionExceptionHandler: java.util.function$.Consumer<java.lang.Throwable | Error>)
                        // @ts-ignore
                        public static readonly NO_OP_REF_RESOLVER: org.springframework.data.mongodb.core.convert.DbRefResolver
                        /**
                         * Configures the {@link WriteResultChecking} to be used with the template. Setting {@literal null} will reset the
                         * default of {@link ReactiveMongoTemplate#DEFAULT_WRITE_RESULT_CHECKING}.
                         * @param resultChecking
                         */
                        // @ts-ignore
                        public setWriteResultChecking(resultChecking: org.springframework.data.mongodb.core.WriteResultChecking): void
                        /**
                         * Configures the {@link WriteConcern} to be used with the template. If none is configured the {@link WriteConcern}
                         * configured on the {@link MongoDbFactory} will apply. If you configured a {@link Mongo} instance no
                         * {@link WriteConcern} will be used.
                         * @param writeConcern can be {#literal null}.
                         */
                        // @ts-ignore
                        public setWriteConcern(writeConcern: WriteConcern): void
                        /**
                         * Configures the {@link WriteConcernResolver} to be used with the template.
                         * @param writeConcernResolver can be {#literal null}.
                         */
                        // @ts-ignore
                        public setWriteConcernResolver(writeConcernResolver: org.springframework.data.mongodb.core.WriteConcernResolver): void
                        /**
                         * Used by {@link {@link #prepareCollection(MongoCollection)} to set the {@link ReadPreference} before any operations
                         * are performed.
                         * @param readPreference
                         */
                        // @ts-ignore
                        public setReadPreference(readPreference: ReadPreference): void
                        // @ts-ignore
                        public setApplicationContext(applicationContext: ApplicationContext): void
                        /**
                         * Returns the default {@link MongoConverter}.
                         * @return 
                         */
                        // @ts-ignore
                        public getConverter(): org.springframework.data.mongodb.core.convert.MongoConverter
                        // @ts-ignore
                        public indexOps(collectionName: java.lang.String | string): org.springframework.data.mongodb.core.index.ReactiveIndexOperations
                        // @ts-ignore
                        public indexOps(entityClass: java.lang.Class<any>): org.springframework.data.mongodb.core.index.ReactiveIndexOperations
                        // @ts-ignore
                        public getCollectionName(entityClass: java.lang.Class<any>): string
                        // @ts-ignore
                        public executeCommand(jsonCommand: java.lang.String | string): object
                        // @ts-ignore
                        public executeCommand(command: Document): object
                        // @ts-ignore
                        public executeCommand(command: Document, readPreference: ReadPreference): object
                        // @ts-ignore
                        public execute<T>(entityClass: java.lang.Class<any>, action: org.springframework.data.mongodb.core.ReactiveCollectionCallback<T>): object
                        // @ts-ignore
                        public execute<T>(action: org.springframework.data.mongodb.core.ReactiveDatabaseCallback<T>): object
                        // @ts-ignore
                        public execute<T>(collectionName: java.lang.String | string, callback: org.springframework.data.mongodb.core.ReactiveCollectionCallback<T>): object
                        // @ts-ignore
                        public withSession(sessionProvider: object): org.springframework.data.mongodb.core.ReactiveSessionScoped
                        // @ts-ignore
                        public inTransaction(): org.springframework.data.mongodb.core.ReactiveSessionScoped
                        // @ts-ignore
                        public inTransaction(sessionProvider: object): org.springframework.data.mongodb.core.ReactiveSessionScoped
                        // @ts-ignore
                        public withSession(session: ClientSession): org.springframework.data.mongodb.core.ReactiveMongoOperations
                        // @ts-ignore
                        public withSession(sessionOptions: ClientSessionOptions): org.springframework.data.mongodb.core.ReactiveSessionScoped
                        /**
                         * Create a reusable Flux for a {@link ReactiveDatabaseCallback}. It's up to the developer to choose to obtain a new
                         * {@link Flux} or to reuse the {@link Flux}.
                         * @param callback must not be {#literal null}
                         * @return a {#link Flux} wrapping the {@link ReactiveDatabaseCallback}.
                         */
                        // @ts-ignore
                        public createFlux<T>(callback: org.springframework.data.mongodb.core.ReactiveDatabaseCallback<T>): object
                        /**
                         * Create a reusable Mono for a {@link ReactiveDatabaseCallback}. It's up to the developer to choose to obtain a new
                         * {@link Flux} or to reuse the {@link Flux}.
                         * @param callback must not be {#literal null}
                         * @return a {#link Mono} wrapping the {@link ReactiveDatabaseCallback}.
                         */
                        // @ts-ignore
                        public createMono<T>(callback: org.springframework.data.mongodb.core.ReactiveDatabaseCallback<T>): object
                        /**
                         * Create a reusable {@link Flux} for the {@code collectionName} and {@link ReactiveCollectionCallback}.
                         * @param collectionName must not be empty or {#literal null}.
                         * @param callback must not be {#literal null}.
                         * @return a reusable {#link Flux} wrapping the {@link ReactiveCollectionCallback}.
                         */
                        // @ts-ignore
                        public createFlux<T>(collectionName: java.lang.String | string, callback: org.springframework.data.mongodb.core.ReactiveCollectionCallback<T>): object
                        /**
                         * Create a reusable {@link Mono} for the {@code collectionName} and {@link ReactiveCollectionCallback}.
                         * @param collectionName must not be empty or {#literal null}.
                         * @param callback must not be {#literal null}.
                         * @param <T>
                         * @return a reusable {#link Mono} wrapping the {@link ReactiveCollectionCallback}.
                         */
                        // @ts-ignore
                        public createMono<T>(collectionName: java.lang.String | string, callback: org.springframework.data.mongodb.core.ReactiveCollectionCallback<T>): object
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
                        public collectionExists<T>(entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public collectionExists(collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public dropCollection<T>(entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public dropCollection(collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public getCollectionNames(): object
                        // @ts-ignore
                        public getMongoDatabase(): MongoDatabase
                        // @ts-ignore
                        doGetDatabase(): MongoDatabase
                        // @ts-ignore
                        public findOne<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public findOne<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public exists(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>): object
                        // @ts-ignore
                        public exists(query: org.springframework.data.mongodb.core.query.Query, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public exists(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public find<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public find<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public findById<T>(id: java.lang.Object | any, entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public findById<T>(id: java.lang.Object | any, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public findDistinct<T>(query: org.springframework.data.mongodb.core.query.Query, field: java.lang.String | string, entityClass: java.lang.Class<any>, resultClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public findDistinct<T>(query: org.springframework.data.mongodb.core.query.Query, field: java.lang.String | string, collectionName: java.lang.String | string, entityClass: java.lang.Class<any>, resultClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public aggregate<O>(aggregation: org.springframework.data.mongodb.core.aggregation.TypedAggregation<any>, inputCollectionName: java.lang.String | string, outputType: java.lang.Class<O>): object
                        // @ts-ignore
                        public aggregate<O>(aggregation: org.springframework.data.mongodb.core.aggregation.TypedAggregation<any>, outputType: java.lang.Class<O>): object
                        // @ts-ignore
                        public aggregate<O>(aggregation: org.springframework.data.mongodb.core.aggregation.Aggregation, inputType: java.lang.Class<any>, outputType: java.lang.Class<O>): object
                        // @ts-ignore
                        public aggregate<O>(aggregation: org.springframework.data.mongodb.core.aggregation.Aggregation, collectionName: java.lang.String | string, outputType: java.lang.Class<O>): object
                        /**
                         * @param aggregation must not be {#literal null}.
                         * @param collectionName must not be {#literal null}.
                         * @param outputType must not be {#literal null}.
                         * @param context can be {#literal null} and will be defaulted to {@link Aggregation#DEFAULT_CONTEXT}.
                         * @return never {#literal null}.
                         */
                        // @ts-ignore
                        aggregate<O>(aggregation: org.springframework.data.mongodb.core.aggregation.Aggregation, collectionName: java.lang.String | string, outputType: java.lang.Class<O>, context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): object
                        // @ts-ignore
                        public geoNear<T>(near: org.springframework.data.mongodb.core.query.NearQuery, entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public geoNear<T>(near: org.springframework.data.mongodb.core.query.NearQuery, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        geoNear<T>(near: org.springframework.data.mongodb.core.query.NearQuery, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string, returnType: java.lang.Class<T>): object
                        // @ts-ignore
                        public findAndModify<T>(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public findAndModify<T>(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public findAndModify<T>(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, options: org.springframework.data.mongodb.core.FindAndModifyOptions, entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public findAndModify<T>(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, options: org.springframework.data.mongodb.core.FindAndModifyOptions, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public findAndReplace<S, T>(query: org.springframework.data.mongodb.core.query.Query, replacement: S, options: org.springframework.data.mongodb.core.FindAndReplaceOptions, entityType: java.lang.Class<S>, collectionName: java.lang.String | string, resultType: java.lang.Class<T>): object
                        // @ts-ignore
                        public findAndRemove<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public findAndRemove<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public count(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>): object
                        // @ts-ignore
                        public count(query: org.springframework.data.mongodb.core.query.Query, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public count(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public insert<T>(objectToSave: object): object
                        // @ts-ignore
                        public insertAll<T>(batchToSave: object, entityClass: java.lang.Class<any>): object
                        // @ts-ignore
                        public insertAll<T>(batchToSave: object, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public insert<T>(objectToSave: T): object
                        // @ts-ignore
                        public insert<T>(objectToSave: T, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        doInsert<T>(collectionName: java.lang.String | string, objectToSave: T, writer: org.springframework.data.mongodb.core.convert.MongoWriter<java.lang.Object | any>): object
                        // @ts-ignore
                        public insert<T>(batchToSave: java.util.Collection<any> | Array<any>, entityClass: java.lang.Class<any>): object
                        // @ts-ignore
                        public insert<T>(batchToSave: java.util.Collection<any> | Array<any>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public insertAll<T>(objectsToSave: java.util.Collection<any> | Array<any>): object
                        // @ts-ignore
                        public insertAll<T>(objectsToSave: object): object
                        // @ts-ignore
                        doInsertAll<T>(listToSave: java.util.Collection<any> | Array<any>, writer: org.springframework.data.mongodb.core.convert.MongoWriter<java.lang.Object | any>): object
                        // @ts-ignore
                        doInsertBatch<T>(collectionName: java.lang.String | string, batchToSave: java.util.Collection<any> | Array<any>, writer: org.springframework.data.mongodb.core.convert.MongoWriter<java.lang.Object | any>): object
                        // @ts-ignore
                        public save<T>(objectToSave: object): object
                        // @ts-ignore
                        public save<T>(objectToSave: object, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public save<T>(objectToSave: T): object
                        // @ts-ignore
                        public save<T>(objectToSave: T, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        doSave<T>(collectionName: java.lang.String | string, objectToSave: T, writer: org.springframework.data.mongodb.core.convert.MongoWriter<java.lang.Object | any>): object
                        // @ts-ignore
                        insertDocument(collectionName: java.lang.String | string, dbDoc: Document, entityClass: java.lang.Class<any>): object
                        // @ts-ignore
                        insertDocumentList(collectionName: java.lang.String | string, dbDocList: java.util.List<Document> | Array<Document>): object
                        // @ts-ignore
                        saveDocument(collectionName: java.lang.String | string, document: Document, entityClass: java.lang.Class<any>): object
                        // @ts-ignore
                        public upsert(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>): object
                        // @ts-ignore
                        public upsert(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public upsert(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public updateFirst(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>): object
                        // @ts-ignore
                        public updateFirst(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public updateFirst(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public updateMulti(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>): object
                        // @ts-ignore
                        public updateMulti(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public updateMulti(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        doUpdate(collectionName: java.lang.String | string, query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>, upsert: boolean, multi: boolean): object
                        // @ts-ignore
                        public remove(objectToRemove: object): object
                        // @ts-ignore
                        public remove(objectToRemove: object, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public remove(object: java.lang.Object | any): object
                        // @ts-ignore
                        public remove(object: java.lang.Object | any, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public remove(query: org.springframework.data.mongodb.core.query.Query, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public remove(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>): object
                        // @ts-ignore
                        public remove(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        doRemove<T>(collectionName: java.lang.String | string, query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public findAll<T>(entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public findAll<T>(entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public findAllAndRemove<T>(query: org.springframework.data.mongodb.core.query.Query, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public findAllAndRemove<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public findAllAndRemove<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public tail<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        public tail<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        // @ts-ignore
                        public changeStream<T>(database: java.lang.String | string, collectionName: java.lang.String | string, options: org.springframework.data.mongodb.core.ChangeStreamOptions, targetType: java.lang.Class<T>): object
                        // @ts-ignore
                        public mapReduce<T>(filterQuery: org.springframework.data.mongodb.core.query.Query, domainType: java.lang.Class<any>, resultType: java.lang.Class<T>, mapFunction: java.lang.String | string, reduceFunction: java.lang.String | string, options: org.springframework.data.mongodb.core.mapreduce.MapReduceOptions): object
                        // @ts-ignore
                        public mapReduce<T>(filterQuery: org.springframework.data.mongodb.core.query.Query, domainType: java.lang.Class<any>, inputCollectionName: java.lang.String | string, resultType: java.lang.Class<T>, mapFunction: java.lang.String | string, reduceFunction: java.lang.String | string, options: org.springframework.data.mongodb.core.mapreduce.MapReduceOptions): object
                        // @ts-ignore
                        public query<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ReactiveFindOperation.ReactiveFind<T>
                        // @ts-ignore
                        public update<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ReactiveUpdateOperation.ReactiveUpdate<T>
                        // @ts-ignore
                        public aggregateAndReturn<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ReactiveAggregationOperation.ReactiveAggregation<T>
                        // @ts-ignore
                        public mapReduce<T>(domainType: java.lang.Class<T>): org.springframework.data.mongodb.core.ReactiveMapReduceOperation.ReactiveMapReduce<T>
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
                        doFindAndDelete<T>(collectionName: java.lang.String | string, query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): object
                        /**
                         * Create the specified collection using the provided options
                         * @param collectionName
                         * @param collectionOptions
                         * @return the collection that was created
                         */
                        // @ts-ignore
                        doCreateCollection(collectionName: java.lang.String | string, collectionOptions: CreateCollectionOptions): object
                        /**
                         * Map the results of an ad-hoc query on the default MongoDB collection to an object using the template's converter.
                         * The query document is specified as a standard {@link Document} and so is the fields specification.
                         * @param collectionName name of the collection to retrieve the objects from.
                         * @param query the query document that specifies the criteria used to find a record.
                         * @param fields the document that specifies the fields to be returned.
                         * @param entityClass the parameterized type of the returned list.
                         * @param collation can be {#literal null}.
                         * @return the {#link List} of converted objects.
                         */
                        // @ts-ignore
                        doFindOne<T>(collectionName: java.lang.String | string, query: Document, fields: Document, entityClass: java.lang.Class<T>, collation: org.springframework.data.mongodb.core.query.Collation): object
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
                        doFind<T>(collectionName: java.lang.String | string, query: Document, fields: Document, entityClass: java.lang.Class<T>): object
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
                        doFind<T>(collectionName: java.lang.String | string, query: Document, fields: Document, entityClass: java.lang.Class<T>, preparer: org.springframework.data.mongodb.core.FindPublisherPreparer): object
                        // @ts-ignore
                        doFind<S, T>(collectionName: java.lang.String | string, query: Document, fields: Document, entityClass: java.lang.Class<S>, preparer: org.springframework.data.mongodb.core.FindPublisherPreparer, objectCallback: org.springframework.data.mongodb.core.ReactiveMongoTemplate.DocumentCallback<T>): object
                        // @ts-ignore
                        convertToCreateCollectionOptions(collectionOptions: org.springframework.data.mongodb.core.CollectionOptions): CreateCollectionOptions
                        // @ts-ignore
                        convertToCreateCollectionOptions(collectionOptions: org.springframework.data.mongodb.core.CollectionOptions, entityType: java.lang.Class<any>): CreateCollectionOptions
                        /**
                         * Map the results of an ad-hoc query on the default MongoDB collection to an object using the template's converter.
                         * The first document that matches the query is returned and also removed from the collection in the database.
                         * <p/>
                         * The query document is specified as a standard Document and so is the fields specification.
                         * @param collectionName name of the collection to retrieve the objects from
                         * @param query the query document that specifies the criteria used to find a record
                         * @param collation collation
                         * @param entityClass the parameterized type of the returned list.
                         * @return the List of converted objects.
                         */
                        // @ts-ignore
                        doFindAndRemove<T>(collectionName: java.lang.String | string, query: Document, fields: Document, sort: Document, collation: org.springframework.data.mongodb.core.query.Collation, entityClass: java.lang.Class<T>): object
                        // @ts-ignore
                        doFindAndModify<T>(collectionName: java.lang.String | string, query: Document, fields: Document, sort: Document, entityClass: java.lang.Class<T>, update: org.springframework.data.mongodb.core.query.Update, options: org.springframework.data.mongodb.core.FindAndModifyOptions): object
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
                         * @return {#link Mono#empty()} if object does not exist, {@link FindAndReplaceOptions#isReturnNew() return new} is
                         *          {@literal false} and {@link FindAndReplaceOptions#isUpsert() upsert} is {@literal false}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        doFindAndReplace<T>(collectionName: java.lang.String | string, mappedQuery: Document, mappedFields: Document, mappedSort: Document, collation: com.mongodb.client.model.Collation, entityType: java.lang.Class<any>, replacement: Document, options: org.springframework.data.mongodb.core.FindAndReplaceOptions, resultType: java.lang.Class<T>): object
                        // @ts-ignore
                        maybeEmitEvent<E extends org.springframework.data.mongodb.core.mapping.event.MongoMappingEvent<T>, T>(event: E): E
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
                         * @param database
                         * @return 
                         * @since 2.1
                         */
                        // @ts-ignore
                        prepareDatabase(database: MongoDatabase): MongoDatabase
                        /**
                         * Prepare the WriteConcern before any processing is done using it. This allows a convenient way to apply custom
                         * settings in sub-classes. <br />
                         * The returned {@link WriteConcern} will be defaulted to {@link WriteConcern#ACKNOWLEDGED} when
                         * {@link WriteResultChecking} is set to {@link WriteResultChecking#EXCEPTION}.
                         * @param mongoAction any WriteConcern already configured or {#literal null}.
                         * @return The prepared WriteConcern or {#literal null}.
                         * @see #setWriteConcern(WriteConcern)
                         * @see #setWriteConcernResolver(WriteConcernResolver)
                         */
                        // @ts-ignore
                        prepareWriteConcern(mongoAction: org.springframework.data.mongodb.core.MongoAction): WriteConcern
                    }
                }
            }
        }
    }
}
