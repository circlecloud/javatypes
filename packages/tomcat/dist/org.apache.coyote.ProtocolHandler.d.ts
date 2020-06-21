declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * Abstract the protocol implementation, including threading, etc.
             * This is the main interface to be implemented by a coyote protocol.
             * Adapter is the main interface to be implemented by a coyote servlet
             * container.
             * @author Remy Maucherat
             * @author Costin Manolache
             * @see Adapter
             */
            // @ts-ignore
            interface ProtocolHandler {
                /**
                 * Return the adapter associated with the protocol handler.
                 * @return the adapter
                 */
                // @ts-ignore
                getAdapter(): org.apache.coyote.Adapter
                /**
                 * The adapter, used to call the connector.
                 * @param adapter The adapter to associate
                 */
                // @ts-ignore
                setAdapter(adapter: org.apache.coyote.Adapter): void
                /**
                 * The executor, provide access to the underlying thread pool.
                 * @return The executor used to process requests
                 */
                // @ts-ignore
                getExecutor(): java.util.concurrent.Executor
                /**
                 * Set the optional executor that will be used by the connector.
                 * @param executor the executor
                 */
                // @ts-ignore
                setExecutor(executor: java.util.concurrent.Executor): void
                /**
                 * Get the utility executor that should be used by the protocol handler.
                 * @return the executor
                 */
                // @ts-ignore
                getUtilityExecutor(): java.util.concurrent.ScheduledExecutorService
                /**
                 * Set the utility executor that should be used by the protocol handler.
                 * @param utilityExecutor the executor
                 */
                // @ts-ignore
                setUtilityExecutor(utilityExecutor: java.util.concurrent.ScheduledExecutorService): void
                /**
                 * Initialise the protocol.
                 * @throws Exception If the protocol handler fails to initialise
                 */
                // @ts-ignore
                init(): void
                /**
                 * Start the protocol.
                 * @throws Exception If the protocol handler fails to start
                 */
                // @ts-ignore
                start(): void
                /**
                 * Pause the protocol (optional).
                 * @throws Exception If the protocol handler fails to pause
                 */
                // @ts-ignore
                pause(): void
                /**
                 * Resume the protocol (optional).
                 * @throws Exception If the protocol handler fails to resume
                 */
                // @ts-ignore
                resume(): void
                /**
                 * Stop the protocol.
                 * @throws Exception If the protocol handler fails to stop
                 */
                // @ts-ignore
                stop(): void
                /**
                 * Destroy the protocol (optional).
                 * @throws Exception If the protocol handler fails to destroy
                 */
                // @ts-ignore
                destroy(): void
                /**
                 * Close the server socket (to prevent further connections) if the server
                 * socket was bound on {@link #start()} (rather than on {@link #init()}
                 * but do not perform any further shutdown.
                 */
                // @ts-ignore
                closeServerSocketGraceful(): void
                /**
                 * Requires APR/native library
                 * @return <code>true</code> if this Protocol Handler requires the
                 *          APR/native library, otherwise <code>false</code>
                 */
                // @ts-ignore
                isAprRequired(): boolean
                /**
                 * Does this ProtocolHandler support sendfile?
                 * @return <code>true</code> if this Protocol Handler supports sendfile,
                 *          otherwise <code>false</code>
                 */
                // @ts-ignore
                isSendfileSupported(): boolean
                /**
                 * Add a new SSL configuration for a virtual host.
                 * @param sslHostConfig the configuration
                 */
                // @ts-ignore
                addSslHostConfig(sslHostConfig: org.apache.tomcat.util.net.SSLHostConfig): void
                /**
                 * Find all configured SSL virtual host configurations which will be used
                 * by SNI.
                 * @return the configurations
                 */
                // @ts-ignore
                findSslHostConfigs(): org.apache.tomcat.util.net.SSLHostConfig[]
                /**
                 * Add a new protocol for used by HTTP/1.1 upgrade or ALPN.
                 * @param upgradeProtocol the protocol
                 */
                // @ts-ignore
                addUpgradeProtocol(upgradeProtocol: org.apache.coyote.UpgradeProtocol): void
                /**
                 * Return all configured upgrade protocols.
                 * @return the protocols
                 */
                // @ts-ignore
                findUpgradeProtocols(): org.apache.coyote.UpgradeProtocol[]
            }
        }
    }
}
