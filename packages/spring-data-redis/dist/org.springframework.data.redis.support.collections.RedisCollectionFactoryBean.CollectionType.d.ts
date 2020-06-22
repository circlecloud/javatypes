declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace support {
                    namespace collections {
                        namespace RedisCollectionFactoryBean {
                            /**
                             * Collection types supported by this factory.
                             * @author Costin Leau
                             */
                            // @ts-ignore
                            class CollectionType extends java.lang.Enum<org.springframework.data.redis.support.collections.RedisCollectionFactoryBean.CollectionType> {
                                // @ts-ignore
                                readonly LIST: org.springframework.data.redis.support.collections.RedisCollectionFactoryBean.CollectionType
                                // @ts-ignore
                                readonly SET: org.springframework.data.redis.support.collections.RedisCollectionFactoryBean.CollectionType
                                // @ts-ignore
                                readonly ZSET: org.springframework.data.redis.support.collections.RedisCollectionFactoryBean.CollectionType
                                // @ts-ignore
                                readonly MAP: org.springframework.data.redis.support.collections.RedisCollectionFactoryBean.CollectionType
                                // @ts-ignore
                                readonly PROPERTIES: org.springframework.data.redis.support.collections.RedisCollectionFactoryBean.CollectionType
                                // @ts-ignore
                                values(): org.springframework.data.redis.support.collections.RedisCollectionFactoryBean.CollectionType[]
                                // @ts-ignore
                                valueOf(name: java.lang.String | string): org.springframework.data.redis.support.collections.RedisCollectionFactoryBean.CollectionType
                            }
                        }
                    }
                }
            }
        }
    }
}
