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
            public getName(): string
            /**
             * Sets the programmatic name of this feature.
             * @param name  The programmatic name of the property/method/event
             */
            // @ts-ignore
            public setName(name: java.lang.String | string): void
            /**
             * Gets the localized display name of this feature.
             * @return The localized display name for the property/method/event.
             *   This defaults to the same as its programmatic name from getName.
             */
            // @ts-ignore
            public getDisplayName(): string
            /**
             * Sets the localized display name of this feature.
             * @param displayName  The localized display name for the
             *           property/method/event.
             */
            // @ts-ignore
            public setDisplayName(displayName: java.lang.String | string): void
            /**
             * The "expert" flag is used to distinguish between those features that are
             * intended for expert users from those that are intended for normal users.
             * @return True if this feature is intended for use by experts only.
             */
            // @ts-ignore
            public isExpert(): boolean
            /**
             * The "expert" flag is used to distinguish between features that are
             * intended for expert users from those that are intended for normal users.
             * @param expert True if this feature is intended for use by experts only.
             */
            // @ts-ignore
            public setExpert(expert: boolean): void
            /**
             * The "hidden" flag is used to identify features that are intended only
             * for tool use, and which should not be exposed to humans.
             * @return True if this feature should be hidden from human users.
             */
            // @ts-ignore
            public isHidden(): boolean
            /**
             * The "hidden" flag is used to identify features that are intended only
             * for tool use, and which should not be exposed to humans.
             * @param hidden  True if this feature should be hidden from human users.
             */
            // @ts-ignore
            public setHidden(hidden: boolean): void
            /**
             * The "preferred" flag is used to identify features that are particularly
             * important for presenting to humans.
             * @return True if this feature should be preferentially shown to human users.
             */
            // @ts-ignore
            public isPreferred(): boolean
            /**
             * The "preferred" flag is used to identify features that are particularly
             * important for presenting to humans.
             * @param preferred  True if this feature should be preferentially shown
             *                    to human users.
             */
            // @ts-ignore
            public setPreferred(preferred: boolean): void
            /**
             * Gets the short description of this feature.
             * @return A localized short description associated with this
             *    property/method/event.  This defaults to be the display name.
             */
            // @ts-ignore
            public getShortDescription(): string
            /**
             * You can associate a short descriptive string with a feature.  Normally
             * these descriptive strings should be less than about 40 characters.
             * @param text  A (localized) short description to be associated with
             *  this property/method/event.
             */
            // @ts-ignore
            public setShortDescription(text: java.lang.String | string): void
            /**
             * Associate a named attribute with this feature.
             * @param attributeName  The locale-independent name of the attribute
             * @param value  The value.
             */
            // @ts-ignore
            public setValue(attributeName: java.lang.String | string, value: java.lang.Object | any): void
            /**
             * Retrieve a named attribute with this feature.
             * @param attributeName  The locale-independent name of the attribute
             * @return The value of the attribute.  May be null if
             *      the attribute is unknown.
             */
            // @ts-ignore
            public getValue(attributeName: java.lang.String | string): any
            /**
             * Gets an enumeration of the locale-independent names of this
             * feature.
             * @return An enumeration of the locale-independent names of any
             *     attributes that have been registered with setValue.
             */
            // @ts-ignore
            public attributeNames(): java.util.Enumeration<java.lang.String | string>
            /**
             * Returns a string representation of the object.
             * @return a string representation of the object
             * @since 1.7
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
