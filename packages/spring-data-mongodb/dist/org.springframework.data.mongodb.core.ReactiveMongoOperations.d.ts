declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Interface that specifies a basic set of MongoDB operations executed in a reactive way.
                     * <p>
                     * Implemented by {@link ReactiveMongoTemplate}. Not often used but a useful option for extensibility and testability
                     * (as it can be easily mocked, stubbed, or be the target of a JDK proxy). Command execution using
                     * {@link ReactiveMongoOperations} is deferred until subscriber subscribes to the {@link Publisher}.
                     * <p />
                     * <strong>NOTE:</strong> Some operations cannot be executed within a MongoDB transaction. Please refer to the MongoDB
                     * specific documentation to learn more about <a href="https://docs.mongodb.com/manual/core/transactions/">Multi
                     * Document Transactions</a>.
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.0
                     * @see Flux
                     * @see Mono
                     * @see <a href="https://projectreactor.io/docs/">Project Reactor</a>
                     */
                    // @ts-ignore
                    interface ReactiveMongoOperations extends org.springframework.data.mongodb.core.ReactiveFluentMongoOperations {
                        /**
                         * Returns the reactive operations that can be performed on indexes
                         * @param collectionName must not be {#literal null}.
                         * @return index operations on the named collection
                         */
                        // @ts-ignore
                        indexOps(collectionName: java.lang.String | string): org.springframework.data.mongodb.core.index.ReactiveIndexOperations
                        /**
                         * Returns the reactive operations that can be performed on indexes
                         * @param entityClass must not be {#literal null}.
                         * @return index operations on the named collection associated with the given entity class
                         */
                        // @ts-ignore
                        indexOps(entityClass: java.lang.Class<any>): org.springframework.data.mongodb.core.index.ReactiveIndexOperations
                        /**
                         * Execute the a MongoDB command expressed as a JSON string. This will call the method JSON.parse that is part of the
                         * MongoDB driver to convert the JSON string to a Document. Any errors that result from executing this command will be
                         * converted into Spring's DAO exception hierarchy.
                         * @param jsonCommand a MongoDB command expressed as a JSON string.
                         * @return a result object returned by the action
                         */
                        // @ts-ignore
                        executeCommand(jsonCommand: java.lang.String | string): object
                        /**
                         * Execute a MongoDB command. Any errors that result from executing this command will be converted into Spring's DAO
                         * exception hierarchy.
                         * @param command a MongoDB command.
                         * @return a result object returned by the action
                         */
                        // @ts-ignore
                        executeCommand(command: Document): object
                        /**
                         * Execute a MongoDB command. Any errors that result from executing this command will be converted into Spring's data
                         * access exception hierarchy.
                         * @param command a MongoDB command, must not be {#literal null}.
                         * @param readPreference read preferences to use, can be {#literal null}.
                         * @return a result object returned by the action.
                         */
                        // @ts-ignore
                        executeCommand(command: Document, readPreference: ReadPreference): object
                        /**
                         * Executes a {@link ReactiveDatabaseCallback} translating any exceptions as necessary.
                         * <p/>
                         * Allows for returning a result object, that is a domain object or a collection of domain objects.
                         * @param action callback object that specifies the MongoDB actions to perform on the passed in DB instance. Must not
                         *           be {#literal null}.
                         * @param <T> return type.
                         * @return a result object returned by the action
                         */
                        // @ts-ignore
                        execute<T>(action: org.springframework.data.mongodb.core.ReactiveDatabaseCallback<T>): object
                        /**
                         * Executes the given {@link ReactiveCollectionCallback} on the entity collection of the specified class.
                         * <p/>
                         * Allows for returning a result object, that is a domain object or a collection of domain objects.
                         * @param entityClass class that determines the collection to use. Must not be {#literal null}.
                         * @param action callback object that specifies the MongoDB action. Must not be {#literal null}.
                         * @param <T> return type.
                         * @return a result object returned by the action or {#literal null}.
                         */
                        // @ts-ignore
                        execute<T>(entityClass: java.lang.Class<any>, action: org.springframework.data.mongodb.core.ReactiveCollectionCallback<T>): object
                        /**
                         * Executes the given {@link ReactiveCollectionCallback} on the collection of the given name.
                         * <p/>
                         * Allows for returning a result object, that is a domain object or a collection of domain objects.
                         * @param collectionName the name of the collection that specifies which {#link MongoCollection} instance will be
                         *           passed into. Must not be {@literal null} or empty.
                         * @param action callback object that specifies the MongoDB action the callback action. Must not be {#literal null}.
                         * @param <T> return type.
                         * @return a result object returned by the action or {#literal null}.
                         */
                        // @ts-ignore
                        execute<T>(collectionName: java.lang.String | string, action: org.springframework.data.mongodb.core.ReactiveCollectionCallback<T>): object
                        /**
                         * Obtain a {@link ClientSession session} bound instance of {@link SessionScoped} binding the {@link ClientSession}
                         * provided by the given {@link Supplier} to each and every command issued against MongoDB.
                         * <p />
                         * <strong>Note:</strong> It is up to the caller to manage the {@link ClientSession} lifecycle. Use
                         * {@link ReactiveSessionScoped#execute(ReactiveSessionCallback, Consumer)} to provide a hook for processing the
                         * {@link ClientSession} when done.
                         * @param sessionProvider must not be {#literal null}.
                         * @return new instance of {#link ReactiveSessionScoped}. Never {@literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        withSession(sessionProvider: java.util.function$.Supplier<ClientSession>): org.springframework.data.mongodb.core.ReactiveSessionScoped
                        /**
                         * Obtain a {@link ClientSession session} bound instance of {@link SessionScoped} binding a new {@link ClientSession}
                         * with given {@literal sessionOptions} to each and every command issued against MongoDB.
                         * <p />
                         * <strong>Note:</strong> It is up to the caller to manage the {@link ClientSession} lifecycle. Use
                         * {@link ReactiveSessionScoped#execute(ReactiveSessionCallback, Consumer)} to provide a hook for processing the
                         * {@link ClientSession} when done.
                         * @param sessionOptions must not be {#literal null}.
                         * @return new instance of {#link ReactiveSessionScoped}. Never {@literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        withSession(sessionOptions: ClientSessionOptions): org.springframework.data.mongodb.core.ReactiveSessionScoped
                        /**
                         * Obtain a {@link ClientSession session} bound instance of {@link ReactiveSessionScoped} binding the
                         * {@link ClientSession} provided by the given {@link Publisher} to each and every command issued against MongoDB.
                         * <p />
                         * <strong>Note:</strong> It is up to the caller to manage the {@link ClientSession} lifecycle. Use
                         * {@link ReactiveSessionScoped#execute(ReactiveSessionCallback, Consumer)} to provide a hook for processing the
                         * {@link ClientSession} when done.
                         * @param sessionProvider must not be {#literal null}.
                         * @return new instance of {#link ReactiveSessionScoped}. Never {@literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        withSession(sessionProvider: object): org.springframework.data.mongodb.core.ReactiveSessionScoped
                        /**
                         * Obtain a {@link ClientSession} bound instance of {@link ReactiveMongoOperations}.
                         * <p />
                         * <strong>Note:</strong> It is up to the caller to manage the {@link ClientSession} lifecycle.
                         * @param session must not be {#literal null}.
                         * @return {#link ClientSession} bound instance of {@link ReactiveMongoOperations}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        withSession(session: ClientSession): org.springframework.data.mongodb.core.ReactiveMongoOperations
                        /**
                         * Initiate a new {@link ClientSession} and obtain a {@link ClientSession session} bound instance of
                         * {@link ReactiveSessionScoped}. Starts the transaction and adds the {@link ClientSession} to each and every command
                         * issued against MongoDB.
                         * <p/>
                         * Each {@link ReactiveSessionScoped#execute(ReactiveSessionCallback) execution} initiates a new managed transaction
                         * that is {@link ClientSession#commitTransaction() committed} on success. Transactions are
                         * {@link ClientSession#abortTransaction() rolled back} upon errors.
                         * @return new instance of {#link ReactiveSessionScoped}. Never {@literal null}.
                         */
                        // @ts-ignore
                        inTransaction(): org.springframework.data.mongodb.core.ReactiveSessionScoped
                        /**
                         * Obtain a {@link ClientSession session} bound instance of {@link ReactiveSessionScoped}, start the transaction and
                         * bind the {@link ClientSession} provided by the given {@link Publisher} to each and every command issued against
                         * MongoDB.
                         * <p/>
                         * Each {@link ReactiveSessionScoped#execute(ReactiveSessionCallback) execution} initiates a new managed transaction
                         * that is {@link ClientSession#commitTransaction() committed} on success. Transactions are
                         * {@link ClientSession#abortTransaction() rolled back} upon errors.
                         * @param sessionProvider must not be {#literal null}.
                         * @return new instance of {#link ReactiveSessionScoped}. Never {@literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        inTransaction(sessionProvider: object): org.springframework.data.mongodb.core.ReactiveSessionScoped
                        /**
                         * Create an uncapped collection with a name based on the provided entity class.
                         * @param entityClass class that determines the collection to create.
                         * @return the created collection.
                         */
                        // @ts-ignore
                        createCollection<T>(entityClass: java.lang.Class<T>): object
                        /**
                         * Create a collection with a name based on the provided entity class using the options.
                         * @param entityClass class that determines the collection to create. Must not be {#literal null}.
                         * @param collectionOptions options to use when creating the collection.
                         * @return the created collection.
                         */
                        // @ts-ignore
                        createCollection<T>(entityClass: java.lang.Class<T>, collectionOptions: org.springframework.data.mongodb.core.CollectionOptions): object
                        /**
                         * Create an uncapped collection with the provided name.
                         * @param collectionName name of the collection.
                         * @return the created collection.
                         */
                        // @ts-ignore
                        createCollection(collectionName: java.lang.String | string): object
                        /**
                         * Create a collection with the provided name and options.
                         * @param collectionName name of the collection. Must not be {#literal null} nor empty.
                         * @param collectionOptions options to use when creating the collection.
                         * @return the created collection.
                         */
                        // @ts-ignore
                        createCollection(collectionName: java.lang.String | string, collectionOptions: org.springframework.data.mongodb.core.CollectionOptions): object
                        /**
                         * A set of collection names.
                         * @return Flux of collection names.
                         */
                        // @ts-ignore
                        getCollectionNames(): object
                        /**
                         * Get a {@link MongoCollection} by name. The returned collection may not exists yet (except in local memory) and is
                         * created on first interaction with the server. Collections can be explicitly created via
                         * {@link #createCollection(Class)}. Please make sure to check if the collection {@link #collectionExists(Class)
                         * exists} first.
                         * <p/>
                         * Translate any exceptions as necessary.
                         * @param collectionName name of the collection.
                         * @return an existing collection or one created on first server interaction.
                         */
                        // @ts-ignore
                        getCollection(collectionName: java.lang.String | string): object
                        /**
                         * Check to see if a collection with a name indicated by the entity class exists.
                         * <p/>
                         * Translate any exceptions as necessary.
                         * @param entityClass class that determines the name of the collection. Must not be {#literal null}.
                         * @return true if a collection with the given name is found, false otherwise.
                         */
                        // @ts-ignore
                        collectionExists<T>(entityClass: java.lang.Class<T>): object
                        /**
                         * Check to see if a collection with a given name exists.
                         * <p/>
                         * Translate any exceptions as necessary.
                         * @param collectionName name of the collection. Must not be {#literal null}.
                         * @return true if a collection with the given name is found, false otherwise.
                         */
                        // @ts-ignore
                        collectionExists(collectionName: java.lang.String | string): object
                        /**
                         * Drop the collection with the name indicated by the entity class.
                         * <p/>
                         * Translate any exceptions as necessary.
                         * @param entityClass class that determines the collection to drop/delete. Must not be {#literal null}.
                         */
                        // @ts-ignore
                        dropCollection<T>(entityClass: java.lang.Class<T>): object
                        /**
                         * Drop the collection with the given name.
                         * <p/>
                         * Translate any exceptions as necessary.
                         * @param collectionName name of the collection to drop/delete.
                         */
                        // @ts-ignore
                        dropCollection(collectionName: java.lang.String | string): object
                        /**
                         * Query for a {@link Flux} of objects of type T from the collection used by the entity class.
                         * <p/>
                         * The object is converted from the MongoDB native representation using an instance of {@see MongoConverter}. Unless
                         * configured otherwise, an instance of {@link MappingMongoConverter} will be used.
                         * <p/>
                         * If your collection does not contain a homogeneous collection of types, this operation will not be an efficient way
                         * to map objects since the test for class type is done in the client and not on the server.
                         * @param entityClass the parametrized type of the returned {#link Flux}.
                         * @return the converted collection.
                         */
                        // @ts-ignore
                        findAll<T>(entityClass: java.lang.Class<T>): object
                        /**
                         * Query for a {@link Flux} of objects of type T from the specified collection.
                         * <p/>
                         * The object is converted from the MongoDB native representation using an instance of {@see MongoConverter}. Unless
                         * configured otherwise, an instance of {@link MappingMongoConverter} will be used.
                         * <p/>
                         * If your collection does not contain a homogeneous collection of types, this operation will not be an efficient way
                         * to map objects since the test for class type is done in the client and not on the server.
                         * @param entityClass the parametrized type of the returned {#link Flux}.
                         * @param collectionName name of the collection to retrieve the objects from.
                         * @return the converted collection.
                         */
                        // @ts-ignore
                        findAll<T>(entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        /**
                         * Map the results of an ad-hoc query on the collection for the entity class to a single instance of an object of the
                         * specified type.
                         * <p/>
                         * The object is converted from the MongoDB native representation using an instance of {@see MongoConverter}. Unless
                         * configured otherwise, an instance of {@link MappingMongoConverter} will be used.
                         * <p/>
                         * The query is specified as a {@link Query} which can be created either using the {@link BasicQuery} or the more
                         * feature rich {@link Query}.
                         * @param query the query class that specifies the criteria used to find a record and also an optional fields
                         *           specification.
                         * @param entityClass the parametrized type of the returned {#link Mono}.
                         * @return the converted object.
                         */
                        // @ts-ignore
                        findOne<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): object
                        /**
                         * Map the results of an ad-hoc query on the specified collection to a single instance of an object of the specified
                         * type.
                         * <p/>
                         * The object is converted from the MongoDB native representation using an instance of {@see MongoConverter}. Unless
                         * configured otherwise, an instance of {@link MappingMongoConverter} will be used.
                         * <p/>
                         * The query is specified as a {@link Query} which can be created either using the {@link BasicQuery} or the more
                         * feature rich {@link Query}.
                         * @param query the query class that specifies the criteria used to find a record and also an optional fields
                         *           specification.
                         * @param entityClass the parametrized type of the returned {#link Mono}.
                         * @param collectionName name of the collection to retrieve the objects from.
                         * @return the converted object.
                         */
                        // @ts-ignore
                        findOne<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        /**
                         * Determine result of given {@link Query} contains at least one element. <br />
                         * <strong>NOTE:</strong> Any additional support for query/field mapping, etc. is not available due to the lack of
                         * domain type information. Use {@link #exists(Query, Class, String)} to get full type specific support.
                         * @param query the {#link Query} class that specifies the criteria used to find a record.
                         * @param collectionName name of the collection to check for objects.
                         * @return {#literal true} if the query yields a result.
                         */
                        // @ts-ignore
                        exists(query: org.springframework.data.mongodb.core.query.Query, collectionName: java.lang.String | string): object
                        /**
                         * Determine result of given {@link Query} contains at least one element.
                         * @param query the {#link Query} class that specifies the criteria used to find a record.
                         * @param entityClass the parametrized type.
                         * @return {#literal true} if the query yields a result.
                         */
                        // @ts-ignore
                        exists(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>): object
                        /**
                         * Determine result of given {@link Query} contains at least one element.
                         * @param query the {#link Query} class that specifies the criteria used to find a record.
                         * @param entityClass the parametrized type. Can be {#literal null}.
                         * @param collectionName name of the collection to check for objects.
                         * @return {#literal true} if the query yields a result.
                         */
                        // @ts-ignore
                        exists(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): object
                        /**
                         * Map the results of an ad-hoc query on the collection for the entity class to a {@link Flux} of the specified type.
                         * <p/>
                         * The object is converted from the MongoDB native representation using an instance of {@see MongoConverter}. Unless
                         * configured otherwise, an instance of {@link MappingMongoConverter} will be used.
                         * <p/>
                         * The query is specified as a {@link Query} which can be created either using the {@link BasicQuery} or the more
                         * feature rich {@link Query}.
                         * @param query the query class that specifies the criteria used to find a record and also an optional fields
                         *           specification. Must not be {#literal null}.
                         * @param entityClass the parametrized type of the returned {#link Flux}. Must not be {@literal null}.
                         * @return the {#link Flux} of converted objects.
                         */
                        // @ts-ignore
                        find<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): object
                        /**
                         * Map the results of an ad-hoc query on the specified collection to a {@link Flux} of the specified type.
                         * <p/>
                         * The object is converted from the MongoDB native representation using an instance of {@see MongoConverter}. Unless
                         * configured otherwise, an instance of {@link MappingMongoConverter} will be used.
                         * <p/>
                         * The query is specified as a {@link Query} which can be created either using the {@link BasicQuery} or the more
                         * feature rich {@link Query}.
                         * @param query the query class that specifies the criteria used to find a record and also an optional fields
                         *           specification. Must not be {#literal null}.
                         * @param entityClass the parametrized type of the returned {#link Flux}.
                         * @param collectionName name of the collection to retrieve the objects from. Must not be {#literal null}.
                         * @return the {#link Flux} of converted objects.
                         */
                        // @ts-ignore
                        find<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        /**
                         * Returns a document with the given id mapped onto the given class. The collection the query is ran against will be
                         * derived from the given target class as well.
                         * @param id the id of the document to return. Must not be {#literal null}.
                         * @param entityClass the type the document shall be converted into. Must not be {#literal null}.
                         * @return the document with the given id mapped onto the given target class.
                         */
                        // @ts-ignore
                        findById<T>(id: java.lang.Object | any, entityClass: java.lang.Class<T>): object
                        /**
                         * Returns the document with the given id from the given collection mapped onto the given target class.
                         * @param id the id of the document to return.
                         * @param entityClass the type to convert the document to.
                         * @param collectionName the collection to query for the document.
                         * @return the converted object.
                         */
                        // @ts-ignore
                        findById<T>(id: java.lang.Object | any, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        /**
                         * Finds the distinct values for a specified {@literal field} across a single {@link MongoCollection} or view and
                         * returns the results in a {@link Flux}.
                         * @param field the name of the field to inspect for distinct values. Must not be {#literal null}.
                         * @param entityClass the domain type used for determining the actual {#link MongoCollection}. Must not be
                         *           {@literal null}.
                         * @param resultClass the result type. Must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        findDistinct<T>(field: java.lang.String | string, entityClass: java.lang.Class<any>, resultClass: java.lang.Class<T>): object
                        /**
                         * Finds the distinct values for a specified {@literal field} across a single {@link MongoCollection} or view and
                         * returns the results in a {@link Flux}.
                         * @param query filter {#link Query} to restrict search. Must not be {@literal null}.
                         * @param field the name of the field to inspect for distinct values. Must not be {#literal null}.
                         * @param entityClass the domain type used for determining the actual {#link MongoCollection} and mapping the
                         *           {@link Query} to the domain type fields. Must not be {@literal null}.
                         * @param resultClass the result type. Must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        findDistinct<T>(query: org.springframework.data.mongodb.core.query.Query, field: java.lang.String | string, entityClass: java.lang.Class<any>, resultClass: java.lang.Class<T>): object
                        /**
                         * Finds the distinct values for a specified {@literal field} across a single {@link MongoCollection} or view and
                         * returns the results in a {@link Flux}.
                         * @param query filter {#link Query} to restrict search. Must not be {@literal null}.
                         * @param field the name of the field to inspect for distinct values. Must not be {#literal null}.
                         * @param collectionName the explicit name of the actual {#link MongoCollection}. Must not be {@literal null}.
                         * @param entityClass the domain type used for mapping the {#link Query} to the domain type fields.
                         * @param resultClass the result type. Must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        findDistinct<T>(query: org.springframework.data.mongodb.core.query.Query, field: java.lang.String | string, collectionName: java.lang.String | string, entityClass: java.lang.Class<any>, resultClass: java.lang.Class<T>): object
                        /**
                         * Finds the distinct values for a specified {@literal field} across a single {@link MongoCollection} or view and
                         * returns the results in a {@link Flux}.
                         * @param query filter {#link Query} to restrict search. Must not be {@literal null}.
                         * @param field the name of the field to inspect for distinct values. Must not be {#literal null}.
                         * @param collection the explicit name of the actual {#link MongoCollection}. Must not be {@literal null}.
                         * @param resultClass the result type. Must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        findDistinct<T>(query: org.springframework.data.mongodb.core.query.Query, field: java.lang.String | string, collection: java.lang.String | string, resultClass: java.lang.Class<T>): object
                        /**
                         * Execute an aggregation operation.
                         * <p>
                         * The raw results will be mapped to the given entity class.
                         * <p>
                         * Aggregation streaming cannot be used with {@link AggregationOptions#isExplain() aggregation explain} nor with
                         * {@link AggregationOptions#getCursorBatchSize()}. Enabling explanation mode or setting batch size cause
                         * {@link IllegalArgumentException}.
                         * @param aggregation The {#link TypedAggregation} specification holding the aggregation operations. Must not be
                         *           {@literal null}.
                         * @param collectionName The name of the input collection to use for the aggregation. Must not be {#literal null}.
                         * @param outputType The parametrized type of the returned {#link Flux}. Must not be {@literal null}.
                         * @return The results of the aggregation operation.
                         * @throws IllegalArgumentException if {#code aggregation}, {@code collectionName} or {@code outputType} is
                         *            {@literal null}.
                         */
                        // @ts-ignore
                        aggregate<O>(aggregation: org.springframework.data.mongodb.core.aggregation.TypedAggregation<any>, collectionName: java.lang.String | string, outputType: java.lang.Class<O>): object
                        /**
                         * Execute an aggregation operation.
                         * <p/>
                         * The raw results will be mapped to the given entity class and are returned as stream. The name of the
                         * inputCollection is derived from the {@link TypedAggregation#getInputType() aggregation input type}.
                         * <p/>
                         * Aggregation streaming cannot be used with {@link AggregationOptions#isExplain() aggregation explain} nor with
                         * {@link AggregationOptions#getCursorBatchSize()}. Enabling explanation mode or setting batch size cause
                         * {@link IllegalArgumentException}.
                         * @param aggregation The {#link TypedAggregation} specification holding the aggregation operations. Must not be
                         *           {@literal null}.
                         * @param outputType The parametrized type of the returned {#link Flux}. Must not be {@literal null}.
                         * @return The results of the aggregation operation.
                         * @throws IllegalArgumentException if {#code aggregation} or {@code outputType} is {@literal null}.
                         */
                        // @ts-ignore
                        aggregate<O>(aggregation: org.springframework.data.mongodb.core.aggregation.TypedAggregation<any>, outputType: java.lang.Class<O>): object
                        /**
                         * Execute an aggregation operation.
                         * <p/>
                         * The raw results will be mapped to the given {@code ouputType}. The name of the inputCollection is derived from the
                         * {@code inputType}.
                         * <p/>
                         * Aggregation streaming cannot be used with {@link AggregationOptions#isExplain() aggregation explain} nor with
                         * {@link AggregationOptions#getCursorBatchSize()}. Enabling explanation mode or setting batch size cause
                         * {@link IllegalArgumentException}.
                         * @param aggregation The {#link Aggregation} specification holding the aggregation operations. Must not be
                         *           {@literal null}.
                         * @param inputType the inputType where the aggregation operation will read from. Must not be {#literal null}.
                         * @param outputType The parametrized type of the returned {#link Flux}. Must not be {@literal null}.
                         * @return The results of the aggregation operation.
                         * @throws IllegalArgumentException if {#code aggregation}, {@code inputType} or {@code outputType} is
                         *            {@literal null}.
                         */
                        // @ts-ignore
                        aggregate<O>(aggregation: org.springframework.data.mongodb.core.aggregation.Aggregation, inputType: java.lang.Class<any>, outputType: java.lang.Class<O>): object
                        /**
                         * Execute an aggregation operation.
                         * <p/>
                         * The raw results will be mapped to the given entity class.
                         * <p/>
                         * Aggregation streaming cannot be used with {@link AggregationOptions#isExplain() aggregation explain} nor with
                         * {@link AggregationOptions#getCursorBatchSize()}. Enabling explanation mode or setting batch size cause
                         * {@link IllegalArgumentException}.
                         * @param aggregation The {#link Aggregation} specification holding the aggregation operations. Must not be
                         *           {@literal null}.
                         * @param collectionName the collection where the aggregation operation will read from. Must not be {#literal null} or
                         *           empty.
                         * @param outputType The parametrized type of the returned {#link Flux}. Must not be {@literal null}.
                         * @return The results of the aggregation operation.
                         * @throws IllegalArgumentException if {#code aggregation}, {@code collectionName} or {@code outputType} is
                         *            {@literal null}.
                         */
                        // @ts-ignore
                        aggregate<O>(aggregation: org.springframework.data.mongodb.core.aggregation.Aggregation, collectionName: java.lang.String | string, outputType: java.lang.Class<O>): object
                        /**
                         * Returns {@link Flux} of {@link GeoResult} for all entities matching the given {@link NearQuery}. Will consider
                         * entity mapping information to determine the collection the query is ran against. Note, that MongoDB limits the
                         * number of results by default. Make sure to add an explicit limit to the {@link NearQuery} if you expect a
                         * particular number of results.
                         * @param near must not be {#literal null}.
                         * @param entityClass must not be {#literal null}.
                         * @return the converted {#link GeoResult}s.
                         */
                        // @ts-ignore
                        geoNear<T>(near: org.springframework.data.mongodb.core.query.NearQuery, entityClass: java.lang.Class<T>): object
                        /**
                         * Returns {@link Flux} of {@link GeoResult} for all entities matching the given {@link NearQuery}. Note, that MongoDB
                         * limits the number of results by default. Make sure to add an explicit limit to the {@link NearQuery} if you expect
                         * a particular number of results.
                         * @param near must not be {#literal null}.
                         * @param entityClass must not be {#literal null}.
                         * @param collectionName the collection to trigger the query against. If no collection name is given the entity class
                         *           will be inspected.
                         * @return the converted {#link GeoResult}s.
                         */
                        // @ts-ignore
                        geoNear<T>(near: org.springframework.data.mongodb.core.query.NearQuery, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        /**
                         * Triggers <a href="https://docs.mongodb.org/manual/reference/method/db.collection.findAndModify/">findAndModify<a/>
                         * to apply provided {@link Update} on documents matching {@link Criteria} of given {@link Query}.
                         * @param query the {#link Query} class that specifies the {@link Criteria} used to find a record and also an optional
                         *           fields specification. Must not be {@literal null}.
                         * @param update the {#link Update} to apply on matching documents. Must not be {@literal null}.
                         * @param entityClass the parametrized type. Must not be {#literal null}.
                         * @return the converted object that was updated before it was updated.
                         */
                        // @ts-ignore
                        findAndModify<T>(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<T>): object
                        /**
                         * Triggers <a href="https://docs.mongodb.org/manual/reference/method/db.collection.findAndModify/">findAndModify<a/>
                         * to apply provided {@link Update} on documents matching {@link Criteria} of given {@link Query}.
                         * @param query the {#link Query} class that specifies the {@link Criteria} used to find a record and also an optional
                         *           fields specification. Must not be {@literal null}.
                         * @param update the {#link Update} to apply on matching documents. Must not be {@literal null}.
                         * @param entityClass the parametrized type. Must not be {#literal null}.
                         * @param collectionName the collection to query. Must not be {#literal null}.
                         * @return the converted object that was updated before it was updated.
                         */
                        // @ts-ignore
                        findAndModify<T>(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        /**
                         * Triggers <a href="https://docs.mongodb.org/manual/reference/method/db.collection.findAndModify/">findAndModify<a/>
                         * to apply provided {@link Update} on documents matching {@link Criteria} of given {@link Query} taking
                         * {@link FindAndModifyOptions} into account.
                         * @param query the {#link Query} class that specifies the {@link Criteria} used to find a record and also an optional
                         *           fields specification.
                         * @param update the {#link Update} to apply on matching documents.
                         * @param options the {#link FindAndModifyOptions} holding additional information.
                         * @param entityClass the parametrized type.
                         * @return the converted object that was updated. Depending on the value of {#link FindAndModifyOptions#isReturnNew()}
                         *          this will either be the object as it was before the update or as it is after the update.
                         */
                        // @ts-ignore
                        findAndModify<T>(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, options: org.springframework.data.mongodb.core.FindAndModifyOptions, entityClass: java.lang.Class<T>): object
                        /**
                         * Triggers <a href="https://docs.mongodb.org/manual/reference/method/db.collection.findAndModify/">findAndModify<a/>
                         * to apply provided {@link Update} on documents matching {@link Criteria} of given {@link Query} taking
                         * {@link FindAndModifyOptions} into account.
                         * @param query the {#link Query} class that specifies the {@link Criteria} used to find a record and also an optional
                         *           fields specification. Must not be {@literal null}.
                         * @param update the {#link Update} to apply on matching documents. Must not be {@literal null}.
                         * @param options the {#link FindAndModifyOptions} holding additional information. Must not be {@literal null}.
                         * @param entityClass the parametrized type. Must not be {#literal null}.
                         * @param collectionName the collection to query. Must not be {#literal null}.
                         * @return the converted object that was updated. Depending on the value of {#link FindAndModifyOptions#isReturnNew()}
                         *          this will either be the object as it was before the update or as it is after the update.
                         */
                        // @ts-ignore
                        findAndModify<T>(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, options: org.springframework.data.mongodb.core.FindAndModifyOptions, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        /**
                         * Triggers
                         * <a href="https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndReplace/">findOneAndReplace<a/>
                         * to replace a single document matching {@link Criteria} of given {@link Query} with the {@code replacement}
                         * document. <br />
                         * Options are defaulted to {@link FindAndReplaceOptions#empty()}. <br />
                         * <strong>NOTE:</strong> The replacement entity must not hold an {@literal id}.
                         * @param query the {#link Query} class that specifies the {@link Criteria} used to find a record and also an optional
                         *           fields specification. Must not be {@literal null}.
                         * @param replacement the replacement document. Must not be {#literal null}.
                         * @return the converted object that was updated or {#link Mono#empty()}, if not found.
                         * @since 2.1
                         */
                        // @ts-ignore
                        findAndReplace<T>(query: org.springframework.data.mongodb.core.query.Query, replacement: T): object
                        /**
                         * Triggers
                         * <a href="https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndReplace/">findOneAndReplace<a/>
                         * to replace a single document matching {@link Criteria} of given {@link Query} with the {@code replacement}
                         * document. <br />
                         * Options are defaulted to {@link FindAndReplaceOptions#empty()}. <br />
                         * <strong>NOTE:</strong> The replacement entity must not hold an {@literal id}.
                         * @param query the {#link Query} class that specifies the {@link Criteria} used to find a record and also an optional
                         *           fields specification. Must not be {@literal null}.
                         * @param replacement the replacement document. Must not be {#literal null}.
                         * @param collectionName the collection to query. Must not be {#literal null}.
                         * @return the converted object that was updated or {#link Mono#empty()}, if not found.
                         * @since 2.1
                         */
                        // @ts-ignore
                        findAndReplace<T>(query: org.springframework.data.mongodb.core.query.Query, replacement: T, collectionName: java.lang.String | string): object
                        /**
                         * Triggers
                         * <a href="https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndReplace/">findOneAndReplace<a/>
                         * to replace a single document matching {@link Criteria} of given {@link Query} with the {@code replacement} document
                         * taking {@link FindAndReplaceOptions} into account. <br />
                         * <strong>NOTE:</strong> The replacement entity must not hold an {@literal id}.
                         * @param query the {#link Query} class that specifies the {@link Criteria} used to find a record and also an optional
                         *           fields specification. Must not be {@literal null}.
                         * @param replacement the replacement document. Must not be {#literal null}.
                         * @param options the {#link FindAndModifyOptions} holding additional information. Must not be {@literal null}.
                         * @return the converted object that was updated or {#link Mono#empty()}, if not found. Depending on the value of
                         *          {@link FindAndReplaceOptions#isReturnNew()} this will either be the object as it was before the update or
                         *          as it is after the update.
                         * @since 2.1
                         */
                        // @ts-ignore
                        findAndReplace<T>(query: org.springframework.data.mongodb.core.query.Query, replacement: T, options: org.springframework.data.mongodb.core.FindAndReplaceOptions): object
                        /**
                         * Triggers
                         * <a href="https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndReplace/">findOneAndReplace<a/>
                         * to replace a single document matching {@link Criteria} of given {@link Query} with the {@code replacement} document
                         * taking {@link FindAndReplaceOptions} into account. <br />
                         * <strong>NOTE:</strong> The replacement entity must not hold an {@literal id}.
                         * @param query the {#link Query} class that specifies the {@link Criteria} used to find a record and also an optional
                         *           fields specification. Must not be {@literal null}.
                         * @param replacement the replacement document. Must not be {#literal null}.
                         * @param options the {#link FindAndModifyOptions} holding additional information. Must not be {@literal null}.
                         * @return the converted object that was updated or {#link Mono#empty()}, if not found. Depending on the value of
                         *          {@link FindAndReplaceOptions#isReturnNew()} this will either be the object as it was before the update or
                         *          as it is after the update.
                         * @since 2.1
                         */
                        // @ts-ignore
                        findAndReplace<T>(query: org.springframework.data.mongodb.core.query.Query, replacement: T, options: org.springframework.data.mongodb.core.FindAndReplaceOptions, collectionName: java.lang.String | string): object
                        /**
                         * Triggers
                         * <a href="https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndReplace/">findOneAndReplace<a/>
                         * to replace a single document matching {@link Criteria} of given {@link Query} with the {@code replacement} document
                         * taking {@link FindAndReplaceOptions} into account. <br />
                         * <strong>NOTE:</strong> The replacement entity must not hold an {@literal id}.
                         * @param query the {#link Query} class that specifies the {@link Criteria} used to find a record and also an optional
                         *           fields specification. Must not be {@literal null}.
                         * @param replacement the replacement document. Must not be {#literal null}.
                         * @param options the {#link FindAndModifyOptions} holding additional information. Must not be {@literal null}.
                         * @param entityType the parametrized type. Must not be {#literal null}.
                         * @param collectionName the collection to query. Must not be {#literal null}.
                         * @return the converted object that was updated or {#link Mono#empty()}, if not found. Depending on the value of
                         *          {@link FindAndReplaceOptions#isReturnNew()} this will either be the object as it was before the update or
                         *          as it is after the update.
                         * @since 2.1
                         */
                        // @ts-ignore
                        findAndReplace<T>(query: org.springframework.data.mongodb.core.query.Query, replacement: T, options: org.springframework.data.mongodb.core.FindAndReplaceOptions, entityType: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        /**
                         * Triggers
                         * <a href="https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndReplace/">findOneAndReplace<a/>
                         * to replace a single document matching {@link Criteria} of given {@link Query} with the {@code replacement} document
                         * taking {@link FindAndReplaceOptions} into account. <br />
                         * <strong>NOTE:</strong> The replacement entity must not hold an {@literal id}.
                         * @param query the {#link Query} class that specifies the {@link Criteria} used to find a record and also an optional
                         *           fields specification. Must not be {@literal null}.
                         * @param replacement the replacement document. Must not be {#literal null}.
                         * @param options the {#link FindAndModifyOptions} holding additional information. Must not be {@literal null}.
                         * @param entityType the type used for mapping the {#link Query} to domain type fields and deriving the collection
                         *           from. Must not be {@literal null}.
                         * @param resultType the parametrized type projection return type. Must not be {#literal null}, use the domain type of
                         *           {@code Object.class} instead.
                         * @return the converted object that was updated or {#link Mono#empty()}, if not found. Depending on the value of
                         *          {@link FindAndReplaceOptions#isReturnNew()} this will either be the object as it was before the update or
                         *          as it is after the update.
                         * @since 2.1
                         */
                        // @ts-ignore
                        findAndReplace<S, T>(query: org.springframework.data.mongodb.core.query.Query, replacement: S, options: org.springframework.data.mongodb.core.FindAndReplaceOptions, entityType: java.lang.Class<S>, resultType: java.lang.Class<T>): object
                        /**
                         * Triggers
                         * <a href="https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndReplace/">findOneAndReplace<a/>
                         * to replace a single document matching {@link Criteria} of given {@link Query} with the {@code replacement} document
                         * taking {@link FindAndReplaceOptions} into account. <br />
                         * <strong>NOTE:</strong> The replacement entity must not hold an {@literal id}.
                         * @param query the {#link Query} class that specifies the {@link Criteria} used to find a record and also an optional
                         *           fields specification. Must not be {@literal null}.
                         * @param replacement the replacement document. Must not be {#literal null}.
                         * @param options the {#link FindAndModifyOptions} holding additional information. Must not be {@literal null}.
                         * @param entityType the type used for mapping the {#link Query} to domain type fields and deriving the collection
                         *           from. Must not be {@literal null}.
                         * @param collectionName the collection to query. Must not be {#literal null}.
                         * @param resultType resultType the parametrized type projection return type. Must not be {#literal null}, use the
                         *           domain type of {@code Object.class} instead.
                         * @return the converted object that was updated or {#link Mono#empty()}, if not found. Depending on the value of
                         *          {@link FindAndReplaceOptions#isReturnNew()} this will either be the object as it was before the update or
                         *          as it is after the update.
                         * @since 2.1
                         */
                        // @ts-ignore
                        findAndReplace<S, T>(query: org.springframework.data.mongodb.core.query.Query, replacement: S, options: org.springframework.data.mongodb.core.FindAndReplaceOptions, entityType: java.lang.Class<S>, collectionName: java.lang.String | string, resultType: java.lang.Class<T>): object
                        /**
                         * Map the results of an ad-hoc query on the collection for the entity type to a single instance of an object of the
                         * specified type. The first document that matches the query is returned and also removed from the collection in the
                         * database.
                         * <p/>
                         * The object is converted from the MongoDB native representation using an instance of {@see MongoConverter}.
                         * <p/>
                         * The query is specified as a {@link Query} which can be created either using the {@link BasicQuery} or the more
                         * feature rich {@link Query}.
                         * @param query the query class that specifies the criteria used to find a record and also an optional fields
                         *           specification.
                         * @param entityClass the parametrized type of the returned {#link Mono}.
                         * @return the converted object
                         */
                        // @ts-ignore
                        findAndRemove<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): object
                        /**
                         * Map the results of an ad-hoc query on the specified collection to a single instance of an object of the specified
                         * type. The first document that matches the query is returned and also removed from the collection in the database.
                         * <p/>
                         * The object is converted from the MongoDB native representation using an instance of {@see MongoConverter}. Unless
                         * configured otherwise, an instance of {@link MappingMongoConverter} will be used.
                         * <p/>
                         * The query is specified as a {@link Query} which can be created either using the {@link BasicQuery} or the more
                         * feature rich {@link Query}.
                         * @param query the query class that specifies the criteria used to find a record and also an optional fields
                         *           specification.
                         * @param entityClass the parametrized type of the returned {#link Mono}.
                         * @param collectionName name of the collection to retrieve the objects from.
                         * @return the converted object.
                         */
                        // @ts-ignore
                        findAndRemove<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        /**
                         * Returns the number of documents for the given {@link Query} by querying the collection of the given entity class.
                         * @param query the {#link Query} class that specifies the criteria used to find documents. Must not be
                         *           {@literal null}.
                         * @param entityClass class that determines the collection to use. Must not be {#literal null}.
                         * @return the count of matching documents.
                         */
                        // @ts-ignore
                        count(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>): object
                        /**
                         * Returns the number of documents for the given {@link Query} querying the given collection. The given {@link Query}
                         * must solely consist of document field references as we lack type information to map potential property references
                         * onto document fields. Use {@link #count(Query, Class, String)} to get full type specific support.
                         * @param query the {#link Query} class that specifies the criteria used to find documents.
                         * @param collectionName must not be {#literal null} or empty.
                         * @return the count of matching documents.
                         * @see #count(Query, Class, String)
                         */
                        // @ts-ignore
                        count(query: org.springframework.data.mongodb.core.query.Query, collectionName: java.lang.String | string): object
                        /**
                         * Returns the number of documents for the given {@link Query} by querying the given collection using the given entity
                         * class to map the given {@link Query}.
                         * @param query the {#link Query} class that specifies the criteria used to find documents. Must not be
                         *           {@literal null}.
                         * @param entityClass the parametrized type. Can be {#literal null}.
                         * @param collectionName must not be {#literal null} or empty.
                         * @return the count of matching documents.
                         */
                        // @ts-ignore
                        count(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): object
                        /**
                         * Insert the object into the collection for the entity type of the object to save.
                         * <p/>
                         * The object is converted to the MongoDB native representation using an instance of {@see MongoConverter}.
                         * <p/>
                         * If your object has an "Id' property, it will be set with the generated Id from MongoDB. If your Id property is a
                         * String then MongoDB ObjectId will be used to populate that string. Otherwise, the conversion from ObjectId to your
                         * property type will be handled by Spring's BeanWrapper class that leverages Type Conversion API. See
                         * <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html#validation" > Spring's Type
                         * Conversion"</a> for more details.
                         * <p/>
                         * <p/>
                         * Insert is used to initially store the object into the database. To update an existing object use the save method.
                         * @param objectToSave the object to store in the collection. Must not be {#literal null}.
                         * @return the inserted object.
                         */
                        // @ts-ignore
                        insert<T>(objectToSave: T): object
                        /**
                         * Insert the object into the specified collection.
                         * <p/>
                         * The object is converted to the MongoDB native representation using an instance of {@see MongoConverter}. Unless
                         * configured otherwise, an instance of {@link MappingMongoConverter} will be used.
                         * <p/>
                         * Insert is used to initially store the object into the database. To update an existing object use the save method.
                         * @param objectToSave the object to store in the collection. Must not be {#literal null}.
                         * @param collectionName name of the collection to store the object in. Must not be {#literal null}.
                         * @return the inserted object.
                         */
                        // @ts-ignore
                        insert<T>(objectToSave: T, collectionName: java.lang.String | string): object
                        /**
                         * Insert a Collection of objects into a collection in a single batch write to the database.
                         * @param batchToSave the batch of objects to save. Must not be {#literal null}.
                         * @param entityClass class that determines the collection to use. Must not be {#literal null}.
                         * @return the inserted objects .
                         */
                        // @ts-ignore
                        insert<T>(batchToSave: java.util.Collection<any> | Array<any>, entityClass: java.lang.Class<any>): object
                        /**
                         * Insert a batch of objects into the specified collection in a single batch write to the database.
                         * @param batchToSave the list of objects to save. Must not be {#literal null}.
                         * @param collectionName name of the collection to store the object in. Must not be {#literal null}.
                         * @return the inserted objects.
                         */
                        // @ts-ignore
                        insert<T>(batchToSave: java.util.Collection<any> | Array<any>, collectionName: java.lang.String | string): object
                        /**
                         * Insert a mixed Collection of objects into a database collection determining the collection name to use based on the
                         * class.
                         * @param objectsToSave the list of objects to save. Must not be {#literal null}.
                         * @return the saved objects.
                         */
                        // @ts-ignore
                        insertAll<T>(objectsToSave: java.util.Collection<any> | Array<any>): object
                        /**
                         * Insert the object into the collection for the entity type of the object to save.
                         * <p/>
                         * The object is converted to the MongoDB native representation using an instance of {@see MongoConverter}.
                         * <p/>
                         * If your object has an "Id' property, it will be set with the generated Id from MongoDB. If your Id property is a
                         * String then MongoDB ObjectId will be used to populate that string. Otherwise, the conversion from ObjectId to your
                         * property type will be handled by Spring's BeanWrapper class that leverages Type Conversion API. See
                         * <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html#validation" > Spring's Type
                         * Conversion"</a> for more details.
                         * <p/>
                         * <p/>
                         * Insert is used to initially store the object into the database. To update an existing object use the save method.
                         * @param objectToSave the object to store in the collection. Must not be {#literal null}.
                         * @return the inserted objects.
                         */
                        // @ts-ignore
                        insert<T>(objectToSave: object): object
                        /**
                         * Insert a Collection of objects into a collection in a single batch write to the database.
                         * @param batchToSave the publisher which provides objects to save. Must not be {#literal null}.
                         * @param entityClass class that determines the collection to use. Must not be {#literal null}.
                         * @return the inserted objects.
                         */
                        // @ts-ignore
                        insertAll<T>(batchToSave: object, entityClass: java.lang.Class<any>): object
                        /**
                         * Insert objects into the specified collection in a single batch write to the database.
                         * @param batchToSave the publisher which provides objects to save. Must not be {#literal null}.
                         * @param collectionName name of the collection to store the object in. Must not be {#literal null}.
                         * @return the inserted objects.
                         */
                        // @ts-ignore
                        insertAll<T>(batchToSave: object, collectionName: java.lang.String | string): object
                        /**
                         * Insert a mixed Collection of objects into a database collection determining the collection name to use based on the
                         * class.
                         * @param objectsToSave the publisher which provides objects to save. Must not be {#literal null}.
                         * @return the inserted objects.
                         */
                        // @ts-ignore
                        insertAll<T>(objectsToSave: object): object
                        /**
                         * Save the object to the collection for the entity type of the object to save. This will perform an insert if the
                         * object is not already present, that is an 'upsert'.
                         * <p/>
                         * The object is converted to the MongoDB native representation using an instance of {@see MongoConverter}. Unless
                         * configured otherwise, an instance of {@link MappingMongoConverter} will be used.
                         * <p/>
                         * If your object has an "Id' property, it will be set with the generated Id from MongoDB. If your Id property is a
                         * String then MongoDB ObjectId will be used to populate that string. Otherwise, the conversion from ObjectId to your
                         * property type will be handled by Spring's BeanWrapper class that leverages Type Conversion API. See
                         * <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html#validation" > Spring's Type
                         * Conversion"</a> for more details.
                         * @param objectToSave the object to store in the collection. Must not be {#literal null}.
                         * @return the saved object.
                         */
                        // @ts-ignore
                        save<T>(objectToSave: T): object
                        /**
                         * Save the object to the specified collection. This will perform an insert if the object is not already present, that
                         * is an 'upsert'.
                         * <p/>
                         * The object is converted to the MongoDB native representation using an instance of {@see MongoConverter}. Unless
                         * configured otherwise, an instance of {@link MappingMongoConverter} will be used.
                         * <p/>
                         * If your object has an "Id' property, it will be set with the generated Id from MongoDB. If your Id property is a
                         * String then MongoDB ObjectId will be used to populate that string. Otherwise, the conversion from ObjectId to your
                         * property type will be handled by Spring's BeanWrapper class that leverages Type Conversion API. See <a
                         * https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html#validation">Spring's Type
                         * Conversion"</a> for more details.
                         * @param objectToSave the object to store in the collection. Must not be {#literal null}.
                         * @param collectionName name of the collection to store the object in. Must not be {#literal null}.
                         * @return the saved object.
                         */
                        // @ts-ignore
                        save<T>(objectToSave: T, collectionName: java.lang.String | string): object
                        /**
                         * Save the object to the collection for the entity type of the object to save. This will perform an insert if the
                         * object is not already present, that is an 'upsert'.
                         * <p/>
                         * The object is converted to the MongoDB native representation using an instance of {@see MongoConverter}. Unless
                         * configured otherwise, an instance of {@link MappingMongoConverter} will be used.
                         * <p/>
                         * If your object has an "Id' property, it will be set with the generated Id from MongoDB. If your Id property is a
                         * String then MongoDB ObjectId will be used to populate that string. Otherwise, the conversion from ObjectId to your
                         * property type will be handled by Spring's BeanWrapper class that leverages Type Conversion API. See
                         * <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html#validation" > Spring's Type
                         * Conversion"</a> for more details.
                         * @param objectToSave the object to store in the collection. Must not be {#literal null}.
                         * @return the saved object.
                         */
                        // @ts-ignore
                        save<T>(objectToSave: object): object
                        /**
                         * Save the object to the specified collection. This will perform an insert if the object is not already present, that
                         * is an 'upsert'.
                         * <p/>
                         * The object is converted to the MongoDB native representation using an instance of {@see MongoConverter}. Unless
                         * configured otherwise, an instance of {@link MappingMongoConverter} will be used.
                         * <p/>
                         * If your object has an "Id' property, it will be set with the generated Id from MongoDB. If your Id property is a
                         * String then MongoDB ObjectId will be used to populate that string. Otherwise, the conversion from ObjectId to your
                         * property type will be handled by Spring's BeanWrapper class that leverages Type Conversion API. See <a
                         * https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html#validation">Spring's Type
                         * Conversion"</a> for more details.
                         * @param objectToSave the object to store in the collection. Must not be {#literal null}.
                         * @param collectionName name of the collection to store the object in. Must not be {#literal null}.
                         * @return the saved object.
                         */
                        // @ts-ignore
                        save<T>(objectToSave: object, collectionName: java.lang.String | string): object
                        /**
                         * Performs an upsert. If no document is found that matches the query, a new document is created and inserted by
                         * combining the query document and the update document. <br />
                         * <strong>NOTE:</strong> {@link Query#getSortObject() sorting} is not supported by {@code db.collection.updateOne}.
                         * Use {@link #findAndModify(Query, Update, Class)} instead.
                         * @param query the query document that specifies the criteria used to select a record to be upserted. Must not be
                         *           {#literal null}.
                         * @param update the update document that contains the updated object or $ operators to manipulate the existing
                         *           object. Must not be {#literal null}.
                         * @param entityClass class that determines the collection to use. Must not be {#literal null}.
                         * @return the {#link UpdateResult} which lets you access the results of the previous write.
                         */
                        // @ts-ignore
                        upsert(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>): object
                        /**
                         * Performs an upsert. If no document is found that matches the query, a new document is created and inserted by
                         * combining the query document and the update document. <br />
                         * <strong>NOTE:</strong> Any additional support for field mapping, versions, etc. is not available due to the lack of
                         * domain type information. Use {@link #upsert(Query, Update, Class, String)} to get full type specific support.
                         * <br />
                         * <strong>NOTE:</strong> {@link Query#getSortObject() sorting} is not supported by {@code db.collection.updateOne}.
                         * Use {@link #findAndModify(Query, Update, Class, String)} instead.
                         * @param query the query document that specifies the criteria used to select a record to be upserted. Must not be
                         *           {#literal null}.
                         * @param update the update document that contains the updated object or $ operators to manipulate the existing
                         *           object. Must not be {#literal null}.
                         * @param collectionName name of the collection to update the object in.
                         * @return the {#link UpdateResult} which lets you access the results of the previous write.
                         */
                        // @ts-ignore
                        upsert(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, collectionName: java.lang.String | string): object
                        /**
                         * Performs an upsert. If no document is found that matches the query, a new document is created and inserted by
                         * combining the query document and the update document. <br />
                         * <strong>NOTE:</strong> {@link Query#getSortObject() sorting} is not supported by {@code db.collection.updateOne}.
                         * Use {@link #findAndModify(Query, Update, Class, String)} instead.
                         * @param query the query document that specifies the criteria used to select a record to be upserted. Must not be
                         *           {#literal null}.
                         * @param update the update document that contains the updated object or $ operators to manipulate the existing
                         *           object. Must not be {#literal null}.
                         * @param entityClass class of the pojo to be operated on. Must not be {#literal null}.
                         * @param collectionName name of the collection to update the object in. Must not be {#literal null}.
                         * @return the {#link UpdateResult} which lets you access the results of the previous write.
                         */
                        // @ts-ignore
                        upsert(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): object
                        /**
                         * Updates the first object that is found in the collection of the entity class that matches the query document with
                         * the provided update document. <br />
                         * <strong>NOTE:</strong> {@link Query#getSortObject() sorting} is not supported by {@code db.collection.updateOne}.
                         * Use {@link #findAndModify(Query, Update, Class)} instead.
                         * @param query the query document that specifies the criteria used to select a record to be updated. Must not be
                         *           {#literal null}.
                         * @param update the update document that contains the updated object or $ operators to manipulate the existing. Must
                         *           not be {#literal null}.
                         * @param entityClass class that determines the collection to use.
                         * @return the {#link UpdateResult} which lets you access the results of the previous write.
                         */
                        // @ts-ignore
                        updateFirst(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>): object
                        /**
                         * Updates the first object that is found in the specified collection that matches the query document criteria with
                         * the provided updated document. <br />
                         * <strong>NOTE:</strong> Any additional support for field mapping, versions, etc. is not available due to the lack of
                         * domain type information. Use {@link #updateFirst(Query, Update, Class, String)} to get full type specific support.
                         * <br />
                         * <strong>NOTE:</strong> {@link Query#getSortObject() sorting} is not supported by {@code db.collection.updateOne}.
                         * Use {@link #findAndModify(Query, Update, Class, String)} instead.
                         * @param query the query document that specifies the criteria used to select a record to be updated. Must not be
                         *           {#literal null}.
                         * @param update the update document that contains the updated object or $ operators to manipulate the existing. Must
                         *           not be {#literal null}.
                         * @param collectionName name of the collection to update the object in. Must not be {#literal null}.
                         * @return the {#link UpdateResult} which lets you access the results of the previous write.
                         */
                        // @ts-ignore
                        updateFirst(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, collectionName: java.lang.String | string): object
                        /**
                         * Updates the first object that is found in the specified collection that matches the query document criteria with
                         * the provided updated document. <br />
                         * <strong>NOTE:</strong> {@link Query#getSortObject() sorting} is not supported by {@code db.collection.updateOne}.
                         * Use {@link #findAndModify(Query, Update, Class, String)} instead.
                         * @param query the query document that specifies the criteria used to select a record to be updated. Must not be
                         *           {#literal null}.
                         * @param update the update document that contains the updated object or $ operators to manipulate the existing. Must
                         *           not be {#literal null}.
                         * @param entityClass class of the pojo to be operated on. Must not be {#literal null}.
                         * @param collectionName name of the collection to update the object in. Must not be {#literal null}.
                         * @return the {#link UpdateResult} which lets you access the results of the previous write.
                         */
                        // @ts-ignore
                        updateFirst(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): object
                        /**
                         * Updates all objects that are found in the collection for the entity class that matches the query document criteria
                         * with the provided updated document.
                         * @param query the query document that specifies the criteria used to select a record to be updated. Must not be
                         *           {#literal null}.
                         * @param update the update document that contains the updated object or $ operators to manipulate the existing. Must
                         *           not be {#literal null}.
                         * @param entityClass class of the pojo to be operated on. Must not be {#literal null}.
                         * @return the {#link UpdateResult} which lets you access the results of the previous write.
                         */
                        // @ts-ignore
                        updateMulti(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>): object
                        /**
                         * Updates all objects that are found in the specified collection that matches the query document criteria with the
                         * provided updated document. <br />
                         * <strong>NOTE:</strong> Any additional support for field mapping, versions, etc. is not available due to the lack of
                         * domain type information. Use {@link #updateMulti(Query, Update, Class, String)} to get full type specific support.
                         * @param query the query document that specifies the criteria used to select a record to be updated. Must not be
                         *           {#literal null}.
                         * @param update the update document that contains the updated object or $ operators to manipulate the existing. Must
                         *           not be {#literal null}.
                         * @param collectionName name of the collection to update the object in. Must not be {#literal null}.
                         * @return the {#link UpdateResult} which lets you access the results of the previous write.
                         */
                        // @ts-ignore
                        updateMulti(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, collectionName: java.lang.String | string): object
                        /**
                         * Updates all objects that are found in the collection for the entity class that matches the query document criteria
                         * with the provided updated document.
                         * @param query the query document that specifies the criteria used to select a record to be updated. Must not be
                         *           {#literal null}.
                         * @param update the update document that contains the updated object or $ operators to manipulate the existing. Must
                         *           not be {#literal null}.
                         * @param entityClass class of the pojo to be operated on. Must not be {#literal null}.
                         * @param collectionName name of the collection to update the object in. Must not be {#literal null}.
                         * @return the {#link UpdateResult} which lets you access the results of the previous write.
                         */
                        // @ts-ignore
                        updateMulti(query: org.springframework.data.mongodb.core.query.Query, update: org.springframework.data.mongodb.core.query.Update, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): object
                        /**
                         * Remove the given object from the collection by id.
                         * @param object must not be {#literal null}.
                         * @return the {#link DeleteResult} which lets you access the results of the previous delete.
                         */
                        // @ts-ignore
                        remove(object: java.lang.Object | any): object
                        /**
                         * Removes the given object from the given collection.
                         * @param object must not be {#literal null}.
                         * @param collectionName name of the collection where the objects will removed, must not be {#literal null} or empty.
                         * @return the {#link DeleteResult} which lets you access the results of the previous delete.
                         */
                        // @ts-ignore
                        remove(object: java.lang.Object | any, collectionName: java.lang.String | string): object
                        /**
                         * Remove the given object from the collection by id.
                         * @param objectToRemove must not be {#literal null}.
                         * @return the {#link DeleteResult} which lets you access the results of the previous delete.
                         */
                        // @ts-ignore
                        remove(objectToRemove: object): object
                        /**
                         * Removes the given object from the given collection.
                         * @param objectToRemove must not be {#literal null}.
                         * @param collectionName name of the collection where the objects will removed, must not be {#literal null} or empty.
                         * @return the {#link DeleteResult} which lets you access the results of the previous delete.
                         */
                        // @ts-ignore
                        remove(objectToRemove: object, collectionName: java.lang.String | string): object
                        /**
                         * Remove all documents that match the provided query document criteria from the the collection used to store the
                         * entityClass. The Class parameter is also used to help convert the Id of the object if it is present in the query.
                         * @param query the query document that specifies the criteria used to remove a record.
                         * @param entityClass class that determines the collection to use.
                         * @return the {#link DeleteResult} which lets you access the results of the previous delete.
                         */
                        // @ts-ignore
                        remove(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>): object
                        /**
                         * Remove all documents that match the provided query document criteria from the the collection used to store the
                         * entityClass. The Class parameter is also used to help convert the Id of the object if it is present in the query.
                         * @param query the query document that specifies the criteria used to remove a record.
                         * @param entityClass class of the pojo to be operated on. Can be {#literal null}.
                         * @param collectionName name of the collection where the objects will removed, must not be {#literal null} or empty.
                         * @return the {#link DeleteResult} which lets you access the results of the previous delete.
                         */
                        // @ts-ignore
                        remove(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<any>, collectionName: java.lang.String | string): object
                        /**
                         * Remove all documents from the specified collection that match the provided query document criteria. There is no
                         * conversion/mapping done for any criteria using the id field. <br />
                         * <strong>NOTE:</strong> Any additional support for field mapping is not available due to the lack of domain type
                         * information. Use {@link #remove(Query, Class, String)} to get full type specific support.
                         * @param query the query document that specifies the criteria used to remove a record.
                         * @param collectionName name of the collection where the objects will removed, must not be {#literal null} or empty.
                         * @return the {#link DeleteResult} which lets you access the results of the previous delete.
                         */
                        // @ts-ignore
                        remove(query: org.springframework.data.mongodb.core.query.Query, collectionName: java.lang.String | string): object
                        /**
                         * Returns and removes all documents form the specified collection that match the provided query. <br />
                         * <strong>NOTE:</strong> Any additional support for field mapping is not available due to the lack of domain type
                         * information. Use {@link #findAllAndRemove(Query, Class, String)} to get full type specific support.
                         * @param query the query document that specifies the criteria used to find and remove documents.
                         * @param collectionName name of the collection where the objects will removed, must not be {#literal null} or empty.
                         * @return the {#link Flux} converted objects deleted by this operation.
                         */
                        // @ts-ignore
                        findAllAndRemove<T>(query: org.springframework.data.mongodb.core.query.Query, collectionName: java.lang.String | string): object
                        /**
                         * Returns and removes all documents matching the given query form the collection used to store the entityClass.
                         * @param query the query document that specifies the criteria used to find and remove documents.
                         * @param entityClass class of the pojo to be operated on.
                         * @return the {#link Flux} converted objects deleted by this operation.
                         */
                        // @ts-ignore
                        findAllAndRemove<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): object
                        /**
                         * Returns and removes all documents that match the provided query document criteria from the the collection used to
                         * store the entityClass. The Class parameter is also used to help convert the Id of the object if it is present in
                         * the query.
                         * @param query the query document that specifies the criteria used to find and remove documents.
                         * @param entityClass class of the pojo to be operated on.
                         * @param collectionName name of the collection where the objects will removed, must not be {#literal null} or empty.
                         * @return the {#link Flux} converted objects deleted by this operation.
                         */
                        // @ts-ignore
                        findAllAndRemove<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        /**
                         * Map the results of an ad-hoc query on the collection for the entity class to a stream of objects of the specified
                         * type. The stream uses a {@link com.mongodb.CursorType#TailableAwait tailable} cursor that may be an infinite
                         * stream. The stream will not be completed unless the {@link org.reactivestreams.Subscription} is
                         * {@link Subscription#cancel() canceled}.
                         * <p/>
                         * The object is converted from the MongoDB native representation using an instance of {@see MongoConverter}. Unless
                         * configured otherwise, an instance of {@link MappingMongoConverter} will be used.
                         * <p/>
                         * The query is specified as a {@link Query} which can be created either using the {@link BasicQuery} or the more
                         * feature rich {@link Query}.
                         * @param query the query class that specifies the criteria used to find a record and also an optional fields
                         *           specification.
                         * @param entityClass the parametrized type of the returned {#link Flux}.
                         * @return the {#link Flux} of converted objects.
                         */
                        // @ts-ignore
                        tail<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>): object
                        /**
                         * Map the results of an ad-hoc query on the collection for the entity class to a stream of objects of the specified
                         * type. The stream uses a {@link com.mongodb.CursorType#TailableAwait tailable} cursor that may be an infinite
                         * stream. The stream will not be completed unless the {@link org.reactivestreams.Subscription} is
                         * {@link Subscription#cancel() canceled}.
                         * <p/>
                         * The object is converted from the MongoDB native representation using an instance of {@see MongoConverter}. Unless
                         * configured otherwise, an instance of {@link MappingMongoConverter} will be used.
                         * <p/>
                         * The query is specified as a {@link Query} which can be created either using the {@link BasicQuery} or the more
                         * feature rich {@link Query}.
                         * @param query the query class that specifies the criteria used to find a record and also an optional fields
                         *           specification.
                         * @param entityClass the parametrized type of the returned {#link Flux}.
                         * @param collectionName name of the collection to retrieve the objects from.
                         * @return the {#link Flux} of converted objects.
                         */
                        // @ts-ignore
                        tail<T>(query: org.springframework.data.mongodb.core.query.Query, entityClass: java.lang.Class<T>, collectionName: java.lang.String | string): object
                        /**
                         * Subscribe to a MongoDB <a href="https://docs.mongodb.com/manual/changeStreams/">Change Stream</a> for all events in
                         * the configured default database via the reactive infrastructure. Use the optional provided {@link Aggregation} to
                         * filter events. The stream will not be completed unless the {@link org.reactivestreams.Subscription} is
                         * {@link Subscription#cancel() canceled}.
                         * <p />
                         * The {@link ChangeStreamEvent#getBody()} is mapped to the {@literal resultType} while the
                         * {@link ChangeStreamEvent#getRaw()} contains the unmodified payload.
                         * <p />
                         * Use {@link ChangeStreamOptions} to set arguments like {@link ChangeStreamOptions#getResumeToken() the resumseToken}
                         * for resuming change streams.
                         * @param options must not be {#literal null}. Use {@link ChangeStreamOptions#empty()}.
                         * @param targetType the result type to use.
                         * @param <T>
                         * @return the {#link Flux} emitting {@link ChangeStreamEvent events} as they arrive.
                         * @since 2.1
                         * @see ReactiveMongoDatabaseFactory#getMongoDatabase()
                         * @see ChangeStreamOptions#getFilter()
                         */
                        // @ts-ignore
                        changeStream<T>(options: org.springframework.data.mongodb.core.ChangeStreamOptions, targetType: java.lang.Class<T>): object
                        /**
                         * Subscribe to a MongoDB <a href="https://docs.mongodb.com/manual/changeStreams/">Change Stream</a> for all events in
                         * the given collection via the reactive infrastructure. Use the optional provided {@link Aggregation} to filter
                         * events. The stream will not be completed unless the {@link org.reactivestreams.Subscription} is
                         * {@link Subscription#cancel() canceled}.
                         * <p />
                         * The {@link ChangeStreamEvent#getBody()} is mapped to the {@literal resultType} while the
                         * {@link ChangeStreamEvent#getRaw()} contains the unmodified payload.
                         * <p />
                         * Use {@link ChangeStreamOptions} to set arguments like {@link ChangeStreamOptions#getResumeToken() the resumseToken}
                         * for resuming change streams.
                         * @param collectionName the collection to watch. Can be {#literal null} to watch all collections.
                         * @param options must not be {#literal null}. Use {@link ChangeStreamOptions#empty()}.
                         * @param targetType the result type to use.
                         * @param <T>
                         * @return the {#link Flux} emitting {@link ChangeStreamEvent events} as they arrive.
                         * @since 2.1
                         * @see ChangeStreamOptions#getFilter()
                         */
                        // @ts-ignore
                        changeStream<T>(collectionName: java.lang.String | string, options: org.springframework.data.mongodb.core.ChangeStreamOptions, targetType: java.lang.Class<T>): object
                        /**
                         * Subscribe to a MongoDB <a href="https://docs.mongodb.com/manual/changeStreams/">Change Stream</a> via the reactive
                         * infrastructure. Use the optional provided {@link Aggregation} to filter events. The stream will not be completed
                         * unless the {@link org.reactivestreams.Subscription} is {@link Subscription#cancel() canceled}.
                         * <p />
                         * The {@link ChangeStreamEvent#getBody()} is mapped to the {@literal resultType} while the
                         * {@link ChangeStreamEvent#getRaw()} contains the unmodified payload.
                         * <p />
                         * Use {@link ChangeStreamOptions} to set arguments like {@link ChangeStreamOptions#getResumeToken() the resumseToken}
                         * for resuming change streams.
                         * @param database the database to watch. Can be {#literal null}, uses configured default if so.
                         * @param collectionName the collection to watch. Can be {#literal null}, watches all collections if so.
                         * @param options must not be {#literal null}. Use {@link ChangeStreamOptions#empty()}.
                         * @param targetType the result type to use.
                         * @param <T>
                         * @return the {#link Flux} emitting {@link ChangeStreamEvent events} as they arrive.
                         * @since 2.1
                         * @see ChangeStreamOptions#getFilter()
                         */
                        // @ts-ignore
                        changeStream<T>(database: java.lang.String | string, collectionName: java.lang.String | string, options: org.springframework.data.mongodb.core.ChangeStreamOptions, targetType: java.lang.Class<T>): object
                        /**
                         * Execute a map-reduce operation. Use {@link MapReduceOptions} to optionally specify an output collection and other
                         * args.
                         * @param filterQuery the selection criteria for the documents going input to the map function. Must not be
                         *           {#literal null}.
                         * @param domainType source type used to determine the input collection name and map the filter {#link Query} against.
                         *           Must not be {@literal null}.
                         * @param resultType the mapping target of the operations result documents. Must not be {#literal null}.
                         * @param mapFunction the JavaScript map function. Must not be {#literal null}.
                         * @param reduceFunction the JavaScript reduce function. Must not be {#literal null}.
                         * @param options additional options like output collection. Must not be {#literal null}.
                         * @return a {#link Flux} emitting the result document sequence. Never {@literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        mapReduce<T>(filterQuery: org.springframework.data.mongodb.core.query.Query, domainType: java.lang.Class<any>, resultType: java.lang.Class<T>, mapFunction: java.lang.String | string, reduceFunction: java.lang.String | string, options: org.springframework.data.mongodb.core.mapreduce.MapReduceOptions): object
                        /**
                         * Execute a map-reduce operation. Use {@link MapReduceOptions} to optionally specify an output collection and other
                         * args.
                         * @param filterQuery the selection criteria for the documents going input to the map function. Must not be
                         *           {#literal null}.
                         * @param domainType source type used to map the filter {#link Query} against. Must not be {@literal null}.
                         * @param inputCollectionName the input collection.
                         * @param resultType the mapping target of the operations result documents. Must not be {#literal null}.
                         * @param mapFunction the JavaScript map function. Must not be {#literal null}.
                         * @param reduceFunction the JavaScript reduce function. Must not be {#literal null}.
                         * @param options additional options like output collection. Must not be {#literal null}.
                         * @return a {#link Flux} emitting the result document sequence. Never {@literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        mapReduce<T>(filterQuery: org.springframework.data.mongodb.core.query.Query, domainType: java.lang.Class<any>, inputCollectionName: java.lang.String | string, resultType: java.lang.Class<T>, mapFunction: java.lang.String | string, reduceFunction: java.lang.String | string, options: org.springframework.data.mongodb.core.mapreduce.MapReduceOptions): object
                        /**
                         * Returns the underlying {@link MongoConverter}.
                         * @return 
                         */
                        // @ts-ignore
                        getConverter(): org.springframework.data.mongodb.core.convert.MongoConverter
                        /**
                         * The collection name used for the specified class by this template.
                         * @param entityClass must not be {#literal null}.
                         * @return 
                         * @since 2.1
                         */
                        // @ts-ignore
                        getCollectionName(entityClass: java.lang.Class<any>): string
                    }
                }
            }
        }
    }
}
