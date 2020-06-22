declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace geo {
                        /**
                         * {@link GeoJson} representation of {@link Polygon}. Unlike {@link Polygon} the {@link GeoJsonPolygon} requires a
                         * closed border. Which means that the first and last {@link Point} have to have same coordinate pairs.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.7
                         * @see <a href="https://geojson.org/geojson-spec.html#polygon">https://geojson.org/geojson-spec.html#polygon</a>
                         */
                        // @ts-ignore
                        class GeoJsonPolygon extends Polygon implements org.springframework.data.mongodb.core.geo.GeoJson<java.util.List<org.springframework.data.mongodb.core.geo.GeoJsonLineString> | Array<org.springframework.data.mongodb.core.geo.GeoJsonLineString>> {
                            /**
                             * Creates new {@link GeoJsonPolygon} from the given {@link Point}s.
                             * @param first must not be {#literal null}.
                             * @param second must not be {#literal null}.
                             * @param third must not be {#literal null}.
                             * @param fourth must not be {#literal null}.
                             * @param others can be empty.
                             */
                            // @ts-ignore
                            constructor(first: Point, second: Point, third: Point, fourth: Point, ...others: Point[])
                            /**
                             * Creates new {@link GeoJsonPolygon} from the given {@link Point}s.
                             * @param points must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(points: java.util.List<Point> | Array<Point>)
                            /**
                             * Creates a new {@link GeoJsonPolygon} with an inner ring defined be the given {@link Point}s.
                             * @param first must not be {#literal null}.
                             * @param second must not be {#literal null}.
                             * @param third must not be {#literal null}.
                             * @param fourth must not be {#literal null}.
                             * @param others can be empty.
                             * @return new {#link GeoJsonPolygon}.
                             * @since 1.10
                             */
                            // @ts-ignore
                            public withInnerRing(first: Point, second: Point, third: Point, fourth: Point, ...others: Point[]): org.springframework.data.mongodb.core.geo.GeoJsonPolygon
                            /**
                             * Creates a new {@link GeoJsonPolygon} with an inner ring defined be the given {@link List} of {@link Point}s.
                             * @param points must not be {#literal null}.
                             * @return new {#link GeoJsonPolygon}.
                             */
                            // @ts-ignore
                            public withInnerRing(points: java.util.List<Point> | Array<Point>): org.springframework.data.mongodb.core.geo.GeoJsonPolygon
                            /**
                             * Creates a new {@link GeoJsonPolygon} with an inner ring defined be the given {@link GeoJsonLineString}.
                             * @param lineString must not be {#literal null}.
                             * @return new {#link GeoJsonPolygon}.
                             * @since 1.10
                             */
                            // @ts-ignore
                            public withInnerRing(lineString: org.springframework.data.mongodb.core.geo.GeoJsonLineString): org.springframework.data.mongodb.core.geo.GeoJsonPolygon
                            // @ts-ignore
                            public getType(): string
                            // @ts-ignore
                            public getCoordinates(): Array<org.springframework.data.mongodb.core.geo.GeoJsonLineString>
                        }
                    }
                }
            }
        }
    }
}
