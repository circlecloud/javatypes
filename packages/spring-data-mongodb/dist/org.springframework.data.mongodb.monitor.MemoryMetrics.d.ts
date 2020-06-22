declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace monitor {
                    /**
                     * JMX Metrics for Memory
                     * @author Mark Pollack
                     */
                    // @ts-ignore
                    class MemoryMetrics extends org.springframework.data.mongodb.monitor.AbstractMonitor {
                        // @ts-ignore
                        constructor(mongoClient: MongoClient)
                        // @ts-ignore
                        public getBits(): number /*int*/
                        // @ts-ignore
                        public getResidentSpace(): number /*int*/
                        // @ts-ignore
                        public getVirtualAddressSpace(): number /*int*/
                        // @ts-ignore
                        public getMemoryInfoSupported(): boolean
                        // @ts-ignore
                        public getMemoryMappedSpace(): number /*int*/
                    }
                }
            }
        }
    }
}
