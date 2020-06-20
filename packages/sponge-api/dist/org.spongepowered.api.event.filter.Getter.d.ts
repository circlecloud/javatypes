declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace filter {
                    /**
                     * Annotates a parameter in an event listener whose value should be fetched from
                     * a getter on the event type with the specified name.
                     * <p>For example if the event type has a method 'T getObject();' then you would
                     * annotate a parameter of type T with '@Getter("getObject")'.</p>
                     * <p>For optional types the value of the parameter can be either
                     * {@link Optional} or the type of the enclosed object. If the type is the
                     * enclosed type then the optional will be automatically unwrapped and if the
                     * optional is not present then your event listener will not be called.</p>
                     */
                    // @ts-ignore
                    class Getter implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
