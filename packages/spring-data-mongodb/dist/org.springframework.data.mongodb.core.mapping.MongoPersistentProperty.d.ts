declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        /**
                         * MongoDB specific {@link org.springframework.data.mapping.PersistentProperty} extension.
                         * @author Oliver Gierke
                         * @author Patryk Wasik
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        interface MongoPersistentProperty {
                            /**
                             * Returns the name of the field a property is persisted to.
                             * @return 
                             */
                            // @ts-ignore
                            getFieldName(): string
                            /**
                             * Returns the order of the field if defined. Will return -1 if undefined.
                             * @return 
                             */
                            // @ts-ignore
                            getFieldOrder(): number /*int*/
                            /**
                             * Returns whether the property is a {@link com.mongodb.DBRef}. If this returns {@literal true} you can expect
                             * {@link #getDBRef()} to return an non-{@literal null} value.
                             * @return 
                             */
                            // @ts-ignore
                            isDbReference(): boolean
                            /**
                             * Returns whether the property is explicitly marked as an identifier property of the owning {@link PersistentEntity}.
                             * A property is an explicit id property if it is annotated with @see {@link Id}.
                             * @return 
                             */
                            // @ts-ignore
                            isExplicitIdProperty(): boolean
                            /**
                             * Returns true whether the property indicates the documents language either by having a {@link #getFieldName()} equal
                             * to {@literal language} or being annotated with {@link Language}.
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            isLanguageProperty(): boolean
                            /**
                             * Returns true when property being annotated with {@link Language}.
                             * @return 
                             * @since 1.6.1
                             */
                            // @ts-ignore
                            isExplicitLanguageProperty(): boolean
                            /**
                             * Returns whether the property holds the documents score calculated by text search. <br/>
                             * It's marked with {@link TextScore}.
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            isTextScoreProperty(): boolean
                            /**
                             * Returns the {@link DBRef} if the property is a reference.
                             * @see #isDbReference()
                             * @return 
                             */
                            // @ts-ignore
                            getDBRef(): org.springframework.data.mongodb.core.mapping.DBRef
                            /**
                             * Returns whether property access shall be used for reading the property value. This means it will use the getter
                             * instead of field access.
                             * @return 
                             */
                            // @ts-ignore
                            usePropertyAccess(): boolean
                        }
                    }
                }
            }
        }
    }
}
