declare namespace java {
    namespace awt {
        namespace font {
            /**
             * The <code>OpenType</code> interface represents OpenType and
             * TrueType fonts.  This interface makes it possible to obtain
             * <i>sfnt</i> tables from the font.  A particular
             * <code>Font</code> object can implement this interface.
             * <p>
             * For more information on TrueType and OpenType fonts, see the
             * OpenType specification.
             * ( <a href="http://www.microsoft.com/typography/otspec/">http://www.microsoft.com/typography/otspec/</a> ).
             */
            // @ts-ignore
            interface OpenType {
                /**
                 * Character to glyph mapping.  Table tag "cmap" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_CMAP: number /*int*/
                /**
                 * Font header.  Table tag "head" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_HEAD: number /*int*/
                /**
                 * Naming table.  Table tag "name" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_NAME: number /*int*/
                /**
                 * Glyph data.  Table tag "glyf" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_GLYF: number /*int*/
                /**
                 * Maximum profile.  Table tag "maxp" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_MAXP: number /*int*/
                /**
                 * CVT preprogram.  Table tag "prep" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_PREP: number /*int*/
                /**
                 * Horizontal metrics.  Table tag "hmtx" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_HMTX: number /*int*/
                /**
                 * Kerning.  Table tag "kern" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_KERN: number /*int*/
                /**
                 * Horizontal device metrics.  Table tag "hdmx" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_HDMX: number /*int*/
                /**
                 * Index to location.  Table tag "loca" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_LOCA: number /*int*/
                /**
                 * PostScript Information.  Table tag "post" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_POST: number /*int*/
                /**
                 * OS/2 and Windows specific metrics.  Table tag "OS/2"
                 * in the Open Type Specification.
                 */
                // @ts-ignore
                readonly TAG_OS2: number /*int*/
                /**
                 * Control value table.  Table tag "cvt "
                 * in the Open Type Specification.
                 */
                // @ts-ignore
                readonly TAG_CVT: number /*int*/
                /**
                 * Grid-fitting and scan conversion procedure.  Table tag
                 * "gasp" in the Open Type Specification.
                 */
                // @ts-ignore
                readonly TAG_GASP: number /*int*/
                /**
                 * Vertical device metrics.  Table tag "VDMX" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_VDMX: number /*int*/
                /**
                 * Vertical metrics.  Table tag "vmtx" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_VMTX: number /*int*/
                /**
                 * Vertical metrics header.  Table tag "vhea" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_VHEA: number /*int*/
                /**
                 * Horizontal metrics header.  Table tag "hhea" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_HHEA: number /*int*/
                /**
                 * Adobe Type 1 font data.  Table tag "typ1" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_TYP1: number /*int*/
                /**
                 * Baseline table.  Table tag "bsln" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_BSLN: number /*int*/
                /**
                 * Glyph substitution.  Table tag "GSUB" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_GSUB: number /*int*/
                /**
                 * Digital signature.  Table tag "DSIG" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_DSIG: number /*int*/
                /**
                 * Font program.   Table tag "fpgm" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_FPGM: number /*int*/
                /**
                 * Font variation.   Table tag "fvar" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_FVAR: number /*int*/
                /**
                 * Glyph variation.  Table tag "gvar" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_GVAR: number /*int*/
                /**
                 * Compact font format (Type1 font).  Table tag
                 * "CFF " in the Open Type Specification.
                 */
                // @ts-ignore
                readonly TAG_CFF: number /*int*/
                /**
                 * Multiple master supplementary data.  Table tag
                 * "MMSD" in the Open Type Specification.
                 */
                // @ts-ignore
                readonly TAG_MMSD: number /*int*/
                /**
                 * Multiple master font metrics.  Table tag
                 * "MMFX" in the Open Type Specification.
                 */
                // @ts-ignore
                readonly TAG_MMFX: number /*int*/
                /**
                 * Baseline data.  Table tag "BASE" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_BASE: number /*int*/
                /**
                 * Glyph definition.  Table tag "GDEF" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_GDEF: number /*int*/
                /**
                 * Glyph positioning.  Table tag "GPOS" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_GPOS: number /*int*/
                /**
                 * Justification.  Table tag "JSTF" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_JSTF: number /*int*/
                /**
                 * Embedded bitmap data.  Table tag "EBDT" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_EBDT: number /*int*/
                /**
                 * Embedded bitmap location.  Table tag "EBLC" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_EBLC: number /*int*/
                /**
                 * Embedded bitmap scaling.  Table tag "EBSC" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_EBSC: number /*int*/
                /**
                 * Linear threshold.  Table tag "LTSH" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_LTSH: number /*int*/
                /**
                 * PCL 5 data.  Table tag "PCLT" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_PCLT: number /*int*/
                /**
                 * Accent attachment.  Table tag "acnt" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_ACNT: number /*int*/
                /**
                 * Axis variation.  Table tag "avar" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_AVAR: number /*int*/
                /**
                 * Bitmap data.  Table tag "bdat" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_BDAT: number /*int*/
                /**
                 * Bitmap location.  Table tag "bloc" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_BLOC: number /*int*/
                /**
                 * CVT variation.  Table tag "cvar" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_CVAR: number /*int*/
                /**
                 * Feature name.  Table tag "feat" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_FEAT: number /*int*/
                /**
                 * Font descriptors.  Table tag "fdsc" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_FDSC: number /*int*/
                /**
                 * Font metrics.  Table tag "fmtx" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_FMTX: number /*int*/
                /**
                 * Justification.  Table tag "just" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_JUST: number /*int*/
                /**
                 * Ligature caret.   Table tag "lcar" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_LCAR: number /*int*/
                /**
                 * Glyph metamorphosis.  Table tag "mort" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_MORT: number /*int*/
                /**
                 * Optical bounds.  Table tag "opbd" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_OPBD: number /*int*/
                /**
                 * Glyph properties.  Table tag "prop" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_PROP: number /*int*/
                /**
                 * Tracking.  Table tag "trak" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                readonly TAG_TRAK: number /*int*/
                /**
                 * Returns the version of the <code>OpenType</code> font.
                 * 1.0 is represented as 0x00010000.
                 * @return the version of the <code>OpenType</code> font.
                 */
                // @ts-ignore
                getVersion(): number /*int*/
                /**
                 * Returns the table as an array of bytes for a specified tag.
                 * Tags for sfnt tables include items like <i>cmap</i>,
                 * <i>name</i> and <i>head</i>.  The <code>byte</code> array
                 * returned is a copy of the font data in memory.
                 * @param sfntTag a four-character code as a 32-bit integer
                 * @return a <code>byte</code> array that is the table that
                 *  contains the font data corresponding to the specified
                 *  tag.
                 */
                // @ts-ignore
                getFontTable(sfntTag: number /*int*/): number /*byte*/[]
                /**
                 * Returns the table as an array of bytes for a specified tag.
                 * Tags for sfnt tables include items like <i>cmap</i>,
                 * <i>name</i> and <i>head</i>.  The byte array returned is a
                 * copy of the font data in memory.
                 * @param strSfntTag a four-character code as a
                 *             <code>String</code>
                 * @return a <code>byte</code> array that is the table that
                 *  contains the font data corresponding to the specified
                 *  tag.
                 */
                // @ts-ignore
                getFontTable(strSfntTag: java.lang.String | string): number /*byte*/[]
                /**
                 * Returns a subset of the table as an array of bytes
                 * for a specified tag.  Tags for sfnt tables include
                 * items like <i>cmap</i>, <i>name</i> and <i>head</i>.
                 * The byte array returned is a copy of the font data in
                 * memory.
                 * @param sfntTag a four-character code as a 32-bit integer
                 * @param offset index of first byte to return from table
                 * @param count number of bytes to return from table
                 * @return a subset of the table corresponding to
                 *             <code>sfntTag</code> and containing the bytes
                 *             starting at <code>offset</code> byte and including
                 *             <code>count</code> bytes.
                 */
                // @ts-ignore
                getFontTable(sfntTag: number /*int*/, offset: number /*int*/, count: number /*int*/): number /*byte*/[]
                /**
                 * Returns a subset of the table as an array of bytes
                 * for a specified tag.  Tags for sfnt tables include items
                 * like <i>cmap</i>, <i>name</i> and <i>head</i>. The
                 * <code>byte</code> array returned is a copy of the font
                 * data in memory.
                 * @param strSfntTag a four-character code as a
                 *  <code>String</code>
                 * @param offset index of first byte to return from table
                 * @param count  number of bytes to return from table
                 * @return a subset of the table corresponding to
                 *             <code>strSfntTag</code> and containing the bytes
                 *             starting at <code>offset</code> byte and including
                 *             <code>count</code> bytes.
                 */
                // @ts-ignore
                getFontTable(strSfntTag: java.lang.String | string, offset: number /*int*/, count: number /*int*/): number /*byte*/[]
                /**
                 * Returns the size of the table for a specified tag. Tags for sfnt
                 * tables include items like <i>cmap</i>, <i>name</i> and <i>head</i>.
                 * @param sfntTag a four-character code as a 32-bit integer
                 * @return the size of the table corresponding to the specified
                 *  tag.
                 */
                // @ts-ignore
                getFontTableSize(sfntTag: number /*int*/): number /*int*/
                /**
                 * Returns the size of the table for a specified tag. Tags for sfnt
                 * tables include items like <i>cmap</i>, <i>name</i> and <i>head</i>.
                 * @param strSfntTag a four-character code as a
                 *  <code>String</code>
                 * @return the size of the table corresponding to the specified tag.
                 */
                // @ts-ignore
                getFontTableSize(strSfntTag: java.lang.String | string): number /*int*/
            }
        }
    }
}
