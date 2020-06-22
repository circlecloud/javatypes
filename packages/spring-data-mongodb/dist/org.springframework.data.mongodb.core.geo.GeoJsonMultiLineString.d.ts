declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace geo {
                        /**
                         * {@link GeoJsonMultiLineString} is defined as list of {@link GeoJsonLineString}s.
                         * @author Christoph Strobl
                         * @since 1.7
                         * @see <a href="https://geojson.org/geojson-spec.html#multilinestring">https://geojson.org/geojson-spec.html#multilinestring</a>
                         */
                        // @ts-ignore
                        class GeoJsonMultiLineString extends java.lang.Object implements org.springframework.data.mongodb.core.geo.GeoJson<java.lang.Iterable<org.springframework.data.mongodb.core.geo.GeoJsonLineString>> {
                            /**
                             * Creates new {@link GeoJsonMultiLineString} for the given {@link Point}s.
                             * @param lines must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(...lines: java.util.List<Point>[] | Array<Point>[])
                            /**
                             * Creates new {@link GeoJsonMultiLineString} for the given {@link GeoJsonLineString}s.
                             * @param lines must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(lines: java.util.List<org.springframework.data.mongodb.core.geo.GeoJsonLineString> | Array<org.springframework.data.mongodb.core.geo.GeoJsonLineString>)
                            // @ts-ignore
                            public getType(): string
                            // @ts-ignore
                            public getCoordinates(): java.lang.Iterable<org.springframework.data.mongodb.core.geo.GeoJsonLineString>
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
