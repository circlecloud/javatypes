declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace TypedJsonSchemaObject {
                            /**
                             * {@link JsonSchemaObject} implementation of {@code type : 'string'} schema elements.<br />
                             * Provides programmatic access to schema specifics like {@literal minLength, maxLength, pattern,...} via a fluent API
                             * producing immutable {@link JsonSchemaObject schema objects}.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class StringJsonSchemaObject extends org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject {
                                /**
                                 * Define the valid length range ({@literal minLength} and {@literal maxLength}) for a valid field.
                                 * @param range must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public length(range: object): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.StringJsonSchemaObject
                                /**
                                 * Define the valid length range ({@literal minLength}) for a valid field.
                                 * @param length
                                 * @return new instance of {#link StringJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public minLength(length: number /*int*/): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.StringJsonSchemaObject
                                /**
                                 * Define the valid length range ({@literal maxLength}) for a valid field.
                                 * @param length
                                 * @return new instance of {#link StringJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public maxLength(length: number /*int*/): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.StringJsonSchemaObject
                                /**
                                 * Define the regex pattern to validate field values against.
                                 * @param pattern must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public matching(pattern: java.lang.String | string): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.StringJsonSchemaObject
                                // @ts-ignore
                                public possibleValues(possibleValues: java.util.Collection<any> | Array<any>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.StringJsonSchemaObject
                                // @ts-ignore
                                public allOf(allOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.StringJsonSchemaObject
                                // @ts-ignore
                                public anyOf(anyOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.StringJsonSchemaObject
                                // @ts-ignore
                                public oneOf(oneOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.StringJsonSchemaObject
                                // @ts-ignore
                                public notMatch(notMatch: org.springframework.data.mongodb.core.schema.JsonSchemaObject): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.StringJsonSchemaObject
                                // @ts-ignore
                                public description(description: java.lang.String | string): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.StringJsonSchemaObject
                                // @ts-ignore
                                public generatedDescription(): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.StringJsonSchemaObject
                                // @ts-ignore
                                public toDocument(): Document
                                // @ts-ignore
                                generateDescription(): string
                            }
                        }
                    }
                }
            }
        }
    }
}
