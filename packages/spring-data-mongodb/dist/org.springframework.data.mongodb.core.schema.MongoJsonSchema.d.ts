declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        /**
                         * Interface defining MongoDB-specific JSON schema object. New objects can be built with {@link #builder()}, for
                         * example:
                         * <pre class="code">
                         * MongoJsonSchema schema = MongoJsonSchema.builder().required("firstname", "lastname")
                         * .properties(string("firstname").possibleValues("luke", "han"),
                         * object("address").properties(string("postCode").minLength(4).maxLength(5))
                         * ).build();
                         * </pre>
                         * resulting in the following schema:
                         * <pre>
                         * {
                         * "type": "object",
                         * "required": [ "firstname", "lastname" ],
                         * "properties": {
                         * "firstname": {
                         * "type": "string", "enum": [ "luke", "han" ],
                         * },
                         * "address": {
                         * "type": "object",
                         * "properties": {
                         * "postCode": { "type": "string", "minLength": 4, "maxLength": 5 }
                         * }
                         * }
                         * }
                         * }
                         * </pre>
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.1
                         * @see UntypedJsonSchemaObject
                         * @see TypedJsonSchemaObject
                         */
                        // @ts-ignore
                        interface MongoJsonSchema {
                            /**
                             * Create the {@link Document} containing the specified {@code $jsonSchema}. <br />
                             * Property and field names need to be mapped to the domain type ones by running the {@link Document} through a
                             * {@link org.springframework.data.mongodb.core.convert.JsonSchemaMapper} to apply field name customization.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            toDocument(): Document
                            /**
                             * Create a new {@link MongoJsonSchema} for a given root object.
                             * @param root must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            of(root: org.springframework.data.mongodb.core.schema.JsonSchemaObject): org.springframework.data.mongodb.core.schema.MongoJsonSchema
                            /**
                             * Create a new {@link MongoJsonSchema} for a given root {@link Document} containing the schema definition.
                             * @param document must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            of(document: Document): org.springframework.data.mongodb.core.schema.MongoJsonSchema
                            /**
                             * Obtain a new {@link MongoJsonSchemaBuilder} to fluently define the schema.
                             * @return new instance of {#link MongoJsonSchemaBuilder}.
                             */
                            // @ts-ignore
                            builder(): org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder
                        }
                    }
                }
            }
        }
    }
}
