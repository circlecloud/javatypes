declare namespace javax {
    namespace swing {
        namespace text {
            namespace DefaultStyledDocument {
                /**
                 * Specification for building elements.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 */
                // @ts-ignore
                class ElementSpec extends java.lang.Object {
                    /**
                     * Constructor useful for markup when the markup will not
                     * be stored in the document.
                     * @param a the attributes for the element
                     * @param type the type of the element (StartTagType, EndTagType,
                     *   ContentType)
                     */
                    // @ts-ignore
                    constructor(a: javax.swing.text.AttributeSet, type: number /*short*/)
                    /**
                     * Constructor for parsing inside the document when
                     * the data has already been added, but len information
                     * is needed.
                     * @param a the attributes for the element
                     * @param type the type of the element (StartTagType, EndTagType,
                     *   ContentType)
                     * @param len the length &gt;= 0
                     */
                    // @ts-ignore
                    constructor(a: javax.swing.text.AttributeSet, type: number /*short*/, len: number /*int*/)
                    /**
                     * Constructor for creating a spec externally for batch
                     * input of content and markup into the document.
                     * @param a the attributes for the element
                     * @param type the type of the element (StartTagType, EndTagType,
                     *   ContentType)
                     * @param txt the text for the element
                     * @param offs the offset into the text &gt;= 0
                     * @param len the length of the text &gt;= 0
                     */
                    // @ts-ignore
                    constructor(a: javax.swing.text.AttributeSet, type: number /*short*/, txt: string[], offs: number /*int*/, len: number /*int*/)
                    /**
                     * A possible value for getType.  This specifies
                     * that this record type is a start tag and
                     * represents markup that specifies the start
                     * of an element.
                     */
                    // @ts-ignore
                    readonly StartTagType: number /*short*/
                    /**
                     * A possible value for getType.  This specifies
                     * that this record type is a end tag and
                     * represents markup that specifies the end
                     * of an element.
                     */
                    // @ts-ignore
                    readonly EndTagType: number /*short*/
                    /**
                     * A possible value for getType.  This specifies
                     * that this record type represents content.
                     */
                    // @ts-ignore
                    readonly ContentType: number /*short*/
                    /**
                     * A possible value for getDirection.  This specifies
                     * that the data associated with this record should
                     * be joined to what precedes it.
                     */
                    // @ts-ignore
                    readonly JoinPreviousDirection: number /*short*/
                    /**
                     * A possible value for getDirection.  This specifies
                     * that the data associated with this record should
                     * be joined to what follows it.
                     */
                    // @ts-ignore
                    readonly JoinNextDirection: number /*short*/
                    /**
                     * A possible value for getDirection.  This specifies
                     * that the data associated with this record should
                     * be used to originate a new element.  This would be
                     * the normal value.
                     */
                    // @ts-ignore
                    readonly OriginateDirection: number /*short*/
                    /**
                     * A possible value for getDirection.  This specifies
                     * that the data associated with this record should
                     * be joined to the fractured element.
                     */
                    // @ts-ignore
                    readonly JoinFractureDirection: number /*short*/
                    /**
                     * Sets the element type.
                     * @param type the type of the element (StartTagType, EndTagType,
                     *   ContentType)
                     */
                    // @ts-ignore
                    setType(type: number /*short*/): void
                    /**
                     * Gets the element type.
                     * @return the type of the element (StartTagType, EndTagType,
                     *   ContentType)
                     */
                    // @ts-ignore
                    getType(): short
                    /**
                     * Sets the direction.
                     * @param direction the direction (JoinPreviousDirection,
                     *    JoinNextDirection)
                     */
                    // @ts-ignore
                    setDirection(direction: number /*short*/): void
                    /**
                     * Gets the direction.
                     * @return the direction (JoinPreviousDirection, JoinNextDirection)
                     */
                    // @ts-ignore
                    getDirection(): short
                    /**
                     * Gets the element attributes.
                     * @return the attribute set
                     */
                    // @ts-ignore
                    getAttributes(): javax.swing.text.AttributeSet
                    /**
                     * Gets the array of characters.
                     * @return the array
                     */
                    // @ts-ignore
                    getArray(): char[]
                    /**
                     * Gets the starting offset.
                     * @return the offset &gt;= 0
                     */
                    // @ts-ignore
                    getOffset(): int
                    /**
                     * Gets the length.
                     * @return the length &gt;= 0
                     */
                    // @ts-ignore
                    getLength(): int
                    /**
                     * Converts the element to a string.
                     * @return the string
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
