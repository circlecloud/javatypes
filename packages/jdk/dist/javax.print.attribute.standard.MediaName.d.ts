declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class MediaName is a subclass of Media, a printing attribute class (an
                 * enumeration) that specifies the media for a print job as a name.
                 * <P>
                 * This attribute can be used instead of specifying MediaSize or MediaTray.
                 * <p>
                 * Class MediaName currently declares a few standard media names.
                 * Implementation- or site-defined names for a media name attribute may also
                 * be created by defining a subclass of class MediaName.
                 * <P>
                 * <B>IPP Compatibility:</B> MediaName is a representation class for
                 * values of the IPP "media" attribute which names media.
                 * <P>
                 */
                // @ts-ignore
                class MediaName extends javax.print.attribute.standard.Media implements javax.print.attribute.Attribute {
                    /**
                     * Constructs a new media name enumeration value with the given integer
                     * value.
                     * @param value  Integer value.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * white letter paper.
                     */
                    // @ts-ignore
                    public static readonly NA_LETTER_WHITE: javax.print.attribute.standard.MediaName
                    /**
                     * letter transparency.
                     */
                    // @ts-ignore
                    public static readonly NA_LETTER_TRANSPARENT: javax.print.attribute.standard.MediaName
                    /**
                     * white A4 paper.
                     */
                    // @ts-ignore
                    public static readonly ISO_A4_WHITE: javax.print.attribute.standard.MediaName
                    /**
                     * A4 transparency.
                     */
                    // @ts-ignore
                    public static readonly ISO_A4_TRANSPARENT: javax.print.attribute.standard.MediaName
                    /**
                     * Returns the string table for class MediaTray.
                     * @return the String table.
                     */
                    // @ts-ignore
                    getStringTable(): string[]
                    /**
                     * Returns the enumeration value table for class MediaTray.
                     * @return the enumeration value table.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                }
            }
        }
    }
}
