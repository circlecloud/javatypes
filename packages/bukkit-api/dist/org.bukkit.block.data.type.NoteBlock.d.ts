declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'instrument' is the type of sound made when this note block is activated.
                     * <br>
                     * 'note' is the specified tuned pitch that the instrument will be played in.
                     */
                    // @ts-ignore
                    interface NoteBlock extends org.bukkit.block.data.Powerable {
                        /**
                         * Gets the value of the 'instrument' property.
                         * @return the 'instrument' value
                         */
                        // @ts-ignore
                        getInstrument(): org.bukkit.Instrument
                        /**
                         * Sets the value of the 'instrument' property.
                         * @param instrument the new 'instrument' value
                         */
                        // @ts-ignore
                        setInstrument(instrument: org.bukkit.Instrument): void
                        /**
                         * Gets the value of the 'note' property.
                         * @return the 'note' value
                         */
                        // @ts-ignore
                        getNote(): org.bukkit.Note
                        /**
                         * Sets the value of the 'note' property.
                         * @param note the new 'note' value
                         */
                        // @ts-ignore
                        setNote(note: org.bukkit.Note): void
                    }
                }
            }
        }
    }
}
