declare namespace java {
    namespace util {
        /**
         * A simple text scanner which can parse primitive types and strings using
         * regular expressions.
         * <p>A <code>Scanner</code> breaks its input into tokens using a
         * delimiter pattern, which by default matches whitespace. The resulting
         * tokens may then be converted into values of different types using the
         * various <tt>next</tt> methods.
         * <p>For example, this code allows a user to read a number from
         * <tt>System.in</tt>:
         * <blockquote><pre>{@code
         * Scanner sc = new Scanner(System.in);
         * int i = sc.nextInt();
         * }</pre></blockquote>
         * <p>As another example, this code allows <code>long</code> types to be
         * assigned from entries in a file <code>myNumbers</code>:
         * <blockquote><pre>{@code
         * Scanner sc = new Scanner(new File("myNumbers"));
         * while (sc.hasNextLong()) {
         * long aLong = sc.nextLong();
         * }
         * }</pre></blockquote>
         * <p>The scanner can also use delimiters other than whitespace. This
         * example reads several items in from a string:
         * <blockquote><pre>{@code
         * String input = "1 fish 2 fish red fish blue fish";
         * Scanner s = new Scanner(input).useDelimiter("\\s*fish\\s*");
         * System.out.println(s.nextInt());
         * System.out.println(s.nextInt());
         * System.out.println(s.next());
         * System.out.println(s.next());
         * s.close();
         * }</pre></blockquote>
         * <p>
         * prints the following output:
         * <blockquote><pre>{@code
         * 1
         * 2
         * red
         * blue
         * }</pre></blockquote>
         * <p>The same output can be generated with this code, which uses a regular
         * expression to parse all four tokens at once:
         * <blockquote><pre>{@code
         * String input = "1 fish 2 fish red fish blue fish";
         * Scanner s = new Scanner(input);
         * s.findInLine("(\\d+) fish (\\d+) fish (\\w+) fish (\\w+)");
         * MatchResult result = s.match();
         * for (int i=1; i<=result.groupCount(); i++)
         * System.out.println(result.group(i));
         * s.close();
         * }</pre></blockquote>
         * <p>The <a name="default-delimiter">default whitespace delimiter</a> used
         * by a scanner is as recognized by {@link java.lang.Character}.{@link
         * java.lang.Character#isWhitespace(char) isWhitespace}. The {@link #reset}
         * method will reset the value of the scanner's delimiter to the default
         * whitespace delimiter regardless of whether it was previously changed.
         * <p>A scanning operation may block waiting for input.
         * <p>The {@link #next} and {@link #hasNext} methods and their
         * primitive-type companion methods (such as {@link #nextInt} and
         * {@link #hasNextInt}) first skip any input that matches the delimiter
         * pattern, and then attempt to return the next token. Both <tt>hasNext</tt>
         * and <tt>next</tt> methods may block waiting for further input.  Whether a
         * <tt>hasNext</tt> method blocks has no connection to whether or not its
         * associated <tt>next</tt> method will block.
         * <p> The {@link #findInLine}, {@link #findWithinHorizon}, and {@link #skip}
         * methods operate independently of the delimiter pattern. These methods will
         * attempt to match the specified pattern with no regard to delimiters in the
         * input and thus can be used in special circumstances where delimiters are
         * not relevant. These methods may block waiting for more input.
         * <p>When a scanner throws an {@link InputMismatchException}, the scanner
         * will not pass the token that caused the exception, so that it may be
         * retrieved or skipped via some other method.
         * <p>Depending upon the type of delimiting pattern, empty tokens may be
         * returned. For example, the pattern <tt>"\\s+"</tt> will return no empty
         * tokens since it matches multiple instances of the delimiter. The delimiting
         * pattern <tt>"\\s"</tt> could return empty tokens since it only passes one
         * space at a time.
         * <p> A scanner can read text from any object which implements the {@link
         * java.lang.Readable} interface.  If an invocation of the underlying
         * readable's {@link java.lang.Readable#read} method throws an {@link
         * java.io.IOException} then the scanner assumes that the end of the input
         * has been reached.  The most recent <tt>IOException</tt> thrown by the
         * underlying readable can be retrieved via the {@link #ioException} method.
         * <p>When a <code>Scanner</code> is closed, it will close its input source
         * if the source implements the {@link java.io.Closeable} interface.
         * <p>A <code>Scanner</code> is not safe for multithreaded use without
         * external synchronization.
         * <p>Unless otherwise mentioned, passing a <code>null</code> parameter into
         * any method of a <code>Scanner</code> will cause a
         * <code>NullPointerException</code> to be thrown.
         * <p>A scanner will default to interpreting numbers as decimal unless a
         * different radix has been set by using the {@link #useRadix} method. The
         * {@link #reset} method will reset the value of the scanner's radix to
         * <code>10</code> regardless of whether it was previously changed.
         * <h3> <a name="localized-numbers">Localized numbers</a> </h3>
         * <p> An instance of this class is capable of scanning numbers in the standard
         * formats as well as in the formats of the scanner's locale. A scanner's
         * <a name="initial-locale">initial locale </a>is the value returned by the {@link
         * java.util.Locale#getDefault(Locale.Category)
         * Locale.getDefault(Locale.Category.FORMAT)} method; it may be changed via the {@link
         * #useLocale} method. The {@link #reset} method will reset the value of the
         * scanner's locale to the initial locale regardless of whether it was
         * previously changed.
         * <p>The localized formats are defined in terms of the following parameters,
         * which for a particular locale are taken from that locale's {@link
         * java.text.DecimalFormat DecimalFormat} object, <tt>df</tt>, and its and
         * {@link java.text.DecimalFormatSymbols DecimalFormatSymbols} object,
         * <tt>dfs</tt>.
         * <blockquote><dl>
         * <dt><i>LocalGroupSeparator&nbsp;&nbsp;</i>
         * <dd>The character used to separate thousands groups,
         * <i>i.e.,</i>&nbsp;<tt>dfs.</tt>{@link
         * java.text.DecimalFormatSymbols#getGroupingSeparator
         * getGroupingSeparator()}
         * <dt><i>LocalDecimalSeparator&nbsp;&nbsp;</i>
         * <dd>The character used for the decimal point,
         * <i>i.e.,</i>&nbsp;<tt>dfs.</tt>{@link
         * java.text.DecimalFormatSymbols#getDecimalSeparator
         * getDecimalSeparator()}
         * <dt><i>LocalPositivePrefix&nbsp;&nbsp;</i>
         * <dd>The string that appears before a positive number (may
         * be empty), <i>i.e.,</i>&nbsp;<tt>df.</tt>{@link
         * java.text.DecimalFormat#getPositivePrefix
         * getPositivePrefix()}
         * <dt><i>LocalPositiveSuffix&nbsp;&nbsp;</i>
         * <dd>The string that appears after a positive number (may be
         * empty), <i>i.e.,</i>&nbsp;<tt>df.</tt>{@link
         * java.text.DecimalFormat#getPositiveSuffix
         * getPositiveSuffix()}
         * <dt><i>LocalNegativePrefix&nbsp;&nbsp;</i>
         * <dd>The string that appears before a negative number (may
         * be empty), <i>i.e.,</i>&nbsp;<tt>df.</tt>{@link
         * java.text.DecimalFormat#getNegativePrefix
         * getNegativePrefix()}
         * <dt><i>LocalNegativeSuffix&nbsp;&nbsp;</i>
         * <dd>The string that appears after a negative number (may be
         * empty), <i>i.e.,</i>&nbsp;<tt>df.</tt>{@link
         * java.text.DecimalFormat#getNegativeSuffix
         * getNegativeSuffix()}
         * <dt><i>LocalNaN&nbsp;&nbsp;</i>
         * <dd>The string that represents not-a-number for
         * floating-point values,
         * <i>i.e.,</i>&nbsp;<tt>dfs.</tt>{@link
         * java.text.DecimalFormatSymbols#getNaN
         * getNaN()}
         * <dt><i>LocalInfinity&nbsp;&nbsp;</i>
         * <dd>The string that represents infinity for floating-point
         * values, <i>i.e.,</i>&nbsp;<tt>dfs.</tt>{@link
         * java.text.DecimalFormatSymbols#getInfinity
         * getInfinity()}
         * </dl></blockquote>
         * <h4> <a name="number-syntax">Number syntax</a> </h4>
         * <p> The strings that can be parsed as numbers by an instance of this class
         * are specified in terms of the following regular-expression grammar, where
         * Rmax is the highest digit in the radix being used (for example, Rmax is 9 in base 10).
         * <dl>
         * <dt><i>NonAsciiDigit</i>:
         * <dd>A non-ASCII character c for which
         * {@link java.lang.Character#isDigit Character.isDigit}<tt>(c)</tt>
         * returns&nbsp;true
         * <dt><i>Non0Digit</i>:
         * <dd><tt>[1-</tt><i>Rmax</i><tt>] | </tt><i>NonASCIIDigit</i>
         * <dt><i>Digit</i>:
         * <dd><tt>[0-</tt><i>Rmax</i><tt>] | </tt><i>NonASCIIDigit</i>
         * <dt><i>GroupedNumeral</i>:
         * <dd><tt>(&nbsp;</tt><i>Non0Digit</i>
         * <i>Digit</i><tt>?
         * </tt><i>Digit</i><tt>?</tt>
         * <dd>&nbsp;&nbsp;&nbsp;&nbsp;<tt>(&nbsp;</tt><i>LocalGroupSeparator</i>
         * <i>Digit</i>
         * <i>Digit</i>
         * <i>Digit</i><tt> )+ )</tt>
         * <dt><i>Numeral</i>:
         * <dd><tt>( ( </tt><i>Digit</i><tt>+ )
         * | </tt><i>GroupedNumeral</i><tt> )</tt>
         * <dt><a name="Integer-regex"><i>Integer</i>:</a>
         * <dd><tt>( [-+]? ( </tt><i>Numeral</i><tt>
         * ) )</tt>
         * <dd><tt>| </tt><i>LocalPositivePrefix</i> <i>Numeral</i>
         * <i>LocalPositiveSuffix</i>
         * <dd><tt>| </tt><i>LocalNegativePrefix</i> <i>Numeral</i>
         * <i>LocalNegativeSuffix</i>
         * <dt><i>DecimalNumeral</i>:
         * <dd><i>Numeral</i>
         * <dd><tt>| </tt><i>Numeral</i>
         * <i>LocalDecimalSeparator</i>
         * <i>Digit</i><tt>*</tt>
         * <dd><tt>| </tt><i>LocalDecimalSeparator</i>
         * <i>Digit</i><tt>+</tt>
         * <dt><i>Exponent</i>:
         * <dd><tt>( [eE] [+-]? </tt><i>Digit</i><tt>+ )</tt>
         * <dt><a name="Decimal-regex"><i>Decimal</i>:</a>
         * <dd><tt>( [-+]? </tt><i>DecimalNumeral</i>
         * <i>Exponent</i><tt>? )</tt>
         * <dd><tt>| </tt><i>LocalPositivePrefix</i>
         * <i>DecimalNumeral</i>
         * <i>LocalPositiveSuffix</i>
         * <i>Exponent</i><tt>?</tt>
         * <dd><tt>| </tt><i>LocalNegativePrefix</i>
         * <i>DecimalNumeral</i>
         * <i>LocalNegativeSuffix</i>
         * <i>Exponent</i><tt>?</tt>
         * <dt><i>HexFloat</i>:
         * <dd><tt>[-+]? 0[xX][0-9a-fA-F]*\.[0-9a-fA-F]+
         * ([pP][-+]?[0-9]+)?</tt>
         * <dt><i>NonNumber</i>:
         * <dd><tt>NaN
         * | </tt><i>LocalNan</i><tt>
         * | Infinity
         * | </tt><i>LocalInfinity</i>
         * <dt><i>SignedNonNumber</i>:
         * <dd><tt>( [-+]? </tt><i>NonNumber</i><tt> )</tt>
         * <dd><tt>| </tt><i>LocalPositivePrefix</i>
         * <i>NonNumber</i>
         * <i>LocalPositiveSuffix</i>
         * <dd><tt>| </tt><i>LocalNegativePrefix</i>
         * <i>NonNumber</i>
         * <i>LocalNegativeSuffix</i>
         * <dt><a name="Float-regex"><i>Float</i></a>:
         * <dd><i>Decimal</i>
         * <tt>| </tt><i>HexFloat</i>
         * <tt>| </tt><i>SignedNonNumber</i>
         * </dl>
         * <p>Whitespace is not significant in the above regular expressions.
         * @since 1.5
         */
        // @ts-ignore
        class Scanner extends java.lang.Object implements java.util.Iterator<java.lang.String | string>, java.io.Closeable {
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified source.
             * @param source A character source implementing the {#link Readable}
             *          interface
             */
            // @ts-ignore
            constructor(source: java.lang.Readable)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified input stream. Bytes from the stream are converted
             * into characters using the underlying platform's
             * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}.
             * @param source An input stream to be scanned
             */
            // @ts-ignore
            constructor(source: java.io.InputStream)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified input stream. Bytes from the stream are converted
             * into characters using the specified charset.
             * @param source An input stream to be scanned
             * @param charsetName The encoding type used to convert bytes from the
             *         stream into characters to be scanned
             * @throws IllegalArgumentException if the specified character set
             *          does not exist
             */
            // @ts-ignore
            constructor(source: java.io.InputStream, charsetName: java.lang.String | string)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified file. Bytes from the file are converted into
             * characters using the underlying platform's
             * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}.
             * @param source A file to be scanned
             * @throws FileNotFoundException if source is not found
             */
            // @ts-ignore
            constructor(source: java.io.File)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified file. Bytes from the file are converted into
             * characters using the specified charset.
             * @param source A file to be scanned
             * @param charsetName The encoding type used to convert bytes from the file
             *         into characters to be scanned
             * @throws FileNotFoundException if source is not found
             * @throws IllegalArgumentException if the specified encoding is
             *          not found
             */
            // @ts-ignore
            constructor(source: java.io.File, charsetName: java.lang.String | string)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified file. Bytes from the file are converted into
             * characters using the underlying platform's
             * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}.
             * @param source
             *           the path to the file to be scanned
             * @throws IOException
             *           if an I/O error occurs opening source
             * @since 1.7
             */
            // @ts-ignore
            constructor(source: java.nio.file.Path)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified file. Bytes from the file are converted into
             * characters using the specified charset.
             * @param source
             *           the path to the file to be scanned
             * @param charsetName
             *           The encoding type used to convert bytes from the file
             *           into characters to be scanned
             * @throws IOException
             *           if an I/O error occurs opening source
             * @throws IllegalArgumentException
             *           if the specified encoding is not found
             * @since 1.7
             */
            // @ts-ignore
            constructor(source: java.nio.file.Path, charsetName: java.lang.String | string)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified string.
             * @param source A string to scan
             */
            // @ts-ignore
            constructor(source: java.lang.String | string)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified channel. Bytes from the source are converted into
             * characters using the underlying platform's
             * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}.
             * @param source A channel to scan
             */
            // @ts-ignore
            constructor(source: java.nio.channels.ReadableByteChannel)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified channel. Bytes from the source are converted into
             * characters using the specified charset.
             * @param source A channel to scan
             * @param charsetName The encoding type used to convert bytes from the
             *         channel into characters to be scanned
             * @throws IllegalArgumentException if the specified character set
             *          does not exist
             */
            // @ts-ignore
            constructor(source: java.nio.channels.ReadableByteChannel, charsetName: java.lang.String | string)
            /**
             * Closes this scanner.
             * <p> If this scanner has not yet been closed then if its underlying
             * {@linkplain java.lang.Readable readable} also implements the {@link
             * java.io.Closeable} interface then the readable's <tt>close</tt> method
             * will be invoked.  If this scanner is already closed then invoking this
             * method will have no effect.
             * <p>Attempting to perform search operations after a scanner has
             * been closed will result in an {@link IllegalStateException}.
             */
            // @ts-ignore
            public close(): void
            /**
             * Returns the <code>IOException</code> last thrown by this
             * <code>Scanner</code>'s underlying <code>Readable</code>. This method
             * returns <code>null</code> if no such exception exists.
             * @return the last exception thrown by this scanner's readable
             */
            // @ts-ignore
            public ioException(): java.io.IOException
            /**
             * Returns the <code>Pattern</code> this <code>Scanner</code> is currently
             * using to match delimiters.
             * @return this scanner's delimiting pattern.
             */
            // @ts-ignore
            public delimiter(): java.util.regex.Pattern
            /**
             * Sets this scanner's delimiting pattern to the specified pattern.
             * @param pattern A delimiting pattern
             * @return this scanner
             */
            // @ts-ignore
            public useDelimiter(pattern: java.util.regex.Pattern): java.util.Scanner
            /**
             * Sets this scanner's delimiting pattern to a pattern constructed from
             * the specified <code>String</code>.
             * <p> An invocation of this method of the form
             * <tt>useDelimiter(pattern)</tt> behaves in exactly the same way as the
             * invocation <tt>useDelimiter(Pattern.compile(pattern))</tt>.
             * <p> Invoking the {@link #reset} method will set the scanner's delimiter
             * to the <a href= "#default-delimiter">default</a>.
             * @param pattern A string specifying a delimiting pattern
             * @return this scanner
             */
            // @ts-ignore
            public useDelimiter(pattern: java.lang.String | string): java.util.Scanner
            /**
             * Returns this scanner's locale.
             * <p>A scanner's locale affects many elements of its default
             * primitive matching regular expressions; see
             * <a href= "#localized-numbers">localized numbers</a> above.
             * @return this scanner's locale
             */
            // @ts-ignore
            public locale(): java.util.Locale
            /**
             * Sets this scanner's locale to the specified locale.
             * <p>A scanner's locale affects many elements of its default
             * primitive matching regular expressions; see
             * <a href= "#localized-numbers">localized numbers</a> above.
             * <p>Invoking the {@link #reset} method will set the scanner's locale to
             * the <a href= "#initial-locale">initial locale</a>.
             * @param locale A string specifying the locale to use
             * @return this scanner
             */
            // @ts-ignore
            public useLocale(locale: java.util.Locale): java.util.Scanner
            /**
             * Returns this scanner's default radix.
             * <p>A scanner's radix affects elements of its default
             * number matching regular expressions; see
             * <a href= "#localized-numbers">localized numbers</a> above.
             * @return the default radix of this scanner
             */
            // @ts-ignore
            public radix(): number /*int*/
            /**
             * Sets this scanner's default radix to the specified radix.
             * <p>A scanner's radix affects elements of its default
             * number matching regular expressions; see
             * <a href= "#localized-numbers">localized numbers</a> above.
             * <p>If the radix is less than <code>Character.MIN_RADIX</code>
             * or greater than <code>Character.MAX_RADIX</code>, then an
             * <code>IllegalArgumentException</code> is thrown.
             * <p>Invoking the {@link #reset} method will set the scanner's radix to
             * <code>10</code>.
             * @param radix The radix to use when scanning numbers
             * @return this scanner
             * @throws IllegalArgumentException if radix is out of range
             */
            // @ts-ignore
            public useRadix(radix: number /*int*/): java.util.Scanner
            /**
             * Returns the match result of the last scanning operation performed
             * by this scanner. This method throws <code>IllegalStateException</code>
             * if no match has been performed, or if the last match was
             * not successful.
             * <p>The various <code>next</code>methods of <code>Scanner</code>
             * make a match result available if they complete without throwing an
             * exception. For instance, after an invocation of the {@link #nextInt}
             * method that returned an int, this method returns a
             * <code>MatchResult</code> for the search of the
             * <a href="#Integer-regex"><i>Integer</i></a> regular expression
             * defined above. Similarly the {@link #findInLine},
             * {@link #findWithinHorizon}, and {@link #skip} methods will make a
             * match available if they succeed.
             * @return a match result for the last match operation
             * @throws IllegalStateException  If no match result is available
             */
            // @ts-ignore
            public match(): java.util.regex.MatchResult
            /**
             * <p>Returns the string representation of this <code>Scanner</code>. The
             * string representation of a <code>Scanner</code> contains information
             * that may be useful for debugging. The exact format is unspecified.
             * @return The string representation of this scanner
             */
            // @ts-ignore
            public toString(): string
            /**
             * Returns true if this scanner has another token in its input.
             * This method may block while waiting for input to scan.
             * The scanner does not advance past any input.
             * @return true if and only if this scanner has another token
             * @throws IllegalStateException if this scanner is closed
             * @see java.util.Iterator
             */
            // @ts-ignore
            public hasNext(): boolean
            /**
             * Finds and returns the next complete token from this scanner.
             * A complete token is preceded and followed by input that matches
             * the delimiter pattern. This method may block while waiting for input
             * to scan, even if a previous invocation of {@link #hasNext} returned
             * <code>true</code>.
             * @return the next token
             * @throws NoSuchElementException if no more tokens are available
             * @throws IllegalStateException if this scanner is closed
             * @see java.util.Iterator
             */
            // @ts-ignore
            public next(): string
            /**
             * The remove operation is not supported by this implementation of
             * <code>Iterator</code>.
             * @throws UnsupportedOperationException if this method is invoked.
             * @see java.util.Iterator
             */
            // @ts-ignore
            public remove(): void
            /**
             * Returns true if the next token matches the pattern constructed from the
             * specified string. The scanner does not advance past any input.
             * <p> An invocation of this method of the form <tt>hasNext(pattern)</tt>
             * behaves in exactly the same way as the invocation
             * <tt>hasNext(Pattern.compile(pattern))</tt>.
             * @param pattern a string specifying the pattern to scan
             * @return true if and only if this scanner has another token matching
             *          the specified pattern
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNext(pattern: java.lang.String | string): boolean
            /**
             * Returns the next token if it matches the pattern constructed from the
             * specified string.  If the match is successful, the scanner advances
             * past the input that matched the pattern.
             * <p> An invocation of this method of the form <tt>next(pattern)</tt>
             * behaves in exactly the same way as the invocation
             * <tt>next(Pattern.compile(pattern))</tt>.
             * @param pattern a string specifying the pattern to scan
             * @return the next token
             * @throws NoSuchElementException if no such tokens are available
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public next(pattern: java.lang.String | string): string
            /**
             * Returns true if the next complete token matches the specified pattern.
             * A complete token is prefixed and postfixed by input that matches
             * the delimiter pattern. This method may block while waiting for input.
             * The scanner does not advance past any input.
             * @param pattern the pattern to scan for
             * @return true if and only if this scanner has another token matching
             *          the specified pattern
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNext(pattern: java.util.regex.Pattern): boolean
            /**
             * Returns the next token if it matches the specified pattern. This
             * method may block while waiting for input to scan, even if a previous
             * invocation of {@link #hasNext(Pattern)} returned <code>true</code>.
             * If the match is successful, the scanner advances past the input that
             * matched the pattern.
             * @param pattern the pattern to scan for
             * @return the next token
             * @throws NoSuchElementException if no more tokens are available
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public next(pattern: java.util.regex.Pattern): string
            /**
             * Returns true if there is another line in the input of this scanner.
             * This method may block while waiting for input. The scanner does not
             * advance past any input.
             * @return true if and only if this scanner has another line of input
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNextLine(): boolean
            /**
             * Advances this scanner past the current line and returns the input
             * that was skipped.
             * This method returns the rest of the current line, excluding any line
             * separator at the end. The position is set to the beginning of the next
             * line.
             * <p>Since this method continues to search through the input looking
             * for a line separator, it may buffer all of the input searching for
             * the line to skip if no line separators are present.
             * @return the line that was skipped
             * @throws NoSuchElementException if no line was found
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public nextLine(): string
            /**
             * Attempts to find the next occurrence of a pattern constructed from the
             * specified string, ignoring delimiters.
             * <p>An invocation of this method of the form <tt>findInLine(pattern)</tt>
             * behaves in exactly the same way as the invocation
             * <tt>findInLine(Pattern.compile(pattern))</tt>.
             * @param pattern a string specifying the pattern to search for
             * @return the text that matched the specified pattern
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public findInLine(pattern: java.lang.String | string): string
            /**
             * Attempts to find the next occurrence of the specified pattern ignoring
             * delimiters. If the pattern is found before the next line separator, the
             * scanner advances past the input that matched and returns the string that
             * matched the pattern.
             * If no such pattern is detected in the input up to the next line
             * separator, then <code>null</code> is returned and the scanner's
             * position is unchanged. This method may block waiting for input that
             * matches the pattern.
             * <p>Since this method continues to search through the input looking
             * for the specified pattern, it may buffer all of the input searching for
             * the desired token if no line separators are present.
             * @param pattern the pattern to scan for
             * @return the text that matched the specified pattern
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public findInLine(pattern: java.util.regex.Pattern): string
            /**
             * Attempts to find the next occurrence of a pattern constructed from the
             * specified string, ignoring delimiters.
             * <p>An invocation of this method of the form
             * <tt>findWithinHorizon(pattern)</tt> behaves in exactly the same way as
             * the invocation
             * <tt>findWithinHorizon(Pattern.compile(pattern, horizon))</tt>.
             * @param pattern a string specifying the pattern to search for
             * @param horizon the search horizon
             * @return the text that matched the specified pattern
             * @throws IllegalStateException if this scanner is closed
             * @throws IllegalArgumentException if horizon is negative
             */
            // @ts-ignore
            public findWithinHorizon(pattern: java.lang.String | string, horizon: number /*int*/): string
            /**
             * Attempts to find the next occurrence of the specified pattern.
             * <p>This method searches through the input up to the specified
             * search horizon, ignoring delimiters. If the pattern is found the
             * scanner advances past the input that matched and returns the string
             * that matched the pattern. If no such pattern is detected then the
             * null is returned and the scanner's position remains unchanged. This
             * method may block waiting for input that matches the pattern.
             * <p>A scanner will never search more than <code>horizon</code> code
             * points beyond its current position. Note that a match may be clipped
             * by the horizon; that is, an arbitrary match result may have been
             * different if the horizon had been larger. The scanner treats the
             * horizon as a transparent, non-anchoring bound (see {@link
             * Matcher#useTransparentBounds} and {@link Matcher#useAnchoringBounds}).
             * <p>If horizon is <code>0</code>, then the horizon is ignored and
             * this method continues to search through the input looking for the
             * specified pattern without bound. In this case it may buffer all of
             * the input searching for the pattern.
             * <p>If horizon is negative, then an IllegalArgumentException is
             * thrown.
             * @param pattern the pattern to scan for
             * @param horizon the search horizon
             * @return the text that matched the specified pattern
             * @throws IllegalStateException if this scanner is closed
             * @throws IllegalArgumentException if horizon is negative
             */
            // @ts-ignore
            public findWithinHorizon(pattern: java.util.regex.Pattern, horizon: number /*int*/): string
            /**
             * Skips input that matches the specified pattern, ignoring delimiters.
             * This method will skip input if an anchored match of the specified
             * pattern succeeds.
             * <p>If a match to the specified pattern is not found at the
             * current position, then no input is skipped and a
             * <tt>NoSuchElementException</tt> is thrown.
             * <p>Since this method seeks to match the specified pattern starting at
             * the scanner's current position, patterns that can match a lot of
             * input (".*", for example) may cause the scanner to buffer a large
             * amount of input.
             * <p>Note that it is possible to skip something without risking a
             * <code>NoSuchElementException</code> by using a pattern that can
             * match nothing, e.g., <code>sc.skip("[ \t]*")</code>.
             * @param pattern a string specifying the pattern to skip over
             * @return this scanner
             * @throws NoSuchElementException if the specified pattern is not found
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public skip(pattern: java.util.regex.Pattern): java.util.Scanner
            /**
             * Skips input that matches a pattern constructed from the specified
             * string.
             * <p> An invocation of this method of the form <tt>skip(pattern)</tt>
             * behaves in exactly the same way as the invocation
             * <tt>skip(Pattern.compile(pattern))</tt>.
             * @param pattern a string specifying the pattern to skip over
             * @return this scanner
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public skip(pattern: java.lang.String | string): java.util.Scanner
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a boolean value using a case insensitive pattern
             * created from the string "true|false".  The scanner does not
             * advance past the input that matched.
             * @return true if and only if this scanner's next token is a valid
             *          boolean value
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNextBoolean(): boolean
            /**
             * Scans the next token of the input into a boolean value and returns
             * that value. This method will throw <code>InputMismatchException</code>
             * if the next token cannot be translated into a valid boolean value.
             * If the match is successful, the scanner advances past the input that
             * matched.
             * @return the boolean scanned from the input
             * @throws InputMismatchException if the next token is not a valid boolean
             * @throws NoSuchElementException if input is exhausted
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public nextBoolean(): boolean
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a byte value in the default radix using the
             * {@link #nextByte} method. The scanner does not advance past any input.
             * @return true if and only if this scanner's next token is a valid
             *          byte value
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNextByte(): boolean
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a byte value in the specified radix using the
             * {@link #nextByte} method. The scanner does not advance past any input.
             * @param radix the radix used to interpret the token as a byte value
             * @return true if and only if this scanner's next token is a valid
             *          byte value
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNextByte(radix: number /*int*/): boolean
            /**
             * Scans the next token of the input as a <tt>byte</tt>.
             * <p> An invocation of this method of the form
             * <tt>nextByte()</tt> behaves in exactly the same way as the
             * invocation <tt>nextByte(radix)</tt>, where <code>radix</code>
             * is the default radix of this scanner.
             * @return the <tt>byte</tt> scanned from the input
             * @throws InputMismatchException
             *          if the next token does not match the <i>Integer</i>
             *          regular expression, or is out of range
             * @throws NoSuchElementException if input is exhausted
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public nextByte(): number /*byte*/
            /**
             * Scans the next token of the input as a <tt>byte</tt>.
             * This method will throw <code>InputMismatchException</code>
             * if the next token cannot be translated into a valid byte value as
             * described below. If the translation is successful, the scanner advances
             * past the input that matched.
             * <p> If the next token matches the <a
             * href="#Integer-regex"><i>Integer</i></a> regular expression defined
             * above then the token is converted into a <tt>byte</tt> value as if by
             * removing all locale specific prefixes, group separators, and locale
             * specific suffixes, then mapping non-ASCII digits into ASCII
             * digits via {@link Character#digit Character.digit}, prepending a
             * negative sign (-) if the locale specific negative prefixes and suffixes
             * were present, and passing the resulting string to
             * {@link Byte#parseByte(String, int) Byte.parseByte} with the
             * specified radix.
             * @param radix the radix used to interpret the token as a byte value
             * @return the <tt>byte</tt> scanned from the input
             * @throws InputMismatchException
             *          if the next token does not match the <i>Integer</i>
             *          regular expression, or is out of range
             * @throws NoSuchElementException if input is exhausted
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public nextByte(radix: number /*int*/): number /*byte*/
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a short value in the default radix using the
             * {@link #nextShort} method. The scanner does not advance past any input.
             * @return true if and only if this scanner's next token is a valid
             *          short value in the default radix
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNextShort(): boolean
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a short value in the specified radix using the
             * {@link #nextShort} method. The scanner does not advance past any input.
             * @param radix the radix used to interpret the token as a short value
             * @return true if and only if this scanner's next token is a valid
             *          short value in the specified radix
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNextShort(radix: number /*int*/): boolean
            /**
             * Scans the next token of the input as a <tt>short</tt>.
             * <p> An invocation of this method of the form
             * <tt>nextShort()</tt> behaves in exactly the same way as the
             * invocation <tt>nextShort(radix)</tt>, where <code>radix</code>
             * is the default radix of this scanner.
             * @return the <tt>short</tt> scanned from the input
             * @throws InputMismatchException
             *          if the next token does not match the <i>Integer</i>
             *          regular expression, or is out of range
             * @throws NoSuchElementException if input is exhausted
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public nextShort(): number /*short*/
            /**
             * Scans the next token of the input as a <tt>short</tt>.
             * This method will throw <code>InputMismatchException</code>
             * if the next token cannot be translated into a valid short value as
             * described below. If the translation is successful, the scanner advances
             * past the input that matched.
             * <p> If the next token matches the <a
             * href="#Integer-regex"><i>Integer</i></a> regular expression defined
             * above then the token is converted into a <tt>short</tt> value as if by
             * removing all locale specific prefixes, group separators, and locale
             * specific suffixes, then mapping non-ASCII digits into ASCII
             * digits via {@link Character#digit Character.digit}, prepending a
             * negative sign (-) if the locale specific negative prefixes and suffixes
             * were present, and passing the resulting string to
             * {@link Short#parseShort(String, int) Short.parseShort} with the
             * specified radix.
             * @param radix the radix used to interpret the token as a short value
             * @return the <tt>short</tt> scanned from the input
             * @throws InputMismatchException
             *          if the next token does not match the <i>Integer</i>
             *          regular expression, or is out of range
             * @throws NoSuchElementException if input is exhausted
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public nextShort(radix: number /*int*/): number /*short*/
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as an int value in the default radix using the
             * {@link #nextInt} method. The scanner does not advance past any input.
             * @return true if and only if this scanner's next token is a valid
             *          int value
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNextInt(): boolean
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as an int value in the specified radix using the
             * {@link #nextInt} method. The scanner does not advance past any input.
             * @param radix the radix used to interpret the token as an int value
             * @return true if and only if this scanner's next token is a valid
             *          int value
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNextInt(radix: number /*int*/): boolean
            /**
             * Scans the next token of the input as an <tt>int</tt>.
             * <p> An invocation of this method of the form
             * <tt>nextInt()</tt> behaves in exactly the same way as the
             * invocation <tt>nextInt(radix)</tt>, where <code>radix</code>
             * is the default radix of this scanner.
             * @return the <tt>int</tt> scanned from the input
             * @throws InputMismatchException
             *          if the next token does not match the <i>Integer</i>
             *          regular expression, or is out of range
             * @throws NoSuchElementException if input is exhausted
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public nextInt(): number /*int*/
            /**
             * Scans the next token of the input as an <tt>int</tt>.
             * This method will throw <code>InputMismatchException</code>
             * if the next token cannot be translated into a valid int value as
             * described below. If the translation is successful, the scanner advances
             * past the input that matched.
             * <p> If the next token matches the <a
             * href="#Integer-regex"><i>Integer</i></a> regular expression defined
             * above then the token is converted into an <tt>int</tt> value as if by
             * removing all locale specific prefixes, group separators, and locale
             * specific suffixes, then mapping non-ASCII digits into ASCII
             * digits via {@link Character#digit Character.digit}, prepending a
             * negative sign (-) if the locale specific negative prefixes and suffixes
             * were present, and passing the resulting string to
             * {@link Integer#parseInt(String, int) Integer.parseInt} with the
             * specified radix.
             * @param radix the radix used to interpret the token as an int value
             * @return the <tt>int</tt> scanned from the input
             * @throws InputMismatchException
             *          if the next token does not match the <i>Integer</i>
             *          regular expression, or is out of range
             * @throws NoSuchElementException if input is exhausted
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public nextInt(radix: number /*int*/): number /*int*/
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a long value in the default radix using the
             * {@link #nextLong} method. The scanner does not advance past any input.
             * @return true if and only if this scanner's next token is a valid
             *          long value
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNextLong(): boolean
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a long value in the specified radix using the
             * {@link #nextLong} method. The scanner does not advance past any input.
             * @param radix the radix used to interpret the token as a long value
             * @return true if and only if this scanner's next token is a valid
             *          long value
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNextLong(radix: number /*int*/): boolean
            /**
             * Scans the next token of the input as a <tt>long</tt>.
             * <p> An invocation of this method of the form
             * <tt>nextLong()</tt> behaves in exactly the same way as the
             * invocation <tt>nextLong(radix)</tt>, where <code>radix</code>
             * is the default radix of this scanner.
             * @return the <tt>long</tt> scanned from the input
             * @throws InputMismatchException
             *          if the next token does not match the <i>Integer</i>
             *          regular expression, or is out of range
             * @throws NoSuchElementException if input is exhausted
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public nextLong(): number /*long*/
            /**
             * Scans the next token of the input as a <tt>long</tt>.
             * This method will throw <code>InputMismatchException</code>
             * if the next token cannot be translated into a valid long value as
             * described below. If the translation is successful, the scanner advances
             * past the input that matched.
             * <p> If the next token matches the <a
             * href="#Integer-regex"><i>Integer</i></a> regular expression defined
             * above then the token is converted into a <tt>long</tt> value as if by
             * removing all locale specific prefixes, group separators, and locale
             * specific suffixes, then mapping non-ASCII digits into ASCII
             * digits via {@link Character#digit Character.digit}, prepending a
             * negative sign (-) if the locale specific negative prefixes and suffixes
             * were present, and passing the resulting string to
             * {@link Long#parseLong(String, int) Long.parseLong} with the
             * specified radix.
             * @param radix the radix used to interpret the token as an int value
             * @return the <tt>long</tt> scanned from the input
             * @throws InputMismatchException
             *          if the next token does not match the <i>Integer</i>
             *          regular expression, or is out of range
             * @throws NoSuchElementException if input is exhausted
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public nextLong(radix: number /*int*/): number /*long*/
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a float value using the {@link #nextFloat}
             * method. The scanner does not advance past any input.
             * @return true if and only if this scanner's next token is a valid
             *          float value
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNextFloat(): boolean
            /**
             * Scans the next token of the input as a <tt>float</tt>.
             * This method will throw <code>InputMismatchException</code>
             * if the next token cannot be translated into a valid float value as
             * described below. If the translation is successful, the scanner advances
             * past the input that matched.
             * <p> If the next token matches the <a
             * href="#Float-regex"><i>Float</i></a> regular expression defined above
             * then the token is converted into a <tt>float</tt> value as if by
             * removing all locale specific prefixes, group separators, and locale
             * specific suffixes, then mapping non-ASCII digits into ASCII
             * digits via {@link Character#digit Character.digit}, prepending a
             * negative sign (-) if the locale specific negative prefixes and suffixes
             * were present, and passing the resulting string to
             * {@link Float#parseFloat Float.parseFloat}. If the token matches
             * the localized NaN or infinity strings, then either "Nan" or "Infinity"
             * is passed to {@link Float#parseFloat(String) Float.parseFloat} as
             * appropriate.
             * @return the <tt>float</tt> scanned from the input
             * @throws InputMismatchException
             *          if the next token does not match the <i>Float</i>
             *          regular expression, or is out of range
             * @throws NoSuchElementException if input is exhausted
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public nextFloat(): number /*float*/
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a double value using the {@link #nextDouble}
             * method. The scanner does not advance past any input.
             * @return true if and only if this scanner's next token is a valid
             *          double value
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNextDouble(): boolean
            /**
             * Scans the next token of the input as a <tt>double</tt>.
             * This method will throw <code>InputMismatchException</code>
             * if the next token cannot be translated into a valid double value.
             * If the translation is successful, the scanner advances past the input
             * that matched.
             * <p> If the next token matches the <a
             * href="#Float-regex"><i>Float</i></a> regular expression defined above
             * then the token is converted into a <tt>double</tt> value as if by
             * removing all locale specific prefixes, group separators, and locale
             * specific suffixes, then mapping non-ASCII digits into ASCII
             * digits via {@link Character#digit Character.digit}, prepending a
             * negative sign (-) if the locale specific negative prefixes and suffixes
             * were present, and passing the resulting string to
             * {@link Double#parseDouble Double.parseDouble}. If the token matches
             * the localized NaN or infinity strings, then either "Nan" or "Infinity"
             * is passed to {@link Double#parseDouble(String) Double.parseDouble} as
             * appropriate.
             * @return the <tt>double</tt> scanned from the input
             * @throws InputMismatchException
             *          if the next token does not match the <i>Float</i>
             *          regular expression, or is out of range
             * @throws NoSuchElementException if the input is exhausted
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public nextDouble(): number /*double*/
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a <code>BigInteger</code> in the default radix using the
             * {@link #nextBigInteger} method. The scanner does not advance past any
             * input.
             * @return true if and only if this scanner's next token is a valid
             *          <code>BigInteger</code>
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNextBigInteger(): boolean
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a <code>BigInteger</code> in the specified radix using
             * the {@link #nextBigInteger} method. The scanner does not advance past
             * any input.
             * @param radix the radix used to interpret the token as an integer
             * @return true if and only if this scanner's next token is a valid
             *          <code>BigInteger</code>
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNextBigInteger(radix: number /*int*/): boolean
            /**
             * Scans the next token of the input as a {@link java.math.BigInteger
             * BigInteger}.
             * <p> An invocation of this method of the form
             * <tt>nextBigInteger()</tt> behaves in exactly the same way as the
             * invocation <tt>nextBigInteger(radix)</tt>, where <code>radix</code>
             * is the default radix of this scanner.
             * @return the <tt>BigInteger</tt> scanned from the input
             * @throws InputMismatchException
             *          if the next token does not match the <i>Integer</i>
             *          regular expression, or is out of range
             * @throws NoSuchElementException if the input is exhausted
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public nextBigInteger(): java.math.BigInteger
            /**
             * Scans the next token of the input as a {@link java.math.BigInteger
             * BigInteger}.
             * <p> If the next token matches the <a
             * href="#Integer-regex"><i>Integer</i></a> regular expression defined
             * above then the token is converted into a <tt>BigInteger</tt> value as if
             * by removing all group separators, mapping non-ASCII digits into ASCII
             * digits via the {@link Character#digit Character.digit}, and passing the
             * resulting string to the {@link
             * java.math.BigInteger#BigInteger(java.lang.String)
             * BigInteger(String, int)} constructor with the specified radix.
             * @param radix the radix used to interpret the token
             * @return the <tt>BigInteger</tt> scanned from the input
             * @throws InputMismatchException
             *          if the next token does not match the <i>Integer</i>
             *          regular expression, or is out of range
             * @throws NoSuchElementException if the input is exhausted
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public nextBigInteger(radix: number /*int*/): java.math.BigInteger
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a <code>BigDecimal</code> using the
             * {@link #nextBigDecimal} method. The scanner does not advance past any
             * input.
             * @return true if and only if this scanner's next token is a valid
             *          <code>BigDecimal</code>
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public hasNextBigDecimal(): boolean
            /**
             * Scans the next token of the input as a {@link java.math.BigDecimal
             * BigDecimal}.
             * <p> If the next token matches the <a
             * href="#Decimal-regex"><i>Decimal</i></a> regular expression defined
             * above then the token is converted into a <tt>BigDecimal</tt> value as if
             * by removing all group separators, mapping non-ASCII digits into ASCII
             * digits via the {@link Character#digit Character.digit}, and passing the
             * resulting string to the {@link
             * java.math.BigDecimal#BigDecimal(java.lang.String) BigDecimal(String)}
             * constructor.
             * @return the <tt>BigDecimal</tt> scanned from the input
             * @throws InputMismatchException
             *          if the next token does not match the <i>Decimal</i>
             *          regular expression, or is out of range
             * @throws NoSuchElementException if the input is exhausted
             * @throws IllegalStateException if this scanner is closed
             */
            // @ts-ignore
            public nextBigDecimal(): java.math.BigDecimal
            /**
             * Resets this scanner.
             * <p> Resetting a scanner discards all of its explicit state
             * information which may have been changed by invocations of {@link
             * #useDelimiter}, {@link #useLocale}, or {@link #useRadix}.
             * <p> An invocation of this method of the form
             * <tt>scanner.reset()</tt> behaves in exactly the same way as the
             * invocation
             * <blockquote><pre>{@code
             * scanner.useDelimiter("\\p{javaWhitespace}+")
             * .useLocale(Locale.getDefault(Locale.Category.FORMAT))
             * .useRadix(10);
             * }</pre></blockquote>
             * @return this scanner
             * @since 1.6
             */
            // @ts-ignore
            public reset(): java.util.Scanner
        }
    }
}
