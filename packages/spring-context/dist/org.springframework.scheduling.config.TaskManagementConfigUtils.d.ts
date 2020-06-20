declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace config {
                /**
                 * Configuration constants for internal sharing across subpackages.
                 * @author Juergen Hoeller
                 * @since 4.1
                 */
                // @ts-ignore
                class TaskManagementConfigUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * The bean name of the internally managed Scheduled annotation processor.
                     */
                    // @ts-ignore
                    readonly SCHEDULED_ANNOTATION_PROCESSOR_BEAN_NAME: string
                    /**
                     * The bean name of the internally managed Async annotation processor.
                     */
                    // @ts-ignore
                    readonly ASYNC_ANNOTATION_PROCESSOR_BEAN_NAME: string
                    /**
                     * The bean name of the internally managed AspectJ async execution aspect.
                     */
                    // @ts-ignore
                    readonly ASYNC_EXECUTION_ASPECT_BEAN_NAME: string
                }
            }
        }
    }
}
