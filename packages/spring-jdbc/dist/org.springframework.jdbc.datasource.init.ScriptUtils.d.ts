declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace init {
                    /**
                     * Generic utility methods for working with SQL scripts.
                     * <p>Mainly for internal use within the framework.
                     * @author Thomas Risberg
                     * @author Sam Brannen
                     * @author Juergen Hoeller
                     * @author Keith Donald
                     * @author Dave Syer
                     * @author Chris Beams
                     * @author Oliver Gierke
                     * @author Chris Baldwin
                     * @author Nicolas Debeissat
                     * @author Phillip Webb
                     * @since 4.0.3
                     */
                    // @ts-ignore
                    abstract class ScriptUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Default statement separator within SQL scripts: {@code ";"}.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_STATEMENT_SEPARATOR: java.lang.String | string
                        /**
                         * Fallback statement separator within SQL scripts: {@code "\n"}.
                         * <p>Used if neither a custom separator nor the
                         * {@link #DEFAULT_STATEMENT_SEPARATOR} is present in a given script.
                         */
                        // @ts-ignore
                        public static readonly FALLBACK_STATEMENT_SEPARATOR: java.lang.String | string
                        /**
                         * End of file (EOF) SQL statement separator: {@code "^^^ END OF SCRIPT ^^^"}.
                         * <p>This value may be supplied as the {@code separator} to {@link
                         * #executeSqlScript(Connection, EncodedResource, boolean, boolean, String, String, String, String)}
                         * to denote that an SQL script contains a single statement (potentially
                         * spanning multiple lines) with no explicit statement separator. Note that
                         * such a script should not actually contain this value; it is merely a
                         * <em>virtual</em> statement separator.
                         */
                        // @ts-ignore
                        public static readonly EOF_STATEMENT_SEPARATOR: java.lang.String | string
                        /**
                         * Default prefix for single-line comments within SQL scripts: {@code "--"}.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_COMMENT_PREFIX: java.lang.String | string
                        /**
                         * Default prefixes for single-line comments within SQL scripts: {@code ["--"]}.
                         * @since 5.2
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_COMMENT_PREFIXES: java.lang.String[] | string[]
                        /**
                         * Default start delimiter for block comments within SQL scripts: {@code "/*"}.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_BLOCK_COMMENT_START_DELIMITER: java.lang.String | string
                        /**
                         * Default end delimiter for block comments within SQL scripts: <code>"*&#47;"</code>.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_BLOCK_COMMENT_END_DELIMITER: java.lang.String | string
                        /**
                         * Split an SQL script into separate statements delimited by the provided
                         * separator character. Each individual statement will be added to the
                         * provided {@code List}.
                         * <p>Within the script, {@value #DEFAULT_COMMENT_PREFIX} will be used as the
                         * comment prefix; any text beginning with the comment prefix and extending to
                         * the end of the line will be omitted from the output. Similarly,
                         * {@value #DEFAULT_BLOCK_COMMENT_START_DELIMITER} and
                         * {@value #DEFAULT_BLOCK_COMMENT_END_DELIMITER} will be used as the
                         * <em>start</em> and <em>end</em> block comment delimiters: any text enclosed
                         * in a block comment will be omitted from the output. In addition, multiple
                         * adjacent whitespace characters will be collapsed into a single space.
                         * @param script the SQL script
                         * @param separator character separating each statement (typically a ';')
                         * @param statements the list that will contain the individual statements
                         * @throws ScriptException if an error occurred while splitting the SQL script
                         * @see #splitSqlScript(String, String, List)
                         * @see #splitSqlScript(EncodedResource, String, String, String, String, String, List)
                         */
                        // @ts-ignore
                        public static splitSqlScript(script: java.lang.String | string, separator: string, statements: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                        /**
                         * Split an SQL script into separate statements delimited by the provided
                         * separator string. Each individual statement will be added to the
                         * provided {@code List}.
                         * <p>Within the script, {@value #DEFAULT_COMMENT_PREFIX} will be used as the
                         * comment prefix; any text beginning with the comment prefix and extending to
                         * the end of the line will be omitted from the output. Similarly,
                         * {@value #DEFAULT_BLOCK_COMMENT_START_DELIMITER} and
                         * {@value #DEFAULT_BLOCK_COMMENT_END_DELIMITER} will be used as the
                         * <em>start</em> and <em>end</em> block comment delimiters: any text enclosed
                         * in a block comment will be omitted from the output. In addition, multiple
                         * adjacent whitespace characters will be collapsed into a single space.
                         * @param script the SQL script
                         * @param separator text separating each statement
                         *  (typically a ';' or newline character)
                         * @param statements the list that will contain the individual statements
                         * @throws ScriptException if an error occurred while splitting the SQL script
                         * @see #splitSqlScript(String, char, List)
                         * @see #splitSqlScript(EncodedResource, String, String, String, String, String, List)
                         */
                        // @ts-ignore
                        public static splitSqlScript(script: java.lang.String | string, separator: java.lang.String | string, statements: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                        /**
                         * Split an SQL script into separate statements delimited by the provided
                         * separator string. Each individual statement will be added to the provided
                         * {@code List}.
                         * <p>Within the script, the provided {@code commentPrefix} will be honored:
                         * any text beginning with the comment prefix and extending to the end of the
                         * line will be omitted from the output. Similarly, the provided
                         * {@code blockCommentStartDelimiter} and {@code blockCommentEndDelimiter}
                         * delimiters will be honored: any text enclosed in a block comment will be
                         * omitted from the output. In addition, multiple adjacent whitespace characters
                         * will be collapsed into a single space.
                         * @param resource the resource from which the script was read
                         * @param script the SQL script
                         * @param separator text separating each statement
                         *  (typically a ';' or newline character)
                         * @param commentPrefix the prefix that identifies SQL line comments
                         *  (typically "--")
                         * @param blockCommentStartDelimiter the <em>start</em> block comment delimiter;
                         *  never {#code null} or empty
                         * @param blockCommentEndDelimiter the <em>end</em> block comment delimiter;
                         *  never {#code null} or empty
                         * @param statements the list that will contain the individual statements
                         * @throws ScriptException if an error occurred while splitting the SQL script
                         */
                        // @ts-ignore
                        public static splitSqlScript(resource: EncodedResource, script: java.lang.String | string, separator: java.lang.String | string, commentPrefix: java.lang.String | string, blockCommentStartDelimiter: java.lang.String | string, blockCommentEndDelimiter: java.lang.String | string, statements: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                        /**
                         * Split an SQL script into separate statements delimited by the provided
                         * separator string. Each individual statement will be added to the provided
                         * {@code List}.
                         * <p>Within the script, the provided {@code commentPrefixes} will be honored:
                         * any text beginning with one of the comment prefixes and extending to the
                         * end of the line will be omitted from the output. Similarly, the provided
                         * {@code blockCommentStartDelimiter} and {@code blockCommentEndDelimiter}
                         * delimiters will be honored: any text enclosed in a block comment will be
                         * omitted from the output. In addition, multiple adjacent whitespace characters
                         * will be collapsed into a single space.
                         * @param resource the resource from which the script was read
                         * @param script the SQL script
                         * @param separator text separating each statement
                         *  (typically a ';' or newline character)
                         * @param commentPrefixes the prefixes that identify SQL line comments
                         *  (typically "--")
                         * @param blockCommentStartDelimiter the <em>start</em> block comment delimiter;
                         *  never {#code null} or empty
                         * @param blockCommentEndDelimiter the <em>end</em> block comment delimiter;
                         *  never {#code null} or empty
                         * @param statements the list that will contain the individual statements
                         * @throws ScriptException if an error occurred while splitting the SQL script
                         * @since 5.2
                         */
                        // @ts-ignore
                        public static splitSqlScript(resource: EncodedResource, script: java.lang.String | string, separator: java.lang.String | string, commentPrefixes: java.lang.String[] | string[], blockCommentStartDelimiter: java.lang.String | string, blockCommentEndDelimiter: java.lang.String | string, statements: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                        /**
                         * Read a script from the provided {@code LineNumberReader}, using the supplied
                         * comment prefix and statement separator, and build a {@code String} containing
                         * the lines.
                         * <p>Lines <em>beginning</em> with the comment prefix are excluded from the
                         * results; however, line comments anywhere else &mdash; for example, within
                         * a statement &mdash; will be included in the results.
                         * @param lineNumberReader the {#code LineNumberReader} containing the script
                         *  to be processed
                         * @param lineCommentPrefix the prefix that identifies comments in the SQL script
                         *  (typically "--")
                         * @param separator the statement separator in the SQL script (typically ";")
                         * @param blockCommentEndDelimiter the <em>end</em> block comment delimiter
                         * @return a {#code String} containing the script lines
                         * @throws IOException in case of I/O errors
                         */
                        // @ts-ignore
                        public static readScript(lineNumberReader: java.io.LineNumberReader, lineCommentPrefix: java.lang.String | string, separator: java.lang.String | string, blockCommentEndDelimiter: java.lang.String | string): string
                        /**
                         * Does the provided SQL script contain the specified delimiter?
                         * @param script the SQL script
                         * @param delim the string delimiting each statement - typically a ';' character
                         */
                        // @ts-ignore
                        public static containsSqlScriptDelimiters(script: java.lang.String | string, delim: java.lang.String | string): boolean
                        /**
                         * Execute the given SQL script using default settings for statement
                         * separators, comment delimiters, and exception handling flags.
                         * <p>Statement separators and comments will be removed before executing
                         * individual statements within the supplied script.
                         * <p><strong>Warning</strong>: this method does <em>not</em> release the
                         * provided {@link Connection}.
                         * @param connection the JDBC connection to use to execute the script; already
                         *  configured and ready to use
                         * @param resource the resource to load the SQL script from; encoded with the
                         *  current platform's default encoding
                         * @throws ScriptException if an error occurred while executing the SQL script
                         * @see #executeSqlScript(Connection, EncodedResource, boolean, boolean, String, String, String, String)
                         * @see #DEFAULT_STATEMENT_SEPARATOR
                         * @see #DEFAULT_COMMENT_PREFIX
                         * @see #DEFAULT_BLOCK_COMMENT_START_DELIMITER
                         * @see #DEFAULT_BLOCK_COMMENT_END_DELIMITER
                         * @see org.springframework.jdbc.datasource.DataSourceUtils#getConnection
                         * @see org.springframework.jdbc.datasource.DataSourceUtils#releaseConnection
                         */
                        // @ts-ignore
                        public static executeSqlScript(connection: java.sql.Connection, resource: Resource): void
                        /**
                         * Execute the given SQL script using default settings for statement
                         * separators, comment delimiters, and exception handling flags.
                         * <p>Statement separators and comments will be removed before executing
                         * individual statements within the supplied script.
                         * <p><strong>Warning</strong>: this method does <em>not</em> release the
                         * provided {@link Connection}.
                         * @param connection the JDBC connection to use to execute the script; already
                         *  configured and ready to use
                         * @param resource the resource (potentially associated with a specific encoding)
                         *  to load the SQL script from
                         * @throws ScriptException if an error occurred while executing the SQL script
                         * @see #executeSqlScript(Connection, EncodedResource, boolean, boolean, String, String, String, String)
                         * @see #DEFAULT_STATEMENT_SEPARATOR
                         * @see #DEFAULT_COMMENT_PREFIX
                         * @see #DEFAULT_BLOCK_COMMENT_START_DELIMITER
                         * @see #DEFAULT_BLOCK_COMMENT_END_DELIMITER
                         * @see org.springframework.jdbc.datasource.DataSourceUtils#getConnection
                         * @see org.springframework.jdbc.datasource.DataSourceUtils#releaseConnection
                         */
                        // @ts-ignore
                        public static executeSqlScript(connection: java.sql.Connection, resource: EncodedResource): void
                        /**
                         * Execute the given SQL script.
                         * <p>Statement separators and comments will be removed before executing
                         * individual statements within the supplied script.
                         * <p><strong>Warning</strong>: this method does <em>not</em> release the
                         * provided {@link Connection}.
                         * @param connection the JDBC connection to use to execute the script; already
                         *  configured and ready to use
                         * @param resource the resource (potentially associated with a specific encoding)
                         *  to load the SQL script from
                         * @param continueOnError whether or not to continue without throwing an exception
                         *  in the event of an error
                         * @param ignoreFailedDrops whether or not to continue in the event of specifically
                         *  an error on a {#code DROP} statement
                         * @param commentPrefix the prefix that identifies single-line comments in the
                         *  SQL script (typically "--")
                         * @param separator the script statement separator; defaults to
                         *  {#value #DEFAULT_STATEMENT_SEPARATOR} if not specified and falls back to
                         *  {@value #FALLBACK_STATEMENT_SEPARATOR} as a last resort; may be set to
                         *  {@value #EOF_STATEMENT_SEPARATOR} to signal that the script contains a
                         *  single statement without a separator
                         * @param blockCommentStartDelimiter the <em>start</em> block comment delimiter
                         * @param blockCommentEndDelimiter the <em>end</em> block comment delimiter
                         * @throws ScriptException if an error occurred while executing the SQL script
                         * @see #DEFAULT_STATEMENT_SEPARATOR
                         * @see #FALLBACK_STATEMENT_SEPARATOR
                         * @see #EOF_STATEMENT_SEPARATOR
                         * @see org.springframework.jdbc.datasource.DataSourceUtils#getConnection
                         * @see org.springframework.jdbc.datasource.DataSourceUtils#releaseConnection
                         */
                        // @ts-ignore
                        public static executeSqlScript(connection: java.sql.Connection, resource: EncodedResource, continueOnError: boolean, ignoreFailedDrops: boolean, commentPrefix: java.lang.String | string, separator: java.lang.String | string, blockCommentStartDelimiter: java.lang.String | string, blockCommentEndDelimiter: java.lang.String | string): void
                        /**
                         * Execute the given SQL script.
                         * <p>Statement separators and comments will be removed before executing
                         * individual statements within the supplied script.
                         * <p><strong>Warning</strong>: this method does <em>not</em> release the
                         * provided {@link Connection}.
                         * @param connection the JDBC connection to use to execute the script; already
                         *  configured and ready to use
                         * @param resource the resource (potentially associated with a specific encoding)
                         *  to load the SQL script from
                         * @param continueOnError whether or not to continue without throwing an exception
                         *  in the event of an error
                         * @param ignoreFailedDrops whether or not to continue in the event of specifically
                         *  an error on a {#code DROP} statement
                         * @param commentPrefixes the prefixes that identify single-line comments in the
                         *  SQL script (typically "--")
                         * @param separator the script statement separator; defaults to
                         *  {#value #DEFAULT_STATEMENT_SEPARATOR} if not specified and falls back to
                         *  {@value #FALLBACK_STATEMENT_SEPARATOR} as a last resort; may be set to
                         *  {@value #EOF_STATEMENT_SEPARATOR} to signal that the script contains a
                         *  single statement without a separator
                         * @param blockCommentStartDelimiter the <em>start</em> block comment delimiter
                         * @param blockCommentEndDelimiter the <em>end</em> block comment delimiter
                         * @throws ScriptException if an error occurred while executing the SQL script
                         * @since 5.2
                         * @see #DEFAULT_STATEMENT_SEPARATOR
                         * @see #FALLBACK_STATEMENT_SEPARATOR
                         * @see #EOF_STATEMENT_SEPARATOR
                         * @see org.springframework.jdbc.datasource.DataSourceUtils#getConnection
                         * @see org.springframework.jdbc.datasource.DataSourceUtils#releaseConnection
                         */
                        // @ts-ignore
                        public static executeSqlScript(connection: java.sql.Connection, resource: EncodedResource, continueOnError: boolean, ignoreFailedDrops: boolean, commentPrefixes: java.lang.String[] | string[], separator: java.lang.String | string, blockCommentStartDelimiter: java.lang.String | string, blockCommentEndDelimiter: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
