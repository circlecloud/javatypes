declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace EnumControl {
                /**
                 * An instance of the <code>EnumControl.Type</code> inner class identifies one kind of
                 * enumerated control.  Static instances are provided for the
                 * common types.
                 * @see EnumControl
                 * @author Kara Kytle
                 * @since 1.3
                 */
                // @ts-ignore
                class Type extends javax.sound.sampled.Control.Type {
                    /**
                     * Constructs a new enumerated control type.
                     * @param name  the name of the new enumerated control type
                     */
                    // @ts-ignore
                    constructor(name: string)
                    /**
                     * Represents a control over a set of possible reverberation settings.
                     * Each reverberation setting is described by an instance of the
                     * {@link ReverbType} class.  (To access these settings,
                     * invoke <code>{@link EnumControl#getValues}</code> on an
                     * enumerated control of type <code>REVERB</code>.)
                     */
                    // @ts-ignore
                    readonly REVERB: javax.sound.sampled.EnumControl.Type
                }
            }
        }
    }
}
