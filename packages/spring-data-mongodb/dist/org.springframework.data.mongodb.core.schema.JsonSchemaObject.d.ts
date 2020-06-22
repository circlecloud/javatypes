declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        /**
                         * Interface that can be implemented by objects that know how to serialize themselves to JSON schema using
                         * {@link #toDocument()}.
                         * <p/>
                         * This class also declares factory methods for type-specific {@link JsonSchemaObject schema objects} such as
                         * {@link #string()} or {@link #object()}. For example:
                         * <pre class="code">
                         * JsonSchemaProperty.object("address").properties(JsonSchemaProperty.string("city").minLength(3));
                         * </pre>
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface JsonSchemaObject {
                            /**
                             * Get the set of types defined for this schema element.<br />
                             * The {@link Set} is likely to contain only one element in most cases.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getTypes(): Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type>
                            /**
                             * Get the MongoDB specific representation.<br />
                             * The Document may contain fields (eg. like {@literal bsonType}) not contained in the JsonSchema specification. It
                             * may also contain types not directly processable by the MongoDB java driver. Make sure to run the produced
                             * {@link Document} through the mapping infrastructure.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            toDocument(): Document
                            /**
                             * Create a new {@link JsonSchemaObject} of {@code type : 'object'}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            object(): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ObjectJsonSchemaObject
                            /**
                             * Create a new {@link JsonSchemaObject} of {@code type : 'string'}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            string(): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.StringJsonSchemaObject
                            /**
                             * Create a new {@link JsonSchemaObject} of {@code type : 'number'}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            number(): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.NumericJsonSchemaObject
                            /**
                             * Create a new {@link JsonSchemaObject} of {@code type : 'array'}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            array(): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.ArrayJsonSchemaObject
                            /**
                             * Create a new {@link JsonSchemaObject} of {@code type : 'boolean'}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            bool(): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.BooleanJsonSchemaObject
                            /**
                             * Create a new {@link JsonSchemaObject} of {@code type : 'null'}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            nil(): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.NullJsonSchemaObject
                            /**
                             * Create a new {@link JsonSchemaObject} of {@code type : 'date'}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            date(): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.DateJsonSchemaObject
                            /**
                             * Create a new {@link JsonSchemaObject} of {@code type : 'timestamp'}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            timestamp(): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject.TimestampJsonSchemaObject
                            /**
                             * Create a new {@link JsonSchemaObject} of given {@link Type}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            of(type: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject
                            /**
                             * Create a new {@link UntypedJsonSchemaObject}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            untyped(): org.springframework.data.mongodb.core.schema.UntypedJsonSchemaObject
                            /**
                             * Create a new {@link JsonSchemaObject} matching the given {@code type}.
                             * @param type Java class to create a {#link JsonSchemaObject} for. May be {@literal null} to create
                             *           {@link Type#nullType() null} type.
                             * @return never {#literal null}.
                             * @throws IllegalArgumentException if {#code type} is not supported.
                             */
                            // @ts-ignore
                            of(type: java.lang.Class<any>): org.springframework.data.mongodb.core.schema.TypedJsonSchemaObject
                        }
                    }
                }
            }
        }
    }
}
