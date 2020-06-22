declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace TypedJsonSchemaObject {
                            /**
                             * {@link JsonSchemaObject} implementation of {@code type : 'object'} schema elements.<br />
                             * Provides programmatic access to schema specifics like {@literal required, properties, patternProperties,...} via a
                             * fluent API producing immutable {@link JsonSchemaObject schema objects}.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class ObjectJsonSchemaObject extends org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject {
                                // @ts-ignore
                                constructor()
                                /**
                                 * Define the {@literal minProperties} and {@literal maxProperties} via the given {@link Range}.<br />
                                 * In-/Exclusions via {@link Bound#isInclusive() range bounds} are not taken into account.
                                 * @param range must not be {#literal null}. Consider {@link Range#unbounded()} instead.
                                 * @return new instance of {#link ObjectJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public propertiesCount(range: object): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                                /**
                                 * Define the {@literal minProperties}.
                                 * @param count the allowed minimal number of properties.
                                 * @return new instance of {#link ObjectJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public minProperties(count: number /*int*/): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                                /**
                                 * Define the {@literal maxProperties}.
                                 * @param count the allowed maximum number of properties.
                                 * @return new instance of {#link ObjectJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public maxProperties(count: number /*int*/): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                                /**
                                 * Define the Object’s {@literal required} properties.
                                 * @param properties the names of required properties.
                                 * @return new instance of {#link ObjectJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public required(...properties: java.lang.String[] | string[]): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                                /**
                                 * If set to {@literal false}, additional fields besides
                                 * {@link #properties(JsonSchemaProperty...)}/{@link #patternProperties(JsonSchemaProperty...)} are not allowed.
                                 * @param additionalPropertiesAllowed
                                 * @return new instance of {#link ObjectJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public additionalProperties(additionalPropertiesAllowed: boolean): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                                /**
                                 * If specified, additional fields must validate against the given schema.
                                 * @param schema must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public additionalProperties(schema: org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                                /**
                                 * Append the objects properties along with the {@link JsonSchemaObject} validating against.
                                 * @param properties must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public properties(...properties: org.springframework.data.mongodb.core.schema.JsonSchemaProperty[]): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                                /**
                                 * Append regular expression patterns along with the {@link JsonSchemaObject} matching properties validating
                                 * against.
                                 * @param regularExpressions must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public patternProperties(...regularExpressions: org.springframework.data.mongodb.core.schema.JsonSchemaProperty[]): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                                /**
                                 * Append the objects property along with the {@link JsonSchemaObject} validating against.
                                 * @param property must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public property(property: org.springframework.data.mongodb.core.schema.JsonSchemaProperty): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                                // @ts-ignore
                                public possibleValues(possibleValues: java.util.Collection<any> | Array<any>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                                // @ts-ignore
                                public allOf(allOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                                // @ts-ignore
                                public anyOf(anyOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                                // @ts-ignore
                                public oneOf(oneOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                                // @ts-ignore
                                public notMatch(notMatch: org.springframework.data.mongodb.core.schema.JsonSchemaObject): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                                // @ts-ignore
                                public description(description: java.lang.String | string): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                                // @ts-ignore
                                public generatedDescription(): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
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
