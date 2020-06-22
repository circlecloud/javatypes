declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace monitor {
                    /**
                     * JMX Metrics for B-tree index counters
                     * @author Mark Pollack
                     */
                    // @ts-ignore
                    class BtreeIndexCounters extends org.springframework.data.mongodb.monitor.AbstractMonitor {
                        // @ts-ignore
                        constructor(mongoClient: MongoClient)
                        // @ts-ignore
                        public getAccesses(): number /*int*/
                        // @ts-ignore
                        public getHits(): number /*int*/
                        // @ts-ignore
                        public getMisses(): number /*int*/
                        // @ts-ignore
                        public getResets(): number /*int*/
                        // @ts-ignore
                        public getMissRatio(): number /*int*/
                    }
                }
            }
        }
    }
}
