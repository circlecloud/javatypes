declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the {@link NotePitch} for a
                             * {@link Note}.
                             */
                            // @ts-ignore
                            interface ImmutableNoteData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableNoteData, org.spongepowered.api.data.manipulator.mutable.tileentity.NoteData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the {@link NotePitch}.
                                 * @return The immutable value for the note pitch
                                 * @see Keys#NOTE_PITCH
                                 */
                                // @ts-ignore
                                note(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.data.type.NotePitch>
                            }
                        }
                    }
                }
            }
        }
    }
}
