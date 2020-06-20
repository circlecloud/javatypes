declare namespace javax {
    namespace sound {
        namespace sampled {
            /**
             * <code>AudioFormat</code> is the class that specifies a particular arrangement of data in a sound stream.
             * By examining the information stored in the audio format, you can discover how to interpret the bits in the
             * binary sound data.
             * <p>
             * Every data line has an audio format associated with its data stream. The audio format of a source (playback) data line indicates
             * what kind of data the data line expects to receive for output.  For a target (capture) data line, the audio format specifies the kind
             * of the data that can be read from the line.
             * Sound files also have audio formats, of course.  The <code>{@link AudioFileFormat}</code>
             * class encapsulates an <code>AudioFormat</code> in addition to other,
             * file-specific information.  Similarly, an <code>{@link AudioInputStream}</code> has an
             * <code>AudioFormat</code>.
             * <p>
             * The <code>AudioFormat</code> class accommodates a number of common sound-file encoding techniques, including
             * pulse-code modulation (PCM), mu-law encoding, and a-law encoding.  These encoding techniques are predefined,
             * but service providers can create new encoding types.
             * The encoding that a specific format uses is named by its <code>encoding</code> field.
             * <p>
             * In addition to the encoding, the audio format includes other properties that further specify the exact
             * arrangement of the data.
             * These include the number of channels, sample rate, sample size, byte order, frame rate, and frame size.
             * Sounds may have different numbers of audio channels: one for mono, two for stereo.
             * The sample rate measures how many "snapshots" (samples) of the sound pressure are taken per second, per channel.
             * (If the sound is stereo rather than mono, two samples are actually measured at each instant of time: one for the left channel,
             * and another for the right channel; however, the sample rate still measures the number per channel, so the rate is the same
             * regardless of the number of channels.   This is the standard use of the term.)
             * The sample size indicates how many bits are used to store each snapshot; 8 and 16 are typical values.
             * For 16-bit samples (or any other sample size larger than a byte),
             * byte order is important; the bytes in each sample are arranged in
             * either the "little-endian" or "big-endian" style.
             * For encodings like PCM, a frame consists of the set of samples for all channels at a given
             * point in time, and so the size of a frame (in bytes) is always equal to the size of a sample (in bytes) times
             * the number of channels.  However, with some other sorts of encodings a frame can contain
             * a bundle of compressed data for a whole series of samples, as well as additional, non-sample
             * data.  For such encodings, the sample rate and sample size refer to the data after it is decoded into PCM,
             * and so they are completely different from the frame rate and frame size.
             * <p>An <code>AudioFormat</code> object can include a set of
             * properties. A property is a pair of key and value: the key
             * is of type <code>String</code>, the associated property
             * value is an arbitrary object. Properties specify
             * additional format specifications, like the bit rate for
             * compressed formats. Properties are mainly used as a means
             * to transport additional information of the audio format
             * to and from the service providers. Therefore, properties
             * are ignored in the {@link #matches(AudioFormat)} method.
             * However, methods which rely on the installed service
             * providers, like {@link AudioSystem#isConversionSupported
             * (AudioFormat, AudioFormat) isConversionSupported} may consider
             * properties, depending on the respective service provider
             * implementation.
             * <p>The following table lists some common properties which
             * service providers should use, if applicable:
             * <table border=0>
             * <caption>Audio Format Properties</caption>
             * <tr>
             * <th>Property key</th>
             * <th>Value type</th>
             * <th>Description</th>
             * </tr>
             * <tr>
             * <td>&quot;bitrate&quot;</td>
             * <td>{@link java.lang.Integer Integer}</td>
             * <td>average bit rate in bits per second</td>
             * </tr>
             * <tr>
             * <td>&quot;vbr&quot;</td>
             * <td>{@link java.lang.Boolean Boolean}</td>
             * <td><code>true</code>, if the file is encoded in variable bit
             * rate (VBR)</td>
             * </tr>
             * <tr>
             * <td>&quot;quality&quot;</td>
             * <td>{@link java.lang.Integer Integer}</td>
             * <td>encoding/conversion quality, 1..100</td>
             * </tr>
             * </table>
             * <p>Vendors of service providers (plugins) are encouraged
             * to seek information about other already established
             * properties in third party plugins, and follow the same
             * conventions.
             * @author Kara Kytle
             * @author Florian Bomers
             * @see DataLine#getFormat
             * @see AudioInputStream#getFormat
             * @see AudioFileFormat
             * @see javax.sound.sampled.spi.FormatConversionProvider
             * @since 1.3
             */
            // @ts-ignore
            class AudioFormat extends java.lang.Object {
                /**
                 * Constructs an <code>AudioFormat</code> with the given parameters.
                 * The encoding specifies the convention used to represent the data.
                 * The other parameters are further explained in the {@link AudioFormat
                 * class description}.
                 * @param encoding                  the audio encoding technique
                 * @param sampleRate                the number of samples per second
                 * @param sampleSizeInBits  the number of bits in each sample
                 * @param channels                  the number of channels (1 for mono, 2 for stereo, and so on)
                 * @param frameSize                 the number of bytes in each frame
                 * @param frameRate                 the number of frames per second
                 * @param bigEndian                 indicates whether the data for a single sample
                 *                                                   is stored in big-endian byte order (<code>false</code>
                 *                                                   means little-endian)
                 */
                // @ts-ignore
                constructor(encoding: javax.sound.sampled.AudioFormat.Encoding, sampleRate: number /*float*/, sampleSizeInBits: number /*int*/, channels: number /*int*/, frameSize: number /*int*/, frameRate: number /*float*/, bigEndian: boolean)
                /**
                 * Constructs an <code>AudioFormat</code> with the given parameters.
                 * The encoding specifies the convention used to represent the data.
                 * The other parameters are further explained in the {@link AudioFormat
                 * class description}.
                 * @param encoding         the audio encoding technique
                 * @param sampleRate       the number of samples per second
                 * @param sampleSizeInBits the number of bits in each sample
                 * @param channels         the number of channels (1 for mono, 2 for
                 *                          stereo, and so on)
                 * @param frameSize        the number of bytes in each frame
                 * @param frameRate        the number of frames per second
                 * @param bigEndian        indicates whether the data for a single sample
                 *                          is stored in big-endian byte order
                 *                          (<code>false</code> means little-endian)
                 * @param properties       a <code>Map&lt;String,Object&gt;</code> object
                 *                          containing format properties
                 * @since 1.5
                 */
                // @ts-ignore
                constructor(encoding: javax.sound.sampled.AudioFormat.Encoding, sampleRate: number /*float*/, sampleSizeInBits: number /*int*/, channels: number /*int*/, frameSize: number /*int*/, frameRate: number /*float*/, bigEndian: boolean, properties: java.util.Map<java.lang.String, java.lang.Object>)
                /**
                 * Constructs an <code>AudioFormat</code> with a linear PCM encoding and
                 * the given parameters.  The frame size is set to the number of bytes
                 * required to contain one sample from each channel, and the frame rate
                 * is set to the sample rate.
                 * @param sampleRate                the number of samples per second
                 * @param sampleSizeInBits  the number of bits in each sample
                 * @param channels                  the number of channels (1 for mono, 2 for stereo, and so on)
                 * @param signed                    indicates whether the data is signed or unsigned
                 * @param bigEndian                 indicates whether the data for a single sample
                 *                                                   is stored in big-endian byte order (<code>false</code>
                 *                                                   means little-endian)
                 */
                // @ts-ignore
                constructor(sampleRate: number /*float*/, sampleSizeInBits: number /*int*/, channels: number /*int*/, signed: boolean, bigEndian: boolean)
                /**
                 * The audio encoding technique used by this format.
                 */
                // @ts-ignore
                encoding: javax.sound.sampled.AudioFormat.Encoding
                /**
                 * The number of samples played or recorded per second, for sounds that have this format.
                 */
                // @ts-ignore
                sampleRate: number /*float*/
                /**
                 * The number of bits in each sample of a sound that has this format.
                 */
                // @ts-ignore
                sampleSizeInBits: number /*int*/
                /**
                 * The number of audio channels in this format (1 for mono, 2 for stereo).
                 */
                // @ts-ignore
                channels: number /*int*/
                /**
                 * The number of bytes in each frame of a sound that has this format.
                 */
                // @ts-ignore
                frameSize: number /*int*/
                /**
                 * The number of frames played or recorded per second, for sounds that have this format.
                 */
                // @ts-ignore
                frameRate: number /*float*/
                /**
                 * Indicates whether the audio data is stored in big-endian or little-endian order.
                 */
                // @ts-ignore
                bigEndian: boolean
                /**
                 * Obtains the type of encoding for sounds in this format.
                 * @return the encoding type
                 * @see Encoding#PCM_SIGNED
                 * @see Encoding#PCM_UNSIGNED
                 * @see Encoding#ULAW
                 * @see Encoding#ALAW
                 */
                // @ts-ignore
                getEncoding(): javax.sound.sampled.AudioFormat.Encoding
                /**
                 * Obtains the sample rate.
                 * For compressed formats, the return value is the sample rate of the uncompressed
                 * audio data.
                 * When this AudioFormat is used for queries (e.g. {@link
                 * AudioSystem#isConversionSupported(AudioFormat, AudioFormat)
                 * AudioSystem.isConversionSupported}) or capabilities (e.g. {@link
                 * DataLine.Info#getFormats() DataLine.Info.getFormats}), a sample rate of
                 * <code>AudioSystem.NOT_SPECIFIED</code> means that any sample rate is
                 * acceptable. <code>AudioSystem.NOT_SPECIFIED</code> is also returned when
                 * the sample rate is not defined for this audio format.
                 * @return the number of samples per second,
                 *  or <code>AudioSystem.NOT_SPECIFIED</code>
                 * @see #getFrameRate()
                 * @see AudioSystem#NOT_SPECIFIED
                 */
                // @ts-ignore
                getSampleRate(): float
                /**
                 * Obtains the size of a sample.
                 * For compressed formats, the return value is the sample size of the
                 * uncompressed audio data.
                 * When this AudioFormat is used for queries (e.g. {@link
                 * AudioSystem#isConversionSupported(AudioFormat, AudioFormat)
                 * AudioSystem.isConversionSupported}) or capabilities (e.g. {@link
                 * DataLine.Info#getFormats() DataLine.Info.getFormats}), a sample size of
                 * <code>AudioSystem.NOT_SPECIFIED</code> means that any sample size is
                 * acceptable. <code>AudioSystem.NOT_SPECIFIED</code> is also returned when
                 * the sample size is not defined for this audio format.
                 * @return the number of bits in each sample,
                 *  or <code>AudioSystem.NOT_SPECIFIED</code>
                 * @see #getFrameSize()
                 * @see AudioSystem#NOT_SPECIFIED
                 */
                // @ts-ignore
                getSampleSizeInBits(): int
                /**
                 * Obtains the number of channels.
                 * When this AudioFormat is used for queries (e.g. {@link
                 * AudioSystem#isConversionSupported(AudioFormat, AudioFormat)
                 * AudioSystem.isConversionSupported}) or capabilities (e.g. {@link
                 * DataLine.Info#getFormats() DataLine.Info.getFormats}), a return value of
                 * <code>AudioSystem.NOT_SPECIFIED</code> means that any (positive) number of channels is
                 * acceptable.
                 * @return The number of channels (1 for mono, 2 for stereo, etc.),
                 *  or <code>AudioSystem.NOT_SPECIFIED</code>
                 * @see AudioSystem#NOT_SPECIFIED
                 */
                // @ts-ignore
                getChannels(): int
                /**
                 * Obtains the frame size in bytes.
                 * When this AudioFormat is used for queries (e.g. {@link
                 * AudioSystem#isConversionSupported(AudioFormat, AudioFormat)
                 * AudioSystem.isConversionSupported}) or capabilities (e.g. {@link
                 * DataLine.Info#getFormats() DataLine.Info.getFormats}), a frame size of
                 * <code>AudioSystem.NOT_SPECIFIED</code> means that any frame size is
                 * acceptable. <code>AudioSystem.NOT_SPECIFIED</code> is also returned when
                 * the frame size is not defined for this audio format.
                 * @return the number of bytes per frame,
                 *  or <code>AudioSystem.NOT_SPECIFIED</code>
                 * @see #getSampleSizeInBits()
                 * @see AudioSystem#NOT_SPECIFIED
                 */
                // @ts-ignore
                getFrameSize(): int
                /**
                 * Obtains the frame rate in frames per second.
                 * When this AudioFormat is used for queries (e.g. {@link
                 * AudioSystem#isConversionSupported(AudioFormat, AudioFormat)
                 * AudioSystem.isConversionSupported}) or capabilities (e.g. {@link
                 * DataLine.Info#getFormats() DataLine.Info.getFormats}), a frame rate of
                 * <code>AudioSystem.NOT_SPECIFIED</code> means that any frame rate is
                 * acceptable. <code>AudioSystem.NOT_SPECIFIED</code> is also returned when
                 * the frame rate is not defined for this audio format.
                 * @return the number of frames per second,
                 *  or <code>AudioSystem.NOT_SPECIFIED</code>
                 * @see #getSampleRate()
                 * @see AudioSystem#NOT_SPECIFIED
                 */
                // @ts-ignore
                getFrameRate(): float
                /**
                 * Indicates whether the audio data is stored in big-endian or little-endian
                 * byte order.  If the sample size is not more than one byte, the return value is
                 * irrelevant.
                 * @return <code>true</code> if the data is stored in big-endian byte order,
                 *  <code>false</code> if little-endian
                 */
                // @ts-ignore
                isBigEndian(): boolean
                /**
                 * Obtain an unmodifiable map of properties.
                 * The concept of properties is further explained in
                 * the {@link AudioFileFormat class description}.
                 * @return a <code>Map&lt;String,Object&gt;</code> object containing
                 *          all properties. If no properties are recognized, an empty map is
                 *          returned.
                 * @see #getProperty(String)
                 * @since 1.5
                 */
                // @ts-ignore
                properties(): java.util.Map<java.lang.String, java.lang.Object>
                /**
                 * Obtain the property value specified by the key.
                 * The concept of properties is further explained in
                 * the {@link AudioFileFormat class description}.
                 * <p>If the specified property is not defined for a
                 * particular file format, this method returns
                 * <code>null</code>.
                 * @param key the key of the desired property
                 * @return the value of the property with the specified key,
                 *          or <code>null</code> if the property does not exist.
                 * @see #properties()
                 * @since 1.5
                 */
                // @ts-ignore
                getProperty(key: string): java.lang.Object
                /**
                 * Indicates whether this format matches the one specified.
                 * To match, two formats must have the same encoding,
                 * and consistent values of the number of channels, sample rate, sample size,
                 * frame rate, and frame size.
                 * The values of the property are consistent if they are equal
                 * or the specified format has the property value
                 * {@code AudioSystem.NOT_SPECIFIED}.
                 * The byte order (big-endian or little-endian) must be the same
                 * if the sample size is greater than one byte.
                 * @param format format to test for match
                 * @return {#code true} if this format matches the one specified,
                 *          {@code false} otherwise.
                 */
                // @ts-ignore
                matches(format: javax.sound.sampled.AudioFormat): boolean
                /**
                 * Returns a string that describes the format, such as:
                 * "PCM SIGNED 22050 Hz 16 bit mono big-endian".  The contents of the string
                 * may vary between implementations of Java Sound.
                 * @return a string that describes the format parameters
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
