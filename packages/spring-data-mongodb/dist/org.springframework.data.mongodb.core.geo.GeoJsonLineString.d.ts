declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace geo {
                        /**
                         * {@link GeoJsonLineString} is defined as list of at least 2 {@link Point}s.
                         * @author Christoph Strobl
                         * @since 1.7
                         * @see <a href="https://geojson.org/geojson-spec.html#linestring">https://geojson.org/geojson-spec.html#linestring</a>
                         */
                        // @ts-ignore
                        class GeoJsonLineString extends org.springframework.data.mongodb.core.geo.GeoJsonMultiPoint {
                            /**
                             * Creates a new {@link GeoJsonLineString} for the given {@link Point}s.
                             * @param points must not be {#literal null} and have at least 2 entries.
                             */
                            // @ts-ignore
                            constructor(points: java.util.List<Point> | Array<Point>)
                            /**
                             * Creates a new {@link GeoJsonLineString} for the given {@link Point}s.
                             * @param first must not be {#literal null}
                             * @param second must not be {#literal null}
                             * @param others can be {#literal null}
                             */
                            // @ts-ignore
                            constructor(first: Point, second: Point, ...others: Point[])
                            // @ts-ignore
                            public getType(): string
                        }
                    }
                }
            }
        }
    }
}
