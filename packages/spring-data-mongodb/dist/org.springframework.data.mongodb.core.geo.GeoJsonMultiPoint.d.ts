declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace geo {
                        /**
                         * {@link GeoJsonMultiPoint} is defined as list of {@link Point}s.
                         * @author Christoph Strobl
                         * @since 1.7
                         * @see <a href="https://geojson.org/geojson-spec.html#multipoint">https://geojson.org/geojson-spec.html#multipoint</a>
                         */
                        // @ts-ignore
                        class GeoJsonMultiPoint extends java.lang.Object implements org.springframework.data.mongodb.core.geo.GeoJson<java.lang.Iterable<Point>> {
                            /**
                             * Creates a new {@link GeoJsonMultiPoint} for the given {@link Point}s.
                             * @param points points must not be {#literal null} and have at least 2 entries.
                             */
                            // @ts-ignore
                            constructor(points: java.util.List<Point> | Array<Point>)
                            /**
                             * Creates a new {@link GeoJsonMultiPoint} for the given {@link Point}s.
                             * @param first must not be {#literal null}.
                             * @param second must not be {#literal null}.
                             * @param others must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(first: Point, second: Point, ...others: Point[])
                            // @ts-ignore
                            public getType(): string
                            // @ts-ignore
                            public getCoordinates(): Array<Point>
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
