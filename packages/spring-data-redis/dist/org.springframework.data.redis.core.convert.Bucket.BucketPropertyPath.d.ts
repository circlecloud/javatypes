declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        namespace Bucket {
                            /**
                             * Value object representing a path within a {@link Bucket}. Paths can be either top-level (if the {@code prefix} is
                             * {@literal null} or empty) or nested with a given {@code prefix}.
                             * @author Mark Paluch
                             * @since 2.1
                             */
                            // @ts-ignore
                            class BucketPropertyPath extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                /**
                                 * Creates a top-level {@link BucketPropertyPath} given {@link Bucket}.
                                 * @param bucket the bucket, must not be {#literal null}.
                                 * @return {#link BucketPropertyPath} within the given {@link Bucket}.
                                 */
                                // @ts-ignore
                                public static from(bucket: org.springframework.data.redis.core.convert.Bucket): org.springframework.data.redis.core.convert.Bucket.BucketPropertyPath
                                /**
                                 * Creates a {@link BucketPropertyPath} given {@link Bucket} and {@code prefix}. The resulting path is top-level if
                                 * {@code prefix} is empty or nested, if {@code prefix} is not empty.
                                 * @param bucket the bucket, must not be {#literal null}.
                                 * @param prefix the prefix. Property path is top-level if {#code prefix} is {@literal null} or empty.
                                 * @return {#link BucketPropertyPath} within the given {@link Bucket} using {@code prefix}.
                                 */
                                // @ts-ignore
                                public static from(bucket: org.springframework.data.redis.core.convert.Bucket, prefix: java.lang.String | string): org.springframework.data.redis.core.convert.Bucket.BucketPropertyPath
                                /**
                                 * Retrieve a value at {@code key} considering top-level/nesting.
                                 * @param key must not be {#literal null} or empty.
                                 * @return the resulting value, may be {#literal null}.
                                 */
                                // @ts-ignore
                                public get(key: java.lang.String | string): number /*byte*/[]
                                /**
                                 * Write a {@code value} at {@code key} considering top-level/nesting.
                                 * @param key must not be {#literal null} or empty.
                                 * @param value the value.
                                 */
                                // @ts-ignore
                                public put(key: java.lang.String | string, value: number /*byte*/[]): void
                            }
                        }
                    }
                }
            }
        }
    }
}
