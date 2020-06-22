declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace schema {
                        namespace JsonSchemaObject {
                            /**
                             * Type represents either a JSON schema {@literal type} or a MongoDB specific {@literal bsonType}.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            interface Type {
                                // @ts-ignore
                                readonly OBJECT_ID: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly REGULAR_EXPRESSION: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly DOUBLE: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly BINARY_DATA: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly DATE: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly JAVA_SCRIPT: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly INT_32: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly INT_64: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly DECIMAL_128: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly TIMESTAMP: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly BSON_TYPES: java.util.Set<org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type>
                                // @ts-ignore
                                readonly OBJECT: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly ARRAY: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly NUMBER: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly BOOLEAN: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly STRING: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly NULL: org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                // @ts-ignore
                                readonly JSON_TYPES: java.util.Set<org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type> | Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type>
                                /**
                                 * @return a constant {#link Type} representing {@code bsonType : 'objectId' }.
                                 */
                                // @ts-ignore
                                objectIdType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return a constant {#link Type} representing {@code bsonType : 'regex' }.
                                 */
                                // @ts-ignore
                                regexType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return a constant {#link Type} representing {@code bsonType : 'double' }.
                                 */
                                // @ts-ignore
                                doubleType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return a constant {#link Type} representing {@code bsonType : 'binData' }.
                                 */
                                // @ts-ignore
                                binaryType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return a constant {#link Type} representing {@code bsonType : 'date' }.
                                 */
                                // @ts-ignore
                                dateType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return a constant {#link Type} representing {@code bsonType : 'javascript' }.
                                 */
                                // @ts-ignore
                                javascriptType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return a constant {#link Type} representing {@code bsonType : 'int' }.
                                 */
                                // @ts-ignore
                                intType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return a constant {#link Type} representing {@code bsonType : 'long' }.
                                 */
                                // @ts-ignore
                                longType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return a constant {#link Type} representing {@code bsonType : 'decimal128' }.
                                 */
                                // @ts-ignore
                                bigDecimalType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return a constant {#link Type} representing {@code bsonType : 'timestamp' }.
                                 */
                                // @ts-ignore
                                timestampType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return a constant {#link Type} representing {@code type : 'object' }.
                                 */
                                // @ts-ignore
                                objectType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return a constant {#link Type} representing {@code type : 'array' }.
                                 */
                                // @ts-ignore
                                arrayType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return a constant {#link Type} representing {@code type : 'number' }.
                                 */
                                // @ts-ignore
                                numberType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return a constant {#link Type} representing {@code type : 'boolean' }.
                                 */
                                // @ts-ignore
                                booleanType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return a constant {#link Type} representing {@code type : 'string' }.
                                 */
                                // @ts-ignore
                                stringType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return a constant {#link Type} representing {@code type : 'null' }.
                                 */
                                // @ts-ignore
                                nullType(): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return new {#link Type} representing the given {@code bsonType}.
                                 */
                                // @ts-ignore
                                bsonTypeOf(name: java.lang.String | string): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return new {#link Type} representing the given {@code type}.
                                 */
                                // @ts-ignore
                                jsonTypeOf(name: java.lang.String | string): org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type
                                /**
                                 * @return all known JSON types.
                                 */
                                // @ts-ignore
                                jsonTypes(): Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type>
                                /**
                                 * @return all known BSON types.
                                 */
                                // @ts-ignore
                                bsonTypes(): Array<org.springframework.data.mongodb.core.schema.JsonSchemaObject.Type>
                                /**
                                 * Get the {@link Type} representation. Either {@code type} or {@code bsonType}.
                                 * @return never {#literal null}.
                                 */
                                // @ts-ignore
                                representation(): string
                                /**
                                 * Get the {@link Type} value. Like {@literal string}, {@literal number},...
                                 * @return never {#literal null}.
                                 */
                                // @ts-ignore
                                value(): any
                            }
                        }
                    }
                }
            }
        }
    }
}
