declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace geo {
                        /**
                         * Interface definition for structures defined in GeoJSON ({@link https://geojson.org/}) format.
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        interface GeoJson<T extends java.lang.Iterable<?>> {
                            /**
                             * String value representing the type of the {@link GeoJson} object.
                             * @return will never be {#literal null}.
                             * @see <a href="https://geojson.org/geojson-spec.html#geojson-objects">https://geojson.org/geojson-spec.html#geojson-objects</a>
                             */
                            // @ts-ignore
                            getType(): string
                            /**
                             * The value of the coordinates member is always an {@link Iterable}. The structure for the elements within is
                             * determined by {@link #getType()} of geometry.
                             * @return will never be {#literal null}.
                             * @see <a href="https://geojson.org/geojson-spec.html#geometry-objects">https://geojson.org/geojson-spec.html#geometry-objects</a>
                             */
                            // @ts-ignore
                            getCoordinates(): T
                        }
                    }
                }
            }
        }
    }
}
