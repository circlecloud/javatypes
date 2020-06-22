declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace FieldsExposingAggregationOperation {
                            /**
                             * Marker interface for {@link AggregationOperation} that inherits fields from previous operations.
                             */
                            // @ts-ignore
                            interface InheritsFieldsAggregationOperation extends org.springframework.data.mongodb.core.aggregation.FieldsExposingAggregationOperation {
                                // @ts-ignore
                                inheritsFields(): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
