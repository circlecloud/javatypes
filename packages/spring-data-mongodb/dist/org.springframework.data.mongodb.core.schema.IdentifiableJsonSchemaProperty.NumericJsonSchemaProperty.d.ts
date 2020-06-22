declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace IdentifiableJsonSchemaProperty {
                            /**
                             * Convenience {@link JsonSchemaProperty} implementation for a {@code type : 'number'} property.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class NumericJsonSchemaProperty extends org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty<org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.NumericJsonSchemaObject> {
                                /**
                                 * @param identifier identifier the {#literal property} name or {@literal patternProperty} regex. Must not be
                                 *           {@literal null} nor {@literal empty}.
                                 * @param schemaObject must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(identifier: java.lang.String | string, schemaObject: org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.NumericJsonSchemaObject)
                                /**
                                 * @param value must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#multipleOf
                                 */
                                // @ts-ignore
                                public multipleOf(value: java.lang.Number): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @param range must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#within(Range)
                                 */
                                // @ts-ignore
                                public within(range: object): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @param min must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#gt(Number)
                                 */
                                // @ts-ignore
                                public gt(min: java.lang.Number): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @param min must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#gte(Number)
                                 */
                                // @ts-ignore
                                public gte(min: java.lang.Number): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @param max must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#lt(Number)
                                 */
                                // @ts-ignore
                                public lt(max: java.lang.Number): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @param max must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#lte(Number)
                                 */
                                // @ts-ignore
                                public lte(max: java.lang.Number): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @param possibleValues must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#possibleValues(Collection)
                                 */
                                // @ts-ignore
                                public possibleValues(...possibleValues: java.lang.Number[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @param allOf must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#allOf(Collection)
                                 */
                                // @ts-ignore
                                public allOf(...allOf: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @param anyOf must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#anyOf(Collection)
                                 */
                                // @ts-ignore
                                public anyOf(...anyOf: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @param oneOf must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#oneOf(Collection)
                                 */
                                // @ts-ignore
                                public oneOf(...oneOf: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @param possibleValues must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#possibleValues(Collection)
                                 */
                                // @ts-ignore
                                public possibleValues(possibleValues: java.util.Collection<java.lang.Number> | Array<java.lang.Number>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @param allOf must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#allOf(Collection)
                                 */
                                // @ts-ignore
                                public allOf(allOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @param anyOf must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#anyOf(Collection)
                                 */
                                // @ts-ignore
                                public anyOf(anyOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @param oneOf must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#oneOf(Collection)
                                 */
                                // @ts-ignore
                                public oneOf(oneOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @param notMatch must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#notMatch(JsonSchemaObject)
                                 */
                                // @ts-ignore
                                public notMatch(notMatch: org.springframework.data.mongodb.core.schema.JsonSchemaObject): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @param description must not be {#literal null}.
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#description(String)
                                 */
                                // @ts-ignore
                                public description(description: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                                /**
                                 * @return new instance of {#link NumericJsonSchemaProperty}.
                                 * @see NumericJsonSchemaObject#generateDescription()
                                 */
                                // @ts-ignore
                                public generatedDescription(): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                            }
                        }
                    }
                }
            }
        }
    }
}
