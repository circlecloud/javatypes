declare namespace java {
    namespace beans {
        /**
         * This is a support class to make it easier for people to provide
         * BeanInfo classes.
         * <p>
         * It defaults to providing "noop" information, and can be selectively
         * overriden to provide more explicit information on chosen topics.
         * When the introspector sees the "noop" values, it will apply low
         * level introspection and design patterns to automatically analyze
         * the target bean.
         */
        // @ts-ignore
        class SimpleBeanInfo extends java.lang.Object implements java.beans.BeanInfo {
            // @ts-ignore
            constructor()
            /**
             * Deny knowledge about the class and customizer of the bean.
             * You can override this if you wish to provide explicit info.
             */
            // @ts-ignore
            getBeanDescriptor(): java.beans.BeanDescriptor
            /**
             * Deny knowledge of properties. You can override this
             * if you wish to provide explicit property info.
             */
            // @ts-ignore
            getPropertyDescriptors(): java.beans.PropertyDescriptor[]
            /**
             * Deny knowledge of a default property. You can override this
             * if you wish to define a default property for the bean.
             */
            // @ts-ignore
            getDefaultPropertyIndex(): int
            /**
             * Deny knowledge of event sets. You can override this
             * if you wish to provide explicit event set info.
             */
            // @ts-ignore
            getEventSetDescriptors(): java.beans.EventSetDescriptor[]
            /**
             * Deny knowledge of a default event. You can override this
             * if you wish to define a default event for the bean.
             */
            // @ts-ignore
            getDefaultEventIndex(): int
            /**
             * Deny knowledge of methods. You can override this
             * if you wish to provide explicit method info.
             */
            // @ts-ignore
            getMethodDescriptors(): java.beans.MethodDescriptor[]
            /**
             * Claim there are no other relevant BeanInfo objects.  You
             * may override this if you want to (for example) return a
             * BeanInfo for a base class.
             */
            // @ts-ignore
            getAdditionalBeanInfo(): java.beans.BeanInfo[]
            /**
             * Claim there are no icons available.  You can override
             * this if you want to provide icons for your bean.
             */
            // @ts-ignore
            getIcon(iconKind: number /*int*/): java.awt.Image
            /**
             * This is a utility method to help in loading icon images.
             * It takes the name of a resource file associated with the
             * current object's class file and loads an image object
             * from that file.  Typically images will be GIFs.
             * <p>
             * @param resourceName  A pathname relative to the directory
             *           holding the class file of the current class.  For example,
             *           "wombat.gif".
             * @return an image object.  May be null if the load failed.
             */
            // @ts-ignore
            loadImage(resourceName: string): java.awt.Image
        }
    }
}
