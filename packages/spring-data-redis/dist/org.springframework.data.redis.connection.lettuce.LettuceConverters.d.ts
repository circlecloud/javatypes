declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace lettuce {
                        /**
                         * Lettuce type converters
                         * @author Jennifer Hickey
                         * @author Christoph Strobl
                         * @author Thomas Darimont
                         * @author Mark Paluch
                         * @author Ninad Divadkar
                         */
                        // @ts-ignore
                        abstract class LettuceConverters extends org.springframework.data.redis.connection.convert.Converters {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public static readonly PLUS_BYTES: number /*byte*/[]
                            // @ts-ignore
                            public static readonly MINUS_BYTES: number /*byte*/[]
                            // @ts-ignore
                            public static readonly POSITIVE_INFINITY_BYTES: number /*byte*/[]
                            // @ts-ignore
                            public static readonly NEGATIVE_INFINITY_BYTES: number /*byte*/[]
                            // @ts-ignore
                            public static toTuple(list: java.util.List<number /*byte*/[]> | Array<number /*byte*/[]>): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                            // @ts-ignore
                            public static bytesListToTupleListConverter(): object
                            // @ts-ignore
                            public static geoCoordinatesToPoint(geoCoordinates: GeoCoordinates): Point
                            // @ts-ignore
                            public static stringToRedisClientListConverter(): object
                            // @ts-ignore
                            public static dateToLong(): object
                            // @ts-ignore
                            public static bytesListToBytesSet(): object
                            // @ts-ignore
                            public static bytesToString(): object
                            // @ts-ignore
                            public static keyValueToBytesList(): object
                            // @ts-ignore
                            public static bytesSetToBytesList(): object
                            // @ts-ignore
                            public static bytesCollectionToBytesList(): object
                            // @ts-ignore
                            public static scoredValuesToTupleSet(): object
                            // @ts-ignore
                            public static scoredValuesToTupleList(): object
                            // @ts-ignore
                            public static scoredValueToTuple(): object
                            // @ts-ignore
                            public static exceptionConverter(): object
                            /**
                             * @return 
                             * @sice 1.3
                             */
                            // @ts-ignore
                            public static longToBooleanConverter(): object
                            // @ts-ignore
                            public static toLong(source: java.util.Date): number
                            // @ts-ignore
                            public static toBytesSet(source: java.util.List<number /*byte*/[]> | Array<number /*byte*/[]>): Array<number /*byte*/[]>
                            // @ts-ignore
                            public static toBytesList(source: object): Array<number /*byte*/[]>
                            // @ts-ignore
                            public static toTupleSet(source: java.util.List<object> | Array<object>): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                            // @ts-ignore
                            public static toTuple(source: object): org.springframework.data.redis.connection.RedisZSetCommands.Tuple
                            // @ts-ignore
                            public static toString(source: number /*byte*/[]): string
                            // @ts-ignore
                            public static toScriptOutputType(returnType: org.springframework.data.redis.connection.ReturnType): ScriptOutputType
                            // @ts-ignore
                            public static toBoolean(where: org.springframework.data.redis.connection.RedisListCommands.Position): boolean
                            // @ts-ignore
                            public static toInt(value: boolean): number /*int*/
                            // @ts-ignore
                            public static toMap(source: java.util.List<number /*byte*/[]> | Array<number /*byte*/[]>): java.util.Map<number /*byte*/[], number /*byte*/[]>
                            // @ts-ignore
                            public static bytesListToMapConverter(): object
                            // @ts-ignore
                            public static toSortArgs(params: org.springframework.data.redis.connection.SortParameters): SortArgs
                            // @ts-ignore
                            public static toListOfRedisClientInformation(clientList: java.lang.String | string): Array<org.springframework.data.redis.core.types.RedisClientInfo>
                            // @ts-ignore
                            public static subarray(input: number /*byte*/[][], index: number /*int*/): number /*byte*/[][]
                            // @ts-ignore
                            public static boundaryToStringForZRange(boundary: org.springframework.data.redis.connection.RedisZSetCommands.Range.Boundary, defaultValue: java.lang.String | string): string
                            /**
                             * Convert a {@link org.springframework.data.redis.connection.RedisZSetCommands.Limit} to a lettuce
                             * {@link io.lettuce.core.Limit}.
                             * @param limit
                             * @return a lettuce {#link io.lettuce.core.Limit}.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public static toLimit(limit: org.springframework.data.redis.connection.RedisZSetCommands.Limit): io.lettuce.core.Limit
                            /**
                             * Convert a {@link org.springframework.data.redis.connection.RedisZSetCommands.Range} to a lettuce {@link Range}.
                             * @param range
                             * @return 
                             * @since 2.0
                             */
                            // @ts-ignore
                            public static toRange<T>(range: org.springframework.data.redis.connection.RedisZSetCommands.Range): object
                            /**
                             * Convert a {@link org.springframework.data.redis.connection.RedisZSetCommands.Range} to a lettuce {@link Range} and
                             * reverse boundaries.
                             * @param range
                             * @return 
                             * @since 2.0
                             */
                            // @ts-ignore
                            public static toRevRange<T>(range: org.springframework.data.redis.connection.RedisZSetCommands.Range): object
                            /**
                             * @param source List of Maps containing node details from SENTINEL SLAVES or SENTINEL MASTERS. May be empty or
                             *           {#literal null}.
                             * @return List of {#link RedisServer}'s. List is empty if List of Maps is empty.
                             * @since 1.5
                             */
                            // @ts-ignore
                            public static toListOfRedisServer(source: java.util.List<java.util.Map<java.lang.String | string, java.lang.String | string>> | Array<java.util.Map<java.lang.String | string, java.lang.String | string>>): Array<org.springframework.data.redis.connection.RedisServer>
                            /**
                             * @param sentinelConfiguration the sentinel configuration containing one or more sentinels and a master name. Must
                             *           not be {#literal null}
                             * @return A {#link RedisURI} containing Redis Sentinel addresses of {@link RedisSentinelConfiguration}
                             * @since 1.5
                             */
                            // @ts-ignore
                            public static sentinelConfigurationToRedisURI(sentinelConfiguration: org.springframework.data.redis.connection.RedisSentinelConfiguration): RedisURI
                            // @ts-ignore
                            public static toBytes(source: java.lang.String | string): number /*byte*/[]
                            // @ts-ignore
                            public static toBytes(source: java.lang.Integer | number): number /*byte*/[]
                            // @ts-ignore
                            public static toBytes(source: java.lang.Long | number): number /*byte*/[]
                            /**
                             * @param source
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            public static toBytes(source: java.lang.Double | number): number /*byte*/[]
                            /**
                             * Converts a given {@link Boundary} to its binary representation suitable for {@literal ZRANGEBY*} commands, despite
                             * {@literal ZRANGEBYLEX}.
                             * @param boundary
                             * @param defaultValue
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            public static boundaryToBytesForZRange(boundary: org.springframework.data.redis.connection.RedisZSetCommands.Range.Boundary, defaultValue: number /*byte*/[]): string
                            /**
                             * Converts a given {@link Boundary} to its binary representation suitable for ZRANGEBYLEX command.
                             * @param boundary
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            public static boundaryToBytesForZRangeByLex(boundary: org.springframework.data.redis.connection.RedisZSetCommands.Range.Boundary, defaultValue: number /*byte*/[]): string
                            // @ts-ignore
                            public static partitionsToClusterNodes(partitions: Partitions): Array<org.springframework.data.redis.connection.RedisClusterNode>
                            /**
                             * @param source
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public static toRedisClusterNode(source: io.lettuce.core.cluster.models.partitions.RedisClusterNode): org.springframework.data.redis.connection.RedisClusterNode
                            /**
                             * Converts a given {@link Expiration} and {@link SetOption} to the according {@link SetArgs}.<br />
                             * @param expiration can be {#literal null}.
                             * @param option can be {#literal null}.
                             * @since 1.7
                             */
                            // @ts-ignore
                            public static toSetArgs(expiration: org.springframework.data.redis.core.types.Expiration, option: org.springframework.data.redis.connection.RedisStringCommands.SetOption): SetArgs
                            /**
                             * Convert {@link Metric} into {@link GeoArgs.Unit}.
                             * @param metric
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static toGeoArgsUnit(metric: Metric): GeoArgs.Unit
                            /**
                             * Convert {@link GeoRadiusCommandArgs} into {@link GeoArgs}.
                             * @param args
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static toGeoArgs(args: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): GeoArgs
                            /**
                             * Convert {@link BitFieldSubCommands} into {@link BitFieldArgs}.
                             * @param subCommands
                             * @return 
                             * @since 2.1
                             */
                            // @ts-ignore
                            public static toBitFieldArgs(subCommands: org.springframework.data.redis.connection.BitFieldSubCommands): BitFieldArgs
                            /**
                             * Get {@link Converter} capable of {@link Set} of {@link Byte} into {@link GeoResults}.
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static bytesSetToGeoResultsConverter(): object
                            /**
                             * Get {@link Converter} capable of convering {@link GeoWithin} into {@link GeoResults}.
                             * @param metric
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static geoRadiusResponseToGeoResultsConverter(metric: Metric): object
                            /**
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static geoCoordinatesToPointConverter(): org.springframework.data.redis.connection.convert.ListConverter<io.lettuce.core.GeoCoordinates, Point>
                            /**
                             * @return 
                             * @since 2.0
                             */
                            // @ts-ignore
                            public static keyValueListUnwrapper<K, V>(): org.springframework.data.redis.connection.convert.ListConverter<object, V>
                            // @ts-ignore
                            public static transactionResultUnwrapper(): object
                        }
                    }
                }
            }
        }
    }
}
