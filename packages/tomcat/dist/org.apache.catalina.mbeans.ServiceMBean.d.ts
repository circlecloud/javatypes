declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                // @ts-ignore
                class ServiceMBean extends org.apache.catalina.mbeans.BaseCatalinaMBean<org.apache.catalina.Service> {
                    // @ts-ignore
                    constructor()
                    /**
                     * Add a new Connector to the set of defined Connectors, and associate it
                     * with this Service's Container.
                     * @param address The IP address on which to bind
                     * @param port TCP port number to listen on
                     * @param isAjp Create a AJP/1.3 Connector
                     * @param isSSL Create a secure Connector
                     * @throws MBeanException error creating the connector
                     */
                    // @ts-ignore
                    public addConnector(address: java.lang.String | string, port: number /*int*/, isAjp: boolean, isSSL: boolean): void
                    /**
                     * Adds a named executor to the service
                     * @param type Classname of the Executor to be added
                     * @throws MBeanException error creating the executor
                     */
                    // @ts-ignore
                    public addExecutor(type: java.lang.String | string): void
                    /**
                     * Find and return the set of Connectors associated with this Service.
                     * @return an array of string representations of the connectors
                     * @throws MBeanException error accessing the associated service
                     */
                    // @ts-ignore
                    public findConnectors(): string[]
                    /**
                     * Retrieves all executors.
                     * @return an array of string representations of the executors
                     * @throws MBeanException error accessing the associated service
                     */
                    // @ts-ignore
                    public findExecutors(): string[]
                    /**
                     * Retrieves executor by name
                     * @param name Name of the executor to be retrieved
                     * @return a string representation of the executor
                     * @throws MBeanException error accessing the associated service
                     */
                    // @ts-ignore
                    public getExecutor(name: java.lang.String | string): string
                }
            }
        }
    }
}
