declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * MBean operation interface for the {@link LiveBeansView} feature.
                 * @author Juergen Hoeller
                 * @since 3.2
                 */
                // @ts-ignore
                interface LiveBeansViewMBean {
                    /**
                     * Generate a JSON snapshot of current beans and their dependencies.
                     */
                    // @ts-ignore
                    getSnapshotAsJson(): string
                }
            }
        }
    }
}
