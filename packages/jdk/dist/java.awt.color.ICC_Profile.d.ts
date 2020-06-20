declare namespace java {
    namespace awt {
        namespace color {
            /**
             * A representation of color profile data for device independent and
             * device dependent color spaces based on the International Color
             * Consortium Specification ICC.1:2001-12, File Format for Color Profiles,
             * (see <A href="http://www.color.org"> http://www.color.org</A>).
             * <p>
             * An ICC_ColorSpace object can be constructed from an appropriate
             * ICC_Profile.
             * Typically, an ICC_ColorSpace would be associated with an ICC
             * Profile which is either an input, display, or output profile (see
             * the ICC specification).  There are also device link, abstract,
             * color space conversion, and named color profiles.  These are less
             * useful for tagging a color or image, but are useful for other
             * purposes (in particular device link profiles can provide improved
             * performance for converting from one device's color space to
             * another's).
             * <p>
             * ICC Profiles represent transformations from the color space of
             * the profile (e.g. a monitor) to a Profile Connection Space (PCS).
             * Profiles of interest for tagging images or colors have a PCS
             * which is one of the two specific device independent
             * spaces (one CIEXYZ space and one CIELab space) defined in the
             * ICC Profile Format Specification.  Most profiles of interest
             * either have invertible transformations or explicitly specify
             * transformations going both directions.
             * @see ICC_ColorSpace
             */
            // @ts-ignore
            class ICC_Profile extends java.lang.Object implements java.io.Serializable {
                /**
                 * Profile class is input.
                 */
                // @ts-ignore
                readonly CLASS_INPUT: number /*int*/
                /**
                 * Profile class is display.
                 */
                // @ts-ignore
                readonly CLASS_DISPLAY: number /*int*/
                /**
                 * Profile class is output.
                 */
                // @ts-ignore
                readonly CLASS_OUTPUT: number /*int*/
                /**
                 * Profile class is device link.
                 */
                // @ts-ignore
                readonly CLASS_DEVICELINK: number /*int*/
                /**
                 * Profile class is color space conversion.
                 */
                // @ts-ignore
                readonly CLASS_COLORSPACECONVERSION: number /*int*/
                /**
                 * Profile class is abstract.
                 */
                // @ts-ignore
                readonly CLASS_ABSTRACT: number /*int*/
                /**
                 * Profile class is named color.
                 */
                // @ts-ignore
                readonly CLASS_NAMEDCOLOR: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'XYZ '.
                 */
                // @ts-ignore
                readonly icSigXYZData: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'Lab '.
                 */
                // @ts-ignore
                readonly icSigLabData: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'Luv '.
                 */
                // @ts-ignore
                readonly icSigLuvData: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'YCbr'.
                 */
                // @ts-ignore
                readonly icSigYCbCrData: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'Yxy '.
                 */
                // @ts-ignore
                readonly icSigYxyData: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'RGB '.
                 */
                // @ts-ignore
                readonly icSigRgbData: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'GRAY'.
                 */
                // @ts-ignore
                readonly icSigGrayData: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'HSV'.
                 */
                // @ts-ignore
                readonly icSigHsvData: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'HLS'.
                 */
                // @ts-ignore
                readonly icSigHlsData: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'CMYK'.
                 */
                // @ts-ignore
                readonly icSigCmykData: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'CMY '.
                 */
                // @ts-ignore
                readonly icSigCmyData: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: '2CLR'.
                 */
                // @ts-ignore
                readonly icSigSpace2CLR: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: '3CLR'.
                 */
                // @ts-ignore
                readonly icSigSpace3CLR: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: '4CLR'.
                 */
                // @ts-ignore
                readonly icSigSpace4CLR: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: '5CLR'.
                 */
                // @ts-ignore
                readonly icSigSpace5CLR: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: '6CLR'.
                 */
                // @ts-ignore
                readonly icSigSpace6CLR: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: '7CLR'.
                 */
                // @ts-ignore
                readonly icSigSpace7CLR: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: '8CLR'.
                 */
                // @ts-ignore
                readonly icSigSpace8CLR: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: '9CLR'.
                 */
                // @ts-ignore
                readonly icSigSpace9CLR: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'ACLR'.
                 */
                // @ts-ignore
                readonly icSigSpaceACLR: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'BCLR'.
                 */
                // @ts-ignore
                readonly icSigSpaceBCLR: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'CCLR'.
                 */
                // @ts-ignore
                readonly icSigSpaceCCLR: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'DCLR'.
                 */
                // @ts-ignore
                readonly icSigSpaceDCLR: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'ECLR'.
                 */
                // @ts-ignore
                readonly icSigSpaceECLR: number /*int*/
                /**
                 * ICC Profile Color Space Type Signature: 'FCLR'.
                 */
                // @ts-ignore
                readonly icSigSpaceFCLR: number /*int*/
                /**
                 * ICC Profile Class Signature: 'scnr'.
                 */
                // @ts-ignore
                readonly icSigInputClass: number /*int*/
                /**
                 * ICC Profile Class Signature: 'mntr'.
                 */
                // @ts-ignore
                readonly icSigDisplayClass: number /*int*/
                /**
                 * ICC Profile Class Signature: 'prtr'.
                 */
                // @ts-ignore
                readonly icSigOutputClass: number /*int*/
                /**
                 * ICC Profile Class Signature: 'link'.
                 */
                // @ts-ignore
                readonly icSigLinkClass: number /*int*/
                /**
                 * ICC Profile Class Signature: 'abst'.
                 */
                // @ts-ignore
                readonly icSigAbstractClass: number /*int*/
                /**
                 * ICC Profile Class Signature: 'spac'.
                 */
                // @ts-ignore
                readonly icSigColorSpaceClass: number /*int*/
                /**
                 * ICC Profile Class Signature: 'nmcl'.
                 */
                // @ts-ignore
                readonly icSigNamedColorClass: number /*int*/
                /**
                 * ICC Profile Rendering Intent: Perceptual.
                 */
                // @ts-ignore
                readonly icPerceptual: number /*int*/
                /**
                 * ICC Profile Rendering Intent: RelativeColorimetric.
                 */
                // @ts-ignore
                readonly icRelativeColorimetric: number /*int*/
                /**
                 * ICC Profile Rendering Intent: Media-RelativeColorimetric.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly icMediaRelativeColorimetric: number /*int*/
                /**
                 * ICC Profile Rendering Intent: Saturation.
                 */
                // @ts-ignore
                readonly icSaturation: number /*int*/
                /**
                 * ICC Profile Rendering Intent: AbsoluteColorimetric.
                 */
                // @ts-ignore
                readonly icAbsoluteColorimetric: number /*int*/
                /**
                 * ICC Profile Rendering Intent: ICC-AbsoluteColorimetric.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly icICCAbsoluteColorimetric: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'head' - special.
                 */
                // @ts-ignore
                readonly icSigHead: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'A2B0'.
                 */
                // @ts-ignore
                readonly icSigAToB0Tag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'A2B1'.
                 */
                // @ts-ignore
                readonly icSigAToB1Tag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'A2B2'.
                 */
                // @ts-ignore
                readonly icSigAToB2Tag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'bXYZ'.
                 */
                // @ts-ignore
                readonly icSigBlueColorantTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'bXYZ'.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly icSigBlueMatrixColumnTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'bTRC'.
                 */
                // @ts-ignore
                readonly icSigBlueTRCTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'B2A0'.
                 */
                // @ts-ignore
                readonly icSigBToA0Tag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'B2A1'.
                 */
                // @ts-ignore
                readonly icSigBToA1Tag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'B2A2'.
                 */
                // @ts-ignore
                readonly icSigBToA2Tag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'calt'.
                 */
                // @ts-ignore
                readonly icSigCalibrationDateTimeTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'targ'.
                 */
                // @ts-ignore
                readonly icSigCharTargetTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'cprt'.
                 */
                // @ts-ignore
                readonly icSigCopyrightTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'crdi'.
                 */
                // @ts-ignore
                readonly icSigCrdInfoTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'dmnd'.
                 */
                // @ts-ignore
                readonly icSigDeviceMfgDescTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'dmdd'.
                 */
                // @ts-ignore
                readonly icSigDeviceModelDescTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'devs'.
                 */
                // @ts-ignore
                readonly icSigDeviceSettingsTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'gamt'.
                 */
                // @ts-ignore
                readonly icSigGamutTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'kTRC'.
                 */
                // @ts-ignore
                readonly icSigGrayTRCTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'gXYZ'.
                 */
                // @ts-ignore
                readonly icSigGreenColorantTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'gXYZ'.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly icSigGreenMatrixColumnTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'gTRC'.
                 */
                // @ts-ignore
                readonly icSigGreenTRCTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'lumi'.
                 */
                // @ts-ignore
                readonly icSigLuminanceTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'meas'.
                 */
                // @ts-ignore
                readonly icSigMeasurementTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'bkpt'.
                 */
                // @ts-ignore
                readonly icSigMediaBlackPointTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'wtpt'.
                 */
                // @ts-ignore
                readonly icSigMediaWhitePointTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'ncl2'.
                 */
                // @ts-ignore
                readonly icSigNamedColor2Tag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'resp'.
                 */
                // @ts-ignore
                readonly icSigOutputResponseTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'pre0'.
                 */
                // @ts-ignore
                readonly icSigPreview0Tag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'pre1'.
                 */
                // @ts-ignore
                readonly icSigPreview1Tag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'pre2'.
                 */
                // @ts-ignore
                readonly icSigPreview2Tag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'desc'.
                 */
                // @ts-ignore
                readonly icSigProfileDescriptionTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'pseq'.
                 */
                // @ts-ignore
                readonly icSigProfileSequenceDescTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'psd0'.
                 */
                // @ts-ignore
                readonly icSigPs2CRD0Tag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'psd1'.
                 */
                // @ts-ignore
                readonly icSigPs2CRD1Tag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'psd2'.
                 */
                // @ts-ignore
                readonly icSigPs2CRD2Tag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'psd3'.
                 */
                // @ts-ignore
                readonly icSigPs2CRD3Tag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'ps2s'.
                 */
                // @ts-ignore
                readonly icSigPs2CSATag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'ps2i'.
                 */
                // @ts-ignore
                readonly icSigPs2RenderingIntentTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'rXYZ'.
                 */
                // @ts-ignore
                readonly icSigRedColorantTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'rXYZ'.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly icSigRedMatrixColumnTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'rTRC'.
                 */
                // @ts-ignore
                readonly icSigRedTRCTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'scrd'.
                 */
                // @ts-ignore
                readonly icSigScreeningDescTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'scrn'.
                 */
                // @ts-ignore
                readonly icSigScreeningTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'tech'.
                 */
                // @ts-ignore
                readonly icSigTechnologyTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'bfd '.
                 */
                // @ts-ignore
                readonly icSigUcrBgTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'vued'.
                 */
                // @ts-ignore
                readonly icSigViewingCondDescTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'view'.
                 */
                // @ts-ignore
                readonly icSigViewingConditionsTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'chrm'.
                 */
                // @ts-ignore
                readonly icSigChromaticityTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'chad'.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly icSigChromaticAdaptationTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'clro'.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly icSigColorantOrderTag: number /*int*/
                /**
                 * ICC Profile Tag Signature: 'clrt'.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly icSigColorantTableTag: number /*int*/
                /**
                 * ICC Profile Header Location: profile size in bytes.
                 */
                // @ts-ignore
                readonly icHdrSize: number /*int*/
                /**
                 * ICC Profile Header Location: CMM for this profile.
                 */
                // @ts-ignore
                readonly icHdrCmmId: number /*int*/
                /**
                 * ICC Profile Header Location: format version number.
                 */
                // @ts-ignore
                readonly icHdrVersion: number /*int*/
                /**
                 * ICC Profile Header Location: type of profile.
                 */
                // @ts-ignore
                readonly icHdrDeviceClass: number /*int*/
                /**
                 * ICC Profile Header Location: color space of data.
                 */
                // @ts-ignore
                readonly icHdrColorSpace: number /*int*/
                /**
                 * ICC Profile Header Location: PCS - XYZ or Lab only.
                 */
                // @ts-ignore
                readonly icHdrPcs: number /*int*/
                /**
                 * ICC Profile Header Location: date profile was created.
                 */
                // @ts-ignore
                readonly icHdrDate: number /*int*/
                /**
                 * ICC Profile Header Location: icMagicNumber.
                 */
                // @ts-ignore
                readonly icHdrMagic: number /*int*/
                /**
                 * ICC Profile Header Location: primary platform.
                 */
                // @ts-ignore
                readonly icHdrPlatform: number /*int*/
                /**
                 * ICC Profile Header Location: various bit settings.
                 */
                // @ts-ignore
                readonly icHdrFlags: number /*int*/
                /**
                 * ICC Profile Header Location: device manufacturer.
                 */
                // @ts-ignore
                readonly icHdrManufacturer: number /*int*/
                /**
                 * ICC Profile Header Location: device model number.
                 */
                // @ts-ignore
                readonly icHdrModel: number /*int*/
                /**
                 * ICC Profile Header Location: device attributes.
                 */
                // @ts-ignore
                readonly icHdrAttributes: number /*int*/
                /**
                 * ICC Profile Header Location: rendering intent.
                 */
                // @ts-ignore
                readonly icHdrRenderingIntent: number /*int*/
                /**
                 * ICC Profile Header Location: profile illuminant.
                 */
                // @ts-ignore
                readonly icHdrIlluminant: number /*int*/
                /**
                 * ICC Profile Header Location: profile creator.
                 */
                // @ts-ignore
                readonly icHdrCreator: number /*int*/
                /**
                 * ICC Profile Header Location: profile's ID.
                 * @since 1.5
                 */
                // @ts-ignore
                readonly icHdrProfileID: number /*int*/
                /**
                 * ICC Profile Constant: tag type signaturE.
                 */
                // @ts-ignore
                readonly icTagType: number /*int*/
                /**
                 * ICC Profile Constant: reserved.
                 */
                // @ts-ignore
                readonly icTagReserved: number /*int*/
                /**
                 * ICC Profile Constant: curveType count.
                 */
                // @ts-ignore
                readonly icCurveCount: number /*int*/
                /**
                 * ICC Profile Constant: curveType data.
                 */
                // @ts-ignore
                readonly icCurveData: number /*int*/
                /**
                 * ICC Profile Constant: XYZNumber X.
                 */
                // @ts-ignore
                readonly icXYZNumberX: number /*int*/
                /**
                 * Frees the resources associated with an ICC_Profile object.
                 */
                // @ts-ignore
                finalize(): void
                /**
                 * Constructs an ICC_Profile object corresponding to the data in
                 * a byte array.  Throws an IllegalArgumentException if the data
                 * does not correspond to a valid ICC Profile.
                 * @param data the specified ICC Profile data
                 * @return an <code>ICC_Profile</code> object corresponding to
                 *           the data in the specified <code>data</code> array.
                 */
                // @ts-ignore
                getInstance(data: number /*byte*/[]): java.awt.color.ICC_Profile
                /**
                 * Constructs an ICC_Profile corresponding to one of the specific color
                 * spaces defined by the ColorSpace class (for example CS_sRGB).
                 * Throws an IllegalArgumentException if cspace is not one of the
                 * defined color spaces.
                 * @param cspace the type of color space to create a profile for.
                 *  The specified type is one of the color
                 *  space constants defined in the  <CODE>ColorSpace</CODE> class.
                 * @return an <code>ICC_Profile</code> object corresponding to
                 *           the specified <code>ColorSpace</code> type.
                 * @exception IllegalArgumentException If <CODE>cspace</CODE> is not
                 *  one of the predefined color space types.
                 */
                // @ts-ignore
                getInstance(cspace: number /*int*/): java.awt.color.ICC_Profile
                /**
                 * Constructs an ICC_Profile corresponding to the data in a file.
                 * fileName may be an absolute or a relative file specification.
                 * Relative file names are looked for in several places: first, relative
                 * to any directories specified by the java.iccprofile.path property;
                 * second, relative to any directories specified by the java.class.path
                 * property; finally, in a directory used to store profiles always
                 * available, such as the profile for sRGB.  Built-in profiles use .pf as
                 * the file name extension for profiles, e.g. sRGB.pf.
                 * This method throws an IOException if the specified file cannot be
                 * opened or if an I/O error occurs while reading the file.  It throws
                 * an IllegalArgumentException if the file does not contain valid ICC
                 * Profile data.
                 * @param fileName The file that contains the data for the profile.
                 * @return an <code>ICC_Profile</code> object corresponding to
                 *           the data in the specified file.
                 * @exception IOException If the specified file cannot be opened or
                 *  an I/O error occurs while reading the file.
                 * @exception IllegalArgumentException If the file does not
                 *  contain valid ICC Profile data.
                 * @exception SecurityException If a security manager is installed
                 *  and it does not permit read access to the given file.
                 */
                // @ts-ignore
                getInstance(fileName: string): java.awt.color.ICC_Profile
                /**
                 * Constructs an ICC_Profile corresponding to the data in an InputStream.
                 * This method throws an IllegalArgumentException if the stream does not
                 * contain valid ICC Profile data.  It throws an IOException if an I/O
                 * error occurs while reading the stream.
                 * @param s The input stream from which to read the profile data.
                 * @return an <CODE>ICC_Profile</CODE> object corresponding to the
                 *      data in the specified <code>InputStream</code>.
                 * @exception IOException If an I/O error occurs while reading the stream.
                 * @exception IllegalArgumentException If the stream does not
                 *  contain valid ICC Profile data.
                 */
                // @ts-ignore
                getInstance(s: java.io.InputStream): java.awt.color.ICC_Profile
                /**
                 * Returns profile major version.
                 * @return The major version of the profile.
                 */
                // @ts-ignore
                getMajorVersion(): int
                /**
                 * Returns profile minor version.
                 * @return The minor version of the profile.
                 */
                // @ts-ignore
                getMinorVersion(): int
                /**
                 * Returns the profile class.
                 * @return One of the predefined profile class constants.
                 */
                // @ts-ignore
                getProfileClass(): int
                /**
                 * Returns the color space type.  Returns one of the color space type
                 * constants defined by the ColorSpace class.  This is the
                 * "input" color space of the profile.  The type defines the
                 * number of components of the color space and the interpretation,
                 * e.g. TYPE_RGB identifies a color space with three components - red,
                 * green, and blue.  It does not define the particular color
                 * characteristics of the space, e.g. the chromaticities of the
                 * primaries.
                 * @return One of the color space type constants defined in the
                 *  <CODE>ColorSpace</CODE> class.
                 */
                // @ts-ignore
                getColorSpaceType(): int
                /**
                 * Returns the color space type of the Profile Connection Space (PCS).
                 * Returns one of the color space type constants defined by the
                 * ColorSpace class.  This is the "output" color space of the
                 * profile.  For an input, display, or output profile useful
                 * for tagging colors or images, this will be either TYPE_XYZ or
                 * TYPE_Lab and should be interpreted as the corresponding specific
                 * color space defined in the ICC specification.  For a device
                 * link profile, this could be any of the color space type constants.
                 * @return One of the color space type constants defined in the
                 *  <CODE>ColorSpace</CODE> class.
                 */
                // @ts-ignore
                getPCSType(): int
                /**
                 * Write this ICC_Profile to a file.
                 * @param fileName The file to write the profile data to.
                 * @exception IOException If the file cannot be opened for writing
                 *  or an I/O error occurs while writing to the file.
                 */
                // @ts-ignore
                write(fileName: string): void
                /**
                 * Write this ICC_Profile to an OutputStream.
                 * @param s The stream to write the profile data to.
                 * @exception IOException If an I/O error occurs while writing to the
                 *  stream.
                 */
                // @ts-ignore
                write(s: java.io.OutputStream): void
                /**
                 * Returns a byte array corresponding to the data of this ICC_Profile.
                 * @return A byte array that contains the profile data.
                 * @see #setData(int, byte[])
                 */
                // @ts-ignore
                getData(): byte[]
                /**
                 * Returns a particular tagged data element from the profile as
                 * a byte array.  Elements are identified by signatures
                 * as defined in the ICC specification.  The signature
                 * icSigHead can be used to get the header.  This method is useful
                 * for advanced applets or applications which need to access
                 * profile data directly.
                 * @param tagSignature The ICC tag signature for the data element you
                 *  want to get.
                 * @return A byte array that contains the tagged data element. Returns
                 *  <code>null</code> if the specified tag doesn't exist.
                 * @see #setData(int, byte[])
                 */
                // @ts-ignore
                getData(tagSignature: number /*int*/): byte[]
                /**
                 * Sets a particular tagged data element in the profile from
                 * a byte array. The array should contain data in a format, corresponded
                 * to the {@code tagSignature} as defined in the ICC specification, section 10.
                 * This method is useful for advanced applets or applications which need to
                 * access profile data directly.
                 * @param tagSignature The ICC tag signature for the data element
                 *  you want to set.
                 * @param tagData the data to set for the specified tag signature
                 * @throws IllegalArgumentException if {#code tagSignature} is not a signature
                 *          as defined in the ICC specification.
                 * @throws IllegalArgumentException if a content of the {#code tagData}
                 *          array can not be interpreted as valid tag data, corresponding
                 *          to the {@code tagSignature}.
                 * @see #getData
                 */
                // @ts-ignore
                setData(tagSignature: number /*int*/, tagData: number /*byte*/[]): void
                /**
                 * Returns the number of color components in the "input" color
                 * space of this profile.  For example if the color space type
                 * of this profile is TYPE_RGB, then this method will return 3.
                 * @return The number of color components in the profile's input
                 *  color space.
                 * @throws ProfileDataException if color space is in the profile
                 *          is invalid
                 */
                // @ts-ignore
                getNumComponents(): int
                /**
                 * Resolves instances being deserialized into instances registered
                 * with CMM.
                 * @return ICC_Profile object for profile registered with CMM.
                 * @throws ObjectStreamException
                 *      never thrown, but mandated by the serialization spec.
                 * @since 1.3
                 */
                // @ts-ignore
                readResolve(): java.lang.Object
            }
        }
    }
}
