declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * Geoposatial index type.
                         * @author Laurent Canet
                         * @author Oliver Gierke
                         * @since 1.4
                         */
                        // @ts-ignore
                        class GeoSpatialIndexType extends java.lang.Enum<org.springframework.data.mongodb.core.index.GeoSpatialIndexType> {
                            /**
                             * Simple 2-Dimensional index for legacy-format points.
                             */
                            // @ts-ignore
                            readonly GEO_2D: org.springframework.data.mongodb.core.index.GeoSpatialIndexType
                            /**
                             * 2D Index for GeoJSON-formatted data over a sphere. Only available in Mongo 2.4.
                             */
                            // @ts-ignore
                            readonly GEO_2DSPHERE: org.springframework.data.mongodb.core.index.GeoSpatialIndexType
                            /**
                             * An haystack index for grouping results over small results.
                             */
                            // @ts-ignore
                            readonly GEO_HAYSTACK: org.springframework.data.mongodb.core.index.GeoSpatialIndexType
                            // @ts-ignore
                            values(): org.springframework.data.mongodb.core.index.GeoSpatialIndexType[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.data.mongodb.core.index.GeoSpatialIndexType
                        }
                    }
                }
            }
        }
    }
}
