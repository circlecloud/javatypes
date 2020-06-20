declare namespace java {
    namespace awt {
        namespace font {
            /**
             * The <code>TransformAttribute</code> class provides an immutable
             * wrapper for a transform so that it is safe to use as an attribute.
             */
            // @ts-ignore
            class TransformAttribute extends java.lang.Object implements java.io.Serializable {
                /**
                 * Wraps the specified transform.  The transform is cloned and a
                 * reference to the clone is kept.  The original transform is unchanged.
                 * If null is passed as the argument, this constructor behaves as though
                 * it were the identity transform.  (Note that it is preferable to use
                 * {@link #IDENTITY} in this case.)
                 * @param transform the specified {#link AffineTransform} to be wrapped,
                 *  or null.
                 */
                // @ts-ignore
                constructor(transform: java.awt.geom.AffineTransform)
                /**
                 * A <code>TransformAttribute</code> representing the identity transform.
                 * @since 1.6
                 */
                // @ts-ignore
                readonly IDENTITY: java.awt.font.TransformAttribute
                /**
                 * Returns a copy of the wrapped transform.
                 * @return a <code>AffineTransform</code> that is a copy of the wrapped
                 *  transform of this <code>TransformAttribute</code>.
                 */
                // @ts-ignore
                getTransform(): java.awt.geom.AffineTransform
                /**
                 * Returns <code>true</code> if the wrapped transform is
                 * an identity transform.
                 * @return <code>true</code> if the wrapped transform is
                 *  an identity transform; <code>false</code> otherwise.
                 * @since 1.4
                 */
                // @ts-ignore
                isIdentity(): boolean
                /**
                 * @since 1.6
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns <code>true</code> if rhs is a <code>TransformAttribute</code>
                 * whose transform is equal to this <code>TransformAttribute</code>'s
                 * transform.
                 * @param rhs the object to compare to
                 * @return <code>true</code> if the argument is a <code>TransformAttribute</code>
                 *  whose transform is equal to this <code>TransformAttribute</code>'s
                 *  transform.
                 * @since 1.6
                 */
                // @ts-ignore
                equals(rhs: any): boolean
            }
        }
    }
}
