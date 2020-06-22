declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace IdentifiableJsonSchemaProperty {
                            /**
                             * Convenience {@link JsonSchemaProperty} implementation without a {@code type} property.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class UntypedJsonSchemaProperty extends org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty<org.springframework.data.mongodb.core.schema.UntypedJsonSchemaObject> {
                                /**
                                 * @param possibleValues must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#possibleValues(Collection)
                                 */
                                // @ts-ignore
                                public possibleValues(...possibleValues: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.UntypedJsonSchemaProperty
                                /**
                                 * @param allOf must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#allOf(Collection)
                                 */
                                // @ts-ignore
                                public allOf(...allOf: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.UntypedJsonSchemaProperty
                                /**
                                 * @param anyOf must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#anyOf(Collection)
                                 */
                                // @ts-ignore
                                public anyOf(...anyOf: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.UntypedJsonSchemaProperty
                                /**
                                 * @param oneOf must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#oneOf(Collection)
                                 */
                                // @ts-ignore
                                public oneOf(...oneOf: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.UntypedJsonSchemaProperty
                                /**
                                 * @param possibleValues must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#possibleValues(Collection)
                                 */
                                // @ts-ignore
                                public possibleValues(possibleValues: java.util.Collection<java.lang.Object | any> | Array<java.lang.Object | any>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.UntypedJsonSchemaProperty
                                /**
                                 * @param allOf must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#allOf(Collection)
                                 */
                                // @ts-ignore
                                public allOf(allOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.UntypedJsonSchemaProperty
                                /**
                                 * @param anyOf must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#anyOf(Collection)
                                 */
                                // @ts-ignore
                                public anyOf(anyOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.UntypedJsonSchemaProperty
                                /**
                                 * @param oneOf must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#oneOf(Collection)
                                 */
                                // @ts-ignore
                                public oneOf(oneOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.UntypedJsonSchemaProperty
                                /**
                                 * @param notMatch must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#notMatch(JsonSchemaObject)
                                 */
                                // @ts-ignore
                                public notMatch(notMatch: org.springframework.data.mongodb.core.schema.JsonSchemaObject): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.UntypedJsonSchemaProperty
                                /**
                                 * @param description must not be {#literal null}.
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#description(String)
                                 */
                                // @ts-ignore
                                public description(description: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.UntypedJsonSchemaProperty
                                /**
                                 * @return new instance of {#link StringJsonSchemaProperty}.
                                 * @see StringJsonSchemaObject#generateDescription()
                                 */
                                // @ts-ignore
                                public generatedDescription(): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.UntypedJsonSchemaProperty
                            }
                        }
                    }
                }
            }
        }
    }
}
