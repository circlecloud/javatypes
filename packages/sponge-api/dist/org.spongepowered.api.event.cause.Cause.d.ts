declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    /**
                     * A cause represents the reason or initiator of an event.
                     * <p>For example, if a block of sand is placed where it drops, the block of
                     * sand would create a falling sand entity, which then would place another block
                     * of sand. The block place event for the final block of sand would have the
                     * cause chain of the block of sand -&gt; falling sand entity.</p>
                     * <p>It is not possible to accurately describe the chain of causes in all
                     * scenarios so a best effort approach is generally acceptable. For example, a
                     * player might press a lever, activating a complex Redstone circuit, which
                     * would then launch TNT and cause the destruction of some blocks, but tracing
                     * this event would be too complicated and thus may not be attempted.</p>
                     */
                    // @ts-ignore
                    class Cause extends java.lang.Object implements java.lang.Iterable<java.lang.Object | any> {
                        /**
                         * Creates a new {@link Builder} to make a new {@link Cause}.
                         * @return The new builder
                         */
                        // @ts-ignore
                        public static builder(): org.spongepowered.api.event.cause.Cause.Builder
                        /**
                         * Constructs a new cause with the specified event context and cause.
                         * @param ctx The event context
                         * @param cause The direct object cause
                         * @return The constructed cause
                         */
                        // @ts-ignore
                        public static of(ctx: org.spongepowered.api.event.cause.EventContext, cause: java.lang.Object | any): org.spongepowered.api.event.cause.Cause
                        /**
                         * Constructs a new cause with the specified event context and causes.
                         * @param ctx The event context
                         * @param cause The direct object cause
                         * @param causes Other associated causes
                         * @return The built cause
                         */
                        // @ts-ignore
                        public static of(ctx: org.spongepowered.api.event.cause.EventContext, cause: java.lang.Object | any, ...causes: java.lang.Object[] | any[]): org.spongepowered.api.event.cause.Cause
                        /**
                         * Constructs a new cause with the specified event context and causes.
                         * @param ctx The event context
                         * @param iterable The associated causes
                         * @return The built cause
                         */
                        // @ts-ignore
                        public static of(ctx: org.spongepowered.api.event.cause.EventContext, iterable: java.lang.Iterable<java.lang.Object | any>): org.spongepowered.api.event.cause.Cause
                        /**
                         * Gets the event context relating to this cause.
                         * @return The event context
                         */
                        // @ts-ignore
                        public getContext(): org.spongepowered.api.event.cause.EventContext
                        /**
                         * Gets the root {@link Object} of this cause.
                         * @return The root object cause for this cause
                         */
                        // @ts-ignore
                        public root(): any
                        /**
                         * Gets the first <code>T</code> object of this {@link Cause}, if available.
                         * @param target The class of the target type
                         * @param <T> The type of object being queried for
                         * @return The first element of the type, if available
                         */
                        // @ts-ignore
                        public first<T>(target: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Gets the last object instance of the {@link Class} of type
                         * <code>T</code>.
                         * @param target The class of the target type
                         * @param <T> The type of object being queried for
                         * @return The last element of the type, if available
                         */
                        // @ts-ignore
                        public last<T>(target: java.lang.Class<T>): java.util.Optional<T>
                        /**
                         * Gets the object immediately before the object that is an instance of the
                         * {@link Class} passed in.
                         * @param clazz The class of the object
                         * @return The object
                         */
                        // @ts-ignore
                        public before(clazz: java.lang.Class<any>): java.util.Optional<any>
                        /**
                         * Gets the object immediately after the object that is an instance of the
                         * {@link Class} passed in.
                         * @param clazz The class to type check
                         * @return The object after, if available
                         */
                        // @ts-ignore
                        public after(clazz: java.lang.Class<any>): java.util.Optional<any>
                        /**
                         * Returns whether the target class matches any object of this {@link Cause}
                         * .
                         * @param target The class of the target type
                         * @return True if found, false otherwise
                         */
                        // @ts-ignore
                        public containsType(target: java.lang.Class<any>): boolean
                        /**
                         * Checks if this cause contains of any of the provided {@link Object}. This
                         * is the equivalent to checking based on {@link #equals(Object)} for each
                         * object in this cause.
                         * @param object The object to check if it is contained
                         * @return True if the object is contained within this cause
                         */
                        // @ts-ignore
                        public contains(object: java.lang.Object | any): boolean
                        /**
                         * Gets an {@link ImmutableList} of all objects that are instances of the
                         * given {@link Class} type <code>T</code>.
                         * @param <T> The type of objects to query for
                         * @param target The class of the target type
                         * @return An immutable list of the objects queried
                         */
                        // @ts-ignore
                        public allOf<T>(target: java.lang.Class<T>): Array<T>
                        /**
                         * Gets an immutable {@link List} with all object causes that are not
                         * instances of the provided {@link Class}.
                         * @param ignoredClass The class of object types to ignore
                         * @return The list of objects not an instance of the provided class
                         */
                        // @ts-ignore
                        public noneOf(ignoredClass: java.lang.Class<any>): Array<java.lang.Object | any>
                        /**
                         * Gets an {@link List} of all causes within this {@link Cause}.
                         * @return An immutable list of all the causes
                         */
                        // @ts-ignore
                        public all(): Array<java.lang.Object | any>
                        /**
                         * Creates a new {@link Cause} where the objects are added at the end of the
                         * cause array of objects.
                         * @param additional The additional object to add
                         * @return The new cause
                         */
                        // @ts-ignore
                        public with(additional: java.lang.Object | any): org.spongepowered.api.event.cause.Cause
                        /**
                         * Creates a new {@link Cause} where the objects are added at the end of the
                         * cause array of objects.
                         * @param additional The additional object to add
                         * @param additionals The remaining objects to add
                         * @return The new cause
                         */
                        // @ts-ignore
                        public with(additional: java.lang.Object | any, ...additionals: java.lang.Object[] | any[]): org.spongepowered.api.event.cause.Cause
                        /**
                         * Creates a new {@link Cause} where the objects are added at the end of the
                         * cause array of objects.
                         * @param iterable The additional objects
                         * @return The new cause
                         */
                        // @ts-ignore
                        public with(iterable: java.lang.Iterable<java.lang.Object | any>): org.spongepowered.api.event.cause.Cause
                        /**
                         * Merges this cause with the other cause.
                         * @param cause The cause to merge with this
                         * @return The new merged cause
                         */
                        // @ts-ignore
                        public with(cause: org.spongepowered.api.event.cause.Cause): org.spongepowered.api.event.cause.Cause
                        // @ts-ignore
                        public iterator(): java.util.Iterator<java.lang.Object | any>
                        // @ts-ignore
                        public equals(object: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
