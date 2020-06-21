declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace init {
                    /**
                     * Populates, initializes, or cleans up a database using SQL scripts defined in
                     * external resources.
                     * <ul>
                     * <li>Call {@link #addScript} to add a single SQL script location.
                     * <li>Call {@link #addScripts} to add multiple SQL script locations.
                     * <li>Consult the setter methods in this class for further configuration options.
                     * <li>Call {@link #populate} or {@link #execute} to initialize or clean up the
                     * database using the configured scripts.
                     * </ul>
                     * @author Keith Donald
                     * @author Dave Syer
                     * @author Juergen Hoeller
                     * @author Chris Beams
                     * @author Oliver Gierke
                     * @author Sam Brannen
                     * @author Chris Baldwin
                     * @author Phillip Webb
                     * @since 3.0
                     * @see DatabasePopulatorUtils
                     * @see ScriptUtils
                     */
                    // @ts-ignore
                    class ResourceDatabasePopulator extends java.lang.Object implements org.springframework.jdbc.datasource.init.DatabasePopulator {
                        /**
                         * Construct a new {@code ResourceDatabasePopulator} with default settings.
                         * @since 4.0.3
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a new {@code ResourceDatabasePopulator} with default settings
                         * for the supplied scripts.
                         * @param scripts the scripts to execute to initialize or clean up the database
                         *  (never {#code null})
                         * @since 4.0.3
                         */
                        // @ts-ignore
                        constructor(...scripts: Resource[])
                        /**
                         * Construct a new {@code ResourceDatabasePopulator} with the supplied values.
                         * @param continueOnError flag to indicate that all failures in SQL should be
                         *  logged but not cause a failure
                         * @param ignoreFailedDrops flag to indicate that a failed SQL {#code DROP}
                         *  statement can be ignored
                         * @param sqlScriptEncoding the encoding for the supplied SQL scripts
                         *  (may be {#code null} or <em>empty</em> to indicate platform encoding)
                         * @param scripts the scripts to execute to initialize or clean up the database
                         *  (never {#code null})
                         * @since 4.0.3
                         */
                        // @ts-ignore
                        constructor(continueOnError: boolean, ignoreFailedDrops: boolean, sqlScriptEncoding: java.lang.String | string, ...scripts: Resource[])
                        /**
                         * Add a script to execute to initialize or clean up the database.
                         * @param script the path to an SQL script (never {#code null})
                         */
                        // @ts-ignore
                        public addScript(script: Resource): void
                        /**
                         * Add multiple scripts to execute to initialize or clean up the database.
                         * @param scripts the scripts to execute (never {#code null})
                         */
                        // @ts-ignore
                        public addScripts(...scripts: Resource[]): void
                        /**
                         * Set the scripts to execute to initialize or clean up the database,
                         * replacing any previously added scripts.
                         * @param scripts the scripts to execute (never {#code null})
                         */
                        // @ts-ignore
                        public setScripts(...scripts: Resource[]): void
                        /**
                         * Specify the encoding for the configured SQL scripts,
                         * if different from the platform encoding.
                         * @param sqlScriptEncoding the encoding used in scripts
                         *  (may be {#code null} or empty to indicate platform encoding)
                         * @see #addScript(Resource)
                         */
                        // @ts-ignore
                        public setSqlScriptEncoding(sqlScriptEncoding: java.lang.String | string): void
                        /**
                         * Specify the statement separator, if a custom one.
                         * <p>Defaults to {@code ";"} if not specified and falls back to {@code "\n"}
                         * as a last resort; may be set to {@link ScriptUtils#EOF_STATEMENT_SEPARATOR}
                         * to signal that each script contains a single statement without a separator.
                         * @param separator the script statement separator
                         */
                        // @ts-ignore
                        public setSeparator(separator: java.lang.String | string): void
                        /**
                         * Set the prefix that identifies single-line comments within the SQL scripts.
                         * <p>Defaults to {@code "--"}.
                         * @param commentPrefix the prefix for single-line comments
                         * @see #setCommentPrefixes(String...)
                         */
                        // @ts-ignore
                        public setCommentPrefix(commentPrefix: java.lang.String | string): void
                        /**
                         * Set the prefixes that identify single-line comments within the SQL scripts.
                         * <p>Defaults to {@code ["--"]}.
                         * @param commentPrefixes the prefixes for single-line comments
                         * @since 5.2
                         */
                        // @ts-ignore
                        public setCommentPrefixes(...commentPrefixes: java.lang.String[] | string[]): void
                        /**
                         * Set the start delimiter that identifies block comments within the SQL
                         * scripts.
                         * <p>Defaults to {@code "/*"}.
                         * @param blockCommentStartDelimiter the start delimiter for block comments
                         *  (never {#code null} or empty)
                         * @since 4.0.3
                         * @see #setBlockCommentEndDelimiter
                         */
                        // @ts-ignore
                        public setBlockCommentStartDelimiter(blockCommentStartDelimiter: java.lang.String | string): void
                        /**
                         * Set the end delimiter that identifies block comments within the SQL
                         * scripts.
                         * <p>Defaults to <code>"*&#47;"</code>.
                         * @param blockCommentEndDelimiter the end delimiter for block comments
                         *  (never {#code null} or empty)
                         * @since 4.0.3
                         * @see #setBlockCommentStartDelimiter
                         */
                        // @ts-ignore
                        public setBlockCommentEndDelimiter(blockCommentEndDelimiter: java.lang.String | string): void
                        /**
                         * Flag to indicate that all failures in SQL should be logged but not cause a failure.
                         * <p>Defaults to {@code false}.
                         * @param continueOnError {#code true} if script execution should continue on error
                         */
                        // @ts-ignore
                        public setContinueOnError(continueOnError: boolean): void
                        /**
                         * Flag to indicate that a failed SQL {@code DROP} statement can be ignored.
                         * <p>This is useful for a non-embedded database whose SQL dialect does not
                         * support an {@code IF EXISTS} clause in a {@code DROP} statement.
                         * <p>The default is {@code false} so that if the populator runs accidentally, it will
                         * fail fast if a script starts with a {@code DROP} statement.
                         * @param ignoreFailedDrops {#code true} if failed drop statements should be ignored
                         */
                        // @ts-ignore
                        public setIgnoreFailedDrops(ignoreFailedDrops: boolean): void
                        /**
                         * {@inheritDoc}
                         * @see #execute(DataSource)
                         */
                        // @ts-ignore
                        public populate(connection: java.sql.Connection): void
                        /**
                         * Execute this {@code ResourceDatabasePopulator} against the given
                         * {@link DataSource}.
                         * <p>Delegates to {@link DatabasePopulatorUtils#execute}.
                         * @param dataSource the {#code DataSource} to execute against (never {@code null})
                         * @throws ScriptException if an error occurs
                         * @since 4.1
                         * @see #populate(Connection)
                         */
                        // @ts-ignore
                        public execute(dataSource: javax.sql.DataSource): void
                    }
                }
            }
        }
    }
}
