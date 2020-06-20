declare namespace java {
    namespace awt {
        namespace font {
            namespace TextLayout {
                /**
                 * Defines a policy for determining the strong caret location.
                 * This class contains one method, <code>getStrongCaret</code>, which
                 * is used to specify the policy that determines the strong caret in
                 * dual-caret text.  The strong caret is used to move the caret to the
                 * left or right. Instances of this class can be passed to
                 * <code>getCaretShapes</code>, <code>getNextLeftHit</code> and
                 * <code>getNextRightHit</code> to customize strong caret
                 * selection.
                 * <p>
                 * To specify alternate caret policies, subclass <code>CaretPolicy</code>
                 * and override <code>getStrongCaret</code>.  <code>getStrongCaret</code>
                 * should inspect the two <code>TextHitInfo</code> arguments and choose
                 * one of them as the strong caret.
                 * <p>
                 * Most clients do not need to use this class.
                 */
                // @ts-ignore
                class CaretPolicy extends java.lang.Object {
                    /**
                     * Constructs a <code>CaretPolicy</code>.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Chooses one of the specified <code>TextHitInfo</code> instances as
                     * a strong caret in the specified <code>TextLayout</code>.
                     * @param hit1 a valid hit in <code>layout</code>
                     * @param hit2 a valid hit in <code>layout</code>
                     * @param layout the <code>TextLayout</code> in which
                     *         <code>hit1</code> and <code>hit2</code> are used
                     * @return <code>hit1</code> or <code>hit2</code>
                     *         (or an equivalent <code>TextHitInfo</code>), indicating the
                     *         strong caret.
                     */
                    // @ts-ignore
                    getStrongCaret(hit1: java.awt.font.TextHitInfo, hit2: java.awt.font.TextHitInfo, layout: java.awt.font.TextLayout): java.awt.font.TextHitInfo
                }
            }
        }
    }
}
