declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Value object to capture the fields exposed by an {@link AggregationOperation}.
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         * @author Mark Paluch
                         * @since 1.3
                         */
                        // @ts-ignore
                        class ExposedFields extends java.lang.Object implements java.lang.Iterable<org.springframework.data.mongodb.core.aggregation.ExposedFields.ExposedField> {
                            /**
                             * Returns an empty {@link ExposedFields} instance.
                             * @return 
                             * @since 2.0
                             */
                            // @ts-ignore
                            public static empty(): org.springframework.data.mongodb.core.aggregation.ExposedFields
                            /**
                             * Creates a new {@link ExposedFields} instance from the given {@link ExposedField}s.
                             * @param fields must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static from(...fields: org.springframework.data.mongodb.core.aggregation.ExposedFields.ExposedField[]): org.springframework.data.mongodb.core.aggregation.ExposedFields
                            /**
                             * Creates synthetic {@link ExposedFields} from the given {@link Fields}.
                             * @param fields must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static synthetic(fields: org.springframework.data.mongodb.core.aggregation.Fields): org.springframework.data.mongodb.core.aggregation.ExposedFields
                            /**
                             * Creates non-synthetic {@link ExposedFields} from the given {@link Fields}.
                             * @param fields must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static nonSynthetic(fields: org.springframework.data.mongodb.core.aggregation.Fields): org.springframework.data.mongodb.core.aggregation.ExposedFields
                            /**
                             * Creates a new {@link ExposedFields} adding the given {@link ExposedField}.
                             * @param field must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public and(field: org.springframework.data.mongodb.core.aggregation.ExposedFields.ExposedField): org.springframework.data.mongodb.core.aggregation.ExposedFields
                            /**
                             * Returns the field with the given name or {@literal null} if no field with the given name is available.
                             * @param name
                             * @return 
                             */
                            // @ts-ignore
                            public getField(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.ExposedFields.ExposedField
                            // @ts-ignore
                            public iterator(): java.util.Iterator<org.springframework.data.mongodb.core.aggregation.ExposedFields.ExposedField>
                        }
                    }
                }
            }
        }
    }
}
