declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace monitor {
                    /**
                     * JMX Metrics for Global Locks
                     * @author Mark Pollack
                     */
                    // @ts-ignore
                    class GlobalLockMetrics extends org.springframework.data.mongodb.monitor.AbstractMonitor {
                        // @ts-ignore
                        constructor(mongoClient: MongoClient)
                        // @ts-ignore
                        public getTotalTime(): number /*double*/
                        // @ts-ignore
                        public getLockTime(): number /*double*/
                        // @ts-ignore
                        public getLockTimeRatio(): number /*double*/
                        // @ts-ignore
                        public getCurrentQueueTotal(): number /*int*/
                        // @ts-ignore
                        public getCurrentQueueReaders(): number /*int*/
                        // @ts-ignore
                        public getCurrentQueueWriters(): number /*int*/
                    }
                }
            }
        }
    }
}
