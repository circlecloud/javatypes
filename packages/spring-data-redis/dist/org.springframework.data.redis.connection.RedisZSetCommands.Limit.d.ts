declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisZSetCommands {
                        /**
                         * @author Christoph Strobl
                         * @since 1.6
                         */
                        // @ts-ignore
                        class Limit extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public static limit(): org.springframework.data.redis.connection.RedisZSetCommands.Limit
                            // @ts-ignore
                            public offset(offset: number /*int*/): org.springframework.data.redis.connection.RedisZSetCommands.Limit
                            // @ts-ignore
                            public count(count: number /*int*/): org.springframework.data.redis.connection.RedisZSetCommands.Limit
                            // @ts-ignore
                            public getCount(): number /*int*/
                            // @ts-ignore
                            public getOffset(): number /*int*/
                            // @ts-ignore
                            public isUnlimited(): boolean
                            /**
                             * @return new {#link Limit} indicating no limit;
                             * @since 1.3
                             */
                            // @ts-ignore
                            public static unlimited(): org.springframework.data.redis.connection.RedisZSetCommands.Limit
                        }
                    }
                }
            }
        }
    }
}
