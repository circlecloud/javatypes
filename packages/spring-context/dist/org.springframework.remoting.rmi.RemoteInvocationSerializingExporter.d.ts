declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace rmi {
                /**
                 * Abstract base class for remote service exporters that explicitly deserialize
                 * {@link org.springframework.remoting.support.RemoteInvocation} objects and serialize
                 * {@link org.springframework.remoting.support.RemoteInvocationResult} objects,
                 * for example Spring's HTTP invoker.
                 * <p>Provides template methods for {@code ObjectInputStream} and
                 * {@code ObjectOutputStream} handling.
                 * @author Juergen Hoeller
                 * @since 2.5.1
                 * @see java.io.ObjectInputStream
                 * @see java.io.ObjectOutputStream
                 * @see #doReadRemoteInvocation
                 * @see #doWriteRemoteInvocationResult
                 */
                // @ts-ignore
                abstract class RemoteInvocationSerializingExporter extends org.springframework.remoting.support.RemoteInvocationBasedExporter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Default content type: "application/x-java-serialized-object".
                     */
                    // @ts-ignore
                    public static readonly CONTENT_TYPE_SERIALIZED_OBJECT: java.lang.String | string
                    /**
                     * Specify the content type to use for sending remote invocation responses.
                     * <p>Default is "application/x-java-serialized-object".
                     */
                    // @ts-ignore
                    public setContentType(contentType: java.lang.String | string): void
                    /**
                     * Return the content type to use for sending remote invocation responses.
                     */
                    // @ts-ignore
                    public getContentType(): string
                    /**
                     * Set whether to accept deserialization of proxy classes.
                     * <p>Default is "true". May be deactivated as a security measure.
                     */
                    // @ts-ignore
                    public setAcceptProxyClasses(acceptProxyClasses: boolean): void
                    /**
                     * Return whether to accept deserialization of proxy classes.
                     */
                    // @ts-ignore
                    public isAcceptProxyClasses(): boolean
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    /**
                     * Initialize this service exporter.
                     */
                    // @ts-ignore
                    public prepare(): void
                    // @ts-ignore
                    getProxy(): any
                    /**
                     * Create an ObjectInputStream for the given InputStream.
                     * <p>The default implementation creates a Spring {@link CodebaseAwareObjectInputStream}.
                     * @param is the InputStream to read from
                     * @return the new ObjectInputStream instance to use
                     * @throws java.io.IOException if creation of the ObjectInputStream failed
                     */
                    // @ts-ignore
                    createObjectInputStream(jis: java.io.InputStream): java.io.ObjectInputStream
                    /**
                     * Perform the actual reading of an invocation result object from the
                     * given ObjectInputStream.
                     * <p>The default implementation simply calls
                     * {@link java.io.ObjectInputStream#readObject()}.
                     * Can be overridden for deserialization of a custom wrapper object rather
                     * than the plain invocation, for example an encryption-aware holder.
                     * @param ois the ObjectInputStream to read from
                     * @return the RemoteInvocationResult object
                     * @throws java.io.IOException in case of I/O failure
                     * @throws ClassNotFoundException if case of a transferred class not
                     *  being found in the local ClassLoader
                     */
                    // @ts-ignore
                    doReadRemoteInvocation(ois: java.io.ObjectInputStream): org.springframework.remoting.support.RemoteInvocation
                    /**
                     * Create an ObjectOutputStream for the given OutputStream.
                     * <p>The default implementation creates a plain
                     * {@link java.io.ObjectOutputStream}.
                     * @param os the OutputStream to write to
                     * @return the new ObjectOutputStream instance to use
                     * @throws java.io.IOException if creation of the ObjectOutputStream failed
                     */
                    // @ts-ignore
                    createObjectOutputStream(os: java.io.OutputStream): java.io.ObjectOutputStream
                    /**
                     * Perform the actual writing of the given invocation result object
                     * to the given ObjectOutputStream.
                     * <p>The default implementation simply calls
                     * {@link java.io.ObjectOutputStream#writeObject}.
                     * Can be overridden for serialization of a custom wrapper object rather
                     * than the plain invocation, for example an encryption-aware holder.
                     * @param result the RemoteInvocationResult object
                     * @param oos the ObjectOutputStream to write to
                     * @throws java.io.IOException if thrown by I/O methods
                     */
                    // @ts-ignore
                    doWriteRemoteInvocationResult(result: org.springframework.remoting.support.RemoteInvocationResult, oos: java.io.ObjectOutputStream): void
                }
            }
        }
    }
}
