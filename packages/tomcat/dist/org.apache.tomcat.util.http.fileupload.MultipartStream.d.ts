declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * <p> Low level API for processing file uploads.
                         * <p> This class can be used to process data streams conforming to MIME
                         * 'multipart' format as defined in
                         * <a href="http://www.ietf.org/rfc/rfc1867.txt">RFC 1867</a>. Arbitrarily
                         * large amounts of data in the stream can be processed under constant
                         * memory usage.
                         * <p> The format of the stream is defined in the following way:<br>
                         * <code>
                         * multipart-body := preamble 1*encapsulation close-delimiter epilogue<br>
                         * encapsulation := delimiter body CRLF<br>
                         * delimiter := "--" boundary CRLF<br>
                         * close-delimiter := "--" boundary "--"<br>
                         * preamble := &lt;ignore&gt;<br>
                         * epilogue := &lt;ignore&gt;<br>
                         * body := header-part CRLF body-part<br>
                         * header-part := 1*header CRLF<br>
                         * header := header-name ":" header-value<br>
                         * header-name := &lt;printable ascii characters except ":"&gt;<br>
                         * header-value := &lt;any ascii characters except CR &amp; LF&gt;<br>
                         * body-data := &lt;arbitrary data&gt;<br>
                         * </code>
                         * <p>Note that body-data can contain another mulipart entity.  There
                         * is limited support for single pass processing of such nested
                         * streams.  The nested stream is <strong>required</strong> to have a
                         * boundary token of the same length as the parent stream (see {@link
                         * #setBoundary(byte[])}).
                         * <p>Here is an example of usage of this class.<br>
                         * <pre>
                         * try {
                         * MultipartStream multipartStream = new MultipartStream(input, boundary);
                         * boolean nextPart = multipartStream.skipPreamble();
                         * OutputStream output;
                         * while(nextPart) {
                         * String header = multipartStream.readHeaders();
                         * // process headers
                         * // create some output stream
                         * multipartStream.readBodyData(output);
                         * nextPart = multipartStream.readBoundary();
                         * }
                         * } catch(MultipartStream.MalformedStreamException e) {
                         * // the stream failed to follow required syntax
                         * } catch(IOException e) {
                         * // a read or write error occurred
                         * }
                         * </pre>
                         */
                        // @ts-ignore
                        class MultipartStream extends java.lang.Object {
                            /**
                             * <p> Constructs a <code>MultipartStream</code> with a custom size buffer.
                             * <p> Note that the buffer must be at least big enough to contain the
                             * boundary string, plus 4 characters for CR/LF and double dash, plus at
                             * least one byte of data.  Too small a buffer size setting will degrade
                             * performance.
                             * @param input    The <code>InputStream</code> to serve as a data source.
                             * @param boundary The token used for dividing the stream into
                             *                  <code>encapsulations</code>.
                             * @param bufSize  The size of the buffer to be used, in bytes.
                             * @param pNotifier The notifier, which is used for calling the
                             *                   progress listener, if any.
                             * @throws IllegalArgumentException If the buffer size is too small
                             * @since 1.3.1
                             */
                            // @ts-ignore
                            constructor(input: java.io.InputStream, boundary: number /*byte*/[], bufSize: number /*int*/, pNotifier: org.apache.tomcat.util.http.fileupload.MultipartStream.ProgressNotifier)
                            /**
                             * The Carriage Return ASCII character value.
                             */
                            // @ts-ignore
                            public static readonly CR: number /*byte*/
                            /**
                             * The Line Feed ASCII character value.
                             */
                            // @ts-ignore
                            public static readonly LF: number /*byte*/
                            /**
                             * The dash (-) ASCII character value.
                             */
                            // @ts-ignore
                            public static readonly DASH: number /*byte*/
                            /**
                             * The maximum length of <code>header-part</code> that will be
                             * processed (10 kilobytes = 10240 bytes.).
                             */
                            // @ts-ignore
                            public static readonly HEADER_PART_SIZE_MAX: number /*int*/
                            /**
                             * The default length of the buffer used for processing a request.
                             */
                            // @ts-ignore
                            static readonly DEFAULT_BUFSIZE: number /*int*/
                            /**
                             * A byte sequence that marks the end of <code>header-part</code>
                             * (<code>CRLFCRLF</code>).
                             */
                            // @ts-ignore
                            static readonly HEADER_SEPARATOR: number /*byte*/[]
                            /**
                             * A byte sequence that that follows a delimiter that will be
                             * followed by an encapsulation (<code>CRLF</code>).
                             */
                            // @ts-ignore
                            static readonly FIELD_SEPARATOR: number /*byte*/[]
                            /**
                             * A byte sequence that that follows a delimiter of the last
                             * encapsulation in the stream (<code>--</code>).
                             */
                            // @ts-ignore
                            static readonly STREAM_TERMINATOR: number /*byte*/[]
                            /**
                             * A byte sequence that precedes a boundary (<code>CRLF--</code>).
                             */
                            // @ts-ignore
                            static readonly BOUNDARY_PREFIX: number /*byte*/[]
                            /**
                             * Retrieves the character encoding used when reading the headers of an
                             * individual part. When not specified, or <code>null</code>, the platform
                             * default encoding is used.
                             * @return The encoding used to read part headers.
                             */
                            // @ts-ignore
                            public getHeaderEncoding(): string
                            /**
                             * Specifies the character encoding to be used when reading the headers of
                             * individual parts. When not specified, or <code>null</code>, the platform
                             * default encoding is used.
                             * @param encoding The encoding used to read part headers.
                             */
                            // @ts-ignore
                            public setHeaderEncoding(encoding: java.lang.String | string): void
                            /**
                             * Reads a byte from the <code>buffer</code>, and refills it as
                             * necessary.
                             * @return The next byte from the input stream.
                             * @throws IOException if there is no more data available.
                             */
                            // @ts-ignore
                            public readByte(): number /*byte*/
                            /**
                             * Skips a <code>boundary</code> token, and checks whether more
                             * <code>encapsulations</code> are contained in the stream.
                             * @return <code>true</code> if there are more encapsulations in
                             *          this stream; <code>false</code> otherwise.
                             * @throws FileUploadIOException if the bytes read from the stream exceeded the size limits
                             * @throws MalformedStreamException if the stream ends unexpectedly or
                             *                                   fails to follow required syntax.
                             */
                            // @ts-ignore
                            public readBoundary(): boolean
                            /**
                             * <p>Changes the boundary token used for partitioning the stream.
                             * <p>This method allows single pass processing of nested multipart
                             * streams.
                             * <p>The boundary token of the nested stream is <code>required</code>
                             * to be of the same length as the boundary token in parent stream.
                             * <p>Restoring the parent stream boundary token after processing of a
                             * nested stream is left to the application.
                             * @param boundary The boundary to be used for parsing of the nested
                             *                  stream.
                             * @throws IllegalBoundaryException if the <code>boundary</code>
                             *                                   has a different length than the one
                             *                                   being currently parsed.
                             */
                            // @ts-ignore
                            public setBoundary(boundary: number /*byte*/[]): void
                            /**
                             * <p>Reads the <code>header-part</code> of the current
                             * <code>encapsulation</code>.
                             * <p>Headers are returned verbatim to the input stream, including the
                             * trailing <code>CRLF</code> marker. Parsing is left to the
                             * application.
                             * <p><strong>TODO</strong> allow limiting maximum header size to
                             * protect against abuse.
                             * @return The <code>header-part</code> of the current encapsulation.
                             * @throws FileUploadIOException if the bytes read from the stream exceeded the size limits.
                             * @throws MalformedStreamException if the stream ends unexpectedly.
                             */
                            // @ts-ignore
                            public readHeaders(): string
                            /**
                             * <p>Reads <code>body-data</code> from the current
                             * <code>encapsulation</code> and writes its contents into the
                             * output <code>Stream</code>.
                             * <p>Arbitrary large amounts of data can be processed by this
                             * method using a constant size buffer. (see {@link
                             * #MultipartStream(InputStream,byte[],int,
                             * MultipartStream.ProgressNotifier) constructor}).
                             * @param output The <code>Stream</code> to write data into. May
                             *                be null, in which case this method is equivalent
                             *                to {#link #discardBodyData()}.
                             * @return the amount of data written.
                             * @throws MalformedStreamException if the stream ends unexpectedly.
                             * @throws IOException              if an i/o error occurs.
                             */
                            // @ts-ignore
                            public readBodyData(output: java.io.OutputStream): number /*int*/
                            /**
                             * <p> Reads <code>body-data</code> from the current
                             * <code>encapsulation</code> and discards it.
                             * <p>Use this method to skip encapsulations you don't need or don't
                             * understand.
                             * @return The amount of data discarded.
                             * @throws MalformedStreamException if the stream ends unexpectedly.
                             * @throws IOException              if an i/o error occurs.
                             */
                            // @ts-ignore
                            public discardBodyData(): number /*int*/
                            /**
                             * Finds the beginning of the first <code>encapsulation</code>.
                             * @return <code>true</code> if an <code>encapsulation</code> was found in
                             *          the stream.
                             * @throws IOException if an i/o error occurs.
                             */
                            // @ts-ignore
                            public skipPreamble(): boolean
                            /**
                             * Compares <code>count</code> first bytes in the arrays
                             * <code>a</code> and <code>b</code>.
                             * @param a     The first array to compare.
                             * @param b     The second array to compare.
                             * @param count How many bytes should be compared.
                             * @return <code>true</code> if <code>count</code> first bytes in arrays
                             *          <code>a</code> and <code>b</code> are equal.
                             */
                            // @ts-ignore
                            public static arrayequals(a: number /*byte*/[], b: number /*byte*/[], count: number /*int*/): boolean
                            /**
                             * Searches for a byte of specified value in the <code>buffer</code>,
                             * starting at the specified <code>position</code>.
                             * @param value The value to find.
                             * @param pos   The starting position for searching.
                             * @return The position of byte found, counting from beginning of the
                             *          <code>buffer</code>, or <code>-1</code> if not found.
                             */
                            // @ts-ignore
                            findByte(value: number /*byte*/, pos: number /*int*/): number /*int*/
                            /**
                             * Searches for the <code>boundary</code> in the <code>buffer</code>
                             * region delimited by <code>head</code> and <code>tail</code>.
                             * @return The position of the boundary found, counting from the
                             *          beginning of the <code>buffer</code>, or <code>-1</code> if
                             *          not found.
                             */
                            // @ts-ignore
                            findSeparator(): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
