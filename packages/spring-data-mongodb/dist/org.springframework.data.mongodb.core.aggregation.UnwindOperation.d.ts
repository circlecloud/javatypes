declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the aggregation framework {@code $unwind}-operation.
                         * <p>
                         * We recommend to use the static factory method {@link Aggregation#unwind(String)} instead of creating instances of
                         * this class directly.
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 1.3
                         * @see <a href="https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/">MongoDB Aggregation Framework: $unwind</a>
                         */
                        // @ts-ignore
                        class UnwindOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationOperation, org.springframework.data.mongodb.core.aggregation.FieldsExposingAggregationOperation.InheritsFieldsAggregationOperation {
                            /**
                             * Creates a new {@link UnwindOperation} for the given {@link Field}.
                             * @param field must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(field: org.springframework.data.mongodb.core.aggregation.Field)
                            /**
                             * Creates a new {@link UnwindOperation} using Mongo 3.2 syntax.
                             * @param field must not be {#literal null}.
                             * @param preserveNullAndEmptyArrays {#literal true} to output the document if path is {@literal null}, missing or
                             *           array is empty.
                             * @since 1.10
                             */
                            // @ts-ignore
                            constructor(field: org.springframework.data.mongodb.core.aggregation.Field, preserveNullAndEmptyArrays: boolean)
                            /**
                             * Creates a new {@link UnwindOperation} using Mongo 3.2 syntax.
                             * @param field must not be {#literal null}.
                             * @param arrayIndex optional field name to expose the field array index, must not be {#literal null}.
                             * @param preserveNullAndEmptyArrays {#literal true} to output the document if path is {@literal null}, missing or
                             *           array is empty.
                             * @since 1.10
                             */
                            // @ts-ignore
                            constructor(field: org.springframework.data.mongodb.core.aggregation.Field, arrayIndex: org.springframework.data.mongodb.core.aggregation.Field, preserveNullAndEmptyArrays: boolean)
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                            // @ts-ignore
                            public getFields(): org.springframework.data.mongodb.core.aggregation.ExposedFields
                            /**
                             * Get a builder that allows creation of {@link LookupOperation}.
                             * @return 
                             * @since 1.10
                             */
                            // @ts-ignore
                            public static newUnwind(): org.springframework.data.mongodb.core.aggregation.UnwindOperation.PathBuilder
                        }
                    }
                }
            }
        }
    }
}
