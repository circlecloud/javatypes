declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisGeoCommands {
                        /**
                         * Additional arguments (like count/sort/...) to be used with {@link RedisGeoCommands}.
                         * @author Ninad Divadkar
                         * @author Christoph Strobl
                         * @since 1.8
                         */
                        // @ts-ignore
                        class GeoRadiusCommandArgs extends java.lang.Object implements java.lang.Cloneable {
                            /**
                             * Create new {@link GeoRadiusCommandArgs}.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public static newGeoRadiusArgs(): org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs
                            /**
                             * Sets the {@link Flag#WITHCOORD} flag to also return the longitude, latitude coordinates of the matching items.
                             * @return 
                             */
                            // @ts-ignore
                            public includeCoordinates(): org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs
                            /**
                             * Sets the {@link Flag#WITHDIST} flag to also return the distance of the returned items from the specified center.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public includeDistance(): org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs
                            /**
                             * Sort returned items from the nearest to the furthest, relative to the center.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public sortAscending(): org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs
                            /**
                             * Sort returned items from the furthest to the nearest, relative to the center.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public sortDescending(): org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs
                            /**
                             * Limit the results to the first N matching items.
                             * @param count
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public limit(count: number /*long*/): org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getFlags(): Array<org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs.Flag>
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getLimit(): number
                            /**
                             * @return can be {#literal null}.
                             */
                            // @ts-ignore
                            public getSortDirection(): Direction
                            // @ts-ignore
                            public hasFlags(): boolean
                            // @ts-ignore
                            public hasSortDirection(): boolean
                            // @ts-ignore
                            public hasLimit(): boolean
                            // @ts-ignore
                            clone(): org.springframework.data.redis.connection.RedisGeoCommands.GeoRadiusCommandArgs
                        }
                    }
                }
            }
        }
    }
}
