declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        namespace QueryMapper {
                            /**
                             * Value object to represent a field and its meta-information.
                             * @author Oliver Gierke
                             */
                            // @ts-ignore
                            class Field extends java.lang.Object {
                                /**
                                 * Creates a new {@link DocumentField} without meta-information but the given name.
                                 * @param name must not be {#literal null} or empty.
                                 */
                                // @ts-ignore
                                constructor(name: java.lang.String | string)
                                // @ts-ignore
                                readonly name: java.lang.String | string
                                /**
                                 * Returns a new {@link DocumentField} with the given name.
                                 * @param name must not be {#literal null} or empty.
                                 * @return 
                                 */
                                // @ts-ignore
                                public with(name: java.lang.String | string): org.springframework.data.mongodb.core.convert.QueryMapper.Field
                                /**
                                 * Returns whether the current field is the id field.
                                 * @return 
                                 */
                                // @ts-ignore
                                public isIdField(): boolean
                                /**
                                 * Returns the underlying {@link MongoPersistentProperty} backing the field. For path traversals this will be the
                                 * property that represents the value to handle. This means it'll be the leaf property for plain paths or the
                                 * association property in case we refer to an association somewhere in the path.
                                 * @return can be {#literal null}.
                                 */
                                // @ts-ignore
                                public getProperty(): org.springframework.data.mongodb.core.mapping.MongoPersistentProperty
                                /**
                                 * Returns the {@link MongoPersistentEntity} that field is conatined in.
                                 * @return can be {#literal null}.
                                 */
                                // @ts-ignore
                                public getPropertyEntity(): org.springframework.data.mongodb.core.mapping.MongoPersistentEntity<any>
                                /**
                                 * Returns whether the field represents an association.
                                 * @return 
                                 */
                                // @ts-ignore
                                public isAssociation(): boolean
                                /**
                                 * Returns the key to be used in the mapped document eventually.
                                 * @return 
                                 */
                                // @ts-ignore
                                public getMappedKey(): string
                                /**
                                 * Returns whether the field references an association in case it refers to a nested field.
                                 * @return 
                                 */
                                // @ts-ignore
                                public containsAssociation(): boolean
                                // @ts-ignore
                                public getAssociation(): object
                                /**
                                 * Returns whether the field references a {@link java.util.Map}.
                                 * @return {#literal true} if property information is available and references a {@link java.util.Map}.
                                 * @see PersistentProperty#isMap()
                                 */
                                // @ts-ignore
                                public isMap(): boolean
                                // @ts-ignore
                                public getTypeHint(): object
                            }
                        }
                    }
                }
            }
        }
    }
}
