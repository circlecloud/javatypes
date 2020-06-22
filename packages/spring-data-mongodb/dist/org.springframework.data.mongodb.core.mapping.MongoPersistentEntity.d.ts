declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        /**
                         * MongoDB specific {@link PersistentEntity} abstraction.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        interface MongoPersistentEntity<T> {
                            /**
                             * Returns the collection the entity shall be persisted to.
                             * @return 
                             */
                            // @ts-ignore
                            getCollection(): string
                            /**
                             * Returns the default language to be used for this entity.
                             * @since 1.6
                             * @return 
                             */
                            // @ts-ignore
                            getLanguage(): string
                            /**
                             * Returns the property holding text score value.
                             * @since 1.6
                             * @see #hasTextScoreProperty()
                             * @return {#literal null} if not present.
                             */
                            // @ts-ignore
                            getTextScoreProperty(): org.springframework.data.mongodb.core.mapping.MongoPersistentProperty
                            /**
                             * Returns whether the entity has a {@link TextScore} property.
                             * @since 1.6
                             * @return true if property annotated with {#link TextScore} is present.
                             */
                            // @ts-ignore
                            hasTextScoreProperty(): boolean
                        }
                    }
                }
            }
        }
    }
}
