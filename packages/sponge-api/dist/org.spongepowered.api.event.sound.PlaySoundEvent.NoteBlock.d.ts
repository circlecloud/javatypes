declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace sound {
                    namespace PlaySoundEvent {
                        /**
                         * Fired when a noteblock is triggered
                         */
                        // @ts-ignore
                        interface NoteBlock extends org.spongepowered.api.event.sound.PlaySoundEvent {
                            // @ts-ignore
                            getNote(): org.spongepowered.api.block.tileentity.Note
                            // @ts-ignore
                            getInstrument(): org.spongepowered.api.data.type.InstrumentType
                            // @ts-ignore
                            getNotePitch(): org.spongepowered.api.data.type.NotePitch
                        }
                    }
                }
            }
        }
    }
}
