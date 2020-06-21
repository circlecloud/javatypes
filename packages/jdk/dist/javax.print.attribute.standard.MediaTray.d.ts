declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class MediaTray is a subclass of Media.
                 * Class MediaTray is a printing attribute class, an enumeration, that
                 * specifies the media tray or bin for the job.
                 * This attribute can be used instead of specifying MediaSize or MediaName.
                 * <p>
                 * Class MediaTray declares keywords for standard media kind values.
                 * Implementation- or site-defined names for a media kind attribute may also
                 * be created by defining a subclass of class MediaTray.
                 * <P>
                 * <B>IPP Compatibility:</B> MediaTray is a representation class for
                 * values of the IPP "media" attribute which name paper trays.
                 * <P>
                 */
                // @ts-ignore
                class MediaTray extends javax.print.attribute.standard.Media implements javax.print.attribute.Attribute {
                    /**
                     * Construct a new media tray enumeration value with the given integer
                     * value.
                     * @param value  Integer value.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * The top input tray in the printer.
                     */
                    // @ts-ignore
                    public static readonly TOP: javax.print.attribute.standard.MediaTray
                    /**
                     * The middle input tray in the printer.
                     */
                    // @ts-ignore
                    public static readonly MIDDLE: javax.print.attribute.standard.MediaTray
                    /**
                     * The bottom input tray in the printer.
                     */
                    // @ts-ignore
                    public static readonly BOTTOM: javax.print.attribute.standard.MediaTray
                    /**
                     * The envelope input tray in the printer.
                     */
                    // @ts-ignore
                    public static readonly ENVELOPE: javax.print.attribute.standard.MediaTray
                    /**
                     * The manual feed input tray in the printer.
                     */
                    // @ts-ignore
                    public static readonly MANUAL: javax.print.attribute.standard.MediaTray
                    /**
                     * The large capacity input tray in the printer.
                     */
                    // @ts-ignore
                    public static readonly LARGE_CAPACITY: javax.print.attribute.standard.MediaTray
                    /**
                     * The main input tray in the printer.
                     */
                    // @ts-ignore
                    public static readonly MAIN: javax.print.attribute.standard.MediaTray
                    /**
                     * The side input tray.
                     */
                    // @ts-ignore
                    public static readonly SIDE: javax.print.attribute.standard.MediaTray
                    /**
                     * Returns the string table for class MediaTray.
                     */
                    // @ts-ignore
                    getStringTable(): string[]
                    /**
                     * Returns the enumeration value table for class MediaTray.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                }
            }
        }
    }
}
