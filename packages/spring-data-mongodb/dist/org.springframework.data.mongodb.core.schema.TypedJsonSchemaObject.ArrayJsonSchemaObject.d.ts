declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace TypedJsonSchemaObject {
                            /**
                             * {@link JsonSchemaObject} implementation of {@code type : 'array'} schema elements.<br />
                             * Provides programmatic access to schema specifics like {@literal range, minItems, maxItems,...} via a fluent API
                             * producing immutable {@link JsonSchemaObject schema objects}.
                             * @author Christoph Strobl
                             * @author Mark Paluch
                             * @since 2.1
                             */
                            // @ts-ignore
                            class ArrayJsonSchemaObject extends org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject {
                                /**
                                 * Define the whether the array must contain unique items.
                                 * @param uniqueItems
                                 * @return new instance of {#link ArrayJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public uniqueItems(uniqueItems: boolean): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject
                                /**
                                 * Define the {@literal minItems} and {@literal maxItems} via the given {@link Range}.<br />
                                 * In-/Exclusions via {@link Bound#isInclusive() range bounds} are not taken into account.
                                 * @param range must not be {#literal null}. Consider {@link Range#unbounded()} instead.
                                 * @return new instance of {#link ArrayJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public range(range: object): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject
                                /**
                                 * Define the {@literal maxItems}.
                                 * @param count the allowed minimal number of array items.
                                 * @return new instance of {#link ArrayJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public minItems(count: number /*int*/): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject
                                /**
                                 * Define the {@literal maxItems}.
                                 * @param count the allowed maximal number of array items.
                                 * @return new instance of {#link ArrayJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public maxItems(count: number /*int*/): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject
                                /**
                                 * Define the {@code items} allowed in the array.
                                 * @param items the allowed items in the array.
                                 * @return new instance of {#link ArrayJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public items(items: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject
                                /**
                                 * If set to {@literal false}, no additional items besides {@link #items(Collection)} are allowed.
                                 * @param additionalItemsAllowed {#literal true} to allow additional items in the array, {@literal false} otherwise.
                                 * @return new instance of {#link ArrayJsonSchemaObject}.
                                 */
                                // @ts-ignore
                                public additionalItems(additionalItemsAllowed: boolean): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject
                                // @ts-ignore
                                public possibleValues(possibleValues: java.util.Collection<any> | Array<any>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject
                                // @ts-ignore
                                public allOf(allOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject
                                // @ts-ignore
                                public anyOf(anyOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject
                                // @ts-ignore
                                public oneOf(oneOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject
                                // @ts-ignore
                                public notMatch(notMatch: org.springframework.data.mongodb.core.schema.JsonSchemaObject): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject
                                // @ts-ignore
                                public description(description: java.lang.String | string): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject
                                // @ts-ignore
                                public generatedDescription(): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject
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
