declare namespace javax {
    namespace sound {
        namespace sampled {
            /**
             * An instance of the <code>AudioFileFormat</code> class describes
             * an audio file, including the file type, the file's length in bytes,
             * the length in sample frames of the audio data contained in the file,
             * and the format of the audio data.
             * <p>
             * The <code>{@link AudioSystem}</code> class includes methods for determining the format
             * of an audio file, obtaining an audio input stream from an audio file, and
             * writing an audio file from an audio input stream.
             * <p>An <code>AudioFileFormat</code> object can
             * include a set of properties. A property is a pair of key and value:
             * the key is of type <code>String</code>, the associated property
             * value is an arbitrary object.
             * Properties specify additional informational
             * meta data (like a author, copyright, or file duration).
             * Properties are optional information, and file reader and file
             * writer implementations are not required to provide or
             * recognize properties.
             * <p>The following table lists some common properties that should
             * be used in implementations:
             * <table border=1>
             * <caption>Audio File Format Properties</caption>
             * <tr>
             * <th>Property key</th>
             * <th>Value type</th>
             * <th>Description</th>
             * </tr>
             * <tr>
             * <td>&quot;duration&quot;</td>
             * <td>{@link java.lang.Long Long}</td>
             * <td>playback duration of the file in microseconds</td>
             * </tr>
             * <tr>
             * <td>&quot;author&quot;</td>
             * <td>{@link java.lang.String String}</td>
             * <td>name of the author of this file</td>
             * </tr>
             * <tr>
             * <td>&quot;title&quot;</td>
             * <td>{@link java.lang.String String}</td>
             * <td>title of this file</td>
             * </tr>
             * <tr>
             * <td>&quot;copyright&quot;</td>
             * <td>{@link java.lang.String String}</td>
             * <td>copyright message</td>
             * </tr>
             * <tr>
             * <td>&quot;date&quot;</td>
             * <td>{@link java.util.Date Date}</td>
             * <td>date of the recording or release</td>
             * </tr>
             * <tr>
             * <td>&quot;comment&quot;</td>
             * <td>{@link java.lang.String String}</td>
             * <td>an arbitrary text</td>
             * </tr>
             * </table>
             * @author David Rivas
             * @author Kara Kytle
             * @author Florian Bomers
             * @see AudioInputStream
             * @since 1.3
             */
            // @ts-ignore
            class AudioFileFormat extends java.lang.Object {
                /**
                 * Constructs an audio file format object.
                 * This protected constructor is intended for use by providers of file-reading
                 * services when returning information about an audio file or about supported audio file
                 * formats.
                 * @param type the type of the audio file
                 * @param byteLength the length of the file in bytes, or <code>AudioSystem.NOT_SPECIFIED</code>
                 * @param format the format of the audio data contained in the file
                 * @param frameLength the audio data length in sample frames, or <code>AudioSystem.NOT_SPECIFIED</code>
                 * @see #getType
                 */
                // @ts-ignore
                constructor(type: javax.sound.sampled.AudioFileFormat.Type, byteLength: number /*int*/, format: javax.sound.sampled.AudioFormat, frameLength: number /*int*/)
                /**
                 * Constructs an audio file format object.
                 * This public constructor may be used by applications to describe the
                 * properties of a requested audio file.
                 * @param type the type of the audio file
                 * @param format the format of the audio data contained in the file
                 * @param frameLength the audio data length in sample frames, or <code>AudioSystem.NOT_SPECIFIED</code>
                 */
                // @ts-ignore
                constructor(type: javax.sound.sampled.AudioFileFormat.Type, format: javax.sound.sampled.AudioFormat, frameLength: number /*int*/)
                /**
                 * Construct an audio file format object with a set of
                 * defined properties.
                 * This public constructor may be used by applications to describe the
                 * properties of a requested audio file. The properties map
                 * will be copied to prevent any changes to it.
                 * @param type        the type of the audio file
                 * @param format      the format of the audio data contained in the file
                 * @param frameLength the audio data length in sample frames, or
                 *                     <code>AudioSystem.NOT_SPECIFIED</code>
                 * @param properties  a <code>Map&lt;String,Object&gt;</code> object
                 *         with properties
                 * @since 1.5
                 */
                // @ts-ignore
                constructor(type: javax.sound.sampled.AudioFileFormat.Type, format: javax.sound.sampled.AudioFormat, frameLength: number /*int*/, properties: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                /**
                 * Obtains the audio file type, such as <code>WAVE</code> or <code>AU</code>.
                 * @return the audio file type
                 * @see Type#WAVE
                 * @see Type#AU
                 * @see Type#AIFF
                 * @see Type#AIFC
                 * @see Type#SND
                 */
                // @ts-ignore
                public getType(): javax.sound.sampled.AudioFileFormat.Type
                /**
                 * Obtains the size in bytes of the entire audio file (not just its audio data).
                 * @return the audio file length in bytes
                 * @see AudioSystem#NOT_SPECIFIED
                 */
                // @ts-ignore
                public getByteLength(): number /*int*/
                /**
                 * Obtains the format of the audio data contained in the audio file.
                 * @return the audio data format
                 */
                // @ts-ignore
                public getFormat(): javax.sound.sampled.AudioFormat
                /**
                 * Obtains the length of the audio data contained in the file, expressed in sample frames.
                 * @return the number of sample frames of audio data in the file
                 * @see AudioSystem#NOT_SPECIFIED
                 */
                // @ts-ignore
                public getFrameLength(): number /*int*/
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
                public properties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
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
                public getProperty(key: java.lang.String | string): any
                /**
                 * Provides a string representation of the file format.
                 * @return the file format as a string
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
