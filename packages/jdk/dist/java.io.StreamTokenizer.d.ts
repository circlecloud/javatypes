declare namespace java {
    namespace io {
        /**
         * The {@code StreamTokenizer} class takes an input stream and
         * parses it into "tokens", allowing the tokens to be
         * read one at a time. The parsing process is controlled by a table
         * and a number of flags that can be set to various states. The
         * stream tokenizer can recognize identifiers, numbers, quoted
         * strings, and various comment styles.
         * <p>
         * Each byte read from the input stream is regarded as a character
         * in the range {@code '\u0000'} through {@code '\u00FF'}.
         * The character value is used to look up five possible attributes of
         * the character: <i>white space</i>, <i>alphabetic</i>,
         * <i>numeric</i>, <i>string quote</i>, and <i>comment character</i>.
         * Each character can have zero or more of these attributes.
         * <p>
         * In addition, an instance has four flags. These flags indicate:
         * <ul>
         * <li>Whether line terminators are to be returned as tokens or treated
         * as white space that merely separates tokens.
         * <li>Whether C-style comments are to be recognized and skipped.
         * <li>Whether C++-style comments are to be recognized and skipped.
         * <li>Whether the characters of identifiers are converted to lowercase.
         * </ul>
         * <p>
         * A typical application first constructs an instance of this class,
         * sets up the syntax tables, and then repeatedly loops calling the
         * {@code nextToken} method in each iteration of the loop until
         * it returns the value {@code TT_EOF}.
         * @author James Gosling
         * @see java.io.StreamTokenizer#nextToken()
         * @see java.io.StreamTokenizer#TT_EOF
         * @since JDK1.0
         */
        // @ts-ignore
        class StreamTokenizer extends java.lang.Object {
            /**
             * Creates a stream tokenizer that parses the specified input
             * stream. The stream tokenizer is initialized to the following
             * default state:
             * <ul>
             * <li>All byte values {@code 'A'} through {@code 'Z'},
             * {@code 'a'} through {@code 'z'}, and
             * {@code '\u00A0'} through {@code '\u00FF'} are
             * considered to be alphabetic.
             * <li>All byte values {@code '\u0000'} through
             * {@code '\u0020'} are considered to be white space.
             * <li>{@code '/'} is a comment character.
             * <li>Single quote {@code '\''} and double quote {@code '"'}
             * are string quote characters.
             * <li>Numbers are parsed.
             * <li>Ends of lines are treated as white space, not as separate tokens.
             * <li>C-style and C++-style comments are not recognized.
             * </ul>
             * @deprecated As of JDK version 1.1, the preferred way to tokenize an
             *  input stream is to convert it into a character stream, for example:
             *  <blockquote><pre>
             *    Reader r = new BufferedReader(new InputStreamReader(is));
             *    StreamTokenizer st = new StreamTokenizer(r);
             *  </pre></blockquote>
             * @param is        an input stream.
             * @see java.io.BufferedReader
             * @see java.io.InputStreamReader
             * @see java.io.StreamTokenizer#StreamTokenizer(java.io.Reader)
             */
            // @ts-ignore
            constructor(jis: java.io.InputStream)
            /**
             * Create a tokenizer that parses the given character stream.
             * @param r  a Reader object providing the input stream.
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(r: java.io.Reader)
            /**
             * After a call to the {@code nextToken} method, this field
             * contains the type of the token just read. For a single character
             * token, its value is the single character, converted to an integer.
             * For a quoted string token, its value is the quote character.
             * Otherwise, its value is one of the following:
             * <ul>
             * <li>{@code TT_WORD} indicates that the token is a word.
             * <li>{@code TT_NUMBER} indicates that the token is a number.
             * <li>{@code TT_EOL} indicates that the end of line has been read.
             * The field can only have this value if the
             * {@code eolIsSignificant} method has been called with the
             * argument {@code true}.
             * <li>{@code TT_EOF} indicates that the end of the input stream
             * has been reached.
             * </ul>
             * <p>
             * The initial value of this field is -4.
             * @see java.io.StreamTokenizer#eolIsSignificant(boolean)
             * @see java.io.StreamTokenizer#nextToken()
             * @see java.io.StreamTokenizer#quoteChar(int)
             * @see java.io.StreamTokenizer#TT_EOF
             * @see java.io.StreamTokenizer#TT_EOL
             * @see java.io.StreamTokenizer#TT_NUMBER
             * @see java.io.StreamTokenizer#TT_WORD
             */
            // @ts-ignore
            public ttype: number /*int*/
            /**
             * A constant indicating that the end of the stream has been read.
             */
            // @ts-ignore
            public static readonly TT_EOF: number /*int*/
            /**
             * A constant indicating that the end of the line has been read.
             */
            // @ts-ignore
            public static readonly TT_EOL: number /*int*/
            /**
             * A constant indicating that a number token has been read.
             */
            // @ts-ignore
            public static readonly TT_NUMBER: number /*int*/
            /**
             * A constant indicating that a word token has been read.
             */
            // @ts-ignore
            public static readonly TT_WORD: number /*int*/
            /**
             * If the current token is a word token, this field contains a
             * string giving the characters of the word token. When the current
             * token is a quoted string token, this field contains the body of
             * the string.
             * <p>
             * The current token is a word when the value of the
             * {@code ttype} field is {@code TT_WORD}. The current token is
             * a quoted string token when the value of the {@code ttype} field is
             * a quote character.
             * <p>
             * The initial value of this field is null.
             * @see java.io.StreamTokenizer#quoteChar(int)
             * @see java.io.StreamTokenizer#TT_WORD
             * @see java.io.StreamTokenizer#ttype
             */
            // @ts-ignore
            public sval: java.lang.String | string
            /**
             * If the current token is a number, this field contains the value
             * of that number. The current token is a number when the value of
             * the {@code ttype} field is {@code TT_NUMBER}.
             * <p>
             * The initial value of this field is 0.0.
             * @see java.io.StreamTokenizer#TT_NUMBER
             * @see java.io.StreamTokenizer#ttype
             */
            // @ts-ignore
            public nval: number /*double*/
            /**
             * Resets this tokenizer's syntax table so that all characters are
             * "ordinary." See the {@code ordinaryChar} method
             * for more information on a character being ordinary.
             * @see java.io.StreamTokenizer#ordinaryChar(int)
             */
            // @ts-ignore
            public resetSyntax(): void
            /**
             * Specifies that all characters <i>c</i> in the range
             * <code>low&nbsp;&lt;=&nbsp;<i>c</i>&nbsp;&lt;=&nbsp;high</code>
             * are word constituents. A word token consists of a word constituent
             * followed by zero or more word constituents or number constituents.
             * @param low   the low end of the range.
             * @param hi    the high end of the range.
             */
            // @ts-ignore
            public wordChars(low: number /*int*/, hi: number /*int*/): void
            /**
             * Specifies that all characters <i>c</i> in the range
             * <code>low&nbsp;&lt;=&nbsp;<i>c</i>&nbsp;&lt;=&nbsp;high</code>
             * are white space characters. White space characters serve only to
             * separate tokens in the input stream.
             * <p>Any other attribute settings for the characters in the specified
             * range are cleared.
             * @param low   the low end of the range.
             * @param hi    the high end of the range.
             */
            // @ts-ignore
            public whitespaceChars(low: number /*int*/, hi: number /*int*/): void
            /**
             * Specifies that all characters <i>c</i> in the range
             * <code>low&nbsp;&lt;=&nbsp;<i>c</i>&nbsp;&lt;=&nbsp;high</code>
             * are "ordinary" in this tokenizer. See the
             * {@code ordinaryChar} method for more information on a
             * character being ordinary.
             * @param low   the low end of the range.
             * @param hi    the high end of the range.
             * @see java.io.StreamTokenizer#ordinaryChar(int)
             */
            // @ts-ignore
            public ordinaryChars(low: number /*int*/, hi: number /*int*/): void
            /**
             * Specifies that the character argument is "ordinary"
             * in this tokenizer. It removes any special significance the
             * character has as a comment character, word component, string
             * delimiter, white space, or number character. When such a character
             * is encountered by the parser, the parser treats it as a
             * single-character token and sets {@code ttype} field to the
             * character value.
             * <p>Making a line terminator character "ordinary" may interfere
             * with the ability of a {@code StreamTokenizer} to count
             * lines. The {@code lineno} method may no longer reflect
             * the presence of such terminator characters in its line count.
             * @param ch   the character.
             * @see java.io.StreamTokenizer#ttype
             */
            // @ts-ignore
            public ordinaryChar(ch: number /*int*/): void
            /**
             * Specified that the character argument starts a single-line
             * comment. All characters from the comment character to the end of
             * the line are ignored by this stream tokenizer.
             * <p>Any other attribute settings for the specified character are cleared.
             * @param ch   the character.
             */
            // @ts-ignore
            public commentChar(ch: number /*int*/): void
            /**
             * Specifies that matching pairs of this character delimit string
             * constants in this tokenizer.
             * <p>
             * When the {@code nextToken} method encounters a string
             * constant, the {@code ttype} field is set to the string
             * delimiter and the {@code sval} field is set to the body of
             * the string.
             * <p>
             * If a string quote character is encountered, then a string is
             * recognized, consisting of all characters after (but not including)
             * the string quote character, up to (but not including) the next
             * occurrence of that same string quote character, or a line
             * terminator, or end of file. The usual escape sequences such as
             * {@code "\n"} and {@code "\t"} are recognized and
             * converted to single characters as the string is parsed.
             * <p>Any other attribute settings for the specified character are cleared.
             * @param ch   the character.
             * @see java.io.StreamTokenizer#nextToken()
             * @see java.io.StreamTokenizer#sval
             * @see java.io.StreamTokenizer#ttype
             */
            // @ts-ignore
            public quoteChar(ch: number /*int*/): void
            /**
             * Specifies that numbers should be parsed by this tokenizer. The
             * syntax table of this tokenizer is modified so that each of the twelve
             * characters:
             * <blockquote><pre>
             * 0 1 2 3 4 5 6 7 8 9 . -
             * </pre></blockquote>
             * <p>
             * has the "numeric" attribute.
             * <p>
             * When the parser encounters a word token that has the format of a
             * double precision floating-point number, it treats the token as a
             * number rather than a word, by setting the {@code ttype}
             * field to the value {@code TT_NUMBER} and putting the numeric
             * value of the token into the {@code nval} field.
             * @see java.io.StreamTokenizer#nval
             * @see java.io.StreamTokenizer#TT_NUMBER
             * @see java.io.StreamTokenizer#ttype
             */
            // @ts-ignore
            public parseNumbers(): void
            /**
             * Determines whether or not ends of line are treated as tokens.
             * If the flag argument is true, this tokenizer treats end of lines
             * as tokens; the {@code nextToken} method returns
             * {@code TT_EOL} and also sets the {@code ttype} field to
             * this value when an end of line is read.
             * <p>
             * A line is a sequence of characters ending with either a
             * carriage-return character ({@code '\r'}) or a newline
             * character ({@code '\n'}). In addition, a carriage-return
             * character followed immediately by a newline character is treated
             * as a single end-of-line token.
             * <p>
             * If the {@code flag} is false, end-of-line characters are
             * treated as white space and serve only to separate tokens.
             * @param flag   {#code true} indicates that end-of-line characters
             *                  are separate tokens; {@code false} indicates that
             *                  end-of-line characters are white space.
             * @see java.io.StreamTokenizer#nextToken()
             * @see java.io.StreamTokenizer#ttype
             * @see java.io.StreamTokenizer#TT_EOL
             */
            // @ts-ignore
            public eolIsSignificant(flag: boolean): void
            /**
             * Determines whether or not the tokenizer recognizes C-style comments.
             * If the flag argument is {@code true}, this stream tokenizer
             * recognizes C-style comments. All text between successive
             * occurrences of {@code /*} and <code>*&#47;</code> are discarded.
             * <p>
             * If the flag argument is {@code false}, then C-style comments
             * are not treated specially.
             * @param flag   {#code true} indicates to recognize and ignore
             *                  C-style comments.
             */
            // @ts-ignore
            public slashStarComments(flag: boolean): void
            /**
             * Determines whether or not the tokenizer recognizes C++-style comments.
             * If the flag argument is {@code true}, this stream tokenizer
             * recognizes C++-style comments. Any occurrence of two consecutive
             * slash characters ({@code '/'}) is treated as the beginning of
             * a comment that extends to the end of the line.
             * <p>
             * If the flag argument is {@code false}, then C++-style
             * comments are not treated specially.
             * @param flag   {#code true} indicates to recognize and ignore
             *                  C++-style comments.
             */
            // @ts-ignore
            public slashSlashComments(flag: boolean): void
            /**
             * Determines whether or not word token are automatically lowercased.
             * If the flag argument is {@code true}, then the value in the
             * {@code sval} field is lowercased whenever a word token is
             * returned (the {@code ttype} field has the
             * value {@code TT_WORD} by the {@code nextToken} method
             * of this tokenizer.
             * <p>
             * If the flag argument is {@code false}, then the
             * {@code sval} field is not modified.
             * @param fl   {#code true} indicates that all word tokens should
             *                be lowercased.
             * @see java.io.StreamTokenizer#nextToken()
             * @see java.io.StreamTokenizer#ttype
             * @see java.io.StreamTokenizer#TT_WORD
             */
            // @ts-ignore
            public lowerCaseMode(fl: boolean): void
            /**
             * Parses the next token from the input stream of this tokenizer.
             * The type of the next token is returned in the {@code ttype}
             * field. Additional information about the token may be in the
             * {@code nval} field or the {@code sval} field of this
             * tokenizer.
             * <p>
             * Typical clients of this
             * class first set up the syntax tables and then sit in a loop
             * calling nextToken to parse successive tokens until TT_EOF
             * is returned.
             * @return the value of the {#code ttype} field.
             * @exception IOException  if an I/O error occurs.
             * @see java.io.StreamTokenizer#nval
             * @see java.io.StreamTokenizer#sval
             * @see java.io.StreamTokenizer#ttype
             */
            // @ts-ignore
            public nextToken(): number /*int*/
            /**
             * Causes the next call to the {@code nextToken} method of this
             * tokenizer to return the current value in the {@code ttype}
             * field, and not to modify the value in the {@code nval} or
             * {@code sval} field.
             * @see java.io.StreamTokenizer#nextToken()
             * @see java.io.StreamTokenizer#nval
             * @see java.io.StreamTokenizer#sval
             * @see java.io.StreamTokenizer#ttype
             */
            // @ts-ignore
            public pushBack(): void
            /**
             * Return the current line number.
             * @return the current line number of this stream tokenizer.
             */
            // @ts-ignore
            public lineno(): number /*int*/
            /**
             * Returns the string representation of the current stream token and
             * the line number it occurs on.
             * <p>The precise string returned is unspecified, although the following
             * example can be considered typical:
             * <blockquote><pre>Token['a'], line 10</pre></blockquote>
             * @return a string representation of the token
             * @see java.io.StreamTokenizer#nval
             * @see java.io.StreamTokenizer#sval
             * @see java.io.StreamTokenizer#ttype
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
