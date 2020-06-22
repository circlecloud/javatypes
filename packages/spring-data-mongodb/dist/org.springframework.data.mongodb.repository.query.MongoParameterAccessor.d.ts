declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace query {
                        /**
                         * Mongo-specific {@link ParameterAccessor} exposing a maximum distance parameter.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Thomas Darimont
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        interface MongoParameterAccessor {
                            /**
                             * Returns a {@link Distance} to be applied to Mongo geo queries.
                             * @return the maximum distance to apply to the geo query or {#literal null} if there's no {@link Distance} parameter
                             *          at all or the given value for it was {@literal null}.
                             */
                            // @ts-ignore
                            getDistanceRange(): object
                            /**
                             * Returns the {@link Point} to use for a geo-near query.
                             * @return 
                             */
                            // @ts-ignore
                            getGeoNearLocation(): Point
                            /**
                             * Returns the {@link TextCriteria} to be used for full text query.
                             * @return null if not set.
                             * @since 1.6
                             */
                            // @ts-ignore
                            getFullText(): org.springframework.data.mongodb.core.query.TextCriteria
                            /**
                             * Returns the raw parameter values of the underlying query method.
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            getValues(): any[]
                        }
                    }
                }
            }
        }
    }
}
