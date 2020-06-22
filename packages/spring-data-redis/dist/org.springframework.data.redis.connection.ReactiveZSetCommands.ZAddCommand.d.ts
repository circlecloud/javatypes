declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace ReactiveZSetCommands {
                        /**
                         * {@code ZADD} command parameters.
                         * @author Christoph Strobl
                         * @see <a href="https://redis.io/commands/zadd">Redis Documentation: ZADD</a>
                         */
                        // @ts-ignore
                        class ZAddCommand extends org.springframework.data.redis.connection.ReactiveRedisConnection.KeyCommand {
                            /**
                             * Creates a new {@link ZAddCommand} given a {@link Tuple}.
                             * @param tuple must not be {#literal null}.
                             * @return a new {#link ZAddCommand} for {@link Tuple}.
                             */
                            // @ts-ignore
                            public static tuple(tuple: org.springframework.data.redis.connection.RedisZSetCommands.Tuple): org.springframework.data.redis.connection.ReactiveZSetCommands.ZAddCommand
                            /**
                             * Creates a new {@link ZAddCommand} given a {@link Collection} of {@link Tuple}.
                             * @param tuples must not be {#literal null}.
                             * @return a new {#link ZAddCommand} for {@link Tuple}.
                             */
                            // @ts-ignore
                            public static tuples(tuples: java.util.Collection<any> | Array<any>): org.springframework.data.redis.connection.ReactiveZSetCommands.ZAddCommand
                            /**
                             * Applies the {@literal key}. Constructs a new command instance with all previously configured properties.
                             * @param key must not be {#literal null}.
                             * @return a new {#link ZAddCommand} with {@literal key} applied.
                             */
                            // @ts-ignore
                            public to(key: java.nio.ByteBuffer): org.springframework.data.redis.connection.ReactiveZSetCommands.ZAddCommand
                            /**
                             * Applies {@literal xx} mode (Only update elements that already exist. Never add elements). Constructs a new
                             * command instance with all previously configured properties.
                             * @return a new {#link ZAddCommand} with {@literal xx} applied.
                             */
                            // @ts-ignore
                            public xx(): org.springframework.data.redis.connection.ReactiveZSetCommands.ZAddCommand
                            /**
                             * Applies {@literal nx} mode (Don't update already existing elements. Always add new elements). Constructs a new
                             * command instance with all previously configured properties.
                             * @return a new {#link ZAddCommand} with {@literal nx} applied.
                             */
                            // @ts-ignore
                            public nx(): org.springframework.data.redis.connection.ReactiveZSetCommands.ZAddCommand
                            /**
                             * Applies {@literal ch} mode (Modify the return value from the number of new elements added, to the total number of
                             * elements changed). Constructs a new command instance with all previously configured properties.
                             * @return a new {#link ZAddCommand} with {@literal ch} applied.
                             */
                            // @ts-ignore
                            public ch(): org.springframework.data.redis.connection.ReactiveZSetCommands.ZAddCommand
                            /**
                             * Applies {@literal incr} mode (When this option is specified ZADD acts like ZINCRBY). Constructs a new command
                             * instance with all previously configured properties.
                             * @return a new {#link ZAddCommand} with {@literal incr} applied.
                             */
                            // @ts-ignore
                            public incr(): org.springframework.data.redis.connection.ReactiveZSetCommands.ZAddCommand
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getTuples(): Array<org.springframework.data.redis.connection.RedisZSetCommands.Tuple>
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public isUpsert(): boolean
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public isIncr(): boolean
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public isReturnTotalChanged(): boolean
                        }
                    }
                }
            }
        }
    }
}
