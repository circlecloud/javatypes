declare namespace javax {
    namespace sound {
        namespace midi {
            namespace spi {
                /**
                 * A {@code MidiFileWriter} supplies MIDI file-writing services. Classes that
                 * implement this interface can write one or more types of MIDI file from a
                 * {@link Sequence} object.
                 * @author Kara Kytle
                 * @since 1.3
                 */
                // @ts-ignore
                abstract class MidiFileWriter extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Obtains the set of MIDI file types for which file writing support is
                     * provided by this file writer.
                     * @return array of file types. If no file types are supported, an array of
                     *          length 0 is returned.
                     */
                    // @ts-ignore
                    public abstract getMidiFileTypes(): number /*int*/[]
                    /**
                     * Obtains the file types that this file writer can write from the sequence
                     * specified.
                     * @param sequence the sequence for which MIDI file type support is
                     *          queried
                     * @return array of file types. If no file types are supported, returns an
                     *          array of length 0.
                     */
                    // @ts-ignore
                    public abstract getMidiFileTypes(sequence: javax.sound.midi.Sequence): number /*int*/[]
                    /**
                     * Indicates whether file writing support for the specified MIDI file type
                     * is provided by this file writer.
                     * @param fileType the file type for which write capabilities are queried
                     * @return {#code true} if the file type is supported, otherwise
                     *          {@code false}
                     */
                    // @ts-ignore
                    public isFileTypeSupported(fileType: number /*int*/): boolean
                    /**
                     * Indicates whether a MIDI file of the file type specified can be written
                     * from the sequence indicated.
                     * @param fileType the file type for which write capabilities are queried
                     * @param sequence the sequence for which file writing support is queried
                     * @return {#code true} if the file type is supported for this sequence,
                     *          otherwise {@code false}
                     */
                    // @ts-ignore
                    public isFileTypeSupported(fileType: number /*int*/, sequence: javax.sound.midi.Sequence): boolean
                    /**
                     * Writes a stream of bytes representing a MIDI file of the file type
                     * indicated to the output stream provided.
                     * @param in sequence containing MIDI data to be written to the file
                     * @param fileType type of the file to be written to the output stream
                     * @param out stream to which the file data should be written
                     * @return the number of bytes written to the output stream
                     * @throws IOException if an I/O exception occurs
                     * @throws IllegalArgumentException if the file type is not supported by
                     *          this file writer
                     * @see #isFileTypeSupported(int, Sequence)
                     * @see #getMidiFileTypes(Sequence)
                     */
                    // @ts-ignore
                    public abstract write(input: javax.sound.midi.Sequence, fileType: number /*int*/, out: java.io.OutputStream): number /*int*/
                    /**
                     * Writes a stream of bytes representing a MIDI file of the file type
                     * indicated to the external file provided.
                     * @param in sequence containing MIDI data to be written to the external
                     *          file
                     * @param fileType type of the file to be written to the external file
                     * @param out external file to which the file data should be written
                     * @return the number of bytes written to the file
                     * @throws IOException if an I/O exception occurs
                     * @throws IllegalArgumentException if the file type is not supported by
                     *          this file writer
                     * @see #isFileTypeSupported(int, Sequence)
                     * @see #getMidiFileTypes(Sequence)
                     */
                    // @ts-ignore
                    public abstract write(input: javax.sound.midi.Sequence, fileType: number /*int*/, out: java.io.File): number /*int*/
                }
            }
        }
    }
}
