declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace IdentifiableJsonSchemaProperty {
                            /**
                             * Convenience {@link JsonSchemaProperty} implementation for a {@code type : 'object'} property.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class ObjectJsonSchemaProperty extends org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty<org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject> {
                                /**
                                 * @param range must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#propertiesCount
                                 */
                                // @ts-ignore
                                public propertiesCount(range: object): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param count must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#minProperties(int)
                                 */
                                // @ts-ignore
                                public minProperties(count: number /*int*/): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param count must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#maxProperties(int)
                                 */
                                // @ts-ignore
                                public maxProperties(count: number /*int*/): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param properties must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#required(String...)
                                 */
                                // @ts-ignore
                                public required(...properties: java.lang.String[] | string[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param additionalPropertiesAllowed
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#additionalProperties(boolean)
                                 */
                                // @ts-ignore
                                public additionalProperties(additionalPropertiesAllowed: boolean): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param additionalProperties must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#additionalProperties(ObjectJsonSchemaObject)
                                 */
                                // @ts-ignore
                                public additionalProperties(additionalProperties: org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param properties must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#properties(JsonSchemaProperty...)
                                 */
                                // @ts-ignore
                                public properties(...properties: org.springframework.data.mongodb.core.schema.JsonSchemaProperty[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param possibleValues must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#possibleValues(Collection)
                                 */
                                // @ts-ignore
                                public possibleValues(...possibleValues: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param allOf must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#allOf(Collection)
                                 */
                                // @ts-ignore
                                public allOf(...allOf: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param anyOf must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#anyOf(Collection)
                                 */
                                // @ts-ignore
                                public anyOf(...anyOf: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param oneOf must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#oneOf(Collection)
                                 */
                                // @ts-ignore
                                public oneOf(...oneOf: org.springframework.data.mongodb.core.schema.JsonSchemaObject[]): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param possibleValues must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#possibleValues(Collection)
                                 */
                                // @ts-ignore
                                public possibleValues(possibleValues: java.util.Collection<java.lang.Object | any> | Array<java.lang.Object | any>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param allOf must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#allOf(Collection)
                                 */
                                // @ts-ignore
                                public allOf(allOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param anyOf must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#anyOf(Collection)
                                 */
                                // @ts-ignore
                                public anyOf(anyOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param oneOf must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#oneOf(Collection)
                                 */
                                // @ts-ignore
                                public oneOf(oneOf: java.util.Collection<org.springframework.data.mongodb.core.schema.JsonSchemaObject> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject>): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param notMatch must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#notMatch(JsonSchemaObject)
                                 */
                                // @ts-ignore
                                public notMatch(notMatch: org.springframework.data.mongodb.core.schema.JsonSchemaObject): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @param description must not be {#literal null}.
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#description(String)
                                 */
                                // @ts-ignore
                                public description(description: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                                /**
                                 * @return new instance of {#link ObjectJsonSchemaProperty}.
                                 * @see ObjectJsonSchemaObject#generateDescription()
                                 */
                                // @ts-ignore
                                public generatedDescription(): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                            }
                        }
                    }
                }
            }
        }
    }
}
