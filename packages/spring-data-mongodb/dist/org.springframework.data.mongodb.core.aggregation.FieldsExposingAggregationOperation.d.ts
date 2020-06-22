declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * {@link AggregationOperation} that exposes {@link ExposedFields} that can be used for later aggregation pipeline
                         * {@code AggregationOperation}s. A {@link FieldsExposingAggregationOperation} implementing the
                         * {@link InheritsFieldsAggregationOperation} will expose fields from its parent operations. Not implementing
                         * {@link InheritsFieldsAggregationOperation} will replace existing exposed fields.
                         * @author Thomas Darimont
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        interface FieldsExposingAggregationOperation extends org.springframework.data.mongodb.core.aggregation.AggregationOperation {
                            /**
                             * Returns the fields exposed by the {@link AggregationOperation}.
                             * @return will never be {#literal null}.
                             */
                            // @ts-ignore
                            getFields(): org.springframework.data.mongodb.core.aggregation.ExposedFields
                            /**
                             * @return {#literal true} to conditionally inherit fields from previous operations.
                             * @since 2.0.6
                             */
                            // @ts-ignore
                            inheritsFields(): boolean
                        }
                    }
                }
            }
        }
    }
}
