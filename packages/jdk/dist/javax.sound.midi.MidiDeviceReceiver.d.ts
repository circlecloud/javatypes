declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * <p>{@code MidiDeviceReceiver} is a {@code Receiver} which represents
             * a MIDI input connector of a {@code MidiDevice}
             * (see {@link MidiDevice#getReceiver()}).
             * @since 1.7
             */
            // @ts-ignore
            interface MidiDeviceReceiver extends javax.sound.midi.Receiver {
                /**
                 * Obtains a MidiDevice object which is an owner of this Receiver.
                 * @return a MidiDevice object which is an owner of this Receiver
                 */
                // @ts-ignore
                getMidiDevice(): javax.sound.midi.MidiDevice
            }
        }
    }
}
