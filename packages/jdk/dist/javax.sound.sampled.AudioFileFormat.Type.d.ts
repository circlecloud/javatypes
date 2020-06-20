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
                    constructor(name: string, extension: string)
                    /**
                     * Specifies a WAVE file.
                     */
                    // @ts-ignore
                    readonly WAVE: javax.sound.sampled.AudioFileFormat.Type
                    /**
                     * Specifies an AU file.
                     */
                    // @ts-ignore
                    readonly AU: javax.sound.sampled.AudioFileFormat.Type
                    /**
                     * Specifies an AIFF file.
                     */
                    // @ts-ignore
                    readonly AIFF: javax.sound.sampled.AudioFileFormat.Type
                    /**
                     * Specifies an AIFF-C file.
                     */
                    // @ts-ignore
                    readonly AIFC: javax.sound.sampled.AudioFileFormat.Type
                    /**
                     * Specifies a SND file.
                     */
                    // @ts-ignore
                    readonly SND: javax.sound.sampled.AudioFileFormat.Type
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
                     * Provides the file type's name as the <code>String</code> representation
                     * of the file type.
                     * @return the file type's name
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                    /**
                     * Obtains the common file name extension for this file type.
                     * @return file type extension
                     */
                    // @ts-ignore
                    getExtension(): java.lang.String
                }
            }
        }
    }
}
