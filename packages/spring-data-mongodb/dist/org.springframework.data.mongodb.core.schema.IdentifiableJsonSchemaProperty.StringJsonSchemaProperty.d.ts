declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace IdentifiableJsonSchemaProperty {
                            /**
                             * Convenience {@link JsonSchemaProperty} implementation for a {@code type : 'string'} property.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class StringJsonSchemaProperty extends org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty<org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.StringJsonSchemaObject> {
                                /**
                                 * @param length
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#minLength(int)
                                 */
                                // @ts-ignore
                                public minLength(length: number /*int*/): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.StringJsonSchemaProperty
                                /**
                                 * @param length
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#maxLength(int)
                                 */
                                // @ts-ignore
                                public maxLength(length: number /*int*/): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.StringJsonSchemaProperty
                                /**
                                 * @param pattern must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#matching(String)
                                 */
                                // @ts-ignore
                                public matching(pattern: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.StringJsonSchemaProperty
                                /**
                                 * @param possibleValues must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#possibleValues(Collection)
                                 */
                                // @ts-ignore
                                public possibleValues(...possibleValues: java.lang.String[] | string[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.StringJsonSchemaProperty
                                /**
                                 * @param allOf must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#allOf(Collection)
                                 */
                                // @ts-ignore
                                public allOf(...allOf: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.StringJsonSchemaProperty
                                /**
                                 * @param anyOf must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#anyOf(Collection)
                                 */
                                // @ts-ignore
                                public anyOf(...anyOf: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.StringJsonSchemaProperty
                                /**
                                 * @param oneOf must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#oneOf(Collection)
                                 */
                                // @ts-ignore
                                public oneOf(...oneOf: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.StringJsonSchemaProperty
                                /**
                                 * @param possibleValues must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#possibleValues(Collection)
                                 */
                                // @ts-ignore
                                public possibleValues(possibleValues: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.StringJsonSchemaProperty
                                /**
                                 * @param allOf must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#allOf(Collection)
                                 */
                                // @ts-ignore
                                public allOf(allOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.StringJsonSchemaProperty
                                /**
                                 * @param anyOf must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#anyOf(Collection)
                                 */
                                // @ts-ignore
                                public anyOf(anyOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.StringJsonSchemaProperty
                                /**
                                 * @param oneOf must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#oneOf(Collection)
                                 */
                                // @ts-ignore
                                public oneOf(oneOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.StringJsonSchemaProperty
                                /**
                                 * @param notMatch must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#notMatch(JsonSchemaObject)
                                 */
                                // @ts-ignore
                                public notMatch(notMatch: org.springframework.data.mongodb.core.schema.JsonSchemaObject): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.StringJsonSchemaProperty
                                /**
                                 * @param description must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#description(String)
                                 */
                                // @ts-ignore
                                public description(description: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.StringJsonSchemaProperty
                                /**
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#generateDescription()
                                 */
                                // @ts-ignore
                                public generatedDescription(): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.StringJsonSchemaProperty
                            }
                        }
                    }
                }
            }
        }
    }
}
