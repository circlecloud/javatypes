declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace geo {
                        /**
                         * Defines a {@link GeoJsonGeometryCollection} that consists of a {@link List} of {@link GeoJson} objects.
                         * @author Christoph Strobl
                         * @since 1.7
                         * @see <a href="https://geojson.org/geojson-spec.html#geometry-collection">https://geojson.org/geojson-spec.html#geometry-collection</a>
                         */
                        // @ts-ignore
                        class GeoJsonGeometryCollection extends java.lang.Object implements org.springframework.data.mongodb.core.geo.GeoJson<java.lang.Iterable<org.springframework.data.mongodb.core.geo.GeoJson<any>>> {
                            /**
                             * Creates a new {@link GeoJsonGeometryCollection} for the given {@link GeoJson} instances.
                             * @param geometries
                             */
                            // @ts-ignore
                            constructor(geometries: java.util.List<org.springframework.data.mongodb.core.geo.GeoJson<any>> | Array<org.springframework.data.mongodb.core.geo.GeoJson<any>>)
                            // @ts-ignore
                            public getType(): string
                            // @ts-ignore
                            public getCoordinates(): java.lang.Iterable<org.springframework.data.mongodb.core.geo.GeoJson<any>>
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
