declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapreduce {
                        /**
                         * Value object to encapsulate results of a map-reduce count.
                         * @author Mark Pollack
                         * @author Oliver Gierke
                         */
                        // @ts-ignore
                        class MapReduceCounts extends java.lang.Object {
                            /**
                             * Creates a new {@link MapReduceCounts} using the given input count, emit count, and output count.
                             * @param inputCount
                             * @param emitCount
                             * @param outputCount
                             */
                            // @ts-ignore
                            constructor(inputCount: number /*long*/, emitCount: number /*long*/, outputCount: number /*long*/)
                            // @ts-ignore
                            public static readonly NONE: org.springframework.data.mongodb.core.mapreduce.MapReduceCounts
                            // @ts-ignore
                            public getInputCount(): number /*long*/
                            // @ts-ignore
                            public getEmitCount(): number /*long*/
                            // @ts-ignore
                            public getOutputCount(): number /*long*/
                            // @ts-ignore
                            public toString(): string
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public equals(obj: java.lang.Object | any): boolean
                        }
                    }
                }
            }
        }
    }
}
