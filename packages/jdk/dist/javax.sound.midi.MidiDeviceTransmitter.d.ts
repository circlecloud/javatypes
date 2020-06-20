declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * <p>{@code MidiDeviceTransmitter} is a {@code Transmitter} which represents
             * a MIDI input connector of a {@code MidiDevice}
             * (see {@link MidiDevice#getTransmitter()}).
             * @since 1.7
             */
            // @ts-ignore
            interface MidiDeviceTransmitter extends javax.sound.midi.Transmitter {
                /**
                 * Obtains a MidiDevice object which is an owner of this Transmitter.
                 * @return a MidiDevice object which is an owner of this Transmitter
                 */
                // @ts-ignore
                getMidiDevice(): javax.sound.midi.MidiDevice
            }
        }
    }
}
