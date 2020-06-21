declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace httpinvoker {
                /**
                 * HTTP request handler that exports the specified service bean as
                 * HTTP invoker service endpoint, accessible via an HTTP invoker proxy.
                 * Designed for Sun's JRE 1.6 HTTP server, implementing the
                 * {@link com.sun.net.httpserver.HttpHandler} interface.
                 * <p>Deserializes remote invocation objects and serializes remote invocation
                 * result objects. Uses Java serialization just like RMI, but provides the
                 * same ease of setup as Caucho's HTTP-based Hessian protocol.
                 * <p><b>HTTP invoker is the recommended protocol for Java-to-Java remoting.</b>
                 * It is more powerful and more extensible than Hessian, at the expense of
                 * being tied to Java. Nevertheless, it is as easy to set up as Hessian,
                 * which is its main advantage compared to RMI.
                 * <p><b>WARNING: Be aware of vulnerabilities due to unsafe Java deserialization:
                 * Manipulated input streams could lead to unwanted code execution on the server
                 * during the deserialization step. As a consequence, do not expose HTTP invoker
                 * endpoints to untrusted clients but rather just between your own services.</b>
                 * In general, we strongly recommend any other message format (e.g. JSON) instead.
                 * @author Juergen Hoeller
                 * @since 2.5.1
                 * @see org.springframework.remoting.httpinvoker.HttpInvokerClientInterceptor
                 * @see org.springframework.remoting.httpinvoker.HttpInvokerProxyFactoryBean
                 * @deprecated as of Spring Framework 5.1, in favor of {#link HttpInvokerServiceExporter}
                 */
                // @ts-ignore
                class SimpleHttpInvokerServiceExporter extends RemoteInvocationSerializingExporter implements com.sun.net.httpserver.HttpHandler {
                    // @ts-ignore
                    constructor()
                    /**
                     * Reads a remote invocation from the request, executes it,
                     * and writes the remote invocation result to the response.
                     * @see #readRemoteInvocation(HttpExchange)
                     * @see #invokeAndCreateResult(RemoteInvocation, Object)
                     * @see #writeRemoteInvocationResult(HttpExchange, RemoteInvocationResult)
                     */
                    // @ts-ignore
                    public handle(exchange: com.sun.net.httpserver.HttpExchange): void
                    /**
                     * Read a RemoteInvocation from the given HTTP request.
                     * <p>Delegates to {@link #readRemoteInvocation(HttpExchange, InputStream)}
                     * with the {@link HttpExchange#getRequestBody()} request's input stream}.
                     * @param exchange current HTTP request/response
                     * @return the RemoteInvocation object
                     * @throws java.io.IOException in case of I/O failure
                     * @throws ClassNotFoundException if thrown by deserialization
                     */
                    // @ts-ignore
                    readRemoteInvocation(exchange: com.sun.net.httpserver.HttpExchange): RemoteInvocation
                    /**
                     * Deserialize a RemoteInvocation object from the given InputStream.
                     * <p>Gives {@link #decorateInputStream} a chance to decorate the stream
                     * first (for example, for custom encryption or compression). Creates a
                     * {@link org.springframework.remoting.rmi.CodebaseAwareObjectInputStream}
                     * and calls {@link #doReadRemoteInvocation} to actually read the object.
                     * <p>Can be overridden for custom serialization of the invocation.
                     * @param exchange current HTTP request/response
                     * @param is the InputStream to read from
                     * @return the RemoteInvocation object
                     * @throws java.io.IOException in case of I/O failure
                     * @throws ClassNotFoundException if thrown during deserialization
                     */
                    // @ts-ignore
                    readRemoteInvocation(exchange: com.sun.net.httpserver.HttpExchange, jis: java.io.InputStream): RemoteInvocation
                    /**
                     * Return the InputStream to use for reading remote invocations,
                     * potentially decorating the given original InputStream.
                     * <p>The default implementation returns the given stream as-is.
                     * Can be overridden, for example, for custom encryption or compression.
                     * @param exchange current HTTP request/response
                     * @param is the original InputStream
                     * @return the potentially decorated InputStream
                     * @throws java.io.IOException in case of I/O failure
                     */
                    // @ts-ignore
                    decorateInputStream(exchange: com.sun.net.httpserver.HttpExchange, jis: java.io.InputStream): java.io.InputStream
                    /**
                     * Write the given RemoteInvocationResult to the given HTTP response.
                     * @param exchange current HTTP request/response
                     * @param result the RemoteInvocationResult object
                     * @throws java.io.IOException in case of I/O failure
                     */
                    // @ts-ignore
                    writeRemoteInvocationResult(exchange: com.sun.net.httpserver.HttpExchange, result: RemoteInvocationResult): void
                    /**
                     * Serialize the given RemoteInvocation to the given OutputStream.
                     * <p>The default implementation gives {@link #decorateOutputStream} a chance
                     * to decorate the stream first (for example, for custom encryption or compression).
                     * Creates an {@link java.io.ObjectOutputStream} for the final stream and calls
                     * {@link #doWriteRemoteInvocationResult} to actually write the object.
                     * <p>Can be overridden for custom serialization of the invocation.
                     * @param exchange current HTTP request/response
                     * @param result the RemoteInvocationResult object
                     * @param os the OutputStream to write to
                     * @throws java.io.IOException in case of I/O failure
                     * @see #decorateOutputStream
                     * @see #doWriteRemoteInvocationResult
                     */
                    // @ts-ignore
                    writeRemoteInvocationResult(exchange: com.sun.net.httpserver.HttpExchange, result: RemoteInvocationResult, os: java.io.OutputStream): void
                    /**
                     * Return the OutputStream to use for writing remote invocation results,
                     * potentially decorating the given original OutputStream.
                     * <p>The default implementation returns the given stream as-is.
                     * Can be overridden, for example, for custom encryption or compression.
                     * @param exchange current HTTP request/response
                     * @param os the original OutputStream
                     * @return the potentially decorated OutputStream
                     * @throws java.io.IOException in case of I/O failure
                     */
                    // @ts-ignore
                    decorateOutputStream(exchange: com.sun.net.httpserver.HttpExchange, os: java.io.OutputStream): java.io.OutputStream
                }
            }
        }
    }
}
