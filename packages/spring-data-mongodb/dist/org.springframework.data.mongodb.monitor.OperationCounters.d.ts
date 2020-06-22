declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace monitor {
                    /**
                     * JMX Metrics for Operation counters
                     * @author Mark Pollack
                     */
                    // @ts-ignore
                    class OperationCounters extends org.springframework.data.mongodb.monitor.AbstractMonitor {
                        // @ts-ignore
                        constructor(mongoClient: MongoClient)
                        // @ts-ignore
                        public getInsertCount(): number /*int*/
                        // @ts-ignore
                        public getQueryCount(): number /*int*/
                        // @ts-ignore
                        public getUpdateCount(): number /*int*/
                        // @ts-ignore
                        public getDeleteCount(): number /*int*/
                        // @ts-ignore
                        public getGetMoreCount(): number /*int*/
                        // @ts-ignore
                        public getCommandCount(): number /*int*/
                    }
                }
            }
        }
    }
}
