declare namespace java {
    namespace io {
        /**
         * A <code>PrintStream</code> adds functionality to another output stream,
         * namely the ability to print representations of various data values
         * conveniently.  Two other features are provided as well.  Unlike other output
         * streams, a <code>PrintStream</code> never throws an
         * <code>IOException</code>; instead, exceptional situations merely set an
         * internal flag that can be tested via the <code>checkError</code> method.
         * Optionally, a <code>PrintStream</code> can be created so as to flush
         * automatically; this means that the <code>flush</code> method is
         * automatically invoked after a byte array is written, one of the
         * <code>println</code> methods is invoked, or a newline character or byte
         * (<code>'\n'</code>) is written.
         * <p> All characters printed by a <code>PrintStream</code> are converted into
         * bytes using the platform's default character encoding.  The <code>{@link
         * PrintWriter}</code> class should be used in situations that require writing
         * characters rather than bytes.
         * @author Frank Yellin
         * @author Mark Reinhold
         * @since JDK1.0
         */
        // @ts-ignore
        class PrintStream extends java.io.FilterOutputStream implements java.lang.Appendable, java.io.Closeable {
            /**
             * Creates a new print stream.  This stream will not flush automatically.
             * @param out        The output stream to which values and objects will be
             *                     printed
             * @see java.io.PrintWriter#PrintWriter(java.io.OutputStream)
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream)
            /**
             * Creates a new print stream.
             * @param out        The output stream to which values and objects will be
             *                     printed
             * @param autoFlush  A boolean; if true, the output buffer will be flushed
             *                     whenever a byte array is written, one of the
             *                     <code>println</code> methods is invoked, or a newline
             *                     character or byte (<code>'\n'</code>) is written
             * @see java.io.PrintWriter#PrintWriter(java.io.OutputStream, boolean)
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream, autoFlush: boolean)
            /**
             * Creates a new print stream.
             * @param out        The output stream to which values and objects will be
             *                     printed
             * @param autoFlush  A boolean; if true, the output buffer will be flushed
             *                     whenever a byte array is written, one of the
             *                     <code>println</code> methods is invoked, or a newline
             *                     character or byte (<code>'\n'</code>) is written
             * @param encoding   The name of a supported
             *                     <a href="../lang/package-summary.html#charenc">
             *                     character encoding</a>
             * @throws UnsupportedEncodingException
             *           If the named encoding is not supported
             * @since 1.4
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream, autoFlush: boolean, encoding: java.lang.String | string)
            /**
             * Creates a new print stream, without automatic line flushing, with the
             * specified file name.  This convenience constructor creates
             * the necessary intermediate {@link java.io.OutputStreamWriter
             * OutputStreamWriter}, which will encode characters using the
             * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}
             * for this instance of the Java virtual machine.
             * @param fileName
             *          The name of the file to use as the destination of this print
             *          stream.  If the file exists, then it will be truncated to
             *          zero size; otherwise, a new file will be created.  The output
             *          will be written to the file and is buffered.
             * @throws FileNotFoundException
             *           If the given file object does not denote an existing, writable
             *           regular file and a new regular file of that name cannot be
             *           created, or if some other error occurs while opening or
             *           creating the file
             * @throws SecurityException
             *           If a security manager is present and {#link
             *           SecurityManager#checkWrite checkWrite(fileName)} denies write
             *           access to the file
             * @since 1.5
             */
            // @ts-ignore
            constructor(fileName: java.lang.String | string)
            /**
             * Creates a new print stream, without automatic line flushing, with the
             * specified file name and charset.  This convenience constructor creates
             * the necessary intermediate {@link java.io.OutputStreamWriter
             * OutputStreamWriter}, which will encode characters using the provided
             * charset.
             * @param fileName
             *          The name of the file to use as the destination of this print
             *          stream.  If the file exists, then it will be truncated to
             *          zero size; otherwise, a new file will be created.  The output
             *          will be written to the file and is buffered.
             * @param csn
             *          The name of a supported {#linkplain java.nio.charset.Charset
             *          charset}
             * @throws FileNotFoundException
             *           If the given file object does not denote an existing, writable
             *           regular file and a new regular file of that name cannot be
             *           created, or if some other error occurs while opening or
             *           creating the file
             * @throws SecurityException
             *           If a security manager is present and {#link
             *           SecurityManager#checkWrite checkWrite(fileName)} denies write
             *           access to the file
             * @throws UnsupportedEncodingException
             *           If the named charset is not supported
             * @since 1.5
             */
            // @ts-ignore
            constructor(fileName: java.lang.String | string, csn: java.lang.String | string)
            /**
             * Creates a new print stream, without automatic line flushing, with the
             * specified file.  This convenience constructor creates the necessary
             * intermediate {@link java.io.OutputStreamWriter OutputStreamWriter},
             * which will encode characters using the {@linkplain
             * java.nio.charset.Charset#defaultCharset() default charset} for this
             * instance of the Java virtual machine.
             * @param file
             *          The file to use as the destination of this print stream.  If the
             *          file exists, then it will be truncated to zero size; otherwise,
             *          a new file will be created.  The output will be written to the
             *          file and is buffered.
             * @throws FileNotFoundException
             *           If the given file object does not denote an existing, writable
             *           regular file and a new regular file of that name cannot be
             *           created, or if some other error occurs while opening or
             *           creating the file
             * @throws SecurityException
             *           If a security manager is present and {#link
             *           SecurityManager#checkWrite checkWrite(file.getPath())}
             *           denies write access to the file
             * @since 1.5
             */
            // @ts-ignore
            constructor(file: java.io.File)
            /**
             * Creates a new print stream, without automatic line flushing, with the
             * specified file and charset.  This convenience constructor creates
             * the necessary intermediate {@link java.io.OutputStreamWriter
             * OutputStreamWriter}, which will encode characters using the provided
             * charset.
             * @param file
             *          The file to use as the destination of this print stream.  If the
             *          file exists, then it will be truncated to zero size; otherwise,
             *          a new file will be created.  The output will be written to the
             *          file and is buffered.
             * @param csn
             *          The name of a supported {#linkplain java.nio.charset.Charset
             *          charset}
             * @throws FileNotFoundException
             *           If the given file object does not denote an existing, writable
             *           regular file and a new regular file of that name cannot be
             *           created, or if some other error occurs while opening or
             *           creating the file
             * @throws SecurityException
             *           If a security manager is present and {#link
             *           SecurityManager#checkWrite checkWrite(file.getPath())}
             *           denies write access to the file
             * @throws UnsupportedEncodingException
             *           If the named charset is not supported
             * @since 1.5
             */
            // @ts-ignore
            constructor(file: java.io.File, csn: java.lang.String | string)
            /**
             * Flushes the stream.  This is done by writing any buffered output bytes to
             * the underlying output stream and then flushing that stream.
             * @see java.io.OutputStream#flush()
             */
            // @ts-ignore
            public flush(): void
            /**
             * Closes the stream.  This is done by flushing the stream and then closing
             * the underlying output stream.
             * @see java.io.OutputStream#close()
             */
            // @ts-ignore
            public close(): void
            /**
             * Flushes the stream and checks its error state. The internal error state
             * is set to <code>true</code> when the underlying output stream throws an
             * <code>IOException</code> other than <code>InterruptedIOException</code>,
             * and when the <code>setError</code> method is invoked.  If an operation
             * on the underlying output stream throws an
             * <code>InterruptedIOException</code>, then the <code>PrintStream</code>
             * converts the exception back into an interrupt by doing:
             * <pre>
             * Thread.currentThread().interrupt();
             * </pre>
             * or the equivalent.
             * @return <code>true</code> if and only if this stream has encountered an
             *          <code>IOException</code> other than
             *          <code>InterruptedIOException</code>, or the
             *          <code>setError</code> method has been invoked
             */
            // @ts-ignore
            public checkError(): boolean
            /**
             * Sets the error state of the stream to <code>true</code>.
             * <p> This method will cause subsequent invocations of {@link
             * #checkError()} to return <tt>true</tt> until {@link
             * #clearError()} is invoked.
             * @since JDK1.1
             */
            // @ts-ignore
            setError(): void
            /**
             * Clears the internal error state of this stream.
             * <p> This method will cause subsequent invocations of {@link
             * #checkError()} to return <tt>false</tt> until another write
             * operation fails and invokes {@link #setError()}.
             * @since 1.6
             */
            // @ts-ignore
            clearError(): void
            /**
             * Writes the specified byte to this stream.  If the byte is a newline and
             * automatic flushing is enabled then the <code>flush</code> method will be
             * invoked.
             * <p> Note that the byte is written as given; to write a character that
             * will be translated according to the platform's default character
             * encoding, use the <code>print(char)</code> or <code>println(char)</code>
             * methods.
             * @param b  The byte to be written
             * @see #print(char)
             * @see #println(char)
             */
            // @ts-ignore
            public write(b: number /*int*/): void
            /**
             * Writes <code>len</code> bytes from the specified byte array starting at
             * offset <code>off</code> to this stream.  If automatic flushing is
             * enabled then the <code>flush</code> method will be invoked.
             * <p> Note that the bytes will be written as given; to write characters
             * that will be translated according to the platform's default character
             * encoding, use the <code>print(char)</code> or <code>println(char)</code>
             * methods.
             * @param buf   A byte array
             * @param off   Offset from which to start taking bytes
             * @param len   Number of bytes to write
             */
            // @ts-ignore
            public write(buf: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
            /**
             * Prints a boolean value.  The string produced by <code>{@link
             * java.lang.String#valueOf(boolean)}</code> is translated into bytes
             * according to the platform's default character encoding, and these bytes
             * are written in exactly the manner of the
             * <code>{@link #write(int)}</code> method.
             * @param b   The <code>boolean</code> to be printed
             */
            // @ts-ignore
            public print(b: boolean): void
            /**
             * Prints a character.  The character is translated into one or more bytes
             * according to the platform's default character encoding, and these bytes
             * are written in exactly the manner of the
             * <code>{@link #write(int)}</code> method.
             * @param c   The <code>char</code> to be printed
             */
            // @ts-ignore
            public print(c: string): void
            /**
             * Prints an integer.  The string produced by <code>{@link
             * java.lang.String#valueOf(int)}</code> is translated into bytes
             * according to the platform's default character encoding, and these bytes
             * are written in exactly the manner of the
             * <code>{@link #write(int)}</code> method.
             * @param i   The <code>int</code> to be printed
             * @see java.lang.Integer#toString(int)
             */
            // @ts-ignore
            public print(i: number /*int*/): void
            /**
             * Prints a long integer.  The string produced by <code>{@link
             * java.lang.String#valueOf(long)}</code> is translated into bytes
             * according to the platform's default character encoding, and these bytes
             * are written in exactly the manner of the
             * <code>{@link #write(int)}</code> method.
             * @param l   The <code>long</code> to be printed
             * @see java.lang.Long#toString(long)
             */
            // @ts-ignore
            public print(l: number /*long*/): void
            /**
             * Prints a floating-point number.  The string produced by <code>{@link
             * java.lang.String#valueOf(float)}</code> is translated into bytes
             * according to the platform's default character encoding, and these bytes
             * are written in exactly the manner of the
             * <code>{@link #write(int)}</code> method.
             * @param f   The <code>float</code> to be printed
             * @see java.lang.Float#toString(float)
             */
            // @ts-ignore
            public print(f: number /*float*/): void
            /**
             * Prints a double-precision floating-point number.  The string produced by
             * <code>{@link java.lang.String#valueOf(double)}</code> is translated into
             * bytes according to the platform's default character encoding, and these
             * bytes are written in exactly the manner of the <code>{@link
             * #write(int)}</code> method.
             * @param d   The <code>double</code> to be printed
             * @see java.lang.Double#toString(double)
             */
            // @ts-ignore
            public print(d: number /*double*/): void
            /**
             * Prints an array of characters.  The characters are converted into bytes
             * according to the platform's default character encoding, and these bytes
             * are written in exactly the manner of the
             * <code>{@link #write(int)}</code> method.
             * @param s   The array of chars to be printed
             * @throws NullPointerException  If <code>s</code> is <code>null</code>
             */
            // @ts-ignore
            public print(s: string[]): void
            /**
             * Prints a string.  If the argument is <code>null</code> then the string
             * <code>"null"</code> is printed.  Otherwise, the string's characters are
             * converted into bytes according to the platform's default character
             * encoding, and these bytes are written in exactly the manner of the
             * <code>{@link #write(int)}</code> method.
             * @param s   The <code>String</code> to be printed
             */
            // @ts-ignore
            public print(s: java.lang.String | string): void
            /**
             * Prints an object.  The string produced by the <code>{@link
             * java.lang.String#valueOf(Object)}</code> method is translated into bytes
             * according to the platform's default character encoding, and these bytes
             * are written in exactly the manner of the
             * <code>{@link #write(int)}</code> method.
             * @param obj   The <code>Object</code> to be printed
             * @see java.lang.Object#toString()
             */
            // @ts-ignore
            public print(obj: java.lang.Object | any): void
            /**
             * Terminates the current line by writing the line separator string.  The
             * line separator string is defined by the system property
             * <code>line.separator</code>, and is not necessarily a single newline
             * character (<code>'\n'</code>).
             */
            // @ts-ignore
            public println(): void
            /**
             * Prints a boolean and then terminate the line.  This method behaves as
             * though it invokes <code>{@link #print(boolean)}</code> and then
             * <code>{@link #println()}</code>.
             * @param x  The <code>boolean</code> to be printed
             */
            // @ts-ignore
            public println(x: boolean): void
            /**
             * Prints a character and then terminate the line.  This method behaves as
             * though it invokes <code>{@link #print(char)}</code> and then
             * <code>{@link #println()}</code>.
             * @param x  The <code>char</code> to be printed.
             */
            // @ts-ignore
            public println(x: string): void
            /**
             * Prints an integer and then terminate the line.  This method behaves as
             * though it invokes <code>{@link #print(int)}</code> and then
             * <code>{@link #println()}</code>.
             * @param x  The <code>int</code> to be printed.
             */
            // @ts-ignore
            public println(x: number /*int*/): void
            /**
             * Prints a long and then terminate the line.  This method behaves as
             * though it invokes <code>{@link #print(long)}</code> and then
             * <code>{@link #println()}</code>.
             * @param x  a The <code>long</code> to be printed.
             */
            // @ts-ignore
            public println(x: number /*long*/): void
            /**
             * Prints a float and then terminate the line.  This method behaves as
             * though it invokes <code>{@link #print(float)}</code> and then
             * <code>{@link #println()}</code>.
             * @param x  The <code>float</code> to be printed.
             */
            // @ts-ignore
            public println(x: number /*float*/): void
            /**
             * Prints a double and then terminate the line.  This method behaves as
             * though it invokes <code>{@link #print(double)}</code> and then
             * <code>{@link #println()}</code>.
             * @param x  The <code>double</code> to be printed.
             */
            // @ts-ignore
            public println(x: number /*double*/): void
            /**
             * Prints an array of characters and then terminate the line.  This method
             * behaves as though it invokes <code>{@link #print(char[])}</code> and
             * then <code>{@link #println()}</code>.
             * @param x  an array of chars to print.
             */
            // @ts-ignore
            public println(x: string[]): void
            /**
             * Prints a String and then terminate the line.  This method behaves as
             * though it invokes <code>{@link #print(String)}</code> and then
             * <code>{@link #println()}</code>.
             * @param x  The <code>String</code> to be printed.
             */
            // @ts-ignore
            public println(x: java.lang.String | string): void
            /**
             * Prints an Object and then terminate the line.  This method calls
             * at first String.valueOf(x) to get the printed object's string value,
             * then behaves as
             * though it invokes <code>{@link #print(String)}</code> and then
             * <code>{@link #println()}</code>.
             * @param x  The <code>Object</code> to be printed.
             */
            // @ts-ignore
            public println(x: java.lang.Object | any): void
            /**
             * A convenience method to write a formatted string to this output stream
             * using the specified format string and arguments.
             * <p> An invocation of this method of the form <tt>out.printf(format,
             * args)</tt> behaves in exactly the same way as the invocation
             * <pre>
             * out.format(format, args) </pre>
             * @param format
             *          A format string as described in <a
             *          href="../util/Formatter.html#syntax">Format string syntax</a>
             * @param args
             *          Arguments referenced by the format specifiers in the format
             *          string.  If there are more arguments than format specifiers, the
             *          extra arguments are ignored.  The number of arguments is
             *          variable and may be zero.  The maximum number of arguments is
             *          limited by the maximum dimension of a Java array as defined by
             *          <cite>The Java&trade; Virtual Machine Specification</cite>.
             *          The behaviour on a
             *          <tt>null</tt> argument depends on the <a
             *          href="../util/Formatter.html#syntax">conversion</a>.
             * @throws java.util.IllegalFormatException
             *           If a format string contains an illegal syntax, a format
             *           specifier that is incompatible with the given arguments,
             *           insufficient arguments given the format string, or other
             *           illegal conditions.  For specification of all possible
             *           formatting errors, see the <a
             *           href="../util/Formatter.html#detail">Details</a> section of the
             *           formatter class specification.
             * @throws NullPointerException
             *           If the <tt>format</tt> is <tt>null</tt>
             * @return This output stream
             * @since 1.5
             */
            // @ts-ignore
            public printf(format: java.lang.String | string, ...args: java.lang.Object[] | any[]): java.io.PrintStream
            /**
             * A convenience method to write a formatted string to this output stream
             * using the specified format string and arguments.
             * <p> An invocation of this method of the form <tt>out.printf(l, format,
             * args)</tt> behaves in exactly the same way as the invocation
             * <pre>
             * out.format(l, format, args) </pre>
             * @param l
             *          The {#linkplain java.util.Locale locale} to apply during
             *          formatting.  If <tt>l</tt> is <tt>null</tt> then no localization
             *          is applied.
             * @param format
             *          A format string as described in <a
             *          href="../util/Formatter.html#syntax">Format string syntax</a>
             * @param args
             *          Arguments referenced by the format specifiers in the format
             *          string.  If there are more arguments than format specifiers, the
             *          extra arguments are ignored.  The number of arguments is
             *          variable and may be zero.  The maximum number of arguments is
             *          limited by the maximum dimension of a Java array as defined by
             *          <cite>The Java&trade; Virtual Machine Specification</cite>.
             *          The behaviour on a
             *          <tt>null</tt> argument depends on the <a
             *          href="../util/Formatter.html#syntax">conversion</a>.
             * @throws java.util.IllegalFormatException
             *           If a format string contains an illegal syntax, a format
             *           specifier that is incompatible with the given arguments,
             *           insufficient arguments given the format string, or other
             *           illegal conditions.  For specification of all possible
             *           formatting errors, see the <a
             *           href="../util/Formatter.html#detail">Details</a> section of the
             *           formatter class specification.
             * @throws NullPointerException
             *           If the <tt>format</tt> is <tt>null</tt>
             * @return This output stream
             * @since 1.5
             */
            // @ts-ignore
            public printf(l: java.util.Locale, format: java.lang.String | string, ...args: java.lang.Object[] | any[]): java.io.PrintStream
            /**
             * Writes a formatted string to this output stream using the specified
             * format string and arguments.
             * <p> The locale always used is the one returned by {@link
             * java.util.Locale#getDefault() Locale.getDefault()}, regardless of any
             * previous invocations of other formatting methods on this object.
             * @param format
             *          A format string as described in <a
             *          href="../util/Formatter.html#syntax">Format string syntax</a>
             * @param args
             *          Arguments referenced by the format specifiers in the format
             *          string.  If there are more arguments than format specifiers, the
             *          extra arguments are ignored.  The number of arguments is
             *          variable and may be zero.  The maximum number of arguments is
             *          limited by the maximum dimension of a Java array as defined by
             *          <cite>The Java&trade; Virtual Machine Specification</cite>.
             *          The behaviour on a
             *          <tt>null</tt> argument depends on the <a
             *          href="../util/Formatter.html#syntax">conversion</a>.
             * @throws java.util.IllegalFormatException
             *           If a format string contains an illegal syntax, a format
             *           specifier that is incompatible with the given arguments,
             *           insufficient arguments given the format string, or other
             *           illegal conditions.  For specification of all possible
             *           formatting errors, see the <a
             *           href="../util/Formatter.html#detail">Details</a> section of the
             *           formatter class specification.
             * @throws NullPointerException
             *           If the <tt>format</tt> is <tt>null</tt>
             * @return This output stream
             * @since 1.5
             */
            // @ts-ignore
            public format(format: java.lang.String | string, ...args: java.lang.Object[] | any[]): java.io.PrintStream
            /**
             * Writes a formatted string to this output stream using the specified
             * format string and arguments.
             * @param l
             *          The {#linkplain java.util.Locale locale} to apply during
             *          formatting.  If <tt>l</tt> is <tt>null</tt> then no localization
             *          is applied.
             * @param format
             *          A format string as described in <a
             *          href="../util/Formatter.html#syntax">Format string syntax</a>
             * @param args
             *          Arguments referenced by the format specifiers in the format
             *          string.  If there are more arguments than format specifiers, the
             *          extra arguments are ignored.  The number of arguments is
             *          variable and may be zero.  The maximum number of arguments is
             *          limited by the maximum dimension of a Java array as defined by
             *          <cite>The Java&trade; Virtual Machine Specification</cite>.
             *          The behaviour on a
             *          <tt>null</tt> argument depends on the <a
             *          href="../util/Formatter.html#syntax">conversion</a>.
             * @throws java.util.IllegalFormatException
             *           If a format string contains an illegal syntax, a format
             *           specifier that is incompatible with the given arguments,
             *           insufficient arguments given the format string, or other
             *           illegal conditions.  For specification of all possible
             *           formatting errors, see the <a
             *           href="../util/Formatter.html#detail">Details</a> section of the
             *           formatter class specification.
             * @throws NullPointerException
             *           If the <tt>format</tt> is <tt>null</tt>
             * @return This output stream
             * @since 1.5
             */
            // @ts-ignore
            public format(l: java.util.Locale, format: java.lang.String | string, ...args: java.lang.Object[] | any[]): java.io.PrintStream
            /**
             * Appends the specified character sequence to this output stream.
             * <p> An invocation of this method of the form <tt>out.append(csq)</tt>
             * behaves in exactly the same way as the invocation
             * <pre>
             * out.print(csq.toString()) </pre>
             * <p> Depending on the specification of <tt>toString</tt> for the
             * character sequence <tt>csq</tt>, the entire sequence may not be
             * appended.  For instance, invoking then <tt>toString</tt> method of a
             * character buffer will return a subsequence whose content depends upon
             * the buffer's position and limit.
             * @param csq
             *          The character sequence to append.  If <tt>csq</tt> is
             *          <tt>null</tt>, then the four characters <tt>"null"</tt> are
             *          appended to this output stream.
             * @return This output stream
             * @since 1.5
             */
            // @ts-ignore
            public append(csq: java.lang.CharSequence): java.io.PrintStream
            /**
             * Appends a subsequence of the specified character sequence to this output
             * stream.
             * <p> An invocation of this method of the form <tt>out.append(csq, start,
             * end)</tt> when <tt>csq</tt> is not <tt>null</tt>, behaves in
             * exactly the same way as the invocation
             * <pre>
             * out.print(csq.subSequence(start, end).toString()) </pre>
             * @param csq
             *          The character sequence from which a subsequence will be
             *          appended.  If <tt>csq</tt> is <tt>null</tt>, then characters
             *          will be appended as if <tt>csq</tt> contained the four
             *          characters <tt>"null"</tt>.
             * @param start
             *          The index of the first character in the subsequence
             * @param end
             *          The index of the character following the last character in the
             *          subsequence
             * @return This output stream
             * @throws IndexOutOfBoundsException
             *           If <tt>start</tt> or <tt>end</tt> are negative, <tt>start</tt>
             *           is greater than <tt>end</tt>, or <tt>end</tt> is greater than
             *           <tt>csq.length()</tt>
             * @since 1.5
             */
            // @ts-ignore
            public append(csq: java.lang.CharSequence, start: number /*int*/, end: number /*int*/): java.io.PrintStream
            /**
             * Appends the specified character to this output stream.
             * <p> An invocation of this method of the form <tt>out.append(c)</tt>
             * behaves in exactly the same way as the invocation
             * <pre>
             * out.print(c) </pre>
             * @param c
             *          The 16-bit character to append
             * @return This output stream
             * @since 1.5
             */
            // @ts-ignore
            public append(c: string): java.io.PrintStream
        }
    }
}
