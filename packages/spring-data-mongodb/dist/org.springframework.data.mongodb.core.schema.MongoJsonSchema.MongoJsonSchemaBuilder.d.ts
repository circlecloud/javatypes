declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace MongoJsonSchema {
                            /**
                             * {@link MongoJsonSchemaBuilder} provides a fluent API for defining a {@link MongoJsonSchema}.
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class MongoJsonSchemaBuilder extends java.lang.Object {
                                /**
                                 * @param count
                                 * @return {#code this} {@link MongoJsonSchemaBuilder}.
                                 * @see ObjectJsonSchemaObject#minProperties(int)
                                 */
                                // @ts-ignore
                                public minProperties(count: number /*int*/): org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder
                                /**
                                 * @param count
                                 * @return {#code this} {@link MongoJsonSchemaBuilder}.
                                 * @see ObjectJsonSchemaObject#maxProperties(int)
                                 */
                                // @ts-ignore
                                public maxProperties(count: number /*int*/): org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder
                                /**
                                 * @param properties
                                 * @return {#code this} {@link MongoJsonSchemaBuilder}.
                                 * @see ObjectJsonSchemaObject#required(String...)
                                 */
                                // @ts-ignore
                                public required(...properties: java.lang.String[] | string[]): org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder
                                /**
                                 * @param additionalPropertiesAllowed
                                 * @return {#code this} {@link MongoJsonSchemaBuilder}.
                                 * @see ObjectJsonSchemaObject#additionalProperties(boolean)
                                 */
                                // @ts-ignore
                                public additionalProperties(additionalPropertiesAllowed: boolean): org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder
                                /**
                                 * @param schema
                                 * @return {#code this} {@link MongoJsonSchemaBuilder}.
                                 * @see ObjectJsonSchemaObject#additionalProperties(ObjectJsonSchemaObject)
                                 */
                                // @ts-ignore
                                public additionalProperties(schema: org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject): org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder
                                /**
                                 * @param properties
                                 * @return {#code this} {@link MongoJsonSchemaBuilder}.
                                 * @see ObjectJsonSchemaObject#properties(JsonSchemaProperty...)
                                 */
                                // @ts-ignore
                                public properties(...properties: org.springframework.data.mongodb.core.schema.JsonSchemaProperty[]): org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder
                                /**
                                 * @param properties
                                 * @return {#code this} {@link MongoJsonSchemaBuilder}.
                                 * @see ObjectJsonSchemaObject#patternProperties(JsonSchemaProperty...)
                                 */
                                // @ts-ignore
                                public patternProperties(...properties: org.springframework.data.mongodb.core.schema.JsonSchemaProperty[]): org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder
                                /**
                                 * @param property
                                 * @return {#code this} {@link MongoJsonSchemaBuilder}.
                                 * @see ObjectJsonSchemaObject#property(JsonSchemaProperty)
                                 */
                                // @ts-ignore
                                public property(property: org.springframework.data.mongodb.core.schema.JsonSchemaProperty): org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder
                                /**
                                 * @param possibleValues
                                 * @return {#code this} {@link MongoJsonSchemaBuilder}.
                                 * @see ObjectJsonSchemaObject#possibleValues(Collection)
                                 */
                                // @ts-ignore
                                public possibleValues(possibleValues: java.util.Set<java.lang.Object | any> | Array<java.lang.Object | any>): org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder
                                /**
                                 * @param allOf
                                 * @return {#code this} {@link MongoJsonSchemaBuilder}.
                                 * @see UntypedJsonSchemaObject#allOf(Collection)
                                 */
                                // @ts-ignore
                                public allOf(allOf: java.util.Set<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder
                                /**
                                 * @param anyOf
                                 * @return {#code this} {@link MongoJsonSchemaBuilder}.
                                 * @see UntypedJsonSchemaObject#anyOf(Collection)
                                 */
                                // @ts-ignore
                                public anyOf(anyOf: java.util.Set<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder
                                /**
                                 * @param oneOf
                                 * @return {#code this} {@link MongoJsonSchemaBuilder}.
                                 * @see UntypedJsonSchemaObject#oneOf(Collection)
                                 */
                                // @ts-ignore
                                public oneOf(oneOf: java.util.Set<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder
                                /**
                                 * @param notMatch
                                 * @return {#code this} {@link MongoJsonSchemaBuilder}.
                                 * @see UntypedJsonSchemaObject#notMatch(JsonSchemaObject)
                                 */
                                // @ts-ignore
                                public notMatch(notMatch: org.springframework.data.mongodb.core.schema.JsonSchemaObject): org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder
                                /**
                                 * @param description
                                 * @return {#code this} {@link MongoJsonSchemaBuilder}.
                                 * @see UntypedJsonSchemaObject#description(String)
                                 */
                                // @ts-ignore
                                public description(description: java.lang.String | string): org.springframework.data.mongodb.core.schema.MongoJsonSchema.MongoJsonSchemaBuilder
                                /**
                                 * Obtain the {@link MongoJsonSchema}.
                                 * @return new instance of {#link MongoJsonSchema}.
                                 */
                                // @ts-ignore
                                public build(): org.springframework.data.mongodb.core.schema.MongoJsonSchema
                            }
                        }
                    }
                }
            }
        }
    }
}
