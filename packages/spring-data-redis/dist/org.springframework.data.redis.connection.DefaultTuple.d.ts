declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Default implementation for {@link Tuple} interface.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    class DefaultTuple extends java.lang.Object implements org.springframework.data.redis.connection.RedisZSetCommands.Tuple {
                        /**
                         * Constructs a new <code>DefaultTuple</code> instance.
                         * @param value
                         * @param score
                         */
                        // @ts-ignore
                        constructor(value: number /*byte*/[], score: java.lang.Double | number)
                        // @ts-ignore
                        public getScore(): number
                        // @ts-ignore
                        public getValue(): number /*byte*/[]
                        // @ts-ignore
                        public equals(obj: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public compareTo(o: java.lang.Double | number): number /*int*/
                    }
                }
            }
        }
    }
}
