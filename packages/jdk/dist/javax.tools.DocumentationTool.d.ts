declare namespace javax {
    namespace tools {
        /**
         * Interface to invoke Java&trade; programming language documentation tools from
         * programs.
         */
        // @ts-ignore
        interface DocumentationTool extends javax.tools.Tool, javax.tools.OptionChecker {
            /**
             * Creates a future for a documentation task with the given
             * components and arguments.  The task might not have
             * completed as described in the DocumentationTask interface.
             * <p>If a file manager is provided, it must be able to handle all
             * locations defined in {@link DocumentationTool.Location},
             * as well as
             * {@link StandardLocation#SOURCE_PATH},
             * {@link StandardLocation#CLASS_PATH}, and
             * {@link StandardLocation#PLATFORM_CLASS_PATH}.
             * @param out a Writer for additional output from the tool;
             *  use {#code System.err} if {@code null}
             * @param fileManager a file manager; if {#code null} use the
             *  tool's standard filemanager
             * @param diagnosticListener a diagnostic listener; if {#code null}
             *  use the tool's default method for reporting diagnostics
             * @param docletClass a class providing the necessary methods required
             *  of a doclet
             * @param options documentation tool options and doclet options,
             *  {#code null} means no options
             * @param compilationUnits the compilation units to compile, {#code
             *  null} means no compilation units
             * @return an object representing the compilation
             * @throws RuntimeException if an unrecoverable error
             *  occurred in a user supplied component.  The
             *  {#linkplain Throwable#getCause() cause} will be the error in
             *  user code.
             * @throws IllegalArgumentException if any of the given
             *  compilation units are of other kind than
             *  {#linkplain JavaFileObject.Kind#SOURCE source}
             */
            // @ts-ignore
            getTask(out: java.io.Writer, fileManager: javax.tools.JavaFileManager, diagnosticListener: javax.tools.DiagnosticListener<any super javax.tools.JavaFileObject>, docletClass: java.lang.Class<any>, options: java.lang.Iterable<java.lang.String>, compilationUnits: java.lang.Iterable<javax.tools.JavaFileObject>): javax.tools.DocumentationTool.DocumentationTask
            /**
             * Gets a new instance of the standard file manager implementation
             * for this tool.  The file manager will use the given diagnostic
             * listener for producing any non-fatal diagnostics.  Fatal errors
             * will be signaled with the appropriate exceptions.
             * <p>The standard file manager will be automatically reopened if
             * it is accessed after calls to {@code flush} or {@code close}.
             * The standard file manager must be usable with other tools.
             * @param diagnosticListener a diagnostic listener for non-fatal
             *  diagnostics; if {#code null} use the compiler's default method
             *  for reporting diagnostics
             * @param locale the locale to apply when formatting diagnostics;
             *  {#code null} means the {@linkplain Locale#getDefault() default locale}.
             * @param charset the character set used for decoding bytes; if
             *  {#code null} use the platform default
             * @return the standard file manager
             */
            // @ts-ignore
            getStandardFileManager(diagnosticListener: javax.tools.DiagnosticListener<any super javax.tools.JavaFileObject>, locale: java.util.Locale, charset: java.nio.charset.Charset): javax.tools.StandardJavaFileManager
        }
    }
}
