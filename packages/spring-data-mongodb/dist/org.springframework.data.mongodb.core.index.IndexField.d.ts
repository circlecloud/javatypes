declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * Value object for an index field.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        class IndexField extends java.lang.Object {
                            // @ts-ignore
                            public static create(key: java.lang.String | string, order: Direction): org.springframework.data.mongodb.core.index.IndexField
                            /**
                             * Creates a geo {@link IndexField} for the given key.
                             * @param key must not be {#literal null} or empty.
                             * @return 
                             */
                            // @ts-ignore
                            public static geo(key: java.lang.String | string): org.springframework.data.mongodb.core.index.IndexField
                            /**
                             * Creates a text {@link IndexField} for the given key.
                             * @since 1.6
                             */
                            // @ts-ignore
                            public static text(key: java.lang.String | string, weight: java.lang.Float | number): org.springframework.data.mongodb.core.index.IndexField
                            /**
                             * @return the key
                             */
                            // @ts-ignore
                            public getKey(): string
                            /**
                             * Returns the direction of the {@link IndexField} or {@literal null} in case we have a geo index field.
                             * @return the direction
                             */
                            // @ts-ignore
                            public getDirection(): Direction
                            /**
                             * Returns whether the {@link IndexField} is a geo index field.
                             * @return true if type is {#link Type#GEO}.
                             */
                            // @ts-ignore
                            public isGeo(): boolean
                            /**
                             * Returns whether the {@link IndexField} is a text index field.
                             * @return true if type is {#link Type#TEXT}
                             * @since 1.6
                             */
                            // @ts-ignore
                            public isText(): boolean
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
