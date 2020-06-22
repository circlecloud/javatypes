declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace jedis {
                        /**
                         * Jedis type converters.
                         * @author Jennifer Hickey
                         * @author Christoph Strobl
                         * @author Thomas Darimont
                         * @author Jungtaek Lim
                         * @author Mark Paluch
                         * @author Ninad Divadkar
                         */
                        // @ts-ignore
                        abstract class JedisConverters extends org.springframework.data.redis.connection.convert.Converters {
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
                            public static stringToBytes(): object
                            /**
                             * {@link ListConverter} converting jedis {@link redis.clients.jedis.Tuple} to {@link Tuple}.
                             * @return 
                             * @since 1.4
                             */
                            // @ts-ignore
                            public static tuplesToTuples(): org.springframework.data.redis.connection.convert.ListConverter<redis.clients.jedis.Tuple, org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                            // @ts-ignore
                            public static stringListToByteList(): org.springframework.data.redis.connection.convert.ListConverter<java.lang.String | string, number /*byte*/[]>
                            // @ts-ignore
                            public static stringSetToByteSet(): org.springframework.data.redis.connection.convert.SetConverter<java.lang.String | string, number /*byte*/[]>
                            // @ts-ignore
                            public static stringMapToByteMap(): org.springframework.data.redis.connection.convert.MapConverter<java.lang.String | string, number /*byte*/[]>
                            // @ts-ignore
                            public static tupleSetToTupleSet(): org.springframework.data.redis.connection.convert.SetConverter<redis.clients.jedis.Tuple, org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                            // @ts-ignore
                            public static exceptionConverter(): object
                            // @ts-ignore
                            public static toStrings(source: number /*byte*/[][]): string[]
                            // @ts-ignore
                            public static toTupleSet(source: java.util.Set<redis.clients.jedis.Tuple> | Array<redis.clients.jedis.Tuple>): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                            /**
                             * Map a {@link Set} of {@link Tuple} by {@code value} to its {@code score}.
                             * @param tuples must not be {#literal null}.
                             * @return 
                             * @since 2.0
                             */
                            // @ts-ignore
                            public static toTupleMap(tuples: java.util.Set<org.springframework.data.redis.connection.RedisZSetCommands.Tuple> | Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>): java.util.Map<number /*byte*/[], java.lang.Double | number>
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
                            // @ts-ignore
                            public static toBytes(source: java.lang.String | string): number /*byte*/[]
                            // @ts-ignore
                            public static toString(source: number /*byte*/[]): string
                            /**
                             * Convert the given {@code source} value to the corresponding {@link ValueEncoding}.
                             * @param source can be {#literal null}.
                             * @return the {#link ValueEncoding} for given {@code source}. Never {@literal null}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public static toEncoding(source: number /*byte*/[]): org.springframework.data.redis.connection.ValueEncoding
                            /**
                             * @param source
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public static toNode(source: java.lang.Object | any): org.springframework.data.redis.connection.RedisClusterNode
                            /**
                             * @param source
                             * @return 
                             * @since 1.3
                             */
                            // @ts-ignore
                            public static toListOfRedisClientInformation(source: java.lang.String | string): Array<org.springframework.data.redis.core.types.RedisClientInfo>
                            /**
                             * @param source
                             * @return 
                             * @since 1.4
                             */
                            // @ts-ignore
                            public static toListOfRedisServer(source: java.util.List<java.util.Map<java.lang.String | string, java.lang.String | string>> | Array<java.util.Map<java.lang.String | string, java.lang.String | string>>): Array<org.springframework.data.redis.connection.RedisServer>
                            // @ts-ignore
                            public static toDataAccessException(ex: java.lang.Exception): DataAccessException
                            // @ts-ignore
                            public static toListPosition(source: org.springframework.data.redis.connection.RedisListCommands.Position): LIST_POSITION
                            // @ts-ignore
                            public static toByteArrays(source: java.util.Map<number /*byte*/[], number /*byte*/[]>): number /*byte*/[][]
                            // @ts-ignore
                            public static toSortingParams(params: org.springframework.data.redis.connection.SortParameters): SortingParams
                            // @ts-ignore
                            public static toBitOp(bitOp: org.springframework.data.redis.connection.RedisStringCommands.BitOperation): BitOP
                            /**
                             * Converts a given {@link Boundary} to its binary representation suitable for {@literal ZRANGEBY*} commands, despite
                             * {@literal ZRANGEBYLEX}.
                             * @param boundary
                             * @param defaultValue
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            public static boundaryToBytesForZRange(boundary: org.springframework.data.redis.connection.RedisZSetCommands.Range.Boundary, defaultValue: number /*byte*/[]): number /*byte*/[]
                            /**
                             * Converts a given {@link Boundary} to its binary representation suitable for ZRANGEBYLEX command.
                             * @param boundary
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            public static boundaryToBytesForZRangeByLex(boundary: org.springframework.data.redis.connection.RedisZSetCommands.Range.Boundary, defaultValue: number /*byte*/[]): number /*byte*/[]
                            /**
                             * Converts a given {@link Expiration} to the according {@code SET} command argument.<br />
                             * <dl>
                             * <dt>{@link TimeUnit#SECONDS}</dt>
                             * <dd>{@code EX}</dd>
                             * <dt>{@link TimeUnit#MILLISECONDS}</dt>
                             * <dd>{@code PX}</dd>
                             * </dl>
                             * @param expiration
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public static toSetCommandExPxArgument(expiration: org.springframework.data.redis.core.types.Expiration): number /*byte*/[]
                            /**
                             * Converts a given {@link SetOption} to the according {@code SET} command argument.<br />
                             * <dl>
                             * <dt>{@link SetOption#UPSERT}</dt>
                             * <dd>{@code byte[0]}</dd>
                             * <dt>{@link SetOption#SET_IF_ABSENT}</dt>
                             * <dd>{@code NX}</dd>
                             * <dt>{@link SetOption#SET_IF_PRESENT}</dt>
                             * <dd>{@code XX}</dd>
                             * </dl>
                             * @param option
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public static toSetCommandNxXxArgument(option: org.springframework.data.redis.connection.RedisStringCommands.SetOption): number /*byte*/[]
                            /**
                             * Convert {@link ScanOptions} to Jedis {@link ScanParams}.
                             * @param options
                             * @return 
                             */
                            // @ts-ignore
                            public static toScanParams(options: org.springframework.data.redis.core.ScanOptions): ScanParams
                            /**
                             * @param source
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static toStrings(source: java.util.List<number /*byte*/[]> | Array<number /*byte*/[]>): Array<java.lang.String | string>
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public static bytesListToStringListConverter(): org.springframework.data.redis.connection.convert.ListConverter<number /*byte*/[], java.lang.String | string>
                            // @ts-ignore
                            public static getBytesListToLongListConverter(): org.springframework.data.redis.connection.convert.ListConverter<number /*byte*/[], java.lang.Long | number>
                            /**
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static geoCoordinateToPointConverter(): org.springframework.data.redis.connection.convert.ListConverter<redis.clients.jedis.GeoCoordinate, Point>
                            /**
                             * Get a {@link Converter} capable of converting {@link GeoRadiusResponse} into {@link GeoResults}.
                             * @param metric
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static geoRadiusResponseToGeoResultsConverter(metric: Metric): object
                            /**
                             * Convert {@link Metric} into {@link GeoUnit}.
                             * @param metric
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static toGeoUnit(metric: Metric): GeoUnit
                            /**
                             * Convert {@link Point} into {@link GeoCoordinate}.
                             * @param source
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static toGeoCoordinate(source: Point): GeoCoordinate
                            /**
                             * Convert {@link GeoRadiusCommandArgs} into {@link GeoRadiusParam}.
                             * @param source
                             * @return 
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static toGeoRadiusParam(source: org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs): GeoRadiusParam
                            /**
                             * Convert given {@link BitFieldSubCommands} into argument array.
                             * @param bitfieldOperation
                             * @return never {#literal null}.
                             * @since 1.8
                             */
                            // @ts-ignore
                            public static toBitfieldCommandArguments(bitfieldOperation: org.springframework.data.redis.connection.BitFieldSubCommands): number /*byte*/[][]
                        }
                    }
                }
            }
        }
    }
}
