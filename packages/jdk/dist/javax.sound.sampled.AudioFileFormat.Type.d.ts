declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace AudioFileFormat {
                /**
                 * An instance of the <code>Type</code> class represents one of the
                 * standard types of audio file.  Static instances are provided for the
                 * common types.
                 */
                // @ts-ignore
                class Type extends java.lang.Object {
                    /**
                     * Constructs a file type.
                     * @param name the string that names the file type
                     * @param extension the string that commonly marks the file type
                     *  without leading dot.
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, extension: java.lang.String | string)
                    /**
                     * Specifies a WAVE file.
                     */
                    // @ts-ignore
                    public static readonly WAVE: javax.sound.sampled.AudioFileFormat.Type
                    /**
                     * Specifies an AU file.
                     */
                    // @ts-ignore
                    public static readonly AU: javax.sound.sampled.AudioFileFormat.Type
                    /**
                     * Specifies an AIFF file.
                     */
                    // @ts-ignore
                    public static readonly AIFF: javax.sound.sampled.AudioFileFormat.Type
                    /**
                     * Specifies an AIFF-C file.
                     */
                    // @ts-ignore
                    public static readonly AIFC: javax.sound.sampled.AudioFileFormat.Type
                    /**
                     * Specifies a SND file.
                     */
                    // @ts-ignore
                    public static readonly SND: javax.sound.sampled.AudioFileFormat.Type
                    /**
                     * Finalizes the equals method
                     */
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    /**
                     * Finalizes the hashCode method
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Provides the file type's name as the <code>String</code> representation
                     * of the file type.
                     * @return the file type's name
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Obtains the common file name extension for this file type.
                     * @return file type extension
                     */
                    // @ts-ignore
                    public getExtension(): string
                }
            }
        }
    }
}
