declare namespace javax {
    namespace sound {
        namespace midi {
            namespace spi {
                /**
                 * A {@code MidiDeviceProvider} is a factory or provider for a particular type
                 * of MIDI device. This mechanism allows the implementation to determine how
                 * resources are managed in the creation and management of a device.
                 * @author Kara Kytle
                 */
                // @ts-ignore
                class MidiDeviceProvider extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Indicates whether the device provider supports the device represented by
                     * the specified device info object.
                     * @param info an info object that describes the device for which support
                     *          is queried
                     * @return {#code true} if the specified device is supported, otherwise
                     *          {@code false}
                     */
                    // @ts-ignore
                    isDeviceSupported(info: javax.sound.midi.MidiDevice.Info): boolean
                    /**
                     * Obtains the set of info objects representing the device or devices
                     * provided by this {@code MidiDeviceProvider}.
                     * @return set of device info objects
                     */
                    // @ts-ignore
                    abstract getDeviceInfo(): javax.sound.midi.MidiDevice.Info[]
                    /**
                     * Obtains an instance of the device represented by the info object.
                     * @param info an info object that describes the desired device
                     * @return device instance
                     * @throws IllegalArgumentException if the info object specified does not
                     *          match the info object for a device supported by this
                     *          {#code MidiDeviceProvider}
                     */
                    // @ts-ignore
                    abstract getDevice(info: javax.sound.midi.MidiDevice.Info): javax.sound.midi.MidiDevice
                }
            }
        }
    }
}
