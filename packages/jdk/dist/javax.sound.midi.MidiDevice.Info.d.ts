declare namespace javax {
    namespace sound {
        namespace midi {
            namespace MidiDevice {
                /**
                 * A <code>MidiDevice.Info</code> object contains assorted
                 * data about a <code>{@link MidiDevice}</code>, including its
                 * name, the company who created it, and descriptive text.
                 * @see MidiDevice#getDeviceInfo
                 */
                // @ts-ignore
                class Info extends java.lang.Object {
                    /**
                     * Constructs a device info object.
                     * @param name the name of the device
                     * @param vendor the name of the company who provides the device
                     * @param description a description of the device
                     * @param version version information for the device
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, vendor: java.lang.String | string, description: java.lang.String | string, version: java.lang.String | string)
                    /**
                     * Reports whether two objects are equal.
                     * Returns <code>true</code> if the objects are identical.
                     * @param obj the reference object with which to compare this
                     *  object
                     * @return <code>true</code> if this object is the same as the
                     *  <code>obj</code> argument; <code>false</code> otherwise
                     */
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    /**
                     * Finalizes the hashcode method.
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Obtains the name of the device.
                     * @return a string containing the device's name
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Obtains the name of the company who supplies the device.
                     * @return device the vendor's name
                     */
                    // @ts-ignore
                    public getVendor(): string
                    /**
                     * Obtains the description of the device.
                     * @return a description of the device
                     */
                    // @ts-ignore
                    public getDescription(): string
                    /**
                     * Obtains the version of the device.
                     * @return textual version information for the device.
                     */
                    // @ts-ignore
                    public getVersion(): string
                    /**
                     * Provides a string representation of the device information.
                     * @return a description of the info object
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
