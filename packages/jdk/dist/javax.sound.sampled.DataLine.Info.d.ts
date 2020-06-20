declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace DataLine {
                /**
                 * Besides the class information inherited from its superclass,
                 * <code>DataLine.Info</code> provides additional information specific to data lines.
                 * This information includes:
                 * <ul>
                 * <li> the audio formats supported by the data line
                 * <li> the minimum and maximum sizes of its internal buffer
                 * </ul>
                 * Because a <code>Line.Info</code> knows the class of the line its describes, a
                 * <code>DataLine.Info</code> object can describe <code>DataLine</code>
                 * subinterfaces such as <code>{@link SourceDataLine}</code>,
                 * <code>{@link TargetDataLine}</code>, and <code>{@link Clip}</code>.
                 * You can query a mixer for lines of any of these types, passing an appropriate
                 * instance of <code>DataLine.Info</code> as the argument to a method such as
                 * <code>{@link Mixer#getLine Mixer.getLine(Line.Info)}</code>.
                 * @see Line.Info
                 * @author Kara Kytle
                 * @since 1.3
                 */
                // @ts-ignore
                class Info extends javax.sound.sampled.Line.Info {
                    /**
                     * Constructs a data line's info object from the specified information,
                     * which includes a set of supported audio formats and a range for the buffer size.
                     * This constructor is typically used by mixer implementations
                     * when returning information about a supported line.
                     * @param lineClass the class of the data line described by the info object
                     * @param formats set of formats supported
                     * @param minBufferSize minimum buffer size supported by the data line, in bytes
                     * @param maxBufferSize maximum buffer size supported by the data line, in bytes
                     */
                    // @ts-ignore
                    constructor(lineClass: java.lang.Class<any>, formats: javax.sound.sampled.AudioFormat[], minBufferSize: number /*int*/, maxBufferSize: number /*int*/)
                    /**
                     * Constructs a data line's info object from the specified information,
                     * which includes a single audio format and a desired buffer size.
                     * This constructor is typically used by an application to
                     * describe a desired line.
                     * @param lineClass the class of the data line described by the info object
                     * @param format desired format
                     * @param bufferSize desired buffer size in bytes
                     */
                    // @ts-ignore
                    constructor(lineClass: java.lang.Class<any>, format: javax.sound.sampled.AudioFormat, bufferSize: number /*int*/)
                    /**
                     * Constructs a data line's info object from the specified information,
                     * which includes a single audio format.
                     * This constructor is typically used by an application to
                     * describe a desired line.
                     * @param lineClass the class of the data line described by the info object
                     * @param format desired format
                     */
                    // @ts-ignore
                    constructor(lineClass: java.lang.Class<any>, format: javax.sound.sampled.AudioFormat)
                    /**
                     * Obtains a set of audio formats supported by the data line.
                     * Note that <code>isFormatSupported(AudioFormat)</code> might return
                     * <code>true</code> for certain additional formats that are missing from
                     * the set returned by <code>getFormats()</code>.  The reverse is not
                     * the case: <code>isFormatSupported(AudioFormat)</code> is guaranteed to return
                     * <code>true</code> for all formats returned by <code>getFormats()</code>.
                     * Some fields in the AudioFormat instances can be set to
                     * {@link javax.sound.sampled.AudioSystem#NOT_SPECIFIED NOT_SPECIFIED}
                     * if that field does not apply to the format,
                     * or if the format supports a wide range of values for that field.
                     * For example, a multi-channel device supporting up to
                     * 64 channels, could set the channel field in the
                     * <code>AudioFormat</code> instances returned by this
                     * method to <code>NOT_SPECIFIED</code>.
                     * @return a set of supported audio formats.
                     * @see #isFormatSupported(AudioFormat)
                     */
                    // @ts-ignore
                    getFormats(): javax.sound.sampled.AudioFormat[]
                    /**
                     * Indicates whether this data line supports a particular audio format.
                     * The default implementation of this method simply returns <code>true</code> if
                     * the specified format matches any of the supported formats.
                     * @param format the audio format for which support is queried.
                     * @return <code>true</code> if the format is supported, otherwise <code>false</code>
                     * @see #getFormats
                     * @see AudioFormat#matches
                     */
                    // @ts-ignore
                    isFormatSupported(format: javax.sound.sampled.AudioFormat): boolean
                    /**
                     * Obtains the minimum buffer size supported by the data line.
                     * @return minimum buffer size in bytes, or <code>AudioSystem.NOT_SPECIFIED</code>
                     */
                    // @ts-ignore
                    getMinBufferSize(): int
                    /**
                     * Obtains the maximum buffer size supported by the data line.
                     * @return maximum buffer size in bytes, or <code>AudioSystem.NOT_SPECIFIED</code>
                     */
                    // @ts-ignore
                    getMaxBufferSize(): int
                    /**
                     * Determines whether the specified info object matches this one.
                     * To match, the superclass match requirements must be met.  In
                     * addition, this object's minimum buffer size must be at least as
                     * large as that of the object specified, its maximum buffer size must
                     * be at most as large as that of the object specified, and all of its
                     * formats must match formats supported by the object specified.
                     * @return <code>true</code> if this object matches the one specified,
                     *  otherwise <code>false</code>.
                     */
                    // @ts-ignore
                    matches(info: javax.sound.sampled.Line.Info): boolean
                    /**
                     * Obtains a textual description of the data line info.
                     * @return a string description
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
