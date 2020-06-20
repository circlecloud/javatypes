declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace tileentity {
                            /**
                             * An {@link DataManipulator} handling the {@link NotePitch} for a
                             * {@link Note}.
                             */
                            // @ts-ignore
                            interface NoteData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.tileentity.NoteData, org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableNoteData> {
                                /**
                                 * Gets the {@link Value} for the {@link NotePitch}.
                                 * @return The value for the note pitch
                                 * @see Keys#NOTE_PITCH
                                 */
                                // @ts-ignore
                                note(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.NotePitch>
                            }
                        }
                    }
                }
            }
        }
    }
}
