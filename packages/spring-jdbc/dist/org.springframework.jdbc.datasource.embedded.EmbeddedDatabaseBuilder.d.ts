declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                namespace embedded {
                    /**
                     * A builder that provides a convenient API for constructing an embedded database.
                     * <h3>Usage Example</h3>
                     * <pre class="code">
                     * EmbeddedDatabase db = new EmbeddedDatabaseBuilder()
                     * .generateUniqueName(true)
                     * .setType(H2)
                     * .setScriptEncoding("UTF-8")
                     * .ignoreFailedDrops(true)
                     * .addScript("schema.sql")
                     * .addScripts("user_data.sql", "country_data.sql")
                     * .build();
                     * // perform actions against the db (EmbeddedDatabase extends javax.sql.DataSource)
                     * db.shutdown();
                     * </pre>
                     * @author Keith Donald
                     * @author Juergen Hoeller
                     * @author Dave Syer
                     * @author Sam Brannen
                     * @since 3.0
                     * @see org.springframework.jdbc.datasource.init.ScriptUtils
                     * @see org.springframework.jdbc.datasource.init.ResourceDatabasePopulator
                     * @see org.springframework.jdbc.datasource.init.DatabasePopulatorUtils
                     */
                    // @ts-ignore
                    class EmbeddedDatabaseBuilder extends java.lang.Object {
                        /**
                         * Create a new embedded database builder with a {@link DefaultResourceLoader}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new embedded database builder with the given {@link ResourceLoader}.
                         * @param resourceLoader the {#code ResourceLoader} to delegate to
                         */
                        // @ts-ignore
                        constructor(resourceLoader: ResourceLoader)
                        /**
                         * Specify whether a unique ID should be generated and used as the database name.
                         * <p>If the configuration for this builder is reused across multiple
                         * application contexts within a single JVM, this flag should be <em>enabled</em>
                         * (i.e., set to {@code true}) in order to ensure that each application context
                         * gets its own embedded database.
                         * <p>Enabling this flag overrides any explicit name set via {@link #setName}.
                         * @param flag {#code true} if a unique database name should be generated
                         * @return {#code this}, to facilitate method chaining
                         * @since 4.2
                         * @see #setName
                         */
                        // @ts-ignore
                        public generateUniqueName(flag: boolean): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
                        /**
                         * Set the name of the embedded database.
                         * <p>Defaults to {@link EmbeddedDatabaseFactory#DEFAULT_DATABASE_NAME} if
                         * not called.
                         * <p>Will be overridden if the {@code generateUniqueName} flag has been
                         * set to {@code true}.
                         * @param databaseName the name of the embedded database to build
                         * @return {#code this}, to facilitate method chaining
                         * @see #generateUniqueName
                         */
                        // @ts-ignore
                        public setName(databaseName: java.lang.String | string): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
                        /**
                         * Set the type of embedded database.
                         * <p>Defaults to HSQL if not called.
                         * @param databaseType the type of embedded database to build
                         * @return {#code this}, to facilitate method chaining
                         */
                        // @ts-ignore
                        public setType(databaseType: org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
                        /**
                         * Set the factory to use to create the {@link DataSource} instance that
                         * connects to the embedded database.
                         * <p>Defaults to {@link SimpleDriverDataSourceFactory} but can be overridden,
                         * for example to introduce connection pooling.
                         * @return {#code this}, to facilitate method chaining
                         * @since 4.0.3
                         */
                        // @ts-ignore
                        public setDataSourceFactory(dataSourceFactory: org.springframework.jdbc.datasource.embedded.DataSourceFactory): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
                        /**
                         * Add default SQL scripts to execute to populate the database.
                         * <p>The default scripts are {@code "schema.sql"} to create the database
                         * schema and {@code "data.sql"} to populate the database with data.
                         * @return {#code this}, to facilitate method chaining
                         */
                        // @ts-ignore
                        public addDefaultScripts(): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
                        /**
                         * Add an SQL script to execute to initialize or populate the database.
                         * @param script the script to execute
                         * @return {#code this}, to facilitate method chaining
                         */
                        // @ts-ignore
                        public addScript(script: java.lang.String | string): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
                        /**
                         * Add multiple SQL scripts to execute to initialize or populate the database.
                         * @param scripts the scripts to execute
                         * @return {#code this}, to facilitate method chaining
                         * @since 4.0.3
                         */
                        // @ts-ignore
                        public addScripts(...scripts: java.lang.String[] | string[]): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
                        /**
                         * Specify the character encoding used in all SQL scripts, if different from
                         * the platform encoding.
                         * @param scriptEncoding the encoding used in scripts
                         * @return {#code this}, to facilitate method chaining
                         * @since 4.0.3
                         */
                        // @ts-ignore
                        public setScriptEncoding(scriptEncoding: java.lang.String | string): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
                        /**
                         * Specify the statement separator used in all SQL scripts, if a custom one.
                         * <p>Defaults to {@code ";"} if not specified and falls back to {@code "\n"}
                         * as a last resort; may be set to {@link ScriptUtils#EOF_STATEMENT_SEPARATOR}
                         * to signal that each script contains a single statement without a separator.
                         * @param separator the statement separator
                         * @return {#code this}, to facilitate method chaining
                         * @since 4.0.3
                         */
                        // @ts-ignore
                        public setSeparator(separator: java.lang.String | string): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
                        /**
                         * Specify the single-line comment prefix used in all SQL scripts.
                         * <p>Defaults to {@code "--"}.
                         * @param commentPrefix the prefix for single-line comments
                         * @return {#code this}, to facilitate method chaining
                         * @since 4.0.3
                         * @see #setCommentPrefixes(String...)
                         */
                        // @ts-ignore
                        public setCommentPrefix(commentPrefix: java.lang.String | string): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
                        /**
                         * Specify the prefixes that identify single-line comments within all SQL scripts.
                         * <p>Defaults to {@code ["--"]}.
                         * @param commentPrefixes the prefixes for single-line comments
                         * @return {#code this}, to facilitate method chaining
                         * @since 5.2
                         */
                        // @ts-ignore
                        public setCommentPrefixes(...commentPrefixes: java.lang.String[] | string[]): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
                        /**
                         * Specify the start delimiter for block comments in all SQL scripts.
                         * <p>Defaults to {@code "/*"}.
                         * @param blockCommentStartDelimiter the start delimiter for block comments
                         * @return {#code this}, to facilitate method chaining
                         * @since 4.0.3
                         * @see #setBlockCommentEndDelimiter
                         */
                        // @ts-ignore
                        public setBlockCommentStartDelimiter(blockCommentStartDelimiter: java.lang.String | string): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
                        /**
                         * Specify the end delimiter for block comments in all SQL scripts.
                         * <p>Defaults to <code>"*&#47;"</code>.
                         * @param blockCommentEndDelimiter the end delimiter for block comments
                         * @return {#code this}, to facilitate method chaining
                         * @since 4.0.3
                         * @see #setBlockCommentStartDelimiter
                         */
                        // @ts-ignore
                        public setBlockCommentEndDelimiter(blockCommentEndDelimiter: java.lang.String | string): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
                        /**
                         * Specify that all failures which occur while executing SQL scripts should
                         * be logged but should not cause a failure.
                         * <p>Defaults to {@code false}.
                         * @param flag {#code true} if script execution should continue on error
                         * @return {#code this}, to facilitate method chaining
                         * @since 4.0.3
                         */
                        // @ts-ignore
                        public continueOnError(flag: boolean): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
                        /**
                         * Specify that a failed SQL {@code DROP} statement within an executed
                         * script can be ignored.
                         * <p>This is useful for a database whose SQL dialect does not support an
                         * {@code IF EXISTS} clause in a {@code DROP} statement.
                         * <p>The default is {@code false} so that {@link #build building} will fail
                         * fast if a script starts with a {@code DROP} statement.
                         * @param flag {#code true} if failed drop statements should be ignored
                         * @return {#code this}, to facilitate method chaining
                         * @since 4.0.3
                         */
                        // @ts-ignore
                        public ignoreFailedDrops(flag: boolean): org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
                        /**
                         * Build the embedded database.
                         * @return the embedded database
                         */
                        // @ts-ignore
                        public build(): org.springframework.jdbc.datasource.embedded.EmbeddedDatabase
                    }
                }
            }
        }
    }
}
