declare namespace org {
    namespace springframework {
        namespace context {
            namespace index {
                /**
                 * Candidate components index loading mechanism for internal use within the framework.
                 * @author Stephane Nicoll
                 * @since 5.0
                 */
                // @ts-ignore
                class CandidateComponentsIndexLoader extends java.lang.Object {
                    /**
                     * The location to look for components.
                     * <p>Can be present in multiple JAR files.
                     */
                    // @ts-ignore
                    readonly COMPONENTS_RESOURCE_LOCATION: string
                    /**
                     * System property that instructs Spring to ignore the index, i.e.
                     * to always return {@code null} from {@link #loadIndex(ClassLoader)}.
                     * <p>The default is "false", allowing for regular use of the index. Switching this
                     * flag to {@code true} fulfills a corner case scenario when an index is partially
                     * available for some libraries (or use cases) but couldn't be built for the whole
                     * application. In this case, the application context fallbacks to a regular
                     * classpath arrangement (i.e. as no index was present at all).
                     */
                    // @ts-ignore
                    readonly IGNORE_INDEX: string
                    /**
                     * Load and instantiate the {@link CandidateComponentsIndex} from
                     * {@value #COMPONENTS_RESOURCE_LOCATION}, using the given class loader. If no
                     * index is available, return {@code null}.
                     * @param classLoader the ClassLoader to use for loading (can be {#code null} to use the default)
                     * @return the index to use or {#code null} if no index was found
                     * @throws IllegalArgumentException if any module index cannot
                     *  be loaded or if an error occurs while creating {#link CandidateComponentsIndex}
                     */
                    // @ts-ignore
                    loadIndex(classLoader: java.lang.ClassLoader): org.springframework.context.index.CandidateComponentsIndex
                }
            }
        }
    }
}
