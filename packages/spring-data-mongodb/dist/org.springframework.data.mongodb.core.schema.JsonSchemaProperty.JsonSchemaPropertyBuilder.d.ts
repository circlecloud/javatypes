declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace JsonSchemaProperty {
                            /**
                             * Builder for {@link IdentifiableJsonSchemaProperty}.
                             */
                            // @ts-ignore
                            class JsonSchemaPropertyBuilder extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                /**
                                 * Configure a {@link Type} for the property.
                                 * @param type must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public ofType(type: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty<org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject>
                                /**
                                 * Configure a {@link TypedJsonSchemaObject} for the property.
                                 * @param schemaObject must not be {#literal null}.
                                 * @return 
                                 */
                                // @ts-ignore
                                public with(schemaObject: org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty<org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject>
                                /**
                                 * @return an untyped {#link IdentifiableJsonSchemaProperty}.
                                 */
                                // @ts-ignore
                                public withoutType(): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty<org.springframework.data.mongodb.core.schema.UntypedJsonSchemaObject>
                            }
                        }
                    }
                }
            }
        }
    }
}
