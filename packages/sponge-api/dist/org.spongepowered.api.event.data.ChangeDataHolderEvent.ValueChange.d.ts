declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace data {
                    namespace ChangeDataHolderEvent {
                        // @ts-ignore
                        interface ValueChange extends org.spongepowered.api.event.data.ChangeDataHolderEvent {
                            /**
                             * Gets the original {@link DataTransactionResult} of the {@link Value}s
                             * that have changed in this event.
                             * @return The original changes of values
                             */
                            // @ts-ignore
                            getOriginalChanges(): org.spongepowered.api.data.DataTransactionResult
                            /**
                             * Submits a new {@link DataTransactionResult} as a proposal of various
                             * {@link Value}s to be successfully offered/changed on the original
                             * {@link DataHolder}.
                             * <p>If the proposed {@link DataTransactionResult} provides additional
                             * values that were not changed in the {@link #getOriginalChanges()},
                             * the provided changes suggested to be successfully offered will be
                             * re-offered </p>
                             * @param result The resulting offer
                             * @return This event, for chaining
                             */
                            // @ts-ignore
                            proposeChanges(result: org.spongepowered.api.data.DataTransactionResult): org.spongepowered.api.event.data.ChangeDataHolderEvent.ValueChange
                            /**
                             * Gets the ending resulting {@link DataTransactionResult} that will be
                             * offered to the {@link DataHolder}.
                             * @return The final transaction details to be submitted
                             */
                            // @ts-ignore
                            getEndResult(): org.spongepowered.api.data.DataTransactionResult
                        }
                    }
                }
            }
        }
    }
}
