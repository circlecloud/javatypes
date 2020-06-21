declare namespace java {
    namespace awt {
        /**
         * A set of attributes which control the output of a printed page.
         * <p>
         * Instances of this class control the color state, paper size (media type),
         * orientation, logical origin, print quality, and resolution of every
         * page which uses the instance. Attribute names are compliant with the
         * Internet Printing Protocol (IPP) 1.1 where possible. Attribute values
         * are partially compliant where possible.
         * <p>
         * To use a method which takes an inner class type, pass a reference to
         * one of the constant fields of the inner class. Client code cannot create
         * new instances of the inner class types because none of those classes
         * has a public constructor. For example, to set the color state to
         * monochrome, use the following code:
         * <pre>
         * import java.awt.PageAttributes;
         * public class MonochromeExample {
         * public void setMonochrome(PageAttributes pageAttributes) {
         * pageAttributes.setColor(PageAttributes.ColorType.MONOCHROME);
         * }
         * }
         * </pre>
         * <p>
         * Every IPP attribute which supports an <i>attributeName</i>-default value
         * has a corresponding <code>set<i>attributeName</i>ToDefault</code> method.
         * Default value fields are not provided.
         * @author David Mendenhall
         * @since 1.3
         */
        // @ts-ignore
        class PageAttributes extends java.lang.Object implements java.lang.Cloneable {
            /**
             * Constructs a PageAttributes instance with default values for every
             * attribute.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a PageAttributes instance which is a copy of the supplied
             * PageAttributes.
             * @param obj the PageAttributes to copy.
             */
            // @ts-ignore
            constructor(obj: java.awt.PageAttributes)
            /**
             * Constructs a PageAttributes instance with the specified values for
             * every attribute.
             * @param color ColorType.COLOR or ColorType.MONOCHROME.
             * @param media one of the constant fields of the MediaType class.
             * @param orientationRequested OrientationRequestedType.PORTRAIT or
             *           OrientationRequestedType.LANDSCAPE.
             * @param origin OriginType.PHYSICAL or OriginType.PRINTABLE
             * @param printQuality PrintQualityType.DRAFT, PrintQualityType.NORMAL,
             *           or PrintQualityType.HIGH
             * @param printerResolution an integer array of 3 elements. The first
             *           element must be greater than 0. The second element must be
             *           must be greater than 0. The third element must be either
             *           <code>3</code> or <code>4</code>.
             * @throws IllegalArgumentException if one or more of the above
             *           conditions is violated.
             */
            // @ts-ignore
            constructor(color: java.awt.PageAttributes.ColorType, media: java.awt.PageAttributes.MediaType, orientationRequested: java.awt.PageAttributes.OrientationRequestedType, origin: java.awt.PageAttributes.OriginType, printQuality: java.awt.PageAttributes.PrintQualityType, printerResolution: number /*int*/[])
            /**
             * Creates and returns a copy of this PageAttributes.
             * @return the newly created copy. It is safe to cast this Object into
             *           a PageAttributes.
             */
            // @ts-ignore
            public clone(): any
            /**
             * Sets all of the attributes of this PageAttributes to the same values as
             * the attributes of obj.
             * @param obj the PageAttributes to copy.
             */
            // @ts-ignore
            public set(obj: java.awt.PageAttributes): void
            /**
             * Returns whether pages using these attributes will be rendered in
             * color or monochrome. This attribute is updated to the value chosen
             * by the user.
             * @return ColorType.COLOR or ColorType.MONOCHROME.
             */
            // @ts-ignore
            public getColor(): java.awt.PageAttributes.ColorType
            /**
             * Specifies whether pages using these attributes will be rendered in
             * color or monochrome. Not specifying this attribute is equivalent to
             * specifying ColorType.MONOCHROME.
             * @param color ColorType.COLOR or ColorType.MONOCHROME.
             * @throws IllegalArgumentException if color is null.
             */
            // @ts-ignore
            public setColor(color: java.awt.PageAttributes.ColorType): void
            /**
             * Returns the paper size for pages using these attributes. This
             * attribute is updated to the value chosen by the user.
             * @return one of the constant fields of the MediaType class.
             */
            // @ts-ignore
            public getMedia(): java.awt.PageAttributes.MediaType
            /**
             * Specifies the desired paper size for pages using these attributes. The
             * actual paper size will be determined by the limitations of the target
             * printer. If an exact match cannot be found, an implementation will
             * choose the closest possible match. Not specifying this attribute is
             * equivalent to specifying the default size for the default locale. The
             * default size for locales in the United States and Canada is
             * MediaType.NA_LETTER. The default size for all other locales is
             * MediaType.ISO_A4.
             * @param media one of the constant fields of the MediaType class.
             * @throws IllegalArgumentException if media is null.
             */
            // @ts-ignore
            public setMedia(media: java.awt.PageAttributes.MediaType): void
            /**
             * Sets the paper size for pages using these attributes to the default
             * size for the default locale. The default size for locales in the
             * United States and Canada is MediaType.NA_LETTER. The default size for
             * all other locales is MediaType.ISO_A4.
             */
            // @ts-ignore
            public setMediaToDefault(): void
            /**
             * Returns the print orientation for pages using these attributes. This
             * attribute is updated to the value chosen by the user.
             * @return OrientationRequestedType.PORTRAIT or
             *           OrientationRequestedType.LANDSCAPE.
             */
            // @ts-ignore
            public getOrientationRequested(): java.awt.PageAttributes.OrientationRequestedType
            /**
             * Specifies the print orientation for pages using these attributes. Not
             * specifying the property is equivalent to specifying
             * OrientationRequestedType.PORTRAIT.
             * @param orientationRequested OrientationRequestedType.PORTRAIT or
             *           OrientationRequestedType.LANDSCAPE.
             * @throws IllegalArgumentException if orientationRequested is null.
             */
            // @ts-ignore
            public setOrientationRequested(orientationRequested: java.awt.PageAttributes.OrientationRequestedType): void
            /**
             * Specifies the print orientation for pages using these attributes.
             * Specifying <code>3</code> denotes portrait. Specifying <code>4</code>
             * denotes landscape. Specifying any other value will generate an
             * IllegalArgumentException. Not specifying the property is equivalent
             * to calling setOrientationRequested(OrientationRequestedType.PORTRAIT).
             * @param orientationRequested <code>3</code> or <code>4</code>
             * @throws IllegalArgumentException if orientationRequested is not
             *           <code>3</code> or <code>4</code>
             */
            // @ts-ignore
            public setOrientationRequested(orientationRequested: number /*int*/): void
            /**
             * Sets the print orientation for pages using these attributes to the
             * default. The default orientation is portrait.
             */
            // @ts-ignore
            public setOrientationRequestedToDefault(): void
            /**
             * Returns whether drawing at (0, 0) to pages using these attributes
             * draws at the upper-left corner of the physical page, or at the
             * upper-left corner of the printable area. (Note that these locations
             * could be equivalent.) This attribute cannot be modified by,
             * and is not subject to any limitations of, the implementation or the
             * target printer.
             * @return OriginType.PHYSICAL or OriginType.PRINTABLE
             */
            // @ts-ignore
            public getOrigin(): java.awt.PageAttributes.OriginType
            /**
             * Specifies whether drawing at (0, 0) to pages using these attributes
             * draws at the upper-left corner of the physical page, or at the
             * upper-left corner of the printable area. (Note that these locations
             * could be equivalent.) Not specifying the property is equivalent to
             * specifying OriginType.PHYSICAL.
             * @param origin OriginType.PHYSICAL or OriginType.PRINTABLE
             * @throws IllegalArgumentException if origin is null.
             */
            // @ts-ignore
            public setOrigin(origin: java.awt.PageAttributes.OriginType): void
            /**
             * Returns the print quality for pages using these attributes. This
             * attribute is updated to the value chosen by the user.
             * @return PrintQualityType.DRAFT, PrintQualityType.NORMAL, or
             *           PrintQualityType.HIGH
             */
            // @ts-ignore
            public getPrintQuality(): java.awt.PageAttributes.PrintQualityType
            /**
             * Specifies the print quality for pages using these attributes. Not
             * specifying the property is equivalent to specifying
             * PrintQualityType.NORMAL.
             * @param printQuality PrintQualityType.DRAFT, PrintQualityType.NORMAL,
             *           or PrintQualityType.HIGH
             * @throws IllegalArgumentException if printQuality is null.
             */
            // @ts-ignore
            public setPrintQuality(printQuality: java.awt.PageAttributes.PrintQualityType): void
            /**
             * Specifies the print quality for pages using these attributes.
             * Specifying <code>3</code> denotes draft. Specifying <code>4</code>
             * denotes normal. Specifying <code>5</code> denotes high. Specifying
             * any other value will generate an IllegalArgumentException. Not
             * specifying the property is equivalent to calling
             * setPrintQuality(PrintQualityType.NORMAL).
             * @param printQuality <code>3</code>, <code>4</code>, or <code>5</code>
             * @throws IllegalArgumentException if printQuality is not <code>3
             *           </code>, <code>4</code>, or <code>5</code>
             */
            // @ts-ignore
            public setPrintQuality(printQuality: number /*int*/): void
            /**
             * Sets the print quality for pages using these attributes to the default.
             * The default print quality is normal.
             */
            // @ts-ignore
            public setPrintQualityToDefault(): void
            /**
             * Returns the print resolution for pages using these attributes.
             * Index 0 of the array specifies the cross feed direction resolution
             * (typically the horizontal resolution). Index 1 of the array specifies
             * the feed direction resolution (typically the vertical resolution).
             * Index 2 of the array specifies whether the resolutions are in dots per
             * inch or dots per centimeter. <code>3</code> denotes dots per inch.
             * <code>4</code> denotes dots per centimeter.
             * @return an integer array of 3 elements. The first
             *           element must be greater than 0. The second element must be
             *           must be greater than 0. The third element must be either
             *           <code>3</code> or <code>4</code>.
             */
            // @ts-ignore
            public getPrinterResolution(): number /*int*/[]
            /**
             * Specifies the desired print resolution for pages using these attributes.
             * The actual resolution will be determined by the limitations of the
             * implementation and the target printer. Index 0 of the array specifies
             * the cross feed direction resolution (typically the horizontal
             * resolution). Index 1 of the array specifies the feed direction
             * resolution (typically the vertical resolution). Index 2 of the array
             * specifies whether the resolutions are in dots per inch or dots per
             * centimeter. <code>3</code> denotes dots per inch. <code>4</code>
             * denotes dots per centimeter. Note that the 1.1 printing implementation
             * (Toolkit.getPrintJob) requires that the feed and cross feed resolutions
             * be the same. Not specifying the property is equivalent to calling
             * setPrinterResolution(72).
             * @param printerResolution an integer array of 3 elements. The first
             *           element must be greater than 0. The second element must be
             *           must be greater than 0. The third element must be either
             *           <code>3</code> or <code>4</code>.
             * @throws IllegalArgumentException if one or more of the above
             *           conditions is violated.
             */
            // @ts-ignore
            public setPrinterResolution(printerResolution: number /*int*/[]): void
            /**
             * Specifies the desired cross feed and feed print resolutions in dots per
             * inch for pages using these attributes. The same value is used for both
             * resolutions. The actual resolutions will be determined by the
             * limitations of the implementation and the target printer. Not
             * specifying the property is equivalent to specifying <code>72</code>.
             * @param printerResolution an integer greater than 0.
             * @throws IllegalArgumentException if printerResolution is less than or
             *           equal to 0.
             */
            // @ts-ignore
            public setPrinterResolution(printerResolution: number /*int*/): void
            /**
             * Sets the printer resolution for pages using these attributes to the
             * default. The default is 72 dpi for both the feed and cross feed
             * resolutions.
             */
            // @ts-ignore
            public setPrinterResolutionToDefault(): void
            /**
             * Determines whether two PageAttributes are equal to each other.
             * <p>
             * Two PageAttributes are equal if and only if each of their attributes are
             * equal. Attributes of enumeration type are equal if and only if the
             * fields refer to the same unique enumeration object. This means that
             * an aliased media is equal to its underlying unique media. Printer
             * resolutions are equal if and only if the feed resolution, cross feed
             * resolution, and units are equal.
             * @param obj the object whose equality will be checked.
             * @return whether obj is equal to this PageAttribute according to the
             *           above criteria.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns a hash code value for this PageAttributes.
             * @return the hash code.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Returns a string representation of this PageAttributes.
             * @return the string representation.
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
