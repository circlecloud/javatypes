declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class Index extends java.lang.Object implements org.springframework.data.mongodb.core.index.IndexDefinition {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            constructor(key: java.lang.String | string, direction: Direction)
                            // @ts-ignore
                            public on(key: java.lang.String | string, direction: Direction): org.springframework.data.mongodb.core.index.Index
                            // @ts-ignore
                            public named(name: java.lang.String | string): org.springframework.data.mongodb.core.index.Index
                            /**
                             * Reject all documents that contain a duplicate value for the indexed field.
                             * @return 
                             * @see <a href=
                             *       "https://docs.mongodb.org/manual/core/index-unique/">https://docs.mongodb.org/manual/core/index-unique/</a>
                             */
                            // @ts-ignore
                            public unique(): org.springframework.data.mongodb.core.index.Index
                            /**
                             * Skip over any document that is missing the indexed field.
                             * @return 
                             * @see <a href=
                             *       "https://docs.mongodb.org/manual/core/index-sparse/">https://docs.mongodb.org/manual/core/index-sparse/</a>
                             */
                            // @ts-ignore
                            public sparse(): org.springframework.data.mongodb.core.index.Index
                            /**
                             * Build the index in background (non blocking).
                             * @return 
                             * @since 1.5
                             */
                            // @ts-ignore
                            public background(): org.springframework.data.mongodb.core.index.Index
                            /**
                             * Specifies TTL in seconds.
                             * @param value
                             * @return 
                             * @since 1.5
                             */
                            // @ts-ignore
                            public expire(value: number /*long*/): org.springframework.data.mongodb.core.index.Index
                            /**
                             * Specifies TTL with given {@link TimeUnit}.
                             * @param value
                             * @param unit
                             * @return 
                             * @since 1.5
                             */
                            // @ts-ignore
                            public expire(value: number /*long*/, unit: java.util.concurrent.TimeUnit): org.springframework.data.mongodb.core.index.Index
                            /**
                             * Only index the documents in a collection that meet a specified {@link IndexFilter filter expression}.
                             * @param filter can be {#literal null}.
                             * @return 
                             * @see <a href=
                             *       "https://docs.mongodb.com/manual/core/index-partial/">https://docs.mongodb.com/manual/core/index-partial/</a>
                             * @since 1.10
                             */
                            // @ts-ignore
                            public partial(filter: org.springframework.data.mongodb.core.index.IndexFilter): org.springframework.data.mongodb.core.index.Index
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
                            public collation(collation: org.springframework.data.mongodb.core.query.Collation): org.springframework.data.mongodb.core.index.Index
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
