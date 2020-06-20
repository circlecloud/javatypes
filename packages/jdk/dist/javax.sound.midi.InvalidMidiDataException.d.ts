declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * An <code>InvalidMidiDataException</code> indicates that inappropriate MIDI
             * data was encountered. This often means that the data is invalid in and of
             * itself, from the perspective of the MIDI specification.  An example would
             * be an undefined status byte.  However, the exception might simply
             * mean that the data was invalid in the context it was used, or that
             * the object to which the data was given was unable to parse or use it.
             * For example, a file reader might not be able to parse a Type 2 MIDI file, even
             * though that format is defined in the MIDI specification.
             * @author Kara Kytle
             */
            // @ts-ignore
            class InvalidMidiDataException extends java.lang.Exception {
                /**
                 * Constructs an <code>InvalidMidiDataException</code> with
                 * <code>null</code> for its error detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an <code>InvalidMidiDataException</code> with the
                 * specified detail message.
                 * @param message the string to display as an error detail message
                 */
                // @ts-ignore
                constructor(message: string)
            }
        }
    }
}
