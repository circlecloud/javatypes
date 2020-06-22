declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Encapsulates the aggregation framework {@code $group}-operation.
                         * <p>
                         * We recommend to use the static factory method {@link Aggregation#group(Fields)} instead of creating instances of this
                         * class directly.
                         * @author Sebastian Herold
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @author Gustavo de Geus
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @author Sergey Shcherbakov
                         * @since 1.3
                         * @see <a href="https://docs.mongodb.org/manual/reference/aggregation/group/">MongoDB Aggregation Framework: $group</a>
                         */
                        // @ts-ignore
                        class GroupOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.FieldsExposingAggregationOperation {
                            /**
                             * Creates a new {@link GroupOperation} including the given {@link Fields}.
                             * @param fields must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(fields: org.springframework.data.mongodb.core.aggregation.Fields)
                            /**
                             * Creates a new {@link GroupOperation} from the given {@link GroupOperation}.
                             * @param groupOperation must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(groupOperation: org.springframework.data.mongodb.core.aggregation.GroupOperation)
                            /**
                             * Creates a new {@link GroupOperation} from the current one adding the given {@link Operation}.
                             * @param operation must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            and(operation: org.springframework.data.mongodb.core.aggregation.GroupOperation.Operation): org.springframework.data.mongodb.core.aggregation.GroupOperation
                            /**
                             * Generates an {@link GroupOperationBuilder} for a {@code $sum}-expression.
                             * <p>
                             * Count expressions are emulated via {@code $sum: 1}.
                             * <p>
                             * @return 
                             */
                            // @ts-ignore
                            public count(): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for a {@code $sum}-expression for the given field-reference.
                             * @param reference
                             * @return 
                             */
                            // @ts-ignore
                            public sum(reference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $sum}-expression for the given
                             * {@link AggregationExpression}.
                             * @param expr must not be {#literal null}.
                             * @return new instance of {#link GroupOperationBuilder}. Never {@literal null}.
                             * @throws IllegalArgumentException when {#code expr} is {@literal null}.
                             * @since 1.10.8
                             */
                            // @ts-ignore
                            public sum(expr: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $add_to_set}-expression for the given field-reference.
                             * @param reference
                             * @return 
                             */
                            // @ts-ignore
                            public addToSet(reference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $add_to_set}-expression for the given value.
                             * @param value
                             * @return 
                             */
                            // @ts-ignore
                            public addToSet(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $last}-expression for the given field-reference.
                             * @param reference
                             * @return 
                             */
                            // @ts-ignore
                            public last(reference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $last}-expression for the given
                             * {@link AggregationExpression}.
                             * @param expr
                             * @return 
                             */
                            // @ts-ignore
                            public last(expr: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for a {@code $first}-expression for the given field-reference.
                             * @param reference
                             * @return 
                             */
                            // @ts-ignore
                            public first(reference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for a {@code $first}-expression for the given
                             * {@link AggregationExpression}.
                             * @param expr
                             * @return 
                             */
                            // @ts-ignore
                            public first(expr: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $avg}-expression for the given field-reference.
                             * @param reference
                             * @return 
                             */
                            // @ts-ignore
                            public avg(reference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $avg}-expression for the given
                             * {@link AggregationExpression}.
                             * @param expr
                             * @return 
                             */
                            // @ts-ignore
                            public avg(expr: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $push}-expression for the given field-reference.
                             * @param reference
                             * @return 
                             */
                            // @ts-ignore
                            public push(reference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $push}-expression for the given value.
                             * @param value
                             * @return 
                             */
                            // @ts-ignore
                            public push(value: java.lang.Object | any): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $min}-expression that for the given field-reference.
                             * @param reference
                             * @return 
                             */
                            // @ts-ignore
                            public min(reference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $min}-expression that for the given
                             * {@link AggregationExpression}.
                             * @param expr
                             * @return 
                             */
                            // @ts-ignore
                            public min(expr: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $max}-expression that for the given field-reference.
                             * @param reference
                             * @return 
                             */
                            // @ts-ignore
                            public max(reference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $max}-expression that for the given
                             * {@link AggregationExpression}.
                             * @param expr
                             * @return 
                             */
                            // @ts-ignore
                            public max(expr: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $stdDevSamp}-expression that for the given
                             * field-reference.
                             * @param reference must not be {#literal null}.
                             * @return never {#literal null}.
                             * @since 1.10
                             */
                            // @ts-ignore
                            public stdDevSamp(reference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $stdDevSamp}-expression that for the given
                             * {@link AggregationExpression}.
                             * @param expr must not be {#literal null}.
                             * @return never {#literal null}.
                             * @since 1.10
                             */
                            // @ts-ignore
                            public stdDevSamp(expr: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $stdDevPop}-expression that for the given field-reference.
                             * @param reference must not be {#literal null}.
                             * @return never {#literal null}.
                             * @since 1.10
                             */
                            // @ts-ignore
                            public stdDevPop(reference: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            /**
                             * Generates an {@link GroupOperationBuilder} for an {@code $stdDevPop}-expression that for the given
                             * {@link AggregationExpression}.
                             * @param expr must not be {#literal null}.
                             * @return never {#literal null}.
                             * @since 1.10
                             */
                            // @ts-ignore
                            public stdDevPop(expr: org.springframework.data.mongodb.core.aggregation.AggregationExpression): org.springframework.data.mongodb.core.aggregation.GroupOperation.GroupOperationBuilder
                            // @ts-ignore
                            public getFields(): org.springframework.data.mongodb.core.aggregation.ExposedFields
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                        }
                    }
                }
            }
        }
    }
}
