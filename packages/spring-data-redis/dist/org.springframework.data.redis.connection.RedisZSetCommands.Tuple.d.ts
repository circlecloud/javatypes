declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace RedisZSetCommands {
                        /**
                         * ZSet tuple.
                         */
                        // @ts-ignore
                        interface Tuple extends java.lang.Comparable<java.lang.Double | number> {
                            /**
                             * @return the raw value of the member.
                             */
                            // @ts-ignore
                            getValue(): number /*byte*/[]
                            /**
                             * @return the member score value used for sorting.
                             */
                            // @ts-ignore
                            getScore(): number
                        }
                    }
                }
            }
        }
    }
}
