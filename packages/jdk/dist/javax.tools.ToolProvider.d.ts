declare namespace javax {
    namespace tools {
        /**
         * Provides methods for locating tool providers, for example,
         * providers of compilers.  This class complements the
         * functionality of {@link java.util.ServiceLoader}.
         * @author Peter von der Ah&eacute;
         * @since 1.6
         */
        // @ts-ignore
        class ToolProvider extends java.lang.Object {
            /**
             * Gets the Java&trade; programming language compiler provided
             * with this platform.
             * @return the compiler provided with this platform or
             *  {#code null} if no compiler is provided
             */
            // @ts-ignore
            public static getSystemJavaCompiler(): javax.tools.JavaCompiler
            /**
             * Gets the Java&trade; programming language documentation tool provided
             * with this platform.
             * @return the documentation tool provided with this platform or
             *  {#code null} if no documentation tool is provided
             */
            // @ts-ignore
            public static getSystemDocumentationTool(): javax.tools.DocumentationTool
            /**
             * Returns the class loader for tools provided with this platform.
             * This does not include user-installed tools.  Use the
             * {@linkplain java.util.ServiceLoader service provider mechanism}
             * for locating user installed tools.
             * @return the class loader for tools provided with this platform
             *  or {#code null} if no tools are provided
             */
            // @ts-ignore
            public static getSystemToolClassLoader(): java.lang.ClassLoader
        }
    }
}
