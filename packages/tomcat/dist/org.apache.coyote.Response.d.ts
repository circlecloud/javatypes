declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * Response object.
             * @author James Duncan Davidson [duncan#eng.sun.com]
             * @author Jason Hunter [jch#eng.sun.com]
             * @author James Todd [gonzo#eng.sun.com]
             * @author Harish Prabandham
             * @author Hans Bergsten [hans#gefionsoftware.com]
             * @author Remy Maucherat
             */
            // @ts-ignore
            class Response extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getRequest(): org.apache.coyote.Request
                // @ts-ignore
                public setRequest(req: org.apache.coyote.Request): void
                // @ts-ignore
                public setOutputBuffer(outputBuffer: org.apache.coyote.OutputBuffer): void
                // @ts-ignore
                public getMimeHeaders(): org.apache.tomcat.util.http.MimeHeaders
                // @ts-ignore
                setHook(hook: org.apache.coyote.ActionHook): void
                // @ts-ignore
                public setNote(pos: number /*int*/, value: java.lang.Object | any): void
                // @ts-ignore
                public getNote(pos: number /*int*/): any
                // @ts-ignore
                public action(actionCode: org.apache.coyote.ActionCode, param: java.lang.Object | any): void
                // @ts-ignore
                public getStatus(): number /*int*/
                /**
                 * Set the response status.
                 * @param status The status value to set
                 */
                // @ts-ignore
                public setStatus(status: number /*int*/): void
                /**
                 * Get the status message.
                 * @return The message associated with the current status
                 */
                // @ts-ignore
                public getMessage(): string
                /**
                 * Set the status message.
                 * @param message The status message to set
                 */
                // @ts-ignore
                public setMessage(message: java.lang.String | string): void
                // @ts-ignore
                public isCommitted(): boolean
                // @ts-ignore
                public setCommitted(v: boolean): void
                /**
                 * Return the time the response was committed (based on System.currentTimeMillis).
                 * @return the time the response was committed
                 */
                // @ts-ignore
                public getCommitTime(): number /*long*/
                /**
                 * Set the error Exception that occurred during request processing.
                 * @param ex The exception that occurred
                 */
                // @ts-ignore
                public setErrorException(ex: java.lang.Exception): void
                /**
                 * Get the Exception that occurred during request processing.
                 * @return The exception that occurred
                 */
                // @ts-ignore
                public getErrorException(): java.lang.Exception
                // @ts-ignore
                public isExceptionPresent(): boolean
                /**
                 * Set the error flag.
                 * @return <code>false</code> if the error flag was already set
                 */
                // @ts-ignore
                public setError(): boolean
                /**
                 * Error flag accessor.
                 * @return <code>true</code> if the response has encountered an error
                 */
                // @ts-ignore
                public isError(): boolean
                // @ts-ignore
                public isErrorReportRequired(): boolean
                // @ts-ignore
                public setErrorReported(): boolean
                // @ts-ignore
                public reset(): void
                /**
                 * Does the response contain the given header.
                 * <br>
                 * Warning: This method always returns <code>false</code> for Content-Type
                 * and Content-Length.
                 * @param name The name of the header of interest
                 * @return {#code true} if the response contains the header.
                 */
                // @ts-ignore
                public containsHeader(name: java.lang.String | string): boolean
                // @ts-ignore
                public setHeader(name: java.lang.String | string, value: java.lang.String | string): void
                // @ts-ignore
                public addHeader(name: java.lang.String | string, value: java.lang.String | string): void
                // @ts-ignore
                public addHeader(name: java.lang.String | string, value: java.lang.String | string, charset: java.nio.charset.Charset): void
                // @ts-ignore
                public setTrailerFields(supplier: java.util.function$.Supplier<java.util.Map<java.lang.String | string, java.lang.String | string>>): void
                // @ts-ignore
                public getTrailerFields(): java.util.function$.Supplier<java.util.Map<java.lang.String | string, java.lang.String | string>>
                /**
                 * Signal that we're done with the headers, and body will follow.
                 * Any implementation needs to notify ContextManager, to allow
                 * interceptors to fix headers.
                 */
                // @ts-ignore
                public sendHeaders(): void
                // @ts-ignore
                public getLocale(): java.util.Locale
                /**
                 * Called explicitly by user to set the Content-Language and the default
                 * encoding.
                 * @param locale The locale to use for this response
                 */
                // @ts-ignore
                public setLocale(locale: java.util.Locale): void
                /**
                 * Return the content language.
                 * @return The language code for the language currently associated with this
                 *          response
                 */
                // @ts-ignore
                public getContentLanguage(): string
                /**
                 * Overrides the character encoding used in the body of the response. This
                 * method must be called prior to writing output using getWriter().
                 * @param characterEncoding The name of character encoding.
                 * @throws UnsupportedEncodingException If the specified name is not
                 *          recognised
                 */
                // @ts-ignore
                public setCharacterEncoding(characterEncoding: java.lang.String | string): void
                // @ts-ignore
                public getCharset(): java.nio.charset.Charset
                // @ts-ignore
                public getCharacterEncoding(): string
                /**
                 * Sets the content type.
                 * This method must preserve any response charset that may already have
                 * been set via a call to response.setContentType(), response.setLocale(),
                 * or response.setCharacterEncoding().
                 * @param type the content type
                 */
                // @ts-ignore
                public setContentType(type: java.lang.String | string): void
                // @ts-ignore
                public setContentTypeNoCharset(type: java.lang.String | string): void
                // @ts-ignore
                public getContentType(): string
                // @ts-ignore
                public setContentLength(contentLength: number /*long*/): void
                // @ts-ignore
                public getContentLength(): number /*int*/
                // @ts-ignore
                public getContentLengthLong(): number /*long*/
                /**
                 * Write a chunk of bytes.
                 * @param chunk The ByteBuffer to write
                 * @throws IOException If an I/O error occurs during the write
                 */
                // @ts-ignore
                public doWrite(chunk: java.nio.ByteBuffer): void
                // @ts-ignore
                public recycle(): void
                /**
                 * Bytes written by application - i.e. before compression, chunking, etc.
                 * @return The total number of bytes written to the response by the
                 *          application. This will not be the number of bytes written to the
                 *          network which may be more or less than this value.
                 */
                // @ts-ignore
                public getContentWritten(): number /*long*/
                /**
                 * Bytes written to socket - i.e. after compression, chunking, etc.
                 * @param flush Should any remaining bytes be flushed before returning the
                 *               total? If {#code false} bytes remaining in the buffer will
                 *               not be included in the returned value
                 * @return The total number of bytes written to the socket for this response
                 */
                // @ts-ignore
                public getBytesWritten(flush: boolean): number /*long*/
                // @ts-ignore
                public getWriteListener(): javax.servlet.WriteListener
                // @ts-ignore
                public setWriteListener(listener: javax.servlet.WriteListener): void
                // @ts-ignore
                public isReady(): boolean
                // @ts-ignore
                public checkRegisterForWrite(): boolean
                // @ts-ignore
                public onWritePossible(): void
            }
        }
    }
}
