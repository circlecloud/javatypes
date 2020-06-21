declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * AbstractWriter is an abstract class that actually
             * does the work of writing out the element tree
             * including the attributes.  In terms of how much is
             * written out per line, the writer defaults to 100.
             * But this value can be set by subclasses.
             * @author Sunita Mani
             */
            // @ts-ignore
            abstract class AbstractWriter extends java.lang.Object {
                /**
                 * Creates a new AbstractWriter.
                 * Initializes the ElementIterator with the default
                 * root of the document.
                 * @param w a Writer.
                 * @param doc a Document
                 */
                // @ts-ignore
                constructor(w: java.io.Writer, doc: javax.swing.text.Document)
                /**
                 * Creates a new AbstractWriter.
                 * Initializes the ElementIterator with the
                 * element passed in.
                 * @param w a Writer
                 * @param doc an Element
                 * @param pos The location in the document to fetch the
                 *    content.
                 * @param len The amount to write out.
                 */
                // @ts-ignore
                constructor(w: java.io.Writer, doc: javax.swing.text.Document, pos: number /*int*/, len: number /*int*/)
                /**
                 * Creates a new AbstractWriter.
                 * Initializes the ElementIterator with the
                 * element passed in.
                 * @param w a Writer
                 * @param root an Element
                 */
                // @ts-ignore
                constructor(w: java.io.Writer, root: javax.swing.text.Element)
                /**
                 * Creates a new AbstractWriter.
                 * Initializes the ElementIterator with the
                 * element passed in.
                 * @param w a Writer
                 * @param root an Element
                 * @param pos The location in the document to fetch the
                 *    content.
                 * @param len The amount to write out.
                 */
                // @ts-ignore
                constructor(w: java.io.Writer, root: javax.swing.text.Element, pos: number /*int*/, len: number /*int*/)
                /**
                 * How the text packages models newlines.
                 * @see #getLineSeparator
                 */
                // @ts-ignore
                static readonly NEWLINE: string
                /**
                 * Returns the first offset to be output.
                 * @since 1.3
                 */
                // @ts-ignore
                public getStartOffset(): number /*int*/
                /**
                 * Returns the last offset to be output.
                 * @since 1.3
                 */
                // @ts-ignore
                public getEndOffset(): number /*int*/
                /**
                 * Fetches the ElementIterator.
                 * @return the ElementIterator.
                 */
                // @ts-ignore
                getElementIterator(): javax.swing.text.ElementIterator
                /**
                 * Returns the Writer that is used to output the content.
                 * @since 1.3
                 */
                // @ts-ignore
                getWriter(): java.io.Writer
                /**
                 * Fetches the document.
                 * @return the Document.
                 */
                // @ts-ignore
                getDocument(): javax.swing.text.Document
                /**
                 * This method determines whether the current element
                 * is in the range specified.  When no range is specified,
                 * the range is initialized to be the entire document.
                 * inRange() returns true if the range specified intersects
                 * with the element's range.
                 * @param next an Element.
                 * @return boolean that indicates whether the element
                 *          is in the range.
                 */
                // @ts-ignore
                inRange(next: javax.swing.text.Element): boolean
                /**
                 * This abstract method needs to be implemented
                 * by subclasses.  Its responsibility is to
                 * iterate over the elements and use the write()
                 * methods to generate output in the desired format.
                 */
                // @ts-ignore
                abstract write(): void
                /**
                 * Returns the text associated with the element.
                 * The assumption here is that the element is a
                 * leaf element.  Throws a BadLocationException
                 * when encountered.
                 * @param elem an <code>Element</code>
                 * @exception BadLocationException if pos represents an invalid
                 *             location within the document
                 * @return the text as a <code>String</code>
                 */
                // @ts-ignore
                getText(elem: javax.swing.text.Element): string
                /**
                 * Writes out text.  If a range is specified when the constructor
                 * is invoked, then only the appropriate range of text is written
                 * out.
                 * @param elem an Element.
                 * @exception IOException on any I/O error
                 * @exception BadLocationException if pos represents an invalid
                 *             location within the document.
                 */
                // @ts-ignore
                text(elem: javax.swing.text.Element): void
                /**
                 * Enables subclasses to set the number of characters they
                 * want written per line.   The default is 100.
                 * @param l the maximum line length.
                 */
                // @ts-ignore
                setLineLength(l: number /*int*/): void
                /**
                 * Returns the maximum line length.
                 * @since 1.3
                 */
                // @ts-ignore
                getLineLength(): number /*int*/
                /**
                 * Sets the current line length.
                 * @since 1.3
                 */
                // @ts-ignore
                setCurrentLineLength(length: number /*int*/): void
                /**
                 * Returns the current line length.
                 * @since 1.3
                 */
                // @ts-ignore
                getCurrentLineLength(): number /*int*/
                /**
                 * Returns true if the current line should be considered empty. This
                 * is true when <code>getCurrentLineLength</code> == 0 ||
                 * <code>indent</code> has been invoked on an empty line.
                 * @since 1.3
                 */
                // @ts-ignore
                isLineEmpty(): boolean
                /**
                 * Sets whether or not lines can be wrapped. This can be toggled
                 * during the writing of lines. For example, outputting HTML might
                 * set this to false when outputting a quoted string.
                 * @since 1.3
                 */
                // @ts-ignore
                setCanWrapLines(newValue: boolean): void
                /**
                 * Returns whether or not the lines can be wrapped. If this is false
                 * no lineSeparator's will be output.
                 * @since 1.3
                 */
                // @ts-ignore
                getCanWrapLines(): boolean
                /**
                 * Enables subclasses to specify how many spaces an indent
                 * maps to. When indentation takes place, the indent level
                 * is multiplied by this mapping.  The default is 2.
                 * @param space an int representing the space to indent mapping.
                 */
                // @ts-ignore
                setIndentSpace(space: number /*int*/): void
                /**
                 * Returns the amount of space to indent.
                 * @since 1.3
                 */
                // @ts-ignore
                getIndentSpace(): number /*int*/
                /**
                 * Sets the String used to represent newlines. This is initialized
                 * in the constructor from either the Document, or the System property
                 * line.separator.
                 * @since 1.3
                 */
                // @ts-ignore
                public setLineSeparator(value: java.lang.String | string): void
                /**
                 * Returns the string used to represent newlines.
                 * @since 1.3
                 */
                // @ts-ignore
                public getLineSeparator(): string
                /**
                 * Increments the indent level. If indenting would cause
                 * <code>getIndentSpace()</code> *<code>getIndentLevel()</code> to be &gt;
                 * than <code>getLineLength()</code> this will not cause an indent.
                 */
                // @ts-ignore
                incrIndent(): void
                /**
                 * Decrements the indent level.
                 */
                // @ts-ignore
                decrIndent(): void
                /**
                 * Returns the current indentation level. That is, the number of times
                 * <code>incrIndent</code> has been invoked minus the number of times
                 * <code>decrIndent</code> has been invoked.
                 * @since 1.3
                 */
                // @ts-ignore
                getIndentLevel(): number /*int*/
                /**
                 * Does indentation. The number of spaces written
                 * out is indent level times the space to map mapping. If the current
                 * line is empty, this will not make it so that the current line is
                 * still considered empty.
                 * @exception IOException on any I/O error
                 */
                // @ts-ignore
                indent(): void
                /**
                 * Writes out a character. This is implemented to invoke
                 * the <code>write</code> method that takes a char[].
                 * @param ch a char.
                 * @exception IOException on any I/O error
                 */
                // @ts-ignore
                write(ch: string): void
                /**
                 * Writes out a string. This is implemented to invoke the
                 * <code>write</code> method that takes a char[].
                 * @param content a String.
                 * @exception IOException on any I/O error
                 */
                // @ts-ignore
                write(content: java.lang.String | string): void
                /**
                 * Writes the line separator. This invokes <code>output</code> directly
                 * as well as setting the <code>lineLength</code> to 0.
                 * @since 1.3
                 */
                // @ts-ignore
                writeLineSeparator(): void
                /**
                 * All write methods call into this one. If <code>getCanWrapLines()</code>
                 * returns false, this will call <code>output</code> with each sequence
                 * of <code>chars</code> that doesn't contain a NEWLINE, followed
                 * by a call to <code>writeLineSeparator</code>. On the other hand,
                 * if <code>getCanWrapLines()</code> returns true, this will split the
                 * string, as necessary, so <code>getLineLength</code> is honored.
                 * The only exception is if the current string contains no whitespace,
                 * and won't fit in which case the line length will exceed
                 * <code>getLineLength</code>.
                 * @since 1.3
                 */
                // @ts-ignore
                write(chars: string[], startIndex: number /*int*/, length: number /*int*/): void
                /**
                 * Writes out the set of attributes as " &lt;name&gt;=&lt;value&gt;"
                 * pairs. It throws an IOException when encountered.
                 * @param attr an AttributeSet.
                 * @exception IOException on any I/O error
                 */
                // @ts-ignore
                writeAttributes(attr: javax.swing.text.AttributeSet): void
                /**
                 * The last stop in writing out content. All the write methods eventually
                 * make it to this method, which invokes <code>write</code> on the
                 * Writer.
                 * <p>This method also updates the line length based on
                 * <code>length</code>. If this is invoked to output a newline, the
                 * current line length will need to be reset as will no longer be
                 * valid. If it is up to the caller to do this. Use
                 * <code>writeLineSeparator</code> to write out a newline, which will
                 * property update the current line length.
                 * @since 1.3
                 */
                // @ts-ignore
                output(content: string[], start: number /*int*/, length: number /*int*/): void
            }
        }
    }
}
