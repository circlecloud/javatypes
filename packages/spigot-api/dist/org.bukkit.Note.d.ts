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
            public static flat(octave: number /*int*/, tone: org.bukkit.Note.Tone): org.bukkit.Note
            /**
             * Creates a new note for a sharp tone, such as A-sharp.
             * @param octave The octave where the note is in. Has to be 0 - 2.
             * @param tone The tone within the octave. If the octave is 2 the note has
             *      to be F#.
             * @return The new note.
             */
            // @ts-ignore
            public static sharp(octave: number /*int*/, tone: org.bukkit.Note.Tone): org.bukkit.Note
            /**
             * Creates a new note for a natural tone, such as A-natural.
             * @param octave The octave where the note is in. Has to be 0 - 1.
             * @param tone The tone within the octave.
             * @return The new note.
             */
            // @ts-ignore
            public static natural(octave: number /*int*/, tone: org.bukkit.Note.Tone): org.bukkit.Note
            /**
             * @return The note a semitone above this one.
             */
            // @ts-ignore
            public sharped(): org.bukkit.Note
            /**
             * @return The note a semitone below this one.
             */
            // @ts-ignore
            public flattened(): org.bukkit.Note
            /**
             * Returns the internal id of this note.
             * @return the internal id of this note.
             * @deprecated Magic value
             */
            // @ts-ignore
            public getId(): number /*byte*/
            /**
             * Returns the octave of this note.
             * @return the octave of this note.
             */
            // @ts-ignore
            public getOctave(): number /*int*/
            /**
             * Returns the tone of this note.
             * @return the tone of this note.
             */
            // @ts-ignore
            public getTone(): org.bukkit.Note.Tone
            /**
             * Returns if this note is sharped.
             * @return if this note is sharped.
             */
            // @ts-ignore
            public isSharped(): boolean
            // @ts-ignore
            public hashCode(): number /*int*/
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            // @ts-ignore
            public toString(): string
        }
    }
}
