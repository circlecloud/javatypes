declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the aggregation framework {@code $project}-operation.
                         * <p>
                         * Projection of field to be used in an {@link Aggregation}. A projection is similar to a {@link Field}
                         * inclusion/exclusion but more powerful. It can generate new fields, change values of given field etc.
                         * <p>
                         * We recommend to use the static factory method {@link Aggregation#project(Fields)} instead of creating instances of
                         * this class directly.
                         * @author Tobias Trelle
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.3
                         * @see <a href="https://docs.mongodb.com/manual/reference/operator/aggregation/project/">MongoDB Aggregation Framework:
                         *       $project</a>
                         */
                        // @ts-ignore
                        class ProjectionOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.FieldsExposingAggregationOperation {
                            /**
                             * Creates a new empty {@link ProjectionOperation}.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Creates a new {@link ProjectionOperation} including the given {@link Fields}.
                             * @param fields must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(fields: org.springframework.data.mongodb.core.aggregation.Fields)
                            /**
                             * Creates a new {@link ProjectionOperationBuilder} to define a projection for the field with the given name.
                             * @param name must not be {#literal null} or empty.
                             * @return 
                             */
                            // @ts-ignore
                            public and(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                            // @ts-ignore
                            public andExpression(expression: java.lang.String | string, ...params: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ExpressionProjectionOperationBuilder
                            // @ts-ignore
                            public and(expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.ProjectionOperation.ProjectionOperationBuilder
                            /**
                             * Excludes the given fields from the projection.
                             * @param fieldNames must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public andExclude(...fieldNames: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.ProjectionOperation
                            /**
                             * Includes the given fields into the projection.
                             * @param fieldNames must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public andInclude(...fieldNames: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.ProjectionOperation
                            /**
                             * Includes the given fields into the projection.
                             * @param fields must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public andInclude(fields: org.springframework.data.mongodb.core.aggregation.Fields): org.springframework.data.mongodb.core.aggregation.ProjectionOperation
                            // @ts-ignore
                            public getFields(): org.springframework.data.mongodb.core.aggregation.ExposedFields
                            // @ts-ignore
                            public inheritsFields(): boolean
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                        }
                    }
                }
            }
        }
    }
}
