declare namespace javax {
    namespace print {
        namespace attribute {
            /**
             * Class URISyntax is an abstract base class providing the common
             * implementation of all attributes whose value is a Uniform Resource
             * Identifier (URI). Once constructed, a URI attribute's value is immutable.
             * <P>
             * @author Alan Kaminsky
             */
            // @ts-ignore
            abstract class URISyntax extends java.lang.Object implements java.io.Serializable, java.lang.Cloneable {
                /**
                 * Constructs a URI attribute with the specified URI.
                 * @param uri  URI.
                 * @exception NullPointerException
                 *      (unchecked exception) Thrown if <CODE>uri</CODE> is null.
                 */
                // @ts-ignore
                constructor(uri: java.net.URI)
                /**
                 * Returns this URI attribute's URI value.
                 * @return the URI.
                 */
                // @ts-ignore
                public getURI(): java.net.URI
                /**
                 * Returns a hashcode for this URI attribute.
                 * @return A hashcode value for this object.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns whether this URI attribute is equivalent to the passed in
                 * object.
                 * To be equivalent, all of the following conditions must be true:
                 * <OL TYPE=1>
                 * <LI>
                 * <CODE>object</CODE> is not null.
                 * <LI>
                 * <CODE>object</CODE> is an instance of class URISyntax.
                 * <LI>
                 * This URI attribute's underlying URI and <CODE>object</CODE>'s
                 * underlying URI are equal.
                 * </OL>
                 * @param object  Object to compare to.
                 * @return True if <CODE>object</CODE> is equivalent to this URI
                 *           attribute, false otherwise.
                 */
                // @ts-ignore
                public equals(object: java.lang.Object | any): boolean
                /**
                 * Returns a String identifying this URI attribute. The String is the
                 * string representation of the attribute's underlying URI.
                 * @return A String identifying this object.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
