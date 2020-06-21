declare namespace java {
    namespace nio {
        namespace file {
            namespace WatchEvent {
                /**
                 * An event kind, for the purposes of identification.
                 * @since 1.7
                 * @see StandardWatchEventKinds
                 */
                // @ts-ignore
                interface Kind<T> {
                    /**
                     * Returns the name of the event kind.
                     * @return the name of the event kind
                     */
                    // @ts-ignore
                    name(): string
                    /**
                     * Returns the type of the {@link WatchEvent#context context} value.
                     * @return the type of the context value
                     */
                    // @ts-ignore
                    type(): java.lang.Class<T>
                }
            }
        }
    }
}
