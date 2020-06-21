declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mbeans {
                /**
                 * This listener fixes the port used by JMX/RMI Server making things much
                 * simpler if you need to connect jconsole or similar to a remote Tomcat
                 * instance that is running behind a firewall. Only the ports are configured via
                 * the listener. The remainder of the configuration is via the standard system
                 * properties for configuring JMX.
                 */
                // @ts-ignore
                class JmxRemoteLifecycleListener extends org.apache.tomcat.util.net.SSLHostConfig implements org.apache.catalina.LifecycleListener {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    rmiBindAddress: java.lang.String | string
                    // @ts-ignore
                    rmiRegistryPortPlatform: number /*int*/
                    // @ts-ignore
                    rmiServerPortPlatform: number /*int*/
                    // @ts-ignore
                    rmiRegistrySSL: boolean
                    // @ts-ignore
                    rmiServerSSL: boolean
                    // @ts-ignore
                    authenticate: boolean
                    // @ts-ignore
                    passwordFile: java.lang.String | string
                    // @ts-ignore
                    loginModuleName: java.lang.String | string
                    // @ts-ignore
                    accessFile: java.lang.String | string
                    // @ts-ignore
                    useLocalPorts: boolean
                    // @ts-ignore
                    csPlatform: javax.management.remote.JMXConnectorServer
                    /**
                     * Get the inet address on which the Platform RMI server is exported.
                     * @return The textual representation of inet address
                     */
                    // @ts-ignore
                    public getRmiBindAddress(): string
                    /**
                     * Set the inet address on which the Platform RMI server is exported.
                     * @param theRmiBindAddress The textual representation of inet address
                     */
                    // @ts-ignore
                    public setRmiBindAddress(theRmiBindAddress: java.lang.String | string): void
                    /**
                     * Get the port on which the Platform RMI server is exported. This is the
                     * port that is normally chosen by the RMI stack.
                     * @return The port number
                     */
                    // @ts-ignore
                    public getRmiServerPortPlatform(): number /*int*/
                    /**
                     * Set the port on which the Platform RMI server is exported. This is the
                     * port that is normally chosen by the RMI stack.
                     * @param theRmiServerPortPlatform The port number
                     */
                    // @ts-ignore
                    public setRmiServerPortPlatform(theRmiServerPortPlatform: number /*int*/): void
                    /**
                     * Get the port on which the Platform RMI registry is exported.
                     * @return The port number
                     */
                    // @ts-ignore
                    public getRmiRegistryPortPlatform(): number /*int*/
                    /**
                     * Set the port on which the Platform RMI registry is exported.
                     * @param theRmiRegistryPortPlatform The port number
                     */
                    // @ts-ignore
                    public setRmiRegistryPortPlatform(theRmiRegistryPortPlatform: number /*int*/): void
                    /**
                     * Get the flag that indicates that local ports should be used for all
                     * connections. If using SSH tunnels, or similar, this should be set to
                     * true to ensure the RMI client uses the tunnel.
                     * @return <code>true</code> if local ports should be used
                     */
                    // @ts-ignore
                    public getUseLocalPorts(): boolean
                    /**
                     * Set the flag that indicates that local ports should be used for all
                     * connections. If using SSH tunnels, or similar, this should be set to
                     * true to ensure the RMI client uses the tunnel.
                     * @param useLocalPorts Set to <code>true</code> if local ports should be
                     *                       used
                     */
                    // @ts-ignore
                    public setUseLocalPorts(useLocalPorts: boolean): void
                    /**
                     * @return the rmiRegistrySSL
                     */
                    // @ts-ignore
                    public isRmiRegistrySSL(): boolean
                    /**
                     * @param rmiRegistrySSL the rmiRegistrySSL to set
                     */
                    // @ts-ignore
                    public setRmiRegistrySSL(rmiRegistrySSL: boolean): void
                    /**
                     * @return the rmiServerSSL
                     */
                    // @ts-ignore
                    public isRmiServerSSL(): boolean
                    /**
                     * @param rmiServerSSL the rmiServerSSL to set
                     */
                    // @ts-ignore
                    public setRmiServerSSL(rmiServerSSL: boolean): void
                    /**
                     * @return the authenticate
                     */
                    // @ts-ignore
                    public isAuthenticate(): boolean
                    /**
                     * @param authenticate the authenticate to set
                     */
                    // @ts-ignore
                    public setAuthenticate(authenticate: boolean): void
                    /**
                     * @return the passwordFile
                     */
                    // @ts-ignore
                    public getPasswordFile(): string
                    /**
                     * @param passwordFile the passwordFile to set
                     */
                    // @ts-ignore
                    public setPasswordFile(passwordFile: java.lang.String | string): void
                    /**
                     * @return the loginModuleName
                     */
                    // @ts-ignore
                    public getLoginModuleName(): string
                    /**
                     * @param loginModuleName the loginModuleName to set
                     */
                    // @ts-ignore
                    public setLoginModuleName(loginModuleName: java.lang.String | string): void
                    /**
                     * @return the accessFile
                     */
                    // @ts-ignore
                    public getAccessFile(): string
                    /**
                     * @param accessFile the accessFile to set
                     */
                    // @ts-ignore
                    public setAccessFile(accessFile: java.lang.String | string): void
                    // @ts-ignore
                    init(): void
                    // @ts-ignore
                    public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                }
            }
        }
    }
}
