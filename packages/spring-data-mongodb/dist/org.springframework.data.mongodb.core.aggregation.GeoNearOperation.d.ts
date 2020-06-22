declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        /**
                         * Represents a {@code geoNear} aggregation operation.
                         * <p>
                         * We recommend to use the static factory method {@link Aggregation#geoNear(NearQuery, String)} instead of creating
                         * instances of this class directly.
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @since 1.3
                         * @see <a href="https://docs.mongodb.com/manual/reference/operator/aggregation/geoNear/">MongoDB Aggregation Framework:
                         *       $geoNear</a>
                         */
                        // @ts-ignore
                        class GeoNearOperation extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.AggregationOperation {
                            /**
                             * Creates a new {@link GeoNearOperation} from the given {@link NearQuery} and the given distance field. The
                             * {@code distanceField} defines output field that contains the calculated distance.
                             * @param nearQuery must not be {#literal null}.
                             * @param distanceField must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(nearQuery: org.springframework.data.mongodb.core.query.NearQuery, distanceField: java.lang.String | string)
                            /**
                             * Optionally specify the geospatial index to use via the field to use in the calculation. <br />
                             * <strong>NOTE:</strong> Requires MongoDB 4.0 or later.
                             * @param key the geospatial index field to use when calculating the distance.
                             * @return new instance of {#link GeoNearOperation}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public useIndex(key: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.GeoNearOperation
                            // @ts-ignore
                            public toDocument(context: org.springframework.data.mongodb.core.aggregation.AggregationOperationContext): Document
                        }
                    }
                }
            }
        }
    }
}
