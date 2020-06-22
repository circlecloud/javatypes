declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace TypedJsonSchemaObject {
                            /**
                             * {@link JsonSchemaObject} implementation of {@code type : 'number'}, {@code bsonType : 'int'},
                             * {@code bsonType : 'long'}, {@code bsonType : 'double'} and {@code bsonType : 'decimal128'} schema elements.<br />
                             * Provides programmatic access to schema specifics like {@literal multipleOf, minimum, maximum,...} via a fluent API
                             * producing immutable {@link JsonSchemaObject schema objects}.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class NumericJsonSchemaObject extends org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject {
                                /**
                                 * Set the {@link Range} of valid field values translating to {@literal minimum}, {@literal exclusiveMinimum},
                                 * {@literal maximum} and {@literal exclusiveMaximum}.
                                 * @param range must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public within(range: object): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.NumericJsonSchemaObject
                                /**
                                 * Set {@literal minimum} to given {@code min} value and {@literal exclusiveMinimum} to {@literal true}.
                                 * @param min must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public gt(min: java.lang.Number): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.NumericJsonSchemaObject
                                /**
                                 * Set {@literal minimum} to given {@code min} value and {@literal exclusiveMinimum} to {@literal false}.
                                 * @param min must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public gte(min: java.lang.Number): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.NumericJsonSchemaObject
                                /**
                                 * Set {@literal maximum} to given {@code max} value and {@literal exclusiveMaximum} to {@literal true}.
                                 * @param max must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public lt(max: java.lang.Number): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.NumericJsonSchemaObject
                                // @ts-ignore
                                public possibleValues(possibleValues: java.util.Collection<any> | Array<any>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.NumericJsonSchemaObject
                                // @ts-ignore
                                public allOf(allOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.NumericJsonSchemaObject
                                // @ts-ignore
                                public anyOf(anyOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.NumericJsonSchemaObject
                                // @ts-ignore
                                public oneOf(oneOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.NumericJsonSchemaObject
                                // @ts-ignore
                                public notMatch(notMatch: org.springframework.data.mongodb.core.schema.JsonSchemaObject): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.NumericJsonSchemaObject
                                // @ts-ignore
                                public description(description: java.lang.String | string): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.NumericJsonSchemaObject
                                // @ts-ignore
                                public generatedDescription(): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.NumericJsonSchemaObject
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
