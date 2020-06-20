declare namespace javax {
    namespace annotation {
        /**
         * The Resource annotation marks a resource that is needed
         * by the application.  This annotation may be applied to an
         * application component class, or to fields or methods of the
         * component class.  When the annotation is applied to a
         * field or method, the container will inject an instance
         * of the requested resource into the application component
         * when the component is initialized.  If the annotation is
         * applied to the component class, the annotation declares a
         * resource that the application will look up at runtime. <p>
         * Even though this annotation is not marked Inherited, deployment
         * tools are required to examine all superclasses of any component
         * class to discover all uses of this annotation in all superclasses.
         * All such annotation instances specify resources that are needed
         * by the application component.  Note that this annotation may
         * appear on private fields and methods of superclasses; the container
         * is required to perform injection in these cases as well.
         * @since Common Annotations 1.0
         */
        // @ts-ignore
        class Resource implements java.lang.annotation.Annotation {
        }
    }
}
