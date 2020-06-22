declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace convert {
                        /**
                         * @author Christoph Strobl
                         * @since 1.4
                         */
                        // @ts-ignore
                        class MapToPropertiesConverter extends java.lang.Enum<org.springframework.data.redis.connection.convert.MapToPropertiesConverter> {
                            // @ts-ignore
                            readonly INSTANCE: org.springframework.data.redis.connection.convert.MapToPropertiesConverter
                            // @ts-ignore
                            values(): org.springframework.data.redis.connection.convert.MapToPropertiesConverter[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.data.redis.connection.convert.MapToPropertiesConverter
                            // @ts-ignore
                            convert(source: java.util.Map<any, any>): java.util.Properties
                        }
                    }
                }
            }
        }
    }
}
