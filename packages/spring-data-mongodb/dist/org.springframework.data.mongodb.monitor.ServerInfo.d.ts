declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace monitor {
                    /**
                     * Expose basic server information via JMX
                     * @author Mark Pollack
                     * @author Thomas Darimont
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    class ServerInfo extends org.springframework.data.mongodb.monitor.AbstractMonitor {
                        // @ts-ignore
                        constructor(mongoClient: MongoClient)
                        /**
                         * Returns the hostname of the used server reported by MongoDB.
                         * @return the reported hostname can also be an IP address.
                         * @throws UnknownHostException
                         */
                        // @ts-ignore
                        public getHostName(): string
                        // @ts-ignore
                        public getUptimeEstimate(): number /*double*/
                        // @ts-ignore
                        public getVersion(): string
                        // @ts-ignore
                        public getLocalTime(): string
                        // @ts-ignore
                        public getUptime(): number /*double*/
                    }
                }
            }
        }
    }
}
