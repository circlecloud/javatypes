declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace Port {
                /**
                 * The <code>Port.Info</code> class extends <code>{@link Line.Info}</code>
                 * with additional information specific to ports, including the port's name
                 * and whether it is a source or a target for its mixer.
                 * By definition, a port acts as either a source or a target to its mixer,
                 * but not both.  (Audio input ports are sources; audio output ports are targets.)
                 * <p>
                 * To learn what ports are available, you can retrieve port info objects through the
                 * <code>{@link Mixer#getSourceLineInfo getSourceLineInfo}</code> and
                 * <code>{@link Mixer#getTargetLineInfo getTargetLineInfo}</code>
                 * methods of the <code>Mixer</code> interface.  Instances of the
                 * <code>Port.Info</code> class may also be constructed and used to obtain
                 * lines matching the parameters specified in the <code>Port.Info</code> object.
                 * @author Kara Kytle
                 * @since 1.3
                 */
                // @ts-ignore
                class Info extends javax.sound.sampled.Line.Info {
                    /**
                     * Constructs a port's info object from the information given.
                     * This constructor is typically used by an implementation
                     * of Java Sound to describe a supported line.
                     * @param lineClass the class of the port described by the info object.
                     * @param name the string that names the port
                     * @param isSource <code>true</code> if the port is a source port (such
                     *  as a microphone), <code>false</code> if the port is a target port
                     *  (such as a speaker).
                     */
                    // @ts-ignore
                    constructor(lineClass: java.lang.Class<any>, name: string, isSource: boolean)
                    /**
                     * A type of port that gets audio from a built-in microphone or a microphone jack.
                     */
                    // @ts-ignore
                    readonly MICROPHONE: javax.sound.sampled.Port.Info
                    /**
                     * A type of port that gets audio from a line-level audio input jack.
                     */
                    // @ts-ignore
                    readonly LINE_IN: javax.sound.sampled.Port.Info
                    /**
                     * A type of port that gets audio from a CD-ROM drive.
                     */
                    // @ts-ignore
                    readonly COMPACT_DISC: javax.sound.sampled.Port.Info
                    /**
                     * A type of port that sends audio to a built-in speaker or a speaker jack.
                     */
                    // @ts-ignore
                    readonly SPEAKER: javax.sound.sampled.Port.Info
                    /**
                     * A type of port that sends audio to a headphone jack.
                     */
                    // @ts-ignore
                    readonly HEADPHONE: javax.sound.sampled.Port.Info
                    /**
                     * A type of port that sends audio to a line-level audio output jack.
                     */
                    // @ts-ignore
                    readonly LINE_OUT: javax.sound.sampled.Port.Info
                    /**
                     * Obtains the name of the port.
                     * @return the string that names the port
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Indicates whether the port is a source or a target for its mixer.
                     * @return <code>true</code> if the port is a source port (such
                     *  as a microphone), <code>false</code> if the port is a target port
                     *  (such as a speaker).
                     */
                    // @ts-ignore
                    isSource(): boolean
                    /**
                     * Indicates whether this info object specified matches this one.
                     * To match, the match requirements of the superclass must be
                     * met and the types must be equal.
                     * @param info the info object for which the match is queried
                     */
                    // @ts-ignore
                    matches(info: javax.sound.sampled.Line.Info): boolean
                    /**
                     * Finalizes the equals method
                     */
                    // @ts-ignore
                    equals(obj: any): boolean
                    /**
                     * Finalizes the hashCode method
                     */
                    // @ts-ignore
                    hashCode(): int
                    /**
                     * Provides a <code>String</code> representation
                     * of the port.
                     * @return a string that describes the port
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
