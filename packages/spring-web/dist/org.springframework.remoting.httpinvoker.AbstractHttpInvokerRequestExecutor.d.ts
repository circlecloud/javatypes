declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace httpinvoker {
                /**
                 * Abstract base implementation of the HttpInvokerRequestExecutor interface.
                 * <p>Pre-implements serialization of RemoteInvocation objects and
                 * deserialization of RemoteInvocationResults objects.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see #doExecuteRequest
                 */
                // @ts-ignore
                class AbstractHttpInvokerRequestExecutor extends java.lang.Object implements org.springframework.remoting.httpinvoker.HttpInvokerRequestExecutor {
                    // @ts-ignore
                    constructor()
                    /**
                     * Default content type: "application/x-java-serialized-object".
                     */
                    // @ts-ignore
                    readonly CONTENT_TYPE_SERIALIZED_OBJECT: string
                    // @ts-ignore
                    readonly HTTP_METHOD_POST: string
                    // @ts-ignore
                    readonly HTTP_HEADER_ACCEPT_LANGUAGE: string
                    // @ts-ignore
                    readonly HTTP_HEADER_ACCEPT_ENCODING: string
                    // @ts-ignore
                    readonly HTTP_HEADER_CONTENT_ENCODING: string
                    // @ts-ignore
                    readonly HTTP_HEADER_CONTENT_TYPE: string
                    // @ts-ignore
                    readonly HTTP_HEADER_CONTENT_LENGTH: string
                    // @ts-ignore
                    readonly ENCODING_GZIP: string
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Specify the content type to use for sending HTTP invoker requests.
                     * <p>Default is "application/x-java-serialized-object".
                     */
                    // @ts-ignore
                    setContentType(contentType: string): void
                    /**
                     * Return the content type to use for sending HTTP invoker requests.
                     */
                    // @ts-ignore
                    getContentType(): java.lang.String
                    /**
                     * Set whether to accept GZIP encoding, that is, whether to
                     * send the HTTP "Accept-Encoding" header with "gzip" as value.
                     * <p>Default is "true". Turn this flag off if you do not want
                     * GZIP response compression even if enabled on the HTTP server.
                     */
                    // @ts-ignore
                    setAcceptGzipEncoding(acceptGzipEncoding: boolean): void
                    /**
                     * Return whether to accept GZIP encoding, that is, whether to
                     * send the HTTP "Accept-Encoding" header with "gzip" as value.
                     */
                    // @ts-ignore
                    isAcceptGzipEncoding(): boolean
                    // @ts-ignore
                    setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    /**
                     * Return the bean ClassLoader that this executor is supposed to use.
                     */
                    // @ts-ignore
                    getBeanClassLoader(): java.lang.ClassLoader
                    // @ts-ignore
                    executeRequest(config: org.springframework.remoting.httpinvoker.HttpInvokerClientConfiguration, invocation: RemoteInvocation): RemoteInvocationResult
                    /**
                     * Serialize the given RemoteInvocation into a ByteArrayOutputStream.
                     * @param invocation the RemoteInvocation object
                     * @return a ByteArrayOutputStream with the serialized RemoteInvocation
                     * @throws IOException if thrown by I/O methods
                     */
                    // @ts-ignore
                    getByteArrayOutputStream(invocation: RemoteInvocation): java.io.ByteArrayOutputStream
                    /**
                     * Serialize the given RemoteInvocation to the given OutputStream.
                     * <p>The default implementation gives {@code decorateOutputStream} a chance
                     * to decorate the stream first (for example, for custom encryption or compression).
                     * Creates an {@code ObjectOutputStream} for the final stream and calls
                     * {@code doWriteRemoteInvocation} to actually write the object.
                     * <p>Can be overridden for custom serialization of the invocation.
                     * @param invocation the RemoteInvocation object
                     * @param os the OutputStream to write to
                     * @throws IOException if thrown by I/O methods
                     * @see #decorateOutputStream
                     * @see #doWriteRemoteInvocation
                     */
                    // @ts-ignore
                    writeRemoteInvocation(invocation: RemoteInvocation, os: java.io.OutputStream): void
                    /**
                     * Return the OutputStream to use for writing remote invocations,
                     * potentially decorating the given original OutputStream.
                     * <p>The default implementation returns the given stream as-is.
                     * Can be overridden, for example, for custom encryption or compression.
                     * @param os the original OutputStream
                     * @return the potentially decorated OutputStream
                     */
                    // @ts-ignore
                    decorateOutputStream(os: java.io.OutputStream): java.io.OutputStream
                    /**
                     * Perform the actual writing of the given invocation object to the
                     * given ObjectOutputStream.
                     * <p>The default implementation simply calls {@code writeObject}.
                     * Can be overridden for serialization of a custom wrapper object rather
                     * than the plain invocation, for example an encryption-aware holder.
                     * @param invocation the RemoteInvocation object
                     * @param oos the ObjectOutputStream to write to
                     * @throws IOException if thrown by I/O methods
                     * @see java.io.ObjectOutputStream#writeObject
                     */
                    // @ts-ignore
                    doWriteRemoteInvocation(invocation: RemoteInvocation, oos: java.io.ObjectOutputStream): void
                    /**
                     * Execute a request to send the given serialized remote invocation.
                     * <p>Implementations will usually call {@code readRemoteInvocationResult}
                     * to deserialize a returned RemoteInvocationResult object.
                     * @param config the HTTP invoker configuration that specifies the
                     *  target service
                     * @param baos the ByteArrayOutputStream that contains the serialized
                     *  RemoteInvocation object
                     * @return the RemoteInvocationResult object
                     * @throws IOException if thrown by I/O operations
                     * @throws ClassNotFoundException if thrown during deserialization
                     * @throws Exception in case of general errors
                     * @see #readRemoteInvocationResult(java.io.InputStream, String)
                     */
                    // @ts-ignore
                    abstract doExecuteRequest(config: org.springframework.remoting.httpinvoker.HttpInvokerClientConfiguration, baos: java.io.ByteArrayOutputStream): RemoteInvocationResult
                    /**
                     * Deserialize a RemoteInvocationResult object from the given InputStream.
                     * <p>Gives {@code decorateInputStream} a chance to decorate the stream
                     * first (for example, for custom encryption or compression). Creates an
                     * {@code ObjectInputStream} via {@code createObjectInputStream} and
                     * calls {@code doReadRemoteInvocationResult} to actually read the object.
                     * <p>Can be overridden for custom serialization of the invocation.
                     * @param is the InputStream to read from
                     * @param codebaseUrl the codebase URL to load classes from if not found locally
                     * @return the RemoteInvocationResult object
                     * @throws IOException if thrown by I/O methods
                     * @throws ClassNotFoundException if thrown during deserialization
                     * @see #decorateInputStream
                     * @see #createObjectInputStream
                     * @see #doReadRemoteInvocationResult
                     */
                    // @ts-ignore
                    readRemoteInvocationResult(jis: java.io.InputStream, codebaseUrl: string): RemoteInvocationResult
                    /**
                     * Return the InputStream to use for reading remote invocation results,
                     * potentially decorating the given original InputStream.
                     * <p>The default implementation returns the given stream as-is.
                     * Can be overridden, for example, for custom encryption or compression.
                     * @param is the original InputStream
                     * @return the potentially decorated InputStream
                     */
                    // @ts-ignore
                    decorateInputStream(jis: java.io.InputStream): java.io.InputStream
                    /**
                     * Create an ObjectInputStream for the given InputStream and codebase.
                     * The default implementation creates a CodebaseAwareObjectInputStream.
                     * @param is the InputStream to read from
                     * @param codebaseUrl the codebase URL to load classes from if not found locally
                     *  (can be {#code null})
                     * @return the new ObjectInputStream instance to use
                     * @throws IOException if creation of the ObjectInputStream failed
                     * @see org.springframework.remoting.rmi.CodebaseAwareObjectInputStream
                     */
                    // @ts-ignore
                    createObjectInputStream(jis: java.io.InputStream, codebaseUrl: string): java.io.ObjectInputStream
                    /**
                     * Perform the actual reading of an invocation object from the
                     * given ObjectInputStream.
                     * <p>The default implementation simply calls {@code readObject}.
                     * Can be overridden for deserialization of a custom wrapper object rather
                     * than the plain invocation, for example an encryption-aware holder.
                     * @param ois the ObjectInputStream to read from
                     * @return the RemoteInvocationResult object
                     * @throws IOException if thrown by I/O methods
                     * @throws ClassNotFoundException if the class name of a serialized object
                     *  couldn't get resolved
                     * @see java.io.ObjectOutputStream#writeObject
                     */
                    // @ts-ignore
                    doReadRemoteInvocationResult(ois: java.io.ObjectInputStream): RemoteInvocationResult
                }
            }
        }
    }
}
