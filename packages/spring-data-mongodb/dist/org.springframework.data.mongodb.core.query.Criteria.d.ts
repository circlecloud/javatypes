declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * Central class for creating queries. It follows a fluent API style so that you can easily chain together multiple
                         * criteria. Static import of the 'Criteria.where' method will improve readability.
                         * @author Thomas Risberg
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @author Andreas Zink
                         */
                        // @ts-ignore
                        class Criteria extends java.lang.Object implements org.springframework.data.mongodb.core.query.CriteriaDefinition {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            constructor(key: java.lang.String | string)
                            // @ts-ignore
                            constructor(criteriaChain: java.util.List<org.springframework.data.mongodb.core.query.Criteria> | Array<org.springframework.data.mongodb.core.query.Criteria>, key: java.lang.String | string)
                            /**
                             * Static factory method to create a Criteria using the provided key
                             * @param key
                             * @return 
                             */
                            // @ts-ignore
                            public static where(key: java.lang.String | string): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Static factory method to create a {@link Criteria} matching an example object.
                             * @param example must not be {#literal null}.
                             * @return 
                             * @see Criteria#alike(Example)
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static byExample(example: java.lang.Object | any): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Static factory method to create a {@link Criteria} matching an example object.
                             * @param example must not be {#literal null}.
                             * @return 
                             * @see Criteria#alike(Example)
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static byExample(example: object): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Static factory method to create a {@link Criteria} matching documents against a given structure defined by the
                             * {@link MongoJsonSchema} using ({@code $jsonSchema}) operator.
                             * @param schema must not be {#literal null}.
                             * @return this
                             * @since 2.1
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/jsonSchema/">MongoDB Query operator:
                             *       $jsonSchema</a>
                             */
                            // @ts-ignore
                            public static matchingDocumentStructure(schema: org.springframework.data.mongodb.core.schema.MongoJsonSchema): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Static factory method to create a Criteria using the provided key
                             * @return 
                             */
                            // @ts-ignore
                            public and(key: java.lang.String | string): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using equality
                             * @param o
                             * @return 
                             */
                            // @ts-ignore
                            public is(o: java.lang.Object | any): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $ne} operator.
                             * @param o
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/ne/">MongoDB Query operator: $ne</a>
                             */
                            // @ts-ignore
                            public ne(o: java.lang.Object | any): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $lt} operator.
                             * @param o
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/lt/">MongoDB Query operator: $lt</a>
                             */
                            // @ts-ignore
                            public lt(o: java.lang.Object | any): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $lte} operator.
                             * @param o
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/lte/">MongoDB Query operator: $lte</a>
                             */
                            // @ts-ignore
                            public lte(o: java.lang.Object | any): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $gt} operator.
                             * @param o
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/gt/">MongoDB Query operator: $gt</a>
                             */
                            // @ts-ignore
                            public gt(o: java.lang.Object | any): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $gte} operator.
                             * @param o
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/gte/">MongoDB Query operator: $gte</a>
                             */
                            // @ts-ignore
                            public gte(o: java.lang.Object | any): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $in} operator.
                             * @param o the values to match against
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/in/">MongoDB Query operator: $in</a>
                             */
                            // @ts-ignore
                            public in(...o: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $in} operator.
                             * @param c the collection containing the values to match against
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/in/">MongoDB Query operator: $in</a>
                             */
                            // @ts-ignore
                            public in(c: java.util.Collection<any> | Array<any>): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $nin} operator.
                             * @param o
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/nin/">MongoDB Query operator: $nin</a>
                             */
                            // @ts-ignore
                            public nin(...o: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $nin} operator.
                             * @param o
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/nin/">MongoDB Query operator: $nin</a>
                             */
                            // @ts-ignore
                            public nin(o: java.util.Collection<any> | Array<any>): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $mod} operator.
                             * @param value
                             * @param remainder
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/mod/">MongoDB Query operator: $mod</a>
                             */
                            // @ts-ignore
                            public mod(value: java.lang.Number, remainder: java.lang.Number): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $all} operator.
                             * @param o
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/all/">MongoDB Query operator: $all</a>
                             */
                            // @ts-ignore
                            public all(...o: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $all} operator.
                             * @param o
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/all/">MongoDB Query operator: $all</a>
                             */
                            // @ts-ignore
                            public all(o: java.util.Collection<any> | Array<any>): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $size} operator.
                             * @param s
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/size/">MongoDB Query operator: $size</a>
                             */
                            // @ts-ignore
                            public size(s: number /*int*/): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $exists} operator.
                             * @param b
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/exists/">MongoDB Query operator: $exists</a>
                             */
                            // @ts-ignore
                            public exists(b: boolean): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $type} operator.
                             * @param t
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/type/">MongoDB Query operator: $type</a>
                             */
                            // @ts-ignore
                            public type(t: number /*int*/): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $type} operator.
                             * @param types must not be {#literal null}.
                             * @return this
                             * @since 2.1
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/type/">MongoDB Query operator: $type</a>
                             */
                            // @ts-ignore
                            public type(...types: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type[]): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $not} meta operator which affects the clause directly following
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/not/">MongoDB Query operator: $not</a>
                             */
                            // @ts-ignore
                            public not(): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using a {@literal $regex} operator.
                             * @param re
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/regex/">MongoDB Query operator: $regex</a>
                             */
                            // @ts-ignore
                            public regex(re: java.lang.String | string): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using a {@literal $regex} and {@literal $options} operator.
                             * @param re
                             * @param options
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/regex/">MongoDB Query operator: $regex</a>
                             */
                            // @ts-ignore
                            public regex(re: java.lang.String | string, options: java.lang.String | string): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Syntactical sugar for {@link #is(Object)} making obvious that we create a regex predicate.
                             * @param pattern
                             * @return 
                             */
                            // @ts-ignore
                            public regex(pattern: java.util.regex.Pattern): org.springframework.data.mongodb.core.query.Criteria
                            // @ts-ignore
                            public regex(regex: BsonRegularExpression): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a geospatial criterion using a {@literal $geoWithin $centerSphere} operation. This is only available for
                             * Mongo 2.4 and higher.
                             * @param circle must not be {#literal null}
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/geoWithin/">MongoDB Query operator:
                             *       $geoWithin</a>
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/centerSphere/">MongoDB Query operator:
                             *       $centerSphere</a>
                             */
                            // @ts-ignore
                            public withinSphere(circle: Circle): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a geospatial criterion using a {@literal $geoWithin} operation.
                             * @param shape
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/geoWithin/">MongoDB Query operator:
                             *       $geoWithin</a>
                             */
                            // @ts-ignore
                            public within(shape: Shape): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a geospatial criterion using a {@literal $near} operation.
                             * @param point must not be {#literal null}
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/near/">MongoDB Query operator: $near</a>
                             */
                            // @ts-ignore
                            public near(point: Point): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a geospatial criterion using a {@literal $nearSphere} operation. This is only available for Mongo 1.7 and
                             * higher.
                             * @param point must not be {#literal null}
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/nearSphere/">MongoDB Query operator:
                             *       $nearSphere</a>
                             */
                            // @ts-ignore
                            public nearSphere(point: Point): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates criterion using {@code $geoIntersects} operator which matches intersections of the given {@code geoJson}
                             * structure and the documents one. Requires MongoDB 2.4 or better.
                             * @param geoJson must not be {#literal null}.
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public intersects(geoJson: org.springframework.data.mongodb.core.geo.GeoJson<any>): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a geo-spatial criterion using a {@literal $maxDistance} operation, for use with $near
                             * @param maxDistance
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/maxDistance/">MongoDB Query operator:
                             *       $maxDistance</a>
                             */
                            // @ts-ignore
                            public maxDistance(maxDistance: number /*double*/): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a geospatial criterion using a {@literal $minDistance} operation, for use with {@literal $near} or
                             * {@literal $nearSphere}.
                             * @param minDistance
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public minDistance(minDistance: number /*double*/): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the {@literal $elemMatch} operator
                             * @param c
                             * @return 
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/elemMatch/">MongoDB Query operator:
                             *       $elemMatch</a>
                             */
                            // @ts-ignore
                            public elemMatch(c: org.springframework.data.mongodb.core.query.Criteria): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion using the given object as a pattern.
                             * @param sample
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public alike(sample: object): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a criterion ({@code $jsonSchema}) matching documents against a given structure defined by the
                             * {@link MongoJsonSchema}. <br />
                             * <strong>NOTE:</strong> {@code $jsonSchema} cannot be used on field/property level but defines the whole document
                             * structure. Please use
                             * {@link org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder#properties(JsonSchemaProperty...)}
                             * to specify nested fields or query them using the {@link #type(Type...) $type} operator.
                             * @param schema must not be {#literal null}.
                             * @return this
                             * @since 2.1
                             * @see <a href="https://docs.mongodb.com/manual/reference/operator/query/jsonSchema/">MongoDB Query operator:
                             *       $jsonSchema</a>
                             */
                            // @ts-ignore
                            public andDocumentStructureMatches(schema: org.springframework.data.mongodb.core.schema.MongoJsonSchema): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Use {@link BitwiseCriteriaOperators} as gateway to create a criterion using one of the
                             * <a href="https://docs.mongodb.com/manual/reference/operator/query-bitwise/">bitwise operators</a> like
                             * {@code $bitsAllClear}.
                             * @return new instance of {#link BitwiseCriteriaOperators}. Never {@literal null}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public bits(): org.springframework.data.mongodb.core.query.Criteria.BitwiseCriteriaOperators
                            /**
                             * Creates an 'or' criteria using the $or operator for all of the provided criteria
                             * <p>
                             * Note that mongodb doesn't support an $or operator to be wrapped in a $not operator.
                             * <p>
                             * @throws IllegalArgumentException if {#link #orOperator(Criteria...)} follows a not() call directly.
                             * @param criteria
                             */
                            // @ts-ignore
                            public orOperator(...criteria: org.springframework.data.mongodb.core.query.Criteria[]): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates a 'nor' criteria using the $nor operator for all of the provided criteria.
                             * <p>
                             * Note that mongodb doesn't support an $nor operator to be wrapped in a $not operator.
                             * <p>
                             * @throws IllegalArgumentException if {#link #norOperator(Criteria...)} follows a not() call directly.
                             * @param criteria
                             */
                            // @ts-ignore
                            public norOperator(...criteria: org.springframework.data.mongodb.core.query.Criteria[]): org.springframework.data.mongodb.core.query.Criteria
                            /**
                             * Creates an 'and' criteria using the $and operator for all of the provided criteria.
                             * <p>
                             * Note that mongodb doesn't support an $and operator to be wrapped in a $not operator.
                             * <p>
                             * @throws IllegalArgumentException if {#link #andOperator(Criteria...)} follows a not() call directly.
                             * @param criteria
                             */
                            // @ts-ignore
                            public andOperator(...criteria: org.springframework.data.mongodb.core.query.Criteria[]): org.springframework.data.mongodb.core.query.Criteria
                            // @ts-ignore
                            public getKey(): string
                            // @ts-ignore
                            public getCriteriaObject(): Document
                            // @ts-ignore
                            getSingleCriteriaObject(): Document
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
