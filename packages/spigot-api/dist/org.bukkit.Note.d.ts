declare namespace org {
    namespace bukkit {
        /**
         * A note class to store a specific note.
         */
        // @ts-ignore
        class Note extends java.lang.Object {
            /**
             * Creates a new note.
             * @param note Internal note id. {#link #getId()} always return this
             *      value. The value has to be in the interval [0;&nbsp;24].
             */
            // @ts-ignore
            constructor(note: number /*int*/)
            /**
             * Creates a new note.
             * @param octave The octave where the note is in. Has to be 0 - 2.
             * @param tone The tone within the octave. If the octave is 2 the note has
             *      to be F#.
             * @param sharped Set if the tone is sharped (e.g. for F#).
             */
            // @ts-ignore
            constructor(octave: number /*int*/, tone: org.bukkit.Note.Tone, sharped: boolean)
            /**
             * Creates a new note for a flat tone, such as A-flat.
             * @param octave The octave where the note is in. Has to be 0 - 1.
             * @param tone The tone within the octave.
             * @return The new note.
             */
            // @ts-ignore
            flat(octave: number /*int*/, tone: org.bukkit.Note.Tone): org.bukkit.Note
            /**
             * Creates a new note for a sharp tone, such as A-sharp.
             * @param octave The octave where the note is in. Has to be 0 - 2.
             * @param tone The tone within the octave. If the octave is 2 the note has
             *      to be F#.
             * @return The new note.
             */
            // @ts-ignore
            sharp(octave: number /*int*/, tone: org.bukkit.Note.Tone): org.bukkit.Note
            /**
             * Creates a new note for a natural tone, such as A-natural.
             * @param octave The octave where the note is in. Has to be 0 - 1.
             * @param tone The tone within the octave.
             * @return The new note.
             */
            // @ts-ignore
            natural(octave: number /*int*/, tone: org.bukkit.Note.Tone): org.bukkit.Note
            /**
             * @return The note a semitone above this one.
             */
            // @ts-ignore
            sharped(): org.bukkit.Note
            /**
             * @return The note a semitone below this one.
             */
            // @ts-ignore
            flattened(): org.bukkit.Note
            /**
             * Returns the internal id of this note.
             * @return the internal id of this note.
             * @deprecated Magic value
             */
            // @ts-ignore
            getId(): byte
            /**
             * Returns the octave of this note.
             * @return the octave of this note.
             */
            // @ts-ignore
            getOctave(): int
            /**
             * Returns the tone of this note.
             * @return the tone of this note.
             */
            // @ts-ignore
            getTone(): org.bukkit.Note.Tone
            /**
             * Returns if this note is sharped.
             * @return if this note is sharped.
             */
            // @ts-ignore
            isSharped(): boolean
            // @ts-ignore
            hashCode(): int
            // @ts-ignore
            equals(obj: any): boolean
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
