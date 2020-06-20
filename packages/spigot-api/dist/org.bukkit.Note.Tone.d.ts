declare namespace org {
    namespace bukkit {
        namespace Note {
            /**
             * An enum holding tones.
             */
            // @ts-ignore
            class Tone extends java.lang.Enum<org.bukkit.Note.Tone> {
                /**
                 * The number of tones including sharped tones.
                 */
                // @ts-ignore
                readonly TONES_COUNT: number /*byte*/
                // @ts-ignore
                values(): org.bukkit.Note.Tone[]
                // @ts-ignore
                valueOf(name: string): org.bukkit.Note.Tone
                /**
                 * Returns the not sharped id of this tone.
                 * @return the not sharped id of this tone.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getId(): byte
                /**
                 * Returns the id of this tone. These method allows to return the
                 * sharped id of the tone. If the tone couldn't be sharped it always
                 * return the not sharped id of this tone.
                 * @param sharped Set to true to return the sharped id.
                 * @return the id of this tone.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getId(sharped: boolean): byte
                /**
                 * Returns if this tone could be sharped.
                 * @return if this tone could be sharped.
                 */
                // @ts-ignore
                isSharpable(): boolean
                /**
                 * Returns if this tone id is the sharped id of the tone.
                 * @param id the id of the tone.
                 * @return if the tone id is the sharped id of the tone.
                 * @throws IllegalArgumentException if neither the tone nor the
                 *      semitone have the id.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                isSharped(id: number /*byte*/): boolean
                /**
                 * Returns the tone to id. Also returning the semitones.
                 * @param id the id of the tone.
                 * @return the tone to id.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getById(id: number /*byte*/): org.bukkit.Note.Tone
            }
        }
    }
}
