declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace httpinvoker {
                /**
                 * {@link org.springframework.remoting.httpinvoker.HttpInvokerRequestExecutor} implementation
                 * that uses standard Java facilities to execute POST requests, without support for HTTP
                 * authentication or advanced configuration options.
                 * <p>Designed for easy subclassing, customizing specific template methods. However,
                 * consider {@code HttpComponentsHttpInvokerRequestExecutor} for more sophisticated needs:
                 * The standard {@link HttpURLConnection} class is rather limited in its capabilities.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see java.net.HttpURLConnection
                 */
                // @ts-ignore
                class SimpleHttpInvokerRequestExecutor extends org.springframework.remoting.httpinvoker.AbstractHttpInvokerRequestExecutor {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the underlying URLConnection's connect timeout (in milliseconds).
                     * A timeout value of 0 specifies an infinite timeout.
                     * <p>Default is the system's default timeout.
                     * @see URLConnection#setConnectTimeout(int)
                     */
                    // @ts-ignore
                    public setConnectTimeout(connectTimeout: number /*int*/): void
                    /**
                     * Set the underlying URLConnection's read timeout (in milliseconds).
                     * A timeout value of 0 specifies an infinite timeout.
                     * <p>Default is the system's default timeout.
                     * @see URLConnection#setReadTimeout(int)
                     */
                    // @ts-ignore
                    public setReadTimeout(readTimeout: number /*int*/): void
                    /**
                     * Execute the given request through a standard {@link HttpURLConnection}.
                     * <p>This method implements the basic processing workflow:
                     * The actual work happens in this class's template methods.
                     * @see #openConnection
                     * @see #prepareConnection
                     * @see #writeRequestBody
                     * @see #validateResponse
                     * @see #readResponseBody
                     */
                    // @ts-ignore
                    doExecuteRequest(config: org.springframework.remoting.httpinvoker.HttpInvokerClientConfiguration, baos: java.io.ByteArrayOutputStream): RemoteInvocationResult
                    /**
                     * Open an {@link HttpURLConnection} for the given remote invocation request.
                     * @param config the HTTP invoker configuration that specifies the
                     *  target service
                     * @return the HttpURLConnection for the given request
                     * @throws IOException if thrown by I/O methods
                     * @see java.net.URL#openConnection()
                     */
                    // @ts-ignore
                    openConnection(config: org.springframework.remoting.httpinvoker.HttpInvokerClientConfiguration): java.net.HttpURLConnection
                    /**
                     * Prepare the given HTTP connection.
                     * <p>The default implementation specifies POST as method,
                     * "application/x-java-serialized-object" as "Content-Type" header,
                     * and the given content length as "Content-Length" header.
                     * @param connection the HTTP connection to prepare
                     * @param contentLength the length of the content to send
                     * @throws IOException if thrown by HttpURLConnection methods
                     * @see java.net.HttpURLConnection#setRequestMethod
                     * @see java.net.HttpURLConnection#setRequestProperty
                     */
                    // @ts-ignore
                    prepareConnection(connection: java.net.HttpURLConnection, contentLength: number /*int*/): void
                    /**
                     * Set the given serialized remote invocation as request body.
                     * <p>The default implementation simply write the serialized invocation to the
                     * HttpURLConnection's OutputStream. This can be overridden, for example, to write
                     * a specific encoding and potentially set appropriate HTTP request headers.
                     * @param config the HTTP invoker configuration that specifies the target service
                     * @param con the HttpURLConnection to write the request body to
                     * @param baos the ByteArrayOutputStream that contains the serialized
                     *  RemoteInvocation object
                     * @throws IOException if thrown by I/O methods
                     * @see java.net.HttpURLConnection#getOutputStream()
                     * @see java.net.HttpURLConnection#setRequestProperty
                     */
                    // @ts-ignore
                    writeRequestBody(config: org.springframework.remoting.httpinvoker.HttpInvokerClientConfiguration, con: java.net.HttpURLConnection, baos: java.io.ByteArrayOutputStream): void
                    /**
                     * Validate the given response as contained in the {@link HttpURLConnection} object,
                     * throwing an exception if it does not correspond to a successful HTTP response.
                     * <p>Default implementation rejects any HTTP status code beyond 2xx, to avoid
                     * parsing the response body and trying to deserialize from a corrupted stream.
                     * @param config the HTTP invoker configuration that specifies the target service
                     * @param con the HttpURLConnection to validate
                     * @throws IOException if validation failed
                     * @see java.net.HttpURLConnection#getResponseCode()
                     */
                    // @ts-ignore
                    validateResponse(config: org.springframework.remoting.httpinvoker.HttpInvokerClientConfiguration, con: java.net.HttpURLConnection): void
                    /**
                     * Extract the response body from the given executed remote invocation
                     * request.
                     * <p>The default implementation simply reads the serialized invocation
                     * from the HttpURLConnection's InputStream. If the response is recognized
                     * as GZIP response, the InputStream will get wrapped in a GZIPInputStream.
                     * @param config the HTTP invoker configuration that specifies the target service
                     * @param con the HttpURLConnection to read the response body from
                     * @return an InputStream for the response body
                     * @throws IOException if thrown by I/O methods
                     * @see #isGzipResponse
                     * @see java.util.zip.GZIPInputStream
                     * @see java.net.HttpURLConnection#getInputStream()
                     * @see java.net.HttpURLConnection#getHeaderField(int)
                     * @see java.net.HttpURLConnection#getHeaderFieldKey(int)
                     */
                    // @ts-ignore
                    readResponseBody(config: org.springframework.remoting.httpinvoker.HttpInvokerClientConfiguration, con: java.net.HttpURLConnection): java.io.InputStream
                    /**
                     * Determine whether the given response is a GZIP response.
                     * <p>Default implementation checks whether the HTTP "Content-Encoding"
                     * header contains "gzip" (in any casing).
                     * @param con the HttpURLConnection to check
                     */
                    // @ts-ignore
                    isGzipResponse(con: java.net.HttpURLConnection): boolean
                }
            }
        }
    }
}
