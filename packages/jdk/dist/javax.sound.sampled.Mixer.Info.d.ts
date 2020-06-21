declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace Mixer {
                /**
                 * The <code>Mixer.Info</code> class represents information about an audio mixer,
                 * including the product's name, version, and vendor, along with a textual
                 * description.  This information may be retrieved through the
                 * {@link Mixer#getMixerInfo() getMixerInfo}
                 * method of the <code>Mixer</code> interface.
                 * @author Kara Kytle
                 * @since 1.3
                 */
                // @ts-ignore
                class Info extends java.lang.Object {
                    /**
                     * Constructs a mixer's info object, passing it the given
                     * textual information.
                     * @param name the name of the mixer
                     * @param vendor the company who manufactures or creates the hardware
                     *  or software mixer
                     * @param description descriptive text about the mixer
                     * @param version version information for the mixer
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, vendor: java.lang.String | string, description: java.lang.String | string, version: java.lang.String | string)
                    /**
                     * Indicates whether two info objects are equal, returning <code>true</code> if
                     * they are identical.
                     * @param obj the reference object with which to compare this info
                     *  object
                     * @return <code>true</code> if this info object is the same as the
                     *  <code>obj</code> argument; <code>false</code> otherwise
                     */
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    /**
                     * Finalizes the hashcode method.
                     * @return the hashcode for this object
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Obtains the name of the mixer.
                     * @return a string that names the mixer
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Obtains the vendor of the mixer.
                     * @return a string that names the mixer's vendor
                     */
                    // @ts-ignore
                    public getVendor(): string
                    /**
                     * Obtains the description of the mixer.
                     * @return a textual description of the mixer
                     */
                    // @ts-ignore
                    public getDescription(): string
                    /**
                     * Obtains the version of the mixer.
                     * @return textual version information for the mixer
                     */
                    // @ts-ignore
                    public getVersion(): string
                    /**
                     * Provides a string representation of the mixer info.
                     * @return a string describing the info object
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
