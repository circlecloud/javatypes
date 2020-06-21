declare namespace java {
    namespace text {
        /**
         * <code>MessageFormat</code> provides a means to produce concatenated
         * messages in a language-neutral way. Use this to construct messages
         * displayed for end users.
         * <p>
         * <code>MessageFormat</code> takes a set of objects, formats them, then
         * inserts the formatted strings into the pattern at the appropriate places.
         * <p>
         * <strong>Note:</strong>
         * <code>MessageFormat</code> differs from the other <code>Format</code>
         * classes in that you create a <code>MessageFormat</code> object with one
         * of its constructors (not with a <code>getInstance</code> style factory
         * method). The factory methods aren't necessary because <code>MessageFormat</code>
         * itself doesn't implement locale specific behavior. Any locale specific
         * behavior is defined by the pattern that you provide as well as the
         * subformats used for inserted arguments.
         * <h3><a name="patterns">Patterns and Their Interpretation</a></h3>
         * <code>MessageFormat</code> uses patterns of the following form:
         * <blockquote><pre>
         * <i>MessageFormatPattern:</i>
         * <i>String</i>
         * <i>MessageFormatPattern</i> <i>FormatElement</i> <i>String</i>
         * <i>FormatElement:</i>
         * { <i>ArgumentIndex</i> }
         * { <i>ArgumentIndex</i> , <i>FormatType</i> }
         * { <i>ArgumentIndex</i> , <i>FormatType</i> , <i>FormatStyle</i> }
         * <i>FormatType: one of </i>
         * number date time choice
         * <i>FormatStyle:</i>
         * short
         * medium
         * long
         * full
         * integer
         * currency
         * percent
         * <i>SubformatPattern</i>
         * </pre></blockquote>
         * <p>Within a <i>String</i>, a pair of single quotes can be used to
         * quote any arbitrary characters except single quotes. For example,
         * pattern string <code>"'{0}'"</code> represents string
         * <code>"{0}"</code>, not a <i>FormatElement</i>. A single quote itself
         * must be represented by doubled single quotes {@code ''} throughout a
         * <i>String</i>.  For example, pattern string <code>"'{''}'"</code> is
         * interpreted as a sequence of <code>'{</code> (start of quoting and a
         * left curly brace), <code>''</code> (a single quote), and
         * <code>}'</code> (a right curly brace and end of quoting),
         * <em>not</em> <code>'{'</code> and <code>'}'</code> (quoted left and
         * right curly braces): representing string <code>"{'}"</code>,
         * <em>not</em> <code>"{}"</code>.
         * <p>A <i>SubformatPattern</i> is interpreted by its corresponding
         * subformat, and subformat-dependent pattern rules apply. For example,
         * pattern string <code>"{1,number,<u>$'#',##</u>}"</code>
         * (<i>SubformatPattern</i> with underline) will produce a number format
         * with the pound-sign quoted, with a result such as: {@code
         * "$#31,45"}. Refer to each {@code Format} subclass documentation for
         * details.
         * <p>Any unmatched quote is treated as closed at the end of the given
         * pattern. For example, pattern string {@code "'{0}"} is treated as
         * pattern {@code "'{0}'"}.
         * <p>Any curly braces within an unquoted pattern must be balanced. For
         * example, <code>"ab {0} de"</code> and <code>"ab '}' de"</code> are
         * valid patterns, but <code>"ab {0'}' de"</code>, <code>"ab } de"</code>
         * and <code>"''{''"</code> are not.
         * <dl><dt><b>Warning:</b><dd>The rules for using quotes within message
         * format patterns unfortunately have shown to be somewhat confusing.
         * In particular, it isn't always obvious to localizers whether single
         * quotes need to be doubled or not. Make sure to inform localizers about
         * the rules, and tell them (for example, by using comments in resource
         * bundle source files) which strings will be processed by {@code MessageFormat}.
         * Note that localizers may need to use single quotes in translated
         * strings where the original version doesn't have them.
         * </dl>
         * <p>
         * The <i>ArgumentIndex</i> value is a non-negative integer written
         * using the digits {@code '0'} through {@code '9'}, and represents an index into the
         * {@code arguments} array passed to the {@code format} methods
         * or the result array returned by the {@code parse} methods.
         * <p>
         * The <i>FormatType</i> and <i>FormatStyle</i> values are used to create
         * a {@code Format} instance for the format element. The following
         * table shows how the values map to {@code Format} instances. Combinations not
         * shown in the table are illegal. A <i>SubformatPattern</i> must
         * be a valid pattern string for the {@code Format} subclass used.
         * <table border=1 summary="Shows how FormatType and FormatStyle values map to Format instances">
         * <tr>
         * <th id="ft" class="TableHeadingColor">FormatType
         * <th id="fs" class="TableHeadingColor">FormatStyle
         * <th id="sc" class="TableHeadingColor">Subformat Created
         * <tr>
         * <td headers="ft"><i>(none)</i>
         * <td headers="fs"><i>(none)</i>
         * <td headers="sc"><code>null</code>
         * <tr>
         * <td headers="ft" rowspan=5><code>number</code>
         * <td headers="fs"><i>(none)</i>
         * <td headers="sc">{@link NumberFormat#getInstance(Locale) NumberFormat.getInstance}{@code (getLocale())}
         * <tr>
         * <td headers="fs"><code>integer</code>
         * <td headers="sc">{@link NumberFormat#getIntegerInstance(Locale) NumberFormat.getIntegerInstance}{@code (getLocale())}
         * <tr>
         * <td headers="fs"><code>currency</code>
         * <td headers="sc">{@link NumberFormat#getCurrencyInstance(Locale) NumberFormat.getCurrencyInstance}{@code (getLocale())}
         * <tr>
         * <td headers="fs"><code>percent</code>
         * <td headers="sc">{@link NumberFormat#getPercentInstance(Locale) NumberFormat.getPercentInstance}{@code (getLocale())}
         * <tr>
         * <td headers="fs"><i>SubformatPattern</i>
         * <td headers="sc">{@code new} {@link DecimalFormat#DecimalFormat(String,DecimalFormatSymbols) DecimalFormat}{@code (subformatPattern,} {@link DecimalFormatSymbols#getInstance(Locale) DecimalFormatSymbols.getInstance}{@code (getLocale()))}
         * <tr>
         * <td headers="ft" rowspan=6><code>date</code>
         * <td headers="fs"><i>(none)</i>
         * <td headers="sc">{@link DateFormat#getDateInstance(int,Locale) DateFormat.getDateInstance}{@code (}{@link DateFormat#DEFAULT}{@code , getLocale())}
         * <tr>
         * <td headers="fs"><code>short</code>
         * <td headers="sc">{@link DateFormat#getDateInstance(int,Locale) DateFormat.getDateInstance}{@code (}{@link DateFormat#SHORT}{@code , getLocale())}
         * <tr>
         * <td headers="fs"><code>medium</code>
         * <td headers="sc">{@link DateFormat#getDateInstance(int,Locale) DateFormat.getDateInstance}{@code (}{@link DateFormat#DEFAULT}{@code , getLocale())}
         * <tr>
         * <td headers="fs"><code>long</code>
         * <td headers="sc">{@link DateFormat#getDateInstance(int,Locale) DateFormat.getDateInstance}{@code (}{@link DateFormat#LONG}{@code , getLocale())}
         * <tr>
         * <td headers="fs"><code>full</code>
         * <td headers="sc">{@link DateFormat#getDateInstance(int,Locale) DateFormat.getDateInstance}{@code (}{@link DateFormat#FULL}{@code , getLocale())}
         * <tr>
         * <td headers="fs"><i>SubformatPattern</i>
         * <td headers="sc">{@code new} {@link SimpleDateFormat#SimpleDateFormat(String,Locale) SimpleDateFormat}{@code (subformatPattern, getLocale())}
         * <tr>
         * <td headers="ft" rowspan=6><code>time</code>
         * <td headers="fs"><i>(none)</i>
         * <td headers="sc">{@link DateFormat#getTimeInstance(int,Locale) DateFormat.getTimeInstance}{@code (}{@link DateFormat#DEFAULT}{@code , getLocale())}
         * <tr>
         * <td headers="fs"><code>short</code>
         * <td headers="sc">{@link DateFormat#getTimeInstance(int,Locale) DateFormat.getTimeInstance}{@code (}{@link DateFormat#SHORT}{@code , getLocale())}
         * <tr>
         * <td headers="fs"><code>medium</code>
         * <td headers="sc">{@link DateFormat#getTimeInstance(int,Locale) DateFormat.getTimeInstance}{@code (}{@link DateFormat#DEFAULT}{@code , getLocale())}
         * <tr>
         * <td headers="fs"><code>long</code>
         * <td headers="sc">{@link DateFormat#getTimeInstance(int,Locale) DateFormat.getTimeInstance}{@code (}{@link DateFormat#LONG}{@code , getLocale())}
         * <tr>
         * <td headers="fs"><code>full</code>
         * <td headers="sc">{@link DateFormat#getTimeInstance(int,Locale) DateFormat.getTimeInstance}{@code (}{@link DateFormat#FULL}{@code , getLocale())}
         * <tr>
         * <td headers="fs"><i>SubformatPattern</i>
         * <td headers="sc">{@code new} {@link SimpleDateFormat#SimpleDateFormat(String,Locale) SimpleDateFormat}{@code (subformatPattern, getLocale())}
         * <tr>
         * <td headers="ft"><code>choice</code>
         * <td headers="fs"><i>SubformatPattern</i>
         * <td headers="sc">{@code new} {@link ChoiceFormat#ChoiceFormat(String) ChoiceFormat}{@code (subformatPattern)}
         * </table>
         * <h4>Usage Information</h4>
         * <p>
         * Here are some examples of usage.
         * In real internationalized programs, the message format pattern and other
         * static strings will, of course, be obtained from resource bundles.
         * Other parameters will be dynamically determined at runtime.
         * <p>
         * The first example uses the static method <code>MessageFormat.format</code>,
         * which internally creates a <code>MessageFormat</code> for one-time use:
         * <blockquote><pre>
         * int planet = 7;
         * String event = "a disturbance in the Force";
         * String result = MessageFormat.format(
         * "At {1,time} on {1,date}, there was {2} on planet {0,number,integer}.",
         * planet, new Date(), event);
         * </pre></blockquote>
         * The output is:
         * <blockquote><pre>
         * At 12:30 PM on Jul 3, 2053, there was a disturbance in the Force on planet 7.
         * </pre></blockquote>
         * <p>
         * The following example creates a <code>MessageFormat</code> instance that
         * can be used repeatedly:
         * <blockquote><pre>
         * int fileCount = 1273;
         * String diskName = "MyDisk";
         * Object[] testArgs = {new Long(fileCount), diskName};
         * MessageFormat form = new MessageFormat(
         * "The disk \"{1}\" contains {0} file(s).");
         * System.out.println(form.format(testArgs));
         * </pre></blockquote>
         * The output with different values for <code>fileCount</code>:
         * <blockquote><pre>
         * The disk "MyDisk" contains 0 file(s).
         * The disk "MyDisk" contains 1 file(s).
         * The disk "MyDisk" contains 1,273 file(s).
         * </pre></blockquote>
         * <p>
         * For more sophisticated patterns, you can use a <code>ChoiceFormat</code>
         * to produce correct forms for singular and plural:
         * <blockquote><pre>
         * MessageFormat form = new MessageFormat("The disk \"{1}\" contains {0}.");
         * double[] filelimits = {0,1,2};
         * String[] filepart = {"no files","one file","{0,number} files"};
         * ChoiceFormat fileform = new ChoiceFormat(filelimits, filepart);
         * form.setFormatByArgumentIndex(0, fileform);
         * int fileCount = 1273;
         * String diskName = "MyDisk";
         * Object[] testArgs = {new Long(fileCount), diskName};
         * System.out.println(form.format(testArgs));
         * </pre></blockquote>
         * The output with different values for <code>fileCount</code>:
         * <blockquote><pre>
         * The disk "MyDisk" contains no files.
         * The disk "MyDisk" contains one file.
         * The disk "MyDisk" contains 1,273 files.
         * </pre></blockquote>
         * <p>
         * You can create the <code>ChoiceFormat</code> programmatically, as in the
         * above example, or by using a pattern. See {@link ChoiceFormat}
         * for more information.
         * <blockquote><pre>{@code
         * form.applyPattern(
         * "There {0,choice,0#are no files|1#is one file|1<are {0,number,integer} files}.");
         * }</pre></blockquote>
         * <p>
         * <strong>Note:</strong> As we see above, the string produced
         * by a <code>ChoiceFormat</code> in <code>MessageFormat</code> is treated as special;
         * occurrences of '{' are used to indicate subformats, and cause recursion.
         * If you create both a <code>MessageFormat</code> and <code>ChoiceFormat</code>
         * programmatically (instead of using the string patterns), then be careful not to
         * produce a format that recurses on itself, which will cause an infinite loop.
         * <p>
         * When a single argument is parsed more than once in the string, the last match
         * will be the final result of the parsing.  For example,
         * <blockquote><pre>
         * MessageFormat mf = new MessageFormat("{0,number,#.##}, {0,number,#.#}");
         * Object[] objs = {new Double(3.1415)};
         * String result = mf.format( objs );
         * // result now equals "3.14, 3.1"
         * objs = null;
         * objs = mf.parse(result, new ParsePosition(0));
         * // objs now equals {new Double(3.1)}
         * </pre></blockquote>
         * <p>
         * Likewise, parsing with a {@code MessageFormat} object using patterns containing
         * multiple occurrences of the same argument would return the last match.  For
         * example,
         * <blockquote><pre>
         * MessageFormat mf = new MessageFormat("{0}, {0}, {0}");
         * String forParsing = "x, y, z";
         * Object[] objs = mf.parse(forParsing, new ParsePosition(0));
         * // result now equals {new String("z")}
         * </pre></blockquote>
         * <h4><a name="synchronization">Synchronization</a></h4>
         * <p>
         * Message formats are not synchronized.
         * It is recommended to create separate format instances for each thread.
         * If multiple threads access a format concurrently, it must be synchronized
         * externally.
         * @see java.util.Locale
         * @see Format
         * @see NumberFormat
         * @see DecimalFormat
         * @see DecimalFormatSymbols
         * @see ChoiceFormat
         * @see DateFormat
         * @see SimpleDateFormat
         * @author Mark Davis
         */
        // @ts-ignore
        class MessageFormat extends java.text.Format {
            /**
             * Constructs a MessageFormat for the default
             * {@link java.util.Locale.Category#FORMAT FORMAT} locale and the
             * specified pattern.
             * The constructor first sets the locale, then parses the pattern and
             * creates a list of subformats for the format elements contained in it.
             * Patterns and their interpretation are specified in the
             * <a href="#patterns">class description</a>.
             * @param pattern the pattern for this message format
             * @exception IllegalArgumentException if the pattern is invalid
             */
            // @ts-ignore
            constructor(pattern: java.lang.String | string)
            /**
             * Constructs a MessageFormat for the specified locale and
             * pattern.
             * The constructor first sets the locale, then parses the pattern and
             * creates a list of subformats for the format elements contained in it.
             * Patterns and their interpretation are specified in the
             * <a href="#patterns">class description</a>.
             * @param pattern the pattern for this message format
             * @param locale the locale for this message format
             * @exception IllegalArgumentException if the pattern is invalid
             * @since 1.4
             */
            // @ts-ignore
            constructor(pattern: java.lang.String | string, locale: java.util.Locale)
            /**
             * Sets the locale to be used when creating or comparing subformats.
             * This affects subsequent calls
             * <ul>
             * <li>to the {@link #applyPattern applyPattern}
             * and {@link #toPattern toPattern} methods if format elements specify
             * a format type and therefore have the subformats created in the
             * <code>applyPattern</code> method, as well as
             * <li>to the <code>format</code> and
             * {@link #formatToCharacterIterator formatToCharacterIterator} methods
             * if format elements do not specify a format type and therefore have
             * the subformats created in the formatting methods.
             * </ul>
             * Subformats that have already been created are not affected.
             * @param locale the locale to be used when creating or comparing subformats
             */
            // @ts-ignore
            public setLocale(locale: java.util.Locale): void
            /**
             * Gets the locale that's used when creating or comparing subformats.
             * @return the locale used when creating or comparing subformats
             */
            // @ts-ignore
            public getLocale(): java.util.Locale
            /**
             * Sets the pattern used by this message format.
             * The method parses the pattern and creates a list of subformats
             * for the format elements contained in it.
             * Patterns and their interpretation are specified in the
             * <a href="#patterns">class description</a>.
             * @param pattern the pattern for this message format
             * @exception IllegalArgumentException if the pattern is invalid
             */
            // @ts-ignore
            public applyPattern(pattern: java.lang.String | string): void
            /**
             * Returns a pattern representing the current state of the message format.
             * The string is constructed from internal information and therefore
             * does not necessarily equal the previously applied pattern.
             * @return a pattern representing the current state of the message format
             */
            // @ts-ignore
            public toPattern(): string
            /**
             * Sets the formats to use for the values passed into
             * <code>format</code> methods or returned from <code>parse</code>
             * methods. The indices of elements in <code>newFormats</code>
             * correspond to the argument indices used in the previously set
             * pattern string.
             * The order of formats in <code>newFormats</code> thus corresponds to
             * the order of elements in the <code>arguments</code> array passed
             * to the <code>format</code> methods or the result array returned
             * by the <code>parse</code> methods.
             * <p>
             * If an argument index is used for more than one format element
             * in the pattern string, then the corresponding new format is used
             * for all such format elements. If an argument index is not used
             * for any format element in the pattern string, then the
             * corresponding new format is ignored. If fewer formats are provided
             * than needed, then only the formats for argument indices less
             * than <code>newFormats.length</code> are replaced.
             * @param newFormats the new formats to use
             * @exception NullPointerException if <code>newFormats</code> is null
             * @since 1.4
             */
            // @ts-ignore
            public setFormatsByArgumentIndex(newFormats: java.text.Format[]): void
            /**
             * Sets the formats to use for the format elements in the
             * previously set pattern string.
             * The order of formats in <code>newFormats</code> corresponds to
             * the order of format elements in the pattern string.
             * <p>
             * If more formats are provided than needed by the pattern string,
             * the remaining ones are ignored. If fewer formats are provided
             * than needed, then only the first <code>newFormats.length</code>
             * formats are replaced.
             * <p>
             * Since the order of format elements in a pattern string often
             * changes during localization, it is generally better to use the
             * {@link #setFormatsByArgumentIndex setFormatsByArgumentIndex}
             * method, which assumes an order of formats corresponding to the
             * order of elements in the <code>arguments</code> array passed to
             * the <code>format</code> methods or the result array returned by
             * the <code>parse</code> methods.
             * @param newFormats the new formats to use
             * @exception NullPointerException if <code>newFormats</code> is null
             */
            // @ts-ignore
            public setFormats(newFormats: java.text.Format[]): void
            /**
             * Sets the format to use for the format elements within the
             * previously set pattern string that use the given argument
             * index.
             * The argument index is part of the format element definition and
             * represents an index into the <code>arguments</code> array passed
             * to the <code>format</code> methods or the result array returned
             * by the <code>parse</code> methods.
             * <p>
             * If the argument index is used for more than one format element
             * in the pattern string, then the new format is used for all such
             * format elements. If the argument index is not used for any format
             * element in the pattern string, then the new format is ignored.
             * @param argumentIndex the argument index for which to use the new format
             * @param newFormat the new format to use
             * @since 1.4
             */
            // @ts-ignore
            public setFormatByArgumentIndex(argumentIndex: number /*int*/, newFormat: java.text.Format): void
            /**
             * Sets the format to use for the format element with the given
             * format element index within the previously set pattern string.
             * The format element index is the zero-based number of the format
             * element counting from the start of the pattern string.
             * <p>
             * Since the order of format elements in a pattern string often
             * changes during localization, it is generally better to use the
             * {@link #setFormatByArgumentIndex setFormatByArgumentIndex}
             * method, which accesses format elements based on the argument
             * index they specify.
             * @param formatElementIndex the index of a format element within the pattern
             * @param newFormat the format to use for the specified format element
             * @exception ArrayIndexOutOfBoundsException if {#code formatElementIndex} is equal to or
             *             larger than the number of format elements in the pattern string
             */
            // @ts-ignore
            public setFormat(formatElementIndex: number /*int*/, newFormat: java.text.Format): void
            /**
             * Gets the formats used for the values passed into
             * <code>format</code> methods or returned from <code>parse</code>
             * methods. The indices of elements in the returned array
             * correspond to the argument indices used in the previously set
             * pattern string.
             * The order of formats in the returned array thus corresponds to
             * the order of elements in the <code>arguments</code> array passed
             * to the <code>format</code> methods or the result array returned
             * by the <code>parse</code> methods.
             * <p>
             * If an argument index is used for more than one format element
             * in the pattern string, then the format used for the last such
             * format element is returned in the array. If an argument index
             * is not used for any format element in the pattern string, then
             * null is returned in the array.
             * @return the formats used for the arguments within the pattern
             * @since 1.4
             */
            // @ts-ignore
            public getFormatsByArgumentIndex(): java.text.Format[]
            /**
             * Gets the formats used for the format elements in the
             * previously set pattern string.
             * The order of formats in the returned array corresponds to
             * the order of format elements in the pattern string.
             * <p>
             * Since the order of format elements in a pattern string often
             * changes during localization, it's generally better to use the
             * {@link #getFormatsByArgumentIndex getFormatsByArgumentIndex}
             * method, which assumes an order of formats corresponding to the
             * order of elements in the <code>arguments</code> array passed to
             * the <code>format</code> methods or the result array returned by
             * the <code>parse</code> methods.
             * @return the formats used for the format elements in the pattern
             */
            // @ts-ignore
            public getFormats(): java.text.Format[]
            /**
             * Formats an array of objects and appends the <code>MessageFormat</code>'s
             * pattern, with format elements replaced by the formatted objects, to the
             * provided <code>StringBuffer</code>.
             * <p>
             * The text substituted for the individual format elements is derived from
             * the current subformat of the format element and the
             * <code>arguments</code> element at the format element's argument index
             * as indicated by the first matching line of the following table. An
             * argument is <i>unavailable</i> if <code>arguments</code> is
             * <code>null</code> or has fewer than argumentIndex+1 elements.
             * <table border=1 summary="Examples of subformat,argument,and formatted text">
             * <tr>
             * <th>Subformat
             * <th>Argument
             * <th>Formatted Text
             * <tr>
             * <td><i>any</i>
             * <td><i>unavailable</i>
             * <td><code>"{" + argumentIndex + "}"</code>
             * <tr>
             * <td><i>any</i>
             * <td><code>null</code>
             * <td><code>"null"</code>
             * <tr>
             * <td><code>instanceof ChoiceFormat</code>
             * <td><i>any</i>
             * <td><code>subformat.format(argument).indexOf('{') &gt;= 0 ?<br>
             * (new MessageFormat(subformat.format(argument), getLocale())).format(argument) :
             * subformat.format(argument)</code>
             * <tr>
             * <td><code>!= null</code>
             * <td><i>any</i>
             * <td><code>subformat.format(argument)</code>
             * <tr>
             * <td><code>null</code>
             * <td><code>instanceof Number</code>
             * <td><code>NumberFormat.getInstance(getLocale()).format(argument)</code>
             * <tr>
             * <td><code>null</code>
             * <td><code>instanceof Date</code>
             * <td><code>DateFormat.getDateTimeInstance(DateFormat.SHORT, DateFormat.SHORT, getLocale()).format(argument)</code>
             * <tr>
             * <td><code>null</code>
             * <td><code>instanceof String</code>
             * <td><code>argument</code>
             * <tr>
             * <td><code>null</code>
             * <td><i>any</i>
             * <td><code>argument.toString()</code>
             * </table>
             * <p>
             * If <code>pos</code> is non-null, and refers to
             * <code>Field.ARGUMENT</code>, the location of the first formatted
             * string will be returned.
             * @param arguments an array of objects to be formatted and substituted.
             * @param result where text is appended.
             * @param pos On input: an alignment field, if desired.
             *             On output: the offsets of the alignment field.
             * @return the string buffer passed in as {#code result}, with formatted
             *  text appended
             * @exception IllegalArgumentException if an argument in the
             *             <code>arguments</code> array is not of the type
             *             expected by the format element(s) that use it.
             */
            // @ts-ignore
            public format(arguments: java.lang.Object[] | any[], result: java.lang.StringBuffer, pos: java.text.FieldPosition): java.lang.StringBuffer
            /**
             * Creates a MessageFormat with the given pattern and uses it
             * to format the given arguments. This is equivalent to
             * <blockquote>
             * <code>(new {@link #MessageFormat(String) MessageFormat}(pattern)).{@link #format(java.lang.Object[], java.lang.StringBuffer, java.text.FieldPosition) format}(arguments, new StringBuffer(), null).toString()</code>
             * </blockquote>
             * @param pattern   the pattern string
             * @param arguments object(s) to format
             * @return the formatted string
             * @exception IllegalArgumentException if the pattern is invalid,
             *             or if an argument in the <code>arguments</code> array
             *             is not of the type expected by the format element(s)
             *             that use it.
             */
            // @ts-ignore
            public static format(pattern: java.lang.String | string, ...arguments: java.lang.Object[] | any[]): string
            /**
             * Formats an array of objects and appends the <code>MessageFormat</code>'s
             * pattern, with format elements replaced by the formatted objects, to the
             * provided <code>StringBuffer</code>.
             * This is equivalent to
             * <blockquote>
             * <code>{@link #format(java.lang.Object[], java.lang.StringBuffer, java.text.FieldPosition) format}((Object[]) arguments, result, pos)</code>
             * </blockquote>
             * @param arguments an array of objects to be formatted and substituted.
             * @param result where text is appended.
             * @param pos On input: an alignment field, if desired.
             *             On output: the offsets of the alignment field.
             * @exception IllegalArgumentException if an argument in the
             *             <code>arguments</code> array is not of the type
             *             expected by the format element(s) that use it.
             */
            // @ts-ignore
            public format(arguments: java.lang.Object | any, result: java.lang.StringBuffer, pos: java.text.FieldPosition): java.lang.StringBuffer
            /**
             * Formats an array of objects and inserts them into the
             * <code>MessageFormat</code>'s pattern, producing an
             * <code>AttributedCharacterIterator</code>.
             * You can use the returned <code>AttributedCharacterIterator</code>
             * to build the resulting String, as well as to determine information
             * about the resulting String.
             * <p>
             * The text of the returned <code>AttributedCharacterIterator</code> is
             * the same that would be returned by
             * <blockquote>
             * <code>{@link #format(java.lang.Object[], java.lang.StringBuffer, java.text.FieldPosition) format}(arguments, new StringBuffer(), null).toString()</code>
             * </blockquote>
             * <p>
             * In addition, the <code>AttributedCharacterIterator</code> contains at
             * least attributes indicating where text was generated from an
             * argument in the <code>arguments</code> array. The keys of these attributes are of
             * type <code>MessageFormat.Field</code>, their values are
             * <code>Integer</code> objects indicating the index in the <code>arguments</code>
             * array of the argument from which the text was generated.
             * <p>
             * The attributes/value from the underlying <code>Format</code>
             * instances that <code>MessageFormat</code> uses will also be
             * placed in the resulting <code>AttributedCharacterIterator</code>.
             * This allows you to not only find where an argument is placed in the
             * resulting String, but also which fields it contains in turn.
             * @param arguments an array of objects to be formatted and substituted.
             * @return AttributedCharacterIterator describing the formatted value.
             * @exception NullPointerException if <code>arguments</code> is null.
             * @exception IllegalArgumentException if an argument in the
             *             <code>arguments</code> array is not of the type
             *             expected by the format element(s) that use it.
             * @since 1.4
             */
            // @ts-ignore
            public formatToCharacterIterator(arguments: java.lang.Object | any): java.text.AttributedCharacterIterator
            /**
             * Parses the string.
             * <p>Caveats: The parse may fail in a number of circumstances.
             * For example:
             * <ul>
             * <li>If one of the arguments does not occur in the pattern.
             * <li>If the format of an argument loses information, such as
             * with a choice format where a large number formats to "many".
             * <li>Does not yet handle recursion (where
             * the substituted strings contain {n} references.)
             * <li>Will not always find a match (or the correct match)
             * if some part of the parse is ambiguous.
             * For example, if the pattern "{1},{2}" is used with the
             * string arguments {"a,b", "c"}, it will format as "a,b,c".
             * When the result is parsed, it will return {"a", "b,c"}.
             * <li>If a single argument is parsed more than once in the string,
             * then the later parse wins.
             * </ul>
             * When the parse fails, use ParsePosition.getErrorIndex() to find out
             * where in the string the parsing failed.  The returned error
             * index is the starting offset of the sub-patterns that the string
             * is comparing with.  For example, if the parsing string "AAA {0} BBB"
             * is comparing against the pattern "AAD {0} BBB", the error index is
             * 0. When an error occurs, the call to this method will return null.
             * If the source is null, return an empty array.
             * @param source the string to parse
             * @param pos    the parse position
             * @return an array of parsed objects
             */
            // @ts-ignore
            public parse(source: java.lang.String | string, pos: java.text.ParsePosition): any[]
            /**
             * Parses text from the beginning of the given string to produce an object
             * array.
             * The method may not use the entire text of the given string.
             * <p>
             * See the {@link #parse(String, ParsePosition)} method for more information
             * on message parsing.
             * @param source A <code>String</code> whose beginning should be parsed.
             * @return An <code>Object</code> array parsed from the string.
             * @exception ParseException if the beginning of the specified string
             *             cannot be parsed.
             */
            // @ts-ignore
            public parse(source: java.lang.String | string): any[]
            /**
             * Parses text from a string to produce an object array.
             * <p>
             * The method attempts to parse text starting at the index given by
             * <code>pos</code>.
             * If parsing succeeds, then the index of <code>pos</code> is updated
             * to the index after the last character used (parsing does not necessarily
             * use all characters up to the end of the string), and the parsed
             * object array is returned. The updated <code>pos</code> can be used to
             * indicate the starting point for the next call to this method.
             * If an error occurs, then the index of <code>pos</code> is not
             * changed, the error index of <code>pos</code> is set to the index of
             * the character where the error occurred, and null is returned.
             * <p>
             * See the {@link #parse(String, ParsePosition)} method for more information
             * on message parsing.
             * @param source A <code>String</code>, part of which should be parsed.
             * @param pos A <code>ParsePosition</code> object with index and error
             *             index information as described above.
             * @return An <code>Object</code> array parsed from the string. In case of
             *          error, returns null.
             * @exception NullPointerException if <code>pos</code> is null.
             */
            // @ts-ignore
            public parseObject(source: java.lang.String | string, pos: java.text.ParsePosition): any
            /**
             * Creates and returns a copy of this object.
             * @return a clone of this instance.
             */
            // @ts-ignore
            public clone(): any
            /**
             * Equality comparison between two message format objects
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Generates a hash code for the message format object.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
        }
    }
}
