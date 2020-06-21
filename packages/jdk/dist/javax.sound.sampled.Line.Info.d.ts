declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace Line {
                /**
                 * A <code>Line.Info</code> object contains information about a line.
                 * The only information provided by <code>Line.Info</code> itself
                 * is the Java class of the line.
                 * A subclass of <code>Line.Info</code> adds other kinds of information
                 * about the line.  This additional information depends on which <code>Line</code>
                 * subinterface is implemented by the kind of line that the <code>Line.Info</code>
                 * subclass describes.
                 * <p>
                 * A <code>Line.Info</code> can be retrieved using various methods of
                 * the <code>Line</code>, <code>Mixer</code>, and <code>AudioSystem</code>
                 * interfaces.  Other such methods let you pass a <code>Line.Info</code> as
                 * an argument, to learn whether lines matching the specified configuration
                 * are available and to obtain them.
                 * @author Kara Kytle
                 * @see Line#getLineInfo
                 * @see Mixer#getSourceLineInfo
                 * @see Mixer#getTargetLineInfo
                 * @see Mixer#getLine <code>Mixer.getLine(Line.Info)</code>
                 * @see Mixer#getSourceLineInfo(Line.Info) <code>Mixer.getSourceLineInfo(Line.Info)</code>
                 * @see Mixer#getSourceLineInfo(Line.Info) <code>Mixer.getTargetLineInfo(Line.Info)</code>
                 * @see Mixer#isLineSupported <code>Mixer.isLineSupported(Line.Info)</code>
                 * @see AudioSystem#getLine <code>AudioSystem.getLine(Line.Info)</code>
                 * @see AudioSystem#getSourceLineInfo <code>AudioSystem.getSourceLineInfo(Line.Info)</code>
                 * @see AudioSystem#getTargetLineInfo <code>AudioSystem.getTargetLineInfo(Line.Info)</code>
                 * @see AudioSystem#isLineSupported <code>AudioSystem.isLineSupported(Line.Info)</code>
                 * @since 1.3
                 */
                // @ts-ignore
                class Info extends java.lang.Object {
                    /**
                     * Constructs an info object that describes a line of the specified class.
                     * This constructor is typically used by an application to
                     * describe a desired line.
                     * @param lineClass the class of the line that the new Line.Info object describes
                     */
                    // @ts-ignore
                    constructor(lineClass: java.lang.Class<any>)
                    /**
                     * Obtains the class of the line that this Line.Info object describes.
                     * @return the described line's class
                     */
                    // @ts-ignore
                    public getLineClass(): java.lang.Class<any>
                    /**
                     * Indicates whether the specified info object matches this one.
                     * To match, the specified object must be identical to or
                     * a special case of this one.  The specified info object
                     * must be either an instance of the same class as this one,
                     * or an instance of a sub-type of this one.  In addition, the
                     * attributes of the specified object must be compatible with the
                     * capabilities of this one.  Specifically, the routing configuration
                     * for the specified info object must be compatible with that of this
                     * one.
                     * Subclasses may add other criteria to determine whether the two objects
                     * match.
                     * @param info the info object which is being compared to this one
                     * @return <code>true</code> if the specified object matches this one,
                     *  <code>false</code> otherwise
                     */
                    // @ts-ignore
                    public matches(info: javax.sound.sampled.Line.Info): boolean
                    /**
                     * Obtains a textual description of the line info.
                     * @return a string description
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
