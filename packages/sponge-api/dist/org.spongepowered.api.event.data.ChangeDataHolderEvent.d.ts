declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace data {
                    /**
                     * An event that is associated with a {@link DataHolder} that may have some
                     * {@link BaseValue}s changed, offered, or removed. Note that calling any
                     * methods relating to modifying a {@link DataHolder} while this event
                     * is being processed may produce awkward results.
                     */
                    // @ts-ignore
                    interface ChangeDataHolderEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the {@link DataHolder} targeted in this event.
                         * @return The data holder targeted in this event
                         */
                        // @ts-ignore
                        getTargetHolder(): org.spongepowered.api.data.DataHolder
                    }
                }
            }
        }
    }
}
