declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace IdentifiableJsonSchemaProperty {
                            /**
                             * Convenience {@link JsonSchemaProperty} implementation for a {@code type : 'array'} property.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class ArrayJsonSchemaProperty extends org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty<org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject> {
                                /**
                                 * @param identifier identifier the {#literal property} name or {@literal patternProperty} regex. Must not be
                                 *           {@literal null} nor {@literal empty}.
                                 * @param schemaObject must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(identifier: java.lang.String | string, schemaObject: org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject)
                                /**
                                 * @param uniqueItems
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#uniqueItems(boolean)
                                 */
                                // @ts-ignore
                                public uniqueItems(uniqueItems: boolean): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param range must not be {#literal null}.
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#range(Range)
                                 */
                                // @ts-ignore
                                public range(range: object): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param count
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#minItems(int)
                                 */
                                // @ts-ignore
                                public minItems(count: number /*int*/): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param count
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#maxItems(int)
                                 */
                                // @ts-ignore
                                public maxItems(count: number /*int*/): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param items must not be {#literal null}.
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#items(Collection)
                                 */
                                // @ts-ignore
                                public items(...items: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param items must not be {#literal null}.
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#items(Collection)
                                 */
                                // @ts-ignore
                                public items(items: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param additionalItemsAllowed
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#additionalItems(boolean)
                                 */
                                // @ts-ignore
                                public additionalItems(additionalItemsAllowed: boolean): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param possibleValues must not be {#literal null}.
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#possibleValues(Collection)
                                 */
                                // @ts-ignore
                                public possibleValues(...possibleValues: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param allOf must not be {#literal null}.
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#allOf(Collection)
                                 */
                                // @ts-ignore
                                public allOf(...allOf: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param anyOf must not be {#literal null}.
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#anyOf(Collection)
                                 */
                                // @ts-ignore
                                public anyOf(...anyOf: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param oneOf must not be {#literal null}.
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#oneOf(Collection)
                                 */
                                // @ts-ignore
                                public oneOf(...oneOf: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param possibleValues must not be {#literal null}.
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#possibleValues(Collection)
                                 */
                                // @ts-ignore
                                public possibleValues(possibleValues: java.util.Collection<java.lang.Object | any> | Array<java.lang.Object | any>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param allOf must not be {#literal null}.
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#allOf(Collection)
                                 */
                                // @ts-ignore
                                public allOf(allOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param anyOf must not be {#literal null}.
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#anyOf(Collection)
                                 */
                                // @ts-ignore
                                public anyOf(anyOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param oneOf must not be {#literal null}.
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#oneOf(Collection)
                                 */
                                // @ts-ignore
                                public oneOf(oneOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param notMatch must not be {#literal null}.
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#notMatch(JsonSchemaObject)
                                 */
                                // @ts-ignore
                                public notMatch(notMatch: org.springframework.data.mongodb.core.schema.JsonSchemaObject): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @param description must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#description(String)
                                 */
                                // @ts-ignore
                                public description(description: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                                /**
                                 * @return new instance of {#link ArrayJsonSchemaProperty}.
                                 * @see ArrayJsonSchemaObject#generateDescription()
                                 */
                                // @ts-ignore
                                public generatedDescription(): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                            }
                        }
                    }
                }
            }
        }
    }
}
