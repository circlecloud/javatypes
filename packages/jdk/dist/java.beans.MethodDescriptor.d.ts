declare namespace java {
    namespace beans {
        /**
         * A MethodDescriptor describes a particular method that a Java Bean
         * supports for external access from other components.
         */
        // @ts-ignore
        class MethodDescriptor extends java.beans.FeatureDescriptor {
            /**
             * Constructs a <code>MethodDescriptor</code> from a
             * <code>Method</code>.
             * @param method    The low-level method information.
             */
            // @ts-ignore
            constructor(method: java.lang.reflect.Method)
            /**
             * Constructs a <code>MethodDescriptor</code> from a
             * <code>Method</code> providing descriptive information for each
             * of the method's parameters.
             * @param method    The low-level method information.
             * @param parameterDescriptors  Descriptive information for each of the
             *                           method's parameters.
             */
            // @ts-ignore
            constructor(method: java.lang.reflect.Method, parameterDescriptors: java.beans.ParameterDescriptor[])
            /**
             * Gets the method that this MethodDescriptor encapsulates.
             * @return The low-level description of the method
             */
            // @ts-ignore
            getMethod(): java.lang.reflect.Method
            /**
             * Gets the ParameterDescriptor for each of this MethodDescriptor's
             * method's parameters.
             * @return The locale-independent names of the parameters.  May return
             *           a null array if the parameter names aren't known.
             */
            // @ts-ignore
            getParameterDescriptors(): java.beans.ParameterDescriptor[]
        }
    }
}
