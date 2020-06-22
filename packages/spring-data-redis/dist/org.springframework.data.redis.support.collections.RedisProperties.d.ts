declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace support {
                    namespace collections {
                        /**
                         * {@link Properties} extension for a Redis back-store. Useful for reading (and storing) properties inside a Redis hash.
                         * Particularly useful inside a Spring container for hooking into Spring's property placeholder or
                         * {@link org.springframework.beans.factory.config.PropertiesFactoryBean}.
                         * <p/>
                         * Note that this implementation only accepts Strings - objects of other type are not supported.
                         * @see Properties
                         * @see org.springframework.core.io.support.PropertiesLoaderSupport
                         * @author Costin Leau
                         */
                        // @ts-ignore
                        class RedisProperties extends java.util.Properties implements org.springframework.data.redis.support.collections.RedisMap<java.lang.Object | any, java.lang.Object | any> {
                            /**
                             * Constructs a new {@link RedisProperties} instance.
                             */
                            // @ts-ignore
                            constructor(boundOps: org.springframework.data.redis.core.BoundHashOperations<java.lang.String | string, java.lang.String | string, java.lang.String | string>)
                            /**
                             * Constructs a new {@link RedisProperties} instance.
                             * @param key Redis key of this property map.
                             * @param operations {#link RedisOperations} for this properties.
                             * @see RedisOperations#getHashKeySerializer()
                             * @see RedisOperations#getHashValueSerializer()
                             */
                            // @ts-ignore
                            constructor(key: java.lang.String | string, operations: org.springframework.data.redis.core.RedisOperations<java.lang.String | string, any>)
                            /**
                             * Constructs a new {@link RedisProperties} instance.
                             * @param defaults default properties to apply, can be {#literal null}.
                             * @param boundOps {#link BoundHashOperations} for this properties.
                             */
                            // @ts-ignore
                            constructor(defaults: java.util.Properties, boundOps: org.springframework.data.redis.core.BoundHashOperations<java.lang.String | string, java.lang.String | string, java.lang.String | string>)
                            /**
                             * Constructs a new {@link RedisProperties} instance.
                             * @param defaults default properties to apply, can be {#literal null}.
                             * @param key Redis key of this property map.
                             * @param operations {#link RedisOperations} for this properties.
                             * @see RedisOperations#getHashKeySerializer()
                             * @see RedisOperations#getHashValueSerializer()
                             */
                            // @ts-ignore
                            constructor(defaults: java.util.Properties, key: java.lang.String | string, operations: org.springframework.data.redis.core.RedisOperations<java.lang.String | string, any>)
                            // @ts-ignore
                            public get(key: java.lang.Object | any): any
                            // @ts-ignore
                            public put(key: java.lang.Object | any, value: java.lang.Object | any): any
                            // @ts-ignore
                            public putAll(t: java.util.Map<any, any>): void
                            // @ts-ignore
                            public propertyNames(): java.util.Enumeration<any>
                            // @ts-ignore
                            public clear(): void
                            // @ts-ignore
                            public clone(): any
                            // @ts-ignore
                            public contains(value: java.lang.Object | any): boolean
                            // @ts-ignore
                            public containsKey(key: java.lang.Object | any): boolean
                            // @ts-ignore
                            public containsValue(value: java.lang.Object | any): boolean
                            // @ts-ignore
                            public elements(): java.util.Enumeration<java.lang.Object | any>
                            // @ts-ignore
                            public entrySet(): Array<java.util.Map.Entry<java.lang.Object | any, java.lang.Object | any>>
                            // @ts-ignore
                            public equals(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public isEmpty(): boolean
                            // @ts-ignore
                            public keys(): java.util.Enumeration<java.lang.Object | any>
                            // @ts-ignore
                            public keySet(): Array<java.lang.Object | any>
                            // @ts-ignore
                            public remove(key: java.lang.Object | any): any
                            // @ts-ignore
                            public size(): number /*int*/
                            // @ts-ignore
                            public values(): Array<java.lang.Object | any>
                            // @ts-ignore
                            public increment(key: java.lang.Object | any, delta: number /*long*/): number
                            // @ts-ignore
                            public increment(key: java.lang.Object | any, delta: number /*double*/): number
                            // @ts-ignore
                            public getOperations(): org.springframework.data.redis.core.RedisOperations<java.lang.String | string, any>
                            // @ts-ignore
                            public expire(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): java.lang.Boolean
                            // @ts-ignore
                            public expireAt(date: java.util.Date): java.lang.Boolean
                            // @ts-ignore
                            public getExpire(): number
                            // @ts-ignore
                            public getKey(): string
                            // @ts-ignore
                            public getType(): org.springframework.data.redis.connection.DataType
                            // @ts-ignore
                            public persist(): java.lang.Boolean
                            // @ts-ignore
                            public rename(newKey: java.lang.String | string): void
                            // @ts-ignore
                            public putIfAbsent(key: java.lang.Object | any, value: java.lang.Object | any): any
                            // @ts-ignore
                            public remove(key: java.lang.Object | any, value: java.lang.Object | any): boolean
                            // @ts-ignore
                            public replace(key: java.lang.Object | any, oldValue: java.lang.Object | any, newValue: java.lang.Object | any): boolean
                            // @ts-ignore
                            public replace(key: java.lang.Object | any, value: java.lang.Object | any): any
                            // @ts-ignore
                            public storeToXML(os: java.io.OutputStream, comment: java.lang.String | string, encoding: java.lang.String | string): void
                            // @ts-ignore
                            public storeToXML(os: java.io.OutputStream, comment: java.lang.String | string): void
                            // @ts-ignore
                            public scan(): java.util.Iterator<java.util.Map.Entry<java.lang.Object | any, java.lang.Object | any>>
                        }
                    }
                }
            }
        }
    }
}
