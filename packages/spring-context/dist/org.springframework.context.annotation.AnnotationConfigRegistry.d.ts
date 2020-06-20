declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Common interface for annotation config application contexts,
                 * defining {@link #register} and {@link #scan} methods.
                 * @author Juergen Hoeller
                 * @since 4.1
                 */
                // @ts-ignore
                interface AnnotationConfigRegistry {
                    /**
                     * Register one or more component classes to be processed.
                     * <p>Calls to {@code register} are idempotent; adding the same
                     * component class more than once has no additional effect.
                     * @param componentClasses one or more component classes,
                     *  e.g. {#link Configuration @Configuration} classes
                     */
                    // @ts-ignore
                    register(...componentClasses: java.lang.Class[]): void
                    /**
                     * Perform a scan within the specified base packages.
                     * @param basePackages the packages to scan for component classes
                     */
                    // @ts-ignore
                    scan(...basePackages: string[]): void
                }
            }
        }
    }
}
