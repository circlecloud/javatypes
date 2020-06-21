declare namespace org {
    namespace apache {
        namespace coyote {
            namespace ajp {
                /**
                 * The is the base implementation for the AJP protocol handlers. Implementations
                 * typically extend this base class rather than implement {@link
                 * org.apache.coyote.ProtocolHandler}. All of the implementations that ship with
                 * Tomcat are implemented this way.
                 * @param <S> The type of socket used by the implementation
                 */
                // @ts-ignore
                abstract class AbstractAjpProtocol<S> extends org.apache.coyote.AbstractProtocol<S> {
                    // @ts-ignore
                    constructor(endpoint: org.apache.tomcat.util.net.AbstractEndpoint<S, any>)
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    getProtocolName(): string
                    /**
                     * {@inheritDoc}
                     * Overridden to make getter accessible to other classes in this package.
                     */
                    // @ts-ignore
                    getEndpoint(): org.apache.tomcat.util.net.AbstractEndpoint<S, any>
                    /**
                     * {@inheritDoc}
                     * AJP does not support protocol negotiation so this always returns null.
                     */
                    // @ts-ignore
                    getNegotiatedProtocol(name: java.lang.String | string): org.apache.coyote.UpgradeProtocol
                    /**
                     * {@inheritDoc}
                     * AJP does not support protocol upgrade so this always returns null.
                     */
                    // @ts-ignore
                    getUpgradeProtocol(name: java.lang.String | string): org.apache.coyote.UpgradeProtocol
                    // @ts-ignore
                    public getAjpFlush(): boolean
                    /**
                     * Configure whether to aend an AJP flush packet when flushing. A flush
                     * packet is a zero byte AJP13 SEND_BODY_CHUNK packet. mod_jk and
                     * mod_proxy_ajp interpret this as a request to flush data to the client.
                     * AJP always does flush at the and of the response, so if it is not
                     * important, that the packets get streamed up to the client, do not use
                     * extra flush packets. For compatibility and to stay on the safe side,
                     * flush packets are enabled by default.
                     * @param ajpFlush  The new flush setting
                     */
                    // @ts-ignore
                    public setAjpFlush(ajpFlush: boolean): void
                    /**
                     * Should authentication be done in the native web server layer,
                     * or in the Servlet container ?
                     * @return {#code true} if authentication should be performed by Tomcat,
                     *          otherwise {@code false}
                     */
                    // @ts-ignore
                    public getTomcatAuthentication(): boolean
                    // @ts-ignore
                    public setTomcatAuthentication(tomcatAuthentication: boolean): void
                    /**
                     * Should authentication be done in the native web server layer and
                     * authorization in the Servlet container?
                     * @return {#code true} if authorization should be performed by Tomcat,
                     *          otherwise {@code false}
                     */
                    // @ts-ignore
                    public getTomcatAuthorization(): boolean
                    // @ts-ignore
                    public setTomcatAuthorization(tomcatAuthorization: boolean): void
                    /**
                     * Set the required secret that must be included with every request.
                     * @param requiredSecret The required secret
                     */
                    // @ts-ignore
                    public setRequiredSecret(requiredSecret: java.lang.String | string): void
                    // @ts-ignore
                    getRequiredSecret(): string
                    // @ts-ignore
                    public getPacketSize(): number /*int*/
                    // @ts-ignore
                    public setPacketSize(packetSize: number /*int*/): void
                    // @ts-ignore
                    public addSslHostConfig(sslHostConfig: org.apache.tomcat.util.net.SSLHostConfig): void
                    // @ts-ignore
                    public findSslHostConfigs(): org.apache.tomcat.util.net.SSLHostConfig[]
                    // @ts-ignore
                    public addUpgradeProtocol(upgradeProtocol: org.apache.coyote.UpgradeProtocol): void
                    // @ts-ignore
                    public findUpgradeProtocols(): org.apache.coyote.UpgradeProtocol[]
                    // @ts-ignore
                    createProcessor(): org.apache.coyote.Processor
                    // @ts-ignore
                    createUpgradeProcessor(socket: org.apache.tomcat.util.net.SocketWrapperBase<any>, upgradeToken: org.apache.coyote.UpgradeToken): org.apache.coyote.Processor
                }
            }
        }
    }
}
