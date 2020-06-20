declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class MediaSize is a two-dimensional size valued printing attribute class
                 * that indicates the dimensions of the medium in a portrait orientation, with
                 * the X dimension running along the bottom edge and the Y dimension running
                 * along the left edge. Thus, the Y dimension must be greater than or equal to
                 * the X dimension. Class MediaSize declares many standard media size
                 * values, organized into nested classes for ISO, JIS, North American,
                 * engineering, and other media.
                 * <P>
                 * MediaSize is not yet used to specify media. Its current role is
                 * as a mapping for named media (see {@link MediaSizeName MediaSizeName}).
                 * Clients can use the mapping method
                 * <code>MediaSize.getMediaSizeForName(MediaSizeName)</code>
                 * to find the physical dimensions of the MediaSizeName instances
                 * enumerated in this API. This is useful for clients which need this
                 * information to format {@literal &} paginate printing.
                 * <P>
                 * @author Phil Race, Alan Kaminsky
                 */
                // @ts-ignore
                class MediaSize extends javax.print.attribute.Size2DSyntax implements javax.print.attribute.Attribute {
                    /**
                     * Construct a new media size attribute from the given floating-point
                     * values.
                     * @param x  X dimension.
                     * @param y  Y dimension.
                     * @param units
                     *      Unit conversion factor, e.g. <CODE>Size2DSyntax.INCH</CODE> or
                     *      <CODE>Size2DSyntax.MM</CODE>.
                     * @exception IllegalArgumentException
                     *    (Unchecked exception) Thrown if {#code x < 0} or {@code y < 0} or
                     *    {@code units < 1} or {@code x > y}.
                     */
                    // @ts-ignore
                    constructor(x: number /*float*/, y: number /*float*/, units: number /*int*/)
                    /**
                     * Construct a new media size attribute from the given integer values.
                     * @param x  X dimension.
                     * @param y  Y dimension.
                     * @param units
                     *      Unit conversion factor, e.g. <CODE>Size2DSyntax.INCH</CODE> or
                     *      <CODE>Size2DSyntax.MM</CODE>.
                     * @exception IllegalArgumentException
                     *    (Unchecked exception) Thrown if {#code x < 0} or {@code y < 0} or
                     *    {@code units < 1} or {@code x > y}.
                     */
                    // @ts-ignore
                    constructor(x: number /*int*/, y: number /*int*/, units: number /*int*/)
                    /**
                     * Construct a new media size attribute from the given floating-point
                     * values.
                     * @param x  X dimension.
                     * @param y  Y dimension.
                     * @param units
                     *      Unit conversion factor, e.g. <CODE>Size2DSyntax.INCH</CODE> or
                     *      <CODE>Size2DSyntax.MM</CODE>.
                     * @param media a media name to associate with this MediaSize
                     * @exception IllegalArgumentException
                     *    (Unchecked exception) Thrown if {#code x < 0} or {@code y < 0} or
                     *    {@code units < 1} or {@code x > y}.
                     */
                    // @ts-ignore
                    constructor(x: number /*float*/, y: number /*float*/, units: number /*int*/, media: javax.print.attribute.standard.MediaSizeName)
                    /**
                     * Construct a new media size attribute from the given integer values.
                     * @param x  X dimension.
                     * @param y  Y dimension.
                     * @param units
                     *      Unit conversion factor, e.g. <CODE>Size2DSyntax.INCH</CODE> or
                     *      <CODE>Size2DSyntax.MM</CODE>.
                     * @param media a media name to associate with this MediaSize
                     * @exception IllegalArgumentException
                     *    (Unchecked exception) Thrown if {#code x < 0} or {@code y < 0} or
                     *    {@code units < 1} or {@code x > y}.
                     */
                    // @ts-ignore
                    constructor(x: number /*int*/, y: number /*int*/, units: number /*int*/, media: javax.print.attribute.standard.MediaSizeName)
                    /**
                     * Get the media name, if any, for this size.
                     * @return the name for this media size, or null if no name was
                     *  associated with this size (an anonymous size).
                     */
                    // @ts-ignore
                    getMediaSizeName(): javax.print.attribute.standard.MediaSizeName
                    /**
                     * Get the MediaSize for the specified named media.
                     * @param media - the name of the media for which the size is sought
                     * @return size of the media, or null if this media is not associated
                     *  with any size.
                     */
                    // @ts-ignore
                    getMediaSizeForName(media: javax.print.attribute.standard.MediaSizeName): javax.print.attribute.standard.MediaSize
                    /**
                     * The specified dimensions are used to locate a matching MediaSize
                     * instance from amongst all the standard MediaSize instances.
                     * If there is no exact match, the closest match is used.
                     * <p>
                     * The MediaSize is in turn used to locate the MediaSizeName object.
                     * This method may return null if the closest matching MediaSize
                     * has no corresponding Media instance.
                     * <p>
                     * This method is useful for clients which have only dimensions and
                     * want to find a Media which corresponds to the dimensions.
                     * @param x - X dimension
                     * @param y - Y dimension.
                     * @param units
                     *      Unit conversion factor, e.g. <CODE>Size2DSyntax.INCH</CODE> or
                     *      <CODE>Size2DSyntax.MM</CODE>
                     * @return MediaSizeName matching these dimensions, or null.
                     * @exception IllegalArgumentException if {#code x <= 0},
                     *       {@code y <= 0}, or {@code units < 1}.
                     */
                    // @ts-ignore
                    findMedia(x: number /*float*/, y: number /*float*/, units: number /*int*/): javax.print.attribute.standard.MediaSizeName
                    /**
                     * Returns whether this media size attribute is equivalent to the passed
                     * in object.
                     * To be equivalent, all of the following conditions must be true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class MediaSize.
                     * <LI>
                     * This media size attribute's X dimension is equal to
                     * <CODE>object</CODE>'s X dimension.
                     * <LI>
                     * This media size attribute's Y dimension is equal to
                     * <CODE>object</CODE>'s Y dimension.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this media size
                     *           attribute, false otherwise.
                     */
                    // @ts-ignore
                    equals(object: any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class MediaSize and any vendor-defined subclasses, the category is
                     * class MediaSize itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class MediaSize and any vendor-defined subclasses, the category
                     * name is <CODE>"media-size"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
