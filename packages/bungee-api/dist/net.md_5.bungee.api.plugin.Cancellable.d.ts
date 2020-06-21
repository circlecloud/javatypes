declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace plugin {
                    /**
                     * Events that implement this indicate that they may be cancelled and thus
                     * prevented from happening.
                     */
                    // @ts-ignore
                    interface Cancellable {
                        /**
                         * Get whether or not this event is cancelled.
                         * @return the cancelled state of this event
                         */
                        // @ts-ignore
                        isCancelled(): boolean
                        /**
                         * Sets the cancelled state of this event.
                         * @param cancel the state to set
                         */
                        // @ts-ignore
                        setCancelled(cancel: boolean): void
                    }
                }
            }
        }
    }
}
