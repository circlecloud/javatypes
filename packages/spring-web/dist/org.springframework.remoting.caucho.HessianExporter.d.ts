declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace caucho {
                /**
                 * General stream-based protocol exporter for a Hessian endpoint.
                 * <p>Hessian is a slim, binary RPC protocol.
                 * For information on Hessian, see the
                 * <a href="http://hessian.caucho.com">Hessian website</a>.
                 * <b>Note: As of Spring 4.0, this exporter requires Hessian 4.0 or above.</b>
                 * @author Juergen Hoeller
                 * @since 2.5.1
                 * @see #invoke(java.io.InputStream, java.io.OutputStream)
                 * @see HessianServiceExporter
                 */
                // @ts-ignore
                class HessianExporter extends RemoteExporter {
                    // @ts-ignore
                    constructor()
                    /**
                     * The content type for hessian ({@code application/x-hessian}).
                     */
                    // @ts-ignore
                    readonly CONTENT_TYPE_HESSIAN: string
                    /**
                     * Specify the Hessian SerializerFactory to use.
                     * <p>This will typically be passed in as an inner bean definition
                     * of type {@code com.caucho.hessian.io.SerializerFactory},
                     * with custom bean property values applied.
                     */
                    // @ts-ignore
                    setSerializerFactory(serializerFactory: SerializerFactory): void
                    /**
                     * Set whether to send the Java collection type for each serialized
                     * collection. Default is "true".
                     */
                    // @ts-ignore
                    setSendCollectionType(sendCollectionType: boolean): void
                    /**
                     * Set whether to allow non-serializable types as Hessian arguments
                     * and return values. Default is "true".
                     */
                    // @ts-ignore
                    setAllowNonSerializable(allowNonSerializable: boolean): void
                    /**
                     * Specify a custom HessianRemoteResolver to use for resolving remote
                     * object references.
                     */
                    // @ts-ignore
                    setRemoteResolver(remoteResolver: HessianRemoteResolver): void
                    /**
                     * Set whether Hessian's debug mode should be enabled, logging to
                     * this exporter's Commons Logging log. Default is "false".
                     * @see com.caucho.hessian.client.HessianProxyFactory#setDebug
                     */
                    // @ts-ignore
                    setDebug(debug: boolean): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                    /**
                     * Initialize this exporter.
                     */
                    // @ts-ignore
                    prepare(): void
                    /**
                     * Perform an invocation on the exported object.
                     * @param inputStream the request stream
                     * @param outputStream the response stream
                     * @throws Throwable if invocation failed
                     */
                    // @ts-ignore
                    invoke(inputStream: java.io.InputStream, outputStream: java.io.OutputStream): void
                    /**
                     * Actually invoke the skeleton with the given streams.
                     * @param skeleton the skeleton to invoke
                     * @param inputStream the request stream
                     * @param outputStream the response stream
                     * @throws Throwable if invocation failed
                     */
                    // @ts-ignore
                    doInvoke(skeleton: HessianSkeleton, inputStream: java.io.InputStream, outputStream: java.io.OutputStream): void
                }
            }
        }
    }
}
