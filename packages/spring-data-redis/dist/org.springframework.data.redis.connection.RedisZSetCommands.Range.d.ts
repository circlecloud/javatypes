declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisZSetCommands {
                        /**
                         * {@link Range} defines {@literal min} and {@literal max} values to retrieve from a {@literal ZSET}.
                         * @author Christoph Strobl
                         * @since 1.6
                         */
                        // @ts-ignore
                        class Range extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * @return new {#link Range}
                             */
                            // @ts-ignore
                            public static range(): org.springframework.data.redis.connection.RedisZSetCommands.Range
                            /**
                             * @return new {#link Range} with {@literal min} and {@literal max} set to {@link Boundary#infinite()}.
                             */
                            // @ts-ignore
                            public static unbounded(): org.springframework.data.redis.connection.RedisZSetCommands.Range
                            /**
                             * Greater Than Equals
                             * @param min must not be {#literal null}.
                             * @return this.
                             */
                            // @ts-ignore
                            public gte(min: java.lang.Object | any): org.springframework.data.redis.connection.RedisZSetCommands.Range
                            /**
                             * Greater Than
                             * @param min must not be {#literal null}.
                             * @return this.
                             */
                            // @ts-ignore
                            public gt(min: java.lang.Object | any): org.springframework.data.redis.connection.RedisZSetCommands.Range
                            /**
                             * Less Then Equals
                             * @param max must not be {#literal null}.
                             * @return this.
                             */
                            // @ts-ignore
                            public lte(max: java.lang.Object | any): org.springframework.data.redis.connection.RedisZSetCommands.Range
                            /**
                             * Less Than
                             * @param max must not be {#literal null}.
                             * @return this.
                             */
                            // @ts-ignore
                            public lt(max: java.lang.Object | any): org.springframework.data.redis.connection.RedisZSetCommands.Range
                            /**
                             * @return {#literal null} if not set.
                             */
                            // @ts-ignore
                            public getMin(): org.springframework.data.redis.connection.RedisZSetCommands.Range.Boundary
                            /**
                             * @return {#literal null} if not set.
                             */
                            // @ts-ignore
                            public getMax(): org.springframework.data.redis.connection.RedisZSetCommands.Range.Boundary
                        }
                    }
                }
            }
        }
    }
}
