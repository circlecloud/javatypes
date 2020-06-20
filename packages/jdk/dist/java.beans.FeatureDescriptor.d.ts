declare namespace java {
    namespace beans {
        /**
         * The FeatureDescriptor class is the common baseclass for PropertyDescriptor,
         * EventSetDescriptor, and MethodDescriptor, etc.
         * <p>
         * It supports some common information that can be set and retrieved for
         * any of the introspection descriptors.
         * <p>
         * In addition it provides an extension mechanism so that arbitrary
         * attribute/value pairs can be associated with a design feature.
         */
        // @ts-ignore
        class FeatureDescriptor extends java.lang.Object {
            /**
             * Constructs a <code>FeatureDescriptor</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * Gets the programmatic name of this feature.
             * @return The programmatic name of the property/method/event
             */
            // @ts-ignore
            getName(): java.lang.String
            /**
             * Sets the programmatic name of this feature.
             * @param name  The programmatic name of the property/method/event
             */
            // @ts-ignore
            setName(name: string): void
            /**
             * Gets the localized display name of this feature.
             * @return The localized display name for the property/method/event.
             *   This defaults to the same as its programmatic name from getName.
             */
            // @ts-ignore
            getDisplayName(): java.lang.String
            /**
             * Sets the localized display name of this feature.
             * @param displayName  The localized display name for the
             *           property/method/event.
             */
            // @ts-ignore
            setDisplayName(displayName: string): void
            /**
             * The "expert" flag is used to distinguish between those features that are
             * intended for expert users from those that are intended for normal users.
             * @return True if this feature is intended for use by experts only.
             */
            // @ts-ignore
            isExpert(): boolean
            /**
             * The "expert" flag is used to distinguish between features that are
             * intended for expert users from those that are intended for normal users.
             * @param expert True if this feature is intended for use by experts only.
             */
            // @ts-ignore
            setExpert(expert: boolean): void
            /**
             * The "hidden" flag is used to identify features that are intended only
             * for tool use, and which should not be exposed to humans.
             * @return True if this feature should be hidden from human users.
             */
            // @ts-ignore
            isHidden(): boolean
            /**
             * The "hidden" flag is used to identify features that are intended only
             * for tool use, and which should not be exposed to humans.
             * @param hidden  True if this feature should be hidden from human users.
             */
            // @ts-ignore
            setHidden(hidden: boolean): void
            /**
             * The "preferred" flag is used to identify features that are particularly
             * important for presenting to humans.
             * @return True if this feature should be preferentially shown to human users.
             */
            // @ts-ignore
            isPreferred(): boolean
            /**
             * The "preferred" flag is used to identify features that are particularly
             * important for presenting to humans.
             * @param preferred  True if this feature should be preferentially shown
             *                    to human users.
             */
            // @ts-ignore
            setPreferred(preferred: boolean): void
            /**
             * Gets the short description of this feature.
             * @return A localized short description associated with this
             *    property/method/event.  This defaults to be the display name.
             */
            // @ts-ignore
            getShortDescription(): java.lang.String
            /**
             * You can associate a short descriptive string with a feature.  Normally
             * these descriptive strings should be less than about 40 characters.
             * @param text  A (localized) short description to be associated with
             *  this property/method/event.
             */
            // @ts-ignore
            setShortDescription(text: string): void
            /**
             * Associate a named attribute with this feature.
             * @param attributeName  The locale-independent name of the attribute
             * @param value  The value.
             */
            // @ts-ignore
            setValue(attributeName: string, value: any): void
            /**
             * Retrieve a named attribute with this feature.
             * @param attributeName  The locale-independent name of the attribute
             * @return The value of the attribute.  May be null if
             *      the attribute is unknown.
             */
            // @ts-ignore
            getValue(attributeName: string): java.lang.Object
            /**
             * Gets an enumeration of the locale-independent names of this
             * feature.
             * @return An enumeration of the locale-independent names of any
             *     attributes that have been registered with setValue.
             */
            // @ts-ignore
            attributeNames(): java.util.Enumeration<java.lang.String>
            /**
             * Returns a string representation of the object.
             * @return a string representation of the object
             * @since 1.7
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
