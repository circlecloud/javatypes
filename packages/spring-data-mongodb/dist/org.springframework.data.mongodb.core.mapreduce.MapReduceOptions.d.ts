declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapreduce {
                        /**
                         * @author Mark Pollack
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class MapReduceOptions extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Static factory method to create a MapReduceOptions instance
                             * @return a new instance
                             */
                            // @ts-ignore
                            public static options(): org.springframework.data.mongodb.core.mapreduce.MapReduceOptions
                            /**
                             * Limit the number of objects to return from the collection that is fed into the map reduce operation Often used in
                             * conjunction with a query and sort option so as to reduce the portion of the data that will be processed.
                             * @param limit Limit the number of objects to process
                             * @return MapReduceOptions so that methods can be chained in a fluent API style
                             */
                            // @ts-ignore
                            public limit(limit: number /*int*/): org.springframework.data.mongodb.core.mapreduce.MapReduceOptions
                            /**
                             * The collection where the results from the map-reduce operation will be stored. Note, you can set the database name
                             * as well with the outputDatabase option.
                             * @param collectionName The name of the collection where the results of the map-reduce operation will be stored.
                             * @return MapReduceOptions so that methods can be chained in a fluent API style
                             */
                            // @ts-ignore
                            public outputCollection(collectionName: java.lang.String | string): org.springframework.data.mongodb.core.mapreduce.MapReduceOptions
                            /**
                             * The database where the results from the map-reduce operation will be stored. Note, you ca set the collection name
                             * as well with the outputCollection option.
                             * @param outputDatabase The name of the database where the results of the map-reduce operation will be stored.
                             * @return MapReduceOptions so that methods can be chained in a fluent API style
                             */
                            // @ts-ignore
                            public outputDatabase(outputDatabase: java.lang.String | string): org.springframework.data.mongodb.core.mapreduce.MapReduceOptions
                            /**
                             * With this option, no collection will be created, and the whole map-reduce operation will happen in RAM. Also, the
                             * results of the map-reduce will be returned within the result object. Note that this option is possible only when
                             * the result set fits within the 16MB limit of a single document.
                             * @return MapReduceOptions so that methods can be chained in a fluent API style
                             */
                            // @ts-ignore
                            public outputTypeInline(): org.springframework.data.mongodb.core.mapreduce.MapReduceOptions
                            /**
                             * This option will merge new data into the old output collection. In other words, if the same key exists in both the
                             * result set and the old collection, the new key will overwrite the old one.
                             * @return MapReduceOptions so that methods can be chained in a fluent API style
                             */
                            // @ts-ignore
                            public outputTypeMerge(): org.springframework.data.mongodb.core.mapreduce.MapReduceOptions
                            /**
                             * If documents exists for a given key in the result set and in the old collection, then a reduce operation (using the
                             * specified reduce function) will be performed on the two values and the result will be written to the output
                             * collection. If a finalize function was provided, this will be run after the reduce as well.
                             * @return 
                             */
                            // @ts-ignore
                            public outputTypeReduce(): org.springframework.data.mongodb.core.mapreduce.MapReduceOptions
                            /**
                             * The output will be inserted into a collection which will atomically replace any existing collection with the same
                             * name. Note, the default is MapReduceCommand.OutputType.REPLACE
                             * @return MapReduceOptions so that methods can be chained in a fluent API style
                             */
                            // @ts-ignore
                            public outputTypeReplace(): org.springframework.data.mongodb.core.mapreduce.MapReduceOptions
                            /**
                             * If true and combined with an output mode that writes to a collection, the output collection will be sharded using
                             * the _id field. For MongoDB 1.9+
                             * @param outputShared if true, output will be sharded based on _id key.
                             * @return MapReduceOptions so that methods can be chained in a fluent API style
                             */
                            // @ts-ignore
                            public outputSharded(outputShared: boolean): org.springframework.data.mongodb.core.mapreduce.MapReduceOptions
                            /**
                             * Sets the finalize function
                             * @param finalizeFunction The finalize function. Can be a JSON string or a Spring Resource URL
                             * @return MapReduceOptions so that methods can be chained in a fluent API style
                             */
                            // @ts-ignore
                            public finalizeFunction(finalizeFunction: java.lang.String | string): org.springframework.data.mongodb.core.mapreduce.MapReduceOptions
                            /**
                             * Key-value pairs that are placed into JavaScript global scope and can be accessed from map, reduce, and finalize
                             * scripts.
                             * @param scopeVariables variables that can be accessed from map, reduce, and finalize scripts
                             * @return MapReduceOptions so that methods can be chained in a fluent API style
                             */
                            // @ts-ignore
                            public scopeVariables(scopeVariables: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.springframework.data.mongodb.core.mapreduce.MapReduceOptions
                            /**
                             * Flag that toggles behavior in the map-reduce operation so as to avoid intermediate conversion to BSON between the
                             * map and reduce steps. For MongoDB 1.9+
                             * @param javaScriptMode if true, have the execution of map-reduce stay in JavaScript
                             * @return MapReduceOptions so that methods can be chained in a fluent API style
                             */
                            // @ts-ignore
                            public javaScriptMode(javaScriptMode: boolean): org.springframework.data.mongodb.core.mapreduce.MapReduceOptions
                            /**
                             * Flag to set that will provide statistics on job execution time.
                             * @return MapReduceOptions so that methods can be chained in a fluent API style
                             */
                            // @ts-ignore
                            public verbose(verbose: boolean): org.springframework.data.mongodb.core.mapreduce.MapReduceOptions
                            /**
                             * Add additional extra options that may not have a method on this class. This method will help if you use a version
                             * of this client library with a server version that has added additional map-reduce options that do not yet have an
                             * method for use in setting them. options
                             * @param key The key option
                             * @param value The value of the option
                             * @return MapReduceOptions so that methods can be chained in a fluent API style
                             * @deprecated since 1.7.
                             */
                            // @ts-ignore
                            public extraOption(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.data.mongodb.core.mapreduce.MapReduceOptions
                            /**
                             * Define the Collation specifying language-specific rules for string comparison.
                             * @param collation can be {#literal null}.
                             * @return 
                             * @since 2.0
                             */
                            // @ts-ignore
                            public collation(collation: org.springframework.data.mongodb.core.query.Collation): org.springframework.data.mongodb.core.mapreduce.MapReduceOptions
                            /**
                             * @return 
                             * @deprecated since 1.7
                             */
                            // @ts-ignore
                            public getExtraOptions(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                            // @ts-ignore
                            public getFinalizeFunction(): java.util.Optional<java.lang.String | string>
                            // @ts-ignore
                            public getJavaScriptMode(): java.lang.Boolean
                            // @ts-ignore
                            public getOutputCollection(): string
                            // @ts-ignore
                            public getOutputDatabase(): java.util.Optional<java.lang.String | string>
                            // @ts-ignore
                            public getOutputSharded(): java.util.Optional<java.lang.Boolean>
                            // @ts-ignore
                            public getOutputType(): MapReduceCommand.OutputType
                            // @ts-ignore
                            public getScopeVariables(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                            /**
                             * Get the maximum number of documents for the input into the map function.
                             * @return {#literal null} if not set.
                             */
                            // @ts-ignore
                            public getLimit(): number
                            /**
                             * Get the Collation specifying language-specific rules for string comparison.
                             * @return 
                             * @since 2.0
                             */
                            // @ts-ignore
                            public getCollation(): java.util.Optional<org.springframework.data.mongodb.core.query.Collation>
                            /**
                             * Return the {@link MapReduceAction} derived from {@link com.mongodb.MapReduceCommand.OutputType}.
                             * @return the mapped action or {#literal null} if the action maps to inline output.
                             * @since 2.0.10
                             */
                            // @ts-ignore
                            public getMapReduceAction(): MapReduceAction
                            /**
                             * @return {#literal true} if {@link OutputType#INLINE} is used.
                             * @since 2.0.10
                             */
                            // @ts-ignore
                            public usesInlineOutput(): boolean
                            // @ts-ignore
                            public getOptionsObject(): Document
                            // @ts-ignore
                            createOutObject(): Document
                        }
                    }
                }
            }
        }
    }
}
