declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisClusterNode {
                        /**
                         * @author Christoph Strobl
                         * @since 1.7
                         */
                        // @ts-ignore
                        class SlotRange extends java.lang.Object {
                            /**
                             * @param lowerBound must not be {#literal null}.
                             * @param upperBound must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(lowerBound: java.lang.Integer | number, upperBound: java.lang.Integer | number)
                            // @ts-ignore
                            constructor(range: java.util.Collection<java.lang.Integer | number> | Array<java.lang.Integer | number>)
                            // @ts-ignore
                            public toString(): string
                            /**
                             * @param slot
                             * @return true when slot is part of the range.
                             */
                            // @ts-ignore
                            public contains(slot: number /*int*/): boolean
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getSlots(): Array<java.lang.Integer | number>
                            // @ts-ignore
                            public getSlotsArray(): number /*int*/[]
                            // @ts-ignore
                            public static empty(): org.springframework.data.redis.connection.RedisClusterNode.SlotRange
                        }
                    }
                }
            }
        }
    }
}
