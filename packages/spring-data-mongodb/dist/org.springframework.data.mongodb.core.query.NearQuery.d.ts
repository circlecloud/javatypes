declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * Builder class to build near-queries.
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class NearQuery extends java.lang.Object {
                            /**
                             * Creates a new {@link NearQuery} starting near the given coordinates.
                             * @param x
                             * @param y
                             * @return 
                             */
                            // @ts-ignore
                            public static near(x: number /*double*/, y: number /*double*/): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Creates a new {@link NearQuery} starting at the given coordinates using the given {@link Metric} to adapt given
                             * values to further configuration. E.g. setting a {@link #maxDistance(double)} will be interpreted as a value of the
                             * initially set {@link Metric}.
                             * @param x
                             * @param y
                             * @param metric must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static near(x: number /*double*/, y: number /*double*/, metric: Metric): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Creates a new {@link NearQuery} starting at the given {@link Point}.
                             * @param point must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static near(point: Point): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Creates a {@link NearQuery} starting near the given {@link Point} using the given {@link Metric} to adapt given
                             * values to further configuration. E.g. setting a {@link #maxDistance(double)} will be interpreted as a value of the
                             * initially set {@link Metric}.
                             * @param point must not be {#literal null}.
                             * @param metric must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public static near(point: Point, metric: Metric): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Returns the {@link Metric} underlying the actual query. If no metric was set explicitly {@link Metrics#NEUTRAL}
                             * will be returned.
                             * @return will never be {#literal null}.
                             */
                            // @ts-ignore
                            public getMetric(): Metric
                            /**
                             * Configures the maximum number of results to return.
                             * @param num
                             * @return 
                             */
                            // @ts-ignore
                            public num(num: number /*long*/): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Configures the number of results to skip.
                             * @param skip
                             * @return 
                             */
                            // @ts-ignore
                            public skip(skip: number /*long*/): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Configures the {@link Pageable} to use.
                             * @param pageable must not be {#literal null}
                             * @return 
                             */
                            // @ts-ignore
                            public with(pageable: Pageable): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Sets the max distance results shall have from the configured origin. If a {@link Metric} was set before the given
                             * value will be interpreted as being a value in that metric. E.g.
                             * <pre>
                             * NearQuery query = near(10.0, 20.0, Metrics.KILOMETERS).maxDistance(150);
                             * </pre>
                             * Will set the maximum distance to 150 kilometers.
                             * @param maxDistance
                             * @return 
                             */
                            // @ts-ignore
                            public maxDistance(maxDistance: number /*double*/): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Sets the maximum distance supplied in a given metric. Will normalize the distance but not reconfigure the query's
                             * result {@link Metric} if one was configured before.
                             * @param maxDistance
                             * @param metric must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public maxDistance(maxDistance: number /*double*/, metric: Metric): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Sets the maximum distance to the given {@link Distance}. Will set the returned {@link Metric} to be the one of the
                             * given {@link Distance} if {@link Metric} was {@link Metrics#NEUTRAL} before.
                             * @param distance must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public maxDistance(distance: Distance): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Sets the minimum distance results shall have from the configured origin. If a {@link Metric} was set before the
                             * given value will be interpreted as being a value in that metric. E.g.
                             * <pre>
                             * NearQuery query = near(10.0, 20.0, Metrics.KILOMETERS).minDistance(150);
                             * </pre>
                             * Will set the minimum distance to 150 kilometers.
                             * @param minDistance
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public minDistance(minDistance: number /*double*/): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Sets the minimum distance supplied in a given metric. Will normalize the distance but not reconfigure the query's
                             * result {@link Metric} if one was configured before.
                             * @param minDistance
                             * @param metric must not be {#literal null}.
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public minDistance(minDistance: number /*double*/, metric: Metric): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Sets the minimum distance to the given {@link Distance}. Will set the returned {@link Metric} to be the one of the
                             * given {@link Distance} if no {@link Metric} was set before.
                             * @param distance must not be {#literal null}.
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public minDistance(distance: Distance): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Returns the maximum {@link Distance}.
                             * @return 
                             */
                            // @ts-ignore
                            public getMaxDistance(): Distance
                            /**
                             * Returns the maximum {@link Distance}.
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public getMinDistance(): Distance
                            /**
                             * Configures a {@link CustomMetric} with the given multiplier.
                             * @param distanceMultiplier
                             * @return 
                             */
                            // @ts-ignore
                            public distanceMultiplier(distanceMultiplier: number /*double*/): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Configures whether to return spherical values for the actual distance.
                             * @param spherical
                             * @return 
                             */
                            // @ts-ignore
                            public spherical(spherical: boolean): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Returns whether spharical values will be returned.
                             * @return 
                             */
                            // @ts-ignore
                            public isSpherical(): boolean
                            /**
                             * Will cause the results' distances being returned in kilometers. Sets {@link #distanceMultiplier(double)} and
                             * {@link #spherical(boolean)} accordingly.
                             * @return 
                             */
                            // @ts-ignore
                            public inKilometers(): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Will cause the results' distances being returned in miles. Sets {@link #distanceMultiplier(double)} and
                             * {@link #spherical(boolean)} accordingly.
                             * @return 
                             */
                            // @ts-ignore
                            public inMiles(): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Will cause the results' distances being returned in the given metric. Sets {@link #distanceMultiplier(double)}
                             * accordingly as well as {@link #spherical(boolean)} if the given {@link Metric} is not {@link Metrics#NEUTRAL}.
                             * @param metric the metric the results shall be returned in. Uses {#link Metrics#NEUTRAL} if {@literal null} is
                             *           passed.
                             * @return 
                             */
                            // @ts-ignore
                            public in(metric: Metric): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * Adds an actual query to the {@link NearQuery} to restrict the objects considered for the actual near operation.
                             * @param query must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public query(query: org.springframework.data.mongodb.core.query.Query): org.springframework.data.mongodb.core.query.NearQuery
                            /**
                             * @return the number of elements to skip.
                             */
                            // @ts-ignore
                            public getSkip(): number
                            /**
                             * Returns the {@link Document} built by the {@link NearQuery}.
                             * @return 
                             */
                            // @ts-ignore
                            public toDocument(): Document
                        }
                    }
                }
            }
        }
    }
}
