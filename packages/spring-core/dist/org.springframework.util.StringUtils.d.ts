declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Miscellaneous {@link String} utility methods.
             * <p>Mainly for internal use within the framework; consider
             * <a href="https://commons.apache.org/proper/commons-lang/">Apache's Commons Lang</a>
             * for a more comprehensive suite of {@code String} utilities.
             * <p>This class delivers some simple functionality that should really be
             * provided by the core Java {@link String} and {@link StringBuilder}
             * classes. It also provides easy-to-use methods to convert between
             * delimited strings, such as CSV strings, and collections and arrays.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @author Keith Donald
             * @author Rob Harrop
             * @author Rick Evans
             * @author Arjen Poutsma
             * @author Sam Brannen
             * @author Brian Clozel
             * @since 16 April 2001
             */
            // @ts-ignore
            class StringUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Check whether the given object (possibly a {@code String}) is empty.
                 * This is effectively a shortcut for {@code !hasLength(String)}.
                 * <p>This method accepts any Object as an argument, comparing it to
                 * {@code null} and the empty String. As a consequence, this method
                 * will never return {@code true} for a non-null non-String object.
                 * <p>The Object signature is useful for general attribute handling code
                 * that commonly deals with Strings but generally has to iterate over
                 * Objects since attributes may e.g. be primitive value objects as well.
                 * <p><b>Note: If the object is typed to {@code String} upfront, prefer
                 * {@link #hasLength(String)} or {@link #hasText(String)} instead.</b>
                 * @param str the candidate object (possibly a {#code String})
                 * @since 3.2.1
                 * @see #hasLength(String)
                 * @see #hasText(String)
                 */
                // @ts-ignore
                isEmpty(str: any): boolean
                /**
                 * Check that the given {@code CharSequence} is neither {@code null} nor
                 * of length 0.
                 * <p>Note: this method returns {@code true} for a {@code CharSequence}
                 * that purely consists of whitespace.
                 * <p><pre class="code">
                 * StringUtils.hasLength(null) = false
                 * StringUtils.hasLength("") = false
                 * StringUtils.hasLength(" ") = true
                 * StringUtils.hasLength("Hello") = true
                 * </pre>
                 * @param str the {#code CharSequence} to check (may be {@code null})
                 * @return {#code true} if the {@code CharSequence} is not {@code null} and has length
                 * @see #hasLength(String)
                 * @see #hasText(CharSequence)
                 */
                // @ts-ignore
                hasLength(str: java.lang.CharSequence): boolean
                /**
                 * Check that the given {@code String} is neither {@code null} nor of length 0.
                 * <p>Note: this method returns {@code true} for a {@code String} that
                 * purely consists of whitespace.
                 * @param str the {#code String} to check (may be {@code null})
                 * @return {#code true} if the {@code String} is not {@code null} and has length
                 * @see #hasLength(CharSequence)
                 * @see #hasText(String)
                 */
                // @ts-ignore
                hasLength(str: string): boolean
                /**
                 * Check whether the given {@code CharSequence} contains actual <em>text</em>.
                 * <p>More specifically, this method returns {@code true} if the
                 * {@code CharSequence} is not {@code null}, its length is greater than
                 * 0, and it contains at least one non-whitespace character.
                 * <p><pre class="code">
                 * StringUtils.hasText(null) = false
                 * StringUtils.hasText("") = false
                 * StringUtils.hasText(" ") = false
                 * StringUtils.hasText("12345") = true
                 * StringUtils.hasText(" 12345 ") = true
                 * </pre>
                 * @param str the {#code CharSequence} to check (may be {@code null})
                 * @return {#code true} if the {@code CharSequence} is not {@code null},
                 *  its length is greater than 0, and it does not contain whitespace only
                 * @see #hasText(String)
                 * @see #hasLength(CharSequence)
                 * @see Character#isWhitespace
                 */
                // @ts-ignore
                hasText(str: java.lang.CharSequence): boolean
                /**
                 * Check whether the given {@code String} contains actual <em>text</em>.
                 * <p>More specifically, this method returns {@code true} if the
                 * {@code String} is not {@code null}, its length is greater than 0,
                 * and it contains at least one non-whitespace character.
                 * @param str the {#code String} to check (may be {@code null})
                 * @return {#code true} if the {@code String} is not {@code null}, its
                 *  length is greater than 0, and it does not contain whitespace only
                 * @see #hasText(CharSequence)
                 * @see #hasLength(String)
                 * @see Character#isWhitespace
                 */
                // @ts-ignore
                hasText(str: string): boolean
                /**
                 * Check whether the given {@code CharSequence} contains any whitespace characters.
                 * @param str the {#code CharSequence} to check (may be {@code null})
                 * @return {#code true} if the {@code CharSequence} is not empty and
                 *  contains at least 1 whitespace character
                 * @see Character#isWhitespace
                 */
                // @ts-ignore
                containsWhitespace(str: java.lang.CharSequence): boolean
                /**
                 * Check whether the given {@code String} contains any whitespace characters.
                 * @param str the {#code String} to check (may be {@code null})
                 * @return {#code true} if the {@code String} is not empty and
                 *  contains at least 1 whitespace character
                 * @see #containsWhitespace(CharSequence)
                 */
                // @ts-ignore
                containsWhitespace(str: string): boolean
                /**
                 * Trim leading and trailing whitespace from the given {@code String}.
                 * @param str the {#code String} to check
                 * @return the trimmed {#code String}
                 * @see java.lang.Character#isWhitespace
                 */
                // @ts-ignore
                trimWhitespace(str: string): java.lang.String
                /**
                 * Trim <i>all</i> whitespace from the given {@code String}:
                 * leading, trailing, and in between characters.
                 * @param str the {#code String} to check
                 * @return the trimmed {#code String}
                 * @see java.lang.Character#isWhitespace
                 */
                // @ts-ignore
                trimAllWhitespace(str: string): java.lang.String
                /**
                 * Trim leading whitespace from the given {@code String}.
                 * @param str the {#code String} to check
                 * @return the trimmed {#code String}
                 * @see java.lang.Character#isWhitespace
                 */
                // @ts-ignore
                trimLeadingWhitespace(str: string): java.lang.String
                /**
                 * Trim trailing whitespace from the given {@code String}.
                 * @param str the {#code String} to check
                 * @return the trimmed {#code String}
                 * @see java.lang.Character#isWhitespace
                 */
                // @ts-ignore
                trimTrailingWhitespace(str: string): java.lang.String
                /**
                 * Trim all occurrences of the supplied leading character from the given {@code String}.
                 * @param str the {#code String} to check
                 * @param leadingCharacter the leading character to be trimmed
                 * @return the trimmed {#code String}
                 */
                // @ts-ignore
                trimLeadingCharacter(str: string, leadingCharacter: string): java.lang.String
                /**
                 * Trim all occurrences of the supplied trailing character from the given {@code String}.
                 * @param str the {#code String} to check
                 * @param trailingCharacter the trailing character to be trimmed
                 * @return the trimmed {#code String}
                 */
                // @ts-ignore
                trimTrailingCharacter(str: string, trailingCharacter: string): java.lang.String
                /**
                 * Test if the given {@code String} starts with the specified prefix,
                 * ignoring upper/lower case.
                 * @param str the {#code String} to check
                 * @param prefix the prefix to look for
                 * @see java.lang.String#startsWith
                 */
                // @ts-ignore
                startsWithIgnoreCase(str: string, prefix: string): boolean
                /**
                 * Test if the given {@code String} ends with the specified suffix,
                 * ignoring upper/lower case.
                 * @param str the {#code String} to check
                 * @param suffix the suffix to look for
                 * @see java.lang.String#endsWith
                 */
                // @ts-ignore
                endsWithIgnoreCase(str: string, suffix: string): boolean
                /**
                 * Test whether the given string matches the given substring
                 * at the given index.
                 * @param str the original string (or StringBuilder)
                 * @param index the index in the original string to start matching against
                 * @param substring the substring to match at the given index
                 */
                // @ts-ignore
                substringMatch(str: java.lang.CharSequence, index: number /*int*/, substring: java.lang.CharSequence): boolean
                /**
                 * Count the occurrences of the substring {@code sub} in string {@code str}.
                 * @param str string to search in
                 * @param sub string to search for
                 */
                // @ts-ignore
                countOccurrencesOf(str: string, sub: string): int
                /**
                 * Replace all occurrences of a substring within a string with another string.
                 * @param inString {#code String} to examine
                 * @param oldPattern {#code String} to replace
                 * @param newPattern {#code String} to insert
                 * @return a {#code String} with the replacements
                 */
                // @ts-ignore
                replace(inString: string, oldPattern: string, newPattern: string): java.lang.String
                /**
                 * Delete all occurrences of the given substring.
                 * @param inString the original {#code String}
                 * @param pattern the pattern to delete all occurrences of
                 * @return the resulting {#code String}
                 */
                // @ts-ignore
                delete(inString: string, pattern: string): java.lang.String
                /**
                 * Delete any character in a given {@code String}.
                 * @param inString the original {#code String}
                 * @param charsToDelete a set of characters to delete.
                 *  E.g. "az\n" will delete 'a's, 'z's and new lines.
                 * @return the resulting {#code String}
                 */
                // @ts-ignore
                deleteAny(inString: string, charsToDelete: string): java.lang.String
                /**
                 * Quote the given {@code String} with single quotes.
                 * @param str the input {#code String} (e.g. "myString")
                 * @return the quoted {#code String} (e.g. "'myString'"),
                 *  or {@code null} if the input was {@code null}
                 */
                // @ts-ignore
                quote(str: string): java.lang.String
                /**
                 * Turn the given Object into a {@code String} with single quotes
                 * if it is a {@code String}; keeping the Object as-is else.
                 * @param obj the input Object (e.g. "myString")
                 * @return the quoted {#code String} (e.g. "'myString'"),
                 *  or the input object as-is if not a {@code String}
                 */
                // @ts-ignore
                quoteIfString(obj: any): java.lang.Object
                /**
                 * Unqualify a string qualified by a '.' dot character. For example,
                 * "this.name.is.qualified", returns "qualified".
                 * @param qualifiedName the qualified name
                 */
                // @ts-ignore
                unqualify(qualifiedName: string): java.lang.String
                /**
                 * Unqualify a string qualified by a separator character. For example,
                 * "this:name:is:qualified" returns "qualified" if using a ':' separator.
                 * @param qualifiedName the qualified name
                 * @param separator the separator
                 */
                // @ts-ignore
                unqualify(qualifiedName: string, separator: string): java.lang.String
                /**
                 * Capitalize a {@code String}, changing the first letter to
                 * upper case as per {@link Character#toUpperCase(char)}.
                 * No other letters are changed.
                 * @param str the {#code String} to capitalize
                 * @return the capitalized {#code String}
                 */
                // @ts-ignore
                capitalize(str: string): java.lang.String
                /**
                 * Uncapitalize a {@code String}, changing the first letter to
                 * lower case as per {@link Character#toLowerCase(char)}.
                 * No other letters are changed.
                 * @param str the {#code String} to uncapitalize
                 * @return the uncapitalized {#code String}
                 */
                // @ts-ignore
                uncapitalize(str: string): java.lang.String
                /**
                 * Extract the filename from the given Java resource path,
                 * e.g. {@code "mypath/myfile.txt" -> "myfile.txt"}.
                 * @param path the file path (may be {#code null})
                 * @return the extracted filename, or {#code null} if none
                 */
                // @ts-ignore
                getFilename(path: string): java.lang.String
                /**
                 * Extract the filename extension from the given Java resource path,
                 * e.g. "mypath/myfile.txt" -> "txt".
                 * @param path the file path (may be {#code null})
                 * @return the extracted filename extension, or {#code null} if none
                 */
                // @ts-ignore
                getFilenameExtension(path: string): java.lang.String
                /**
                 * Strip the filename extension from the given Java resource path,
                 * e.g. "mypath/myfile.txt" -> "mypath/myfile".
                 * @param path the file path
                 * @return the path with stripped filename extension
                 */
                // @ts-ignore
                stripFilenameExtension(path: string): java.lang.String
                /**
                 * Apply the given relative path to the given Java resource path,
                 * assuming standard Java folder separation (i.e. "/" separators).
                 * @param path the path to start from (usually a full file path)
                 * @param relativePath the relative path to apply
                 *  (relative to the full file path above)
                 * @return the full file path that results from applying the relative path
                 */
                // @ts-ignore
                applyRelativePath(path: string, relativePath: string): java.lang.String
                /**
                 * Normalize the path by suppressing sequences like "path/.." and
                 * inner simple dots.
                 * <p>The result is convenient for path comparison. For other uses,
                 * notice that Windows separators ("\") are replaced by simple slashes.
                 * @param path the original path
                 * @return the normalized path
                 */
                // @ts-ignore
                cleanPath(path: string): java.lang.String
                /**
                 * Compare two paths after normalization of them.
                 * @param path1 first path for comparison
                 * @param path2 second path for comparison
                 * @return whether the two paths are equivalent after normalization
                 */
                // @ts-ignore
                pathEquals(path1: string, path2: string): boolean
                /**
                 * Decode the given encoded URI component value. Based on the following rules:
                 * <ul>
                 * <li>Alphanumeric characters {@code "a"} through {@code "z"}, {@code "A"} through {@code "Z"},
                 * and {@code "0"} through {@code "9"} stay the same.</li>
                 * <li>Special characters {@code "-"}, {@code "_"}, {@code "."}, and {@code "*"} stay the same.</li>
                 * <li>A sequence "{@code %<i>xy</i>}" is interpreted as a hexadecimal representation of the character.</li>
                 * </ul>
                 * @param source the encoded String
                 * @param charset the character set
                 * @return the decoded value
                 * @throws IllegalArgumentException when the given source contains invalid encoded sequences
                 * @since 5.0
                 * @see java.net.URLDecoder#decode(String, String)
                 */
                // @ts-ignore
                uriDecode(source: string, charset: java.nio.charset.Charset): java.lang.String
                /**
                 * Parse the given {@code String} value into a {@link Locale}, accepting
                 * the {@link Locale#toString} format as well as BCP 47 language tags.
                 * @param localeValue the locale value: following either {#code Locale's}
                 *  {@code toString()} format ("en", "en_UK", etc), also accepting spaces as
                 *  separators (as an alternative to underscores), or BCP 47 (e.g. "en-UK")
                 *  as specified by {@link Locale#forLanguageTag} on Java 7+
                 * @return a corresponding {#code Locale} instance, or {@code null} if none
                 * @throws IllegalArgumentException in case of an invalid locale specification
                 * @since 5.0.4
                 * @see #parseLocaleString
                 * @see Locale#forLanguageTag
                 */
                // @ts-ignore
                parseLocale(localeValue: string): java.util.Locale
                /**
                 * Parse the given {@code String} representation into a {@link Locale}.
                 * <p>For many parsing scenarios, this is an inverse operation of
                 * {@link Locale#toString Locale's toString}, in a lenient sense.
                 * This method does not aim for strict {@code Locale} design compliance;
                 * it is rather specifically tailored for typical Spring parsing needs.
                 * <p><b>Note: This delegate does not accept the BCP 47 language tag format.
                 * Please use {@link #parseLocale} for lenient parsing of both formats.</b>
                 * @param localeString the locale {#code String}: following {@code Locale's}
                 *  {@code toString()} format ("en", "en_UK", etc), also accepting spaces as
                 *  separators (as an alternative to underscores)
                 * @return a corresponding {#code Locale} instance, or {@code null} if none
                 * @throws IllegalArgumentException in case of an invalid locale specification
                 */
                // @ts-ignore
                parseLocaleString(localeString: string): java.util.Locale
                /**
                 * Determine the RFC 3066 compliant language tag,
                 * as used for the HTTP "Accept-Language" header.
                 * @param locale the Locale to transform to a language tag
                 * @return the RFC 3066 compliant language tag as {#code String}
                 * @deprecated as of 5.0.4, in favor of {#link Locale#toLanguageTag()}
                 */
                // @ts-ignore
                toLanguageTag(locale: java.util.Locale): java.lang.String
                /**
                 * Parse the given {@code timeZoneString} value into a {@link TimeZone}.
                 * @param timeZoneString the time zone {#code String}, following {@link TimeZone#getTimeZone(String)}
                 *  but throwing {@link IllegalArgumentException} in case of an invalid time zone specification
                 * @return a corresponding {#link TimeZone} instance
                 * @throws IllegalArgumentException in case of an invalid time zone specification
                 */
                // @ts-ignore
                parseTimeZoneString(timeZoneString: string): java.util.TimeZone
                /**
                 * Copy the given {@link Collection} into a {@code String} array.
                 * <p>The {@code Collection} must contain {@code String} elements only.
                 * @param collection the {#code Collection} to copy
                 *  (potentially {@code null} or empty)
                 * @return the resulting {#code String} array
                 */
                // @ts-ignore
                toStringArray(collection: Array<java.lang.String>): java.lang.String[]
                /**
                 * Copy the given {@link Enumeration} into a {@code String} array.
                 * <p>The {@code Enumeration} must contain {@code String} elements only.
                 * @param enumeration the {#code Enumeration} to copy
                 *  (potentially {@code null} or empty)
                 * @return the resulting {#code String} array
                 */
                // @ts-ignore
                toStringArray(enumeration: java.util.Enumeration<java.lang.String>): java.lang.String[]
                /**
                 * Append the given {@code String} to the given {@code String} array,
                 * returning a new array consisting of the input array contents plus
                 * the given {@code String}.
                 * @param array the array to append to (can be {#code null})
                 * @param str the {#code String} to append
                 * @return the new array (never {#code null})
                 */
                // @ts-ignore
                addStringToArray(array: string[], str: string): java.lang.String[]
                /**
                 * Concatenate the given {@code String} arrays into one,
                 * with overlapping array elements included twice.
                 * <p>The order of elements in the original arrays is preserved.
                 * @param array1 the first array (can be {#code null})
                 * @param array2 the second array (can be {#code null})
                 * @return the new array ({#code null} if both given arrays were {@code null})
                 */
                // @ts-ignore
                concatenateStringArrays(array1: string[], array2: string[]): java.lang.String[]
                /**
                 * Merge the given {@code String} arrays into one, with overlapping
                 * array elements only included once.
                 * <p>The order of elements in the original arrays is preserved
                 * (with the exception of overlapping elements, which are only
                 * included on their first occurrence).
                 * @param array1 the first array (can be {#code null})
                 * @param array2 the second array (can be {#code null})
                 * @return the new array ({#code null} if both given arrays were {@code null})
                 * @deprecated as of 4.3.15, in favor of manual merging via {#link LinkedHashSet}
                 *  (with every entry included at most once, even entries within the first array)
                 */
                // @ts-ignore
                mergeStringArrays(array1: string[], array2: string[]): java.lang.String[]
                /**
                 * Sort the given {@code String} array if necessary.
                 * @param array the original array (potentially empty)
                 * @return the array in sorted form (never {#code null})
                 */
                // @ts-ignore
                sortStringArray(array: string[]): java.lang.String[]
                /**
                 * Trim the elements of the given {@code String} array, calling
                 * {@code String.trim()} on each non-null element.
                 * @param array the original {#code String} array (potentially empty)
                 * @return the resulting array (of the same size) with trimmed elements
                 */
                // @ts-ignore
                trimArrayElements(array: string[]): java.lang.String[]
                /**
                 * Remove duplicate strings from the given array.
                 * <p>As of 4.2, it preserves the original order, as it uses a {@link LinkedHashSet}.
                 * @param array the {#code String} array (potentially empty)
                 * @return an array without duplicates, in natural sort order
                 */
                // @ts-ignore
                removeDuplicateStrings(array: string[]): java.lang.String[]
                /**
                 * Split a {@code String} at the first occurrence of the delimiter.
                 * Does not include the delimiter in the result.
                 * @param toSplit the string to split (potentially {#code null} or empty)
                 * @param delimiter to split the string up with (potentially {#code null} or empty)
                 * @return a two element array with index 0 being before the delimiter, and
                 *  index 1 being after the delimiter (neither element includes the delimiter);
                 *  or {#code null} if the delimiter wasn't found in the given input {@code String}
                 */
                // @ts-ignore
                split(toSplit: string, delimiter: string): java.lang.String[]
                /**
                 * Take an array of strings and split each element based on the given delimiter.
                 * A {@code Properties} instance is then generated, with the left of the delimiter
                 * providing the key, and the right of the delimiter providing the value.
                 * <p>Will trim both the key and value before adding them to the {@code Properties}.
                 * @param array the array to process
                 * @param delimiter to split each element using (typically the equals symbol)
                 * @return a {#code Properties} instance representing the array contents,
                 *  or {@code null} if the array to process was {@code null} or empty
                 */
                // @ts-ignore
                splitArrayElementsIntoProperties(array: string[], delimiter: string): java.util.Properties
                /**
                 * Take an array of strings and split each element based on the given delimiter.
                 * A {@code Properties} instance is then generated, with the left of the
                 * delimiter providing the key, and the right of the delimiter providing the value.
                 * <p>Will trim both the key and value before adding them to the
                 * {@code Properties} instance.
                 * @param array the array to process
                 * @param delimiter to split each element using (typically the equals symbol)
                 * @param charsToDelete one or more characters to remove from each element
                 *  prior to attempting the split operation (typically the quotation mark
                 *  symbol), or {#code null} if no removal should occur
                 * @return a {#code Properties} instance representing the array contents,
                 *  or {@code null} if the array to process was {@code null} or empty
                 */
                // @ts-ignore
                splitArrayElementsIntoProperties(array: string[], delimiter: string, charsToDelete: string): java.util.Properties
                /**
                 * Tokenize the given {@code String} into a {@code String} array via a
                 * {@link StringTokenizer}.
                 * <p>Trims tokens and omits empty tokens.
                 * <p>The given {@code delimiters} string can consist of any number of
                 * delimiter characters. Each of those characters can be used to separate
                 * tokens. A delimiter is always a single character; for multi-character
                 * delimiters, consider using {@link #delimitedListToStringArray}.
                 * @param str the {#code String} to tokenize (potentially {@code null} or empty)
                 * @param delimiters the delimiter characters, assembled as a {#code String}
                 *  (each of the characters is individually considered as a delimiter)
                 * @return an array of the tokens
                 * @see java.util.StringTokenizer
                 * @see String#trim()
                 * @see #delimitedListToStringArray
                 */
                // @ts-ignore
                tokenizeToStringArray(str: string, delimiters: string): java.lang.String[]
                /**
                 * Tokenize the given {@code String} into a {@code String} array via a
                 * {@link StringTokenizer}.
                 * <p>The given {@code delimiters} string can consist of any number of
                 * delimiter characters. Each of those characters can be used to separate
                 * tokens. A delimiter is always a single character; for multi-character
                 * delimiters, consider using {@link #delimitedListToStringArray}.
                 * @param str the {#code String} to tokenize (potentially {@code null} or empty)
                 * @param delimiters the delimiter characters, assembled as a {#code String}
                 *  (each of the characters is individually considered as a delimiter)
                 * @param trimTokens trim the tokens via {#link String#trim()}
                 * @param ignoreEmptyTokens omit empty tokens from the result array
                 *  (only applies to tokens that are empty after trimming; StringTokenizer
                 *  will not consider subsequent delimiters as token in the first place).
                 * @return an array of the tokens
                 * @see java.util.StringTokenizer
                 * @see String#trim()
                 * @see #delimitedListToStringArray
                 */
                // @ts-ignore
                tokenizeToStringArray(str: string, delimiters: string, trimTokens: boolean, ignoreEmptyTokens: boolean): java.lang.String[]
                /**
                 * Take a {@code String} that is a delimited list and convert it into a
                 * {@code String} array.
                 * <p>A single {@code delimiter} may consist of more than one character,
                 * but it will still be considered as a single delimiter string, rather
                 * than as bunch of potential delimiter characters, in contrast to
                 * {@link #tokenizeToStringArray}.
                 * @param str the input {#code String} (potentially {@code null} or empty)
                 * @param delimiter the delimiter between elements (this is a single delimiter,
                 *  rather than a bunch individual delimiter characters)
                 * @return an array of the tokens in the list
                 * @see #tokenizeToStringArray
                 */
                // @ts-ignore
                delimitedListToStringArray(str: string, delimiter: string): java.lang.String[]
                /**
                 * Take a {@code String} that is a delimited list and convert it into
                 * a {@code String} array.
                 * <p>A single {@code delimiter} may consist of more than one character,
                 * but it will still be considered as a single delimiter string, rather
                 * than as bunch of potential delimiter characters, in contrast to
                 * {@link #tokenizeToStringArray}.
                 * @param str the input {#code String} (potentially {@code null} or empty)
                 * @param delimiter the delimiter between elements (this is a single delimiter,
                 *  rather than a bunch individual delimiter characters)
                 * @param charsToDelete a set of characters to delete; useful for deleting unwanted
                 *  line breaks: e.g. "\r\n\f" will delete all new lines and line feeds in a {#code String}
                 * @return an array of the tokens in the list
                 * @see #tokenizeToStringArray
                 */
                // @ts-ignore
                delimitedListToStringArray(str: string, delimiter: string, charsToDelete: string): java.lang.String[]
                /**
                 * Convert a comma delimited list (e.g., a row from a CSV file) into an
                 * array of strings.
                 * @param str the input {#code String} (potentially {@code null} or empty)
                 * @return an array of strings, or the empty array in case of empty input
                 */
                // @ts-ignore
                commaDelimitedListToStringArray(str: string): java.lang.String[]
                /**
                 * Convert a comma delimited list (e.g., a row from a CSV file) into a set.
                 * <p>Note that this will suppress duplicates, and as of 4.2, the elements in
                 * the returned set will preserve the original order in a {@link LinkedHashSet}.
                 * @param str the input {#code String} (potentially {@code null} or empty)
                 * @return a set of {#code String} entries in the list
                 * @see #removeDuplicateStrings(String[])
                 */
                // @ts-ignore
                commaDelimitedListToSet(str: string): java.util.Set<java.lang.String>
                /**
                 * Convert a {@link Collection} to a delimited {@code String} (e.g. CSV).
                 * <p>Useful for {@code toString()} implementations.
                 * @param coll the {#code Collection} to convert (potentially {@code null} or empty)
                 * @param delim the delimiter to use (typically a ",")
                 * @param prefix the {#code String} to start each element with
                 * @param suffix the {#code String} to end each element with
                 * @return the delimited {#code String}
                 */
                // @ts-ignore
                collectionToDelimitedString(coll: Array<any>, delim: string, prefix: string, suffix: string): java.lang.String
                /**
                 * Convert a {@code Collection} into a delimited {@code String} (e.g. CSV).
                 * <p>Useful for {@code toString()} implementations.
                 * @param coll the {#code Collection} to convert (potentially {@code null} or empty)
                 * @param delim the delimiter to use (typically a ",")
                 * @return the delimited {#code String}
                 */
                // @ts-ignore
                collectionToDelimitedString(coll: Array<any>, delim: string): java.lang.String
                /**
                 * Convert a {@code Collection} into a delimited {@code String} (e.g., CSV).
                 * <p>Useful for {@code toString()} implementations.
                 * @param coll the {#code Collection} to convert (potentially {@code null} or empty)
                 * @return the delimited {#code String}
                 */
                // @ts-ignore
                collectionToCommaDelimitedString(coll: Array<any>): java.lang.String
                /**
                 * Convert a {@code String} array into a delimited {@code String} (e.g. CSV).
                 * <p>Useful for {@code toString()} implementations.
                 * @param arr the array to display (potentially {#code null} or empty)
                 * @param delim the delimiter to use (typically a ",")
                 * @return the delimited {#code String}
                 */
                // @ts-ignore
                arrayToDelimitedString(arr: any[], delim: string): java.lang.String
                /**
                 * Convert a {@code String} array into a comma delimited {@code String}
                 * (i.e., CSV).
                 * <p>Useful for {@code toString()} implementations.
                 * @param arr the array to display (potentially {#code null} or empty)
                 * @return the delimited {#code String}
                 */
                // @ts-ignore
                arrayToCommaDelimitedString(arr: any[]): java.lang.String
            }
        }
    }
}
