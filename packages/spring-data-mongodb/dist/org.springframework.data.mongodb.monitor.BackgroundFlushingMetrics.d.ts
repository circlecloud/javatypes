declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace monitor {
                    /**
                     * JMX Metrics for Background Flushing
                     * @author Mark Pollack
                     */
                    // @ts-ignore
                    class BackgroundFlushingMetrics extends org.springframework.data.mongodb.monitor.AbstractMonitor {
                        // @ts-ignore
                        constructor(mongoClient: MongoClient)
                        // @ts-ignore
                        public getFlushes(): number /*int*/
                        // @ts-ignore
                        public getTotalMs(): number /*int*/
                        // @ts-ignore
                        public getAverageMs(): number /*double*/
                        // @ts-ignore
                        public getLastMs(): number /*int*/
                        // @ts-ignore
                        public getLastFinished(): java.util.Date
                    }
                }
            }
        }
    }
}
