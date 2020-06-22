declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * {@link IndexedData} implementation indicating storage of data within a Redis GEO structure.
                         * @author Christoph Strobl
                         * @since 1.8
                         */
                        // @ts-ignore
                        class GeoIndexedPropertyValue extends java.lang.Object implements org.springframework.data.redis.core.convert.IndexedData {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getIndexName(): string
                            // @ts-ignore
                            public getKeyspace(): string
                            // @ts-ignore
                            public getPoint(): Point
                            // @ts-ignore
                            public static geoIndexName(path: java.lang.String | string): string
                        }
                    }
                }
            }
        }
    }
}
