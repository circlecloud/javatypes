declare namespace org {
    namespace apache {
        namespace coyote {
            // @ts-ignore
            abstract class AbstractProtocol<S> extends java.lang.Object implements org.apache.coyote.ProtocolHandler, javax.management.MBeanRegistration {
                // @ts-ignore
                constructor(endpoint: org.apache.tomcat.util.net.AbstractEndpoint<S, any>)
                /**
                 * Name of MBean for the Global Request Processor.
                 */
                // @ts-ignore
                rgOname: javax.management.ObjectName
                /**
                 * The adapter provides the link between the ProtocolHandler and the
                 * connector.
                 */
                // @ts-ignore
                adapter: org.apache.coyote.Adapter
                /**
                 * The maximum number of idle processors that will be retained in the cache
                 * and re-used with a subsequent request. The default is 200. A value of -1
                 * means unlimited. In the unlimited case, the theoretical maximum number of
                 * cached Processor objects is {@link #getMaxConnections()} although it will
                 * usually be closer to {@link #getMaxThreads()}.
                 */
                // @ts-ignore
                processorCache: number /*int*/
                // @ts-ignore
                domain: java.lang.String | string
                // @ts-ignore
                oname: javax.management.ObjectName
                // @ts-ignore
                mserver: javax.management.MBeanServer
                /**
                 * Generic property setter used by the digester. Other code should not need
                 * to use this. The digester will only use this method if it can't find a
                 * more specific setter. That means the property belongs to the Endpoint,
                 * the ServerSocketFactory or some other lower level component. This method
                 * ensures that it is visible to both.
                 * @param name  The name of the property to set
                 * @param value The value, in string form, to set for the property
                 * @return <code>true</code> if the property was set successfully, otherwise
                 *          <code>false</code>
                 */
                // @ts-ignore
                public setProperty(name: java.lang.String | string, value: java.lang.String | string): boolean
                /**
                 * Generic property getter used by the digester. Other code should not need
                 * to use this.
                 * @param name The name of the property to get
                 * @return The value of the property converted to a string
                 */
                // @ts-ignore
                public getProperty(name: java.lang.String | string): string
                // @ts-ignore
                public setAdapter(adapter: org.apache.coyote.Adapter): void
                // @ts-ignore
                public getAdapter(): org.apache.coyote.Adapter
                // @ts-ignore
                public getProcessorCache(): number /*int*/
                // @ts-ignore
                public setProcessorCache(processorCache: number /*int*/): void
                /**
                 * When client certificate information is presented in a form other than
                 * instances of {@link java.security.cert.X509Certificate} it needs to be
                 * converted before it can be used and this property controls which JSSE
                 * provider is used to perform the conversion. For example it is used with
                 * the AJP connectors, the HTTP APR connector and with the
                 * {@link org.apache.catalina.valves.SSLValve}. If not specified, the
                 * default provider will be used.
                 * @return The name of the JSSE provider to use
                 */
                // @ts-ignore
                public getClientCertProvider(): string
                // @ts-ignore
                public setClientCertProvider(s: java.lang.String | string): void
                // @ts-ignore
                public getMaxHeaderCount(): number /*int*/
                // @ts-ignore
                public setMaxHeaderCount(maxHeaderCount: number /*int*/): void
                // @ts-ignore
                public isAprRequired(): boolean
                // @ts-ignore
                public isSendfileSupported(): boolean
                // @ts-ignore
                public getExecutor(): java.util.concurrent.Executor
                // @ts-ignore
                public setExecutor(executor: java.util.concurrent.Executor): void
                // @ts-ignore
                public getUtilityExecutor(): java.util.concurrent.ScheduledExecutorService
                // @ts-ignore
                public setUtilityExecutor(utilityExecutor: java.util.concurrent.ScheduledExecutorService): void
                // @ts-ignore
                public getMaxThreads(): number /*int*/
                // @ts-ignore
                public setMaxThreads(maxThreads: number /*int*/): void
                // @ts-ignore
                public getMaxConnections(): number /*int*/
                // @ts-ignore
                public setMaxConnections(maxConnections: number /*int*/): void
                // @ts-ignore
                public getMinSpareThreads(): number /*int*/
                // @ts-ignore
                public setMinSpareThreads(minSpareThreads: number /*int*/): void
                // @ts-ignore
                public getThreadPriority(): number /*int*/
                // @ts-ignore
                public setThreadPriority(threadPriority: number /*int*/): void
                // @ts-ignore
                public getAcceptCount(): number /*int*/
                // @ts-ignore
                public setAcceptCount(acceptCount: number /*int*/): void
                // @ts-ignore
                public getTcpNoDelay(): boolean
                // @ts-ignore
                public setTcpNoDelay(tcpNoDelay: boolean): void
                // @ts-ignore
                public getConnectionLinger(): number /*int*/
                // @ts-ignore
                public setConnectionLinger(connectionLinger: number /*int*/): void
                /**
                 * The time Tomcat will wait for a subsequent request before closing the
                 * connection. The default is {@link #getConnectionTimeout()}.
                 * @return The timeout in milliseconds
                 */
                // @ts-ignore
                public getKeepAliveTimeout(): number /*int*/
                // @ts-ignore
                public setKeepAliveTimeout(keepAliveTimeout: number /*int*/): void
                // @ts-ignore
                public getAddress(): java.net.InetAddress
                // @ts-ignore
                public setAddress(ia: java.net.InetAddress): void
                // @ts-ignore
                public getPort(): number /*int*/
                // @ts-ignore
                public setPort(port: number /*int*/): void
                // @ts-ignore
                public getPortOffset(): number /*int*/
                // @ts-ignore
                public setPortOffset(portOffset: number /*int*/): void
                // @ts-ignore
                public getPortWithOffset(): number /*int*/
                // @ts-ignore
                public getLocalPort(): number /*int*/
                // @ts-ignore
                public getConnectionTimeout(): number /*int*/
                // @ts-ignore
                public setConnectionTimeout(timeout: number /*int*/): void
                // @ts-ignore
                public getConnectionCount(): number /*long*/
                // @ts-ignore
                public setAcceptorThreadCount(threadCount: number /*int*/): void
                // @ts-ignore
                public getAcceptorThreadCount(): number /*int*/
                // @ts-ignore
                public setAcceptorThreadPriority(threadPriority: number /*int*/): void
                // @ts-ignore
                public getAcceptorThreadPriority(): number /*int*/
                // @ts-ignore
                public getNameIndex(): number /*int*/
                /**
                 * The name will be prefix-address-port if address is non-null and
                 * prefix-port if the address is null.
                 * @return A name for this protocol instance that is appropriately quoted
                 *          for use in an ObjectName.
                 */
                // @ts-ignore
                public getName(): string
                // @ts-ignore
                public addWaitingProcessor(processor: org.apache.coyote.Processor): void
                // @ts-ignore
                public removeWaitingProcessor(processor: org.apache.coyote.Processor): void
                // @ts-ignore
                getEndpoint(): org.apache.tomcat.util.net.AbstractEndpoint<S, any>
                // @ts-ignore
                getHandler(): org.apache.tomcat.util.net.AbstractEndpoint.Handler<S>
                // @ts-ignore
                setHandler(handler: org.apache.tomcat.util.net.AbstractEndpoint.Handler<S>): void
                /**
                 * Concrete implementations need to provide access to their logger to be
                 * used by the abstract classes.
                 * @return the logger
                 */
                // @ts-ignore
                abstract getLog(): org.apache.juli.logging.Log
                /**
                 * Obtain the prefix to be used when construction a name for this protocol
                 * handler. The name will be prefix-address-port.
                 * @return the prefix
                 */
                // @ts-ignore
                abstract getNamePrefix(): string
                /**
                 * Obtain the name of the protocol, (Http, Ajp, etc.). Used with JMX.
                 * @return the protocol name
                 */
                // @ts-ignore
                abstract getProtocolName(): string
                /**
                 * Find a suitable handler for the protocol negotiated
                 * at the network layer.
                 * @param name The name of the requested negotiated protocol.
                 * @return The instance where {#link UpgradeProtocol#getAlpnName()} matches
                 *          the requested protocol
                 */
                // @ts-ignore
                abstract getNegotiatedProtocol(name: java.lang.String | string): org.apache.coyote.UpgradeProtocol
                /**
                 * Find a suitable handler for the protocol upgraded name specified. This
                 * is used for direct connection protocol selection.
                 * @param name The name of the requested negotiated protocol.
                 * @return The instance where {#link UpgradeProtocol#getAlpnName()} matches
                 *          the requested protocol
                 */
                // @ts-ignore
                abstract getUpgradeProtocol(name: java.lang.String | string): org.apache.coyote.UpgradeProtocol
                /**
                 * Create and configure a new Processor instance for the current protocol
                 * implementation.
                 * @return A fully configured Processor instance that is ready to use
                 */
                // @ts-ignore
                abstract createProcessor(): org.apache.coyote.Processor
                // @ts-ignore
                abstract createUpgradeProcessor(socket: org.apache.tomcat.util.net.SocketWrapperBase<any>, upgradeToken: org.apache.coyote.UpgradeToken): org.apache.coyote.Processor
                // @ts-ignore
                public getObjectName(): javax.management.ObjectName
                // @ts-ignore
                public getDomain(): string
                // @ts-ignore
                public preRegister(server: javax.management.MBeanServer, name: javax.management.ObjectName): javax.management.ObjectName
                // @ts-ignore
                public postRegister(registrationDone: java.lang.Boolean): void
                // @ts-ignore
                public preDeregister(): void
                // @ts-ignore
                public postDeregister(): void
                // @ts-ignore
                public init(): void
                // @ts-ignore
                public start(): void
                // @ts-ignore
                startAsyncTimeout(): void
                // @ts-ignore
                stopAsyncTimeout(): void
                // @ts-ignore
                public pause(): void
                // @ts-ignore
                public isPaused(): boolean
                // @ts-ignore
                public resume(): void
                // @ts-ignore
                public stop(): void
                // @ts-ignore
                public destroy(): void
                // @ts-ignore
                public closeServerSocketGraceful(): void
            }
        }
    }
}
