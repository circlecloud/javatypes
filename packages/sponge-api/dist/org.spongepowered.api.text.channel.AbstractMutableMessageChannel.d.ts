declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    /**
                     * An abstract implementation of {@link MutableMessageChannel}.
                     */
                    // @ts-ignore
                    abstract class AbstractMutableMessageChannel extends java.lang.Object implements org.spongepowered.api.text.channel.MutableMessageChannel {
                        /**
                         * The default implementation uses a {@link WeakHashMap} implementation of {@link Set}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a new instance of {@link AbstractMutableMessageChannel} with the
                         * provided {@link Collection} as the underlying member list.
                         * <p>The passed {@link Collection} directly affects the members of this
                         * channel.</p>
                         * <p>It is recommended to use a weak collection to avoid memory leaks. If
                         * you do not use a weak collection, please ensure that members are  cleaned
                         * up properly.</p>
                         * @param members The collection of members
                         */
                        // @ts-ignore
                        constructor(members: java.util.Collection<org.spongepowered.api.text.channel.MessageReceiver> | Array<org.spongepowered.api.text.channel.MessageReceiver>)
                        // @ts-ignore
                        readonly members: java.util.Collection<org.spongepowered.api.text.channel.MessageReceiver> | Array<org.spongepowered.api.text.channel.MessageReceiver>
                        // @ts-ignore
                        public addMember(member: org.spongepowered.api.text.channel.MessageReceiver): boolean
                        // @ts-ignore
                        public removeMember(member: org.spongepowered.api.text.channel.MessageReceiver): boolean
                        // @ts-ignore
                        public clearMembers(): void
                        // @ts-ignore
                        public getMembers(): Array<org.spongepowered.api.text.channel.MessageReceiver>
                    }
                }
            }
        }
    }
}
