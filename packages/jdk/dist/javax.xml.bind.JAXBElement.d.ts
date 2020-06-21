declare namespace javax {
    namespace xml {
        namespace bind {
            /**
             * <p>JAXB representation of an Xml Element.</p>
             * <p>This class represents information about an Xml Element from both the element
             * declaration within a schema and the element instance value within an xml document
             * with the following properties
             * <ul>
             * <li>element's xml tag <b><tt>name</tt></b></li>
             * <li><b><tt>value</tt></b> represents the element instance's atttribute(s) and content model</li>
             * <li>element declaration's <b><tt>declaredType</tt></b> (<tt>xs:element @type</tt> attribute)</li>
             * <li><b><tt>scope</tt></b> of element declaration</li>
             * <li>boolean <b><tt>nil</tt></b> property. (element instance's <tt><b>xsi:nil</b></tt> attribute)</li>
             * </ul>
             * <p>The <tt>declaredType</tt> and <tt>scope</tt> property are the
             * JAXB class binding for the xml type definition.
             * </p>
             * <p><b><tt>Scope</tt></b> is either {@link GlobalScope} or the Java class representing the
             * complex type definition containing the schema element declaration.
             * </p>
             * <p>There is a property constraint that if <b><tt>value</tt></b> is <tt>null</tt>,
             * then <tt>nil</tt> must be <tt>true</tt>. The converse is not true to enable
             * representing a nil element with attribute(s). If <tt>nil</tt> is true, it is possible
             * that <tt>value</tt> is non-null so it can hold the value of the attributes
             * associated with a nil element.
             * </p>
             * @author Kohsuke Kawaguchi, Joe Fialli
             * @since JAXB 2.0
             */
            // @ts-ignore
            class JAXBElement<T> extends java.lang.Object implements java.io.Serializable {
                /**
                 * <p>Construct an xml element instance.</p>
                 * @param name          Java binding of xml element tag name
                 * @param declaredType  Java binding of xml element declaration's type
                 * @param scope
                 *       Java binding of scope of xml element declaration.
                 *       Passing null is the same as passing <tt>GlobalScope.class</tt>
                 * @param value
                 *       Java instance representing xml element's value.
                 * @see #getScope()
                 * @see #isTypeSubstituted()
                 */
                // @ts-ignore
                constructor(name: javax.xml.namespace.QName, declaredType: java.lang.Class<T>, scope: java.lang.Class<any>, value: T)
                /**
                 * Construct an xml element instance.
                 * This is just a convenience method for <tt>new JAXBElement(name,declaredType,GlobalScope.class,value)</tt>
                 */
                // @ts-ignore
                constructor(name: javax.xml.namespace.QName, declaredType: java.lang.Class<T>, value: T)
                /**
                 * xml element tag name
                 */
                // @ts-ignore
                readonly name: javax.xml.namespace.QName
                /**
                 * Java datatype binding for xml element declaration's type.
                 */
                // @ts-ignore
                readonly declaredType: java.lang.Class<T>
                /**
                 * Scope of xml element declaration representing this xml element instance.
                 * Can be one of the following values:
                 * - {@link GlobalScope} for global xml element declaration.
                 * - local element declaration has a scope set to the Java class
                 * representation of complex type defintion containing
                 * xml element declaration.
                 */
                // @ts-ignore
                readonly scope: java.lang.Class<any>
                /**
                 * xml element value.
                 * Represents content model and attributes of an xml element instance.
                 */
                // @ts-ignore
                value: T
                /**
                 * true iff the xml element instance has xsi:nil="true".
                 */
                // @ts-ignore
                nil: boolean
                /**
                 * Returns the Java binding of the xml element declaration's type attribute.
                 */
                // @ts-ignore
                public getDeclaredType(): java.lang.Class<T>
                /**
                 * Returns the xml element tag name.
                 */
                // @ts-ignore
                public getName(): javax.xml.namespace.QName
                /**
                 * <p>Set the content model and attributes of this xml element.</p>
                 * <p>When this property is set to <tt>null</tt>, <tt>isNil()</tt> must by <tt>true</tt>.
                 * Details of constraint are described at {@link #isNil()}.</p>
                 * @see #isTypeSubstituted()
                 */
                // @ts-ignore
                public setValue(t: T): void
                /**
                 * <p>Return the content model and attribute values for this element.</p>
                 * <p>See {@link #isNil()} for a description of a property constraint when
                 * this value is <tt>null</tt></p>
                 */
                // @ts-ignore
                public getValue(): T
                /**
                 * Returns scope of xml element declaration.
                 * @see #isGlobalScope()
                 * @return <tt>GlobalScope.class</tt> if this element is of global scope.
                 */
                // @ts-ignore
                public getScope(): java.lang.Class<any>
                /**
                 * <p>Returns <tt>true</tt> iff this element instance content model
                 * is nil.</p>
                 * <p>This property always returns <tt>true</tt> when {@link #getValue()} is null.
                 * Note that the converse is not true, when this property is <tt>true</tt>,
                 * {@link #getValue()} can contain a non-null value for attribute(s). It is
                 * valid for a nil xml element to have attribute(s).</p>
                 */
                // @ts-ignore
                public isNil(): boolean
                /**
                 * <p>Set whether this element has nil content.</p>
                 * @see #isNil()
                 */
                // @ts-ignore
                public setNil(value: boolean): void
                /**
                 * Returns true iff this xml element declaration is global.
                 */
                // @ts-ignore
                public isGlobalScope(): boolean
                /**
                 * Returns true iff this xml element instance's value has a different
                 * type than xml element declaration's declared type.
                 */
                // @ts-ignore
                public isTypeSubstituted(): boolean
            }
        }
    }
}
