declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace sound {
                    namespace PlaySoundEvent {
                        /**
                         * Fired when a record is inserted into a Jukebox
                         */
                        // @ts-ignore
                        interface Record extends org.spongepowered.api.event.sound.PlaySoundEvent {
                            /**
                             * Gets the {@link Jukebox} associated with this event.
                             * @return The jukebox tile
                             */
                            // @ts-ignore
                            getJukebox(): org.spongepowered.api.block.tileentity.Jukebox
                            /**
                             * Gets the {@link RecordType} associated with this event.
                             * @return The record type
                             */
                            // @ts-ignore
                            getRecordType(): org.spongepowered.api.effect.sound.record.RecordType
                        }
                    }
                }
            }
        }
    }
}
