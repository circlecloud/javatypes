declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace geo {
                        /**
                         * {@link GeoJsonMultiPolygon} is defined as a list of {@link GeoJsonPolygon}s.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        class GeoJsonMultiPolygon extends java.lang.Object implements org.springframework.data.mongodb.core.geo.GeoJson<java.lang.Iterable<org.springframework.data.mongodb.core.geo.GeoJsonPolygon>> {
                            /**
                             * Creates a new {@link GeoJsonMultiPolygon} for the given {@link GeoJsonPolygon}s.
                             * @param polygons must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(polygons: java.util.List<org.springframework.data.mongodb.core.geo.GeoJsonPolygon> | Array<org.springframework.data.mongodb.core.geo.GeoJsonPolygon>)
                            // @ts-ignore
                            public getType(): string
                            // @ts-ignore
                            public getCoordinates(): Array<org.springframework.data.mongodb.core.geo.GeoJsonPolygon>
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                        }
                    }
                }
            }
        }
    }
}
