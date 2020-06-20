declare namespace java {
    namespace io {
        /**
         * Methods to access the character-based console device, if any, associated
         * with the current Java virtual machine.
         * <p> Whether a virtual machine has a console is dependent upon the
         * underlying platform and also upon the manner in which the virtual
         * machine is invoked.  If the virtual machine is started from an
         * interactive command line without redirecting the standard input and
         * output streams then its console will exist and will typically be
         * connected to the keyboard and display from which the virtual machine
         * was launched.  If the virtual machine is started automatically, for
         * example by a background job scheduler, then it will typically not
         * have a console.
         * <p>
         * If this virtual machine has a console then it is represented by a
         * unique instance of this class which can be obtained by invoking the
         * {@link java.lang.System#console()} method.  If no console device is
         * available then an invocation of that method will return <tt>null</tt>.
         * <p>
         * Read and write operations are synchronized to guarantee the atomic
         * completion of critical operations; therefore invoking methods
         * {@link #readLine()}, {@link #readPassword()}, {@link #format format()},
         * {@link #printf printf()} as well as the read, format and write operations
         * on the objects returned by {@link #reader()} and {@link #writer()} may
         * block in multithreaded scenarios.
         * <p>
         * Invoking <tt>close()</tt> on the objects returned by the {@link #reader()}
         * and the {@link #writer()} will not close the underlying stream of those
         * objects.
         * <p>
         * The console-read methods return <tt>null</tt> when the end of the
         * console input stream is reached, for example by typing control-D on
         * Unix or control-Z on Windows.  Subsequent read operations will succeed
         * if additional characters are later entered on the console's input
         * device.
         * <p>
         * Unless otherwise specified, passing a <tt>null</tt> argument to any method
         * in this class will cause a {@link NullPointerException} to be thrown.
         * <p>
         * <b>Security note:</b>
         * If an application needs to read a password or other secure data, it should
         * use {@link #readPassword()} or {@link #readPassword(String, Object...)} and
         * manually zero the returned character array after processing to minimize the
         * lifetime of sensitive data in memory.
         * <blockquote><pre>{@code
         * Console cons;
         * char[] passwd;
         * if ((cons = System.console()) != null &&
         * (passwd = cons.readPassword("[%s]", "Password:")) != null) {
         * ...
         * java.util.Arrays.fill(passwd, ' ');
         * }
         * }</pre></blockquote>
         * @author Xueming Shen
         * @since 1.6
         */
        // @ts-ignore
        class Console extends java.lang.Object implements java.io.Flushable {
            /**
             * Retrieves the unique {@link java.io.PrintWriter PrintWriter} object
             * associated with this console.
             * @return The printwriter associated with this console
             */
            // @ts-ignore
            writer(): java.io.PrintWriter
            /**
             * Retrieves the unique {@link java.io.Reader Reader} object associated
             * with this console.
             * <p>
             * This method is intended to be used by sophisticated applications, for
             * example, a {@link java.util.Scanner} object which utilizes the rich
             * parsing/scanning functionality provided by the <tt>Scanner</tt>:
             * <blockquote><pre>
             * Console con = System.console();
             * if (con != null) {
             * Scanner sc = new Scanner(con.reader());
             * ...
             * }
             * </pre></blockquote>
             * <p>
             * For simple applications requiring only line-oriented reading, use
             * <tt>{@link #readLine}</tt>.
             * <p>
             * The bulk read operations {@link java.io.Reader#read(char[]) read(char[]) },
             * {@link java.io.Reader#read(char[], int, int) read(char[], int, int) } and
             * {@link java.io.Reader#read(java.nio.CharBuffer) read(java.nio.CharBuffer)}
             * on the returned object will not read in characters beyond the line
             * bound for each invocation, even if the destination buffer has space for
             * more characters. The {@code Reader}'s {@code read} methods may block if a
             * line bound has not been entered or reached on the console's input device.
             * A line bound is considered to be any one of a line feed (<tt>'\n'</tt>),
             * a carriage return (<tt>'\r'</tt>), a carriage return followed immediately
             * by a linefeed, or an end of stream.
             * @return The reader associated with this console
             */
            // @ts-ignore
            reader(): java.io.Reader
            /**
             * Writes a formatted string to this console's output stream using
             * the specified format string and arguments.
             * @param fmt
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
             * @throws IllegalFormatException
             *           If a format string contains an illegal syntax, a format
             *           specifier that is incompatible with the given arguments,
             *           insufficient arguments given the format string, or other
             *           illegal conditions.  For specification of all possible
             *           formatting errors, see the <a
             *           href="../util/Formatter.html#detail">Details</a> section
             *           of the formatter class specification.
             * @return This console
             */
            // @ts-ignore
            format(fmt: string, ...args: any[]): java.io.Console
            /**
             * A convenience method to write a formatted string to this console's
             * output stream using the specified format string and arguments.
             * <p> An invocation of this method of the form <tt>con.printf(format,
             * args)</tt> behaves in exactly the same way as the invocation of
             * <pre>con.format(format, args)</pre>.
             * @param format
             *          A format string as described in <a
             *          href="../util/Formatter.html#syntax">Format string syntax</a>.
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
             * @throws IllegalFormatException
             *           If a format string contains an illegal syntax, a format
             *           specifier that is incompatible with the given arguments,
             *           insufficient arguments given the format string, or other
             *           illegal conditions.  For specification of all possible
             *           formatting errors, see the <a
             *           href="../util/Formatter.html#detail">Details</a> section of the
             *           formatter class specification.
             * @return This console
             */
            // @ts-ignore
            printf(format: string, ...args: any[]): java.io.Console
            /**
             * Provides a formatted prompt, then reads a single line of text from the
             * console.
             * @param fmt
             *          A format string as described in <a
             *          href="../util/Formatter.html#syntax">Format string syntax</a>.
             * @param args
             *          Arguments referenced by the format specifiers in the format
             *          string.  If there are more arguments than format specifiers, the
             *          extra arguments are ignored.  The maximum number of arguments is
             *          limited by the maximum dimension of a Java array as defined by
             *          <cite>The Java&trade; Virtual Machine Specification</cite>.
             * @throws IllegalFormatException
             *           If a format string contains an illegal syntax, a format
             *           specifier that is incompatible with the given arguments,
             *           insufficient arguments given the format string, or other
             *           illegal conditions.  For specification of all possible
             *           formatting errors, see the <a
             *           href="../util/Formatter.html#detail">Details</a> section
             *           of the formatter class specification.
             * @throws IOError
             *          If an I/O error occurs.
             * @return A string containing the line read from the console, not
             *           including any line-termination characters, or <tt>null</tt>
             *           if an end of stream has been reached.
             */
            // @ts-ignore
            readLine(fmt: string, ...args: any[]): java.lang.String
            /**
             * Reads a single line of text from the console.
             * @throws IOError
             *          If an I/O error occurs.
             * @return A string containing the line read from the console, not
             *           including any line-termination characters, or <tt>null</tt>
             *           if an end of stream has been reached.
             */
            // @ts-ignore
            readLine(): java.lang.String
            /**
             * Provides a formatted prompt, then reads a password or passphrase from
             * the console with echoing disabled.
             * @param fmt
             *          A format string as described in <a
             *          href="../util/Formatter.html#syntax">Format string syntax</a>
             *          for the prompt text.
             * @param args
             *          Arguments referenced by the format specifiers in the format
             *          string.  If there are more arguments than format specifiers, the
             *          extra arguments are ignored.  The maximum number of arguments is
             *          limited by the maximum dimension of a Java array as defined by
             *          <cite>The Java&trade; Virtual Machine Specification</cite>.
             * @throws IllegalFormatException
             *           If a format string contains an illegal syntax, a format
             *           specifier that is incompatible with the given arguments,
             *           insufficient arguments given the format string, or other
             *           illegal conditions.  For specification of all possible
             *           formatting errors, see the <a
             *           href="../util/Formatter.html#detail">Details</a>
             *           section of the formatter class specification.
             * @throws IOError
             *          If an I/O error occurs.
             * @return A character array containing the password or passphrase read
             *           from the console, not including any line-termination characters,
             *           or <tt>null</tt> if an end of stream has been reached.
             */
            // @ts-ignore
            readPassword(fmt: string, ...args: any[]): char[]
            /**
             * Reads a password or passphrase from the console with echoing disabled
             * @throws IOError
             *          If an I/O error occurs.
             * @return A character array containing the password or passphrase read
             *           from the console, not including any line-termination characters,
             *           or <tt>null</tt> if an end of stream has been reached.
             */
            // @ts-ignore
            readPassword(): char[]
            /**
             * Flushes the console and forces any buffered output to be written
             * immediately .
             */
            // @ts-ignore
            flush(): void
        }
    }
}
