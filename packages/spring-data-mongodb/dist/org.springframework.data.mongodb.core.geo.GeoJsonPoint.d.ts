declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace geo {
                        /**
                         * {@link GeoJson} representation of {@link Point}.
                         * @author Christoph Strobl
                         * @since 1.7
                         * @see <a href="https://geojson.org/geojson-spec.html#point">https://geojson.org/geojson-spec.html#point</a>
                         */
                        // @ts-ignore
                        class GeoJsonPoint extends Point implements org.springframework.data.mongodb.core.geo.GeoJson<java.util.List<java.lang.Double | number> | Array<java.lang.Double | number>> {
                            /**
                             * Creates {@link GeoJsonPoint} for given coordinates.
                             * @param x
                             * @param y
                             */
                            // @ts-ignore
                            constructor(x: number /*double*/, y: number /*double*/)
                            /**
                             * Creates {@link GeoJsonPoint} for given {@link Point}.
                             * @param point must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(point: Point)
                            // @ts-ignore
                            public getType(): string
                            // @ts-ignore
                            public getCoordinates(): Array<java.lang.Double | number>
                        }
                    }
                }
            }
        }
    }
}
