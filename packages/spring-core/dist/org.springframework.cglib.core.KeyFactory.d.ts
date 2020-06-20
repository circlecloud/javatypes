declare namespace org {
    namespace springframework {
        namespace cglib {
            namespace core {
                /**
                 * Generates classes to handle multi-valued keys, for use in things such as Maps and Sets.
                 * Code for <code>equals</code> and <code>hashCode</code> methods follow the
                 * the rules laid out in <i>Effective Java</i> by Joshua Bloch.
                 * <p>
                 * To generate a <code>KeyFactory</code>, you need to supply an interface which
                 * describes the structure of the key. The interface should have a
                 * single method named <code>newInstance</code>, which returns an
                 * <code>Object</code>. The arguments array can be
                 * <i>anything</i>--Objects, primitive values, or single or
                 * multi-dimension arrays of either. For example:
                 * <p><pre>
                 * private interface IntStringKey {
                 * public Object newInstance(int i, String s);
                 * }
                 * </pre><p>
                 * Once you have made a <code>KeyFactory</code>, you generate a new key by calling
                 * the <code>newInstance</code> method defined by your interface.
                 * <p><pre>
                 * IntStringKey factory = (IntStringKey)KeyFactory.create(IntStringKey.class);
                 * Object key1 = factory.newInstance(4, "Hello");
                 * Object key2 = factory.newInstance(4, "World");
                 * </pre><p>
                 * <b>Note:</b>
                 * <code>hashCode</code> equality between two keys <code>key1</code> and <code>key2</code> is only guaranteed if
                 * <code>key1.equals(key2)</code> <i>and</i> the keys were produced by the same factory.
                 * @version $Id: KeyFactory.java,v 1.26 2006/03/05 02:43:19 herbyderby Exp $
                 */
                // @ts-ignore
                class KeyFactory extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly CLASS_BY_NAME: Customizer
                    // @ts-ignore
                    readonly STORE_CLASS_AS_STRING: FieldTypeCustomizer
                    /**
                     * {@link Type#hashCode()} is very expensive as it traverses full descriptor to calculate hash code.
                     * This customizer uses {@link Type#getSort()} as a hash code.
                     */
                    // @ts-ignore
                    readonly HASH_ASM_TYPE: HashCodeCustomizer
                    /**
                     * @deprecated this customizer might result in unexpected class leak since key object still holds a strong reference to the Object and class.
                     *  It is recommended to have pre-processing method that would strip Objects and represent Classes as Strings
                     */
                    // @ts-ignore
                    readonly OBJECT_BY_CLASS: Customizer
                    // @ts-ignore
                    create(keyInterface: java.lang.Class): org.springframework.cglib.core.KeyFactory
                    // @ts-ignore
                    create(keyInterface: java.lang.Class, customizer: Customizer): org.springframework.cglib.core.KeyFactory
                    // @ts-ignore
                    create(keyInterface: java.lang.Class, first: KeyFactoryCustomizer, next: Array<KeyFactoryCustomizer>): org.springframework.cglib.core.KeyFactory
                    // @ts-ignore
                    create(loader: java.lang.ClassLoader, keyInterface: java.lang.Class, customizer: Customizer): org.springframework.cglib.core.KeyFactory
                    // @ts-ignore
                    create(loader: java.lang.ClassLoader, keyInterface: java.lang.Class, customizer: KeyFactoryCustomizer, next: Array<KeyFactoryCustomizer>): org.springframework.cglib.core.KeyFactory
                }
            }
        }
    }
}
