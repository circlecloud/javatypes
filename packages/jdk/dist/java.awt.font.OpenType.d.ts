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
                
                /**
                 * Font header.  Table tag "head" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Naming table.  Table tag "name" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Glyph data.  Table tag "glyf" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Maximum profile.  Table tag "maxp" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * CVT preprogram.  Table tag "prep" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Horizontal metrics.  Table tag "hmtx" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Kerning.  Table tag "kern" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Horizontal device metrics.  Table tag "hdmx" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Index to location.  Table tag "loca" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * PostScript Information.  Table tag "post" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * OS/2 and Windows specific metrics.  Table tag "OS/2"
                 * in the Open Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Control value table.  Table tag "cvt "
                 * in the Open Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Grid-fitting and scan conversion procedure.  Table tag
                 * "gasp" in the Open Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Vertical device metrics.  Table tag "VDMX" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Vertical metrics.  Table tag "vmtx" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Vertical metrics header.  Table tag "vhea" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Horizontal metrics header.  Table tag "hhea" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Adobe Type 1 font data.  Table tag "typ1" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Baseline table.  Table tag "bsln" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Glyph substitution.  Table tag "GSUB" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Digital signature.  Table tag "DSIG" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Font program.   Table tag "fpgm" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Font variation.   Table tag "fvar" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Glyph variation.  Table tag "gvar" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Compact font format (Type1 font).  Table tag
                 * "CFF " in the Open Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Multiple master supplementary data.  Table tag
                 * "MMSD" in the Open Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Multiple master font metrics.  Table tag
                 * "MMFX" in the Open Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Baseline data.  Table tag "BASE" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Glyph definition.  Table tag "GDEF" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Glyph positioning.  Table tag "GPOS" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Justification.  Table tag "JSTF" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Embedded bitmap data.  Table tag "EBDT" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Embedded bitmap location.  Table tag "EBLC" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Embedded bitmap scaling.  Table tag "EBSC" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Linear threshold.  Table tag "LTSH" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * PCL 5 data.  Table tag "PCLT" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Accent attachment.  Table tag "acnt" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Axis variation.  Table tag "avar" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Bitmap data.  Table tag "bdat" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Bitmap location.  Table tag "bloc" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * CVT variation.  Table tag "cvar" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Feature name.  Table tag "feat" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Font descriptors.  Table tag "fdsc" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Font metrics.  Table tag "fmtx" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Justification.  Table tag "just" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Ligature caret.   Table tag "lcar" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Glyph metamorphosis.  Table tag "mort" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Optical bounds.  Table tag "opbd" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Glyph properties.  Table tag "prop" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Tracking.  Table tag "trak" in the Open
                 * Type Specification.
                 */
                // @ts-ignore
                
                /**
                 * Returns the version of the <code>OpenType</code> font.
                 * 1.0 is represented as 0x00010000.
                 * @return the version of the <code>OpenType</code> font.
                 */
                // @ts-ignore
                getVersion(): int
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
                getFontTable(sfntTag: number /*int*/): byte[]
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
                getFontTable(strSfntTag: string): byte[]
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
                getFontTable(sfntTag: number /*int*/, offset: number /*int*/, count: number /*int*/): byte[]
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
                getFontTable(strSfntTag: string, offset: number /*int*/, count: number /*int*/): byte[]
                /**
                 * Returns the size of the table for a specified tag. Tags for sfnt
                 * tables include items like <i>cmap</i>, <i>name</i> and <i>head</i>.
                 * @param sfntTag a four-character code as a 32-bit integer
                 * @return the size of the table corresponding to the specified
                 *  tag.
                 */
                // @ts-ignore
                getFontTableSize(sfntTag: number /*int*/): int
                /**
                 * Returns the size of the table for a specified tag. Tags for sfnt
                 * tables include items like <i>cmap</i>, <i>name</i> and <i>head</i>.
                 * @param strSfntTag a four-character code as a
                 *  <code>String</code>
                 * @return the size of the table corresponding to the specified tag.
                 */
                // @ts-ignore
                getFontTableSize(strSfntTag: string): int
            }
        }
    }
}
