declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace BooleanControl {
                /**
                 * An instance of the <code>BooleanControl.Type</code> class identifies one kind of
                 * boolean control.  Static instances are provided for the
                 * common types.
                 * @author Kara Kytle
                 * @since 1.3
                 */
                // @ts-ignore
                class Type extends javax.sound.sampled.Control.Type {
                    /**
                     * Constructs a new boolean control type.
                     * @param name  the name of the new boolean control type
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    /**
                     * Represents a control for the mute status of a line.
                     * Note that mute status does not affect gain.
                     */
                    // @ts-ignore
                    public static readonly MUTE: javax.sound.sampled.BooleanControl.Type
                    /**
                     * Represents a control for whether reverberation is applied
                     * to a line.  Note that the status of this control not affect
                     * the reverberation settings for a line, but does affect whether
                     * these settings are used.
                     */
                    // @ts-ignore
                    public static readonly APPLY_REVERB: javax.sound.sampled.BooleanControl.Type
                }
            }
        }
    }
}
