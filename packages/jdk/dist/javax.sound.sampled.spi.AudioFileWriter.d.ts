declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace spi {
                /**
                 * Provider for audio file writing services.  Classes providing concrete
                 * implementations can write one or more types of audio file from an audio
                 * stream.
                 * @author Kara Kytle
                 * @since 1.3
                 */
                // @ts-ignore
                class AudioFileWriter extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Obtains the file types for which file writing support is provided by this
                     * audio file writer.
                     * @return array of file types.  If no file types are supported,
                     *  an array of length 0 is returned.
                     */
                    // @ts-ignore
                    abstract getAudioFileTypes(): javax.sound.sampled.AudioFileFormat.Type[]
                    /**
                     * Indicates whether file writing support for the specified file type is provided
                     * by this audio file writer.
                     * @param fileType the file type for which write capabilities are queried
                     * @return <code>true</code> if the file type is supported,
                     *  otherwise <code>false</code>
                     */
                    // @ts-ignore
                    isFileTypeSupported(fileType: javax.sound.sampled.AudioFileFormat.Type): boolean
                    /**
                     * Obtains the file types that this audio file writer can write from the
                     * audio input stream specified.
                     * @param stream the audio input stream for which audio file type support
                     *  is queried
                     * @return array of file types.  If no file types are supported,
                     *  an array of length 0 is returned.
                     */
                    // @ts-ignore
                    abstract getAudioFileTypes(stream: javax.sound.sampled.AudioInputStream): javax.sound.sampled.AudioFileFormat.Type[]
                    /**
                     * Indicates whether an audio file of the type specified can be written
                     * from the audio input stream indicated.
                     * @param fileType file type for which write capabilities are queried
                     * @param stream for which file writing support is queried
                     * @return <code>true</code> if the file type is supported for this audio input stream,
                     *  otherwise <code>false</code>
                     */
                    // @ts-ignore
                    isFileTypeSupported(fileType: javax.sound.sampled.AudioFileFormat.Type, stream: javax.sound.sampled.AudioInputStream): boolean
                    /**
                     * Writes a stream of bytes representing an audio file of the file type
                     * indicated to the output stream provided.  Some file types require that
                     * the length be written into the file header, and cannot be written from
                     * start to finish unless the length is known in advance.  An attempt
                     * to write such a file type will fail with an IOException if the length in
                     * the audio file format is
                     * {@link javax.sound.sampled.AudioSystem#NOT_SPECIFIED AudioSystem.NOT_SPECIFIED}.
                     * @param stream the audio input stream containing audio data to be
                     *  written to the output stream
                     * @param fileType file type to be written to the output stream
                     * @param out stream to which the file data should be written
                     * @return the number of bytes written to the output stream
                     * @throws IOException if an I/O exception occurs
                     * @throws IllegalArgumentException if the file type is not supported by
                     *  the system
                     * @see #isFileTypeSupported(AudioFileFormat.Type, AudioInputStream)
                     * @see #getAudioFileTypes
                     */
                    // @ts-ignore
                    abstract write(stream: javax.sound.sampled.AudioInputStream, fileType: javax.sound.sampled.AudioFileFormat.Type, out: java.io.OutputStream): int
                    /**
                     * Writes a stream of bytes representing an audio file of the file format
                     * indicated to the external file provided.
                     * @param stream the audio input stream containing audio data to be
                     *  written to the file
                     * @param fileType file type to be written to the file
                     * @param out external file to which the file data should be written
                     * @return the number of bytes written to the file
                     * @throws IOException if an I/O exception occurs
                     * @throws IllegalArgumentException if the file format is not supported by
                     *  the system
                     * @see #isFileTypeSupported
                     * @see #getAudioFileTypes
                     */
                    // @ts-ignore
                    abstract write(stream: javax.sound.sampled.AudioInputStream, fileType: javax.sound.sampled.AudioFileFormat.Type, out: java.io.File): int
                }
            }
        }
    }
}
