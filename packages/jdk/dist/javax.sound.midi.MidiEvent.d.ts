declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * MIDI events contain a MIDI message and a corresponding time-stamp
             * expressed in ticks, and can represent the MIDI event information
             * stored in a MIDI file or a <code>{@link Sequence}</code> object.  The
             * duration of a tick is specified by the timing information contained
             * in the MIDI file or <code>Sequence</code> object.
             * <p>
             * In Java Sound, <code>MidiEvent</code> objects are typically contained in a
             * <code>{@link Track}</code>, and <code>Tracks</code> are likewise
             * contained in a <code>Sequence</code>.
             * @author David Rivas
             * @author Kara Kytle
             */
            // @ts-ignore
            class MidiEvent extends java.lang.Object {
                /**
                 * Constructs a new <code>MidiEvent</code>.
                 * @param message the MIDI message contained in the event
                 * @param tick the time-stamp for the event, in MIDI ticks
                 */
                // @ts-ignore
                constructor(message: javax.sound.midi.MidiMessage, tick: number /*long*/)
                /**
                 * Obtains the MIDI message contained in the event.
                 * @return the MIDI message
                 */
                // @ts-ignore
                getMessage(): javax.sound.midi.MidiMessage
                /**
                 * Sets the time-stamp for the event, in MIDI ticks
                 * @param tick the new time-stamp, in MIDI ticks
                 */
                // @ts-ignore
                setTick(tick: number /*long*/): void
                /**
                 * Obtains the time-stamp for the event, in MIDI ticks
                 * @return the time-stamp for the event, in MIDI ticks
                 */
                // @ts-ignore
                getTick(): long
            }
        }
    }
}
