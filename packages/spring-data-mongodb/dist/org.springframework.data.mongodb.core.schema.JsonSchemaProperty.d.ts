declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        /**
                         * A {@literal property} or {@literal patternProperty} within a {@link JsonSchemaObject} of {@code type : 'object'}.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface JsonSchemaProperty extends org.springframework.data.mongodb.core.schema.JsonSchemaObject {
                            /**
                             * The identifier can be either the property name or the regex expression properties have to match when used along
                             * with {@link ObjectJsonSchemaObject#patternProperties(JsonSchemaProperty...)}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getIdentifier(): string
                            /**
                             * Creates a new {@link UntypedJsonSchemaProperty} with given {@literal identifier} without {@code type}.
                             * @param identifier the {#literal property} name or {@literal patternProperty} regex. Must not be {@literal null} nor
                             *           {@literal empty}.
                             * @return new instance of {#link UntypedJsonSchemaProperty}.
                             */
                            // @ts-ignore
                            untyped(identifier: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.UntypedJsonSchemaProperty
                            /**
                             * Creates a new {@link StringJsonSchemaProperty} with given {@literal identifier} of {@code type : 'string'}.
                             * @param identifier the {#literal property} name or {@literal patternProperty} regex. Must not be {@literal null} nor
                             *           {@literal empty}.
                             * @return new instance of {#link StringJsonSchemaProperty}.
                             */
                            // @ts-ignore
                            string(identifier: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.StringJsonSchemaProperty
                            /**
                             * Creates a new {@link ObjectJsonSchemaProperty} with given {@literal identifier} of {@code type : 'object'}.
                             * @param identifier the {#literal property} name or {@literal patternProperty} regex. Must not be {@literal null} nor
                             *           {@literal empty}.
                             * @return new instance of {#link ObjectJsonSchemaProperty}.
                             */
                            // @ts-ignore
                            object(identifier: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ObjectJsonSchemaProperty
                            /**
                             * Creates a new {@link NumericJsonSchemaProperty} with given {@literal identifier} of {@code type : 'number'}.
                             * @param identifier the {#literal property} name or {@literal patternProperty} regex. Must not be {@literal null} nor
                             *           {@literal empty}.
                             * @return new instance of {#link NumericJsonSchemaProperty}.
                             */
                            // @ts-ignore
                            number(identifier: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                            /**
                             * Creates a new {@link NumericJsonSchemaProperty} with given {@literal identifier} of {@code bsonType : 'int'}.
                             * @param identifier the {#literal property} name or {@literal patternProperty} regex. Must not be {@literal null} nor
                             *           {@literal empty}.
                             * @return new instance of {#link NumericJsonSchemaProperty}.
                             */
                            // @ts-ignore
                            int32(identifier: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                            /**
                             * Creates a new {@link NumericJsonSchemaProperty} with given {@literal identifier} of {@code bsonType : 'long'}.
                             * @param identifier the {#literal property} name or {@literal patternProperty} regex. Must not be {@literal null} nor
                             *           {@literal empty}.
                             * @return new instance of {#link NumericJsonSchemaProperty}.
                             */
                            // @ts-ignore
                            int64(identifier: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                            /**
                             * Creates a new {@link NumericJsonSchemaProperty} with given {@literal identifier} of {@code bsonType : 'double'}.
                             * @param identifier the {#literal property} name or {@literal patternProperty} regex. Must not be {@literal null} nor
                             *           {@literal empty}.
                             * @return new instance of {#link NumericJsonSchemaProperty}.
                             */
                            // @ts-ignore
                            float64(identifier: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                            /**
                             * Creates a new {@link NumericJsonSchemaProperty} with given {@literal identifier} of
                             * {@code bsonType : 'decimal128'}.
                             * @param identifier the {#literal property} name or {@literal patternProperty} regex. Must not be {@literal null} nor
                             *           {@literal empty}.
                             * @return new instance of {#link NumericJsonSchemaProperty}.
                             */
                            // @ts-ignore
                            decimal128(identifier: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NumericJsonSchemaProperty
                            /**
                             * Creates a new {@link ArrayJsonSchemaProperty} with given {@literal identifier} of {@code type : 'array'}.
                             * @param identifier the {#literal property} name or {@literal patternProperty} regex. Must not be {@literal null} nor
                             *           {@literal empty}.
                             * @return new instance of {#link ArrayJsonSchemaProperty}.
                             */
                            // @ts-ignore
                            array(identifier: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.ArrayJsonSchemaProperty
                            /**
                             * Creates a new {@link BooleanJsonSchemaProperty} with given {@literal identifier} of {@code type : 'boolean'}.
                             * @param identifier the {#literal property} name or {@literal patternProperty} regex. Must not be {@literal null} nor
                             *           {@literal empty}.
                             * @return new instance of {#link BooleanJsonSchemaProperty}.
                             */
                            // @ts-ignore
                            bool(identifier: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.BooleanJsonSchemaProperty
                            /**
                             * Creates a new {@link BooleanJsonSchemaProperty} with given {@literal identifier} of {@code type : 'null'}.
                             * @param identifier the {#literal property} name or {@literal patternProperty} regex. Must not be {@literal null} nor
                             *           {@literal empty}.
                             * @return new instance of {#link NullJsonSchemaProperty}.
                             */
                            // @ts-ignore
                            nil(identifier: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.NullJsonSchemaProperty
                            /**
                             * Creates a new {@link DateJsonSchemaProperty} with given {@literal identifier} of {@code type : 'date'}.
                             * @param identifier the {#literal property} name or {@literal patternProperty} regex. Must not be {@literal null} nor
                             *           {@literal empty}.
                             * @return new instance of {#link DateJsonSchemaProperty}.
                             */
                            // @ts-ignore
                            date(identifier: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.DateJsonSchemaProperty
                            /**
                             * Creates a new {@link TimestampJsonSchemaProperty} with given {@literal identifier} of {@code type : 'timestamp'}.
                             * @param identifier the {#literal property} name or {@literal patternProperty} regex. Must not be {@literal null} nor
                             *           {@literal empty}.
                             * @return new instance of {#link TimestampJsonSchemaProperty}.
                             */
                            // @ts-ignore
                            timestamp(identifier: java.lang.String | string): org.springframework.data.mongodb.core.schema.IdentifiableJsonSchemaProperty.TimestampJsonSchemaProperty
                            /**
                             * Obtain a builder to create a {@link JsonSchemaProperty}.
                             * @param identifier
                             * @return 
                             */
                            // @ts-ignore
                            named(identifier: java.lang.String | string): org.springframework.data.mongodb.core.schema.JsonSchemaProperty.JsonSchemaPropertyBuilder
                        }
                    }
                }
            }
        }
    }
}
