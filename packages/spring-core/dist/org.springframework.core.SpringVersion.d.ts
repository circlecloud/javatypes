declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Class that exposes the Spring version. Fetches the
             * "Implementation-Version" manifest attribute from the jar file.
             * <p>Note that some ClassLoaders do not expose the package metadata,
             * hence this class might not be able to determine the Spring version
             * in all environments. Consider using a reflection-based check instead &mdash;
             * for example, checking for the presence of a specific Spring 5.2
             * method that you intend to call.
             * @author Juergen Hoeller
             * @since 1.1
             */
            // @ts-ignore
            class SpringVersion extends java.lang.Object {
                /**
                 * Return the full version string of the present Spring codebase,
                 * or {@code null} if it cannot be determined.
                 * @see Package#getImplementationVersion()
                 */
                // @ts-ignore
                getVersion(): java.lang.String
            }
        }
    }
}
