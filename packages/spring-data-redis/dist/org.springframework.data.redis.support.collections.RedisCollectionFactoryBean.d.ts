declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace support {
                    namespace collections {
                        /**
                         * Factory bean that facilitates creation of Redis-based collections. Supports list, set, zset (or sortedSet), map (or
                         * hash) and properties. Will use the key type if it exists or to create a dedicated collection (Properties vs Map).
                         * Otherwise uses the provided type (default is list).
                         * @author Costin Leau
                         */
                        // @ts-ignore
                        class RedisCollectionFactoryBean extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public afterPropertiesSet(): void
                            // @ts-ignore
                            public getObject(): org.springframework.data.redis.support.collections.RedisStore
                            // @ts-ignore
                            public getObjectType(): java.lang.Class<any>
                            // @ts-ignore
                            public isSingleton(): boolean
                            // @ts-ignore
                            public setBeanName(name: java.lang.String | string): void
                            /**
                             * Sets the store type. Used if the key does not exist.
                             * @param type The type to set.
                             */
                            // @ts-ignore
                            public setType(type: org.springframework.data.redis.support.collections.RedisCollectionFactoryBean.CollectionType): void
                            /**
                             * Sets the template used by the resulting store.
                             * @param template The template to set.
                             */
                            // @ts-ignore
                            public setTemplate(template: org.springframework.data.redis.core.RedisTemplate<java.lang.String | string, any>): void
                            /**
                             * Sets the key of the store.
                             * @param key The key to set.
                             */
                            // @ts-ignore
                            public setKey(key: java.lang.String | string): void
                        }
                    }
                }
            }
        }
    }
}
