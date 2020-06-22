declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * An {@code Aggregation} is a representation of a list of aggregation steps to be performed by the MongoDB Aggregation
                         * Framework.
                         * @author Tobias Trelle
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @author Mark Paluch
                         * @author Alessio Fachechi
                         * @author Christoph Strobl
                         * @author Nikolay Bogdanov
                         * @author Gustavo de Geus
                         * @author Jérôme Guyon
                         * @since 1.3
                         */
                        // @ts-ignore
                        class Aggregation extends java.lang.Object {
                            /**
                             * Creates a new {@link Aggregation} from the given {@link AggregationOperation}s.
                             * @param aggregationOperations must not be {#literal null} or empty.
                             */
                            // @ts-ignore
                            constructor(...aggregationOperations: org.springframework.data.mongodb.core.aggregation.AggregationOperation[])
                            /**
                             * Creates a new {@link Aggregation} from the given {@link AggregationOperation}s.
                             * @param aggregationOperations must not be {#literal null} or empty.
                             */
                            // @ts-ignore
                            constructor(aggregationOperations: java.util.List<org.springframework.data.mongodb.core.aggregation.AggregationOperation> | Array<org.springframework.data.mongodb.core.aggregation.AggregationOperation>)
                            /**
                             * Creates a new {@link Aggregation} from the given {@link AggregationOperation}s.
                             * @param aggregationOperations must not be {#literal null} or empty.
                             * @param options must not be {#literal null} or empty.
                             */
                            // @ts-ignore
                            constructor(aggregationOperations: java.util.List<org.springframework.data.mongodb.core.aggregation.AggregationOperation> | Array<org.springframework.data.mongodb.core.aggregation.AggregationOperation>, options: org.springframework.data.mongodb.core.aggregation.AggregationOptions)
                            /**
                             * References the root document, i.e. the top-level document, currently being processed in the aggregation pipeline
                             * stage.
                             */
                            // @ts-ignore
                            public static readonly ROOT: java.lang.String | string
                            /**
                             * References the start of the field path being processed in the aggregation pipeline stage. Unless documented
                             * otherwise, all stages start with CURRENT the same as ROOT.
                             */
                            // @ts-ignore
                            public static readonly CURRENT: java.lang.String | string
                            /**
                             * A variable to conditionally exclude a field. In a {@code $projection}, a field set to the variable
                             * {@literal REMOVE} is excluded from the output.
                             * <pre>
                             * <code>
                             * db.books.aggregate( [
                             * {
                             * $project: {
                             * title: 1,
                             * "author.first": 1,
                             * "author.last" : 1,
                             * "author.middle": {
                             * $cond: {
                             * if: { $eq: [ "", "$author.middle" ] },
                             * then: "$$REMOVE",
                             * else: "$author.middle"
                             * }
                             * }
                             * }
                             * } ] )
                             * </code>
                             * </pre>
                             */
                            // @ts-ignore
                            public static readonly REMOVE: java.lang.String | string
                            // @ts-ignore
                            public static readonly DEFAULT_CONTEXT: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext
                            // @ts-ignore
                            public static readonly DEFAULT_OPTIONS: org.springframework.data.mongodb.core.aggregation.AggregationOptions
                            // @ts-ignore
                            readonly operations: java.util.List<org.springframework.data.mongodb.core.aggregation.AggregationOperation> | Array<org.springframework.data.mongodb.core.aggregation.AggregationOperation>
                            /**
                             * Creates a new {@link Aggregation} from the given {@link AggregationOperation}s.
                             * @param operations must not be {#literal null} or empty.
                             */
                            // @ts-ignore
                            public static newAggregation(operations: java.util.List<any> | Array<any>): org.springframework.data.mongodb.core.aggregation.Aggregation
                            /**
                             * Creates a new {@link Aggregation} from the given {@link AggregationOperation}s.
                             * @param operations must not be {#literal null} or empty.
                             */
                            // @ts-ignore
                            public static newAggregation(...operations: org.springframework.data.mongodb.core.aggregation.AggregationOperation[]): org.springframework.data.mongodb.core.aggregation.Aggregation
                            /**
                             * Returns a copy of this {@link Aggregation} with the given {@link AggregationOptions} set. Note that options are
                             * supported in MongoDB version 2.6+.
                             * @param options must not be {#literal null}.
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            public withOptions(options: org.springframework.data.mongodb.core.aggregation.AggregationOptions): org.springframework.data.mongodb.core.aggregation.Aggregation
                            /**
                             * Creates a new {@link TypedAggregation} for the given type and {@link AggregationOperation}s.
                             * @param type must not be {#literal null}.
                             * @param operations must not be {#literal null} or empty.
                             */
                            // @ts-ignore
                            public static newAggregation<T>(type: java.lang.Class<T>, operations: java.util.List<any> | Array<any>): org.springframework.data.mongodb.core.aggregation.TypedAggregation<T>
                            /**
                             * Creates a new {@link TypedAggregation} for the given type and {@link AggregationOperation}s.
                             * @param type must not be {#literal null}.
                             * @param operations must not be {#literal null} or empty.
                             */
                            // @ts-ignore
                            public static newAggregation<T>(type: java.lang.Class<T>, ...operations: org.springframework.data.mongodb.core.aggregation.AggregationOperation[]): org.springframework.data.mongodb.core.aggregation.TypedAggregation<T>
                            /**
                             * @param aggregationOperations must not be {#literal null} or empty.
                             * @return 
                             */
                            // @ts-ignore
                            static asAggregationList(...aggregationOperations: org.springframework.data.mongodb.core.aggregation.AggregationOperation[]): Array<org.springframework.data.mongodb.core.aggregation.AggregationOperation>
                            /**
                             * Get the {@link AggregationOptions}.
                             * @return never {#literal null}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public getOptions(): org.springframework.data.mongodb.core.aggregation.AggregationOptions
                            /**
                             * A pointer to the previous {@link AggregationOperation}.
                             * @return 
                             */
                            // @ts-ignore
                            public static previousOperation(): string
                            /**
                             * Creates a new {@link ProjectionOperation} including the given fields.
                             * @param fields must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static project(...fields: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.ProjectionOperation
                            /**
                             * Creates a new {@link ProjectionOperation} including the given {@link Fields}.
                             * @param fields must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static project(fields: org.springframework.data.mongodb.core.aggregation.Fields): org.springframework.data.mongodb.core.aggregation.ProjectionOperation
                            /**
                             * Factory method to create a new {@link UnwindOperation} for the field with the given name.
                             * @param field must not be {#literal null} or empty.
                             * @return 
                             */
                            // @ts-ignore
                            public static unwind(field: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.UnwindOperation
                            /**
                             * Factory method to create a new {@link ReplaceRootOperation} for the field with the given name.
                             * @param fieldName must not be {#literal null} or empty.
                             * @return 
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static replaceRoot(fieldName: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ReplaceRootOperation
                            /**
                             * Factory method to create a new {@link ReplaceRootOperation} for the field with the given
                             * {@link AggregationExpression}.
                             * @param aggregationExpression must not be {#literal null}.
                             * @return 
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static replaceRoot(aggregationExpression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ReplaceRootOperation
                            /**
                             * Factory method to create a new {@link ReplaceRootDocumentOperationBuilder} to configure a
                             * {@link ReplaceRootOperation}.
                             * @return the {#literal ReplaceRootDocumentOperationBuilder}.
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static replaceRoot(): org.springframework.data.mongodb.core.aggregation.ReplaceRootOperation.ReplaceRootOperationBuilder
                            /**
                             * Factory method to create a new {@link UnwindOperation} for the field with the given name and
                             * {@code preserveNullAndEmptyArrays}. Note that extended unwind is supported in MongoDB version 3.2+.
                             * @param field must not be {#literal null} or empty.
                             * @param preserveNullAndEmptyArrays {#literal true} to output the document if path is {@literal null}, missing or
                             *           array is empty.
                             * @return new {#link UnwindOperation}
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static unwind(field: java.lang.String | string, preserveNullAndEmptyArrays: boolean): org.springframework.data.mongodb.core.aggregation.UnwindOperation
                            /**
                             * Factory method to create a new {@link UnwindOperation} for the field with the given name including the name of a
                             * new field to hold the array index of the element as {@code arrayIndex}. Note that extended unwind is supported in
                             * MongoDB version 3.2+.
                             * @param field must not be {#literal null} or empty.
                             * @param arrayIndex must not be {#literal null} or empty.
                             * @return new {#link UnwindOperation}
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static unwind(field: java.lang.String | string, arrayIndex: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.UnwindOperation
                            /**
                             * Factory method to create a new {@link UnwindOperation} for the field with the given nameincluding the name of a new
                             * field to hold the array index of the element as {@code arrayIndex} using {@code preserveNullAndEmptyArrays}. Note
                             * that extended unwind is supported in MongoDB version 3.2+.
                             * @param field must not be {#literal null} or empty.
                             * @param arrayIndex must not be {#literal null} or empty.
                             * @param preserveNullAndEmptyArrays {#literal true} to output the document if path is {@literal null}, missing or
                             *           array is empty.
                             * @return new {#link UnwindOperation}
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static unwind(field: java.lang.String | string, arrayIndex: java.lang.String | string, preserveNullAndEmptyArrays: boolean): org.springframework.data.mongodb.core.aggregation.UnwindOperation
                            /**
                             * Creates a new {@link GroupOperation} for the given fields.
                             * @param fields must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static group(...fields: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.GroupOperation
                            /**
                             * Creates a new {@link GroupOperation} for the given {@link Fields}.
                             * @param fields must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static group(fields: org.springframework.data.mongodb.core.aggregation.Fields): org.springframework.data.mongodb.core.aggregation.GroupOperation
                            /**
                             * Creates a new {@link GraphLookupOperation.GraphLookupOperationFromBuilder} to construct a
                             * {@link GraphLookupOperation} given {@literal fromCollection}.
                             * @param fromCollection must not be {#literal null} or empty.
                             * @return 
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static graphLookup(fromCollection: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GraphLookupOperation.StartWithBuilder
                            /**
                             * Factory method to create a new {@link SortOperation} for the given {@link Sort}.
                             * @param sort must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static sort(sort: Sort): org.springframework.data.mongodb.core.aggregation.SortOperation
                            /**
                             * Factory method to create a new {@link SortOperation} for the given sort {@link Direction} and {@code fields}.
                             * @param direction must not be {#literal null}.
                             * @param fields must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static sort(direction: Direction, ...fields: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.SortOperation
                            /**
                             * Creates a new {@link SortByCountOperation} given {@literal groupByField}.
                             * @param field must not be {#literal null} or empty.
                             * @return 
                             * @since 2.1
                             */
                            // @ts-ignore
                            public static sortByCount(field: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.SortByCountOperation
                            /**
                             * Creates a new {@link SortByCountOperation} given {@link AggregationExpression group and sort expression}.
                             * @param groupAndSortExpression must not be {#literal null}.
                             * @return 
                             * @since 2.1
                             */
                            // @ts-ignore
                            public static sortByCount(groupAndSortExpression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.SortByCountOperation
                            /**
                             * Creates a new {@link SkipOperation} skipping the given number of elements.
                             * @param elementsToSkip must not be less than zero.
                             * @return 
                             * @deprecated prepare to get this one removed in favor of {#link #skip(long)}.
                             */
                            // @ts-ignore
                            public static skip(elementsToSkip: number /*int*/): org.springframework.data.mongodb.core.aggregation.SkipOperation
                            /**
                             * Creates a new {@link SkipOperation} skipping the given number of elements.
                             * @param elementsToSkip must not be less than zero.
                             * @return 
                             */
                            // @ts-ignore
                            public static skip(elementsToSkip: number /*long*/): org.springframework.data.mongodb.core.aggregation.SkipOperation
                            /**
                             * Creates a new {@link LimitOperation} limiting the result to the given number of elements.
                             * @param maxElements must not be less than zero.
                             * @return 
                             */
                            // @ts-ignore
                            public static limit(maxElements: number /*long*/): org.springframework.data.mongodb.core.aggregation.LimitOperation
                            /**
                             * Creates a new {@link SampleOperation} to select the specified number of documents from its input randomly.
                             * @param sampleSize must not be less than zero.
                             * @return 
                             * @since 2.0
                             */
                            // @ts-ignore
                            public static sample(sampleSize: number /*long*/): org.springframework.data.mongodb.core.aggregation.SampleOperation
                            /**
                             * Creates a new {@link MatchOperation} using the given {@link Criteria}.
                             * @param criteria must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static match(criteria: org.springframework.data.mongodb.core.query.Criteria): org.springframework.data.mongodb.core.aggregation.MatchOperation
                            /**
                             * Creates a new {@link MatchOperation} using the given {@link CriteriaDefinition}.
                             * @param criteria must not be {#literal null}.
                             * @return 
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static match(criteria: org.springframework.data.mongodb.core.query.CriteriaDefinition): org.springframework.data.mongodb.core.aggregation.MatchOperation
                            /**
                             * Creates a new {@link OutOperation} using the given collection name. This operation must be the last operation in
                             * the pipeline.
                             * @param outCollectionName collection name to export aggregation results. The {#link OutOperation} creates a new
                             *           collection in the current database if one does not already exist. The collection is not visible until the
                             *           aggregation completes. If the aggregation fails, MongoDB does not create the collection. Must not be
                             *           {@literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static out(outCollectionName: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.OutOperation
                            /**
                             * Creates a new {@link BucketOperation} given {@literal groupByField}.
                             * @param groupByField must not be {#literal null} or empty.
                             * @return 
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static bucket(groupByField: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.BucketOperation
                            /**
                             * Creates a new {@link BucketOperation} given {@link AggregationExpression group-by expression}.
                             * @param groupByExpression must not be {#literal null}.
                             * @return 
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static bucket(groupByExpression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.BucketOperation
                            /**
                             * Creates a new {@link BucketAutoOperation} given {@literal groupByField}.
                             * @param groupByField must not be {#literal null} or empty.
                             * @param buckets number of buckets, must be a positive integer.
                             * @return 
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static bucketAuto(groupByField: java.lang.String | string, buckets: number /*int*/): org.springframework.data.mongodb.core.aggregation.BucketAutoOperation
                            /**
                             * Creates a new {@link BucketAutoOperation} given {@link AggregationExpression group-by expression}.
                             * @param groupByExpression must not be {#literal null}.
                             * @param buckets number of buckets, must be a positive integer.
                             * @return 
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static bucketAuto(groupByExpression: org.springframework.data.mongodb.core.aggregation.AggregationExpression, buckets: number /*int*/): org.springframework.data.mongodb.core.aggregation.BucketAutoOperation
                            /**
                             * Creates a new {@link FacetOperation}.
                             * @return 
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static facet(): org.springframework.data.mongodb.core.aggregation.FacetOperation
                            /**
                             * Creates a new {@link FacetOperationBuilder} given {@link Aggregation}.
                             * @param aggregationOperations the sub-pipeline, must not be {#literal null}.
                             * @return 
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static facet(...aggregationOperations: org.springframework.data.mongodb.core.aggregation.AggregationOperation[]): org.springframework.data.mongodb.core.aggregation.FacetOperation.FacetOperationBuilder
                            /**
                             * Creates a new {@link LookupOperation}.
                             * @param from must not be {#literal null}.
                             * @param localField must not be {#literal null}.
                             * @param foreignField must not be {#literal null}.
                             * @param as must not be {#literal null}.
                             * @return never {#literal null}.
                             * @since 1.9
                             */
                            // @ts-ignore
                            public static lookup(from: java.lang.String | string, localField: java.lang.String | string, foreignField: java.lang.String | string, as: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.LookupOperation
                            /**
                             * Creates a new {@link LookupOperation} for the given {@link Fields}.
                             * @param from must not be {#literal null}.
                             * @param localField must not be {#literal null}.
                             * @param foreignField must not be {#literal null}.
                             * @param as must not be {#literal null}.
                             * @return never {#literal null}.
                             * @since 1.9
                             */
                            // @ts-ignore
                            public static lookup(from: org.springframework.data.mongodb.core.aggregation.Field, localField: org.springframework.data.mongodb.core.aggregation.Field, foreignField: org.springframework.data.mongodb.core.aggregation.Field, as: org.springframework.data.mongodb.core.aggregation.Field): org.springframework.data.mongodb.core.aggregation.LookupOperation
                            /**
                             * Creates a new {@link CountOperationBuilder}.
                             * @return never {#literal null}.
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static count(): org.springframework.data.mongodb.core.aggregation.CountOperation.CountOperationBuilder
                            /**
                             * Creates a new {@link Fields} instance for the given field names.
                             * @param fields must not be {#literal null}.
                             * @return 
                             * @see Fields#fields(String...)
                             */
                            // @ts-ignore
                            public static fields(...fields: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.Fields
                            /**
                             * Creates a new {@link Fields} instance from the given field name and target reference.
                             * @param name must not be {#literal null} or empty.
                             * @param target must not be {#literal null} or empty.
                             * @return 
                             */
                            // @ts-ignore
                            public static bind(name: java.lang.String | string, target: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.Fields
                            /**
                             * Creates a new {@link GeoNearOperation} instance from the given {@link NearQuery} and the{@code distanceField}. The
                             * {@code distanceField} defines output field that contains the calculated distance.
                             * @param query must not be {#literal null}.
                             * @param distanceField must not be {#literal null} or empty.
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public static geoNear(query: org.springframework.data.mongodb.core.query.NearQuery, distanceField: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GeoNearOperation
                            /**
                             * Returns a new {@link AggregationOptions.Builder}.
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            public static newAggregationOptions(): org.springframework.data.mongodb.core.aggregation.AggregationOptions.Builder
                            /**
                             * Renders this {@link Aggregation} specification to an aggregation pipeline returning a {@link List} of
                             * {@link Document}.
                             * @return the aggregation pipeline representing this aggregation.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public toPipeline(rootContext: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Array<Document>
                            /**
                             * Converts this {@link Aggregation} specification to a {@link Document}.
                             * <p/>
                             * MongoDB requires as of 3.6 cursor-based aggregation. Use {@link #toPipeline(AggregationOperationContext)} to render
                             * an aggregation pipeline.
                             * @param inputCollectionName the name of the input collection.
                             * @return the {#code Document} representing this aggregation.
                             */
                            // @ts-ignore
                            public toDocument(inputCollectionName: java.lang.String | string, rootContext: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
