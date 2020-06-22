declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * Bucket is the data bag for Redis hash structures to be used with {@link RedisData}.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.7
                         */
                        // @ts-ignore
                        class Bucket extends java.lang.Object {
                            /**
                             * Creates new empty bucket
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Encoding used for converting {@link Byte} to and from {@link String}.
                             */
                            // @ts-ignore
                            public static readonly CHARSET: java.nio.charset.Charset
                            /**
                             * Add {@link String} representation of property dot path with given value.
                             * @param path must not be {#literal null} or {@link String#isEmpty()}.
                             * @param value can be {#literal null}.
                             */
                            // @ts-ignore
                            public put(path: java.lang.String | string, value: number /*byte*/[]): void
                            /**
                             * Remove the property at property dot {@code path}.
                             * @param path must not be {#literal null} or {@link String#isEmpty()}.
                             */
                            // @ts-ignore
                            public remove(path: java.lang.String | string): void
                            /**
                             * Get value assigned with path.
                             * @param path path must not be {#literal null} or {@link String#isEmpty()}.
                             * @return {#literal null} if not set.
                             */
                            // @ts-ignore
                            public get(path: java.lang.String | string): number /*byte*/[]
                            /**
                             * A set view of the mappings contained in this bucket.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public entrySet(): Array<java.util.Map.Entry<java.lang.String | string, number /*byte*/[]>>
                            /**
                             * @return {#literal true} when no data present in {@link Bucket}.
                             */
                            // @ts-ignore
                            public isEmpty(): boolean
                            /**
                             * @return the number of key-value mappings of the {#link Bucket}.
                             */
                            // @ts-ignore
                            public size(): number /*int*/
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public values(): Array<number /*byte*/[]>
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public keySet(): Array<java.lang.String | string>
                            /**
                             * Key/value pairs contained in the {@link Bucket}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public asMap(): java.util.Map<java.lang.String | string, number /*byte*/[]>
                            /**
                             * Extracts a bucket containing key/value pairs with the {@code prefix}.
                             * @param prefix
                             * @return 
                             */
                            // @ts-ignore
                            public extract(prefix: java.lang.String | string): org.springframework.data.redis.core.convert.Bucket
                            /**
                             * Get all the keys matching a given path.
                             * @param path the path to look for. Can be {#literal null}.
                             * @return all keys if path is {#null} or empty.
                             */
                            // @ts-ignore
                            public extractAllKeysFor(path: java.lang.String | string): Array<java.lang.String | string>
                            /**
                             * Get keys and values in binary format.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public rawMap(): java.util.Map<number /*byte*/[], number /*byte*/[]>
                            /**
                             * Get the {@link BucketPropertyPath} leading to the current {@link Bucket}.
                             * @return new instance of {#link BucketPropertyPath}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public getPath(): org.springframework.data.redis.core.convert.Bucket.BucketPropertyPath
                            /**
                             * Get the {@link BucketPropertyPath} for a given property within the current {@link Bucket}.
                             * @param property the property to look up.
                             * @return new instance of {#link BucketPropertyPath}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public getPropertyPath(property: java.lang.String | string): org.springframework.data.redis.core.convert.Bucket.BucketPropertyPath
                            /**
                             * Creates a new Bucket from a given raw map.
                             * @param source can be {#literal null}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public static newBucketFromRawMap(source: java.util.Map<number /*byte*/[], number /*byte*/[]>): org.springframework.data.redis.core.convert.Bucket
                            /**
                             * Creates a new Bucket from a given {@link String} map.
                             * @param source can be {#literal null}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public static newBucketFromStringMap(source: java.util.Map<java.lang.String | string, java.lang.String | string>): org.springframework.data.redis.core.convert.Bucket
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
