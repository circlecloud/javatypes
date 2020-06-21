declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * This is a low-level, efficient representation of a server request. Most
             * fields are GC-free, expensive operations are delayed until the  user code
             * needs the information.
             * Processing is delegated to modules, using a hook mechanism.
             * This class is not intended for user code - it is used internally by tomcat
             * for processing the request in the most efficient way. Users ( servlets ) can
             * access the information using a facade, which provides the high-level view
             * of the request.
             * Tomcat defines a number of attributes:
             * <ul>
             * <li>"org.apache.tomcat.request" - allows access to the low-level
             * request object in trusted applications
             * </ul>
             * @author James Duncan Davidson [duncan#eng.sun.com]
             * @author James Todd [gonzo#eng.sun.com]
             * @author Jason Hunter [jch#eng.sun.com]
             * @author Harish Prabandham
             * @author Alex Cruikshank [alex#epitonic.com]
             * @author Hans Bergsten [hans#gefionsoftware.com]
             * @author Costin Manolache
             * @author Remy Maucherat
             */
            // @ts-ignore
            class Request extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getReadListener(): javax.servlet.ReadListener
                // @ts-ignore
                public setReadListener(listener: javax.servlet.ReadListener): void
                // @ts-ignore
                public sendAllDataReadEvent(): boolean
                // @ts-ignore
                public getMimeHeaders(): org.apache.tomcat.util.http.MimeHeaders
                // @ts-ignore
                public isTrailerFieldsReady(): boolean
                // @ts-ignore
                public getTrailerFields(): java.util.Map<java.lang.String | string, java.lang.String | string>
                // @ts-ignore
                public getURLDecoder(): org.apache.tomcat.util.buf.UDecoder
                // @ts-ignore
                public scheme(): org.apache.tomcat.util.buf.MessageBytes
                // @ts-ignore
                public method(): org.apache.tomcat.util.buf.MessageBytes
                // @ts-ignore
                public requestURI(): org.apache.tomcat.util.buf.MessageBytes
                // @ts-ignore
                public decodedURI(): org.apache.tomcat.util.buf.MessageBytes
                // @ts-ignore
                public queryString(): org.apache.tomcat.util.buf.MessageBytes
                // @ts-ignore
                public protocol(): org.apache.tomcat.util.buf.MessageBytes
                /**
                 * Get the "virtual host", derived from the Host: header associated with
                 * this request.
                 * @return The buffer holding the server name, if any. Use isNull() to check
                 *          if there is no value set.
                 */
                // @ts-ignore
                public serverName(): org.apache.tomcat.util.buf.MessageBytes
                // @ts-ignore
                public getServerPort(): number /*int*/
                // @ts-ignore
                public setServerPort(serverPort: number /*int*/): void
                // @ts-ignore
                public remoteAddr(): org.apache.tomcat.util.buf.MessageBytes
                // @ts-ignore
                public remoteHost(): org.apache.tomcat.util.buf.MessageBytes
                // @ts-ignore
                public localName(): org.apache.tomcat.util.buf.MessageBytes
                // @ts-ignore
                public localAddr(): org.apache.tomcat.util.buf.MessageBytes
                // @ts-ignore
                public getRemotePort(): number /*int*/
                // @ts-ignore
                public setRemotePort(port: number /*int*/): void
                // @ts-ignore
                public getLocalPort(): number /*int*/
                // @ts-ignore
                public setLocalPort(port: number /*int*/): void
                /**
                 * Get the character encoding used for this request.
                 * @return The value set via {#link #setCharset(Charset)} or if no
                 *          call has been made to that method try to obtain if from the
                 *          content type.
                 */
                // @ts-ignore
                public getCharacterEncoding(): string
                /**
                 * Get the character encoding used for this request.
                 * @return The value set via {#link #setCharset(Charset)} or if no
                 *          call has been made to that method try to obtain if from the
                 *          content type.
                 * @throws UnsupportedEncodingException If the user agent has specified an
                 *          invalid character encoding
                 */
                // @ts-ignore
                public getCharset(): java.nio.charset.Charset
                // @ts-ignore
                public setCharset(charset: java.nio.charset.Charset): void
                // @ts-ignore
                public setContentLength(len: number /*long*/): void
                // @ts-ignore
                public getContentLength(): number /*int*/
                // @ts-ignore
                public getContentLengthLong(): number /*long*/
                // @ts-ignore
                public getContentType(): string
                // @ts-ignore
                public setContentType(type: java.lang.String | string): void
                // @ts-ignore
                public contentType(): org.apache.tomcat.util.buf.MessageBytes
                // @ts-ignore
                public setContentType(mb: org.apache.tomcat.util.buf.MessageBytes): void
                // @ts-ignore
                public getHeader(name: java.lang.String | string): string
                // @ts-ignore
                public setExpectation(expectation: boolean): void
                // @ts-ignore
                public hasExpectation(): boolean
                // @ts-ignore
                public getResponse(): org.apache.coyote.Response
                // @ts-ignore
                public setResponse(response: org.apache.coyote.Response): void
                // @ts-ignore
                setHook(hook: org.apache.coyote.ActionHook): void
                // @ts-ignore
                public action(actionCode: org.apache.coyote.ActionCode, param: java.lang.Object | any): void
                // @ts-ignore
                public getCookies(): org.apache.tomcat.util.http.ServerCookies
                // @ts-ignore
                public getParameters(): org.apache.tomcat.util.http.Parameters
                // @ts-ignore
                public addPathParameter(name: java.lang.String | string, value: java.lang.String | string): void
                // @ts-ignore
                public getPathParameter(name: java.lang.String | string): string
                // @ts-ignore
                public setAttribute(name: java.lang.String | string, o: java.lang.Object | any): void
                // @ts-ignore
                public getAttributes(): java.util.HashMap<java.lang.String | string, java.lang.Object | any>
                // @ts-ignore
                public getAttribute(name: java.lang.String | string): any
                // @ts-ignore
                public getRemoteUser(): org.apache.tomcat.util.buf.MessageBytes
                // @ts-ignore
                public getRemoteUserNeedsAuthorization(): boolean
                // @ts-ignore
                public setRemoteUserNeedsAuthorization(remoteUserNeedsAuthorization: boolean): void
                // @ts-ignore
                public getAuthType(): org.apache.tomcat.util.buf.MessageBytes
                // @ts-ignore
                public getAvailable(): number /*int*/
                // @ts-ignore
                public setAvailable(available: number /*int*/): void
                // @ts-ignore
                public getSendfile(): boolean
                // @ts-ignore
                public setSendfile(sendfile: boolean): void
                // @ts-ignore
                public isFinished(): boolean
                // @ts-ignore
                public getSupportsRelativeRedirects(): boolean
                // @ts-ignore
                public getInputBuffer(): org.apache.coyote.InputBuffer
                // @ts-ignore
                public setInputBuffer(inputBuffer: org.apache.coyote.InputBuffer): void
                /**
                 * Read data from the input buffer and put it into ApplicationBufferHandler.
                 * The buffer is owned by the protocol implementation - it will be reused on
                 * the next read. The Adapter must either process the data in place or copy
                 * it to a separate buffer if it needs to hold it. In most cases this is
                 * done during byte-&gt;char conversions or via InputStream. Unlike
                 * InputStream, this interface allows the app to process data in place,
                 * without copy.
                 * @param handler The destination to which to copy the data
                 * @return The number of bytes copied
                 * @throws IOException If an I/O error occurs during the copy
                 */
                // @ts-ignore
                public doRead(handler: org.apache.tomcat.util.net.ApplicationBufferHandler): number /*int*/
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public getStartTime(): number /*long*/
                // @ts-ignore
                public setStartTime(startTime: number /*long*/): void
                /**
                 * Used to store private data. Thread data could be used instead - but
                 * if you have the req, getting/setting a note is just a array access, may
                 * be faster than ThreadLocal for very frequent operations.
                 * Example use:
                 * Catalina CoyoteAdapter:
                 * ADAPTER_NOTES = 1 - stores the HttpServletRequest object ( req/res)
                 * To avoid conflicts, note in the range 0 - 8 are reserved for the
                 * servlet container ( catalina connector, etc ), and values in 9 - 16
                 * for connector use.
                 * 17-31 range is not allocated or used.
                 * @param pos Index to use to store the note
                 * @param value The value to store at that index
                 */
                // @ts-ignore
                public setNote(pos: number /*int*/, value: java.lang.Object | any): void
                // @ts-ignore
                public getNote(pos: number /*int*/): any
                // @ts-ignore
                public recycle(): void
                // @ts-ignore
                public updateCounters(): void
                // @ts-ignore
                public getRequestProcessor(): org.apache.coyote.RequestInfo
                // @ts-ignore
                public getBytesRead(): number /*long*/
                // @ts-ignore
                public isProcessing(): boolean
            }
        }
    }
}
