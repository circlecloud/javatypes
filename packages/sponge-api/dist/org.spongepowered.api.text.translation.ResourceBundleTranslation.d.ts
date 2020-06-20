declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace translation {
                    /**
                     * <p>A translation class designed to be used for ResourceBundles. For
                     * convenience, most users will want to wrap this in a class that keeps track of
                     * resource bundles. A simple implementation would look like:</p>
                     * <blockquote><code>public class TranslationHelper {<br />&nbsp; &nbsp; private
                     * static final Function&lt;Locale, ResourceBundle&gt; LOOKUP_FUNC = new
                     * Function&lt;Locale, ResourceBundle&gt;() {<br />&nbsp; &nbsp; &nbsp; &nbsp;
                     * &#064;Nullable &#064;Override<br />&nbsp; &nbsp; &nbsp; &nbsp; public
                     * ResourceBundle apply(Locale input) {<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                     * &nbsp; return ResourceBundle.getBundle("com.mydomain.myplugin.Translations",
                     * input);<br /> &nbsp; &nbsp; &nbsp; &nbsp; }<br />&nbsp; &nbsp; };<br /><br />
                     * &nbsp; &nbsp; private TranslationHelper() {} // Prevent instance creation
                     * <br /><br />&nbsp; &nbsp; public static Text t(String key, Object... args) {
                     * <br />&nbsp; &nbsp; &nbsp; &nbsp; return Texts.of(new
                     * ResourceBundleTranslation(key, LOOKUP_FUNC), args);<br />&nbsp; &nbsp; }
                     * <br />}</code></blockquote>
                     */
                    // @ts-ignore
                    class ResourceBundleTranslation extends java.lang.Object implements org.spongepowered.api.text.translation.Translation {
                        /**
                         * Create a ResourceBundle-backed translation for the given key and bundle
                         * factory.
                         * @param key The key to use
                         * @param bundleFunction The bundle function to get a bundle from
                         */
                        // @ts-ignore
                        constructor(key: string, bundleFunction: java.util.function.Function<java.util.Locale, java.util.ResourceBundle> | java.util.function$.Function<java.util.Locale, java.util.ResourceBundle>)
                        // @ts-ignore
                        getId(): java.lang.String
                        // @ts-ignore
                        get(locale: java.util.Locale): java.lang.String
                        // @ts-ignore
                        get(locale: java.util.Locale, ...args: any[]): java.lang.String
                    }
                }
            }
        }
    }
}
