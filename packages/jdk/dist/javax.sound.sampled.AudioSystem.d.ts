declare namespace javax {
    namespace sound {
        namespace sampled {
            /**
             * The <code>AudioSystem</code> class acts as the entry point to the
             * sampled-audio system resources. This class lets you query and
             * access the mixers that are installed on the system.
             * <code>AudioSystem</code> includes a number of
             * methods for converting audio data between different formats, and for
             * translating between audio files and streams. It also provides a method
             * for obtaining a <code>{@link Line}</code> directly from the
             * <code>AudioSystem</code> without dealing explicitly
             * with mixers.
             * <p>Properties can be used to specify the default mixer
             * for specific line types.
             * Both system properties and a properties file are considered.
             * The <code>sound.properties</code> properties file is read from
             * an implementation-specific location (typically it is the <code>lib</code>
             * directory in the Java installation directory).
             * If a property exists both as a system property and in the
             * properties file, the system property takes precedence. If none is
             * specified, a suitable default is chosen among the available devices.
             * The syntax of the properties file is specified in
             * {@link java.util.Properties#load(InputStream) Properties.load}. The
             * following table lists the available property keys and which methods
             * consider them:
             * <table border=0>
             * <caption>Audio System Property Keys</caption>
             * <tr>
             * <th>Property Key</th>
             * <th>Interface</th>
             * <th>Affected Method(s)</th>
             * </tr>
             * <tr>
             * <td><code>javax.sound.sampled.Clip</code></td>
             * <td>{@link Clip}</td>
             * <td>{@link #getLine}, {@link #getClip}</td>
             * </tr>
             * <tr>
             * <td><code>javax.sound.sampled.Port</code></td>
             * <td>{@link Port}</td>
             * <td>{@link #getLine}</td>
             * </tr>
             * <tr>
             * <td><code>javax.sound.sampled.SourceDataLine</code></td>
             * <td>{@link SourceDataLine}</td>
             * <td>{@link #getLine}, {@link #getSourceDataLine}</td>
             * </tr>
             * <tr>
             * <td><code>javax.sound.sampled.TargetDataLine</code></td>
             * <td>{@link TargetDataLine}</td>
             * <td>{@link #getLine}, {@link #getTargetDataLine}</td>
             * </tr>
             * </table>
             * The property value consists of the provider class name
             * and the mixer name, separated by the hash mark (&quot;#&quot;).
             * The provider class name is the fully-qualified
             * name of a concrete {@link javax.sound.sampled.spi.MixerProvider
             * mixer provider} class. The mixer name is matched against
             * the <code>String</code> returned by the <code>getName</code>
             * method of <code>Mixer.Info</code>.
             * Either the class name, or the mixer name may be omitted.
             * If only the class name is specified, the trailing hash mark
             * is optional.
             * <p>If the provider class is specified, and it can be
             * successfully retrieved from the installed providers, the list of
             * <code>Mixer.Info</code> objects is retrieved
             * from the provider. Otherwise, or when these mixers
             * do not provide a subsequent match, the list is retrieved
             * from {@link #getMixerInfo} to contain
             * all available <code>Mixer.Info</code> objects.
             * <p>If a mixer name is specified, the resulting list of
             * <code>Mixer.Info</code> objects is searched:
             * the first one with a matching name, and whose
             * <code>Mixer</code> provides the
             * respective line interface, will be returned.
             * If no matching <code>Mixer.Info</code> object
             * is found, or the mixer name is not specified,
             * the first mixer from the resulting
             * list, which provides the respective line
             * interface, will be returned.
             * For example, the property <code>javax.sound.sampled.Clip</code>
             * with a value
             * <code>&quot;com.sun.media.sound.MixerProvider#SunClip&quot;</code>
             * will have the following consequences when
             * <code>getLine</code> is called requesting a <code>Clip</code>
             * instance:
             * if the class <code>com.sun.media.sound.MixerProvider</code> exists
             * in the list of installed mixer providers,
             * the first <code>Clip</code> from the first mixer with name
             * <code>&quot;SunClip&quot;</code> will be returned. If it cannot
             * be found, the first <code>Clip</code> from the first mixer
             * of the specified provider will be returned, regardless of name.
             * If there is none, the first <code>Clip</code> from the first
             * <code>Mixer</code> with name
             * <code>&quot;SunClip&quot;</code> in the list of all mixers
             * (as returned by <code>getMixerInfo</code>) will be returned,
             * or, if not found, the first <code>Clip</code> of the first
             * <code>Mixer</code>that can be found in the list of all
             * mixers is returned.
             * If that fails, too, an <code>IllegalArgumentException</code>
             * is thrown.
             * @author Kara Kytle
             * @author Florian Bomers
             * @author Matthias Pfisterer
             * @author Kevin P. Smith
             * @see AudioFormat
             * @see AudioInputStream
             * @see Mixer
             * @see Line
             * @see Line.Info
             * @since 1.3
             */
            // @ts-ignore
            class AudioSystem extends java.lang.Object {
                /**
                 * An integer that stands for an unknown numeric value.
                 * This value is appropriate only for signed quantities that do not
                 * normally take negative values.  Examples include file sizes, frame
                 * sizes, buffer sizes, and sample rates.
                 * A number of Java Sound constructors accept
                 * a value of <code>NOT_SPECIFIED</code> for such parameters.  Other
                 * methods may also accept or return this value, as documented.
                 */
                // @ts-ignore
                public static readonly NOT_SPECIFIED: number /*int*/
                /**
                 * Obtains an array of mixer info objects that represents
                 * the set of audio mixers that are currently installed on the system.
                 * @return an array of info objects for the currently installed mixers.  If no mixers
                 *  are available on the system, an array of length 0 is returned.
                 * @see #getMixer
                 */
                // @ts-ignore
                public static getMixerInfo(): javax.sound.sampled.Mixer.Info[]
                /**
                 * Obtains the requested audio mixer.
                 * @param info a <code>Mixer.Info</code> object representing the desired
                 *  mixer, or <code>null</code> for the system default mixer
                 * @return the requested mixer
                 * @throws SecurityException if the requested mixer
                 *  is unavailable because of security restrictions
                 * @throws IllegalArgumentException if the info object does not represent
                 *  a mixer installed on the system
                 * @see #getMixerInfo
                 */
                // @ts-ignore
                public static getMixer(info: javax.sound.sampled.Mixer.Info): javax.sound.sampled.Mixer
                /**
                 * Obtains information about all source lines of a particular type that are supported
                 * by the installed mixers.
                 * @param info a <code>Line.Info</code> object that specifies the kind of
                 *  lines about which information is requested
                 * @return an array of <code>Line.Info</code> objects describing source lines matching
                 *  the type requested.  If no matching source lines are supported, an array of length 0
                 *  is returned.
                 * @see Mixer#getSourceLineInfo(Line.Info)
                 */
                // @ts-ignore
                public static getSourceLineInfo(info: javax.sound.sampled.Line.Info): javax.sound.sampled.Line.Info[]
                /**
                 * Obtains information about all target lines of a particular type that are supported
                 * by the installed mixers.
                 * @param info a <code>Line.Info</code> object that specifies the kind of
                 *  lines about which information is requested
                 * @return an array of <code>Line.Info</code> objects describing target lines matching
                 *  the type requested.  If no matching target lines are supported, an array of length 0
                 *  is returned.
                 * @see Mixer#getTargetLineInfo(Line.Info)
                 */
                // @ts-ignore
                public static getTargetLineInfo(info: javax.sound.sampled.Line.Info): javax.sound.sampled.Line.Info[]
                /**
                 * Indicates whether the system supports any lines that match
                 * the specified <code>Line.Info</code> object.  A line is supported if
                 * any installed mixer supports it.
                 * @param info a <code>Line.Info</code> object describing the line for which support is queried
                 * @return <code>true</code> if at least one matching line is
                 *  supported, otherwise <code>false</code>
                 * @see Mixer#isLineSupported(Line.Info)
                 */
                // @ts-ignore
                public static isLineSupported(info: javax.sound.sampled.Line.Info): boolean
                /**
                 * Obtains a line that matches the description in the specified
                 * <code>Line.Info</code> object.
                 * <p>If a <code>DataLine</code> is requested, and <code>info</code>
                 * is an instance of <code>DataLine.Info</code> specifying at least
                 * one fully qualified audio format, the last one
                 * will be used as the default format of the returned
                 * <code>DataLine</code>.
                 * <p>If system properties
                 * <code>javax.sound.sampled.Clip</code>,
                 * <code>javax.sound.sampled.Port</code>,
                 * <code>javax.sound.sampled.SourceDataLine</code> and
                 * <code>javax.sound.sampled.TargetDataLine</code> are defined
                 * or they are defined in the file &quot;sound.properties&quot;,
                 * they are used to retrieve default lines.
                 * For details, refer to the {@link AudioSystem class description}.
                 * If the respective property is not set, or the mixer
                 * requested in the property is not installed or does not provide the
                 * requested line, all installed mixers are queried for the
                 * requested line type. A Line will be returned from the first mixer
                 * providing the requested line type.
                 * @param info a <code>Line.Info</code> object describing the desired kind of line
                 * @return a line of the requested kind
                 * @throws LineUnavailableException if a matching line
                 *  is not available due to resource restrictions
                 * @throws SecurityException if a matching line
                 *  is not available due to security restrictions
                 * @throws IllegalArgumentException if the system does not
                 *  support at least one line matching the specified
                 *  <code>Line.Info</code> object
                 *  through any installed mixer
                 */
                // @ts-ignore
                public static getLine(info: javax.sound.sampled.Line.Info): javax.sound.sampled.Line
                /**
                 * Obtains a clip that can be used for playing back
                 * an audio file or an audio stream. The returned clip
                 * will be provided by the default system mixer, or,
                 * if not possible, by any other mixer installed in the
                 * system that supports a <code>Clip</code>
                 * object.
                 * <p>The returned clip must be opened with the
                 * <code>open(AudioFormat)</code> or
                 * <code>open(AudioInputStream)</code> method.
                 * <p>This is a high-level method that uses <code>getMixer</code>
                 * and <code>getLine</code> internally.
                 * <p>If the system property
                 * <code>javax.sound.sampled.Clip</code>
                 * is defined or it is defined in the file &quot;sound.properties&quot;,
                 * it is used to retrieve the default clip.
                 * For details, refer to the {@link AudioSystem class description}.
                 * @return the desired clip object
                 * @throws LineUnavailableException if a clip object
                 *  is not available due to resource restrictions
                 * @throws SecurityException if a clip object
                 *  is not available due to security restrictions
                 * @throws IllegalArgumentException if the system does not
                 *  support at least one clip instance through any installed mixer
                 * @see #getClip(Mixer.Info)
                 * @since 1.5
                 */
                // @ts-ignore
                public static getClip(): javax.sound.sampled.Clip
                /**
                 * Obtains a clip from the specified mixer that can be
                 * used for playing back an audio file or an audio stream.
                 * <p>The returned clip must be opened with the
                 * <code>open(AudioFormat)</code> or
                 * <code>open(AudioInputStream)</code> method.
                 * <p>This is a high-level method that uses <code>getMixer</code>
                 * and <code>getLine</code> internally.
                 * @param mixerInfo a <code>Mixer.Info</code> object representing the
                 *  desired mixer, or <code>null</code> for the system default mixer
                 * @return a clip object from the specified mixer
                 * @throws LineUnavailableException if a clip
                 *  is not available from this mixer due to resource restrictions
                 * @throws SecurityException if a clip
                 *  is not available from this mixer due to security restrictions
                 * @throws IllegalArgumentException if the system does not
                 *  support at least one clip through the specified mixer
                 * @see #getClip()
                 * @since 1.5
                 */
                // @ts-ignore
                public static getClip(mixerInfo: javax.sound.sampled.Mixer.Info): javax.sound.sampled.Clip
                /**
                 * Obtains a source data line that can be used for playing back
                 * audio data in the format specified by the
                 * <code>AudioFormat</code> object. The returned line
                 * will be provided by the default system mixer, or,
                 * if not possible, by any other mixer installed in the
                 * system that supports a matching
                 * <code>SourceDataLine</code> object.
                 * <p>The returned line should be opened with the
                 * <code>open(AudioFormat)</code> or
                 * <code>open(AudioFormat, int)</code> method.
                 * <p>This is a high-level method that uses <code>getMixer</code>
                 * and <code>getLine</code> internally.
                 * <p>The returned <code>SourceDataLine</code>'s default
                 * audio format will be initialized with <code>format</code>.
                 * <p>If the system property
                 * <code>javax.sound.sampled.SourceDataLine</code>
                 * is defined or it is defined in the file &quot;sound.properties&quot;,
                 * it is used to retrieve the default source data line.
                 * For details, refer to the {@link AudioSystem class description}.
                 * @param format an <code>AudioFormat</code> object specifying
                 *         the supported audio format of the returned line,
                 *         or <code>null</code> for any audio format
                 * @return the desired <code>SourceDataLine</code> object
                 * @throws LineUnavailableException if a matching source data line
                 *          is not available due to resource restrictions
                 * @throws SecurityException if a matching source data line
                 *          is not available due to security restrictions
                 * @throws IllegalArgumentException if the system does not
                 *          support at least one source data line supporting the
                 *          specified audio format through any installed mixer
                 * @see #getSourceDataLine(AudioFormat, Mixer.Info)
                 * @since 1.5
                 */
                // @ts-ignore
                public static getSourceDataLine(format: javax.sound.sampled.AudioFormat): javax.sound.sampled.SourceDataLine
                /**
                 * Obtains a source data line that can be used for playing back
                 * audio data in the format specified by the
                 * <code>AudioFormat</code> object, provided by the mixer
                 * specified by the <code>Mixer.Info</code> object.
                 * <p>The returned line should be opened with the
                 * <code>open(AudioFormat)</code> or
                 * <code>open(AudioFormat, int)</code> method.
                 * <p>This is a high-level method that uses <code>getMixer</code>
                 * and <code>getLine</code> internally.
                 * <p>The returned <code>SourceDataLine</code>'s default
                 * audio format will be initialized with <code>format</code>.
                 * @param format an <code>AudioFormat</code> object specifying
                 *         the supported audio format of the returned line,
                 *         or <code>null</code> for any audio format
                 * @param mixerinfo a <code>Mixer.Info</code> object representing
                 *         the desired mixer, or <code>null</code> for the system
                 *         default mixer
                 * @return the desired <code>SourceDataLine</code> object
                 * @throws LineUnavailableException if a matching source data
                 *          line is not available from the specified mixer due
                 *          to resource restrictions
                 * @throws SecurityException if a matching source data line
                 *          is not available from the specified mixer due to
                 *          security restrictions
                 * @throws IllegalArgumentException if the specified mixer does
                 *          not support at least one source data line supporting
                 *          the specified audio format
                 * @see #getSourceDataLine(AudioFormat)
                 * @since 1.5
                 */
                // @ts-ignore
                public static getSourceDataLine(format: javax.sound.sampled.AudioFormat, mixerinfo: javax.sound.sampled.Mixer.Info): javax.sound.sampled.SourceDataLine
                /**
                 * Obtains a target data line that can be used for recording
                 * audio data in the format specified by the
                 * <code>AudioFormat</code> object. The returned line
                 * will be provided by the default system mixer, or,
                 * if not possible, by any other mixer installed in the
                 * system that supports a matching
                 * <code>TargetDataLine</code> object.
                 * <p>The returned line should be opened with the
                 * <code>open(AudioFormat)</code> or
                 * <code>open(AudioFormat, int)</code> method.
                 * <p>This is a high-level method that uses <code>getMixer</code>
                 * and <code>getLine</code> internally.
                 * <p>The returned <code>TargetDataLine</code>'s default
                 * audio format will be initialized with <code>format</code>.
                 * <p>If the system property
                 * {@code javax.sound.sampled.TargetDataLine}
                 * is defined or it is defined in the file &quot;sound.properties&quot;,
                 * it is used to retrieve the default target data line.
                 * For details, refer to the {@link AudioSystem class description}.
                 * @param format an <code>AudioFormat</code> object specifying
                 *         the supported audio format of the returned line,
                 *         or <code>null</code> for any audio format
                 * @return the desired <code>TargetDataLine</code> object
                 * @throws LineUnavailableException if a matching target data line
                 *          is not available due to resource restrictions
                 * @throws SecurityException if a matching target data line
                 *          is not available due to security restrictions
                 * @throws IllegalArgumentException if the system does not
                 *          support at least one target data line supporting the
                 *          specified audio format through any installed mixer
                 * @see #getTargetDataLine(AudioFormat, Mixer.Info)
                 * @see AudioPermission
                 * @since 1.5
                 */
                // @ts-ignore
                public static getTargetDataLine(format: javax.sound.sampled.AudioFormat): javax.sound.sampled.TargetDataLine
                /**
                 * Obtains a target data line that can be used for recording
                 * audio data in the format specified by the
                 * <code>AudioFormat</code> object, provided by the mixer
                 * specified by the <code>Mixer.Info</code> object.
                 * <p>The returned line should be opened with the
                 * <code>open(AudioFormat)</code> or
                 * <code>open(AudioFormat, int)</code> method.
                 * <p>This is a high-level method that uses <code>getMixer</code>
                 * and <code>getLine</code> internally.
                 * <p>The returned <code>TargetDataLine</code>'s default
                 * audio format will be initialized with <code>format</code>.
                 * @param format an <code>AudioFormat</code> object specifying
                 *         the supported audio format of the returned line,
                 *         or <code>null</code> for any audio format
                 * @param mixerinfo a <code>Mixer.Info</code> object representing the
                 *         desired mixer, or <code>null</code> for the system default mixer
                 * @return the desired <code>TargetDataLine</code> object
                 * @throws LineUnavailableException if a matching target data
                 *          line is not available from the specified mixer due
                 *          to resource restrictions
                 * @throws SecurityException if a matching target data line
                 *          is not available from the specified mixer due to
                 *          security restrictions
                 * @throws IllegalArgumentException if the specified mixer does
                 *          not support at least one target data line supporting
                 *          the specified audio format
                 * @see #getTargetDataLine(AudioFormat)
                 * @see AudioPermission
                 * @since 1.5
                 */
                // @ts-ignore
                public static getTargetDataLine(format: javax.sound.sampled.AudioFormat, mixerinfo: javax.sound.sampled.Mixer.Info): javax.sound.sampled.TargetDataLine
                /**
                 * Obtains the encodings that the system can obtain from an
                 * audio input stream with the specified encoding using the set
                 * of installed format converters.
                 * @param sourceEncoding the encoding for which conversion support
                 *  is queried
                 * @return array of encodings.  If <code>sourceEncoding</code>is not supported,
                 *  an array of length 0 is returned. Otherwise, the array will have a length
                 *  of at least 1, representing <code>sourceEncoding</code> (no conversion).
                 */
                // @ts-ignore
                public static getTargetEncodings(sourceEncoding: javax.sound.sampled.AudioFormat.Encoding): javax.sound.sampled.AudioFormat.Encoding[]
                /**
                 * Obtains the encodings that the system can obtain from an
                 * audio input stream with the specified format using the set
                 * of installed format converters.
                 * @param sourceFormat the audio format for which conversion
                 *  is queried
                 * @return array of encodings. If <code>sourceFormat</code>is not supported,
                 *  an array of length 0 is returned. Otherwise, the array will have a length
                 *  of at least 1, representing the encoding of <code>sourceFormat</code> (no conversion).
                 */
                // @ts-ignore
                public static getTargetEncodings(sourceFormat: javax.sound.sampled.AudioFormat): javax.sound.sampled.AudioFormat.Encoding[]
                /**
                 * Indicates whether an audio input stream of the specified encoding
                 * can be obtained from an audio input stream that has the specified
                 * format.
                 * @param targetEncoding the desired encoding after conversion
                 * @param sourceFormat the audio format before conversion
                 * @return <code>true</code> if the conversion is supported,
                 *  otherwise <code>false</code>
                 */
                // @ts-ignore
                public static isConversionSupported(targetEncoding: javax.sound.sampled.AudioFormat.Encoding, sourceFormat: javax.sound.sampled.AudioFormat): boolean
                /**
                 * Obtains an audio input stream of the indicated encoding, by converting the
                 * provided audio input stream.
                 * @param targetEncoding the desired encoding after conversion
                 * @param sourceStream the stream to be converted
                 * @return an audio input stream of the indicated encoding
                 * @throws IllegalArgumentException if the conversion is not supported
                 * @see #getTargetEncodings(AudioFormat.Encoding)
                 * @see #getTargetEncodings(AudioFormat)
                 * @see #isConversionSupported(AudioFormat.Encoding, AudioFormat)
                 * @see #getAudioInputStream(AudioFormat, AudioInputStream)
                 */
                // @ts-ignore
                public static getAudioInputStream(targetEncoding: javax.sound.sampled.AudioFormat.Encoding, sourceStream: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioInputStream
                /**
                 * Obtains the formats that have a particular encoding and that the system can
                 * obtain from a stream of the specified format using the set of
                 * installed format converters.
                 * @param targetEncoding the desired encoding after conversion
                 * @param sourceFormat the audio format before conversion
                 * @return array of formats.  If no formats of the specified
                 *  encoding are supported, an array of length 0 is returned.
                 */
                // @ts-ignore
                public static getTargetFormats(targetEncoding: javax.sound.sampled.AudioFormat.Encoding, sourceFormat: javax.sound.sampled.AudioFormat): javax.sound.sampled.AudioFormat[]
                /**
                 * Indicates whether an audio input stream of a specified format
                 * can be obtained from an audio input stream of another specified format.
                 * @param targetFormat the desired audio format after conversion
                 * @param sourceFormat the audio format before conversion
                 * @return <code>true</code> if the conversion is supported,
                 *  otherwise <code>false</code>
                 */
                // @ts-ignore
                public static isConversionSupported(targetFormat: javax.sound.sampled.AudioFormat, sourceFormat: javax.sound.sampled.AudioFormat): boolean
                /**
                 * Obtains an audio input stream of the indicated format, by converting the
                 * provided audio input stream.
                 * @param targetFormat the desired audio format after conversion
                 * @param sourceStream the stream to be converted
                 * @return an audio input stream of the indicated format
                 * @throws IllegalArgumentException if the conversion is not supported
                 *  #see #getTargetEncodings(AudioFormat)
                 * @see #getTargetFormats(AudioFormat.Encoding, AudioFormat)
                 * @see #isConversionSupported(AudioFormat, AudioFormat)
                 * @see #getAudioInputStream(AudioFormat.Encoding, AudioInputStream)
                 */
                // @ts-ignore
                public static getAudioInputStream(targetFormat: javax.sound.sampled.AudioFormat, sourceStream: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioInputStream
                /**
                 * Obtains the audio file format of the provided input stream.  The stream must
                 * point to valid audio file data.  The implementation of this method may require
                 * multiple parsers to examine the stream to determine whether they support it.
                 * These parsers must be able to mark the stream, read enough data to determine whether they
                 * support the stream, and, if not, reset the stream's read pointer to its original
                 * position.  If the input stream does not support these operations, this method may fail
                 * with an <code>IOException</code>.
                 * @param stream the input stream from which file format information should be
                 *  extracted
                 * @return an <code>AudioFileFormat</code> object describing the stream's audio file format
                 * @throws UnsupportedAudioFileException if the stream does not point to valid audio
                 *  file data recognized by the system
                 * @throws IOException if an input/output exception occurs
                 * @see InputStream#markSupported
                 * @see InputStream#mark
                 */
                // @ts-ignore
                public static getAudioFileFormat(stream: java.io.InputStream): javax.sound.sampled.AudioFileFormat
                /**
                 * Obtains the audio file format of the specified URL.  The URL must
                 * point to valid audio file data.
                 * @param url the URL from which file format information should be
                 *  extracted
                 * @return an <code>AudioFileFormat</code> object describing the audio file format
                 * @throws UnsupportedAudioFileException if the URL does not point to valid audio
                 *  file data recognized by the system
                 * @throws IOException if an input/output exception occurs
                 */
                // @ts-ignore
                public static getAudioFileFormat(url: java.net.URL): javax.sound.sampled.AudioFileFormat
                /**
                 * Obtains the audio file format of the specified <code>File</code>.  The <code>File</code> must
                 * point to valid audio file data.
                 * @param file the <code>File</code> from which file format information should be
                 *  extracted
                 * @return an <code>AudioFileFormat</code> object describing the audio file format
                 * @throws UnsupportedAudioFileException if the <code>File</code> does not point to valid audio
                 *  file data recognized by the system
                 * @throws IOException if an I/O exception occurs
                 */
                // @ts-ignore
                public static getAudioFileFormat(file: java.io.File): javax.sound.sampled.AudioFileFormat
                /**
                 * Obtains an audio input stream from the provided input stream.  The stream must
                 * point to valid audio file data.  The implementation of this method may
                 * require multiple parsers to
                 * examine the stream to determine whether they support it.  These parsers must
                 * be able to mark the stream, read enough data to determine whether they
                 * support the stream, and, if not, reset the stream's read pointer to its original
                 * position.  If the input stream does not support these operation, this method may fail
                 * with an <code>IOException</code>.
                 * @param stream the input stream from which the <code>AudioInputStream</code> should be
                 *  constructed
                 * @return an <code>AudioInputStream</code> object based on the audio file data contained
                 *  in the input stream.
                 * @throws UnsupportedAudioFileException if the stream does not point to valid audio
                 *  file data recognized by the system
                 * @throws IOException if an I/O exception occurs
                 * @see InputStream#markSupported
                 * @see InputStream#mark
                 */
                // @ts-ignore
                public static getAudioInputStream(stream: java.io.InputStream): javax.sound.sampled.AudioInputStream
                /**
                 * Obtains an audio input stream from the URL provided.  The URL must
                 * point to valid audio file data.
                 * @param url the URL for which the <code>AudioInputStream</code> should be
                 *  constructed
                 * @return an <code>AudioInputStream</code> object based on the audio file data pointed
                 *  to by the URL
                 * @throws UnsupportedAudioFileException if the URL does not point to valid audio
                 *  file data recognized by the system
                 * @throws IOException if an I/O exception occurs
                 */
                // @ts-ignore
                public static getAudioInputStream(url: java.net.URL): javax.sound.sampled.AudioInputStream
                /**
                 * Obtains an audio input stream from the provided <code>File</code>.  The <code>File</code> must
                 * point to valid audio file data.
                 * @param file the <code>File</code> for which the <code>AudioInputStream</code> should be
                 *  constructed
                 * @return an <code>AudioInputStream</code> object based on the audio file data pointed
                 *  to by the <code>File</code>
                 * @throws UnsupportedAudioFileException if the <code>File</code> does not point to valid audio
                 *  file data recognized by the system
                 * @throws IOException if an I/O exception occurs
                 */
                // @ts-ignore
                public static getAudioInputStream(file: java.io.File): javax.sound.sampled.AudioInputStream
                /**
                 * Obtains the file types for which file writing support is provided by the system.
                 * @return array of unique file types.  If no file types are supported,
                 *  an array of length 0 is returned.
                 */
                // @ts-ignore
                public static getAudioFileTypes(): javax.sound.sampled.AudioFileFormat.Type[]
                /**
                 * Indicates whether file writing support for the specified file type is provided
                 * by the system.
                 * @param fileType the file type for which write capabilities are queried
                 * @return <code>true</code> if the file type is supported,
                 *  otherwise <code>false</code>
                 */
                // @ts-ignore
                public static isFileTypeSupported(fileType: javax.sound.sampled.AudioFileFormat.Type): boolean
                /**
                 * Obtains the file types that the system can write from the
                 * audio input stream specified.
                 * @param stream the audio input stream for which audio file type support
                 *  is queried
                 * @return array of file types.  If no file types are supported,
                 *  an array of length 0 is returned.
                 */
                // @ts-ignore
                public static getAudioFileTypes(stream: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioFileFormat.Type[]
                /**
                 * Indicates whether an audio file of the specified file type can be written
                 * from the indicated audio input stream.
                 * @param fileType the file type for which write capabilities are queried
                 * @param stream the stream for which file-writing support is queried
                 * @return <code>true</code> if the file type is supported for this audio input stream,
                 *  otherwise <code>false</code>
                 */
                // @ts-ignore
                public static isFileTypeSupported(fileType: javax.sound.sampled.AudioFileFormat.Type, stream: javax.sound.sampled.AudioInputStream): boolean
                /**
                 * Writes a stream of bytes representing an audio file of the specified file type
                 * to the output stream provided.  Some file types require that
                 * the length be written into the file header; such files cannot be written from
                 * start to finish unless the length is known in advance.  An attempt
                 * to write a file of such a type will fail with an IOException if the length in
                 * the audio file type is <code>AudioSystem.NOT_SPECIFIED</code>.
                 * @param stream the audio input stream containing audio data to be
                 *  written to the file
                 * @param fileType the kind of audio file to write
                 * @param out the stream to which the file data should be written
                 * @return the number of bytes written to the output stream
                 * @throws IOException if an input/output exception occurs
                 * @throws IllegalArgumentException if the file type is not supported by
                 *  the system
                 * @see #isFileTypeSupported
                 * @see #getAudioFileTypes
                 */
                // @ts-ignore
                public static write(stream: javax.sound.sampled.AudioInputStream, fileType: javax.sound.sampled.AudioFileFormat.Type, out: java.io.OutputStream): number /*int*/
                /**
                 * Writes a stream of bytes representing an audio file of the specified file type
                 * to the external file provided.
                 * @param stream the audio input stream containing audio data to be
                 *  written to the file
                 * @param fileType the kind of audio file to write
                 * @param out the external file to which the file data should be written
                 * @return the number of bytes written to the file
                 * @throws IOException if an I/O exception occurs
                 * @throws IllegalArgumentException if the file type is not supported by
                 *  the system
                 * @see #isFileTypeSupported
                 * @see #getAudioFileTypes
                 */
                // @ts-ignore
                public static write(stream: javax.sound.sampled.AudioInputStream, fileType: javax.sound.sampled.AudioFileFormat.Type, out: java.io.File): number /*int*/
            }
        }
    }
}
