declare namespace javax {
    namespace sound {
        namespace sampled {
            /**
             * A mixer is an audio device with one or more lines.  It need not be
             * designed for mixing audio signals.  A mixer that actually mixes audio
             * has multiple input (source) lines and at least one output (target) line.
             * The former are often instances of classes that implement
             * <code>{@link SourceDataLine}</code>,
             * and the latter, <code>{@link TargetDataLine}</code>.  <code>{@link Port}</code>
             * objects, too, are either source lines or target lines.
             * A mixer can accept prerecorded, loopable sound as input, by having
             * some of its source lines be instances of objects that implement the
             * <code>{@link Clip}</code> interface.
             * <p>
             * Through methods of the <code>Line</code> interface, which <code>Mixer</code> extends,
             * a mixer might provide a set of controls that are global to the mixer.  For example,
             * the mixer can have a master gain control.  These global controls are distinct
             * from the controls belonging to each of the mixer's individual lines.
             * <p>
             * Some mixers, especially
             * those with internal digital mixing capabilities, may provide
             * additional capabilities by implementing the <code>DataLine</code> interface.
             * <p>
             * A mixer can support synchronization of its lines.  When one line in
             * a synchronized group is started or stopped, the other lines in the group
             * automatically start or stop simultaneously with the explicitly affected one.
             * @author Kara Kytle
             * @since 1.3
             */
            // @ts-ignore
            interface Mixer extends javax.sound.sampled.Line {
                /**
                 * Obtains information about this mixer, including the product's name,
                 * version, vendor, etc.
                 * @return a mixer info object that describes this mixer
                 * @see Mixer.Info
                 */
                // @ts-ignore
                getMixerInfo(): javax.sound.sampled.Mixer.Info
                /**
                 * Obtains information about the set of source lines supported
                 * by this mixer.
                 * Some source lines may only be available when this mixer is open.
                 * @return array of <code>Line.Info</code> objects representing source lines
                 *  for this mixer.  If no source lines are supported,
                 *  an array of length 0 is returned.
                 */
                // @ts-ignore
                getSourceLineInfo(): javax.sound.sampled.Line.Info[]
                /**
                 * Obtains information about the set of target lines supported
                 * by this mixer.
                 * Some target lines may only be available when this mixer is open.
                 * @return array of <code>Line.Info</code> objects representing target lines
                 *  for this mixer.  If no target lines are supported,
                 *  an array of length 0 is returned.
                 */
                // @ts-ignore
                getTargetLineInfo(): javax.sound.sampled.Line.Info[]
                /**
                 * Obtains information about source lines of a particular type supported
                 * by the mixer.
                 * Some source lines may only be available when this mixer is open.
                 * @param info a <code>Line.Info</code> object describing lines about which information
                 *  is queried
                 * @return an array of <code>Line.Info</code> objects describing source lines matching
                 *  the type requested.  If no matching source lines are supported, an array of length 0
                 *  is returned.
                 */
                // @ts-ignore
                getSourceLineInfo(info: javax.sound.sampled.Line.Info): javax.sound.sampled.Line.Info[]
                /**
                 * Obtains information about target lines of a particular type supported
                 * by the mixer.
                 * Some target lines may only be available when this mixer is open.
                 * @param info a <code>Line.Info</code> object describing lines about which information
                 *  is queried
                 * @return an array of <code>Line.Info</code> objects describing target lines matching
                 *  the type requested.  If no matching target lines are supported, an array of length 0
                 *  is returned.
                 */
                // @ts-ignore
                getTargetLineInfo(info: javax.sound.sampled.Line.Info): javax.sound.sampled.Line.Info[]
                /**
                 * Indicates whether the mixer supports a line (or lines) that match
                 * the specified <code>Line.Info</code> object.
                 * Some lines may only be supported when this mixer is open.
                 * @param info describes the line for which support is queried
                 * @return <code>true</code> if at least one matching line is
                 *  supported, <code>false</code> otherwise
                 */
                // @ts-ignore
                isLineSupported(info: javax.sound.sampled.Line.Info): boolean
                /**
                 * Obtains a line that is available for use and that matches the description
                 * in the specified <code>Line.Info</code> object.
                 * <p>If a <code>DataLine</code> is requested, and <code>info</code>
                 * is an instance of <code>DataLine.Info</code> specifying at
                 * least one fully qualified audio format, the last one
                 * will be used as the default format of the returned
                 * <code>DataLine</code>.
                 * @param info describes the desired line
                 * @return a line that is available for use and that matches the description
                 *  in the specified {#code Line.Info} object
                 * @throws LineUnavailableException if a matching line
                 *  is not available due to resource restrictions
                 * @throws IllegalArgumentException if this mixer does
                 *  not support any lines matching the description
                 * @throws SecurityException if a matching line
                 *  is not available due to security restrictions
                 */
                // @ts-ignore
                getLine(info: javax.sound.sampled.Line.Info): javax.sound.sampled.Line
                /**
                 * Obtains the approximate maximum number of lines of the requested type that can be open
                 * simultaneously on the mixer.
                 * Certain types of mixers do not have a hard bound and may allow opening more lines.
                 * Since certain lines are a shared resource, a mixer may not be able to open the maximum
                 * number of lines if another process has opened lines of this mixer.
                 * The requested type is any line that matches the description in
                 * the provided <code>Line.Info</code> object.  For example, if the info
                 * object represents a speaker
                 * port, and the mixer supports exactly one speaker port, this method
                 * should return 1.  If the info object represents a source data line
                 * and the mixer supports the use of 32 source data lines simultaneously,
                 * the return value should be 32.
                 * If there is no limit, this function returns <code>AudioSystem.NOT_SPECIFIED</code>.
                 * @param info a <code>Line.Info</code> that describes the line for which
                 *  the number of supported instances is queried
                 * @return the maximum number of matching lines supported, or <code>AudioSystem.NOT_SPECIFIED</code>
                 */
                // @ts-ignore
                getMaxLines(info: javax.sound.sampled.Line.Info): number /*int*/
                /**
                 * Obtains the set of all source lines currently open to this mixer.
                 * @return the source lines currently open to the mixer.
                 *  If no source lines are currently open to this mixer,  an
                 *  array of length 0 is returned.
                 * @throws SecurityException if the matching lines
                 *  are not available due to security restrictions
                 */
                // @ts-ignore
                getSourceLines(): javax.sound.sampled.Line[]
                /**
                 * Obtains the set of all target lines currently open from this mixer.
                 * @return target lines currently open from the mixer.
                 *  If no target lines are currently open from this mixer, an
                 *  array of length 0 is returned.
                 * @throws SecurityException if the matching lines
                 *  are not available due to security restrictions
                 */
                // @ts-ignore
                getTargetLines(): javax.sound.sampled.Line[]
                /**
                 * Synchronizes two or more lines.  Any subsequent command that starts or stops
                 * audio playback or capture for one of these lines will exert the
                 * same effect on the other lines in the group, so that they start or stop playing or
                 * capturing data simultaneously.
                 * @param lines the lines that should be synchronized
                 * @param maintainSync <code>true</code> if the synchronization
                 *  must be precisely maintained (i.e., the synchronization must be sample-accurate)
                 *  at all times during operation of the lines , or <code>false</code>
                 *  if precise synchronization is required only during start and stop operations
                 * @throws IllegalArgumentException if the lines cannot be synchronized.
                 *  This may occur if the lines are of different types or have different
                 *  formats for which this mixer does not support synchronization, or if
                 *  all lines specified do not belong to this mixer.
                 */
                // @ts-ignore
                synchronize(lines: javax.sound.sampled.Line[], maintainSync: boolean): void
                /**
                 * Releases synchronization for the specified lines.  The array must
                 * be identical to one for which synchronization has already been
                 * established; otherwise an exception may be thrown.  However, <code>null</code>
                 * may be specified, in which case all currently synchronized lines that belong
                 * to this mixer are unsynchronized.
                 * @param lines the synchronized lines for which synchronization should be
                 *  released, or <code>null</code> for all this mixer's synchronized lines
                 * @throws IllegalArgumentException if the lines cannot be unsynchronized.
                 *  This may occur if the argument specified does not exactly match a set
                 *  of lines for which synchronization has already been established.
                 */
                // @ts-ignore
                unsynchronize(lines: javax.sound.sampled.Line[]): void
                /**
                 * Reports whether this mixer supports synchronization of the specified set of lines.
                 * @param lines the set of lines for which synchronization support is queried
                 * @param maintainSync <code>true</code> if the synchronization
                 *  must be precisely maintained (i.e., the synchronization must be sample-accurate)
                 *  at all times during operation of the lines , or <code>false</code>
                 *  if precise synchronization is required only during start and stop operations
                 * @return <code>true</code> if the lines can be synchronized, <code>false</code>
                 *  otherwise
                 */
                // @ts-ignore
                isSynchronizationSupported(lines: javax.sound.sampled.Line[], maintainSync: boolean): boolean
            }
        }
    }
}
