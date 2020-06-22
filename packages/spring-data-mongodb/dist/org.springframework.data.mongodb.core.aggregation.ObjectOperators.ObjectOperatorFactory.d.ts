declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace ObjectOperators {
                            /**
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class ObjectOperatorFactory extends java.lang.Object {
                                /**
                                 * Creates new {@link ObjectOperatorFactory} for given {@literal value}.
                                 * @param value must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(value: java.lang.Object | any)
                                /**
                                 * Creates new {@link MergeObjects aggregation expression} that takes the associated value and uses
                                 * {@literal $mergeObjects} as an accumulator within the {@literal $group} stage. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return new instance of {#link MergeObjects}.
                                 */
                                // @ts-ignore
                                public merge(): org.springframework.data.mongodb.core.aggregation.ObjectOperators.MergeObjects
                                /**
                                 * Creates new {@link MergeObjects aggregation expression} that takes the associated value and combines it with the
                                 * given values (documents or mapped objects) into a single document. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return new instance of {#link MergeObjects}.
                                 */
                                // @ts-ignore
                                public mergeWith(...values: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.aggregation.ObjectOperators.MergeObjects
                                /**
                                 * Creates new {@link MergeObjects aggregation expression} that takes the associated value and combines it with the
                                 * values of the given {@link Field field references} into a single document. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return new instance of {#link MergeObjects}.
                                 */
                                // @ts-ignore
                                public mergeWithValuesOf(...fieldReferences: java.lang.String[] | string[]): org.springframework.data.mongodb.core.aggregation.ObjectOperators.MergeObjects
                                /**
                                 * Creates new {@link MergeObjects aggregation expression} that takes the associated value and combines it with the
                                 * result values of the given {@link Aggregation expressions} into a single document. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                                 * @return new instance of {#link MergeObjects}.
                                 */
                                // @ts-ignore
                                public mergeWithValuesOf(...expression: org.springframework.data.mongodb.core.aggregation.AggregationExpression[]): org.springframework.data.mongodb.core.aggregation.ObjectOperators.MergeObjects
                                /**
                                 * Creates new {@link ObjectToArray aggregation expression} that takes the associated value and converts it to an
                                 * array of {@link Document documents} that contain two fields {@literal k} and {@literal v} each. <br />
                                 * <strong>NOTE:</strong> Requires MongoDB 3.6 or later.
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                public toArray(): org.springframework.data.mongodb.core.aggregation.ObjectOperators.ObjectToArray
                            }
                        }
                    }
                }
            }
        }
    }
}
