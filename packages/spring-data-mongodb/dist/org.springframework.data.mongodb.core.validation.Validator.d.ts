declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace validation {
                        /**
                         * Provides a {@code validator} object to be used for collection validation via
                         * {@link org.springframework.data.mongodb.core.CollectionOptions.ValidationOptions}.
                         * @author Andreas Zink
                         * @author Christoph Strobl
                         * @since 2.1
                         * @see <a href="https://docs.mongodb.com/manual/reference/method/db.createCollection/">MongoDB Collection Options</a>
                         */
                        // @ts-ignore
                        interface Validator {
                            /**
                             * Get the {@link Document} containing the validation specific rules. The document may contain fields that may require
                             * type and/or field name mapping.
                             * @return a MongoDB {#code validator} {@link Document}. Never {@literal null}.
                             */
                            // @ts-ignore
                            toDocument(): Document
                            /**
                             * Creates a basic {@link Validator} checking documents against a given set of rules.
                             * @param validationRules must not be {#literal null}.
                             * @return new instance of {#link Validator}.
                             * @throws IllegalArgumentException if validationRules is {#literal null}.
                             */
                            // @ts-ignore
                            document(validationRules: Document): org.springframework.data.mongodb.core.validation.Validator
                            /**
                             * Creates a new {@link Validator} checking documents against the structure defined in {@link MongoJsonSchema}.
                             * @param schema must not be {#literal null}.
                             * @return new instance of {#link Validator}.
                             * @throws IllegalArgumentException if schema is {#literal null}.
                             */
                            // @ts-ignore
                            schema(schema: org.springframework.data.mongodb.core.schema.MongoJsonSchema): org.springframework.data.mongodb.core.validation.Validator
                            /**
                             * Creates a new {@link Validator} checking documents against a given query structure expressed by
                             * {@link CriteriaDefinition}. <br />
                             * @param criteria must not be {#literal null}.
                             * @return new instance of {#link Validator}.
                             * @throws IllegalArgumentException if criteria is {#literal null}.
                             */
                            // @ts-ignore
                            criteria(criteria: org.springframework.data.mongodb.core.query.CriteriaDefinition): org.springframework.data.mongodb.core.validation.Validator
                        }
                    }
                }
            }
        }
    }
}
