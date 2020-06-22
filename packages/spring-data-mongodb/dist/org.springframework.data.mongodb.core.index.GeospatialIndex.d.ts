declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * Value object to capture data to create a geo index.
                         * @author Jon Brisbin
                         * @author Oliver Gierke
                         * @author Laurent Canet
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class GeospatialIndex extends java.lang.Object implements org.springframework.data.mongodb.core.index.IndexDefinition {
                            /**
                             * Creates a new {@link GeospatialIndex} for the given field.
                             * @param field must not be empty or {#literal null}.
                             */
                            // @ts-ignore
                            constructor(field: java.lang.String | string)
                            /**
                             * @param name must not be {#literal null} or empty.
                             * @return 
                             */
                            // @ts-ignore
                            public named(name: java.lang.String | string): org.springframework.data.mongodb.core.index.GeospatialIndex
                            /**
                             * @param min
                             * @return 
                             */
                            // @ts-ignore
                            public withMin(min: number /*int*/): org.springframework.data.mongodb.core.index.GeospatialIndex
                            /**
                             * @param max
                             * @return 
                             */
                            // @ts-ignore
                            public withMax(max: number /*int*/): org.springframework.data.mongodb.core.index.GeospatialIndex
                            /**
                             * @param bits
                             * @return 
                             */
                            // @ts-ignore
                            public withBits(bits: number /*int*/): org.springframework.data.mongodb.core.index.GeospatialIndex
                            /**
                             * @param type must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public typed(type: org.springframework.data.mongodb.core.index.GeoSpatialIndexType): org.springframework.data.mongodb.core.index.GeospatialIndex
                            /**
                             * @param bucketSize
                             * @return 
                             */
                            // @ts-ignore
                            public withBucketSize(bucketSize: number /*double*/): org.springframework.data.mongodb.core.index.GeospatialIndex
                            /**
                             * @param fieldName.
                             * @return 
                             */
                            // @ts-ignore
                            public withAdditionalField(fieldName: java.lang.String | string): org.springframework.data.mongodb.core.index.GeospatialIndex
                            /**
                             * Only index the documents in a collection that meet a specified {@link IndexFilter filter expression}.
                             * @param filter can be {#literal null}.
                             * @return 
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/core/index-partial/">https://docs.mongodb.com/manual/core/index-partial/</a>
                             * @since 1.10
                             */
                            // @ts-ignore
                            public partial(filter: org.springframework.data.mongodb.core.index.IndexFilter): org.springframework.data.mongodb.core.index.GeospatialIndex
                            /**
                             * Set the {@link Collation} to specify language-specific rules for string comparison, such as rules for lettercase
                             * and accent marks.<br />
                             * <strong>NOTE:</strong> Only queries using the same {@link Collation} as the {@link Index} actually make use of the
                             * index.
                             * @param collation can be {#literal null}.
                             * @return 
                             * @since 2.0
                             */
                            // @ts-ignore
                            public collation(collation: org.springframework.data.mongodb.core.query.Collation): org.springframework.data.mongodb.core.index.GeospatialIndex
                            // @ts-ignore
                            public getIndexKeys(): Document
                            // @ts-ignore
                            public getIndexOptions(): Document
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
