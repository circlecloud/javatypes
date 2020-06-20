declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    /**
                     * Represents a note block.
                     * <p>A {@link Note} will always have a valid {@link NoteData} to play.</p>
                     */
                    // @ts-ignore
                    interface Note extends org.spongepowered.api.block.tileentity.TileEntity {
                        /**
                         * Attempts to play the currently stored {@link NotePitch} from this
                         * {@link Note} tile entity.
                         */
                        // @ts-ignore
                        playNote(): void
                        /**
                         * Retrieves the {@link NoteData} for this note block.
                         * @return the note data
                         */
                        // @ts-ignore
                        getNoteData(): org.spongepowered.api.data.manipulator.mutable.tileentity.NoteData
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
