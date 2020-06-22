declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace TypedJsonSchemaObject {
                            /**
                             * {@link JsonSchemaObject} implementation of {@code type : 'boolean'} schema elements.<br />
                             * Provides programmatic access to schema specifics via a fluent API producing immutable {@link JsonSchemaObject
                             * schema objects}.
                             * @author Christoph Strobl
                             * @author Mark Paluch
                             * @since 2.1
                             */
                            // @ts-ignore
                            class BooleanJsonSchemaObject extends org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject {
                                // @ts-ignore
                                public possibleValues(possibleValues: java.util.Collection<any> | Array<any>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.BooleanJsonSchemaObject
                                // @ts-ignore
                                public allOf(allOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.BooleanJsonSchemaObject
                                // @ts-ignore
                                public anyOf(anyOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.BooleanJsonSchemaObject
                                // @ts-ignore
                                public oneOf(oneOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.BooleanJsonSchemaObject
                                // @ts-ignore
                                public notMatch(notMatch: org.springframework.data.mongodb.core.schema.JsonSchemaObject): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.BooleanJsonSchemaObject
                                // @ts-ignore
                                public description(description: java.lang.String | string): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.BooleanJsonSchemaObject
                                // @ts-ignore
                                public generatedDescription(): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.BooleanJsonSchemaObject
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
