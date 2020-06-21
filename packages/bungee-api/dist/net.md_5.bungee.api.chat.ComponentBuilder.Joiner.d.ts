declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    namespace ComponentBuilder {
                        /**
                         * Functional interface to join additional components to a ComponentBuilder.
                         */
                        // @ts-ignore
                        interface Joiner {
                            /**
                             * Joins additional components to the provided {@link ComponentBuilder}
                             * and then returns it to fulfill a chain pattern.
                             * Retention may be ignored and is to be understood as an optional
                             * recommendation to the Joiner and not as a guarantee to have a
                             * previous component in builder unmodified.
                             * @param componentBuilder to which to append additional components
                             * @param retention the formatting to possibly retain
                             * @return input componentBuilder for chaining
                             */
                            // @ts-ignore
                            join(componentBuilder: net.md_5.bungee.api.chat.ComponentBuilder, retention: net.md_5.bungee.api.chat.ComponentBuilder.FormatRetention): net.md_5.bungee.api.chat.ComponentBuilder
                        }
                    }
                }
            }
        }
    }
}
