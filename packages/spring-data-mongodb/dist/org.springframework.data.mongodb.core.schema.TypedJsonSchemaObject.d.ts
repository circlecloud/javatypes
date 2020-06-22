declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        /**
                         * A {@link JsonSchemaObject} of a given {@link org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type}.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        class TypedJsonSchemaObject extends org.springframework.data.mongodb.core.schema.UntypedJsonSchemaObject {
                            // @ts-ignore
                            readonly types: java.util.Set<org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type>
                            /**
                             * Creates new {@link TypedJsonSchemaObject} of given types.
                             * @param types must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static of(...types: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type[]): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject
                            // @ts-ignore
                            public getTypes(): Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type>
                            /**
                             * Set the {@literal description}.
                             * @param description must not be {#literal null}.
                             * @return new instance of {#link TypedJsonSchemaObject}.
                             */
                            // @ts-ignore
                            public description(description: java.lang.String | string): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject
                            /**
                             * Auto generate the {@literal description} if not explicitly set.
                             * @param description must not be {#literal null}.
                             * @return new instance of {#link TypedJsonSchemaObject}.
                             */
                            // @ts-ignore
                            public generatedDescription(): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject
                            /**
                             * {@literal enum}erates all possible values of the field.
                             * @param possibleValues must not be {#literal null}.
                             * @return new instance of {#link TypedJsonSchemaObject}.
                             */
                            // @ts-ignore
                            public possibleValues(possibleValues: java.util.Collection<any> | Array<any>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject
                            /**
                             * The field value must match all specified schemas.
                             * @param allOf must not be {#literal null}.
                             * @return new instance of {#link TypedJsonSchemaObject}.
                             */
                            // @ts-ignore
                            public allOf(allOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject
                            /**
                             * The field value must match at least one of the specified schemas.
                             * @param anyOf must not be {#literal null}.
                             * @return new instance of {#link TypedJsonSchemaObject}.
                             */
                            // @ts-ignore
                            public anyOf(anyOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject
                            /**
                             * The field value must match exactly one of the specified schemas.
                             * @param oneOf must not be {#literal null}.
                             * @return new instance of {#link TypedJsonSchemaObject}.
                             */
                            // @ts-ignore
                            public oneOf(oneOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject
                            /**
                             * The field value must not match the specified schemas.
                             * @param oneOf must not be {#literal null}.
                             * @return new instance of {#link TypedJsonSchemaObject}.
                             */
                            // @ts-ignore
                            public notMatch(notMatch: org.springframework.data.mongodb.core.schema.JsonSchemaObject): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject
                            /**
                             * Create the JSON schema complying {@link Document} representation. This includes {@literal type},
                             * {@literal description} and the fields of {@link Restrictions#toDocument()} if set.
                             */
                            // @ts-ignore
                            public toDocument(): Document
                            /**
                             * Customization hook for creating description out of defined values.<br />
                             * Called by {@link #toDocument()} when no explicit {@link #description} is set.
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            generateDescription(): string
                        }
                    }
                }
            }
        }
    }
}
