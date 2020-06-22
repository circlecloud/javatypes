declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace convert {
                        /**
                         * Common type converters
                         * @author Jennifer Hickey
                         * @author Thomas Darimont
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        abstract class Converters extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public static stringToBoolean(s: java.lang.String | string): java.lang.Boolean
                            // @ts-ignore
                            public static stringToBooleanConverter(): object
                            // @ts-ignore
                            public static stringToProps(): object
                            // @ts-ignore
                            public static longToBoolean(): object
                            // @ts-ignore
                            public static stringToDataType(): object
                            // @ts-ignore
                            public static toProperties(source: java.lang.String | string): java.util.Properties
                            // @ts-ignore
                            public static toProperties(source: java.util.Map<any, any>): java.util.Properties
                            // @ts-ignore
                            public static toBoolean(source: java.lang.Long | number): java.lang.Boolean
                            // @ts-ignore
                            public static toDataType(source: java.lang.String | string): org.springframework.data.redis.connection.DataType
                            // @ts-ignore
                            public static toBit(source: java.lang.Boolean): number /*byte*/[]
                            /**
                             * Converts the result of a single line of {@code CLUSTER NODES} into a {@link RedisClusterNode}.
                             * @param clusterNodesLine
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            static toClusterNode(clusterNodesLine: java.lang.String | string): org.springframework.data.redis.connection.RedisClusterNode
                            /**
                             * Converts lines from the result of {@code CLUSTER NODES} into {@link RedisClusterNode}s.
                             * @param lines
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public static toSetOfRedisClusterNodes(lines: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>): Array<org.springframework.data.redis.connection.RedisClusterNode>
                            /**
                             * Converts the result of {@code CLUSTER NODES} into {@link RedisClusterNode}s.
                             * @param clusterNodes
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public static toSetOfRedisClusterNodes(clusterNodes: java.lang.String | string): Array<org.springframework.data.redis.connection.RedisClusterNode>
                            // @ts-ignore
                            public static toObjects(tuples: java.util.Set<org.springframework.data.redis.connection.RedisZSetCommands.Tuple> | Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>): Array<java.lang.Object | any>
                            /**
                             * Returns the timestamp constructed from the given {@code seconds} and {@code microseconds}.
                             * @param seconds server time in seconds
                             * @param microseconds elapsed microseconds in current second
                             * @return 
                             */
                            // @ts-ignore
                            public static toTimeMillis(seconds: java.lang.String | string, microseconds: java.lang.String | string): number
                            /**
                             * Converts {@code seconds} to the given {@link TimeUnit}.
                             * @param seconds
                             * @param targetUnit must not be {#literal null}.
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static secondsToTimeUnit(seconds: number /*long*/, targetUnit: java.util.concurrent.TimeUnit): number /*long*/
                            /**
                             * Creates a new {@link Converter} to convert from seconds to the given {@link TimeUnit}.
                             * @param timeUnit muist not be {#literal null}.
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static secondsToTimeUnit(timeUnit: java.util.concurrent.TimeUnit): object
                            /**
                             * Converts {@code milliseconds} to the given {@link TimeUnit}.
                             * @param milliseconds
                             * @param targetUnit must not be {#literal null}.
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static millisecondsToTimeUnit(milliseconds: number /*long*/, targetUnit: java.util.concurrent.TimeUnit): number /*long*/
                            /**
                             * Creates a new {@link Converter} to convert from milliseconds to the given {@link TimeUnit}.
                             * @param timeUnit muist not be {#literal null}.
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static millisecondsToTimeUnit(timeUnit: java.util.concurrent.TimeUnit): object
                            /**
                             * {@link Converter} capable of deserializing {@link GeoResults}.
                             * @param serializer
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static deserializingGeoResultsConverter<V>(serializer: org.springframework.data.redis.serializer.RedisSerializer<V>): object
                            /**
                             * {@link Converter} capable of converting Double into {@link Distance} using given {@link Metric}.
                             * @param metric
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static distanceConverterForMetric(metric: Metric): object
                            /**
                             * Converts array outputs with key-value sequences (such as produced by {@code CONFIG GET}) from a {@link List} to
                             * {@link Properties}.
                             * @param input must not be {#literal null}.
                             * @return the mapped result.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public static toProperties(input: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): java.util.Properties
                            /**
                             * Returns a converter to convert array outputs with key-value sequences (such as produced by {@code CONFIG GET}) from
                             * a {@link List} to {@link Properties}.
                             * @return the converter.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public static listToPropertiesConverter(): object
                            /**
                             * Returns a converter to convert from {@link Map} to {@link Properties}.
                             * @return the converter.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public static mapToPropertiesConverter<K, V>(): object
                            /**
                             * Convert the given {@literal nullable seconds} to a {@link Duration} or {@literal null}.
                             * @param seconds can be {#literal null}.
                             * @return given {#literal seconds} as {@link Duration} or {@literal null}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public static secondsToDuration(seconds: java.lang.Long | number): java.time.Duration
                        }
                    }
                }
            }
        }
    }
}
